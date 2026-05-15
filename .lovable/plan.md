## Split hero — compact above-the-fold + supporting copy below

Restructure the home page hero so only essential, high-impact content sits in the first viewport. SEO text stays on the page — it just moves into a new section directly below the hero (still in the same DOM, still crawled, still inside the H1's content flow).

### New structure

**Hero (compact, above the fold)**
- Badge: "Premium IPTV Anbieter 2026"
- H1: "Dein IPTV Anbieter — 20.000+ Sender. 4K. Ab €3,75/Monat." (text-4xl mobile, text-6xl desktop — was 5xl/7xl/8xl)
- One-line subhead: "Live-Sport, Filme & Serien auf Smart TV, Fire TV, Apple TV, Android & iOS — sofort aktiviert, kein Vertrag." (was a 3-line paragraph)
- Two CTAs (WhatsApp bestellen + Pakete ansehen) — unchanged
- Multi-device hero image — keeps side-by-side on desktop (lg:grid-cols-2), inline below copy on mobile but capped at `max-h-72`
- Padding: `py-10 md:py-20` (was `py-20 md:py-28`)

**New "Hero details" band (immediately below, no visual gap)**
- The full original descriptive paragraph ("Als zuverlässiger IPTV Anbieter liefern wir…") — kept verbatim for SEO
- The 4 trust signals (30 Tage Geld-zurück, Sofort-Aktivierung, 24/7 WhatsApp, Kein Vertrag) — moved here as the same icon row
- Wrapped in a `<section aria-label="Über unseren IPTV Anbieter">` directly under the hero so it reads as one continuous unit

### What stays for SEO
- H1 still contains the primary keyword "IPTV Anbieter" plus "20.000+ Sender", "4K", price
- Full descriptive paragraph kept verbatim, just one section lower
- Trust signals + image alt text unchanged
- All existing meta/OG tags + JSON-LD untouched
- No content removed — only re-arranged into two sibling sections

### Out of scope
No new copy, no design system changes, no other sections touched. Pricing tabs, sport, devices, etc. all stay where they are.