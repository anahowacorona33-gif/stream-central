## Goal
Remove the "AirPlay & Multi-Screen Support" feature from the pricing plans.

## Change
- **`src/components/PricingTabs.tsx`** (line 23): remove the `"AirPlay & Multi-Screen Support"` entry from the features list.

## Out of scope
Leave the SEO copy in `SeoChunks.tsx` untouched (it discusses Multi-View / AirPlay as related streaming concepts, not as an advertised plan feature). If you want that removed too, say so.