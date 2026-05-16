## Goal

Make the JSON-LD read like a rich **business profile of IPTV Anbieter**, not a topic dump or competitor comparison. Below is a concrete before/after preview so you can see exactly what the schema will look like.

---

## Preview: Organization node

### BEFORE (today)

```json
{
  "@type": "ProfessionalService",
  "@id": "https://iptvs-anbieter.de/#organization",
  "name": "IPTV Anbieter",
  "description": "Deutschsprachiger IPTV Anbieter für Deutschland, Österreich und die Schweiz: Premium-Abos für 3, 6, 12 und 24 Monate mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Kompatibel mit Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC und Kodi.",
  "knowsAbout": [
    "Internet Protocol Television", "Smart-TV", "Amazon Fire TV", "Apple TV",
    "Android TV", "Kodi", "VLC", "MAG", "4K UHD", "Bundesliga", "Champions League",
    "Formel 1", "DFB-Pokal",
    "Sky Deutschland", "DAZN", "MagentaTV", "Waipu.tv", "Zattoo",
    "ARD", "ZDF", "RTL", "ProSieben", "Sat.1",
    "EPG", "Catch-Up TV", "VOD"
  ]
}
```

### AFTER (proposed)

```json
{
  "@type": "ProfessionalService",
  "@id": "https://iptvs-anbieter.de/#organization",
  "name": "IPTV Anbieter",
  "slogan": "Premium IPTV in 4K UHD – sofort aktiv, 30 Tage Geld-zurück.",
  "description": "IPTV Anbieter ist ein 2019 gegründeter, deutschsprachiger Premium-IPTV-Dienst für Deutschland, Österreich und die Schweiz. Wir liefern über 20.000 Live-Sender, 145.000+ Filme und 44.000+ Serien in HD und 4K UHD über unsere Anti-Freeze-Server. Jeder Kunde erhält sofortige Aktivierung nach der Bestellung, kann zwischen Abos von 3, 6, 12 oder 24 Monaten wählen und ist durch unsere 30-Tage-Geld-zurück-Garantie abgesichert. Unser deutschsprachiger Support ist 24/7 per WhatsApp erreichbar.",
  "disambiguatingDescription": "Eigenständiger DACH-fokussierter IPTV-Anbieter — keine Mindestlaufzeit innerhalb des Abos, keine Hardwarebindung, kompatibel mit Smart TV, Fire TV, Apple TV, Android, iOS, MAG-Box, Kodi und VLC.",
  "foundingDate": "2019",
  "knowsLanguage": ["de", "en"],
  "areaServed": [ /* DE, AT, CH — unchanged */ ],
  "brand": {
    "@type": "Brand",
    "name": "IPTV Anbieter",
    "logo": "https://iptvs-anbieter.de/logo.png",
    "slogan": "Premium IPTV in 4K UHD"
  },
  "makesOffer": [
    { "@type": "Offer", "name": "3-Monats-Abo",  "category": "IPTV-Abonnement" },
    { "@type": "Offer", "name": "6-Monats-Abo",  "category": "IPTV-Abonnement" },
    { "@type": "Offer", "name": "12-Monats-Abo", "category": "IPTV-Abonnement" },
    { "@type": "Offer", "name": "24-Monats-Abo", "category": "IPTV-Abonnement" }
  ],
  "keywords": "IPTV Deutschland, Premium IPTV Abo, 4K UHD Streaming, 20.000 Live-Sender, sofortige Aktivierung, 30 Tage Geld-zurück, 24/7 WhatsApp Support, IPTV DACH, Anti-Freeze Server",
  "knowsAbout": [
    { "@type": "Thing", "name": "Internet Protocol Television", "sameAs": "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
    { "@type": "Thing", "name": "Streaming Media",             "sameAs": "https://de.wikipedia.org/wiki/Streaming_Media" },
    { "@type": "Thing", "name": "Over-the-Top Media Service",  "sameAs": "https://en.wikipedia.org/wiki/Over-the-top_media_service" },
    { "@type": "Thing", "name": "Video on Demand",             "sameAs": "https://de.wikipedia.org/wiki/Video-on-Demand" },
    { "@type": "Thing", "name": "Pay-TV",                      "sameAs": "https://de.wikipedia.org/wiki/Pay-TV" },
    { "@type": "Thing", "name": "Live-Streaming",              "sameAs": "https://de.wikipedia.org/wiki/Live-Streaming" },
    { "@type": "Thing", "name": "4K Ultra HD",                 "sameAs": "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
    { "@type": "Thing", "name": "Electronic Program Guide",    "sameAs": "https://de.wikipedia.org/wiki/Electronic_Program_Guide" },
    { "@type": "Thing", "name": "Catch-up TV",                 "sameAs": "https://en.wikipedia.org/wiki/Catch-up_TV" }
  ]
}
```

