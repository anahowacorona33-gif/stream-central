## Revised plan (no extra secret needed)

Cron will call `/api/public/blog-cron` with the existing Supabase anon key in the `apikey` header — no `BLOG_CRON_SECRET` to add.

### Already done
- `/preise#3m`, `#6m`, `#12m`, `#24m` hash links in `PricingTabs`.
- Deleted `agb.tsx`, `datenschutz.tsx`, `impressum.tsx` and removed footer links.
- Created `blog_posts` table (public read-only RLS) + enabled `pg_cron` & `pg_net`.

### Remaining

1. **Seed 3 blog articles** (German, SEO-chunk format, source='seed') via insert tool.
   - Topics: "IPTV Anbieter Vergleich 2026", "Bundesliga per IPTV streamen", "Fire TV Stick einrichten".
   - Body uses `## H2`, `**bold**` for entities, lists/tables, 80–120 word chunks.

2. **Server functions** `src/lib/blog.functions.ts`:
   - `listPosts()` → returns id, slug, title, excerpt, published_at (latest first).
   - `getPost(slug)` → single post.

3. **Cron endpoint** `src/routes/api/public/blog-cron.ts`:
   - POST handler. Validates `apikey` header against `SUPABASE_PUBLISHABLE_KEY`.
   - Reads last 30 post titles+topics for dedupe.
   - Calls Lovable AI (`google/gemini-3-flash-preview`) via Lovable AI Gateway (`@ai-sdk/openai-compatible` + `LOVABLE_API_KEY`) with `Output.object` for structured `{ title, slug, excerpt, body, topic }`.
   - Strict system prompt: German, SEO-chunk style, no overlap with provided list, brand voice.
   - Inserts via service-role client. Retries up to 2x on slug/topic collision.
   - Returns `{ slug }` or 4xx/5xx with details.

4. **Schedule cron** via `insert` tool:
   ```sql
   select cron.schedule(
     'daily-iptv-blog',
     '0 6 * * *',
     $$ select net.http_post(
       url := 'https://project--c3430f45-38de-4dbf-bb7e-eed00b41a3e1.lovable.app/api/public/blog-cron',
       headers := '{"Content-Type":"application/json","apikey":"<ANON_KEY>"}'::jsonb,
       body := '{}'::jsonb
     ); $$
   );
   ```

5. **Frontend**:
   - `src/routes/blog.tsx` → loader calls `listPosts()`, renders DB rows.
   - `src/routes/blog.$slug.tsx` → loader calls `getPost(params.slug)`, renders body with a tiny inline `**bold**` + `## h2` parser.

6. **Add an npm dep**: `@ai-sdk/openai-compatible` and `ai` if not present.

### Out of scope
- No admin UI to edit/delete posts.
- No images per post.
- No `BLOG_CRON_SECRET` (uses existing anon key instead).
