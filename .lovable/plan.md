## Goal
Personalize the JSON-LD Organization schema for **IPTVs-Anbieter** (iptvs-anbieter.de), inject it on every page, generate a matching logo, and create dedicated routes for each plan so the URLs in `hasOfferCatalog` resolve.

---

## Steps

### 1. Generate logo
- `imagegen` premium, transparent PNG, 512×512 → `public/logo.png`
- Brief: minimal modern wordmark + TV/play glyph in the project's primary blue, wordmark "IPTVs-Anbieter", on a clean white background, exported transparent. Served at `https://iptvs-anbieter.de/logo.png`.

### 2. Create 4 dedicated plan routes
Each renders `<PricingTabs>` with the matching plan pre-selected (via hash like `#3m`), plus its own `head()` (title, description, canonical, og:url, og:type=product):
- `src/routes/abonnement-3-monate.tsx` → `/abonnement-3-monate`
- `src/routes/abonnement-6-monate.tsx` → `/abonnement-6-monate`
- `src/routes/abonnement-12-monate.tsx` → `/abonnement-12-monate`
- `src/routes/abonnement-24-monate.tsx` → `/abonnement-24-monate`

Each: H1 ("IPTV Abo 3 Monate – €19"), short German intro, `<PricingTabs>`, link back to `/preise`. The Vite plugin regenerates `routeTree.gen.ts` automatically.

### 3. Add the 4 routes to `src/routes/sitemap[.]xml.ts`

### 4. Inject Organization JSON-LD sitewide
Add a `scripts: [{ type: "application/ld+json", children: JSON.stringify(...) }]` entry to the `head()` in `src/routes/__root.tsx`. It renders into the document head on every page via `<Scripts />`.

---

## The exact script that will be injected

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://iptvs-anbieter.de/#organization",
  "name": "IPTVs-Anbieter",
  "alternateName": "IPTVs Anbieter",
  "url": "https://iptvs-anbieter.de",
  "logo": {
    "@type": "ImageObject",
    "url": "https://iptvs-anbieter.de/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "Deutschsprachiger IPTV-Anbieter: Premium-Abos für 3, 6, 12 und 24 Monate mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Kompatibel mit Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC und Kodi.",
  "knowsAbout": [
    { "@type": "Thing", "name": "Internet Protocol Television", "sameAs": "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
    { "@type": "Thing", "name": "Smart TV", "sameAs": "https://de.wikipedia.org/wiki/Smart-TV" },
    { "@type": "Thing", "name": "Amazon Fire TV", "sameAs": "https://de.wikipedia.org/wiki/Amazon_Fire_TV" },
    { "@type": "Thing", "name": "Apple TV", "sameAs": "https://de.wikipedia.org/wiki/Apple_TV" },
    { "@type": "Thing", "name": "Android TV", "sameAs": "https://de.wikipedia.org/wiki/Android_TV" },
    { "@type": "Thing", "name": "Kodi", "sameAs": "https://de.wikipedia.org/wiki/Kodi_(Software)" },
    { "@type": "Thing", "name": "VLC media player", "sameAs": "https://de.wikipedia.org/wiki/VLC_media_player" },
    { "@type": "Thing", "name": "MAG Set-Top-Box", "sameAs": "https://de.wikipedia.org/wiki/Infomir" },
    { "@type": "Thing", "name": "Ultra High Definition Television", "sameAs": "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
    { "@type": "Thing", "name": "Fußball-Bundesliga", "sameAs": "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga" },
    { "@type": "Thing", "name": "UEFA Champions League", "sameAs": "https://de.wikipedia.org/wiki/UEFA_Champions_League" },
    { "@type": "Thing", "name": "Formel 1", "sameAs": "https://de.wikipedia.org/wiki/Formel_1" }
  ],
  "areaServed": { "@type": "Country", "name": "Germany" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "telephone": "+44-7446-431335",
    "availableLanguage": ["German", "English"]
  },
  "sameAs": [
    "https://x.com/TAnbieter44116",
    "https://web.archive.org/web/20260514203741/http://iptvs-anbieter.de/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "IPTV-Abonnements",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "IPTV Abo 3 Monate",
        "price": "19.00",
        "priceCurrency": "EUR",
        "url": "https://iptvs-anbieter.de/abonnement-3-monate",
        "eligibleDuration": { "@type": "QuantitativeValue", "value": 3, "unitCode": "MON" },
        "itemOffered": { "@type": "Service", "name": "IPTV-Abonnement 3 Monate", "sameAs": "https://iptvs-anbieter.de/abonnement-3-monate" }
      },
      {
        "@type": "Offer",
        "name": "IPTV Abo 6 Monate",
        "price": "35.00",
        "priceCurrency": "EUR",
        "url": "https://iptvs-anbieter.de/abonnement-6-monate",
        "eligibleDuration": { "@type": "QuantitativeValue", "value": 6, "unitCode": "MON" },
        "itemOffered": { "@type": "Service", "name": "IPTV-Abonnement 6 Monate", "sameAs": "https://iptvs-anbieter.de/abonnement-6-monate" }
      },
      {
        "@type": "Offer",
        "name": "IPTV Abo 12 Monate",
        "price": "45.00",
        "priceCurrency": "EUR",
        "url": "https://iptvs-anbieter.de/abonnement-12-monate",
        "eligibleDuration": { "@type": "QuantitativeValue", "value": 12, "unitCode": "MON" },
        "itemOffered": { "@type": "Service", "name": "IPTV-Abonnement 12 Monate", "sameAs": "https://iptvs-anbieter.de/abonnement-12-monate" }
      },
      {
        "@type": "Offer",
        "name": "IPTV Abo 24 Monate",
        "price": "80.00",
        "priceCurrency": "EUR",
        "url": "https://iptvs-anbieter.de/abonnement-24-monate",
        "eligibleDuration": { "@type": "QuantitativeValue", "value": 24, "unitCode": "MON" },
        "itemOffered": { "@type": "Service", "name": "IPTV-Abonnement 24 Monate", "sameAs": "https://iptvs-anbieter.de/abonnement-24-monate" }
      }
    ]
  }
}
```

---

## Files touched
- **new** `public/logo.png` (generated)
- **new** `src/routes/abonnement-3-monate.tsx`
- **new** `src/routes/abonnement-6-monate.tsx`
- **new** `src/routes/abonnement-12-monate.tsx`
- **new** `src/routes/abonnement-24-monate.tsx`
- **edit** `src/routes/__root.tsx` (add `scripts` entry with the JSON-LD above)
- **edit** `src/routes/sitemap[.]xml.ts` (include the 4 new routes)
- **auto** `src/routeTree.gen.ts` (regenerated by Vite plugin)
