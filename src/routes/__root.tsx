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
      "@type": "Organization",
      "@id": "https://iptvs-anbieter.de/#organization",
      name: "IPTV Anbieter",
      alternateName: ["IPTV Anbieter Deutschland", "IPTV-Anbieter", "Premium IPTV Anbieter", "IPTV Anbieter DE"],
      url: "https://iptvs-anbieter.de",
      telephone: "+44-7446-431335",
      email: "support@iptvs-anbieter.de",
      foundingDate: "2019",
      slogan: "Bester IPTV Anbieter in Deutschland – Premium IPTV in 4K UHD, sofort aktiv, 30 Tage Geld-zurück.",
      knowsLanguage: ["de", "en"],
      keywords:
        "iptv anbieter, bester iptv anbieter, iptv anbieter deutschland, iptv kaufen, iptv test, iptv abo, iptv abonnement, iptv box, iptv germany, german iptv, premium iptv, iptv 4k, iptv uhd, iptv smart tv, iptv fire tv, iptv apple tv, iptv mag, iptv kodi, iptv vlc, iptv 30 tage geld zurück, iptv sofort aktiv, iptv 24/7 support",
      brand: {
        "@type": "Brand",
        name: "IPTV Anbieter",
        logo: "https://iptvs-anbieter.de/logo.png",
        slogan: "Bester IPTV Anbieter in Deutschland – Premium IPTV in 4K UHD",
      },
      makesOffer: [
        { "@type": "Offer", name: "IPTV Abo 3 Monate kaufen", category: "IPTV-Abonnement", url: "https://iptvs-anbieter.de/abonnement-3-monate" },
        { "@type": "Offer", name: "IPTV Abo 6 Monate kaufen", category: "IPTV-Abonnement", url: "https://iptvs-anbieter.de/abonnement-6-monate" },
        { "@type": "Offer", name: "IPTV Abo 12 Monate kaufen", category: "IPTV-Abonnement", url: "https://iptvs-anbieter.de/abonnement-12-monate" },
        { "@type": "Offer", name: "IPTV Abo 24 Monate kaufen", category: "IPTV-Abonnement", url: "https://iptvs-anbieter.de/abonnement-24-monate" },
      ],
      description:
        "IPTV Anbieter ist ein 2019 gegründeter, deutschsprachiger Premium-IPTV-Dienst für Deutschland, Österreich und die Schweiz. Wir betreiben eigene Anti-Freeze-Server in HD und 4K UHD und liefern ein vollständiges IPTV-Abo mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien — alles in einem Paket, ohne Hardwarebindung. Wer ein IPTV-Abo kaufen oder vorab im IPTV-Test prüfen möchte, erhält sofortige Aktivierung nach Zahlung, eine Laufzeit nach Wahl (3, 6, 12 oder 24 Monate) und 30 Tage Geld-zurück-Garantie. Unser deutschsprachiger Support ist 24/7 per WhatsApp erreichbar.",
      disambiguatingDescription:
        "Eigenständiger IPTV-Anbieter mit Fokus auf den DACH-Markt (Deutschland, Österreich, Schweiz). Geräteunabhängig: läuft auf Smart TV (Samsung, LG, Sony), Amazon Fire TV, Apple TV, Android TV, iOS, MAG-Box (Infomir), Kodi und VLC. Keine Mindestlaufzeit innerhalb des Abos, keine Vertragsbindung, keine versteckten Kosten. Zahlung per Kredit-/Debitkarte, PayPal, Apple Pay, Google Pay, Klarna sowie Krypto (BTC, ETH, USDT).",
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
        contentUrl: "https://iptvs-anbieter.de/logo.png",
        creator: {
          "@type": "Organization",
          "@id": "https://iptvs-anbieter.de/#organization",
          name: "IPTV Anbieter",
        },
        author: { "@type": "Person", name: "Abo Hamza" },
        creditText: "IPTV Anbieter",
        copyrightNotice: "© 2019–2026 IPTV Anbieter. Alle Rechte vorbehalten.",
        copyrightHolder: {
          "@id": "https://iptvs-anbieter.de/#organization",
        },
        license: "https://iptvs-anbieter.de/",
        acquireLicensePage: "https://iptvs-anbieter.de/",
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
      location: {
        "@type": "Place",
        name: "IPTV Anbieter – Standort Deutschland",
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
          latitude: "52.5200",
          longitude: "13.4050",
        },
        description: "Deutschsprachiger IPTV Anbieter mit Sitz in Berlin, Deutschland — aktiv im gesamten DACH-Raum.",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+44-7446-431335",
        email: "support@iptvs-anbieter.de",
        availableLanguage: ["de", "en"],
        areaServed: ["DE", "AT", "CH"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
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
        "https://www.wikidata.org/wiki/Q177518",
        "https://www.wikidata.org/wiki/Q220499",
        "https://www.wikidata.org/wiki/Q829548",
        "https://www.wikidata.org/wiki/Q723685",
        "https://www.wikidata.org/wiki/Q721830",
        "https://www.wikidata.org/wiki/Q289",
        "https://www.wikidata.org/wiki/Q15265344",
        "https://www.wikidata.org/wiki/Q466410",
        "https://www.wikidata.org/wiki/Q841163",
        "https://www.wikidata.org/wiki/Q193424",
        "https://de.wikipedia.org/wiki/Internet_Protocol_Television",
        "https://de.wikipedia.org/wiki/Streaming_Media",
        "https://en.wikipedia.org/wiki/Over-the-top_media_service",
        "https://de.wikipedia.org/wiki/Video-on-Demand",
        "https://de.wikipedia.org/wiki/Pay-TV",
        "https://de.wikipedia.org/wiki/Smart-TV",
        "https://de.wikipedia.org/wiki/Set-Top-Box",
        "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television",
        "https://de.wikipedia.org/wiki/Electronic_Program_Guide",
        "https://en.wikipedia.org/wiki/Catch-up_TV",
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
        { "@type": "Thing", name: "Streaming Media", sameAs: "https://de.wikipedia.org/wiki/Streaming_Media" },
        { "@type": "Thing", name: "Over-the-Top Media Service", sameAs: "https://en.wikipedia.org/wiki/Over-the-top_media_service" },
        { "@type": "Thing", name: "Video on Demand", sameAs: "https://de.wikipedia.org/wiki/Video-on-Demand" },
        { "@type": "Thing", name: "Pay-TV", sameAs: "https://de.wikipedia.org/wiki/Pay-TV" },
        { "@type": "Thing", name: "Live-Streaming", sameAs: "https://de.wikipedia.org/wiki/Live-Streaming" },
        { "@type": "Thing", name: "4K Ultra HD Television", sameAs: "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
        { "@type": "Thing", name: "Electronic Program Guide", sameAs: "https://de.wikipedia.org/wiki/Electronic_Program_Guide" },
        { "@type": "Thing", name: "Catch-up TV", sameAs: "https://en.wikipedia.org/wiki/Catch-up_TV" },
        { "@type": "Thing", name: "Smart-TV", sameAs: "https://de.wikipedia.org/wiki/Smart-TV" },
        { "@type": "Thing", name: "Set-Top-Box", sameAs: "https://de.wikipedia.org/wiki/Set-Top-Box" },
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
                  "https://www.wikidata.org/wiki/Q177518",
                  "http://productontology.org/id/Internet_Protocol_Television",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-livetv",
                name: "Live-TV per IPTV in Deutschland, Österreich und der Schweiz",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Live Television Streaming",
                areaServed: ["DE", "AT", "CH"],
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Vollständiges Live-TV-Paket per IPTV: deutschsprachige öffentlich-rechtliche und private Sender, regionale Programme aus Österreich und der Schweiz sowie internationale Sender aus über 50 Ländern — alles in HD und 4K UHD über unsere Anti-Freeze-Server, mit 7-Tage-EPG und Catch-Up.",
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
                  "https://www.wikidata.org/wiki/Q841163",
                  "http://productontology.org/id/Ultra-high-definition_television",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-sport",
                name: "Sport-Streaming per IPTV in 4K UHD",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Sports Streaming",
                areaServed: ["DE", "AT", "CH"],
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Vollständiges Sport-Paket per IPTV: nationaler und internationaler Fußball, Motorsport, US-Sport, Kampfsport und Wintersport — live in HD und 4K UHD über unsere Anti-Freeze-Server. Keine zusätzlichen Sport-Abos nötig, alles im IPTV-Abo enthalten.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Internet_Protocol_Television",
                  "https://www.wikidata.org/wiki/Q177518",
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
                  "https://www.wikidata.org/wiki/Q723685",
                  "http://productontology.org/id/Video_on_demand",
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
                  "https://www.wikidata.org/wiki/Q860605",
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
                  "https://en.wikipedia.org/wiki/Catch-up_TV",
                  "http://productontology.org/id/Catch_up_TV",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-multidevice",
                name: "Multi-Device & Anti-Freeze 4K-Server",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Multi-Platform Streaming",
                areaServed: ["DE", "AT", "CH"],
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Kompatibel mit Smart TV (Samsung, LG, Sony), Amazon Fire TV / Fire TV Stick, Apple TV, Android TV, Android-Smartphones & -Tablets, iOS (iPhone / iPad), MAG-Boxen (Infomir), Kodi, VLC und allen gängigen M3U-Playern. Optimierte Anti-Freeze-Server für ruckelfreie Wiedergabe in HD und 4K.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Smart-TV",
                  "https://www.wikidata.org/wiki/Q564635",
                  "https://de.wikipedia.org/wiki/Amazon_Fire_TV",
                  "https://www.wikidata.org/wiki/Q16203668",
                  "https://de.wikipedia.org/wiki/Apple_TV",
                  "https://www.wikidata.org/wiki/Q270285",
                  "https://de.wikipedia.org/wiki/Android_TV",
                  "https://www.wikidata.org/wiki/Q17298682",
                  "https://de.wikipedia.org/wiki/Kodi_(Software)",
                  "https://www.wikidata.org/wiki/Q919760",
                  "https://de.wikipedia.org/wiki/VLC_media_player",
                  "https://www.wikidata.org/wiki/Q171477",
                  "https://en.wikipedia.org/wiki/Infomir",
                  "https://www.wikidata.org/wiki/Q68565846",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-all-in-one",
                name: "All-in-One IPTV-Abo – Sport, Filme, Serien und Live-TV in einem Paket",
                url: "https://iptvs-anbieter.de/",
                serviceType: "All-in-One IPTV Subscription",
                areaServed: ["DE", "AT", "CH"],
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                description:
                  "Ein einziges Abo für 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien, Sport, Kinder- und internationale Sender in HD und 4K UHD. Sofortige Aktivierung, kein Vertrag, keine Mindestlaufzeit innerhalb des Abos, 30 Tage Geld-zurück-Garantie.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/Internet_Protocol_Television",
                  "https://www.wikidata.org/wiki/Q177518",
                ],
              },
              {
                "@type": "Service",
                "@id": "https://iptvs-anbieter.de/#service-support",
                name: "24/7 WhatsApp-Support auf Deutsch",
                url: "https://iptvs-anbieter.de/",
                serviceType: "Customer Support",
                provider: { "@id": "https://iptvs-anbieter.de/#organization" },
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
                description:
                  "Persönlicher Support per WhatsApp rund um die Uhr — Einrichtung, Player-Konfiguration, Senderlisten, Abrechnungsfragen. Antwort in der Regel innerhalb weniger Minuten.",
                sameAs: [
                  "https://de.wikipedia.org/wiki/WhatsApp",
                  "https://www.wikidata.org/wiki/Q1049511",
                  "https://de.wikipedia.org/wiki/Kundenservice",
                  "https://www.wikidata.org/wiki/Q1060653",
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
                  "https://en.wikipedia.org/wiki/Money-back_guarantee",
                  "https://www.wikidata.org/wiki/Q6899215",
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
      "@type": "WebSite",
      "@id": "https://iptvs-anbieter.de/#website",
      url: "https://iptvs-anbieter.de/",
      name: "IPTV Anbieter",
      inLanguage: "de-DE",
      publisher: { "@id": "https://iptvs-anbieter.de/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://iptvs-anbieter.de/#webpage",
      url: "https://iptvs-anbieter.de/",
      name: "IPTV Anbieter Deutschland – Premium IPTV in 4K UHD | 20.000+ Sender",
      inLanguage: "de-DE",
      isPartOf: { "@id": "https://iptvs-anbieter.de/#website" },
      publisher: { "@id": "https://iptvs-anbieter.de/#organization" },
      about: [
        { "@type": "Thing", name: "IPTV", sameAs: "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
        { "@type": "Thing", name: "Premium IPTV Deutschland", sameAs: "https://www.wikidata.org/wiki/Q177518" },
        { "@type": "Thing", name: "4K UHD Streaming", sameAs: "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
        { "@type": "Thing", name: "Live-TV DACH", sameAs: "https://de.wikipedia.org/wiki/Live-Streaming" },
      ],
      mentions: [
        { "@type": "Thing", name: "Video on Demand", sameAs: "https://de.wikipedia.org/wiki/Video-on-Demand" },
        { "@type": "Thing", name: "Pay-TV", sameAs: "https://de.wikipedia.org/wiki/Pay-TV" },
        { "@type": "Thing", name: "Electronic Program Guide", sameAs: "https://de.wikipedia.org/wiki/Electronic_Program_Guide" },
        { "@type": "Thing", name: "Catch-up TV", sameAs: "https://en.wikipedia.org/wiki/Catch-up_TV" },
        { "@type": "Thing", name: "Over-the-Top Media Service", sameAs: "https://en.wikipedia.org/wiki/Over-the-top_media_service" },
        { "@type": "Thing", name: "Abonnement", sameAs: "https://de.wikipedia.org/wiki/Abonnement" },
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
      url: "https://iptvs-anbieter.de/autor",
      mainEntityOfPage: "https://iptvs-anbieter.de/autor",
      sameAs: ["https://iptvs-anbieter.de/autor"],
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
      { title: "IPTV Anbieter Deutschland – Bester Premium IPTV Anbieter in 4K UHD" },
      { name: "description", content: "IPTV Anbieter in Deutschland: Premium IPTV-Abo in 4K UHD kaufen — 20.000+ Sender, 145.000+ Filme, 44.000+ Serien. Sofort aktiv, IPTV-Test mit 30 Tagen Geld-zurück." },
      { name: "keywords", content: "iptv anbieter, bester iptv anbieter, iptv anbieter deutschland, iptv kaufen, iptv test, iptv abo, iptv box, premium iptv, iptv 4k, iptv smart tv, iptv fire tv, german iptv" },
      { name: "author", content: "IPTV Anbieter" },
      { name: "google-site-verification", content: "GUg6Rq_Pg7J4LWMPdyeAqTqIWN6O9yvnrNqpdjAb8Ak" },
      { property: "og:title", content: "IPTV Anbieter Deutschland – Bester Premium IPTV Anbieter in 4K UHD" },
      { property: "og:description", content: "Premium IPTV-Abo in Deutschland kaufen: 20.000+ Sender, 4K UHD, sofort aktiv, 30 Tage Geld-zurück." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SITE_JSONLD) },
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
