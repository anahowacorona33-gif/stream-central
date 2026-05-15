## Regenerate the multi-device hero image from scratch

Replace `src/assets/iptv-anbieter-multidevice.png` with a fresh AI-generated image (description-based, transparent background) — same approach we just used for the device-logos strip.

### What I'll do
Use `imagegen--generate_image` with `model: premium`, `transparent_background: true`, aspect ratio ~21:9 (e.g. 1792×768), prompt describing:

A premium product-shot composition of multiple consumer streaming devices clustered together, all powered on showing colorful TV/streaming content on their screens:
- Center-back: large modern flat-screen Smart TV displaying a cinematic film scene with the white wordmark "IPTV Anbieter" overlaid in the top-left
- Open MacBook/laptop on the left showing a music/concert stream
- iPad/tablet on the right showing a movie grid UI
- Smartphone on the far right showing an EPG/guide UI
- Foreground: Apple TV box, Roku stick, Amazon Fire TV Stick, Google Chromecast with remote, Nvidia Shield remote, Mag box — arranged naturally
- Photoreal, studio lighting, no white background (transparent), soft contact shadows only

Save to `src/assets/iptv-anbieter-multidevice.png` (overwrites). The existing import in `src/routes/index.tsx` already points to that path — no code changes needed.

### Out of scope
No layout or copy changes; only the image bytes change.