import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, ShieldCheck, Zap, RefreshCcw, CreditCard } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – IPTV Abo ab €19 | IPTVs-Anbieter" },
      { name: "description", content: "IPTV-Abos ab €19 für 3 Monate. 6 Monate €35, 12 Monate €45, 24 Monate €80. Über 20.000 Live-Sender, 4K UHD, 30 Tage Geld-zurück." },
    ],
  }),
  component: PreisePage,
});

const plans = [
  { id: "3m", duration: "3 Monate", months: 3, price: 19, badge: null as string | null, highlight: false },
  { id: "6m", duration: "6 Monate", months: 6, price: 35, badge: null, highlight: false },
  { id: "12m", duration: "12 Monate", months: 12, price: 45, badge: "Beliebt", highlight: true },
  { id: "24m", duration: "24 Monate", months: 24, price: 80, badge: "Bester Preis", highlight: false },
];


const features = [
  "20.000+ Live-TV-Sender weltweit",
  "145.000+ Filme on-demand",
  "44.000+ Serien & Episoden",
  "4K UHD Bild- und Tonqualität",
  "Premium Sport (Bundesliga, CL, F1, UFC…)",
  "EPG TV-Guide mit Timeline",
  "7-Tage Catch-Up TV",
  "Multi-View (bis zu 4 Streams)",
  "AirPlay & Multi-Screen Support",
  "Adaptive Buffering für stabile Wiedergabe",
  "Funktioniert auf allen Geräten",
  "24/7 WhatsApp Support",
];

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

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => {
          const perMonth = (p.price / p.months).toFixed(2).replace(".", ",");
          const msg = `Hallo, ich möchte das ${p.duration}-Abo (€${p.price}) bestellen.`;
          return (
            <Card
              key={p.id}
              className={`relative flex flex-col p-6 ${
                p.highlight
                  ? "border-primary/60 bg-gradient-to-br from-card to-background shadow-[var(--shadow-glow)]"
                  : "border-border/60 bg-card/60"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    p.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-success text-success-foreground"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <div className="text-center">
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.duration}</div>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl text-primary">€{p.price}</span>
                  <span className="text-sm text-muted-foreground">/Gesamt</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  entspricht <strong className="text-foreground">€{perMonth}/Monat</strong>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-2">
                {features.slice(0, 6).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
                <li className="pt-1 text-xs text-muted-foreground">+ alle weiteren Premium-Features</li>
              </ul>

              <Button
                asChild
                size="lg"
                className={`mt-6 w-full ${
                  p.highlight
                    ? "bg-success text-success-foreground hover:bg-success/90"
                    : ""
                }`}
              >
                <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Per WhatsApp bestellen
                </a>
              </Button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">Sofort-Aktivierung · 30 Tage Geld-zurück</p>
            </Card>
          );
        })}
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((g) => (
          <Card key={g.t} className="border-border/60 bg-card/60 p-5">
            <g.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-3 font-semibold">{g.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
          </Card>
        ))}
      </div>

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
