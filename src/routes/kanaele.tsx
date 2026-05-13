import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Film, Clapperboard, Baby, Globe2, Newspaper, Music, Tv, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/kanaele")({
  head: () => ({
    meta: [
      { title: "Kanäle & Inhalte – 20.000+ Live-Sender | IPTVs-Anbieter" },
      { name: "description", content: "Über 20.000 Live-TV-Sender aus aller Welt: Sport, Filme, Serien, Kinder, Nachrichten, Musik und internationale Programme." },
    ],
  }),
  component: KanaelePage,
});

const categories = [
  { icon: Trophy, name: "Sport", count: "2.500+", examples: ["Sky Sport", "DAZN", "Sky Bundesliga", "ESPN", "BeIN Sports", "Eurosport", "F1 TV"] },
  { icon: Film, name: "Filme", count: "145.000+", examples: ["Sky Cinema", "MGM+", "Paramount+", "Disney+", "Apple TV+", "HBO Max"] },
  { icon: Clapperboard, name: "Serien", count: "44.000+", examples: ["Netflix Originals", "Prime Video", "HBO Serien", "Disney+ Originals"] },
  { icon: Tv, name: "Deutsche Sender", count: "800+", examples: ["ARD", "ZDF", "RTL", "ProSieben", "Sat.1", "Vox", "Sky Deutschland"] },
  { icon: Globe2, name: "International", count: "12.000+", examples: ["UK", "USA", "Türkei", "Frankreich", "Italien", "Spanien", "Arabisch"] },
  { icon: Newspaper, name: "Nachrichten", count: "300+", examples: ["n-tv", "Welt", "BBC", "CNN", "Al Jazeera", "France 24"] },
  { icon: Baby, name: "Kinder", count: "200+", examples: ["KiKA", "Disney Channel", "Nickelodeon", "Cartoon Network", "Super RTL"] },
  { icon: Music, name: "Musik & Lifestyle", count: "150+", examples: ["MTV", "VIVA", "Deluxe Music", "Discovery", "National Geographic"] },
];

function KanaelePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl md:text-6xl">Mehr Kanäle, als du je schauen kannst</h1>
        <p className="mt-4 text-muted-foreground">
          Über 20.000 Live-Sender aus mehr als 50 Ländern. Inklusive aller Premium-Pakete und einer riesigen Mediathek.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <Card key={c.name} className="border-border/60 bg-card/60 p-6 transition hover:border-primary/50">
            <div className="flex items-center justify-between">
              <c.icon className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl text-primary">{c.count}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {c.examples.map((e) => (
                <span key={e} className="rounded border border-border bg-background/40 px-2 py-0.5 text-xs text-muted-foreground">{e}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-16 border-primary/40 bg-gradient-to-r from-card to-background p-8 text-center md:p-12">
        <h2 className="font-display text-3xl md:text-4xl">Du suchst einen bestimmten Sender?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Frag uns einfach per WhatsApp – wir prüfen die Verfügbarkeit in Sekunden.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-success text-success-foreground hover:bg-success/90">
            <a href={whatsappLink("Hallo, ist folgender Sender enthalten: ...")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Sender anfragen
            </a>
          </Button>
          <Button asChild variant="outline"><Link to="/preise">Preise ansehen</Link></Button>
        </div>
      </Card>
    </div>
  );
}
