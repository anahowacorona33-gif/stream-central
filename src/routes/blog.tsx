import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { listPosts } from "@/lib/blog.functions";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "IPTVs Anbieter Blog & Ratgeber" },
      { name: "description", content: "IPTVs Anbieter Blog mit Tipps, Anleitungen und Hintergründen rund um IPTV, Streaming und Live-Sport. Täglich neue Artikel." },
      { property: "og:title", content: "IPTVs Anbieter Blog – Tipps, Geräte, Sport-Streaming" },
      { property: "og:description", content: "Aktuelle Artikel vom IPTVs Anbieter zu Setup, Smart TV, Fire TV Stick, 4K-Streaming und Live-Sport. Täglich neue Beiträge." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  loader: () => listPosts(),
  component: BlogLayout,
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Fehler beim Laden des Blogs</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded bg-primary px-4 py-2 text-sm text-primary-foreground">Erneut versuchen</button>
    </div>
  ),
});

function BlogLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/blog/$slug");
  if (isChild) return <Outlet />;

  const { posts } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl">IPTVs Anbieter Blog & Ratgeber</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Hilfreiche Artikel vom IPTVs Anbieter rund um Setup, Geräte, Sport-Streaming und mehr. Täglich kommt ein neuer KI-generierter Artikel hinzu.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-muted-foreground">Noch keine Artikel.</p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((p: { slug: string; title: string; excerpt: string; published_at: string }) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}>
              <Card className="group h-full border-border/60 bg-card/60 p-6 transition hover:border-primary/50">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(p.published_at).toLocaleDateString("de-DE")}
                </div>
                <h2 className="mt-2 font-display text-2xl group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Weiterlesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
