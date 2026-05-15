import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingTabs } from "@/components/PricingTabs";

const PRODUCT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Abo 12 Monate",
  description: "Premium IPTV-Abo für 12 Monate (€3,75/Monat): 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.",
  brand: { "@type": "Brand", name: "IPTVs-Anbieter" },
  offers: {
    "@type": "Offer",
    price: "45.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "/abonnement-12-monate",
  },
};

export const Route = createFileRoute("/abonnement-12-monate")({
  head: () => ({
    meta: [
      { title: "IPTVs Anbieter – IPTV Abo 12 Monate für €45" },
      { name: "description", content: "Beliebtester Tarif beim IPTVs Anbieter: 12 Monate für €45 – nur €3,75/Monat. 20.000+ Live-Sender, 4K UHD, kein Vertrag, 30 Tage Geld-zurück." },
      { property: "og:title", content: "IPTVs Anbieter – 12 Monate Abo für €45 (Beliebt)" },
      { property: "og:description", content: "Unser beliebtester Tarif: 12 Monate Premium IPTVs Anbieter für nur €45." },
      { property: "og:url", content: "/abonnement-12-monate" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/abonnement-12-monate" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(PRODUCT_JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          Beliebtester Tarif
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">IPTVs Anbieter – 12 Monate Abo für €45</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ein ganzes Jahr beim Premium-IPTVs Anbieter für nur €45 – das entspricht €3,75 pro Monat. 20.000+ Live-Sender, 145.000+ Filme, 44.000+ Serien in 4K UHD.
        </p>
      </div>
      <div className="mt-10">
        <PricingTabs />
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Noch mehr sparen? <Link to="/abonnement-24-monate" className="text-primary underline">24-Monats-Tarif ansehen</Link>
      </p>
    </div>
  );
}
