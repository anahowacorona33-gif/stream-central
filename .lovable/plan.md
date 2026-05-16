## Problem

You spotted that `https://www.wikidata.org/wiki/Q239295` (used for "Apple TV") actually points to **Stadionul Zimbru** (a football stadium). I audited every Wikidata Q-ID in `src/routes/__root.tsx` — **most are wrong**. Examples:

| Used for | Q-ID in code | What it actually is |
|---|---|---|
| IPTV | Q170453 | Amazonas (Venezuelan state) |
| Streaming-Medien | Q1153191 | online newspaper |
| OTT-Dienst | Q1029752 | Shenhe District, China |
| Video-on-Demand | Q193162 | Usenet |
| ? | Q673708 | Bremen-class frigate |
| Pay-TV | Q2659904 | government organization |
| 4K UHD | Q1153692 | Politics of Peru |
| UEFA Champions League | Q18761 | "Made in Japan" album |
| Sky Deutschland | Q160665 | Cossern (settlement) |
| DAZN | Q1141477 | 2009 Cross-Country Championships |
| Smart-TV | Q1145135 | Curt Herfurth (architect) |
| Apple TV | Q239295 | Zimbru Stadium |
| Android TV | Q15706620 | Macrones (ancient tribe) |
| Kodi | Q399 | Armenia |
| WhatsApp | Q1049511 | (unrelated) |
| Kundenservice | Q1142586 | Ford Field stadium |
| EPG | Q1326233 | Tápiószecső FC |
| Catch-up TV | Q1052021 | Craig interpolation theorem |
| MagentaTV | Q1879696 | railway station in Lugny |
| Waipu.tv | Q29466944 | a frog species paper |
| Zattoo | Q593412 | Hippasa haryanensis (spider) |

Only Q289 (Fernsehen), Q193424 (Webservice), Q82595 (Bundesliga), Q1968 (Formel 1), Q171477 (VLC), Q183 (Deutschland), and Q131524 (Unternehmer) are correct.

## Plan

### 1. Replace every Q-ID with a verified correct one

I've already searched Wikidata for the intended entities. The corrected mapping:

| Label | Correct Q-ID |
|---|---|
| IPTV | Q177518 |
| Streaming media | Q220499 |
| Over-the-top media service | Q829548 |
| Video on demand | Q723685 |
| Pay-TV / subscription TV | Q721830 |
| Live television | Q431102 |
| Television | Q289 (kept) |
| 4K resolution | Q238162 |
| Web service | Q193424 (kept) |
| Bundesliga | Q82595 (kept) |
| UEFA Champions League | Q18756 |
| Formula One | Q1968 (kept) |
| Sky Deutschland (Sky Germany) | Q652282 |
| DAZN | Q30133334 |
| Smart TV | Q564635 |
| Amazon Fire TV | Q16203668 |
| Apple TV (device) | Q270285 |
| Android TV | Q17298682 |
| Kodi | Q919760 |
| VLC media player | Q171477 (kept) |
| Germany | Q183 (kept) |
| Entrepreneur | Q131524 (kept) |

For the remaining concepts that don't have a clear obvious match (EPG, Catch-up TV, MagentaTV, Waipu.tv, Zattoo, WhatsApp, Kundenservice, Geld-zurück-Garantie, Infomir, the "additionalType" filler IDs Q673708/Q15265344/Q466410/Q47461344/Q5532358/Q19842766), I will look each one up via the Wikidata search API during implementation and either substitute the verified ID or **remove the entry** if no clean match exists. Better no Q-ID than a wrong one.

### 2. Apply the same audit to other route files

I'll grep all `src/routes/*.tsx` for `wikidata.org` and run the same verification on any Q-IDs found there (preise, subscription pages, blog, etc.).

### 3. Verification step (mandatory before writing)

For every Q-ID I keep or add, I'll call the Wikidata `wbgetentities` API to confirm the German/English label matches the name in the schema. Only verified IDs are written.

### Files

- `src/routes/__root.tsx` — fix `additionalType`, `knowsAbout` (Wikidata variants), and all per-service `sameAs` arrays
- Any other route files that turn out to contain Wikidata links

### Out of scope

Wikipedia URLs (`de.wikipedia.org/wiki/...`) and productontology URLs are human-readable slugs and have been spot-checked as correct — I will not touch them unless a Q-ID change forces a paired update.
