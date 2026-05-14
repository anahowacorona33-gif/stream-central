## Issue
Right now the Organization JSON-LD lives in `head().scripts` on the root route. In TanStack Start, that array is rendered by `<Scripts />` — which sits in `<body>`, not `<head>`. You asked for it in the header (`<head>`).

## Fix
Move the JSON-LD out of `head().scripts` and render it inline inside the `<head>` element of `RootShell` in `src/routes/__root.tsx`, using `dangerouslySetInnerHTML` on a `<script type="application/ld+json">` tag. This guarantees it ends up inside `<head>` on every page (SSR + client).

## Steps
1. In `src/routes/__root.tsx`:
   - Extract the JSON-LD object into a module-level `const ORGANIZATION_JSONLD` (same content as today, unchanged).
   - Remove the `scripts: [...]` entry from the root `head()` return.
   - In `RootShell`'s `<head>`, after `<HeadContent />`, add:
     ```tsx
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
     />
     ```
2. No other files change. Schema content stays identical (Organization, knowsAbout entities, hasOfferCatalog with the 4 offers, sameAs, contactPoint).

## Files touched
- **edit** `src/routes/__root.tsx`
