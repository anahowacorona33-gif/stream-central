## Strategic CTAs – Home & Pricing

Add only 3 inline CTAs total — placed where reading intent peaks, not everywhere.

### Home (`src/routes/index.tsx`)
Currently CTAs only exist in the Hero (top) and Final CTA (bottom). The long middle has none.

1. **After "Was unseren IPTV Anbieter ausmacht" (line 223)** — single primary button row:
   - Primary: `Jetzt Paket wählen` → `/preise`
   - Ghost: `Kostenlosen Test anfragen` → `#kontakt` or WhatsApp link (use whatever pattern Footer uses)
   - Reason: user just read the value props, peak conversion moment.

2. **After "IPTV Anbieter Vergleich" checklist (line 287)** — single line + button:
   - Text: "Du erfüllst alle Kriterien? Wir auch."
   - Primary button: `Pakete vergleichen` → `/preise`
   - Reason: comparison just primed them; convert before the pricing teaser.

### Pricing (`src/routes/preise.tsx`)
Pricing page has tariff links but no decisive CTA between sections.

3. **After "Was im IPTV Anbieter Abo enthalten ist" (line ~130)** — single primary button centered:
   - Primary: `Bestes Paket sichern – 12 Monate` → `/abonnement-12-monate`
   - Small text below: "30 Tage Geld-zurück-Garantie"
   - Reason: features just shown, anchor the most popular plan.

### Style rules
- Reuse existing `Button` component with same variants already used in Hero (`bg-success` primary, `outline` secondary).
- No new sections, no banners, no sticky bars — purely inline button rows inside existing section padding.
- Keep Hero and Final CTA unchanged.

### Out of scope
No copy rewrites, no design tokens, no new routes, no schema changes.