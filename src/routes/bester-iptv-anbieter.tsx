import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";

const PATH = "/bester-iptv-anbieter";

const FAQ = [
  { q: "Welcher IPTV-Anbieter ist der beste in Deutschland?", a: "Der beste IPTV-Anbieter in Deutschland kombiniert ein riesiges Senderangebot, echte 4K-Qualität, stabile Anti-Freeze-Server, sofortige Aktivierung und eine Geld-zurück-Garantie. Wir bieten genau das: 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD, 30 Tage Geld-zurück und 24/7 deutschsprachigen WhatsApp-Support." },
  { q: "Welcher IPTV-Anbieter hat das beste Senderangebot?", a: "Wir liefern über 20.000 Live-TV-Sender aus dem deutschsprachigen Raum (DE, AT, CH) sowie aus mehr als 50 weiteren Ländern – inklusive Sport, Film, Kinder, Nachrichten und internationaler Programme in HD und 4K UHD." },
  { q: "Welcher IPTV-Anbieter hat die besten Sport-Sender?", a: "Unser Sport-Paket umfasst nationalen und internationalen Fußball, Motorsport, US-Sport, Kampfsport und Wintersport live in HD und 4K UHD – alles im IPTV-Abo enthalten, ohne zusätzliche Sport-Abos." },
  { q: "Woran erkenne ich einen guten IPTV-Anbieter?", a: "An vier Punkten: Senderzahl und Auflösung (mindestens 4K UHD), Stabilität der Server (Anti-Freeze), Aktivierungszeit (sollte sofort sein) und Absicherung (Geld-zurück-Garantie). Ein seriöser Anbieter kommuniziert klar, bietet deutschsprachigen Support und verlangt keine lange Vertragsbindung." },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}${PATH}#service`,
  name: "Bester IPTV-Anbieter in Deutschland",
  description:
    "Premium-IPTV-Anbieter für Deutschland, Österreich und die Schweiz: 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD, Anti-Freeze-Server, sofortige Aktivierung, 30 Tage Geld-zurück, 24/7 WhatsApp-Support.",
  serviceType: "Premium IPTV Subscription",
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
  { name: "Bester IPTV-Anbieter", path: PATH },
]);

export const Route = createFileRoute("/bester-iptv-anbieter")({
  head: () => ({
    meta: [
      { title: "Bester IPTV-Anbieter in Deutschland – Premium IPTV in 4K UHD" },
      { name: "description", content: "Welcher IPTV-Anbieter ist der beste? 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD, sofort aktiv, 30 Tage Geld-zurück, 24/7 WhatsApp-Support." },
      { property: "og:title", content: "Bester IPTV-Anbieter in Deutschland – Premium IPTV in 4K UHD" },
      { property: "og:description", content: "Premium-IPTV-Anbieter für DACH: 20.000+ Sender, 4K UHD, sofort aktiv, 30 Tage Geld-zurück." },
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
      badge="Bester IPTV-Anbieter · DACH"
      h1={<>Der <span className="text-primary">beste IPTV-Anbieter</span> in Deutschland, Österreich & der Schweiz</>}
      intro="Welcher IPTV-Anbieter ist der beste? Die Antwort hängt von vier Faktoren ab: Senderangebot, Bildqualität, Stabilität und Service. Wir liefern auf allen vier Achsen: über 20.000 Live-Sender in HD und 4K UHD, 145.000+ Filme und 44.000+ Serien on demand, eigene Anti-Freeze-Server für ruckelfreie Wiedergabe sowie sofortige Aktivierung mit 30 Tagen Geld-zurück-Garantie und 24/7 deutschsprachigem WhatsApp-Support."
      usps={[
        "20.000+ Live-Sender aus DE, AT, CH und über 50 weiteren Ländern",
        "Echtes 4K UHD mit HDR – nicht nur HD-Upscaling",
        "Eigene Anti-Freeze-Server für stabile Wiedergabe – auch zu Stoßzeiten",
        "Sofortige Aktivierung nach Zahlung, in wenigen Minuten",
        "30 Tage Geld-zurück-Garantie, kein Vertrag, keine Mindestlaufzeit",
        "24/7 deutschsprachiger WhatsApp-Support – Antwort in Minuten",
      ]}
      faq={FAQ}
    />
  );
}
