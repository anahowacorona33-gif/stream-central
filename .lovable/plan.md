## Tighten Features section header on mobile

The "Alles, was du erwartest – und mehr" section header (line 125-131 in `src/routes/index.tsx`) takes too much vertical space on phones because of `py-20` + `mb-12` + `text-4xl`.

### Changes (mobile-only, desktop unchanged)
- Section padding: `py-20` → `py-12 md:py-20`
- Header wrapper: `mb-12` → `mb-8 md:mb-12`
- H2 size: `text-4xl md:text-5xl` → `text-3xl md:text-5xl`
- Subtitle: `mt-3` → `mt-2 md:mt-3`, add `text-sm md:text-base`

That alone removes ~80px of vertical space on phones while keeping the desktop look identical.

### Out of scope
- No content/copy changes
- No changes to other sections
