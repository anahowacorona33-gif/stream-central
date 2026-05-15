## Goal

Strengthen on-page SEO for the exact target keyword **"IPTVs Anbieter"** (with the trailing "s" + space — distinct from "IPTV Anbieter") across the German site, without degrading copy quality or breaking the design.

## Current state

- Brand "IPTVs-Anbieter" (hyphenated) appears in many places (root meta, contact, JSON-LD, footer, blog routes).
- The exact phrase **"IPTVs Anbieter"** (no hyphen) currently appears almost nowhere — Google treats `IPTVs-Anbieter` and `IPTVs Anbieter` differently in copy.
- Most SEO copy targets the variant `IPTV Anbieter` (without the "s").

## Changes

### 1. `src/routes/index.tsx` (home — highest SEO weight)
- **Title meta**: `"IPTVs Anbieter – 20.000+ Sender & 4K UHD ab €3,75/Monat"`
- **Description meta**: lead with `"IPTVs Anbieter mit über 20.000 Live-Sendern…"`
- **Hero H1**: rework to include the exact phrase, e.g.
  `Dein IPTVs Anbieter – über 20.000 Sender. 4K. Ab €3,75/Monat.`
- **Hero badge**: `Premium IPTVs Anbieter 2026`
- **Hero subline**: open with `Als zuverlässiger IPTVs Anbieter liefern wir Live-Sport…`
- **Features H2**: `Was unseren IPTVs Anbieter ausmacht`
- **Sport section paragraph**: add one sentence mentioning `IPTVs Anbieter` for sport.
- **Devices H2**: `IPTVs Anbieter für jedes Gerät`
- **Pricing H2**: `IPTVs Anbieter – wähle dein Paket`
- **Final CTA H2 / copy**: include phrase once.
- **og:title / og:description**: mirror the new title/description.

### 2. `src/routes/__root.tsx` (sitewide defaults)
- Update default `<title>` and `description` meta to start with **"IPTVs Anbieter"**.
- Update `og:title` / `og:description` similarly.
- Add `alternateName: "IPTVs Anbieter"` to the Organization JSON-LD (currently `"IPTVs Anbieter"` is missing as alternate name; only `"IPTVs Anbieter"` brand variant is referenced).

### 3. `src/components/SeoChunks.tsx`
- Section H2: change `IPTV Anbieter – Wissen, Geräte & Setup` → `IPTVs Anbieter – Wissen, Geräte & Setup`.
- Intro paragraph: replace `den richtigen IPTV-Anbieter` with `den richtigen IPTVs Anbieter`.
- First chunk title `IPTV Anbieter in Deutschland` → `IPTVs Anbieter in Deutschland`, and update its first sentence to use the exact phrase.
- Sprinkle the exact phrase into 3–4 other chunk paragraphs (sport, VOD, anti-freeze, international) where it reads naturally — once each, not stuffed.

### 4. Pricing pages (`preise.tsx`, `abonnement-3/6/12/24-monate.tsx`)
- Update each route's `head().meta` title + description to lead with `"IPTVs Anbieter"` (e.g. `IPTVs Anbieter – 12 Monate Abo €45 | 20.000+ Sender 4K`).
- Add one `<h2>`-level mention or intro line on each page using the exact phrase.

### 5. `src/routes/blog.tsx`
- Title + description meta: lead with `IPTVs Anbieter Blog – …`.
- Page H1 / intro: include the phrase once.

### 6. `src/components/Footer.tsx`
- Add a single short tagline line under the brand: e.g. `IPTVs Anbieter für Deutschland, Österreich und die Schweiz.` (one-time, semantic).

### 7. `public/llms.txt`
- Update opening line so the exact phrase appears: `IPTVs Anbieter mit über 20.000 Live-Sendern…`

## Out of scope

- No design/typography/layout changes.
- No new routes, no schema or backend changes.
- No keyword stuffing — every insertion must read as natural German copy and replace, not append, where possible.

## Verification

- After edits, run `rg -in "IPTVs Anbieter" src/ public/` and confirm the exact phrase appears on every key surface (root meta, home hero+sections, all 5 pricing routes, blog index, footer, SeoChunks header + ≥4 chunks, llms.txt).
- Visually check the home `/` preview at 1257px to confirm hero/headings still fit and look clean.