Notes:
- **Removed entirely**: Sky Deutschland, DAZN, MagentaTV, Waipu.tv, Zattoo. No `competitor` field. They disappear from the graph.
- **Device brands** (Fire TV, Apple TV, Android TV, Kodi, VLC, MAG/Infomir) move to the matching Service node's `availableOnDevice`.
- **TV channels** (ARD, ZDF, RTL, ProSieben, Sat.1) move to `#service-livetv.category`.
- **Sport leagues** (Bundesliga, UCL, F1, DFB-Pokal) move to `#service-sport.category`.

---

## Preview: Service nodes (the two that name rivals today)

### BEFORE — `#service-sport`

```json
{
  "name": "Sport-Streaming – Bundesliga, Champions League, Formel 1, Sky Sport, DAZN",
  "description": "… inklusive der kompletten Sky-Sport- und DAZN-Inhalte."
}
```

### AFTER — `#service-sport`

```json
{
  "@type": "Service",
  "@id": "https://iptvs-anbieter.de/#service-sport",
  "name": "Sport-Streaming in 4K UHD – Bundesliga, Champions League, Formel 1, DFB-Pokal",
  "description": "Alle Spiele der Fußball-Bundesliga, 2. Bundesliga, UEFA Champions League, UEFA Europa League, DFB-Pokal, Formel 1, NFL, NBA, Boxen und UFC live in HD und 4K UHD über unsere Anti-Freeze-Server.",
  "provider": { "@id": "https://iptvs-anbieter.de/#organization" },
  "areaServed": ["DE", "AT", "CH"],
  "category": [
    { "@type": "Thing", "name": "Fußball-Bundesliga",     "sameAs": "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga" },
    { "@type": "Thing", "name": "UEFA Champions League",  "sameAs": "https://de.wikipedia.org/wiki/UEFA_Champions_League" },
    { "@type": "Thing", "name": "Formel 1",               "sameAs": "https://de.wikipedia.org/wiki/Formel_1" },
    { "@type": "Thing", "name": "DFB-Pokal",              "sameAs": "https://de.wikipedia.org/wiki/DFB-Pokal" }
  ]
}
```

The "Premium-Inhalte gebündelt" service (today lists Sky/DAZN/MagentaTV/Waipu.tv/Zattoo as rivals) becomes:

```json
{
  "@id": "https://iptvs-anbieter.de/#service-all-in-one",
  "name": "All-in-One IPTV-Abo – Sport, Filme, Serien und Live-TV in einem Paket",
  "description": "Ein einziges Abo für 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien, Sport, Kinder- und internationale Sender. Sofortige Aktivierung, kein Vertrag, 30 Tage Geld-zurück-Garantie."
}
```

---

## Preview: WebPage.about

### BEFORE
24 Things mixing tech, channels, leagues, rival services.

### AFTER
4 core topics:

```json
"about": [
  { "@type": "Thing", "name": "IPTV",                       "sameAs": "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
  { "@type": "Thing", "name": "Premium IPTV Deutschland",   "sameAs": "https://www.wikidata.org/wiki/Q177518" },
  { "@type": "Thing", "name": "4K UHD Streaming",           "sameAs": "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
  { "@type": "Thing", "name": "Live-TV DACH",               "sameAs": "https://de.wikipedia.org/wiki/Live-Streaming" }
]
```

---

## Files touched

Only `src/routes/__root.tsx`. No UI changes, no new files, no dependencies.

## Confirm before I implement

1. **Founded 2019** — correct, or different year?
2. The **rival services are removed entirely** from the JSON-LD (no `competitor` field). OK?
3. Anything else about the business you'd like surfaced (e.g. number of customers, specific awards, payment methods highlighted in `description`)?
