## Goal

Match the French sample's depth and structure, but in German for the IPTV site. Apply the same style to the daily AI-generated post.

## Long-form article structure (template)

Every article — seed and AI-generated — must follow this skeleton:

```text
H1 title
Intro paragraph (hook + promise)
## Warum ... (Why section)
  ### Numbered subsections (1. Feature, 2. Feature ...) with bold lead-ins + bullet lists
## Vergleich: IPTV vs ...
  Bullet price/feature breakdown + a markdown comparison table
## Die besten ... Kanäle auf IPTV
## [Topic deep-dive sections — sport, serien, filme, geräte, etc.]
## Erweiterte Funktionen
## Optimale Konfiguration (Internet, Geräte, Apps)
## Tipps & Tricks
## Rechtliches & Sicherheit (VPN-Hinweis)
## Erfahrungsberichte (3 Testimonials with name, age, profile)
## Fazit (bullet recap of benefits + CTA to /preise)
```

Word target: 1500–2500 words. Markdown features used: `##`, `###`, `**bold**`, bullet lists, numbered lists, tables. The existing `MarkdownBody` parser already supports these.

## Seed posts (replace all 3)

Delete the current 3 posts and insert 3 new long-form German articles following the template:

1. **IPTV für Sport: Der ultimative Guide für Fans 2026** — direct German adaptation of the sample (Bundesliga, Champions League, Premier League, Tennis, F1, NBA, UFC, multi-screen, replay, calendar 2026).
2. **IPTV für Serien & Filme: Netflix, Disney+ & Sky in einem Abo** — VOD focus, Mediatheken, 4K HDR, multi-audio (DE/EN), Untertitel, Familienprofile.
3. **IPTV einrichten: Fire TV Stick, Smart TV & Android Box im Vergleich** — device guide, TiviMate/IPTV Smarters setup, Internet-Anforderungen, VPN, Troubleshooting.

Done via `supabase--insert` (DELETE existing 3 + INSERT 3 new). Each links to `/preise` in the Fazit CTA.

## Daily AI cron — prompt rewrite

Update `src/routes/api/public/blog-cron.ts` system prompt to enforce:
- German only, 1500–2500 words
- Mandatory section skeleton above (Warum / Vergleich+table / Funktionen / Konfiguration / Tipps / Rechtliches+VPN / 3 Erfahrungsberichte / Fazit+CTA)
- At least one markdown comparison table and 5+ bullet lists
- `**bold**` on entities (channel names, leagues, devices, prices)
- End with CTA linking to `/preise`
- Original topic — pass last 30 titles + topics to avoid duplication (already implemented, keep)
- Topic pool expanded: sport sub-niches (Bundesliga, Champions League, Tennis, F1, NBA, UFC), VOD (Netflix-Alternative, Kids, Dokus), devices (Fire TV, Apple TV, Nvidia Shield, Smart TV Samsung/LG), how-to (Einrichtung, VPN, EPG, Aufnahme), regional (Türkisches IPTV, Arabisches IPTV), comparisons (IPTV vs Sky, vs DAZN, vs Magenta TV)

Keep model `google/gemini-3-flash-preview`, keep `Output.object` schema (title, slug, excerpt, body, topic), keep dedup retry, keep cron at 06:00 UTC.

## Frontend

No changes needed — `/blog` list and `/blog/$slug` detail already render `MarkdownBody` which supports all required markdown.

## Out of scope

- No new images
- No admin UI
- No legal pages (already removed)
- No new dependencies
