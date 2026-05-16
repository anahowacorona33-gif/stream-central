import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, MessageCircle, ShieldCheck, Zap, Tv, Trophy } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export type LandingProps = {
  badge: string;
  h1: React.ReactNode;
  intro: string;
  usps: string[];
  faq: { q: string; a: string }[];
};

const PLANS = [
  { name: "3 Monate", price: "€19", to: "/abonnement-3-monate" as const },
  { name: "6 Monate", price: "€35", to: "/abonnement-6-monate" as const },
  { name: "12 Monate", price: "€45", to: "/abonnement-12-monate" as const, highlight: true },
  { name: "24 Monate", price: "€80", to: "/abonnement-24-monate" as const },
];

export function SeoLanding({ badge, h1, intro, usps, faq }: LandingProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {badge}
        </span>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{h1}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{intro}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Jetzt per WhatsApp bestellen
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/40">
            <Link to="/preise">Alle Pakete ansehen</Link>
          </Button>
        </div>
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {usps.map((u) => (
          <Card key={u} className="flex items-start gap-3 border-border/60 bg-card/60 p-4">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm">{u}</span>
          </Card>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl md:text-4xl">Pakete</h2>
        <p className="mt-2 text-sm text-muted-foreground">Wähle die Laufzeit, die zu dir passt – jederzeit kündbar, kein Vertrag.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group rounded-xl border p-5 text-center transition hover:border-primary/60 ${
                p.highlight ? "border-primary/60 bg-primary/5 shadow-[var(--shadow-glow)]" : "border-border/60 bg-card/60"
              }`}
            >
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{p.name}</div>
              <div className="mt-2 font-display text-3xl text-primary">{p.price}</div>
              <div className="mt-3 text-xs text-primary group-hover:underline">Paket ansehen →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> 30 Tage Geld-zurück</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><Zap className="h-4 w-4 text-primary" /> Sofortige Aktivierung</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><MessageCircle className="h-4 w-4 text-primary" /> 24/7 WhatsApp Support</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><Tv className="h-4 w-4 text-primary" /> Multi-Device: Smart TV, Fire TV, Apple TV, iOS, Android, MAG, Kodi, VLC</div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><Trophy className="h-4 w-4 text-primary" /> Sport, Filme, Serien, Live-TV in einem Abo</div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl md:text-4xl">Häufige Fragen</h2>
        <Accordion type="single" collapsible className="mt-4">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
          <Link to="/preise">Pakete ansehen & bestellen</Link>
        </Button>
      </div>
    </div>
  );
}
