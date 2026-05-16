## Audit result

I HTTP-checked all 91 unique external URLs in the JSON-LD scripts. **84 return 200, 6 return 404, 2 are harmless** (font preconnect roots).

### Broken links (404) to fix

| Current URL | Fix |
|---|---|
| `de.wikipedia.org/wiki/Catch-up-TV` | → `en.wikipedia.org/wiki/Catch-up_TV` (no dewiki page exists) |
| `de.wikipedia.org/wiki/Geld-zur%C3%BCck-Garantie` | → `en.wikipedia.org/wiki/Money-back_guarantee` |
| `de.wikipedia.org/wiki/Infomir` | → `en.wikipedia.org/wiki/Infomir` |
| `de.wikipedia.org/wiki/Over-the-Top-Inhalt` | → `en.wikipedia.org/wiki/Over-the-top_media_service` |
| `de.wikipedia.org/wiki/RTL_(Fernsehsender)` | → `de.wikipedia.org/wiki/RTL_Television` |
| `de.wikipedia.org/wiki/Streaming-Medien` | → `de.wikipedia.org/wiki/Streaming_Media` |

### Not broken but worth cleaning up

- 3× `https://www.google.com/search?q=...&kponly` — these return 200 but `&kponly` is not a valid Google parameter; they just open a normal SERP, not a Knowledge Panel. They add no SEO value inside a `sameAs` array (Google ignores SERPs in entity stitching). **Recommend removing**.
- 2× `https://fonts.googleapis.com` and `https://fonts.gstatic.com` — used as `<link rel="preconnect">` roots. The 404 on the bare hostname is expected and harmless (browsers only open the connection, never request `/`). **Leave as-is.**

### All 80 Wikidata Q-IDs

Already verified label-for-label in the previous fix. Every Q-ID page returns 200 and points to the correct entity.

### Plan

1. Edit `src/routes/__root.tsx` to replace the 6 broken Wikipedia URLs with the working substitutes above (all occurrences via global string replace).
2. Remove the 3 `www.google.com/search?...&kponly` entries from the `sameAs` arrays.
3. Re-run the URL checker on the modified file to confirm 0 remaining 404s.

### Out of scope

- The Wayback URL `web.archive.org/web/20260514203741/...` is a real snapshot (today's date is May 16, 2026 — matches). Leaving it.
- Internal `#id` fragment URLs are JSON-LD anchors, not navigable URLs — no check needed.
