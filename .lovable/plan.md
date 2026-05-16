## Problems detected by the rich-results validator

1. **`isPartOf` invalid target** — `WebPage#webpage.isPartOf` references `#organization` (a `ProfessionalService`). `isPartOf` on `WebPage` expects a `CreativeWork`, typically a `WebSite`.
2. **`contactPoint` not allowed on `Service`** — `#service-support` has a `contactPoint`, which is only valid on `Organization`/`Person`. The Organization already carries the correct `contactPoint`.
3. **Only 2 schemas detected (should be 3)** — the validator picks up `FAQPage` and `BreadcrumbList` (emitted from `src/routes/index.tsx` via TanStack's `head().scripts`) but misses the big `@graph` (Organization + WebPage + Person) because it's injected manually with `dangerouslySetInnerHTML` inside `RootShell`, before `<HeadContent />` renders the per-route scripts. Some crawlers/validators stop at the first ld+json block when the surrounding markup confuses them.

## Fixes (all in `src/routes/__root.tsx`)

**A. Add a `WebSite` node and re-wire `isPartOf`**
- Insert a new `@graph` entry:
  ```
  {
    "@type": "WebSite",
    "@id": "https://iptvs-anbieter.de/#website",
    url: "https://iptvs-anbieter.de/",
    name: "IPTV Anbieter",
    inLanguage: "de-DE",
    publisher: { "@id": "https://iptvs-anbieter.de/#organization" },
  }
  ```
- Change `WebPage#webpage.isPartOf` from `{ "@id": ".../#organization" }` to `{ "@id": ".../#website" }`.

**B. Remove invalid `contactPoint` from Service**
- In `#service-support`, delete the `contactPoint` block (lines 373–378). Keep `hoursAvailable` and `availableLanguage` — those are valid on `Service`.

**C. Emit the sitewide `@graph` via TanStack `head().scripts` instead of `dangerouslySetInnerHTML`**
- Remove the inline `<script type="application/ld+json" dangerouslySetInnerHTML=...>` from `RootShell`.
- Add it to the root route's `head()` return:
  ```
  scripts: [
    { type: "application/ld+json", children: JSON.stringify(SITE_JSONLD) },
  ],
  ```
- This way all three JSON-LD blocks (Organization graph, FAQPage, BreadcrumbList) are emitted by the same `<HeadContent />` pipeline and validators reliably parse all of them.

## Files touched
- `src/routes/__root.tsx` only.

## Verification
After the edits, re-run the rich-results test on `https://iptvs-anbieter.de/`:
- "Détectés" should show **3 items**: Organization (ProfessionalService), FAQPage, BreadcrumbList.
- The two flagged errors (`isPartOf` target, `contactPoint` on Service) should disappear.
