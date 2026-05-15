## Three changes

### 1. Brand: remove the dash → "IPTV Anbieter"
`src/lib/contact.ts` — change `SITE_NAME = "IPTV-Anbieter"` to `"IPTV Anbieter"`. Then run a project-wide swap of `IPTV-Anbieter` → `IPTV Anbieter` across `src/` and `public/llms.txt` (Footer, Root JSON-LD, blog meta, product brand, llms.txt). Domain `iptvs-anbieter.de` stays unchanged.

### 2. Use first uploaded image (supported devices logo strip)
Copy `user-uploads://Channels-abonnement-iptv-01-1024x350.jpg` → `src/assets/supported-devices.jpg`.

Add it as a "Auf allen Geräten verfügbar" band:
- **Home (`src/routes/index.tsx`)**: insert inside the existing Devices section (replace/augment the icon grid with this single logo image, full width, on a light card with caption "Funktioniert auf Fire TV, Samsung, Android TV, iOS, MAG, Nvidia Shield, Xbox, LG Smart TV, Windows u.v.m.").
- **Pricing (`src/routes/preise.tsx`)**: add a compact "Auf allen Geräten" band right after the Inclusions section, same image + caption.

### 3. Regenerate the second image branded "IPTV Anbieter"
Use imagegen `edit_image` on `user-uploads://iptv-premium-multidevicespic.jpg` with prompt: replace the "IPTV Premium" lion logo/wordmark in the top-left with a clean "IPTV Anbieter" wordmark (same font weight/placement, white text on transparent). Keep all devices and content untouched. Save to `src/assets/iptv-anbieter-multidevice.jpg`, aspect ratio 21:9.

Use this hero image:
- **Home**: as a visual in the Hero section (right side on desktop, below copy on mobile) OR replace the current hero illustration if any.
- I'll place it in the Hero of the home page only (one strong placement, not repeated everywhere).

### Out of scope
No new sections, no copy rewrite beyond the short captions, no design system changes.