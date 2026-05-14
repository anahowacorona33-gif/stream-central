import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingTabs } from "@/components/PricingTabs";

export const Route = createFileRoute("/abonnement-3-monate")({
  head: () => ({
    meta: [
      { title: "IPTV Abo 3 Monate – €19 | IPTVs-Anbieter" },
      { name: "description", content: "IPTV-Abo 3 Monate für nur €19. Über 20.000 Live-Sender, 145.000+ Filme, 4K UHD. Sofortige Aktivierung, 30 Tage Geld-zurück, kein Vertrag." },
      { property: "og:title", content: "IPTV Abo 3 Monate – €19" },
      { property: "og:description", content: "Premium IPTV für 3 Monate ab €19. 20.000+ Sender in 4K." },
      { property: "og:url", content: "/abonnement-3-monate" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/abonnement-3-monate" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          3 Monate · Einstiegspaket
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">IPTV Abo 3 Monate – €19</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Teste unser Premium-IPTV ohne langfristige Bindung: 20.000+ Live-Sender, 145.000+ Filme und 44.000+ Serien in 4K UHD – flexibel für 3 Monate.
        </p>
      </div>
      <div className="mt-10">
        <PricingTabs />
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Längere Laufzeit gewünscht? <Link to="/preise" className="text-primary underline">Alle Pakete im Vergleich</Link>
      </p>
    </div>
  );
}
