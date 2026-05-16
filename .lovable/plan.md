## Plan: Fix the 5 non-critical ImageObject warnings on `/`

Google's Rich Results test flagged the homepage `Organization.image` ImageObject. All 5 are optional, but fixing them makes the logo eligible for image rich results with proper attribution.

### What I will change

Edit only the `image` ImageObject block in `src/routes/__root.tsx` (lines 95–104). The `logo` block stays as-is (Google reads it separately and didn't complain).

**1. Fix `creator` type** — currently the string `"IPTV Anbieter"`, which is invalid. Replace with a proper Organization reference:
```js
creator: { "@type": "Organization", "@id": "https://iptvs-anbieter.de/#organization", name: "IPTV Anbieter" }
```
Same fix for `author` — change from string to `{ "@type": "Person", name: "Abo Hamza" }`.

**2. Add `creditText`** — the byline Google shows under the image:
```
creditText: "IPTV Anbieter"
```

**3. Add `copyrightNotice` + `copyrightHolder`**:
```
copyrightNotice: "© 2019–2026 IPTV Anbieter. Alle Rechte vorbehalten."
copyrightHolder: { "@id": "https://iptvs-anbieter.de/#organization" }
```

**4. Add `license` + `acquireLicensePage`** — both point to a license/terms page. Since you don't have a dedicated license URL, I'll point to the homepage (`https://iptvs-anbieter.de/`) which is acceptable, or we can use the imprint/AGB if one exists.

### Question before I implement

For the `license` / `acquireLicensePage` URLs, which do you prefer?
- **(a)** Point both to `https://iptvs-anbieter.de/` (homepage) — quick, satisfies Google, no new page needed
- **(b)** Point to an existing legal page if you have one (AGB/Impressum) — tell me the URL
- **(c)** I skip these two fields — they remain as "missing optional" warnings but everything else clears

### Verification

After the edit, re-run https://search.google.com/test/rich-results on `https://iptvs-anbieter.de/` — the ImageObject should show 0 issues (or 2 remaining if you pick option c), and Organization + FAQPage + BreadcrumbList stay detected.
