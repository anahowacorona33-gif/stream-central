## SEO section "IPTV Anbieter" on the homepage

Add a new section on `/` (src/routes/index.tsx), placed right before the footer, containing 10 semantic SEO chunks optimized for Dense Retrieval, BERT, Passage Ranking and AI Overviews.

**Language clarification:** the brief mentions French, but the target keyword is "iptv anbieter" and the entire site is German. I will write the chunks in **German**. If you actually want French, tell me and I'll switch.

### Structure of each chunk
- `<h2>` with a topical title (not a question)
- First sentence = direct definition / answer
- 80–120 words
- One structured element: bullet list, numbered list, OR comparison table
- Multiple Named Entities in `<strong>` (e.g. **IPTV Smarters Pro**, **Fire TV Stick**, **Samsung Smart TV**, **Xtream Codes**, **M3U**, **DAZN**, **Sky**, **Bundesliga**, **Android TV**, **Apple TV**, **VLC**, **MAG Box**, **TiviMate**, **HEVC/H.265**)
- Closing sentence with extra semantic entities

### The 10 chunk topics (micro-intents)
1. IPTV providers in Germany — definition & market overview
2. IPTV setup on Smart TV (**Samsung Tizen**, **LG webOS**)
3. IPTV on **Fire TV Stick** with **IPTV Smarters Pro**
4. IPTV 4K UHD — bandwidth & codecs (**HEVC**, **H.265**)
5. IPTV Sport — **Bundesliga**, **Champions League**, **DAZN**, **Sky**
6. IPTV VOD — movies & series (alternative to **Netflix**, **Disney+**)
7. IPTV Multi-View — up to 4 simultaneous streams
8. IPTV anti-freeze — stable servers & adaptive buffering
9. IPTV on **Android TV** & **Apple TV** — apps & setup (**TiviMate**, **GSE Smart IPTV**)
10. International IPTV — 20,000+ channels from **Germany**, **Austria**, **Switzerland**, **Turkey**, **UK**, **USA**

At least one chunk uses a comparison table (e.g. device → recommended app, or quality tier → required bandwidth); the others use bullet or numbered lists.

### Technical implementation
- New component `src/components/SeoChunks.tsx` containing the 10 chunks as static JSX with semantic HTML (`<section>`, `<h2>`, `<ul>`/`<ol>`/`<table>`, `<strong>`).
- Styling via existing Tailwind tokens only (`bg-card/40`, `border-border/60`, `font-display`, `text-muted-foreground`) — consistent with the Sport-Bold theme, no new colors.
- Layout: `max-w-5xl` container, single column, each chunk in a subtly bordered card with `rounded-lg` and `p-6`.
- Mounted in `src/routes/index.tsx` as the last section of the page (the global Footer is rendered by `__root.tsx`, so the new section automatically sits directly above it).
- No JSON-LD added (chunks aren't strict Q&A); clean semantic HTML is enough for passage ranking.

### Out of scope
- No footer changes
- No new routes
- No backend / Lovable Cloud
- No edits to existing sections
