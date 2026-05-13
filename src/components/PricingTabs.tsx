import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

const plans = [
  { id: "3m", duration: "3 Monate", months: 3, price: 19, badge: null as string | null, highlight: false },
  { id: "6m", duration: "6 Monate", months: 6, price: 35, badge: null as string | null, highlight: false },
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

const baseMonthly = plans[0].price / plans[0].months; // 3-Monats-Tarif als Referenz

export function PricingTabs({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState("12m");

  // Sync with URL hash
  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.replace("#", "");
      if (plans.some((p) => p.id === id)) setSelectedId(id);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const selectPlan = (id: string) => {
    setSelectedId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const plan = plans.find((p) => p.id === selectedId)!;
  const perMonthNum = plan.price / plan.months;
  const perMonth = perMonthNum.toFixed(2).replace(".", ",");
  const savingsPct = Math.round((1 - perMonthNum / baseMonthly) * 100);
  const msg = `Hallo, ich möchte das ${plan.duration}-Abo (€${plan.price}) bestellen.`;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Tabs */}
      <div role="tablist" className="mx-auto flex flex-wrap justify-center gap-2 rounded-2xl border border-border/60 bg-card/60 p-2">
        {plans.map((p) => {
          const active = p.id === selectedId;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={active}
              id={`plan-${p.id}`}
              onClick={() => selectPlan(p.id)}
              className={`relative flex flex-1 min-w-[72px] flex-col items-center rounded-xl px-3 py-2 text-center transition ${
                active
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "text-foreground/80 hover:bg-card"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-2 right-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
                    active ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-wider">{p.duration}</span>
              <span className={`mt-0.5 font-display text-lg ${active ? "" : "text-primary"}`}>€{p.price}</span>
            </button>
          );
        })}
      </div>

      {/* Detail card */}
      <Card
        className={`mt-6 border-primary/50 bg-gradient-to-br from-card to-background shadow-[var(--shadow-glow)] ${
          compact ? "p-6" : "p-8 md:p-10"
        }`}
      >
        <div className="text-center">
          {plan.badge && (
            <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {plan.badge}
            </span>
          )}
          <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {plan.duration}
          </div>
          <div className="mt-2 flex items-baseline justify-center gap-2">
            <span className={`font-display text-primary ${compact ? "text-6xl" : "text-7xl md:text-8xl"}`}>
              €{plan.price}
            </span>
            <span className="text-sm text-muted-foreground">/Gesamt</span>
          </div>
          <div className="text-sm text-muted-foreground">
            entspricht <strong className="text-foreground">€{perMonth}/Monat</strong>
          </div>
          {savingsPct > 0 && (
            <div className="mt-2 inline-flex rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
              Spare {savingsPct}% gegenüber dem 3-Monats-Tarif
            </div>
          )}
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="mt-6 w-full bg-success text-success-foreground hover:bg-success/90">
          <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Per WhatsApp bestellen
          </a>
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Sofort-Aktivierung · 30 Tage Geld-zurück · Kein Vertrag
        </p>
      </Card>
    </div>
  );
}
