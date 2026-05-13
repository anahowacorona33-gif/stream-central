import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { whatsappLink, WHATSAPP_DISPLAY, SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – 24/7 WhatsApp Support | IPTVs-Anbieter" },
      { name: "description", content: "Kontaktiere uns rund um die Uhr per WhatsApp oder E-Mail. Schnelle Hilfe bei Bestellung, Einrichtung und Fragen." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <h1 className="font-display text-5xl md:text-6xl">Kontakt</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Wir sind 24/7 für dich da. Egal ob Bestellung, Einrichtung oder allgemeine Fragen – wir helfen schnell und unkompliziert.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card className="border-success/40 bg-card/60 p-6">
          <MessageCircle className="h-8 w-8 text-success" />
          <h2 className="mt-3 text-xl font-semibold">WhatsApp (empfohlen)</h2>
          <p className="mt-1 text-sm text-muted-foreground">Antwort meist in wenigen Minuten – rund um die Uhr.</p>
          <div className="mt-2 text-sm">{WHATSAPP_DISPLAY}</div>
          <Button asChild className="mt-4 bg-success text-success-foreground hover:bg-success/90">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp öffnen</a>
          </Button>
        </Card>

        <Card className="border-border/60 bg-card/60 p-6">
          <Mail className="h-8 w-8 text-primary" />
          <h2 className="mt-3 text-xl font-semibold">E-Mail</h2>
          <p className="mt-1 text-sm text-muted-foreground">Für ausführlichere Anfragen oder Geschäftliches.</p>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-2 block text-sm text-primary hover:underline">{SUPPORT_EMAIL}</a>
          <Button asChild variant="outline" className="mt-4">
            <a href={`mailto:${SUPPORT_EMAIL}`}>E-Mail schreiben</a>
          </Button>
        </Card>
      </div>

      <Card className="mt-8 border-border/60 bg-card/40 p-6">
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          <div>
            <div className="font-semibold">Support-Zeiten</div>
            <div className="text-sm text-muted-foreground">24/7 – 365 Tage im Jahr</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
