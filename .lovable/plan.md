## Goal

Capture the high-volume "iptv anbieter" cluster from the keyword research, while pointing every funnel back to `/preise` and `/abonnement-*`.

(Meta + JSON-LD keyword updates on `__root.tsx` are already done from the previous turn.)

## 1. Three SEO landing routes

| File | URL | Primary keyword (volume) |
|---|---|---|
| `src/routes/iptv-kaufen.tsx` | `/iptv-kaufen` | iptv kaufen (8,100/mo) |
| `src/routes/iptv-test.tsx` | `/iptv-test` | iptv test (1,600/mo) |
| `src/routes/bester-iptv-anbieter.tsx` | `/bester-iptv-anbieter` | bester iptv anbieter (170/mo + variants) |

Each page:
- H1 with the target keyword verbatim, intro paragraph (~80 words)
- 4-6 USP bullets (20.000+ Sender, 4K UHD, sofort aktiv, 30 Tage Geld-zurück, 24/7 WhatsApp, Multi-Device)
- 4 pricing cards linking to `/abonnement-3/6/12/24-monate` + primary CTA → `/preise`
- 3-Q mini-FAQ specific to that page
- Per-route `head()`: title, description, og:*, canonical (relative paths)
- Per-route JSON-LD: `Service` + `FAQPage` + `BreadcrumbList`
- Reuses Header/Footer from `__root.tsx`

## 2. Homepage FAQ + FAQPage schema

- New `src/components/HomeFaq.tsx` — accordion with 8 Q&As drawn from the Semrush question keywords (welcher iptv-anbieter ist der beste, bestes Senderangebot, beste Sport-Sender, Kosten, Aktivierungszeit, Geld-zurück, Geräte, Support).
- Mount on `src/routes/index.tsx` above the footer.
- Append a `FAQPage` node to the existing JSON-LD `@graph` in `__root.tsx`. Visible markup and schema text must match exactly.

## 3. Sitemap

Add the 3 new URLs to `src/routes/sitemap[.]xml.ts` (priority 0.9, weekly).

## Files

**New:** `src/routes/iptv-kaufen.tsx`, `src/routes/iptv-test.tsx`, `src/routes/bester-iptv-anbieter.tsx`, `src/components/HomeFaq.tsx`

**Edited:** `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/sitemap[.]xml.ts`

**Header nav:** unchanged — these are SEO landing pages.
