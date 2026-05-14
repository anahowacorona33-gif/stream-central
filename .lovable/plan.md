## Changes

### 1. Hero section (`src/routes/index.tsx`)
- Remove "alles in einer App" phrasing. Replace the hero subtitle with: *"Live-Sport, Filme, Serien und Premium-Pakete – auf Smart TV, Fire TV Stick, Apple TV, Android und iOS. Sofortige Aktivierung, kein Vertrag, 30 Tage Geld-zurück-Garantie."*
- This avoids implying a single proprietary app.

### 2. Features grid (`src/routes/index.tsx`)
- Remove the **"AirPlay & Cast"** feature card (Cast icon entry).
- Remove the **"Multi-Screen"** feature card (Smartphone icon entry).
- Keep / strengthen **Adaptive Buffering** as the anti-freeze feature. Rename and rewrite:
  - Title: **"Anti-Freeze Adaptive Buffering"**
  - Desc: *"Intelligentes Anti-Freeze-System mit adaptivem Buffering für ruckelfreie 4K-Wiedergabe – auch bei schwankender Bandbreite."*
- Result: 4 feature cards instead of 6 (EPG, Multi-View, 7-Tage Catch-Up, Anti-Freeze Adaptive Buffering). Grid still works on `lg:grid-cols-3` (wraps to 3+1) — adjust to `md:grid-cols-2 lg:grid-cols-4` so all four fit cleanly in one row on desktop.

### 3. SEO chunks back to collapsed — without losing SEO (`src/components/SeoChunks.tsx`)
Switch from always-visible `<article>` blocks back to a collapsible UI, **but keep all chunk body content in the server-rendered DOM** so BERT / passage ranking / AI Overviews can still extract it.

Technical approach: native HTML `<details>` / `<summary>` instead of Radix `Accordion`.
- `<details>` content is part of the SSR HTML (unlike Radix Accordion, which mounts content only when open).
- `<summary>` element contains a real `<h2>` so the heading stays a true H2 in the DOM outline.
- Default state: closed (`<details>` without `open` attribute).
- Styling: chevron rotates via `[&[open]>summary>svg]:rotate-180`, border separators between items, hover state on summary.
- Keep `id="faq"` on the wrapping `<section>` and `scroll-mt-24` on each `<details>` so the Header FAQ anchor still scrolls to the right place.
- Keep all 10 expanded chunk bodies (80–120 words, lists/tables, bold entities) exactly as written — no content loss.

### Why `<details>` and not Radix Accordion
Radix `AccordionContent` uses `data-state` to mount/unmount; closed items render with `hidden` and often empty children in SSR HTML. `<details>` keeps all child markup in the DOM at all times — Google indexes it, the user just sees it collapsed. Best of both worlds.

### Out of scope
No copy changes to SEO chunks themselves, no changes to pricing, footer, or other sections.
