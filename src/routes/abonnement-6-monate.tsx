import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingTabs } from "@/components/PricingTabs";

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Abo 6 Monate",
  description: "Premium IPTV-Abo für 6 Monate (€5,83/Monat): 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.",
  brand: { "@type": "Brand", name: "IPTV-Anbieter" },
  offers: {
    "@type": "Offer",
    price: "35.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "/abonnement-6-monate",
  },
};

export const Route = createFileRoute("/abonnement-6-monate")({
  head: () => ({
    meta: [
      { title: "IPTV Anbieter – IPTV Abo 6 Monate für €35" },
      { name: "description", content: "IPTV Anbieter: 6-Monats-Abo für €35 – nur €5,83/Monat. Über 20.000 Live-Sender, 4K UHD, sofortige Aktivierung, 30 Tage Geld-zurück." },
      { property: "og:title", content: "IPTV Anbieter – 6 Monate Abo für €35" },
      { property: "og:description", content: "Premium IPTV Anbieter für 6 Monate ab €35. 20.000+ Sender in 4K." },
      { property: "og:url", content: "/abonnement-6-monate" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/abonnement-6-monate" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PRODUCT_JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          6 Monate · Halbjahres-Tarif
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">IPTV Anbieter – 6 Monate Abo für €35</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Sechs Monate beim Premium-IPTV Anbieter für €35 – das sind nur €5,83 pro Monat. 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.
        </p>
      </div>
      <div className="mt-10">
        <PricingTabs />
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Noch günstiger? <Link to="/preise" className="text-primary underline">12- und 24-Monats-Tarife ansehen</Link>
      </p>
    </div>
  );
}
