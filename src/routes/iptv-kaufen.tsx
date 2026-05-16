import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";

const PATH = "/iptv-kaufen";

const FAQ = [
  { q: "Wo kann ich seriös IPTV kaufen?", a: "Direkt bei uns. Wir sind ein 2019 gegründeter, deutschsprachiger Premium-IPTV-Anbieter mit Anti-Freeze-Servern, sofortiger Aktivierung und 30 Tage Geld-zurück-Garantie. Du kannst per WhatsApp oder direkt über unsere Paketseite bestellen." },
  { q: "Wie bezahle ich, wenn ich IPTV kaufen möchte?", a: "Wir akzeptieren Kredit- und Debitkarten (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, Klarna sowie Krypto (BTC, ETH, USDT). Nach Zahlung wird dein Zugang in wenigen Minuten freigeschaltet." },
  { q: "Was bekomme ich, wenn ich ein IPTV-Abo kaufe?", a: "Über 20.000 Live-Sender, 145.000+ Filme und 44.000+ Serien in HD und 4K UHD, 7-Tage-EPG, Catch-Up, Multi-Device-Support und 24/7 WhatsApp-Support – alles in einem Abo, ohne Hardwarebindung und ohne Vertragslaufzeit." },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}${PATH}#service`,
  name: "IPTV kaufen – Premium IPTV-Abo in 4K UHD",
  description:
    "IPTV-Abo online kaufen: Premium-IPTV-Anbieter mit 20.000+ Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Sofortige Aktivierung, 30 Tage Geld-zurück-Garantie, kein Vertrag.",
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
  { name: "IPTV kaufen", path: PATH },
]);

export const Route = createFileRoute("/iptv-kaufen")({
  head: () => ({
    meta: [
      { title: "IPTV kaufen – Premium IPTV-Abo in 4K UHD | IPTV Anbieter" },
      { name: "description", content: "IPTV-Abo sicher online kaufen: 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD. Sofort aktiv, 30 Tage Geld-zurück, kein Vertrag. Ab €3,75/Monat." },
      { property: "og:title", content: "IPTV kaufen – Premium IPTV-Abo in 4K UHD" },
      { property: "og:description", content: "IPTV-Abo online kaufen: 20.000+ Sender, 4K UHD, sofort aktiv, 30 Tage Geld-zurück." },
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
      badge="IPTV kaufen · Sofort aktiv"
      h1={<>IPTV <span className="text-primary">kaufen</span> – Premium IPTV-Abo in 4K UHD</>}
      intro="Du möchtest IPTV kaufen und suchst einen seriösen, deutschsprachigen Anbieter? Bei uns bekommst du ein vollständiges IPTV-Abo mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in HD und 4K UHD – sofort aktiviert nach Zahlung, mit 30 Tagen Geld-zurück-Garantie und ohne Vertragsbindung. Ab €3,75 pro Monat."
      usps={[
        "Über 20.000 Live-Sender aus DE, AT, CH und 50+ Ländern in HD und 4K UHD",
        "145.000+ Filme und 44.000+ Serien on demand, täglich aktualisiert",
        "Sofortige Aktivierung – Zugang in wenigen Minuten nach Zahlung",
        "30 Tage Geld-zurück-Garantie, kein Vertrag, keine Mindestlaufzeit",
        "Sichere Zahlung: Karte, PayPal, Apple Pay, Google Pay, Klarna, Krypto",
        "24/7 deutschsprachiger Support per WhatsApp",
      ]}
      faq={FAQ}
    />
  );
}
