## Goal
Switch the site's typography from Bebas Neue + Inter to **Sora (headings)** + **Manrope (body)** across the entire site.

## Changes

1. **`src/routes/__root.tsx`** — Update the Google Fonts `<link>` to load Sora (weights 600/700/800) and Manrope (weights 400/500/600/700) instead of Bebas Neue + Inter.

2. **`src/styles.css`**
   - Change `--font-display` to `"Sora", system-ui, sans-serif`.
   - Change `body` font-family to `"Manrope", system-ui, -apple-system, sans-serif`.
   - Soften the `letter-spacing` on headings (Sora doesn't need the +0.01em that Bebas needed).

That's it — all components (Header, Footer, Pricing, Hero, etc.) consume these tokens, so no per-component edits are needed.

## Out of scope
- No layout, color, or copy changes.
- No new font weights beyond what's listed above.