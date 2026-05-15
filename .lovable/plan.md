## Fix the "Features" section image on desktop

### Problem
On desktop the `iptv-features-player.jpg` shows a TV-in-a-room composition. With the section image rendered full-width and capped at `max-h-72`, the TV ends up centered with large empty white/gray wall areas on the left and right — it looks broken and wastes space.

### Fix
Regenerate `src/assets/iptv-features-player.jpg` as an **edge-to-edge Smart TV / IPTV player UI** that fills the entire 16:9 frame — no room, no TV bezel, no walls. Just the on-screen interface itself, so it looks clean at every width.

New prompt direction:
- Full-bleed Smart TV streaming app UI, edge-to-edge, no device bezel, no surrounding room
- Dark premium UI with EPG timeline at top, multi-view 4-stream split panel, catch-up timeline strip at bottom
- Sport thumbnails as content tiles
- Blue and red accent glows matching the site's primary color
- 1280×736, premium model (cleaner, fewer text artifacts)
- No real text labels, no fake logos, no garbled writing

### What stays
- Same file path → no code changes needed
- Same alt, dimensions, lazy loading, mobile/desktop classes in `src/routes/index.tsx`
- All SEO unchanged

### Out of scope
No code edits, no other images, no layout changes.