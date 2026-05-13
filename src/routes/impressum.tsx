import { createFileRoute } from "@tanstack/react-router";
import { SITE_DOMAIN, SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum | IPTVs-Anbieter" }, { name: "description", content: "Impressum gemäß § 5 TMG." }] }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl">Impressum</h1>
      <div className="prose prose-invert mt-6 max-w-none text-foreground/90">
        <p>Angaben gemäß § 5 TMG:</p>
        <p>
          [Firmenname / Inhaber]<br />
          [Straße & Hausnummer]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          E-Mail: {SUPPORT_EMAIL}<br />
          Web: {SITE_DOMAIN}
        </p>
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />[Name]</p>
        <p className="text-sm text-muted-foreground">Hinweis: Bitte ergänze hier deine vollständigen Impressumsangaben.</p>
      </div>
    </div>
  ),
});
