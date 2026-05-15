import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Tv, Film, Trophy, Smartphone, Monitor, Radio, Calendar, Layers,
  Wifi, Cast, ShieldCheck, Zap, MessageCircle, Check, Clock, RefreshCcw, CreditCard,
} from "lucide-react";
import heroImg from "@/assets/hero-stadium.jpg";
import sportImg from "@/assets/sport-highlight.jpg";
import { whatsappLink } from "@/lib/contact";
import { SeoChunks } from "@/components/SeoChunks";
import { PricingTabs } from "@/components/PricingTabs";

const faq = [
  { q: "Wie schnell erhalte ich meinen Zugang?", a: "Nach Zahlungseingang wird dein Zugang innerhalb weniger Minuten freigeschaltet – meist sofort." },
  { q: "Brauche ich einen Vertrag?", a: "Nein. Es gibt keine Vertragsbindung. Du kannst jederzeit kündigen oder einfach nicht verlängern." },
  { q: "Welche Geräte werden unterstützt?", a: "Smart TVs, Fire Stick, Apple TV, iOS, Android, MAG, VLC, Kodi und viele mehr." },
  { q: "Bekomme ich mein Geld zurück, wenn ich unzufrieden bin?", a: "Ja – wir bieten eine 30-Tage Geld-zurück-Garantie ohne Wenn und Aber." },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPTV Anbieter – 20.000+ Sender & 4K UHD ab €3,75/Monat" },
      { name: "description", content: "IPTV Anbieter mit über 20.000 Live-TV-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Sofort-Aktivierung, 30 Tage Geld-zurück, kein Vertrag." },
      { property: "og:title", content: "IPTV Anbieter – Premium IPTV in 4K" },
      { property: "og:description", content: "IPTV Anbieter mit 20.000+ Sendern, 145.000+ Filmen und 44.000+ Serien für nur €45/Jahr." },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "20.000+", label: "Live-TV-Sender" },
  { value: "145.000+", label: "Filme" },
  { value: "44.000+", label: "Serien" },
  { value: "4K UHD", label: "Bildqualität" },
];

const features = [
  { icon: Calendar, title: "EPG TV-Guide", desc: "Vollständiger TV-Guide mit Timeline-Ansicht für alle Sender." },
  { icon: Layers, title: "Multi-View", desc: "Bis zu 4 Streams gleichzeitig im Splitscreen ansehen." },
  { icon: Clock, title: "7-Tage Catch-Up", desc: "Verpasste Sendungen bis zu 7 Tage rückwirkend ansehen." },
  { icon: Wifi, title: "Anti-Freeze Adaptive Buffering", desc: "Intelligentes Anti-Freeze-System mit adaptivem Buffering für ruckelfreie 4K-Wiedergabe – auch bei schwankender Bandbreite." },
];

const trust = [
  { icon: ShieldCheck, label: "30 Tage Geld-zurück" },
  { icon: Zap, label: "Sofortige Aktivierung" },
  { icon: MessageCircle, label: "24/7 WhatsApp Support" },
  { icon: RefreshCcw, label: "Kein Vertrag, jederzeit kündbar" },
];

