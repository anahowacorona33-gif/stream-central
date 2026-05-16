import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, Clock, Globe, MapPin } from "lucide-react";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";
import { whatsappLink, WHATSAPP_DISPLAY, SUPPORT_EMAIL } from "@/lib/contact";

const PATH = "/kontakt";

const FAQ = [
  { q: "Wie schnell antwortet der Support?", a: "Per WhatsApp meist innerhalb weniger Minuten – rund um die Uhr, 7 Tage die Woche. Per E-Mail typischerweise innerhalb von 1-2 Stunden." },
  { q: "In welchen Sprachen ist der Support verfügbar?", a: "Wir antworten auf Deutsch und Englisch. Der primäre Support-Kanal ist deutschsprachig." },
  { q: "Wo bekomme ich eine Rechnung für mein IPTV-Abo?", a: "Nach jeder Zahlung erhältst du automatisch eine Rechnung als PDF per E-Mail. Falls du eine weitere Kopie brauchst, melde dich kurz per WhatsApp oder E-Mail." },
  { q: "Wie storniere ich mein Abo?", a: "Es gibt keine automatische Verlängerung – dein Zugang läuft am Ende der gewählten Laufzeit automatisch aus. Innerhalb der ersten 30 Tage erstatten wir den vollen Kaufpreis ohne Diskussion." },
];

const CONTACT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE}${PATH}#contactpage`,
  inLanguage: "de-DE",
  url: `${SITE}${PATH}`,
  name: "Kontakt – IPTV Anbieter Support",
  about: { "@id": ORG_ID },
  mainEntity: {
    "@id": ORG_ID,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+44-7446-431335",
        email: SUPPORT_EMAIL,
        availableLanguage: ["de", "en"],
        areaServed: ["DE", "AT", "CH"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "billing support",
        email: SUPPORT_EMAIL,
        availableLanguage: ["de", "en"],
        areaServed: ["DE", "AT", "CH"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: SUPPORT_EMAIL,
        availableLanguage: ["de", "en"],
        areaServed: ["DE", "AT", "CH"],
      },
    ],
  },
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
  { name: "Kontakt", path: PATH },
]);

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – IPTV Anbieter Support (24/7 WhatsApp)" },
      { name: "description", content: "Kontaktiere IPTV Anbieter: 24/7 WhatsApp-Support auf Deutsch, E-Mail support@iptvs-anbieter.de, Telefon +44 7446 431335. Antwort meist innerhalb weniger Minuten." },
      { property: "og:title", content: "Kontakt – IPTV Anbieter Support" },
      { property: "og:description", content: "24/7 deutschsprachiger Support per WhatsApp, E-Mail und Telefon. Antwort innerhalb weniger Minuten." },
      { property: "og:url", content: PATH },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(CONTACT_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_JSONLD) },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          Kontakt · 24/7 Support
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">
          Kontakt – <span className="text-primary">IPTV Anbieter</span> Support
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Schnellste Antwort per WhatsApp – meist innerhalb weniger Minuten. Auf Deutsch, rund um die Uhr.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card className="border-border/60 bg-card/60 p-6">
          <MessageCircle className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-display text-xl">WhatsApp</h2>
          <p className="mt-1 text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p>
          <p className="mt-1 text-xs text-muted-foreground">24/7 · Antwort in Minuten</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Chat starten
          </a>
        </Card>
        <Card className="border-border/60 bg-card/60 p-6">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-display text-xl">E-Mail</h2>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-1 block text-sm hover:text-primary">{SUPPORT_EMAIL}</a>
          <p className="mt-1 text-xs text-muted-foreground">Antwort innerhalb 1-2 Std.</p>
        </Card>
        <Card className="border-border/60 bg-card/60 p-6">
          <Phone className="h-6 w-6 text-primary" />
          <h2 className="mt-3 font-display text-xl">Telefon</h2>
          <a href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`} className="mt-1 block text-sm hover:text-primary">{WHATSAPP_DISPLAY}</a>
          <p className="mt-1 text-xs text-muted-foreground">Mo-So, 08-22 Uhr</p>
        </Card>
      </div>

      <Card className="mt-6 border-border/60 bg-card/60 p-6 md:p-8">
        <h2 className="font-display text-2xl">Service-Details</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Erreichbarkeit</p>
              <p className="text-sm text-muted-foreground">WhatsApp & E-Mail 24/7, 365 Tage im Jahr.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Sprachen</p>
              <p className="text-sm text-muted-foreground">Deutsch (primär) und Englisch.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Servicegebiet</p>
              <p className="text-sm text-muted-foreground">Deutschland, Österreich und die Schweiz (DACH).</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Themen</p>
              <p className="text-sm text-muted-foreground">Einrichtung, Player, Abo, Rechnung, Geld-zurück.</p>
            </div>
          </div>
        </div>
      </Card>

      <section className="mt-12">
        <h2 className="font-display text-3xl">Häufige Fragen zum Kontakt</h2>
        <Accordion type="single" collapsible className="mt-4">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
