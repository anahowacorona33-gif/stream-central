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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPTVs-Anbieter – 20.000+ Sender & 4K für €3,75/Monat" },
      { name: "description", content: "Premium IPTV mit über 20.000 Live-TV-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Sofort-Aktivierung, 30 Tage Geld-zurück, kein Vertrag." },
      { property: "og:title", content: "IPTVs-Anbieter – Premium IPTV in 4K" },
      { property: "og:description", content: "20.000+ Sender, 145.000+ Filme, 44.000+ Serien für nur €45/Jahr." },
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
  { icon: Cast, title: "AirPlay & Cast", desc: "Streame nahtlos auf Apple TV, Chromecast und Smart TVs." },
  { icon: Wifi, title: "Adaptive Buffering", desc: "Stabile Wiedergabe – auch bei schwankender Bandbreite." },
  { icon: Smartphone, title: "Multi-Screen", desc: "Mehrere Geräte parallel nutzen, mit Hintergrund-Steuerung." },
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

const faq = [
  { q: "Wie schnell erhalte ich meinen Zugang?", a: "Nach Zahlungseingang wird dein Zugang innerhalb weniger Minuten freigeschaltet – meist sofort." },
  { q: "Brauche ich einen Vertrag?", a: "Nein. Es gibt keine Vertragsbindung. Du kannst jederzeit kündigen oder einfach nicht verlängern." },
  { q: "Welche Geräte werden unterstützt?", a: "Smart TVs, Fire Stick, Apple TV, iOS, Android, MAG, VLC, Kodi und viele mehr. Anleitungen findest du auf unserer Anleitungs-Seite." },
  { q: "Bekomme ich mein Geld zurück, wenn ich unzufrieden bin?", a: "Ja – wir bieten eine 30-Tage Geld-zurück-Garantie ohne Wenn und Aber." },
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
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Premium IPTV 2026
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Über <span className="text-primary">20.000 Sender.</span><br />
              4K. Nur <span className="text-primary">€3,75</span>/Monat.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Live-Sport, Filme, Serien und Premium-Pakete – alles in einer App. Sofortige Aktivierung,
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

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl">Alles, was du erwartest – und mehr</h2>
          <p className="mt-3 text-muted-foreground">
            Modernste Player-Technologie, durchdachte Funktionen und ein TV-Erlebnis auf höchstem Niveau.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 bg-card/60 p-6 transition hover:border-primary/50 hover:shadow-[var(--shadow-glow)]">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
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
              Bundesliga, Champions League, Premier League, Formel 1, NFL, NBA, UFC, Boxen, Tennis und mehr –
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

      {/* Devices */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Auf jedem Gerät verfügbar</h2>
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
        <div className="mt-8 text-center">
          <Button asChild variant="outline"><Link to="/anleitungen">Installationsanleitungen ansehen</Link></Button>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Card className="relative overflow-hidden border-primary/40 bg-gradient-to-br from-card to-background p-8 md:p-12 shadow-[var(--shadow-glow)]">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Bestseller</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Das Jahres-Paket</h2>
              <p className="mt-3 text-muted-foreground">Alle Features. Volle Mediathek. Ein fairer Preis.</p>
              <ul className="mt-5 space-y-2 text-sm">
                {["20.000+ Live-Sender", "145.000+ Filme & 44.000+ Serien", "4K UHD + EPG + Catch-Up", "Multi-View bis zu 4 Streams", "30 Tage Geld-zurück-Garantie"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="font-display text-7xl text-primary">€45</div>
              <div className="text-sm text-muted-foreground">/Jahr · entspricht €3,75/Monat</div>
              <div className="mt-2 text-xs text-success">Spare 95% gegenüber klassischen Streaming-Abos</div>
              <Button asChild size="lg" className="mt-6 w-full bg-success text-success-foreground hover:bg-success/90">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Jetzt bestellen
                </a>
              </Button>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3 w-3" /> 16+ Zahlungsmethoden inkl. Krypto
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="font-display text-4xl md:text-5xl">Häufige Fragen</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6">
          <Link to="/faq" className="text-sm text-primary hover:underline">Alle Fragen ansehen →</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Card className="bg-gradient-to-r from-primary to-primary-glow p-10 text-center text-primary-foreground">
          <h2 className="font-display text-4xl md:text-5xl">Bereit für besseres TV?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">Sofort-Aktivierung, kein Vertrag, 30 Tage Geld-zurück.</p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Jetzt per WhatsApp starten
            </a>
          </Button>
        </Card>
      </section>
    </div>
  );
}
