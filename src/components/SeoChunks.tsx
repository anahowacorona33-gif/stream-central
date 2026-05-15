const chunks = [
  {
    id: "anbieter-de",
    title: "IPTV Anbieter in Deutschland",
    content: (
      <>
        <p className="text-foreground/90">
          Ein <strong>IPTV Anbieter</strong> liefert Fernsehen über das Internetprotokoll statt über <strong>DVB-T2</strong>, <strong>Kabel</strong> oder <strong>Satellit</strong>. Premium-Dienste in <strong>Deutschland</strong>, <strong>Österreich</strong> und der <strong>Schweiz</strong> bündeln <strong>Bundesliga</strong>, <strong>Sky</strong>, <strong>DAZN</strong>, <strong>WOW</strong> sowie internationale Sender in einem einzigen Abo. Ausgespielt wird über <strong>HLS</strong>- und <strong>MPEG-DASH</strong>-Streams, kompatibel mit jedem modernen Endgerät.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Über <strong>20.000</strong> Live-Sender weltweit, davon <strong>3.500+</strong> deutschsprachig</li>
          <li>Zugriff via <strong>M3U</strong>-Playlist oder <strong>Xtream Codes</strong> API</li>
          <li>Kompatibel mit <strong>Smart TV</strong>, <strong>Fire TV Stick</strong>, <strong>Android TV</strong>, <strong>Apple TV</strong>, <strong>MAG Box</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Verwandte Begriffe: <strong>OTT-Streaming</strong>, <strong>EPG</strong>, <strong>Catch-Up TV</strong>, <strong>VOD</strong>, <strong>Time-Shift</strong>.
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
          Auf einem <strong>Samsung Smart TV</strong> mit <strong>Tizen OS</strong> oder einem <strong>LG Smart TV</strong> mit <strong>webOS</strong> läuft IPTV über offizielle Apps wie <strong>Smart IPTV</strong>, <strong>SS IPTV</strong> oder <strong>IPTV Smarters Pro</strong>. Die Einrichtung dauert weniger als fünf Minuten und benötigt nur die <strong>MAC-Adresse</strong> des Fernsehers sowie die <strong>Xtream Codes</strong>-Zugangsdaten aus dem Kundenportal.
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-foreground/85">
          <li>App im <strong>Samsung App Store</strong> oder <strong>LG Content Store</strong> installieren</li>
          <li><strong>MAC-Adresse</strong> oder Geräte-Key im Kundenportal hinterlegen</li>
          <li><strong>M3U</strong>-Link oder <strong>Xtream Codes</strong> Login eintragen</li>
          <li><strong>EPG</strong> laden und Senderliste sortieren</li>
        </ol>
        <p className="mt-3 text-sm text-muted-foreground">
          Funktioniert ebenso mit <strong>Philips Android TV</strong>, <strong>Sony Bravia</strong>, <strong>Hisense VIDAA</strong> und <strong>Panasonic My Home Screen</strong>.
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
          Der <strong>Amazon Fire TV Stick 4K</strong> ist die schnellste und günstigste Lösung, um IPTV auf einem klassischen Fernseher zu starten. Empfohlene Player-Apps sind <strong>IPTV Smarters Pro</strong> und <strong>TiviMate</strong>, beide mit voller <strong>HEVC</strong>-Hardware-Decodierung für 4K-Streams. Die Installation erfolgt per <strong>Sideloading</strong> über die <strong>Downloader</strong>-App aus dem <strong>Amazon Appstore</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>Downloader</strong>-App aus dem <strong>Amazon Appstore</strong> laden</li>
          <li>APK von <strong>IPTV Smarters Pro</strong> per URL installieren</li>
          <li><strong>Xtream Codes</strong> Login (Server, Username, Passwort) eintragen</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Auch kompatibel: <strong>Fire TV Cube</strong>, <strong>Chromecast with Google TV</strong>, <strong>NVIDIA Shield</strong>, <strong>Xiaomi Mi Box S</strong>.
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
          Für stabiles <strong>4K UHD</strong>-Streaming setzen Premium-Anbieter auf den Codec <strong>HEVC</strong> (<strong>H.265</strong>), der gegenüber <strong>H.264</strong> die Datenrate halbiert. Notwendig sind eine schnelle <strong>Glasfaser</strong>- oder <strong>VDSL</strong>-Leitung, ein Endgerät mit <strong>Hardware-Decoding</strong> sowie ein <strong>HDMI 2.0</strong>-fähiger Fernseher. Unterstützt werden zusätzlich <strong>HDR10</strong>, <strong>Dolby Vision</strong> und <strong>Dolby Atmos</strong>.
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
          Verwandte Standards: <strong>AV1</strong>, <strong>VP9</strong>, <strong>Wide Color Gamut</strong>.
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
          Mit einem Premium-Abo beim richtigen <strong>IPTV Anbieter</strong> bündelst du <strong>Bundesliga</strong>, <strong>UEFA Champions League</strong>, <strong>UEFA Europa League</strong>, <strong>Premier League</strong>, <strong>LaLiga</strong>, <strong>Serie A</strong>, <strong>Formel 1</strong>, <strong>NFL</strong>, <strong>NBA</strong> und <strong>UFC</strong> in einer einzigen App – ohne <strong>Sky</strong>, <strong>DAZN</strong> und <strong>WOW</strong> separat zu abonnieren. Streams laufen in <strong>Full HD</strong> oder <strong>4K</strong> mit deutscher und Originalkommentar-Tonspur.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>Sky Sport</strong>, <strong>DAZN 1</strong>, <strong>DAZN 2</strong> in <strong>Full HD</strong> und <strong>4K</strong></li>
          <li>Internationale Sender wie <strong>BeIN Sports</strong>, <strong>Canal+ Sport</strong>, <strong>ESPN</strong>, <strong>BT Sport</strong></li>
          <li><strong>Multi-View</strong> für Konferenz-Schaltungen und Onboard-Kameras</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Weitere Inhalte: <strong>NHL</strong>, <strong>MotoGP</strong>, <strong>Tennis Grand Slams</strong>, <strong>Boxing</strong>, <strong>WWE</strong>.
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
          Die <strong>VOD</strong>-Bibliothek beim richtigen <strong>IPTV Anbieter</strong> ersetzt mehrere Streaming-Dienste wie <strong>Netflix</strong>, <strong>Disney+</strong>, <strong>Amazon Prime Video</strong>, <strong>Apple TV+</strong> und <strong>Paramount+</strong> – mit über <strong>145.000 Filmen</strong> und <strong>44.000 Serien</strong> in <strong>Full HD</strong> bis <strong>4K HDR</strong>. Inhalte werden auf Abruf gestreamt, mit mehrsprachigen <strong>Tonspuren</strong> (Deutsch, Englisch, Türkisch, Französisch) und <strong>Untertiteln</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Hollywood-Blockbuster und deutsche Eigenproduktionen</li>
          <li>Originals von <strong>HBO Max</strong>, <strong>Paramount+</strong>, <strong>Hulu</strong>, <strong>Peacock</strong></li>
          <li>Wöchentliche Updates und sortierte Genre-Kategorien</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Zusätzliche Genres: <strong>Anime</strong> (Crunchyroll-Katalog), <strong>Dokumentationen</strong>, <strong>Kids-Inhalte</strong>, <strong>Reality-TV</strong>.
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
          <strong>Multi-View</strong> erlaubt das parallele Wiedergeben von bis zu vier Streams im Split-Screen – ideal für die <strong>Bundesliga</strong>-Konferenz, mehrere <strong>Formel 1</strong>-Onboard-Kameras oder gleichzeitige <strong>Champions League</strong>-Spiele. Jedes Fenster hat eine eigene Audio-Auswahl, sodass du schnell zwischen den Kommentatoren wechseln kannst. Multi-Screen-Abos erlauben zusätzlich bis zu <strong>5 Geräte</strong> parallel pro Haushalt.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Unterstützt von <strong>TiviMate Premium</strong> und <strong>IPTV Smarters Pro</strong></li>
          <li>Funktioniert auf <strong>Android TV</strong>, <strong>Fire TV Cube</strong>, <strong>NVIDIA Shield Pro</strong></li>
          <li>Synchronisierte Audio-Auswahl pro Fenster</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Verwandte Features: <strong>Picture-in-Picture</strong>, <strong>AirPlay</strong>, <strong>Chromecast</strong>, <strong>Miracast</strong>.
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
          Ein professioneller <strong>IPTV Anbieter</strong> setzt auf Anti-Freeze-Server mit <strong>Load Balancing</strong>, <strong>CDN</strong>-Verteilung und <strong>adaptivem Buffering</strong>, um Bildaussetzer auch bei Live-Events mit Millionen Zuschauern zu vermeiden. Premium-Infrastruktur in <strong>Frankfurt</strong>, <strong>Amsterdam</strong> und <strong>Paris</strong> garantiert eine <strong>Uptime von 99,9 %</strong> sowie <strong>Low Latency Streaming</strong> unter 3 Sekunden – entscheidend für Sport-Übertragungen ohne Spoiler aus sozialen Netzwerken.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Premium-Server in <strong>Frankfurt</strong>, <strong>Amsterdam</strong> und <strong>Paris</strong></li>
          <li>Automatischer Bitraten-Wechsel via <strong>HLS</strong> und <strong>MPEG-DASH</strong></li>
          <li>Empfohlen: LAN-Verbindung statt <strong>WLAN</strong>, alternativ <strong>Wi-Fi 6</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Stichworte: <strong>Failover</strong>, <strong>QoS</strong>, <strong>Edge Caching</strong>, <strong>TCP-Optimierung</strong>.
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
          Auf <strong>Android TV</strong> und <strong>Apple TV 4K</strong> liefern dedizierte IPTV-Player die beste Performance dank <strong>Hardware-Decoding</strong> für <strong>HEVC</strong> und <strong>AV1</strong>. Top-Apps sind <strong>TiviMate</strong>, <strong>GSE Smart IPTV</strong>, <strong>IPTV Smarters Pro</strong> und <strong>iPlayTV</strong>. Auf <strong>tvOS</strong> erfolgt die Installation klassisch über den <strong>App Store</strong>, auf <strong>Android TV</strong> ist zusätzlich <strong>Sideloading</strong> per APK möglich.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li><strong>tvOS</strong>: Installation über den <strong>App Store</strong> mit <strong>Xtream Codes</strong> Login</li>
          <li><strong>Android TV</strong>: Sideload möglich, <strong>Hardware-Decoding</strong> für 4K</li>
          <li>Unterstützung für <strong>EPG</strong>, <strong>Catch-Up</strong> und Aufnahme</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Kompatibel mit <strong>Google TV</strong>, <strong>Mi Box S</strong>, <strong>Formuler Z11</strong>, <strong>Dune HD</strong>.
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
          Ein internationaler <strong>IPTV Anbieter</strong> umfasst über <strong>20.000</strong> Kanäle aus <strong>Deutschland</strong>, <strong>Österreich</strong>, der <strong>Schweiz</strong>, der <strong>Türkei</strong>, dem <strong>Vereinigten Königreich</strong>, den <strong>USA</strong>, <strong>Frankreich</strong>, <strong>Italien</strong>, <strong>Spanien</strong>, den <strong>Niederlanden</strong> und der <strong>arabischen Welt</strong>. Ideal für mehrsprachige Haushalte und <strong>Expats</strong>, mit <strong>EPG</strong> in jeder Sprache und passenden <strong>Tonspuren</strong>.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
          <li>Deutsch: <strong>Das Erste</strong>, <strong>ZDF</strong>, <strong>RTL</strong>, <strong>ProSieben</strong>, <strong>Sat.1</strong></li>
          <li>Türkisch: <strong>TRT 1</strong>, <strong>ATV</strong>, <strong>Show TV</strong>, <strong>Kanal D</strong></li>
          <li>International: <strong>BBC One</strong>, <strong>Canal+</strong>, <strong>RAI 1</strong>, <strong>Antena 3</strong>, <strong>CNN</strong>, <strong>Al Jazeera</strong></li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Zusatzkategorien: <strong>News</strong>, <strong>Musik</strong>, <strong>Religion</strong>, <strong>Adult</strong> (optional, PIN-geschützt).
        </p>
      </>
    ),
  },
];

export function SeoChunks() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20">
      <div className="mb-10">
        <h2 className="font-display text-4xl md:text-5xl">IPTV Anbieter – Wissen, Geräte & Setup</h2>
        <p className="mt-3 text-muted-foreground">
          Kompakte Antworten zu Installation, Bildqualität, Sport, VOD und mehr – damit du den richtigen IPTV Anbieter findest.
        </p>
      </div>

      <div className="space-y-3">
        {chunks.map((c) => (
          <details
            key={c.id}
            id={c.id}
            className="group scroll-mt-24 rounded-lg border border-border/60 bg-card/40 p-5 md:p-6 [&[open]>summary>svg]:rotate-180"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <h2 className="font-display text-xl md:text-2xl">{c.title}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="mt-4">{c.content}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
