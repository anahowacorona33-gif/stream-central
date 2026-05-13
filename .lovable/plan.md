## Compact features layout on mobile

The 6 feature cards (EPG, Multi-View, Catch-Up, AirPlay, Adaptive Buffering, Multi-Screen) currently render as a 1-column stack of large `p-6` cards on mobile — each ~150px tall, totaling ~900px.

### Change
Switch to a compact 2-column horizontal-icon layout on mobile, keeping the existing 3-column rich-card layout from `md` upward.

In `src/routes/index.tsx`, replace the features grid (lines 132-140) with a responsive structure:

- Mobile (`<md`): 2-column grid, each item is a small tile with the icon on the left, title + 1-line description on the right, `p-3`, `text-sm` title, `text-xs` description, `truncate`/clamp-2 desc. Tighter borders, no hover glow.
- Desktop (`md+`): keep the current 3-column rich card layout exactly as today (icon top, h3, full description, hover glow).

Implemented as a single `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5` with conditional Tailwind classes inside each Card, OR two parallel JSX blocks (`md:hidden` compact + `hidden md:grid` rich). I'll use the dual-block approach for cleanest CSS.

This roughly halves the vertical footprint on phones while leaving desktop untouched.

### Out of scope
- No copy / icon changes
- No edits to other sections
