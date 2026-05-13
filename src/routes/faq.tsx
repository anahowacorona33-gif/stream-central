import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Wie schnell erhalte ich meinen Zugang nach der Bestellung?", a: "In der Regel innerhalb weniger Minuten nach Zahlungseingang. Du erhältst deine Zugangsdaten direkt per WhatsApp oder E-Mail." },
  { q: "Welche Internet-Geschwindigkeit brauche ich?", a: "Für HD-Streaming reichen 10 Mbit/s, für 4K UHD empfehlen wir mindestens 25 Mbit/s." },
  { q: "Kann ich auf mehreren Geräten gleichzeitig schauen?", a: "Ja, Multi-Screen-Support ist enthalten. Du kannst parallel auf mehreren Geräten streamen." },
  { q: "Brauche ich einen Vertrag mit Mindestlaufzeit?", a: "Nein. Es gibt keine Vertragsbindung. Du zahlst einmal jährlich €45 und kannst jederzeit aussteigen." },
  { q: "Was ist die 30-Tage Geld-zurück-Garantie?", a: "Wenn du innerhalb von 30 Tagen nach dem Kauf nicht zufrieden bist, erstatten wir dir den vollen Betrag – ohne Diskussion." },
  { q: "Welche Zahlungsmethoden akzeptiert ihr?", a: "Über 16 Methoden: Visa, Mastercard, Amex, Apple Pay, Google Pay, Klarna, iDeal, Bancontact, Maestro, UnionPay, JCB, Bitcoin, Ethereum, USDT und Banküberweisung." },
  { q: "Funktioniert IPTV auf meinem Smart TV?", a: "Ja. Wir unterstützen alle gängigen Plattformen: Samsung, LG, Sony, Fire TV, Apple TV, Android TV, MAG, VLC, Kodi und mehr." },
  { q: "Sind die Sender stabil?", a: "Unsere Server bieten 99,9% Uptime und adaptives Buffering für eine stabile Wiedergabe – auch bei wechselnder Internetqualität." },
  { q: "Bekomme ich auch Sport-Sender wie Sky und DAZN?", a: "Ja. Bundesliga, Champions League, Premier League, DAZN-Inhalte, Formel 1, UFC, NFL, NBA und vieles mehr sind enthalten." },
  { q: "Gibt es Catch-Up TV?", a: "Ja, du kannst verpasste Sendungen bis zu 7 Tage rückwirkend ansehen." },
  { q: "Ist das legal?", a: "Wir bieten den Zugang zu unserem Server-Netzwerk an. Die rechtliche Verantwortung für die Nutzung liegt beim Endkunden im jeweiligen Land." },
  { q: "Wie kann ich den Support kontaktieren?", a: "24/7 per WhatsApp – wir antworten meist innerhalb weniger Minuten." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ – Häufige Fragen zu IPTV | IPTVs-Anbieter" },
      { name: "description", content: "Antworten auf die häufigsten Fragen zu IPTV, Einrichtung, Zahlungsmethoden, Geräten und Support." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl">Häufige Fragen</h1>
      <p className="mt-4 text-muted-foreground">
        Hier findest du Antworten auf die wichtigsten Fragen rund um unser IPTV-Angebot.
      </p>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
