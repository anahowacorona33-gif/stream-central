## Fix the "Features" image — make it an ultra-wide banner so nothing gets cropped

### Problem
The new image is full-bleed UI, but at desktop width with `max-h-72` (288px) and `object-cover`, the top EPG bar and bottom catch-up timeline get cropped — only the middle multi-view band is visible. Removing the cap would make the image too tall (a 16:9 image at full container width is ~720px tall, dominating the screen).

### Fix
Regenerate `src/assets/iptv-features-player.jpg` at an **ultra-wide banner aspect** (1920×576, ~10:3) so the entire UI fits in a short horizontal strip. Then we can drop the height cap and use `h-auto` — the image displays in full at a naturally compact height (~377px on desktop, proportional on mobile) with nothing cropped.

New image composition (ultra-wide, full-bleed, no TV bezel/room):
- Left third: EPG channel guide column with timeline rows
- Middle third: 4-stream multi-view sport split (already great in current render)
- Right third: catch-up timeline scrubber strip with content tile thumbnails
- Dark navy background, blue + red accent glows
- Premium model, no readable text / fake logos

### Code change
Update only the image's class + dimension attrs in `src/routes/index.tsx`:
- width: 1920, height: 576 (no CLS)
- className: `mb-8 w-full h-auto rounded-xl` (drop `object-cover max-h-56 md:max-h-72`)
- Keep alt, lazy loading, decoding async

### What stays
- Same import path
- Same German alt text with "IPTV Anbieter" keyword → SEO unchanged
- No layout/section/copy changes elsewhere

### Out of scope
No other images, no other sections.