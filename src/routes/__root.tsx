import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-2 text-sm text-muted-foreground">Bitte versuche es erneut.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://iptvs-anbieter.de/#organization",
      name: "IPTV Anbieter",
      alternateName: ["IPTV Anbieter Deutschland", "IPTVs Anbieter", "Premium IPTV Anbieter"],
      url: "https://iptvs-anbieter.de",
      telephone: "+44-7446-431335",
      email: "support@iptvs-anbieter.de",
      priceRange: "€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Klarna, iDeal, Bancontact, Maestro, Discover, Bitcoin, Ethereum, USDT",
      openingHours: "Mo-Su 00:00-23:59",
      foundingDate: "2019",
      description:
        "Deutschsprachiger IPTV Anbieter für Deutschland, Österreich und die Schweiz: Premium-Abos für 3, 6, 12 und 24 Monate mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Kompatibel mit Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC und Kodi.",
      disambiguatingDescription:
        "Bei IPTV Anbieter steht der DACH-Kunde im Mittelpunkt: 24/7 deutschsprachiger WhatsApp-Support, sofortige Aktivierung, Anti-Freeze-Server in HD und 4K UHD, 30 Tage Geld-zurück-Garantie und keine Mindestlaufzeit innerhalb des gewählten Abos.",
      logo: {
        "@type": "ImageObject",
        url: "https://iptvs-anbieter.de/logo.png",
        width: 512,
        height: 512,
      },
      image: {
        "@type": "ImageObject",
        name: "IPTV Anbieter – Premium IPTV in 4K UHD für Deutschland",
        url: "https://iptvs-anbieter.de/logo.png",
        creator: "IPTV Anbieter",
        author: "Abo Hamza",
        contentLocation: "Berlin, Deutschland",
        description:
          "IPTV Anbieter — Premium IPTV für Deutschland, Österreich und die Schweiz mit 20.000+ Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD.",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Friedrichstraße 123",
        postalCode: "10117",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        name: "IPTV Anbieter – Standort Deutschland",
        latitude: "52.5200",
        longitude: "13.4050",
        description: "Deutschsprachiger IPTV Anbieter mit Sitz in Berlin, Deutschland — aktiv im gesamten DACH-Raum.",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+44-7446-431335",
        email: "support@iptvs-anbieter.de",
        availableLanguage: ["de", "en"],
        areaServed: ["DE", "AT", "CH"],
      },
      areaServed: [
        { "@type": "Country", name: "Deutschland", sameAs: "https://de.wikipedia.org/wiki/Deutschland" },
        { "@type": "Country", name: "Österreich", sameAs: "https://de.wikipedia.org/wiki/%C3%96sterreich" },
        { "@type": "Country", name: "Schweiz", sameAs: "https://de.wikipedia.org/wiki/Schweiz" },
      ],
      founder: { "@id": "https://iptvs-anbieter.de/#abo-hamza" },
      sameAs: [
        "https://x.com/TAnbieter44116",
        "https://web.archive.org/web/20260514203741/http://iptvs-anbieter.de/",
      ],
      additionalType: [
        "https://www.wikidata.org/wiki/Q170453",
        "https://www.wikidata.org/wiki/Q1153191",
        "https://www.wikidata.org/wiki/Q1029752",
        "https://www.wikidata.org/wiki/Q193162",
        "https://www.wikidata.org/wiki/Q673708",
        "https://www.wikidata.org/wiki/Q2659904",
        "https://www.wikidata.org/wiki/Q289",
        "https://www.wikidata.org/wiki/Q15265344",
        "https://www.wikidata.org/wiki/Q466410",
        "https://www.wikidata.org/wiki/Q1153692",
        "https://www.wikidata.org/wiki/Q47461344",
        "https://www.wikidata.org/wiki/Q193424",
        "https://de.wikipedia.org/wiki/Internet_Protocol_Television",
        "https://de.wikipedia.org/wiki/Streaming-Medien",
        "https://de.wikipedia.org/wiki/Over-the-Top-Inhalt",
        "https://de.wikipedia.org/wiki/Video-on-Demand",
        "https://de.wikipedia.org/wiki/Pay-TV",
        "https://de.wikipedia.org/wiki/Smart-TV",
        "https://de.wikipedia.org/wiki/Set-Top-Box",
        "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television",
        "https://de.wikipedia.org/wiki/Electronic_Program_Guide",
        "https://de.wikipedia.org/wiki/Catch-up-TV",
        "https://de.wikipedia.org/wiki/Live-Streaming",
        "http://productontology.org/id/Internet_Protocol_Television",
        "http://productontology.org/id/Streaming_media",
        "http://productontology.org/id/Over-the-top_media_service",
        "http://productontology.org/id/Video_on_demand",
        "http://productontology.org/id/Pay_television",
        "http://productontology.org/id/Smart_TV",
        "http://productontology.org/id/Set-top_box",
        "http://productontology.org/id/Ultra-high-definition_television",
        "http://productontology.org/id/Electronic_program_guide",
        "http://productontology.org/id/Catch_up_TV",
        "http://productontology.org/id/Live_streaming",
      ],
      knowsAbout: [
        { "@type": "Thing", name: "Internet Protocol Television", sameAs: "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
        { "@type": "Thing", name: "Smart-TV", sameAs: "https://de.wikipedia.org/wiki/Smart-TV" },
        { "@type": "Thing", name: "Amazon Fire TV", sameAs: "https://de.wikipedia.org/wiki/Amazon_Fire_TV" },
        { "@type": "Thing", name: "Apple TV", sameAs: "https://de.wikipedia.org/wiki/Apple_TV" },
        { "@type": "Thing", name: "Android TV", sameAs: "https://de.wikipedia.org/wiki/Android_TV" },
        { "@type": "Thing", name: "Kodi", sameAs: "https://de.wikipedia.org/wiki/Kodi_(Software)" },
        { "@type": "Thing", name: "VLC media player", sameAs: "https://de.wikipedia.org/wiki/VLC_media_player" },
        { "@type": "Thing", name: "MAG Set-Top-Box (Infomir)", sameAs: "https://de.wikipedia.org/wiki/Infomir" },
        { "@type": "Thing", name: "4K UHD / Ultra HD Television", sameAs: "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
        { "@type": "Thing", name: "Fußball-Bundesliga", sameAs: "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga" },
        { "@type": "Thing", name: "UEFA Champions League", sameAs: "https://de.wikipedia.org/wiki/UEFA_Champions_League" },
        { "@type": "Thing", name: "Formel 1", sameAs: "https://de.wikipedia.org/wiki/Formel_1" },
        { "@type": "Thing", name: "DFB-Pokal", sameAs: "https://de.wikipedia.org/wiki/DFB-Pokal" },
        { "@type": "Thing", name: "Sky Deutschland", sameAs: "https://de.wikipedia.org/wiki/Sky_Deutschland" },
        { "@type": "Thing", name: "DAZN", sameAs: "https://de.wikipedia.org/wiki/DAZN" },
        { "@type": "Thing", name: "MagentaTV", sameAs: "https://de.wikipedia.org/wiki/MagentaTV" },
        { "@type": "Thing", name: "Waipu.tv", sameAs: "https://de.wikipedia.org/wiki/Waipu.tv" },
        { "@type": "Thing", name: "Zattoo", sameAs: "https://de.wikipedia.org/wiki/Zattoo" },
        { "@type": "Thing", name: "ARD", sameAs: "https://de.wikipedia.org/wiki/ARD" },
        { "@type": "Thing", name: "ZDF", sameAs: "https://de.wikipedia.org/wiki/ZDF" },
        { "@type": "Thing", name: "RTL", sameAs: "https://de.wikipedia.org/wiki/RTL_(Fernsehsender)" },
        { "@type": "Thing", name: "ProSieben", sameAs: "https://de.wikipedia.org/wiki/ProSieben" },
        { "@type": "Thing", name: "Sat.1", sameAs: "https://de.wikipedia.org/wiki/Sat.1" },
        { "@type": "Thing", name: "EPG / TV-Programm", sameAs: "https://de.wikipedia.org/wiki/Electronic_Program_Guide" },
        { "@type": "Thing", name: "Catch-Up TV", sameAs: "https://de.wikipedia.org/wiki/Catch-up-TV" },
        { "@type": "Thing", name: "Video on Demand", sameAs: "https://de.wikipedia.org/wiki/Video-on-Demand" },
      ],
      mainEntityOfPage: "https://iptvs-anbieter.de/",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://iptvs-anbieter.de/#offers",
        name: "IPTV-Abonnements & Leistungen — IPTV, 4K UHD, EPG, Catch-Up, VOD, Multi-Device, Sport-Streaming, 24/7 Support",
        url: "https://iptvs-anbieter.de/",
        itemListElement: [
          {
            "@type": "Offer",
            name: "IPTV-Leistungen",
            itemOffered: [
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-iptv",
                name: "IPTV-Streaming",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Internet Protocol Television",
                areaServed: ["DE", "AT", "CH"],
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Über 20.000 Live-Sender via IPTV in HD und 4K UHD — stabile Server, Anti-Freeze-Technologie, sofortige Aktivierung. Empfang über Smart TV, Fire TV, Apple TV, Android, iOS, MAG-Box, Kodi und VLC.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Internet_Protocol_Television",
                  "https://www.wikidata.org/wiki/Q170453",
                  "http://productontology.org/id/Internet_Protocol_Television",
                  "https://www.google.com/search?q=iptv&kponly",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-livetv",
                name: "Live-TV Streaming (DE / AT / CH)",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Live Television Streaming",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Alle wichtigen deutschsprachigen Sender live: ARD, ZDF, RTL, ProSieben, Sat.1, VOX, Kabel Eins, ServusTV, ORF, SRF — plus internationale Sender aus über 50 Ländern.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Fernsehen",
                  "https://de.wikipedia.org/wiki/Live-Streaming",
                  "https://www.wikidata.org/wiki/Q289",
                  "https://www.wikidata.org/wiki/Q193424",
                  "http://productontology.org/id/Live_streaming",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-4k",
                name: "4K UHD Streaming",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Ultra High Definition Streaming",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Premium-Sender und Top-Filme in echter 4K-Auflösung (3840×2160) mit HDR — sofern vom Sender unterstützt. Voraussetzung: stabile Internetverbindung ab 25 Mbit/s.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television",
                  "https://www.wikidata.org/wiki/Q1153692",
                  "http://productontology.org/id/Ultra-high-definition_television",
                  "https://www.google.com/search?q=4k+uhd&kponly",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-sport",
                name: "Sport-Streaming – Bundesliga, Champions League, Formel 1, Sky Sport, DAZN",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Sports Streaming",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Alle Spiele der Fußball-Bundesliga, 2. Bundesliga, UEFA Champions League, UEFA Europa League, DFB-Pokal, Formel 1, NFL, NBA, Boxen und UFC live — inklusive der kompletten Sky-Sport- und DAZN-Inhalte.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga",
                  "https://de.wikipedia.org/wiki/UEFA_Champions_League",
                  "https://de.wikipedia.org/wiki/Formel_1",
                  "https://de.wikipedia.org/wiki/Sky_Deutschland",
                  "https://de.wikipedia.org/wiki/DAZN",
                  "https://www.wikidata.org/wiki/Q82595",
                  "https://www.wikidata.org/wiki/Q18761",
                  "https://www.wikidata.org/wiki/Q1968",
                  "https://www.wikidata.org/wiki/Q160665",
                  "https://www.wikidata.org/wiki/Q1141477",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-vod",
                name: "Video on Demand – 145.000+ Filme, 44.000+ Serien",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Video on Demand",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Riesige On-Demand-Bibliothek mit über 145.000 Filmen und 44.000+ Serien in mehreren Sprachen und Auflösungen bis 4K UHD — täglich aktualisiert.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Video-on-Demand",
                  "https://www.wikidata.org/wiki/Q193162",
                  "http://productontology.org/id/Video_on_demand",
                  "https://www.google.com/search?q=video+on+demand&kponly",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-epg",
                name: "EPG – Elektronischer Programmführer (7 Tage)",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Electronic Program Guide",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Vollständiger 7-Tage-EPG für alle Sender mit Sendungsdetails, Kategorien und Erinnerungsfunktion — direkt im Player oder in der App.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Electronic_Program_Guide",
                  "https://www.wikidata.org/wiki/Q1326233",
                  "http://productontology.org/id/Electronic_program_guide",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-catchup",
                name: "Catch-Up TV – 7 Tage zurück & Timeshift",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Catch-up Television",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Verpasste Sendungen bis zu 7 Tage zurück anschauen — inklusive Pause, Spulen und Neustart bei Live-Sendungen (Timeshift).",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Catch-up-TV",
                  "https://www.wikidata.org/wiki/Q1052021",
                  "http://productontology.org/id/Catch_up_TV",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-multidevice",
                name: "Multi-Device & Anti-Freeze 4K-Server",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Multi-Platform Streaming",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Kompatibel mit Smart TV (Samsung, LG, Sony), Amazon Fire TV / Fire TV Stick, Apple TV, Android TV, Android-Smartphones & -Tablets, iOS (iPhone / iPad), MAG-Boxen (Infomir), Kodi, VLC und allen gängigen M3U-Playern. Optimierte Anti-Freeze-Server für ruckelfreie Wiedergabe in HD und 4K.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Smart-TV",
                  "https://www.wikidata.org/wiki/Q1145135",
                  "https://de.wikipedia.org/wiki/Amazon_Fire_TV",
                  "https://www.wikidata.org/wiki/Q4738094",
                  "https://de.wikipedia.org/wiki/Apple_TV",
                  "https://www.wikidata.org/wiki/Q239295",
                  "https://de.wikipedia.org/wiki/Android_TV",
                  "https://www.wikidata.org/wiki/Q15706620",
                  "https://de.wikipedia.org/wiki/Kodi_(Software)",
                  "https://www.wikidata.org/wiki/Q399",
                  "https://de.wikipedia.org/wiki/VLC_media_player",
                  "https://www.wikidata.org/wiki/Q171477",
                  "https://de.wikipedia.org/wiki/Infomir",
                  "https://www.wikidata.org/wiki/Q19842766",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-premium-bundles",
                name: "Premium-Sender bündeln – Sky, DAZN, MagentaTV, Waipu.tv, Zattoo",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Premium Channel Bundling",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Alle Premium-Inhalte in einem Abo — ohne mehrere Einzel-Abos bei Sky, DAZN, MagentaTV, Waipu.tv oder Zattoo abschließen zu müssen. Kostenersparnis bis 80 % im Vergleich zu separaten Diensten.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Sky_Deutschland",
                  "https://www.wikidata.org/wiki/Q160665",
                  "https://de.wikipedia.org/wiki/DAZN",
                  "https://www.wikidata.org/wiki/Q1141477",
                  "https://de.wikipedia.org/wiki/MagentaTV",
                  "https://www.wikidata.org/wiki/Q1879696",
                  "https://de.wikipedia.org/wiki/Waipu.tv",
                  "https://www.wikidata.org/wiki/Q29466944",
                  "https://de.wikipedia.org/wiki/Zattoo",
                  "https://www.wikidata.org/wiki/Q593412",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-support",
                name: "24/7 WhatsApp-Support auf Deutsch",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Customer Support",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                availableLanguage: ["de", "en"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44-7446-431335",
                  contactType: "customer support",
                  availableLanguage: ["de", "en"],
                },
                description:
                  "Persönlicher Support per WhatsApp rund um die Uhr — Einrichtung, Player-Konfiguration, Senderlisten, Abrechnungsfragen. Antwort in der Regel innerhalb weniger Minuten.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/WhatsApp",
                  "https://www.wikidata.org/wiki/Q1049511",
                  "https://de.wikipedia.org/wiki/Kundenservice",
                  "https://www.wikidata.org/wiki/Q1142586",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-guarantee",
                name: "Sofort-Aktivierung & 30 Tage Geld-zurück-Garantie",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Service Guarantee",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Zugangsdaten innerhalb weniger Minuten nach Zahlung — und 30 Tage volle Geld-zurück-Garantie bei Unzufriedenheit. Kein Vertrag, keine Mindestlaufzeit innerhalb des gewählten Abos.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Geld-zur%C3%BCck-Garantie",
                  "https://www.wikidata.org/wiki/Q5532358",
                ],
              },
            ],
          },
          {
            "@type": "Offer",
            name: "IPTV Abo 3 Monate",
            price: "19.00",
            priceCurrency: "EUR",
            url: "https://iptvs-anbieter.de/abonnement-3-monate",
            eligibleDuration: { "@type": "QuantitativeValue", value: 3, unitCode: "MON" },
            itemOffered: { "@type": "Service", name: "IPTV-Abonnement 3 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-3-monate" },
          },
          {
            "@type": "Offer",
            name: "IPTV Abo 6 Monate",
            price: "35.00",
            priceCurrency: "EUR",
            url: "https://iptvs-anbieter.de/abonnement-6-monate",
            eligibleDuration: { "@type": "QuantitativeValue", value: 6, unitCode: "MON" },
            itemOffered: { "@type": "Service", name: "IPTV-Abonnement 6 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-6-monate" },
          },
          {
            "@type": "Offer",
            name: "IPTV Abo 12 Monate",
            price: "45.00",
            priceCurrency: "EUR",
            url: "https://iptvs-anbieter.de/abonnement-12-monate",
            eligibleDuration: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
            itemOffered: { "@type": "Service", name: "IPTV-Abonnement 12 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-12-monate" },
          },
          {
            "@type": "Offer",
            name: "IPTV Abo 24 Monate",
            price: "80.00",
            priceCurrency: "EUR",
            url: "https://iptvs-anbieter.de/abonnement-24-monate",
            eligibleDuration: { "@type": "QuantitativeValue", value: 24, unitCode: "MON" },
            itemOffered: { "@type": "Service", name: "IPTV-Abonnement 24 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-24-monate" },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://iptvs-anbieter.de/#webpage",
      url: "https://iptvs-anbieter.de/",
      name: "IPTV Anbieter Deutschland – Premium IPTV in 4K UHD | 20.000+ Sender",
      inLanguage: "de-DE",
      isPartOf: { "@id": "https://iptvs-anbieter.de/#organization" },
      publisher: { "@id": "https://iptvs-anbieter.de/#organization" },
      about: [
        { "@type": "Thing", name: "IPTV", sameAs: "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
        { "@type": "Thing", name: "IPTV", sameAs: "https://www.wikidata.org/wiki/Q170453" },
        { "@type": "Thing", name: "Deutschland", sameAs: "https://de.wikipedia.org/wiki/Deutschland" },
        { "@type": "Thing", name: "Deutschland", sameAs: "https://www.wikidata.org/wiki/Q183" },
        { "@type": "Thing", name: "Smart-TV", sameAs: "https://de.wikipedia.org/wiki/Smart-TV" },
        { "@type": "Thing", name: "Smart-TV", sameAs: "https://www.wikidata.org/wiki/Q1145135" },
        { "@type": "Thing", name: "Fußball-Bundesliga", sameAs: "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga" },
        { "@type": "Thing", name: "Fußball-Bundesliga", sameAs: "https://www.wikidata.org/wiki/Q82595" },
        { "@type": "Thing", name: "UEFA Champions League", sameAs: "https://de.wikipedia.org/wiki/UEFA_Champions_League" },
        { "@type": "Thing", name: "UEFA Champions League", sameAs: "https://www.wikidata.org/wiki/Q18761" },
        { "@type": "Thing", name: "Formel 1", sameAs: "https://de.wikipedia.org/wiki/Formel_1" },
        { "@type": "Thing", name: "Formel 1", sameAs: "https://www.wikidata.org/wiki/Q1968" },
        { "@type": "Thing", name: "Sky Deutschland", sameAs: "https://de.wikipedia.org/wiki/Sky_Deutschland" },
        { "@type": "Thing", name: "Sky Deutschland", sameAs: "https://www.wikidata.org/wiki/Q160665" },
        { "@type": "Thing", name: "DAZN", sameAs: "https://de.wikipedia.org/wiki/DAZN" },
        { "@type": "Thing", name: "DAZN", sameAs: "https://www.wikidata.org/wiki/Q1141477" },
        { "@type": "Thing", name: "4K UHD", sameAs: "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
        { "@type": "Thing", name: "4K UHD", sameAs: "https://www.wikidata.org/wiki/Q1153692" },
        { "@type": "Thing", name: "Streaming-Medien", sameAs: "https://de.wikipedia.org/wiki/Streaming-Medien" },
        { "@type": "Thing", name: "Streaming-Medien", sameAs: "https://www.wikidata.org/wiki/Q1153191" },
        { "@type": "Thing", name: "Live-Fernsehen", sameAs: "https://de.wikipedia.org/wiki/Fernsehen" },
        { "@type": "Thing", name: "Live-Fernsehen", sameAs: "https://www.wikidata.org/wiki/Q289" },
        { "@type": "Thing", name: "Pay-TV", sameAs: "https://de.wikipedia.org/wiki/Pay-TV" },
        { "@type": "Thing", name: "Pay-TV", sameAs: "https://www.wikidata.org/wiki/Q2659904" },
      ],
      mentions: [
        { "@type": "Thing", name: "Amazon Fire TV", sameAs: "https://de.wikipedia.org/wiki/Amazon_Fire_TV" },
        { "@type": "Thing", name: "Amazon Fire TV", sameAs: "https://www.wikidata.org/wiki/Q4738094" },
        { "@type": "Thing", name: "Apple TV", sameAs: "https://de.wikipedia.org/wiki/Apple_TV" },
        { "@type": "Thing", name: "Apple TV", sameAs: "https://www.wikidata.org/wiki/Q239295" },
        { "@type": "Thing", name: "Android TV", sameAs: "https://de.wikipedia.org/wiki/Android_TV" },
        { "@type": "Thing", name: "Android TV", sameAs: "https://www.wikidata.org/wiki/Q15706620" },
        { "@type": "Thing", name: "MAG / Infomir", sameAs: "https://de.wikipedia.org/wiki/Infomir" },
        { "@type": "Thing", name: "Kodi", sameAs: "https://de.wikipedia.org/wiki/Kodi_(Software)" },
        { "@type": "Thing", name: "Kodi", sameAs: "https://www.wikidata.org/wiki/Q399" },
        { "@type": "Thing", name: "VLC media player", sameAs: "https://de.wikipedia.org/wiki/VLC_media_player" },
        { "@type": "Thing", name: "VLC media player", sameAs: "https://www.wikidata.org/wiki/Q171477" },
        { "@type": "Thing", name: "EPG", sameAs: "https://de.wikipedia.org/wiki/Electronic_Program_Guide" },
        { "@type": "Thing", name: "Catch-Up TV", sameAs: "https://de.wikipedia.org/wiki/Catch-up-TV" },
        { "@type": "Thing", name: "Video-on-Demand", sameAs: "https://de.wikipedia.org/wiki/Video-on-Demand" },
        { "@type": "Thing", name: "Video-on-Demand", sameAs: "https://www.wikidata.org/wiki/Q193162" },
        { "@type": "Thing", name: "OTT-Dienst", sameAs: "https://de.wikipedia.org/wiki/Over-the-Top-Inhalt" },
        { "@type": "Thing", name: "OTT-Dienst", sameAs: "https://www.wikidata.org/wiki/Q1029752" },
        { "@type": "Thing", name: "Abonnement", sameAs: "https://de.wikipedia.org/wiki/Abonnement" },
        { "@type": "Thing", name: "MagentaTV", sameAs: "https://de.wikipedia.org/wiki/MagentaTV" },
        { "@type": "Thing", name: "Waipu.tv", sameAs: "https://de.wikipedia.org/wiki/Waipu.tv" },
        { "@type": "Thing", name: "Zattoo", sameAs: "https://de.wikipedia.org/wiki/Zattoo" },
        { "@type": "Thing", name: "ARD", sameAs: "https://de.wikipedia.org/wiki/ARD" },
        { "@type": "Thing", name: "ZDF", sameAs: "https://de.wikipedia.org/wiki/ZDF" },
        { "@type": "Thing", name: "RTL", sameAs: "https://de.wikipedia.org/wiki/RTL_(Fernsehsender)" },
        { "@type": "Thing", name: "ProSieben", sameAs: "https://de.wikipedia.org/wiki/ProSieben" },
        { "@type": "Thing", name: "Sat.1", sameAs: "https://de.wikipedia.org/wiki/Sat.1" },
      ],
      hasPart: [
        { "@id": "https://iptvs-anbieter.de/preise#webpage" },
        { "@id": "https://iptvs-anbieter.de/blog#webpage" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://iptvs-anbieter.de/#abo-hamza",
      name: "Abo Hamza",
      givenName: "Abo",
      familyName: "Hamza",
      gender: "Male",
      jobTitle: "CEO / Gründer",
      description:
        "Gründer von IPTV Anbieter — seit 2019 spezialisiert auf Premium-IPTV in 4K UHD für Deutschland, Österreich und die Schweiz.",
      worksFor: { "@id": "https://iptvs-anbieter.de/#organization" },
      workLocation: "https://iptvs-anbieter.de/",
      url: "https://iptvs-anbieter.de/",
      additionalType: [
        "https://de.wikipedia.org/wiki/Unternehmer",
        "https://www.wikidata.org/wiki/Q131524",
      ],
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IPTV Anbieter – Premium IPTV 4K ab €3,75/Monat" },
      { name: "description", content: "IPTV Anbieter mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. €45/Jahr, 30 Tage Geld-zurück, sofortige Aktivierung." },
      { name: "author", content: "IPTV Anbieter" },
      { name: "google-site-verification", content: "GUg6Rq_Pg7J4LWMPdyeAqTqIWN6O9yvnrNqpdjAb8Ak" },
      { property: "og:title", content: "IPTV Anbieter – Premium IPTV in 4K" },
      { property: "og:description", content: "IPTV Anbieter: 20.000+ Sender, 145.000+ Filme, 44.000+ Serien. Nur €45/Jahr." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSONLD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
