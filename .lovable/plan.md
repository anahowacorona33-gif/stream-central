## Add 3 new SEO content sections to the homepage

Add three new German-language content sections to `src/routes/index.tsx`, each targeting a clear SEO/intent topic. All sections use existing design tokens (Card, Button, lucide icons) — no new components, no backend, no images.

### 1. "Was ist IPTV?" (What is IPTV)
- Placement: right after the **Stats** section, before "Warum einen IPTV Anbieter wählen?"
- Layout: single-column max-w-4xl, H2 + 2–3 paragraphs explaining IPTV (streaming TV via internet, how it works, vs. classic TV) + a 3-tile "So funktioniert IPTV" mini-grid (Internet → Player/App → Bildschirm) with icons (Wifi, Smartphone, Tv)
- ~180–220 words, naturally includes "IPTV", "IPTV Anbieter", "Streaming"

### 2. "Warum nutzen deutsche Zuschauer einen IPTV Anbieter?" (Why German users use IPTV)
- Placement: after the existing "Warum einen IPTV Anbieter wählen?" comparison section, before **Features**
- Layout: H2 + intro paragraph + 4–6 reason cards in a responsive grid (icons: Trophy for Bundesliga/Sport, Film for Sky/DAZN bündeln, CreditCard for Kostenersparnis vs. Kabel, Layers for internationale Sender, Clock for zeitversetztes Schauen, ShieldCheck for kein Vertrag)
- Each card: short title + 1–2 sentence description tailored to DACH audience

### 3. "Warum uns als IPTV Anbieter wählen?" (Why choose us)
- Placement: after the **Devices** section, before "IPTV Anbieter Vergleich"
- Layout: H2 + intro + 6 differentiator cards (icons: Zap Sofort-Aktivierung, ShieldCheck 30 Tage Geld-zurück, Wifi Anti-Freeze 4K Server, MessageCircle 24/7 WhatsApp, RefreshCcw kein Vertrag, Trophy Sport komplett) + a CTA button row (WhatsApp + "Pakete ansehen")
- Distinct from the existing "IPTV Anbieter Vergleich" section: that one lists generic criteria; this one is explicitly about *us*

### Technical notes
- Pure JSX additions inside `HomePage()` in `src/routes/index.tsx`
- Reuse existing imports (Card, Button, Link, lucide icons, whatsappLink) — add any missing icons to the existing lucide-react import line
- Follow existing section pattern: `<section className="mx-auto max-w-7xl px-4 py-12 md:py-20">` with H2 `font-display text-3xl md:text-5xl`
- No new files, no image generation, no route changes, no SEO meta changes (page title/description already cover the topic)

### Out of scope
- Image generation
- New routes or blog posts
- Restructuring existing sections
