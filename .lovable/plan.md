## Show all 4 pricing tiers on the homepage

The 4 plans (3M €19, 6M €35, 12M €45, 24M €80) are already on `/preise`, but the homepage still shows only the single "Jahres-Paket €45" card — that's why no change is visible from `/`.

### Change
Replace the homepage "Pricing teaser" section in `src/routes/index.tsx` (lines 197–226) with a compact 4-tier preview that mirrors `/preise`:

- Section header: "Wähle dein Paket" + short subtitle
- 4 cards in a responsive grid: `grid-cols-2 lg:grid-cols-4`, `gap-3 md:gap-5`
- Each card (compact): duration, big price (€19/€35/€45/€80), per-month equivalent, small "Per WhatsApp"-button (CTA)
- The 12-month card highlighted with `border-primary/60` + `Beliebt` badge; 24-month gets `Bester Preis` badge
- Per-plan WhatsApp message via `whatsappLink(...)` (same pattern as on `/preise`)
- Below the grid: small link "Alle Features & Garantien ansehen →" pointing to `/preise`
- Hero meta still highlights "ab €3,75/Monat" — keep as is

Reuse the same `plans` shape inline in the homepage (no shared module needed; data is tiny).

### Out of scope
- No changes to `/preise` (already has the full version)
- No copy/feature changes elsewhere
