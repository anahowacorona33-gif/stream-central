import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ShieldCheck, Zap, RefreshCcw, CreditCard, Tv, Film, Trophy, Calendar,
  Clock, Layers, Wifi, Smartphone, ArrowRight,
} from "lucide-react";
import { PricingTabs } from "@/components/PricingTabs";
import { SeoChunks } from "@/components/SeoChunks";

const pricingFaq = [
  { q: "Welcher IPTV Anbieter Tarif lohnt sich am meisten?", a: "Der 12-Monats-Tarif für €45 ist mit nur €3,75/Monat unser beliebtester Tarif – das beste Verhältnis aus Preis, Laufzeit und Flexibilität. Wer langfristig sparen möchte, wählt 24 Monate für €80 (€3,33/Monat)." },
  { q: "Wie funktioniert die 30-Tage-Garantie?", a: "Wenn du innerhalb der ersten 30 Tage nicht zufrieden bist, schreibst du uns kurz per WhatsApp oder E-Mail und bekommst den vollen Betrag zurück – ohne Diskussion und ohne Begründung." },
  { q: "Bekomme ich eine Rechnung für mein Abo?", a: "Ja. Nach jeder Zahlung erhältst du automatisch eine Rechnung als PDF per E-Mail – inklusive ausgewiesener Posten, geeignet für private und geschäftliche Nutzung." },
  { q: "Kann ich später auf einen längeren Tarif upgraden?", a: "Ja. Du kannst jederzeit auf einen längeren Tarif wechseln. Der bereits bezahlte Restwert wird anteilig auf das neue Abo angerechnet – einfach kurz beim Support melden." },
  { q: "Was passiert nach Ablauf meines Abos?", a: "Dein Zugang wird am Laufzeitende automatisch deaktiviert. Es gibt keine automatische Verlängerung und keine Kündigungsfristen – du entscheidest jedes Mal neu, ob du verlängern möchtest." },
];

const PRICING_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "IPTV Anbieter Preise – IPTV Abo ab €19" },
      { name: "description", content: "IPTV Anbieter mit Abos ab €19 für 3 Monate. 6 Monate €35, 12 Monate €45, 24 Monate €80. Über 20.000 Live-Sender, 4K UHD, 30 Tage Geld-zurück." },
      { property: "og:title", content: "IPTV Anbieter Preise ab €19 – Pakete & Garantien" },
      { property: "og:description", content: "Transparente Pakete vom IPTV Anbieter: 3, 6, 12 oder 24 Monate. 20.000+ Sender, 4K, kein Vertrag, 30 Tage Geld-zurück." },
      { property: "og:url", content: "/preise" },
    ],
    links: [{ rel: "canonical", href: "/preise" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PRICING_FAQ_JSONLD) }],
  }),
  component: PreisePage,
});

const guarantees = [
  { icon: ShieldCheck, t: "30 Tage Geld-zurück", d: "Nicht zufrieden? Volle Erstattung – ohne Diskussion." },
  { icon: Zap, t: "Sofortige Aktivierung", d: "Zugang in wenigen Minuten nach Zahlung." },
  { icon: RefreshCcw, t: "Kein Vertrag", d: "Jederzeit kündbar, keine Bindung." },
  { icon: CreditCard, t: "16+ Zahlungsmethoden", d: "Karte, Wallets, Klarna, SEPA, Krypto." },
];

const tarifGuide = [
  { to: "/abonnement-3-monate" as const, badge: "Tester", title: "3 Monate – €19", desc: "Perfekt zum Ausprobieren. Du willst zuerst sehen, ob ein IPTV Anbieter wirklich hält, was er verspricht? Drei Monate kosten €19 – ohne Folgekosten." },
  { to: "/abonnement-6-monate" as const, badge: "Halbjahr", title: "6 Monate – €35", desc: "Für die Sport-Saison oder ein halbes Jahr Auslandsaufenthalt. €5,83/Monat und du hast alle Bundesliga-Spiele und 145.000+ Filme inklusive." },
  { to: "/abonnement-12-monate" as const, badge: "Beliebt", title: "12 Monate – €45", desc: "Unser meistgewählter Tarif. Mit €3,75/Monat das beste Preis-Leistungs-Verhältnis bei einem Premium-IPTV-Anbieter – ein ganzes Jahr volle Sender." },
  { to: "/abonnement-24-monate" as const, badge: "Bester Preis", title: "24 Monate – €80", desc: "Für Sparfüchse: nur €3,33/Monat. Zwei Jahre Premium-IPTV-Anbieter ohne Preiserhöhung – günstiger geht es nicht." },
];

