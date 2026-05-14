import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-2 text-sm text-muted-foreground">Bitte versuche es erneut.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://iptvs-anbieter.de/#organization",
  name: "IPTVs-Anbieter",
  alternateName: "IPTVs Anbieter",
  url: "https://iptvs-anbieter.de",
  logo: {
    "@type": "ImageObject",
    url: "https://iptvs-anbieter.de/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Deutschsprachiger IPTV-Anbieter: Premium-Abos für 3, 6, 12 und 24 Monate mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. Kompatibel mit Smart TV, Fire TV, Apple TV, Android, iOS, MAG, VLC und Kodi.",
  knowsAbout: [
    { "@type": "Thing", name: "Internet Protocol Television", sameAs: "https://de.wikipedia.org/wiki/Internet_Protocol_Television" },
    { "@type": "Thing", name: "Smart TV", sameAs: "https://de.wikipedia.org/wiki/Smart-TV" },
    { "@type": "Thing", name: "Amazon Fire TV", sameAs: "https://de.wikipedia.org/wiki/Amazon_Fire_TV" },
    { "@type": "Thing", name: "Apple TV", sameAs: "https://de.wikipedia.org/wiki/Apple_TV" },
    { "@type": "Thing", name: "Android TV", sameAs: "https://de.wikipedia.org/wiki/Android_TV" },
    { "@type": "Thing", name: "Kodi", sameAs: "https://de.wikipedia.org/wiki/Kodi_(Software)" },
    { "@type": "Thing", name: "VLC media player", sameAs: "https://de.wikipedia.org/wiki/VLC_media_player" },
    { "@type": "Thing", name: "MAG Set-Top-Box", sameAs: "https://de.wikipedia.org/wiki/Infomir" },
    { "@type": "Thing", name: "Ultra High Definition Television", sameAs: "https://de.wikipedia.org/wiki/Ultra_High_Definition_Television" },
    { "@type": "Thing", name: "Fußball-Bundesliga", sameAs: "https://de.wikipedia.org/wiki/Fu%C3%9Fball-Bundesliga" },
    { "@type": "Thing", name: "UEFA Champions League", sameAs: "https://de.wikipedia.org/wiki/UEFA_Champions_League" },
    { "@type": "Thing", name: "Formel 1", sameAs: "https://de.wikipedia.org/wiki/Formel_1" },
  ],
  areaServed: { "@type": "Country", name: "Germany" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+44-7446-431335",
    availableLanguage: ["German", "English"],
  },
  sameAs: [
    "https://x.com/TAnbieter44116",
    "https://web.archive.org/web/20260514203741/http://iptvs-anbieter.de/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IPTV-Abonnements",
    itemListElement: [
      {
        "@type": "Offer",
        name: "IPTV Abo 3 Monate",
        price: "19.00",
        priceCurrency: "EUR",
        url: "https://iptvs-anbieter.de/abonnement-3-monate",
        eligibleDuration: { "@type": "QuantitativeValue", value: 3, unitCode: "MON" },
        itemOffered: { "@type": "Service", name: "IPTV-Abonnement 3 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-3-monate" },
      },
      {
        "@type": "Offer",
        name: "IPTV Abo 6 Monate",
        price: "35.00",
        priceCurrency: "EUR",
        url: "https://iptvs-anbieter.de/abonnement-6-monate",
        eligibleDuration: { "@type": "QuantitativeValue", value: 6, unitCode: "MON" },
        itemOffered: { "@type": "Service", name: "IPTV-Abonnement 6 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-6-monate" },
      },
      {
        "@type": "Offer",
        name: "IPTV Abo 12 Monate",
        price: "45.00",
        priceCurrency: "EUR",
        url: "https://iptvs-anbieter.de/abonnement-12-monate",
        eligibleDuration: { "@type": "QuantitativeValue", value: 12, unitCode: "MON" },
        itemOffered: { "@type": "Service", name: "IPTV-Abonnement 12 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-12-monate" },
      },
      {
        "@type": "Offer",
        name: "IPTV Abo 24 Monate",
        price: "80.00",
        priceCurrency: "EUR",
        url: "https://iptvs-anbieter.de/abonnement-24-monate",
        eligibleDuration: { "@type": "QuantitativeValue", value: 24, unitCode: "MON" },
        itemOffered: { "@type": "Service", name: "IPTV-Abonnement 24 Monate", sameAs: "https://iptvs-anbieter.de/abonnement-24-monate" },
      },
    ],
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IPTVs-Anbieter – Premium IPTV 4K ab €3,75/Monat" },
      { name: "description", content: "Premium IPTV mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD. €45/Jahr, 30 Tage Geld-zurück, sofortige Aktivierung." },
      { name: "author", content: "IPTVs-Anbieter" },
      { property: "og:title", content: "IPTVs-Anbieter – Premium IPTV in 4K" },
      { property: "og:description", content: "20.000+ Sender, 145.000+ Filme, 44.000+ Serien. Nur €45/Jahr." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
