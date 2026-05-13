## Add 4 pricing tiers

Replace the single-plan card on `/preise` with a 4-tier pricing grid.

### Tiers
| Plan | Price | Effective /month | Badge |
|---|---|---|---|
| 3 Monate | €19 | ~€6,33 | — |
| 6 Monate | €35 | ~€5,83 | — |
| 12 Monate | €45 | €3,75 | "Beliebt" (highlighted in primary red) |
| 24 Monate | €80 | ~€3,33 | "Bester Preis" |

All four plans include the same full feature list (currently in `features`).

### Implementation
- Edit `src/routes/preise.tsx` only.
- Replace lines 56–84 (the single Card) with a responsive grid: `grid gap-5 md:grid-cols-2 lg:grid-cols-4`, `max-w-7xl`.
- Each card: badge (if any), duration title, big price, "/Gesamt", monthly equivalent, condensed feature list (top 6 features) + "Alle Features ansehen" link, WhatsApp CTA button.
- The 12-month card gets `border-primary/60` + glow shadow to mark it as recommended.
- WhatsApp CTAs pass plan-specific text via `whatsappLink(message)` so the support agent knows which plan was chosen (e.g. `Hallo, ich möchte das 6-Monats-Abo (€35) bestellen`).
- Update homepage pricing CTA copy (the line "€45/Jahr" hero stat) — leave as-is since 12-month remains the flagship; mention "ab €19 / 3 Monate" in the price card subtitle on `/preise` only.
- Update `head()` meta description on `/preise` to mention "ab €19".

### Out of scope
- Homepage hero copy unchanged (still highlights yearly).
- No changes to features, guarantees, or payment methods sections.
- No backend; WhatsApp remains the sole checkout.
