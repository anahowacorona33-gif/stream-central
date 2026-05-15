import { Link } from "@tanstack/react-router";
import { Tv } from "lucide-react";
import { SITE_NAME, SITE_DOMAIN, SUPPORT_EMAIL } from "@/lib/contact";

const payments = [
  "Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "Klarna",
  "iDeal", "Bancontact", "Maestro", "Discover", "Diners", "UnionPay",
  "JCB", "Bitcoin", "Ethereum", "USDT",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Tv className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl">{SITE_NAME}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              IPTV Anbieter für Deutschland, Österreich und die Schweiz – mit über 20.000 Live-Sendern, 145.000+ Filmen und 44.000+ Serien in 4K UHD.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/preise" className="hover:text-primary">Preise</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><a href="/#faq" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Support</h4>
            <p className="text-sm text-muted-foreground">24/7 WhatsApp Support</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-1 block text-sm hover:text-primary">{SUPPORT_EMAIL}</a>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">Akzeptierte Zahlungsmethoden</p>
          <div className="flex flex-wrap gap-2">
            {payments.map((p) => (
              <span key={p} className="rounded border border-border bg-card/60 px-2.5 py-1 text-xs text-muted-foreground">
                {p}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE_DOMAIN} – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
