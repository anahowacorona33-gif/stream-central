import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/SeoLanding";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";

const PATH = "/iptv-test";

const FAQ = [
  { q: "Gibt es einen kostenlosen IPTV-Test?", a: "Wir bieten keinen kostenlosen Probezugang – stattdessen erhältst du mit jedem Abo eine 30-tägige Geld-zurück-Garantie. Du testest den vollen Funktionsumfang und bekommst dein Geld zurück, wenn du nicht zufrieden bist." },
  { q: "Was kann ich im IPTV-Test prüfen?", a: "Alles: 20.000+ Live-Sender in HD und 4K UHD, 145.000+ Filme, 44.000+ Serien, 7-Tage-EPG und Catch-Up, Multi-Device-Wiedergabe sowie die Stabilität unserer Anti-Freeze-Server zu unterschiedlichen Tageszeiten." },
  { q: "Wie funktioniert die 30-Tage Geld-zurück-Garantie?", a: "Innerhalb von 30 Tagen ab Kauf reicht eine kurze Nachricht per WhatsApp oder E-Mail. Wir erstatten dir den vollen Kaufpreis zurück – ohne Diskussion und ohne versteckte Gebühren." },
];

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}${PATH}#service`,
  name: "IPTV Test – 30 Tage Geld-zurück-Garantie",
  description:
    "IPTV testen mit voller Geld-zurück-Garantie: 20.000+ Live-Sender, 4K UHD, EPG, Catch-Up und Multi-Device 30 Tage lang risikofrei prüfen.",
  serviceType: "IPTV Subscription Trial",
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
  { name: "IPTV Test", path: PATH },
]);

export const Route = createFileRoute("/iptv-test")({
  head: () => ({
    meta: [
      { title: "IPTV Test – 30 Tage risikofrei testen | IPTV Anbieter" },
      { name: "description", content: "IPTV-Test mit 30 Tagen Geld-zurück-Garantie: 20.000+ Live-Sender, 4K UHD, EPG, Catch-Up und Multi-Device risikofrei prüfen. Sofort aktiv, kein Vertrag." },
      { property: "og:title", content: "IPTV Test – 30 Tage risikofrei testen" },
      { property: "og:description", content: "Premium IPTV 30 Tage testen: 20.000+ Sender, 4K UHD, volle Geld-zurück-Garantie." },
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
      badge="IPTV Test · 30 Tage Geld-zurück"
      h1={<>IPTV <span className="text-primary">Test</span> – 30 Tage risikofrei testen</>}
      intro="Du willst IPTV testen, bevor du dich festlegst? Bei uns bekommst du keinen kostenlosen Trial-Zugang mit halbem Funktionsumfang, sondern den vollen Premium-IPTV-Dienst mit 30-tägiger Geld-zurück-Garantie. So prüfst du in Ruhe Bildqualität, Stabilität, Senderangebot und Player – wenn dir etwas nicht passt, bekommst du dein Geld zurück."
      usps={[
        "30 Tage volle Geld-zurück-Garantie – risikofreier IPTV-Test",
        "Voller Funktionsumfang: 20.000+ Sender, 4K UHD, EPG, Catch-Up",
        "Stabile Anti-Freeze-Server – auch zu Stoßzeiten ruckelfrei",
        "Auf allen Geräten testen: Smart TV, Fire TV, Apple TV, iOS, Android, MAG, Kodi, VLC",
        "Sofortige Aktivierung – Test startet innerhalb weniger Minuten nach Zahlung",
        "Erstattung unkompliziert per WhatsApp – ohne Diskussion",
      ]}
      faq={FAQ}
    />
  );
}
