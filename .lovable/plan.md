## Sharable plan links, legal cleanup, AI blog

### 1. Shareable plan URLs (`/preise#3m`, `#6m`, `#12m`, `#24m`)
- `PricingTabs` reads `window.location.hash` on mount + on `hashchange` and selects the matching plan (default `12m`).
- Clicking a tab updates the hash via `history.replaceState` (no page jump).
- Add IDs to tab buttons so anchor scroll works on `/preise#12m`.
- Homepage tabs also accept hashes; same component.

### 2. Remove legal pages
Delete and unlink:
- `src/routes/agb.tsx`
- `src/routes/datenschutz.tsx`
- `src/routes/impressum.tsx`

Update `src/components/Footer.tsx` to drop the three legal links. Keep contact/FAQ.

> Note: Impressum is legally required in Germany; user accepted the risk.

### 3. Blog with 3 seed articles + daily AI generation

#### Backend
- Enable Lovable Cloud.
- Migration: create table `blog_posts`
  ```
  id uuid pk default gen_random_uuid()
  slug text unique not null
  title text not null
  excerpt text not null
  body text not null            -- markdown / plain with double newlines
  topic text not null           -- short topic key for dedupe
  published_at timestamptz not null default now()
  source text not null default 'ai'  -- 'seed' | 'ai'
  ```
- RLS: enable, public `select` policy (read-only public blog). No insert/update/delete from client.
- Insert 3 seed articles via insert tool (German, SEO-chunk style: H2 sections, bullet/table, named entities in **bold**, 80–120 word chunks). Topics: "IPTV Anbieter Vergleich 2026", "Bundesliga per IPTV streamen", "Fire TV Stick einrichten".

#### Server functions (`src/lib/blog.functions.ts`)
- `listPosts()` — public, returns latest published posts (id, slug, title, excerpt, published_at).
- `getPost(slug)` — public, returns single post.
- `generateDailyPost()` — POST, no auth needed (cron-only); guarded with shared `BLOG_CRON_SECRET` header. Steps:
  1. Fetch last 30 post titles+topics.
  2. Call Lovable AI (`google/gemini-3-flash-preview`) via `@ai-sdk/openai-compatible` provider helper to generate a unique German SEO-chunk article. System prompt enforces: H2 (topical, not question), 80–120 words per chunk, ≥1 list/table per chunk, named entities in `**bold**`, no duplicate topic vs. provided list, German only. Output JSON `{ title, slug, excerpt, body, topic }` via `Output.object` schema.
  3. Slugify + dedupe (retry up to 2 times if topic/slug collides).
  4. Insert into `blog_posts`.
  5. Return `{ slug }`.
- Helper `src/lib/ai-gateway.ts` with the standard Lovable AI Gateway provider.

#### Cron
- Public route `src/routes/api/public/blog-cron.ts` (`/api/public/blog-cron`) — POST handler verifies `x-cron-secret` header against `BLOG_CRON_SECRET` env, then invokes the generation logic. Stable URL works with pg_cron / external scheduler.
- Add `BLOG_CRON_SECRET` via secrets tool (random 32-byte hex).
- Schedule via Supabase pg_cron (migration enabling `pg_cron` + `pg_net`, then `cron.schedule('daily-iptv-blog', '0 6 * * *', $$ select net.http_post(url:='https://project--<id>.lovable.app/api/public/blog-cron', headers:=jsonb_build_object('x-cron-secret', '<secret>')) $$);`). I'll wire this in the migration.

#### Frontend updates
- `src/routes/blog.tsx`:
  - Remove the static `posts` array.
  - Use `loader: () => listPosts()` (server fn safe on public route).
  - Render full list (already a list, will iterate DB rows).
- `src/routes/blog.$slug.tsx`:
  - `loader: ({ params }) => getPost(params.slug)`.
  - Render `body` with simple markdown-ish whitespace (already does whitespace-pre-line). Bold via `<strong>` is preserved as raw text — so render with a tiny inline parser that converts `**...**` to `<strong>` and `## ...` to `<h2>`. Implement a small `renderMarkdown` util (no new dep), keep tags allowlisted.
- Add `/blog` link to Header (already exists).

### 4. Verify pages exist & filled
After above, confirm content on: `/`, `/preise`, `/kanaele`, `/anleitungen`, each `/anleitungen/$device`, `/blog`, `/faq`, `/kontakt`. No empty pages. (Already populated; spot-check only.)

### Out of scope
- No auth (blog is public read-only).
- No admin UI to edit/delete posts (DB-only management for now).
- No image generation per post (text-only articles to keep AI cost down).