const devices = [
  { icon: Tv, name: "Smart TV (Samsung, LG)" },
  { icon: Monitor, name: "Fire TV Stick" },
  { icon: Smartphone, name: "iOS & Android" },
  { icon: Cast, name: "Apple TV" },
  { icon: Radio, name: "MAG Box" },
  { icon: Film, name: "VLC & Kodi" },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Stadion mit roter Beleuchtung und Sport-Übertragung"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Premium IPTV Anbieter 2026
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Dein <span className="text-primary">IPTV Anbieter</span><br />
              20.000+ Sender. 4K. Ab <span className="text-primary">€3,75</span>/Monat.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Als zuverlässiger IPTV Anbieter liefern wir Live-Sport, Filme, Serien und Premium-Pakete – auf Smart TV, Fire TV Stick, Apple TV, Android und iOS. Sofortige Aktivierung,
              kein Vertrag, 30 Tage Geld-zurück-Garantie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Jetzt per WhatsApp bestellen
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40">
                <Link to="/preise">Pakete ansehen</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <t.icon className="h-4 w-4 text-primary" /> {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl text-primary md:text-6xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why IPTV Anbieter */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mb-8 max-w-3xl md:mb-12">
          <h2 className="font-display text-3xl md:text-5xl">Warum einen IPTV Anbieter wählen?</h2>
          <p className="mt-4 text-muted-foreground">
            Ein IPTV Anbieter liefert klassisches Fernsehen über das Internet – ohne Satellitenschüssel, ohne Kabelanschluss, ohne lange Vertragsbindung. Statt nur 100 Free-TV-Sender zu empfangen, hast du mit einem modernen IPTV Anbieter Zugriff auf über 20.000 Live-Kanäle aus aller Welt, dazu eine riesige On-Demand-Bibliothek mit Filmen und Serien in 4K UHD.
          </p>
          <p className="mt-3 text-muted-foreground">
            Der Vorteil: Du brauchst nur eine stabile Internetverbindung und ein kompatibles Gerät – Smart TV, Fire TV Stick, Apple TV, Android, iOS, MAG-Box oder einfach VLC und Kodi auf deinem Computer. Sky, DAZN, WOW und alle Bundesliga-Spiele kommen über einen einzigen IPTV Anbieter ins Wohnzimmer, statt drei Streaming-Abos parallel zu bezahlen.
          </p>
          <p className="mt-3 text-muted-foreground">
            Wer 2026 noch monatlich 50–80 € für Kabel oder Sat zahlt, verschenkt Geld. Ein Premium-IPTV Anbieter wie wir kostet ab €3,75 pro Monat – inklusive Live-Sport, internationaler Sender, EPG, Catch-Up und Anti-Freeze-Streaming. Kein Vertrag, jederzeit kündbar, 30 Tage Geld-zurück.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Kabel-TV",
              price: "ab 25 €/Monat",
              tone: "muted",
              pros: ["Stabile Bildqualität"],
              cons: ["Nur 100–200 Sender", "Lange Vertragsbindung", "Kein internationales Programm", "Hardware-Box nötig"],
            },
            {
              title: "Satellit (DVB-S)",
              price: "ab 15 €/Monat + Hardware",
              tone: "muted",
              pros: ["Viele Free-TV-Sender"],
              cons: ["Schüssel + Receiver Pflicht", "Wetterabhängig", "Pay-TV separat (Sky)", "Kein VOD inklusive"],
            },
            {
              title: "IPTV Anbieter (wir)",
              price: "ab 3,75 €/Monat",
              tone: "primary",
              pros: ["20.000+ Sender weltweit", "Sky, DAZN, WOW inklusive", "4K UHD + 145.000 Filme", "Kein Vertrag, kein Receiver"],
              cons: [],
            },
          ].map((opt) => (
            <Card
              key={opt.title}
              className={`p-6 ${opt.tone === "primary" ? "border-primary/60 bg-primary/5 shadow-[var(--shadow-glow)]" : "border-border/60 bg-card/60"}`}
            >
              <h3 className="font-display text-xl">{opt.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{opt.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {opt.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                ))}
                {opt.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-muted-foreground"><span className="mt-0.5 inline-block h-4 w-4 shrink-0 text-center leading-none">✕</span>{c}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mb-8 max-w-2xl md:mb-12">
          <h2 className="font-display text-3xl md:text-5xl">Was unseren IPTV Anbieter ausmacht</h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-3 md:text-base">
            Modernste Player-Technologie, durchdachte Funktionen und ein TV-Erlebnis auf höchstem Niveau.
          </p>
        </div>
        {/* Mobile: compact 2-col tiles */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {features.map((f) => (
            <Card key={f.title} className="flex items-start gap-3 border-border/60 bg-card/60 p-3">
              <f.icon className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-tight">{f.title}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        {/* Desktop: rich cards */}
        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 bg-card/60 p-6 transition hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
            <Link to="/preise">Jetzt Paket wählen</Link>
          </Button>
        </div>
      </section>

      {/* Sport highlight */}
      <section className="relative isolate overflow-hidden border-y border-border/60">
        <img src={sportImg} alt="Fußball auf Spielfeld" loading="lazy" width={1536} height={864}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <Trophy className="h-10 w-10 text-primary" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Premium Sport. Live. In 4K.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Als IPTV Anbieter mit Sport-Fokus bündeln wir Bundesliga, Champions League, Premier League, Formel 1, NFL, NBA, UFC, Boxen, Tennis und mehr –
              jedes Spiel, jede Sekunde, ohne Kompromisse.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {["Bundesliga", "Champions League", "Premier League", "DAZN-Inhalte", "Formel 1", "UFC & Boxen", "NBA & NFL", "Tennis Grand Slam"].map((l) => (
                <li key={l} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="font-display text-3xl md:text-5xl">IPTV Anbieter – wähle dein Paket</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Faire Preise. Alle Features inklusive. Kein Vertrag.
          </p>
        </div>
        <PricingTabs compact />
        <div className="mt-6 text-center">
          <Link to="/preise" className="text-sm text-primary hover:underline">
            Garantien & Zahlungsmethoden ansehen →
          </Link>
        </div>
      </section>

      {/* Devices */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl">IPTV Anbieter für jedes Gerät</h2>
          <p className="mt-3 text-muted-foreground">Schau, wo und wie du willst – nahtlos auf allen Plattformen.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {devices.map((d) => (
            <div key={d.name} className="flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-6 text-center transition hover:border-primary/50">
              <d.icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">{d.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* IPTV Anbieter Vergleich */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl">IPTV Anbieter Vergleich – worauf solltest du achten?</h2>
          <p className="mt-3 text-muted-foreground">
            Nicht jeder IPTV Anbieter liefert die gleiche Qualität. Diese sechs Kriterien trennen einen seriösen Premium-IPTV Anbieter von einem unzuverlässigen Billig-Dienst – und genau hier liefern wir.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Tv, title: "Sender-Anzahl & Vielfalt", desc: "Ein guter IPTV Anbieter bietet 20.000+ Live-Sender aus 50+ Ländern – nicht nur 500 deutsche Kanäle." },
            { icon: Film, title: "4K UHD & HEVC", desc: "Echte 4K-Streams mit HEVC-Codec, HDR10 und Dolby Atmos – kein hochskaliertes Full HD." },
            { icon: Wifi, title: "Anti-Freeze-Server", desc: "Premium-Infrastruktur in Frankfurt, Amsterdam und Paris für 99,9 % Uptime ohne Buffering bei Live-Sport." },
            { icon: Calendar, title: "EPG & 7-Tage Catch-Up", desc: "Vollständiger TV-Guide plus 7 Tage Rückspulen – Standard bei jedem ernsthaften IPTV Anbieter." },
            { icon: Smartphone, title: "Geräte-Kompatibilität", desc: "Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC, Kodi – ein IPTV Anbieter sollte überall laufen." },
            { icon: ShieldCheck, title: "Support & Garantie", desc: "24/7 WhatsApp-Support, transparente Preise und 30 Tage Geld-zurück – ein vertrauenswürdiger IPTV Anbieter steht dazu." },
          ].map((c) => (
            <Card key={c.title} className="border-border/60 bg-card/60 p-5">
              <c.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">Du erfüllst alle Kriterien? Wir auch.</p>
          <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
            <Link to="/preise">Pakete vergleichen</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-20">
        <h2 className="font-display text-4xl md:text-5xl">Häufige Fragen</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* DACH region */}
      <section className="mx-auto max-w-7xl px-4 pb-12 md:pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl">IPTV Anbieter in Deutschland, Österreich & Schweiz</h2>
          <p className="mt-3 text-muted-foreground">
            Als spezialisierter IPTV Anbieter für den DACH-Raum liefern wir das komplette deutschsprachige Senderpaket – inklusive Free-TV, Pay-TV und regionalen Sendern aus allen drei Ländern.
          </p>
          <p className="mt-3 text-muted-foreground">
            Über 3.500 deutschsprachige Kanäle in einem einzigen Abo: Bundesliga und 2. Bundesliga, ÖFB-Cup, Schweizer Super League, ARD, ZDF, RTL, ProSieben, Sat.1, ORF, SRF und alle Sky- und DAZN-Pakete – ohne mehrere Streaming-Verträge gleichzeitig zu unterhalten.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { flag: "🇩🇪", title: "Deutschland", desc: "Das Erste, ZDF, RTL, ProSieben, Sat.1, Sky Deutschland, DAZN, WOW – inklusive Bundesliga, Champions League und Formel 1 in 4K." },
            { flag: "🇦🇹", title: "Österreich", desc: "ORF 1, ORF 2, ORF Sport+, ATV, PULS 4, ServusTV – plus Bundesliga Österreich und ÖFB-Spiele live im Stream." },
            { flag: "🇨🇭", title: "Schweiz", desc: "SRF 1, SRF 2, SRF info, RTS, RSI, Blue Sport – inklusive Super League und nationaler Sportübertragungen aus der Schweiz." },
          ].map((r) => (
            <Card key={r.title} className="border-border/60 bg-card/60 p-6">
              <div className="text-3xl">{r.flag}</div>
              <h3 className="mt-3 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Card className="bg-gradient-to-r from-primary to-primary-glow p-10 text-center text-primary-foreground">
          <h2 className="font-display text-4xl md:text-5xl">Bereit für deinen neuen IPTV Anbieter?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">Sofort-Aktivierung, kein Vertrag, 30 Tage Geld-zurück.</p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Jetzt per WhatsApp starten
            </a>
          </Button>
        </Card>
      </section>

      <SeoChunks />
    </div>
  );
}
