import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";

const PATH = "/iptv-anbieter";

const FAQ = [
  { q: "Warum sind wir der richtige IPTV Anbieter für dich?", a: "Wir sind ein 2019 gegründeter, deutschsprachiger Premium-IPTV Anbieter für DACH. Du bekommst über 20.000 Live-Sender, 145.000+ Filme und 44.000+ Serien in 4K UHD, sofortige Aktivierung nach Zahlung, 30 Tage Geld-zurück-Garantie und 24/7 WhatsApp-Support – ohne Vertragsbindung." },
  { q: "Welche Geräte unterstützt der IPTV Anbieter?", a: "Unser IPTV Anbieter-Dienst läuft auf Smart TV (Samsung, LG, Sony), Amazon Fire TV / Fire TV Stick, Apple TV, Android TV, iOS (iPhone / iPad), Android-Smartphones und -Tablets, MAG-Boxen (Infomir), Kodi, VLC und allen gängigen M3U-Playern." },
  { q: "Was kostet ein IPTV Anbieter-Abo bei euch?", a: "Unsere IPTV Anbieter-Pakete starten bei nur 19 € für 3 Monate (rund 6,30 €/Monat). Das beliebte 12-Monats-Paket kostet 45 € (3,75 €/Monat). Alle Preise enthalten 20.000+ Sender, 4K UHD, EPG, Catch-Up und 24/7 Support – keine Zusatzkosten." },
  { q: "Wie schnell aktiviert ein guter IPTV Anbieter den Zugang?", a: "Sofort. Nach Zahlungseingang erhältst du deine Zugangsdaten innerhalb weniger Minuten per E-Mail oder WhatsApp und kannst direkt loslegen – keine Wartezeit, keine versteckten Schritte." },
  { q: "Gibt es bei eurem IPTV Anbieter eine Testphase?", a: "Statt eines limitierten Trials bekommst du 30 Tage volle Geld-zurück-Garantie. Du testest den vollen Funktionsumfang risikofrei – wenn dir etwas nicht passt, erstatten wir den Kaufpreis ohne Diskussion." },
  { q: "Bietet ihr deutschsprachigen Support?", a: "Ja, 24/7 auf Deutsch per WhatsApp. Du bekommst Antwort in der Regel innerhalb weniger Minuten – egal ob Einrichtung, Player-Konfiguration, Senderliste oder Abrechnung." },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}${PATH}#service`,
  name: "IPTV Anbieter – Premium IPTV in 4K UHD",
  description:
    "IPTV Anbieter für Deutschland, Österreich und die Schweiz: 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD. Anti-Freeze-Server, sofortige Aktivierung, 30 Tage Geld-zurück-Garantie, kein Vertrag, 24/7 WhatsApp-Support.",
  serviceType: "IPTV Subscription",
  areaServed: ["DE", "AT", "CH"],
  provider: { "@id": ORG_ID },
  url: `${SITE}${PATH}`,
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}${PATH}#faq`,
  inLanguage: "de-DE",
  mainEntity: FAQ.map((f, i) => ({
    "@type": "Question",
    "@id": `${SITE}${PATH}#faq-q${i + 1}`,
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_JSONLD = breadcrumbJsonLd([
  { name: "Startseite", path: "/" },
  { name: "IPTV Anbieter", path: PATH },
]);

export const Route = createFileRoute("/iptv-anbieter")({
  head: () => ({
    meta: [
      { title: "IPTV Anbieter – 20.000+ Sender in 4K UHD ab €3,75/Monat" },
      { name: "description", content: "IPTV Anbieter für Deutschland, Österreich & Schweiz: 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD. Sofort aktiv, 30 Tage Geld-zurück, kein Vertrag, 24/7 WhatsApp." },
      { name: "keywords", content: "iptv anbieter, iptv anbieter deutschland, iptv anbieter österreich, iptv anbieter schweiz, bester iptv anbieter, premium iptv anbieter, iptv anbieter 4k, iptv anbieter test, iptv anbieter kaufen" },
      { property: "og:title", content: "IPTV Anbieter – Premium IPTV in 4K UHD" },
      { property: "og:description", content: "IPTV Anbieter mit 20.000+ Sendern, 4K UHD, sofort aktiv, 30 Tage Geld-zurück." },
      { property: "og:url", content: PATH },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(SERVICE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_JSONLD) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SeoLanding
      badge="IPTV Anbieter · Premium · DACH"
      h1={<><span className="text-primary">IPTV Anbieter</span> für Deutschland, Österreich & die Schweiz</>}
      intro="Als IPTV Anbieter liefern wir seit 2019 Premium-IPTV für den deutschsprachigen Raum: über 20.000 Live-Sender, 145.000+ Filme und 44.000+ Serien in echtem 4K UHD. Sofortige Aktivierung nach Zahlung, eigene Anti-Freeze-Server für ruckelfreie Wiedergabe, 30 Tage Geld-zurück-Garantie und 24/7 deutschsprachiger WhatsApp-Support – ohne Vertrag, ohne Mindestlaufzeit, ab €3,75 pro Monat."
      usps={[
        "Über 20.000 Live-Sender aus DE, AT, CH und 50+ Ländern in HD und 4K UHD",
        "145.000+ Filme und 44.000+ Serien on demand – täglich aktualisiert",
        "Eigene Anti-Freeze-Server für stabile Wiedergabe, auch zu Stoßzeiten",
        "Sofortige Aktivierung – Zugang in wenigen Minuten nach Zahlung",
        "30 Tage Geld-zurück-Garantie, kein Vertrag, keine Mindestlaufzeit",
        "Multi-Device: Smart TV, Fire TV, Apple TV, iOS, Android, MAG, Kodi, VLC",
        "24/7 deutschsprachiger WhatsApp-Support – Antwort in Minuten",
        "Sichere Zahlung: Karte, PayPal, Apple Pay, Google Pay, Klarna, Krypto",
      ]}
      faq={FAQ}
    />
  );
}
