import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { generateText, Output } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const PostSchema = z.object({
  title: z.string().min(20).max(120),
  excerpt: z.string().min(60).max(220),
  topic: z.string().min(3).max(60),
  body: z.string().min(4000),
});

async function generatePost(existing: { title: string; topic: string }[]) {
  const lovableKey = process.env.LOVABLE_API_KEY;
  if (!lovableKey) throw new Error("LOVABLE_API_KEY missing");

  const gateway = createLovableAiGatewayProvider(lovableKey);
  const model = gateway("google/gemini-3-flash-preview");

  const blockList = existing
    .map((e) => `- "${e.title}" (Thema: ${e.topic})`)
    .join("\n");

  const system = `Du bist SEO-Redakteur für eine deutsche IPTV-Premium-Marke (über 20.000 Live-Sender, 145.000 Filme, 44.000 Serien, 4K UHD, ab 15€).
Schreibe einen ORIGINALEN, deutschsprachigen Blog-Artikel im SEO-Chunk-Format:
- 3 Sektionen, jede beginnt mit einer "## H2"-Überschrift (themenbezogen, KEINE Fragen).
- Jede Sektion enthält 80–120 Wörter Fließtext PLUS mindestens eine Liste oder Tabelle.
- Markiere Marken/Produkte/Geräte/Begriffe mit **Fettschrift** (z. B. **Fire TV Stick**, **Sky**, **DAZN**, **Bundesliga**).
- Klare, hilfreiche Sprache. Keine Übertreibungen, keine "Klicken Sie hier"-Floskeln.
- KEIN Aufruf zur Bestellung am Ende.
- KEIN H1 im body. Nur ## H2 und Inhalt.

Wichtig: Wähle ein Thema, das sich NICHT mit dieser Liste überschneidet:
${blockList}

Antworte mit JSON: { title, excerpt, topic, body }.
- title: SEO-optimierter Titel, 50–80 Zeichen.
- excerpt: 1–2 Sätze Meta-Description, 120–180 Zeichen.
- topic: kurzer Themen-Slug (z. B. "smart-tv-einrichtung").
- body: der komplette Markdown-Artikel (3 ## Sektionen).`;

  const { experimental_output } = await generateText({
    model,
    experimental_output: Output.object({ schema: PostSchema }),
    system,
    prompt: "Schreibe jetzt den Artikel.",
  });

  return experimental_output;
}

export const Route = createFileRoute("/api/public/blog-cron")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey =
          request.headers.get("apikey") ||
          request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");

        const expected = process.env.SUPABASE_PUBLISHABLE_KEY;
        if (!expected || apiKey !== expected) {
          return new Response(JSON.stringify({ error: "unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        const url = process.env.SUPABASE_URL!;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
        const admin = createClient(url, serviceKey, {
          auth: { autoRefreshToken: false, persistSession: false },
        });

        const { data: existing, error: listErr } = await admin
          .from("blog_posts")
          .select("title, topic, slug")
          .order("published_at", { ascending: false })
          .limit(30);

        if (listErr) {
          return new Response(
            JSON.stringify({ error: listErr.message }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        const existingSlugs = new Set((existing ?? []).map((e) => e.slug));
        const existingTopics = new Set(
          (existing ?? []).map((e) => e.topic.toLowerCase()),
        );

        let attempts = 0;
        let inserted: { slug: string; title: string } | null = null;
        let lastError = "";

        while (attempts < 3 && !inserted) {
          attempts++;
          try {
            const post = await generatePost(existing ?? []);
            let slug = slugify(post.title);
            if (!slug) slug = `post-${Date.now()}`;
            if (
              existingSlugs.has(slug) ||
              existingTopics.has(post.topic.toLowerCase())
            ) {
              lastError = "duplicate, retrying";
              continue;
            }

            const { error: insErr } = await admin.from("blog_posts").insert({
              slug,
              title: post.title,
              excerpt: post.excerpt,
              body: post.body,
              topic: post.topic,
              source: "ai",
            });
            if (insErr) {
              lastError = insErr.message;
              continue;
            }
            inserted = { slug, title: post.title };
          } catch (e) {
            lastError = e instanceof Error ? e.message : String(e);
          }
        }

        if (!inserted) {
          return new Response(
            JSON.stringify({ error: "generation_failed", detail: lastError }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(
          JSON.stringify({ ok: true, ...inserted }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      },
    },
  },
});
