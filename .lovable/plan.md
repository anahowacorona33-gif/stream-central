## What's missing today

- **No author page** — the root JSON-LD references `#abo-hamza` as founder, but there is no live page at that anchor.
- **No contact page** — Footer only shows email/WhatsApp; no `/kontakt` route exists; no `ContactPage` schema.
- **Sitemap** is missing both new pages.
- **Per-page schema audit**: most routes already have FAQPage + BreadcrumbList + Service/Product schema. Gaps to close:
  - `index.tsx` BreadcrumbList only lists 1 item (Startseite) — fine, but missing canonical link + og:url.
  - `blog.$slug.tsx` schema needs verification (Article + Breadcrumb).
  - `abonnement-12/24-monate.tsx` schema needs verification.

## 1. New route: `/autor` (Author page)

File: `src/routes/autor.tsx`

Content (German, matches existing pages' tone):
- H1: "Abo Hamza – Gründer & CEO von IPTV Anbieter"
- Bio paragraph: founded 2019, DACH focus, 4K UHD, anti-freeze servers
- Role and expertise (IPTV infrastructure, streaming, Kundensupport)
- Founding story / mission section
- Contact CTA (WhatsApp + link to /kontakt)
- Link back to blog ("Artikel von Abo Hamza" — pulls from `listPosts`)

Schema (own scheme, content-matched):
- **`ProfilePage`** with `mainEntity` → `Person` (`@id: #abo-hamza`, reusing the root graph node)
- **`Person`** detail (name, jobTitle, worksFor → ORG_ID, knowsAbout: [IPTV, Streaming, 4K], sameAs, image)
- **`BreadcrumbList`**: Startseite → Autor
- Meta: title "Abo Hamza – Gründer von IPTV Anbieter", description, og:title/description/url, canonical

## 2. New route: `/kontakt` (Contact page)

File: `src/routes/kontakt.tsx`

Content:
- H1: "Kontakt – IPTV Anbieter Support"
- Primary: WhatsApp 24/7 (button → `whatsappLink()`)
- Email: `support@iptvs-anbieter.de`
- Phone: `+44 7446 431335`
- Support hours: 24/7
- Languages: Deutsch, English
- Service area: DE, AT, CH
- Company address block (Berlin, from root schema)
- Response-time SLA card ("Antwort meist innerhalb weniger Minuten")
- Contact FAQ (3-4 questions: "Wie schnell antwortet ihr?", "In welchen Sprachen?", "Wie storniere ich mein Abo?", "Wo bekomme ich eine Rechnung?")

Schema (own scheme):
- **`ContactPage`** (mainEntity → Organization)
- **`ContactPoint`** array (customer support, billing, technical)
- **`FAQPage`** with the contact FAQ
- **`BreadcrumbList`**: Startseite → Kontakt
- Meta: title, description, og:*, canonical

## 3. Sitemap update

`src/routes/sitemap[.]xml.ts` — add:
```
{ path: "/autor",   changefreq: "monthly", priority: "0.6" },
{ path: "/kontakt", changefreq: "monthly", priority: "0.7" },
```

## 4. Navigation wiring

- **Footer** (`src/components/Footer.tsx`): add "Kontakt" and "Über den Autor" links in the existing nav column.
- **Header**: leave primary nav unchanged (already crowded on mobile); contact reachable via footer + WhatsApp FAB.
- **Root JSON-LD** (`__root.tsx` line 162 & 489): update `founder.url` and the Person's `url` to `https://iptvs-anbieter.de/autor`; add `sameAs: ["https://iptvs-anbieter.de/autor"]` to Person. Add Organization `contactPoint.url = .../kontakt`.

## 5. Per-page schema audit (verify + patch as needed)

Quick check on each existing route — patch only if a gap is found:

| Route | Has FAQ | Has Breadcrumb | Has primary entity | Canonical |
|---|---|---|---|---|
| `/` | ✅ | ✅ (minimal) | Organization (root) | ❌ → add via meta og:url |
| `/preise` | ✅ | ✅ | (no Product list) → add **ItemList** of 4 offers | ✅ |
| `/iptv-kaufen` | ✅ | ✅ | Service | ✅ |
| `/iptv-test` | ✅ | ✅ | Service | ✅ |
| `/bester-iptv-anbieter` | ✅ | ✅ | Service | ✅ |
| `/abonnement-3/6/12/24-monate` | — | ✅ | Product | ✅ |
| `/blog` | — | ✅ | Blog | ✅ |
| `/blog/$slug` | — | verify | Article (verify) | verify |
| `/autor` (new) | — | ✅ | ProfilePage+Person | ✅ |
| `/kontakt` (new) | ✅ | ✅ | ContactPage | ✅ |

Patches in this pass:
- **`index.tsx`**: add `{ property: "og:url", content: "/" }` and `links: [{ rel: "canonical", href: "/" }]`.
- **`preise.tsx`**: add an **`ItemList`** JSON-LD listing the four `#product` @ids so Google sees the page as the canonical pricing hub.
- **`blog.$slug.tsx`**: verify Article schema includes `author: { "@id": "#abo-hamza" }`, `mainEntityOfPage`, `image`; add `BreadcrumbList` (Startseite → Blog → post) if missing.

## 6. Verification

- Restart dev server, hit `/autor`, `/kontakt`, `/sitemap.xml` and confirm 200 + valid XML containing both new paths.
- Re-run Google Rich Results test on `/autor` (expect ProfilePage + Person + Breadcrumb detected) and `/kontakt` (expect ContactPage + FAQPage + Breadcrumb).

---

**Confirm before I implement:**
1. URL slugs OK: **`/autor`** and **`/kontakt`** (German)?
2. Author bio — use the existing description from the root Person schema, or do you want a longer custom bio (e.g. 200-300 words)?
3. Contact page address — keep the placeholder "Friedrichstraße 123, 10117 Berlin" currently in the root schema, or hide the street address and only show city/country?
