## Two more JSON-LD validation errors on `Service` nodes

Validator output:
- `availableLanguage` is not valid on `Service` (schema.org defines it on `ContactPoint`, `LodgingBusiness`, etc. — not `Service`).
- `availableOnDevice` is not a schema.org property at all (it does not exist).

Both live inside the `@graph` in `src/routes/__root.tsx`.

## Fixes (in `src/routes/__root.tsx`)

**A. `#service-multidevice` (line ~318)**
- Remove the entire `availableOnDevice: [...]` array (7 device entries).
- The device list is already covered by the `description` text and the `sameAs` Wikipedia/Wikidata links right below it — no information is lost.

**B. `#service-support` (line ~366)**
- Remove `availableLanguage: ["de", "en"]`.
- Keep `hoursAvailable` — it IS valid on `Service` per schema.org (domain includes `Service` and `ContactPoint`).
- Language info is already declared at the Organization level (`#organization.availableLanguage` via its `contactPoint`, line 129), so the language coverage is not lost from the graph.

## Verification

After the edits, re-run the rich-results test on `https://iptvs-anbieter.de/`:
- The two new errors (`availableLanguage`, `availableOnDevice` on `Service`) should disappear.
- The 3 detected items (Organization graph, FAQPage, BreadcrumbList) should remain intact.

## Files touched
- `src/routes/__root.tsx` only (2 small deletions, no other changes).
