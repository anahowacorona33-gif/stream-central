import { createFileRoute } from "@tanstack/react-router";
import { SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz | IPTVs-Anbieter" }, { name: "description", content: "Informationen zum Datenschutz nach DSGVO." }] }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl">Datenschutz</h1>
      <div className="prose prose-invert mt-6 max-w-none text-foreground/90 space-y-4">
        <p>Wir nehmen den Schutz deiner personenbezogenen Daten sehr ernst und behandeln sie vertraulich gemäß DSGVO.</p>
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlich im Sinne der DSGVO ist der im Impressum genannte Anbieter.</p>
        <h2>2. Erhobene Daten</h2>
        <p>Wir erheben nur Daten, die für die Vertragsabwicklung notwendig sind (z.B. Kontaktdaten zur Lieferung der Zugangsdaten).</p>
        <h2>3. Cookies & Tracking</h2>
        <p>Diese Website verwendet keine Tracking-Cookies.</p>
        <h2>4. Deine Rechte</h2>
        <p>Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch. Schreibe uns an {SUPPORT_EMAIL}.</p>
        <p className="text-sm text-muted-foreground">Hinweis: Diese Seite ist ein Platzhalter. Bitte lasse die finale Datenschutzerklärung von einem Juristen prüfen.</p>
      </div>
    </div>
  ),
});
