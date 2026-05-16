## Plan

Update the homepage structured data so Google's validator can detect a third valid rich-result item again.

### What I will change

1. **Replace the root `ProfessionalService` node with a richer, valid `Organization` node**
   - The current `ProfessionalService` graph is valid schema.org in general, but Google’s Rich Results tool is not listing it as a detected rich-result item.
   - I’ll switch the top-level entity to `Organization` and keep the important business details: name, logo, URL, contact, languages, founder, offers, area served, descriptions, and references.

2. **Avoid properties that triggered validator errors**
   - Keep `contactPoint` only on `Organization` where it is recognized.
   - Keep invalid `Service` properties removed (`availableLanguage`, `availableOnDevice`).
   - Avoid using `ProfessionalService` as a target where the validator complained.

3. **Keep the existing homepage rich-result items intact**
   - Leave the existing `FAQPage` and `BreadcrumbList` scripts on `/` in place.
   - The expected result should be 3 detected items again: `Organization`, `FAQPage`, and `BreadcrumbList`.

### File to edit

- `src/routes/__root.tsx`

### Verification

After implementation, the code should output valid JSON-LD with the root item as `Organization`. Then you can rerun the Rich Results test for `https://iptvs-anbieter.de/` and confirm the detected items count increases from 2 to 3.