## Goal

1. **Switch keyword**: replace every occurrence of `IPTVs Anbieter` with `IPTV Anbieter` (drop the trailing "s") across all source/content files. Brand name `IPTVs-Anbieter` (hyphenated, in JSON-LD `name`, `Footer SITE_NAME`, contact lib) stays untouched — only the keyword phrase changes.
2. **Boost SEO content** on the **home page** and **pricing page** with substantial, keyword-rich German copy.

## Part 1 — Global keyword swap

Files touched (12 occurrences total = ~52 instances):

- `src/routes/__root.tsx` — meta title/desc, og:title/desc, author, alternateName array
- `src/routes/index.tsx` — meta + hero + 5 H2s + sport copy + final CTA
- `src/routes/preise.tsx` — meta + H1 + lede
- `src/routes/abonnement-3-monate.tsx`, `-6-`, `-12-`, `-24-monate.tsx` — meta + H1 + body
- `src/routes/blog.tsx` — meta + H1 + lede
- `src/components/SeoChunks.tsx` — section H2, intro, chunk #1 title + 5 chunk paragraphs
- `src/components/Footer.tsx` — tagline
- `public/llms.txt` — title + description + intro

Method: simple `IPTVs Anbieter` → `IPTV Anbieter` find-replace per file. The hyphenated brand `IPTVs-Anbieter` is unaffected (different string).

## Part 2 — Home page content expansion (`src/routes/index.tsx`)

Add **3 new content sections** between existing sections, each rich with the keyword and supporting LSI terms (Streaming, Smart TV, 4K, Sport, Bundesliga, Live-TV, Sender):

### A. "Warum IPTV Anbieter wählen?" — after Stats, before Features
- H2 + 4-paragraph intro (~250 words) explaining what an IPTV Anbieter does, why the user needs one, advantages over Kabel/Sat/DVB-T2.
- 3-column comparison card: **Kabel-TV vs Satellit vs IPTV Anbieter** with a short pro/con list.

### B. "IPTV Anbieter Vergleich – worauf achten?" — after Devices, before Pricing
- H2 + intro paragraph.
- 6-tile checklist grid (icon + title + 1-line desc):
  Sender-Anzahl, 4K-Qualität, Anti-Freeze-Server, EPG & Catch-Up, Geräte-Kompatibilität, Support & Garantie.
- Each tile mentions "IPTV Anbieter" naturally in the description.

### C. "IPTV Anbieter in Deutschland, Österreich & Schweiz" — after FAQ, before final CTA
- H2 + 2-paragraph regional copy (~180 words) covering DACH market, deutsche/österreichische/Schweizer Sender, Bundesliga/SRG/ORF.
- 3-column flag/region cards.

Adds ~600–800 words of natural, keyword-dense German copy. Keyword density target: 8–12 additional `IPTV Anbieter` mentions on `/`.

## Part 3 — Pricing page content expansion (`src/routes/preise.tsx`)

Currently very thin (just hero + tabs + guarantees + payments). Add:

### A. "Welcher IPTV Anbieter Tarif passt zu mir?" — after PricingTabs
- H2 + intro paragraph.
- 4 cards (one per duration): "3 Monate – Tester", "6 Monate – Halbjahr", "12 Monate – Beliebt", "24 Monate – Bester Preis", each with 2-sentence guidance and `<Link>` to the matching `/abonnement-*` route.

### B. "Was im IPTV Anbieter Abo enthalten ist" — after the new tarif cards
- H2 + intro.
- 8-tile feature grid (Sender, VOD, Sport, EPG, Catch-Up, Multi-View, Anti-Freeze, Geräte) — 1 sentence each, keyword sprinkled naturally.

### C. "Warum unser IPTV Anbieter?" — after guarantees
- H2 + 3-paragraph trust copy (~180 words) covering Infrastruktur (Frankfurt/Amsterdam/Paris), Uptime, Support, 30-Tage-Garantie.

### D. Pricing FAQ block — after payments
- H2 "Häufige Fragen zum IPTV Anbieter Abo".
- 5-item Accordion: "Welcher Tarif lohnt sich am meisten?", "Wie funktioniert die 30-Tage-Garantie?", "Bekomme ich eine Rechnung?", "Kann ich später upgraden?", "Was passiert nach Ablauf des Abos?".
- Add `FAQPage` JSON-LD for the 5 Q&A pairs to `head().scripts`.

Adds ~700–900 words to the pricing page, plus a structured FAQ schema for rich-snippet eligibility on a money keyword.

## Out of scope

- No design system, font, or layout changes.
- No new routes, no DB/auth changes.
- No changes to the brand string `IPTVs-Anbieter` (hyphenated) in JSON-LD `name`, `SITE_NAME`, `support@iptvs-anbieter.de`, domain references — only the keyword phrase swap.

## Verification

After edits, run:
- `rg -c "IPTVs Anbieter" src/ public/` → should be 0
- `rg -c "IPTV Anbieter" src/ public/` → high count, present on every key page
- Visual check `/` and `/preise` at 1257px — sections render cleanly, hero still fits.
