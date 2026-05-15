## Regenerate the DACH region image

The current `src/assets/iptv-dach-region.jpg` has garbled fake text/logos ("ALCTH", "ALACH") on the floating tiles, which looks unprofessional.

### Action
Regenerate the same file (`src/assets/iptv-dach-region.jpg`, 1280×736) with a cleaner prompt that explicitly avoids any text, letters, logos, or symbols.

### New prompt direction
Stylized glowing outline map of the DACH region (Germany, Austria, Switzerland) on a deep dark background, neon red and blue gradient borders, three small flag accents (German, Austrian, Swiss flags rendered as simple color bars — black/red/gold, red/white/red, red/white cross), subtle TV signal waves and broadcast pulses radiating from major cities, premium cinematic look. Absolutely no text, no letters, no words, no fake logos, no UI elements.

### What stays
- Same file path (replaces existing) → no code changes needed.
- Same alt text and dimensions in `src/routes/index.tsx` → SEO unchanged.
- Same placement, layout, mobile sizing.

### Out of scope
No code edits. No other images touched.