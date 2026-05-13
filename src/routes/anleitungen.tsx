import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Tv, Smartphone, Monitor, Cast, Radio, Film, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/anleitungen")({
  head: () => ({
    meta: [
      { title: "Installationsanleitungen für alle Geräte | IPTVs-Anbieter" },
      { name: "description", content: "Schritt-für-Schritt-Anleitungen zur Einrichtung von IPTV auf Smart TV, Fire TV Stick, iPhone, Android, Apple TV, MAG Box und VLC." },
    ],
  }),
  component: AnleitungenPage,
});

export const devices = [
  { slug: "smart-tv", icon: Tv, name: "Smart TV (Samsung & LG)", desc: "Direkt über die Smart-Hub bzw. WebOS-App installieren." },
  { slug: "firestick", icon: Monitor, name: "Amazon Fire TV Stick", desc: "Schnell installiert über Downloader oder Aptoide." },
  { slug: "ios", icon: Smartphone, name: "iPhone & iPad", desc: "App Store: GSE Smart IPTV oder ähnliche Player." },
  { slug: "android", icon: Smartphone, name: "Android & Android TV", desc: "Play Store: IPTV Smarters Pro empfohlen." },
  { slug: "apple-tv", icon: Cast, name: "Apple TV (4K)", desc: "Direkt via tvOS-App einrichten." },
  { slug: "mag", icon: Radio, name: "MAG Box / Set-Top-Box", desc: "Portal-URL direkt am Gerät hinterlegen." },
  { slug: "vlc", icon: Film, name: "VLC / Kodi", desc: "M3U-Playlist hinzufügen und sofort abspielen." },
] as const;

function AnleitungenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-5xl md:text-6xl">Installation in wenigen Minuten</h1>
        <p className="mt-4 text-muted-foreground">
          Wähle dein Gerät – wir führen dich Schritt für Schritt durch die Einrichtung. Auf Wunsch helfen wir dir
          auch persönlich per WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {devices.map((d) => (
          <Link key={d.slug} to="/anleitungen/$device" params={{ device: d.slug }}>
            <Card className="group h-full border-border/60 bg-card/60 p-6 transition hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
              <d.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{d.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Anleitung öffnen <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
