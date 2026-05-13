
# IPTVs-Anbieter.de — Plan

Mehrseitige deutsche IPTV-Marketing-Website mit kräftigem Sport-Look (Rot/Schwarz), klarer Konversion über WhatsApp-Buttons und SEO-optimierten Routen.

## Design-System
- **Farben** (oklch in `src/styles.css`):
  - Background: tiefes Schwarz `oklch(0.12 0 0)`
  - Foreground: nahezu Weiß
  - Primary: signal-rot `oklch(0.58 0.22 25)` + Glow-Variante
  - Accent: dunkles Karbon-Grau
  - Gradient-Hero: rot → schwarz
- **Typo:** Inter (body), bold/condensed Display für H1 (z.B. Bebas Neue oder Anton)
- **Komponenten:** Shadcn-Buttons mit `destructive`-ähnlicher Rot-Variante, Cards mit subtiler roter Border-Glow, Badges für „4K", „24/7" etc.
- Hero mit Gradient-Overlay über Sport/Stadion-Bild, große Stat-Counters (20.000+, 145.000+, 44.000+).

## Seitenstruktur (TanStack Routen)
```
src/routes/
  __root.tsx          → Header (Logo + Nav + WhatsApp-CTA) + Footer + Outlet
  index.tsx           → Landing (Hero, Stats, Features, Preis-CTA, Geräte, FAQ-Auszug)
  preise.tsx          → Pricing (€45/Jahr Plan, Feature-Liste, Garantien, Zahlungsmethoden)
  kanaele.tsx         → Channel-Showcase (Kategorien: Sport, Filme, Kids, Intl., Logos-Grid)
  anleitungen.tsx     → Installations-Übersicht (Geräte-Karten)
  anleitungen.$device → Detail pro Gerät (smart-tv, firestick, ios, android, mag-box, vlc)
  blog.tsx            → Blog-Übersicht (statische Artikel)
  blog.$slug.tsx      → Blog-Artikel
  faq.tsx             → FAQ (Accordion, häufige IPTV-Fragen)
  kontakt.tsx         → Kontakt (WhatsApp, E-Mail, Formular → mailto)
  impressum.tsx       → Impressum
  datenschutz.tsx     → Datenschutz
  agb.tsx             → AGB / Widerruf
```

Jede Route mit eigenem `head()` (Title, Description, og:tags) auf Deutsch für SEO.

## Inhalte pro Sektion (Landing)
1. **Hero** — „Über 20.000 Live-TV-Sender. 4K. Nur €3,75/Monat." + 2 CTAs („Jetzt bestellen" → WhatsApp, „Pakete ansehen" → /preise)
2. **Trust-Bar** — 30 Tage Geld-zurück, 24/7 Support, Sofort-Aktivierung, Kein Vertrag
3. **Stats** — 20.000+ Sender / 145.000+ Filme / 44.000+ Serien / 4K UHD
4. **Features-Grid** — EPG, Multi-View (4 Streams), Catch-Up 7 Tage, AirPlay, Adaptive Buffering, Multi-Screen
5. **Sport-Highlight** — Premium Sportabdeckung (Bundesliga, Champions League, F1, NFL, UFC…)
6. **Geräte** — Smart TV, Fire Stick, iPhone/iPad, Android, MAG, Apple TV, VLC
7. **Preis-Card** — €45/Jahr, alle Features, Garantien
8. **Zahlungsmethoden-Logos** — 16+ Methoden inkl. Crypto
9. **FAQ-Auszug** (3-4 Fragen) + Link zur vollen FAQ
10. **Final CTA** — WhatsApp-Button

## Globale Komponenten
- `<WhatsAppButton>` — sticky floating + überall in CTAs (Link `https://wa.me/...?text=...`); Telefonnummer als Konstante in `src/lib/contact.ts` (Platzhalter, später ersetzbar)
- `<Header>` mit Mobile-Menü (Sheet)
- `<Footer>` mit Links, Zahlungsmethoden-Reihe, Rechtliches
- `<FeatureCard>`, `<StatCounter>`, `<DeviceCard>`, `<PricingCard>`, `<FaqAccordion>`

## Bilder
Generierung mit `imagegen` (in `src/assets/`):
- Hero: dunkles Stadion / TV-Wand mit Sport-Action, rotes Glow
- Sport-Sektion-Bild
- Geräte-Mockups (oder Lucide-Icons als Fallback)

## SEO
- Deutsche Meta-Tags pro Route, semantisches HTML, ein H1 pro Seite
- JSON-LD: `Product` + `Offer` auf /preise, `FAQPage` auf /faq, `Organization` im Root
- `lang="de"` im `<html>`
- Canonical-Tags via head()

## Konversion-Logik
- Alle „Jetzt bestellen"-Buttons → `https://wa.me/<NUMMER>?text=Hallo, ich möchte das IPTV-Jahresabo bestellen`
- Kein echter Checkout, kein Backend (Lovable Cloud nicht nötig)
- Kontaktformular → `mailto:`-Link

## Technische Details
- TanStack Start Routen wie oben (flat dot-notation für `anleitungen.$device.tsx`, `blog.$slug.tsx`)
- Tailwind v4 Tokens in `src/styles.css` (oklch)
- `lang="de"` in `__root.tsx` shellComponent
- Alle Texte auf Deutsch
- Telefonnummer + WhatsApp-Nummer als Konstanten (Platzhalter, vom Nutzer zu ersetzen)

## Was NICHT gebaut wird (vorerst)
- Lovable Cloud / Auth / DB
- Echter Payment-Checkout
- Live-Streaming-Player (rein Marketing-Site)
- Kunden-Login

Nach Genehmigung baue ich Tokens, Routen und Inhalte in einem Rutsch und generiere die Hero-/Sport-Bilder.