const inclusions = [
  { icon: Tv, t: "20.000+ Live-Sender", d: "Deutsche, österreichische, Schweizer und internationale Kanäle in einem Abo." },
  { icon: Film, t: "145.000+ Filme & 44.000+ Serien", d: "Riesige VOD-Bibliothek auf Abruf – Hollywood, Anime, Doku, Originals." },
  { icon: Trophy, t: "Live-Sport komplett", d: "Bundesliga, Champions League, Premier League, Formel 1, NFL, NBA, UFC – alles drin." },
  { icon: Calendar, t: "EPG TV-Guide", d: "Vollständige Programmübersicht mit Timeline-Ansicht für alle Sender." },
  { icon: Clock, t: "7-Tage Catch-Up", d: "Verpasste Sendungen bis zu 7 Tage rückwirkend ansehen – bei jedem Sender." },
  { icon: Layers, t: "Multi-View", d: "Bis zu 4 Streams gleichzeitig im Splitscreen – ideal für Konferenz-Schaltungen." },
  { icon: Wifi, t: "Anti-Freeze 4K-Streaming", d: "Adaptives Buffering und Premium-Server für ruckelfreie Wiedergabe in 4K UHD." },
  { icon: Smartphone, t: "Alle Geräte", d: "Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC und Kodi unterstützt." },
];

const payments = [
  "Visa", "Mastercard", "American Express", "Apple Pay", "Google Pay", "Klarna",
  "iDeal", "Bancontact", "Maestro", "Discover", "Diners Club", "UnionPay",
  "JCB", "Bitcoin", "Ethereum", "USDT", "Banküberweisung",
];

function PreisePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Transparent · Fair · Premium</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">IPTV Anbieter – ein Preis. Alles drin.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Wir sind ein IPTV Anbieter mit einfachen Preisen – kein Paket-Wirrwarr, keine versteckten Kosten. Vier Laufzeiten, gleiche Premium-Features, ab €3,33 pro Monat.
        </p>
      </div>

      <div className="mt-12">
        <PricingTabs />
      </div>

      {/* Tarif guide */}
      <section className="mx-auto mt-20 max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Welcher IPTV Anbieter Tarif passt zu mir?</h2>
          <p className="mt-3 text-muted-foreground">
            Alle vier Tarife liefern exakt denselben Premium-Funktionsumfang – der einzige Unterschied ist die Laufzeit und der Preis pro Monat. Je länger du buchst, desto günstiger wird dein IPTV Anbieter Abo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tarifGuide.map((t) => (
            <Card key={t.to} className="flex h-full flex-col border-border/60 bg-card/60 p-5">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-primary">
                {t.badge}
              </span>
              <h3 className="mt-3 font-display text-xl">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.desc}</p>
              <Link to={t.to} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Tarif ansehen <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Inclusions */}
      <section className="mx-auto mt-20 max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Was im IPTV Anbieter Abo enthalten ist</h2>
          <p className="mt-3 text-muted-foreground">
            Egal ob 3 oder 24 Monate – jeder Tarif beim IPTV Anbieter enthält das komplette Premium-Paket. Keine Zusatzkosten, keine Add-Ons, keine versteckten Pakete.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((i) => (
            <Card key={i.t} className="border-border/60 bg-card/60 p-5">
              <i.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{i.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <Link
            to="/abonnement-12-monate"
            className="inline-flex items-center justify-center rounded-md bg-success px-8 py-3 text-base font-medium text-success-foreground shadow transition hover:bg-success/90"
          >
            Bestes Paket sichern – 12 Monate
          </Link>
          <p className="text-xs text-muted-foreground">30 Tage Geld-zurück-Garantie</p>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl">Unsere Garantien</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <Card key={g.t} className="border-border/60 bg-card/60 p-5">
              <g.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{g.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl">Warum unser IPTV Anbieter?</h2>
        <p className="mt-4 text-muted-foreground">
          Wir betreiben eine eigene Premium-Infrastruktur in <strong>Frankfurt</strong>, <strong>Amsterdam</strong> und <strong>Paris</strong> mit Load-Balancing, CDN-Verteilung und adaptivem Buffering. Das Ergebnis: <strong>99,9 % Uptime</strong>, Latenzen unter 3 Sekunden und stabile 4K-Streams selbst beim Bundesliga-Topspiel mit Millionen parallelen Zuschauern.
        </p>
        <p className="mt-3 text-muted-foreground">
          Unser Support antwortet rund um die Uhr per WhatsApp – meist innerhalb weniger Minuten. Egal ob die App auf deinem neuen Smart TV nicht startet, der M3U-Link auf Kodi nicht lädt oder du die richtige Senderliste suchst: ein guter IPTV Anbieter lässt dich nie alleine.
        </p>
        <p className="mt-3 text-muted-foreground">
          Und wenn doch etwas nicht passt: <strong>30 Tage Geld-zurück, ohne Wenn und Aber.</strong> Wir sind so überzeugt von unserem IPTV Anbieter Service, dass wir das volle Risiko für dich übernehmen – du zahlst nur, wenn du wirklich zufrieden bist.
        </p>
      </section>

      <div className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl">Akzeptierte Zahlungsmethoden</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {payments.map((p) => (
            <span key={p} className="rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground">{p}</span>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl">Häufige Fragen zum IPTV Anbieter Abo</h2>
        <Accordion type="single" collapsible className="mt-6">
          {pricingFaq.map((f, i) => (
            <AccordionItem key={i} value={`pq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <SeoChunks />
    </div>
  );
}
