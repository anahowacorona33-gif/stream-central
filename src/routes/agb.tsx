import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agb")({
  head: () => ({ meta: [{ title: "AGB & Widerrufsrecht | IPTVs-Anbieter" }, { name: "description", content: "Allgemeine Geschäftsbedingungen und Widerrufsrecht." }] }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl">AGB & Widerruf</h1>
      <div className="prose prose-invert mt-6 max-w-none text-foreground/90 space-y-4">
        <h2>1. Geltungsbereich</h2>
        <p>Diese AGB gelten für alle Bestellungen über iptvs-anbieter.de.</p>
        <h2>2. Vertragsschluss</h2>
        <p>Der Vertrag kommt mit Zahlung und Bereitstellung der Zugangsdaten zustande.</p>
        <h2>3. Preise & Zahlung</h2>
        <p>Es gilt der zum Zeitpunkt der Bestellung angegebene Preis (€45/Jahr) inkl. ggf. anfallender gesetzlicher Steuern.</p>
        <h2>4. Geld-zurück-Garantie</h2>
        <p>Wir gewähren eine 30-tägige Geld-zurück-Garantie bei Unzufriedenheit. Eine kurze Mitteilung per WhatsApp oder E-Mail genügt.</p>
        <h2>5. Widerrufsrecht für digitale Inhalte</h2>
        <p>
          Mit Aktivierung des Zugangs erklärst du dich ausdrücklich mit der sofortigen Vertragserfüllung einverstanden und bestätigst,
          dass du dein Widerrufsrecht damit verlierst (§ 356 Abs. 5 BGB). Unsere Geld-zurück-Garantie gilt darüber hinaus.
        </p>
        <p className="text-sm text-muted-foreground">Hinweis: Diese AGB sind ein Platzhalter und sollten juristisch geprüft werden.</p>
      </div>
    </div>
  ),
});
