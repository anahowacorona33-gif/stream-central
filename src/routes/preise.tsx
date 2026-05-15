import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Zap, RefreshCcw, CreditCard } from "lucide-react";
import { PricingTabs } from "@/components/PricingTabs";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "IPTVs Anbieter Preise – IPTV Abo ab €19" },
      { name: "description", content: "IPTVs Anbieter mit Abos ab €19 für 3 Monate. 6 Monate €35, 12 Monate €45, 24 Monate €80. Über 20.000 Live-Sender, 4K UHD, 30 Tage Geld-zurück." },
      { property: "og:title", content: "IPTVs Anbieter Preise ab €19 – Pakete & Garantien" },
      { property: "og:description", content: "Transparente Pakete vom IPTVs Anbieter: 3, 6, 12 oder 24 Monate. 20.000+ Sender, 4K, kein Vertrag, 30 Tage Geld-zurück." },
      { property: "og:url", content: "/preise" },
    ],
    links: [{ rel: "canonical", href: "/preise" }],
  }),
  component: PreisePage,
});


const guarantees = [
  { icon: ShieldCheck, t: "30 Tage Geld-zurück", d: "Nicht zufrieden? Volle Erstattung – ohne Diskussion." },
  { icon: Zap, t: "Sofortige Aktivierung", d: "Zugang in wenigen Minuten nach Zahlung." },
  { icon: RefreshCcw, t: "Kein Vertrag", d: "Jederzeit kündbar, keine Bindung." },
  { icon: CreditCard, t: "16+ Zahlungsmethoden", d: "Karte, Wallets, Klarna, SEPA, Krypto." },
];

const payments = [
  "Visa", "Mastercard", "American Express", "Apple Pay", "Google Pay", "Klarna",
  "iDeal", "Bancontact", "Maestro", "Discover", "Diners Club", "UnionPay",
  "JCB", "Bitcoin", "Ethereum", "USDT", "Banküberweisung",
];

function PreisePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Transparent · Fair · Premium</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Ein Preis. Alles drin.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Wir glauben an einfache Preise – kein Paket-Wirrwarr, keine versteckten Kosten.
        </p>
      </div>

      <div className="mt-12">
        <PricingTabs />
      </div>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl">Unsere Garantien</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <Card key={g.t} className="border-border/60 bg-card/60 p-5">
              <g.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{g.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-center font-display text-3xl md:text-4xl">Akzeptierte Zahlungsmethoden</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {payments.map((p) => (
            <span key={p} className="rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
