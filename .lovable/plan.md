## Regenerate the supported-devices image from scratch

The current PNG is technically transparent, but the original logos contain dark text (Samsung, MagBox, Shield, IPTV Smarter, Webplayer, LG Smart) which disappears on the dark site background. Editing the source can't fix that — I need to generate fresh light-colored logos.

### What I'll do
Use `imagegen--generate_image` (premium, for legible text) with `transparent_background: true` to create `src/assets/supported-devices.png` from a written description: a clean 3-row × 4-column grid of platform wordmarks/logos, all rendered in **white / light tones** with their original brand accent colors where appropriate (e.g. Android green, Apple rainbow), on a fully transparent background. 12 tiles:

Row 1: Fire TV Stick · Samsung Smart TV · Android TV · iOS (Apple)
Row 2: MagBox · Nvidia Shield · Android · IPTV Smarters Pro
Row 3: Xbox Live · Webplayer · LG Smart TV · Windows

Dimensions 1536 × 512 (3:1), text rendered in white/light gray so it stays readable on the dark site background.

The multidevice hero PNG is already fine (dark photographic content reads well on dark bg) — leave it untouched.

### Out of scope
No layout changes; the existing `<img>` tags and section markup stay the same, only the asset bytes change.