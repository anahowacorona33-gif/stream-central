import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingTabs } from "@/components/PricingTabs";

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Abo 24 Monate",
  description: "Premium IPTV-Abo für 24 Monate (€3,33/Monat): 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.",
  brand: { "@type": "Brand", name: "IPTV Anbieter" },
  offers: {
    "@type": "Offer",
    price: "80.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "/abonnement-24-monate",
  },
};

export const Route = createFileRoute("/abonnement-24-monate")({
  head: () => ({
    meta: [
      { title: "IPTV Anbieter – IPTV Abo 24 Monate für €80" },
      { name: "description", content: "Bester Preis beim IPTV Anbieter: 24 Monate für €80 – nur €3,33/Monat. 20.000+ Live-Sender, 4K UHD, sofortige Aktivierung, 30 Tage Geld-zurück." },
      { property: "og:title", content: "IPTV Anbieter – 24 Monate Abo für €80 (Bester Preis)" },
      { property: "og:description", content: "Maximale Ersparnis: 24 Monate Premium IPTV Anbieter für nur €80." },
      { property: "og:url", content: "/abonnement-24-monate" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/abonnement-24-monate" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PRODUCT_JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full bg-success px-3 py-1 text-xs font-semibold uppercase tracking-wider text-success-foreground">
          Bester Preis
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">IPTV Anbieter – 24 Monate Abo für €80</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Zwei Jahre beim Premium-IPTV Anbieter für nur €80 – das sind unschlagbare €3,33 pro Monat. 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.
        </p>
      </div>
      <div className="mt-10">
        <PricingTabs />
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Alle Optionen vergleichen? <Link to="/preise" className="text-primary underline">Zur Preis-Übersicht</Link>
      </p>
    </div>
  );
}
