## Goal

Remove the **Kontakt**, **Kanäle**, and **Anleitungen** pages. Make the **FAQ** nav link scroll to the existing FAQ section on the homepage (above the footer) instead of opening a separate `/faq` page.

## Changes

### 1. Delete route files
- `src/routes/kontakt.tsx`
- `src/routes/kanaele.tsx`
- `src/routes/anleitungen.tsx`
- `src/routes/anleitungen.$device.tsx`
- `src/routes/faq.tsx`

### 2. `src/components/Header.tsx`
- Remove nav entries for `/kanaele`, `/anleitungen`, `/kontakt`.
- Replace the `/faq` `<Link>` with an `<a href="/#faq">` so it works from any route and scrolls to the FAQ section on the homepage.

### 3. `src/components/Footer.tsx`
- Remove links to `/kanaele`, `/anleitungen`, `/kontakt`.
- Change the FAQ link to `/#faq`.
- Clean up any now-empty footer column.

### 4. `src/routes/index.tsx`
- Add `id="faq"` and `scroll-mt-24` to the FAQ `<section>` (line 215) so the sticky header doesn't cover the heading.
- Remove the "Installationsanleitungen ansehen" button (line 194) that links to `/anleitungen`.
- Remove the "Alle Fragen ansehen →" link (line 226) that points to `/faq`.
- Tweak the FAQ answer on line 62 to drop the "Anleitungs-Seite" reference.

### 5. Sweep remaining references
Grep `src/` for `/kontakt`, `/kanaele`, `/anleitungen`, `/faq` and update or remove any remaining references (e.g. in `SeoChunks.tsx`, blog seed content, sitemap).

## Out of scope
- No visual redesign of the FAQ section.
- No new pages or content rewrites beyond removing dead-link sentences.
