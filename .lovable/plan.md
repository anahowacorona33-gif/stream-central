## Remove white backgrounds from the two device images

### 1. Regenerate both images as transparent PNGs
Use `imagegen--edit_image` with `transparent_background: true` (and PNG output) on the source uploads:

- `user-uploads://Channels-abonnement-iptv-01-1024x350.jpg` → `src/assets/supported-devices.png`
  Prompt: keep all 12 device-platform logos exactly as-is, remove the white background, output transparent PNG.
- `user-uploads://iptv-premium-multidevicespic.jpg` → `src/assets/iptv-anbieter-multidevice.png`
  Prompt: replace "IPTV Premium" lion mark in top-left with white "IPTV Anbieter" wordmark; remove the white background entirely; keep all devices/screens; output transparent PNG.

### 2. Update imports + remove the white card wrapper
- `src/routes/index.tsx`: change imports `.jpg` → `.png` for both. Drop the `bg-white` wrapper card around `supported-devices` (no longer needed since logos are transparent and the dark site bg works directly).
- `src/routes/preise.tsx`: same — change import to `.png` and drop the `bg-white rounded-2xl border` wrapper.

### 3. Delete the now-unused `.jpg` versions
Remove `src/assets/supported-devices.jpg` and `src/assets/iptv-anbieter-multidevice.jpg`.

### Out of scope
No layout, copy, or section changes — purely swapping the image assets and dropping the white card wrappers.