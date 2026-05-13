## Pricing: tab selector + one detailed card

Replace the 4-card grids with a tab/pill selector (3M / 6M / 12M / 24M). The selected plan renders a single rich card showing price, monthly equivalent, savings vs. the 3-month rate, all features, and the WhatsApp CTA.

### Apply to both pages
- `src/routes/index.tsx` — homepage pricing section
- `src/routes/preise.tsx` — pricing page

### Component
Create `src/components/PricingTabs.tsx`:
- Client component (`"use client"` not needed, but uses `useState`).
- Props: `compact?: boolean` (homepage = true → smaller paddings; preise page = false).
- Internal `plans` array (3M €19, 6M €35, 12M €45 default + "Beliebt", 24M €80 + "Bester Preis").
- Internal `features` array (full list, same as on `/preise`).
- Default selected: `12m`.
- Tab strip: 4 pills in `inline-flex rounded-full border bg-card/60 p-1`. Active pill = `bg-primary text-primary-foreground`. Each pill shows duration + small price under it (e.g. "12 Monate · €45"). Wrap on mobile with `flex-wrap`.
- Detail card below: badge (if any), big price, "/Gesamt", "€X,XX/Monat", savings badge ("spare X% vs. 3-Monats-Tarif"), full feature checklist, WhatsApp button with plan-specific message, fine print "Sofort-Aktivierung · 30 Tage Geld-zurück".

### Wire-up
- Homepage: replace current pricing section (the 4-card grid added last turn) with `<PricingTabs compact />` plus a small link to `/preise` for guarantees & payment methods.
- `/preise`: replace the 4-card grid with `<PricingTabs />`. Keep the guarantees + payment methods sections below untouched.

### Out of scope
- No content changes elsewhere
- WhatsApp number / messages format unchanged
