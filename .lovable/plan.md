## Add section images to the homepage (image-less sections only)

### Sections that already have images (untouched)
- Hero — `hero-stadium.jpg` + `iptv-anbieter-multidevice.png`
- Sport highlight — `sport-highlight.jpg`
- Devices — `supported-devices.png`

### Sections currently without images → 3 new images
Skipping pure data/UI sections (Stats numbers band, Pricing tabs, FAQ accordion, gradient Final CTA) — adding a photo there hurts more than it helps.

1. **"Warum einen IPTV Anbieter wählen?"** (Kabel vs Sat vs IPTV comparison)
   - New image: `src/assets/iptv-vs-kabel-sat.jpg` — modern living room, glowing 4K TV showing a sports broadcast, an old satellite dish + cable receiver visibly unplugged in the corner. Conveys "switch from cable/sat to IPTV".
   - Placement: left column at md+, full width above intro paragraphs on mobile. Wrapped in a 2-col grid (`md:grid-cols-2`) with the existing copy on the right. Comparison cards stay full width below.

2. **"Was unseren IPTV Anbieter ausmacht"** (Features)
   - New image: `src/assets/iptv-features-player.jpg` — a stylized Smart TV UI mock showing EPG timeline, multi-view split, catch-up timeline. Communicates "Player technology / features".
   - Placement: small banner above feature cards, capped at `max-h-56 md:max-h-72`, `object-cover`, `w-full rounded-xl`. Lazy-loaded.

3. **"IPTV Anbieter in Deutschland, Österreich & Schweiz"** (DACH)
   - New image: `src/assets/iptv-dach-region.jpg` — an abstract map of D-A-CH region with subtle TV channel logos / signal waves overlay (no real broadcaster logos, generic).
   - Placement: right column at md+, copy on left (`md:grid-cols-2`). Country cards stay below in their 3-col grid.

### Image specs (so layout stays tight on mobile + desktop)
- All `.jpg`, generated at **1280×720** (16:9). Small file, predictable aspect.
- Always rendered with explicit `width`/`height` attributes → no CLS.
- Hero-area new images use `lg:max-h-72` / `md:max-h-56` caps on mobile to prevent vertical bloat.
- All images: `loading="lazy"`, `decoding="async"`, `object-cover`, `rounded-xl`.
- Wrapped sections use existing `max-w-7xl` containers — no new horizontal space.

### SEO
- **Descriptive German alt text** with the primary keyword "IPTV Anbieter" naturally included on each:
  - Img 1 alt: "IPTV Anbieter ersetzt Kabel- und Satellitenfernsehen — 4K Smart-TV im Wohnzimmer"
  - Img 2 alt: "IPTV Anbieter Player mit EPG, Multi-View und 7-Tage Catch-Up auf Smart TV"
  - Img 3 alt: "IPTV Anbieter für Deutschland, Österreich und Schweiz — DACH-Senderpaket"
- File names are keyword-rich (`iptv-vs-kabel-sat`, `iptv-features-player`, `iptv-dach-region`).
- Existing meta/OG tags, JSON-LD, H1/H2 structure — all untouched.
- No copy removed or reordered; images only added alongside existing text.
- All `<img>` tags include explicit dimensions (no layout shift, good Core Web Vitals).

### Out of scope
- No changes to Hero, Sport, Devices, Pricing, FAQ, Stats, Final CTA.
- No design system / token changes.
- No new copy.
