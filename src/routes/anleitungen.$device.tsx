import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Check } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import { devices } from "./anleitungen";

const guides: Record<string, { title: string; intro: string; steps: string[]; app: string }> = {
  "smart-tv": {
    title: "Smart TV (Samsung & LG)",
    intro: "Auf modernen Samsung- und LG-Fernsehern installierst du eine IPTV-App direkt über den Smart Hub bzw. den LG Content Store.",
    app: "Smart IPTV oder Set IPTV",
    steps: [
      "Öffne den Smart Hub (Samsung) oder LG Content Store.",
      'Suche nach «Smart IPTV» oder «Set IPTV» und installiere die App.',
      "Notiere die MAC-Adresse deines TVs (steht in der App).",
      "Sende uns die MAC-Adresse per WhatsApp – wir hinterlegen deine Playlist.",
      "Starte die App neu – deine Sender erscheinen automatisch.",
    ],
  },
  "firestick": {
    title: "Amazon Fire TV Stick",
    intro: "Auf dem Fire TV Stick (4K, Lite, Cube) richtest du IPTV in unter 5 Minuten ein.",
    app: "IPTV Smarters Pro",
    steps: [
      'Aktiviere unter «Mein Fire TV → Entwickleroptionen» Apps aus unbekannten Quellen.',
      'Installiere die App «Downloader» aus dem Amazon Appstore.',
      'Lade in Downloader die App «IPTV Smarters Pro» herunter und installiere sie.',
      'Öffne IPTV Smarters Pro und wähle «Login mit Xtream Codes API».',
      "Gib die von uns per WhatsApp gesendeten Zugangsdaten ein – fertig.",
    ],
  },
  "ios": {
    title: "iPhone & iPad",
    intro: "Auf iOS empfehlen wir GSE Smart IPTV oder IPTV Smarters Pro – beide kostenlos im App Store.",
    app: "GSE Smart IPTV / IPTV Smarters Pro",
    steps: [
      'Lade die App «GSE Smart IPTV» oder «IPTV Smarters Pro» aus dem App Store.',
      'Öffne die App und wähle «Xtream Codes API» oder «M3U-URL».',
      "Trage die per WhatsApp erhaltenen Zugangsdaten ein.",
      "Lade die Senderliste – fertig.",
    ],
  },
  "android": {
    title: "Android & Android TV",
    intro: "Auf Android-Smartphones, Tablets und Android-TV-Boxen ist die Einrichtung besonders einfach.",
    app: "IPTV Smarters Pro",
    steps: [
      'Installiere «IPTV Smarters Pro» aus dem Google Play Store.',
      'Wähle «Login mit Xtream Codes API».',
      "Trage die von uns gesendeten Zugangsdaten ein.",
      "Sender werden automatisch synchronisiert.",
    ],
  },
  "apple-tv": {
    title: "Apple TV (4K)",
    intro: "Auf Apple TV ab tvOS 13 nutzt du iPlayTV oder Smarters Player Lite.",
    app: "iPlayTV / Smarters Player Lite",
    steps: [
      'Installiere «iPlayTV» oder «Smarters Player Lite» aus dem App Store auf Apple TV.',
      'Wähle «Hinzufügen → Remote Playlist File» bzw. «Xtream Codes».',
      "Gib die per WhatsApp erhaltenen Daten ein.",
      "Bestätige – die Senderliste lädt automatisch.",
    ],
  },
  "mag": {
    title: "MAG Box / Set-Top-Box",
    intro: "Bei MAG-Boxen erfolgt die Einrichtung über die Portal-URL.",
    app: "Stalker Portal",
    steps: [
      'Schließe deine MAG-Box an und öffne «Einstellungen → Systemeinstellungen → Server → Portale».',
      "Trage als Portal 1 die von uns gesendete URL ein.",
      "Speichere und starte die Box neu.",
      "Beim nächsten Start öffnet sich automatisch dein TV-Portal.",
    ],
  },
  "vlc": {
    title: "VLC / Kodi",
    intro: "Mit VLC oder Kodi kannst du auf nahezu jedem Computer streamen.",
    app: "VLC Media Player / Kodi (PVR IPTV Simple Client)",
    steps: [
      "Öffne VLC → Medien → Netzwerkstream öffnen.",
      'Füge die per WhatsApp erhaltene M3U-URL ein und drücke «Wiedergabe».',
      "In Kodi: Add-ons → PVR IPTV Simple Client konfigurieren und M3U-URL einfügen.",
    ],
  },
};

export const Route = createFileRoute("/anleitungen/$device")({
  head: ({ params }) => {
    const g = guides[params.device];
    const title = g ? `${g.title} einrichten` : "Anleitung";
    return {
      meta: [
        { title: `${title} – IPTVs-Anbieter` },
        { name: "description", content: g?.intro ?? "IPTV Einrichtungsanleitung." },
      ],
    };
  },
  loader: ({ params }) => {
    if (!guides[params.device]) throw notFound();
    return null;
  },
  component: DevicePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Anleitung nicht gefunden</h1>
      <Link to="/anleitungen" className="mt-4 inline-flex text-primary hover:underline">Alle Anleitungen ansehen</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Fehler beim Laden</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded bg-primary px-4 py-2 text-sm text-primary-foreground">Erneut versuchen</button>
    </div>
  ),
});

function DevicePage() {
  const { device } = Route.useParams();
  const g = guides[device]!;
  const meta = devices.find((d) => d.slug === device);
  const Icon = meta?.icon;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Link to="/anleitungen" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Alle Anleitungen
      </Link>

      <div className="mt-6 flex items-center gap-3">
        {Icon && <Icon className="h-10 w-10 text-primary" />}
        <h1 className="font-display text-4xl md:text-5xl">{g.title}</h1>
      </div>
      <p className="mt-4 text-muted-foreground">{g.intro}</p>

      <Card className="mt-6 border-border/60 bg-card/60 p-5">
        <div className="text-sm">
          <span className="text-muted-foreground">Empfohlene App:</span>{" "}
          <strong className="text-primary">{g.app}</strong>
        </div>
      </Card>

      <ol className="mt-8 space-y-4">
        {g.steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">{i + 1}</span>
            <p className="pt-1">{s}</p>
          </li>
        ))}
      </ol>

      <Card className="mt-12 border-primary/40 bg-gradient-to-r from-card to-background p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Check className="mt-1 h-6 w-6 text-success" />
            <div>
              <h3 className="font-semibold">Brauchst du Hilfe bei der Einrichtung?</h3>
              <p className="text-sm text-muted-foreground">Unser Team unterstützt dich rund um die Uhr per WhatsApp.</p>
            </div>
          </div>
          <Button asChild className="bg-success text-success-foreground hover:bg-success/90">
            <a href={whatsappLink(`Hallo, ich brauche Hilfe bei der Einrichtung auf ${g.title}.`)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Hilfe anfordern
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
