import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const chunks = [
  {
    id: "anbieter-de",
    title: "IPTV Anbieter in Deutschland",
    content: (
      <>
        <p className="text-foreground/90">
          Ein <strong>IPTV Anbieter</strong> liefert Fernsehen über das Internetprotokoll statt über <strong>DVB-T2</strong>, <strong>Kabel</strong> oder <strong>Satellit</strong>. In Deutschland dominieren Premium-Dienste, die <strong>Bundesliga</strong>, <strong>Sky</strong>, <strong>DAZN</strong> sowie internationale Sender bündeln.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Über <strong>20.000</strong> Live-Sender weltweit</li>
          <li>Zugriff via <strong>M3U</strong>-Playlist oder <strong>Xtream Codes</strong> API</li>
          <li>Kompatibel mit <strong>Smart TV</strong>, <strong>Fire TV Stick</strong>, <strong>Android TV</strong>, <strong>Apple TV</strong>, <strong>MAG Box</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Verwandte Begriffe: <strong>OTT-Streaming</strong>, <strong>EPG</strong>, <strong>Catch-Up TV</strong>, <strong>VOD</strong>.
        </p>
      </>
    ),
  },
  {
    id: "smart-tv",
    title: "Installation IPTV auf Smart TV",
    content: (
      <>
        <p className="text-foreground/90">
          Auf einem <strong>Samsung Smart TV</strong> (<strong>Tizen OS</strong>) oder <strong>LG Smart TV</strong> (<strong>webOS</strong>) wird IPTV über eine kompatible App wie <strong>Smart IPTV</strong>, <strong>SS IPTV</strong> oder <strong>IPTV Smarters Pro</strong> eingerichtet.
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-foreground/85">
          <li>App im <strong>Samsung App Store</strong> oder <strong>LG Content Store</strong> installieren</li>
          <li>MAC-Adresse oder Geräte-Key im Kundenportal hinterlegen</li>
          <li><strong>M3U</strong>-Link oder <strong>Xtream Codes</strong> Zugangsdaten eintragen</li>
          <li>EPG laden und Senderliste sortieren</li>
        </ol>
        <p className="mt-3 text-sm text-muted-foreground">
          Funktioniert ebenso mit <strong>Philips Android TV</strong>, <strong>Sony Bravia</strong> und <strong>Hisense VIDAA</strong>.
        </p>
      </>
    ),
  },
  {
    id: "fire-stick",
    title: "IPTV auf dem Fire TV Stick",
    content: (
      <>
        <p className="text-foreground/90">
          Der <strong>Amazon Fire TV Stick 4K</strong> ist die schnellste Lösung, um IPTV auf einem klassischen Fernseher zu starten. Empfohlene App: <strong>IPTV Smarters Pro</strong> oder <strong>TiviMate</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>Downloader</strong>-App aus dem <strong>Amazon Appstore</strong> laden</li>
          <li>APK von <strong>IPTV Smarters Pro</strong> per URL installieren</li>
          <li><strong>Xtream Codes</strong> Login (Server, Username, Passwort) eintragen</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Auch kompatibel: <strong>Fire TV Cube</strong>, <strong>Chromecast with Google TV</strong>, <strong>NVIDIA Shield</strong>.
        </p>
      </>
    ),
  },
  {
    id: "4k",
    title: "IPTV in 4K UHD – Bandbreite und Codecs",
    content: (
      <>
        <p className="text-foreground/90">
          Für stabiles <strong>4K UHD</strong>-Streaming wird der Codec <strong>HEVC</strong> (<strong>H.265</strong>) verwendet, der die Datenrate gegenüber <strong>H.264</strong> halbiert. Eine schnelle Glasfaser- oder VDSL-Leitung ist Pflicht.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 text-left">
                <th className="py-2 pr-4">Qualität</th>
                <th className="py-2 pr-4">Codec</th>
                <th className="py-2">Empfohlene Bandbreite</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b border-border/40"><td className="py-2 pr-4">SD</td><td className="py-2 pr-4">H.264</td><td className="py-2">3 Mbit/s</td></tr>
              <tr className="border-b border-border/40"><td className="py-2 pr-4">Full HD</td><td className="py-2 pr-4">H.264 / H.265</td><td className="py-2">8 Mbit/s</td></tr>
              <tr><td className="py-2 pr-4">4K UHD</td><td className="py-2 pr-4">HEVC / H.265</td><td className="py-2">25 Mbit/s</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Ergänzende Standards: <strong>HDR10</strong>, <strong>Dolby Vision</strong>, <strong>Dolby Atmos</strong>.
        </p>
      </>
    ),
  },
  {
    id: "sport",
    title: "IPTV Sport – Bundesliga, Champions League und mehr",
    content: (
      <>
        <p className="text-foreground/90">
          Mit einem Premium-IPTV-Abo bündelst du <strong>Bundesliga</strong>, <strong>UEFA Champions League</strong>, <strong>Premier League</strong>, <strong>Formel 1</strong>, <strong>NFL</strong> und <strong>UFC</strong> in einer einzigen App – ohne <strong>Sky</strong>, <strong>DAZN</strong> und <strong>WOW</strong> separat zu abonnieren.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>Sky Sport</strong>, <strong>DAZN 1</strong>, <strong>DAZN 2</strong> in Full HD und 4K</li>
          <li>Internationale Sender wie <strong>BeIN Sports</strong>, <strong>Canal+ Sport</strong>, <strong>ESPN</strong>, <strong>BT Sport</strong></li>
          <li>Multi-View für Konferenz-Schaltungen</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Weitere Inhalte: <strong>NBA</strong>, <strong>NHL</strong>, <strong>MotoGP</strong>, <strong>Tennis Grand Slams</strong>.
        </p>
      </>
    ),
  },
  {
    id: "vod",
    title: "IPTV VOD – Filme und Serien on Demand",
    content: (
      <>
        <p className="text-foreground/90">
          Die <strong>VOD</strong>-Bibliothek eines IPTV-Anbieters ersetzt mehrere Streaming-Dienste wie <strong>Netflix</strong>, <strong>Disney+</strong>, <strong>Amazon Prime Video</strong> und <strong>Apple TV+</strong> – mit über <strong>145.000 Filmen</strong> und <strong>44.000 Serien</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Hollywood-Blockbuster und deutsche Eigenproduktionen</li>
          <li>Originals von <strong>HBO Max</strong>, <strong>Paramount+</strong>, <strong>Hulu</strong></li>
          <li>Mehrsprachige Tonspuren und Untertitel</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Zusätzliche Genres: <strong>Anime</strong> (Crunchyroll-Katalog), <strong>Dokumentationen</strong>, <strong>Kids-Inhalte</strong>.
        </p>
      </>
    ),
  },
  {
    id: "multi-view",
    title: "IPTV Multi-View – vier Streams gleichzeitig",
    content: (
      <>
        <p className="text-foreground/90">
          <strong>Multi-View</strong> erlaubt das parallele Wiedergeben von bis zu vier Streams im Split-Screen – ideal für die <strong>Bundesliga</strong>-Konferenz oder mehrere <strong>Formel 1</strong>-Onboard-Kameras.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Unterstützt von <strong>TiviMate Premium</strong> und <strong>IPTV Smarters Pro</strong></li>
          <li>Funktioniert auf <strong>Android TV</strong>, <strong>Fire TV Cube</strong>, <strong>NVIDIA Shield Pro</strong></li>
          <li>Synchronisierte Audio-Auswahl pro Fenster</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Verwandte Features: <strong>Picture-in-Picture</strong>, <strong>AirPlay</strong>, <strong>Chromecast</strong>.
        </p>
      </>
    ),
  },
  {
    id: "anti-freeze",
    title: "IPTV Anti-Freeze – stabile Wiedergabe ohne Ruckeln",
    content: (
      <>
        <p className="text-foreground/90">
          Anti-Freeze-Server kombinieren <strong>Load Balancing</strong>, <strong>CDN</strong>-Verteilung und <strong>adaptives Buffering</strong>, um Bildaussetzer auch bei Live-Events zu vermeiden.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Premium-Server in <strong>Frankfurt</strong>, <strong>Amsterdam</strong> und <strong>Paris</strong></li>
          <li>Automatischer Bitraten-Wechsel via <strong>HLS</strong> und <strong>MPEG-DASH</strong></li>
          <li>Empfohlen: LAN-Verbindung statt <strong>WLAN</strong>, alternativ <strong>Wi-Fi 6</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Stichworte: <strong>Uptime 99,9 %</strong>, <strong>Failover</strong>, <strong>Low Latency Streaming</strong>.
        </p>
      </>
    ),
  },
  {
    id: "android-apple-tv",
    title: "IPTV auf Android TV und Apple TV",
    content: (
      <>
        <p className="text-foreground/90">
          Auf <strong>Android TV</strong> und <strong>Apple TV 4K</strong> liefern dedizierte IPTV-Player die beste Performance. Top-Apps: <strong>TiviMate</strong>, <strong>GSE Smart IPTV</strong>, <strong>IPTV Smarters Pro</strong> und <strong>iPlayTV</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>tvOS</strong>: Installation über den <strong>App Store</strong> mit <strong>Xtream Codes</strong> Login</li>
          <li><strong>Android TV</strong>: Sideload möglich, <strong>Hardware-Decoding</strong> für 4K</li>
          <li>Unterstützung für <strong>EPG</strong>, <strong>Catch-Up</strong> und Aufnahme</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Kompatibel mit <strong>Google TV</strong>, <strong>Mi Box S</strong>, <strong>Formuler Z11</strong>.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "IPTV International – Sender aus aller Welt",
    content: (
      <>
        <p className="text-foreground/90">
          Ein internationales IPTV-Paket umfasst über <strong>20.000</strong> Kanäle aus <strong>Deutschland</strong>, <strong>Österreich</strong>, <strong>Schweiz</strong>, <strong>Türkei</strong>, <strong>UK</strong>, <strong>USA</strong>, <strong>Frankreich</strong>, <strong>Italien</strong> und <strong>Spanien</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Deutsch: <strong>Das Erste</strong>, <strong>ZDF</strong>, <strong>RTL</strong>, <strong>ProSieben</strong></li>
          <li>Türkisch: <strong>TRT 1</strong>, <strong>ATV</strong>, <strong>Show TV</strong>, <strong>Kanal D</strong></li>
          <li>International: <strong>BBC One</strong>, <strong>Canal+</strong>, <strong>RAI 1</strong>, <strong>Antena 3</strong>, <strong>CNN</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Ideal für mehrsprachige Haushalte und <strong>Expats</strong>, mit Unterstützung für <strong>EPG</strong> in jeder Sprache.
        </p>
      </>
    ),
  },
];

export function SeoChunks() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20">
      <div className="mb-8">
        <h2 className="font-display text-4xl md:text-5xl">IPTV Anbieter – Wissen, Geräte & Setup</h2>
        <p className="mt-3 text-muted-foreground">
          Kompakte Antworten zu Installation, Bildqualität, Sport, VOD und mehr – damit du den richtigen IPTV-Anbieter findest.
        </p>
      </div>

      <Accordion type="multiple" className="space-y-3">
        {chunks.map((c) => (
          <AccordionItem
            key={c.id}
            value={c.id}
            className="rounded-lg border border-border/60 bg-card/40 px-5"
          >
            <AccordionTrigger className="font-display text-left text-xl hover:no-underline">
              {c.title}
            </AccordionTrigger>
            <AccordionContent className="pb-5">{c.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
