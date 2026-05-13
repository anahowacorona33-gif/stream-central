import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const posts = [
  {
    slug: "was-ist-iptv",
    title: "Was ist IPTV? Der ultimative Guide für 2026",
    excerpt: "Wie funktioniert IPTV, welche Vorteile bietet es gegenüber klassischem Kabel- und Satelliten-TV und für wen lohnt sich der Wechsel?",
    date: "2026-04-12",
    body: `IPTV (Internet Protocol Television) überträgt Fernsehinhalte über das Internet statt über Kabel oder Satellit. Du brauchst lediglich eine stabile Internetverbindung von ca. 15 Mbit/s für 4K-Streaming und ein kompatibles Gerät. Die Vorteile: deutlich mehr Sender, bessere Bildqualität, Catch-Up- und On-Demand-Funktionen sowie geringere Kosten.

Mit unserem Premium-Abo erhältst du Zugriff auf über 20.000 Live-Sender, 145.000 Filme und 44.000 Serien – alles für nur €45 pro Jahr.`,
  },
  {
    slug: "iptv-fire-tv-stick",
    title: "IPTV auf dem Fire TV Stick einrichten – Schritt für Schritt",
    excerpt: "So installierst du IPTV Smarters Pro in unter 5 Minuten auf deinem Amazon Fire TV Stick.",
    date: "2026-03-28",
    body: `Der Fire TV Stick ist eine der beliebtesten Plattformen für IPTV. Mit der App „IPTV Smarters Pro" und unseren Zugangsdaten bist du in wenigen Minuten startklar. Eine ausführliche Anleitung findest du unter Anleitungen → Fire TV Stick.`,
  },
  {
    slug: "bundesliga-streamen",
    title: "Bundesliga, Champions League & DAZN per IPTV streamen",
    excerpt: "Alle Spiele live und in 4K – ohne mehrere teure Abos.",
    date: "2026-03-10",
    body: `Statt Sky, DAZN und WOW separat zu abonnieren, bündelst du mit unserem IPTV-Paket alle relevanten Sport-Inhalte in einer App. Bundesliga, Champions League, Premier League, F1, NFL und mehr – live in 4K.`,
  },
  {
    slug: "4k-iptv-anforderungen",
    title: "4K IPTV: Was deine Internetverbindung können muss",
    excerpt: "Bandbreite, Router-Tipps und WLAN vs. LAN – alles, was du wissen musst.",
    date: "2026-02-22",
    body: `Für stabiles 4K-Streaming empfehlen wir mindestens 25 Mbit/s im Download. Eine LAN-Verbindung ist WLAN immer vorzuziehen. Moderne Mesh-Systeme (z.B. Fritz!Repeater oder TP-Link Deco) sind ein guter Mittelweg.`,
  },
] as const;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & IPTV-Ratgeber | IPTVs-Anbieter" },
      { name: "description", content: "Tipps, Anleitungen und Hintergründe rund um IPTV, Streaming und Live-Sport." },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/blog/$slug");
  if (isChild) return <Outlet />;
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl">Blog & Ratgeber</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Hilfreiche Artikel rund um IPTV, Geräte, Sport-Streaming und mehr.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}>
            <Card className="group h-full border-border/60 bg-card/60 p-6 transition hover:border-primary/50">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{new Date(p.date).toLocaleDateString("de-DE")}</div>
              <h2 className="mt-2 font-display text-2xl group-hover:text-primary">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Weiterlesen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
