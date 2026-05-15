## Two small fixes

### 1. Remove "Kostenlosen Test anfragen" button
File: `src/routes/index.tsx` — in the CTA row I just added after "Was unseren IPTV Anbieter ausmacht", drop the outline WhatsApp button and keep only the primary `Jetzt Paket wählen` → `/preise`.

### 2. Move pricing section higher on home page
Current home order:
Hero → Trust → Warum → Was uns ausmacht (+CTA) → Sport → Devices → Vergleich (+CTA) → **Pricing** → FAQ → Regional → Final CTA

New order:
Hero → Trust → Warum → Was uns ausmacht (+CTA) → Sport → **Pricing** → Devices → Vergleich (+CTA) → FAQ → Regional → Final CTA

Reason: pricing appears right after the Sport hype section — peak intent moment, still above the comparison/FAQ funnel. The CTA after the Vergleich section continues to point to `/preise` so it still works.

### Out of scope
No copy changes, no design changes, no new sections.