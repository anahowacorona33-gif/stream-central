import { Link } from "@tanstack/react-router";
import { Menu, Tv, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { whatsappLink, SITE_NAME } from "@/lib/contact";

type NavItem = { to: string; label: string; anchor?: boolean };

const nav: NavItem[] = [
  { to: "/", label: "Start" },
  { to: "/preise", label: "Preise" },
  { to: "/blog", label: "Blog" },
  { to: "/#faq", label: "FAQ", anchor: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
            <Tv className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl tracking-wide">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden bg-success text-success-foreground hover:bg-success/90 sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Bestellen
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menü">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <div className="mt-8 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "bg-accent text-primary" }}
                    className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
                  >
                    {n.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-success text-success-foreground hover:bg-success/90">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Bestellen
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
