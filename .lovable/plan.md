## Goal
Verify `https://iptvs-anbieter.de/` in Google Search Console using the META method, add it as a Search Console property, submit the sitemap, and bake the absolute domain into the sitemap output.

## Prerequisites (you must confirm before I run)
- The domain **iptvs-anbieter.de** is already connected in Lovable (Project Settings → Domains) and the project is **published** at that domain.
- DNS is live and the site serves real HTML at https://iptvs-anbieter.de/.

If not published yet at this domain, the verification step will fail with `failedToFindMetaTag` — Google fetches the live URL and won't see the meta tag until the deploy is live.

## Steps

### 1. Get verification token from Google
Run a curl against the Site Verification API to request a META token for `https://iptvs-anbieter.de/`.

### 2. Add the meta tag to `<head>`
Edit `src/routes/__root.tsx`. Add one entry to the existing `head().meta` array:
```ts
{ name: "google-site-verification", content: "<TOKEN FROM STEP 1>" }
```
This renders inside `<head>` via `<HeadContent />` on every page (including `/`), which is what Google fetches.

### 3. Set the absolute base URL on the sitemap
Edit `src/routes/sitemap[.]xml.ts`:
- Change `const BASE_URL = "";` → `const BASE_URL = "https://iptvs-anbieter.de";`
- Remove the TODO comment.

This makes `<loc>` entries absolute, which is required for Search Console sitemap submission.

### 4. You publish (frontend change)
After step 2 + 3, you click **Publish → Update** so the meta tag and the new sitemap go live. Tell me when it's deployed.

### 5. Verify with Google
I curl the Site Verification API to ask Google to fetch and confirm the meta tag. Expected: 200 OK.

### 6. Add the property to Search Console
I curl `PUT /webmasters/v3/sites/<encoded-url>` to register `https://iptvs-anbieter.de/` as a Search Console property.

### 7. Submit the sitemap
I curl `PUT /webmasters/v3/sites/<encoded-url>/sitemaps/<encoded-sitemap-url>` to submit `https://iptvs-anbieter.de/sitemap.xml`.

## Files touched
- `src/routes/__root.tsx` — add one meta entry (verification token)
- `src/routes/sitemap[.]xml.ts` — set `BASE_URL`

## Notes
- Verification only needs to succeed once. The meta tag should stay in `<head>` permanently — removing it can un-verify the property later.
- Robots.txt is fine as-is; Google discovers `/sitemap.xml` at the well-known path and we also explicitly submit it in step 7.
