import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Tv, Zap, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { breadcrumbJsonLd, SITE, ORG_ID } from "@/lib/seo-jsonld";
import { listPosts } from "@/lib/blog.functions";
import { whatsappLink, SUPPORT_EMAIL } from "@/lib/contact";

const PATH = "/autor";
const PERSON_ID = `${SITE}/#abo-hamza`;

const PROFILE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE}${PATH}#profilepage`,
  inLanguage: "de-DE",
  url: `${SITE}${PATH}`,
  name: "Abo Hamza – Gründer & CEO von IPTV Anbieter",
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Abo Hamza",
    givenName: "Abo",
    familyName: "Hamza",
    gender: "Male",
    jobTitle: "CEO & Gründer",
    description:
      "Abo Hamza ist Gründer und CEO von IPTV Anbieter. Seit 2019 baut er gemeinsam mit seinem Team einen Premium-IPTV-Dienst für den DACH-Raum auf, betreibt eigene Anti-Freeze-Server in 4K UHD und verantwortet Produkt, Infrastruktur und Kundenservice.",
    knowsAbout: [
      "IPTV",
      "Streaming-Infrastruktur",
      "4K UHD Streaming",
      "Anti-Freeze-Server",
      "Smart-TV-Apps",
      "Live-Sport-Streaming",
      "Kundensupport",
    ],
    knowsLanguage: ["de", "en"],
    worksFor: { "@id": ORG_ID },
    url: `${SITE}${PATH}`,
    mainEntityOfPage: { "@id": `${SITE}${PATH}#profilepage` },
    sameAs: [`${SITE}${PATH}`],
    image: `${SITE}/logo.png`,
  },
};

const BREADCRUMB_JSONLD = breadcrumbJsonLd([
  { name: "Startseite", path: "/" },
  { name: "Autor", path: PATH },
]);

export const Route = createFileRoute("/autor")({
  head: () => ({
    meta: [
      { title: "Abo Hamza – Gründer & CEO von IPTV Anbieter" },
      { name: "description", content: "Abo Hamza ist Gründer von IPTV Anbieter. Seit 2019 baut er einen Premium-IPTV-Dienst für DACH mit 20.000+ Sendern, 4K UHD und eigenen Anti-Freeze-Servern auf." },
      { property: "og:title", content: "Abo Hamza – Gründer von IPTV Anbieter" },
      { property: "og:description", content: "Über den Gründer von IPTV Anbieter: Premium-IPTV seit 2019 für Deutschland, Österreich und die Schweiz." },
      { property: "og:url", content: PATH },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PROFILE_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_JSONLD) },
    ],
  }),
  component: AuthorPage,
});

function AuthorPage() {
  const fetchPosts = useServerFn(listPosts);
  const { data } = useQuery({ queryKey: ["posts", "author"], queryFn: () => fetchPosts() });
  const posts = data?.posts ?? [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          Über den Autor
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">
          Abo Hamza – <span className="text-primary">Gründer & CEO</span> von IPTV Anbieter
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Seit 2019 baut Abo Hamza mit seinem Team einen Premium-IPTV-Dienst für Deutschland, Österreich und die Schweiz – mit eigenen Anti-Freeze-Servern, 4K UHD und 24/7 deutschsprachigem Support.
        </p>
      </div>

      <Card className="mt-10 border-border/60 bg-card/60 p-6 md:p-8">
        <h2 className="font-display text-2xl">Hintergrund</h2>
        <p className="mt-3 text-muted-foreground">
          Abo Hamza gründete IPTV Anbieter im Jahr 2019 mit dem Ziel, dem deutschsprachigen Markt einen IPTV-Dienst zu bieten, der nicht nur ein riesiges Senderangebot liefert, sondern auch echte Stabilität, transparente Preise und einen erreichbaren Support. In den Jahren davor sammelte er Erfahrung im Bereich Streaming-Infrastruktur, Anti-Freeze-Serverbetrieb und Endkundensupport für Smart-TV-Apps.
        </p>
        <h2 className="mt-8 font-display text-2xl">Expertise</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li className="flex gap-2"><Tv className="mt-1 h-4 w-4 shrink-0 text-primary" /> Aufbau und Betrieb eigener IPTV-Server-Infrastruktur in HD und 4K UHD</li>
          <li className="flex gap-2"><Zap className="mt-1 h-4 w-4 shrink-0 text-primary" /> Anti-Freeze-Architektur für stabile Wiedergabe auch zu Stoßzeiten</li>
          <li className="flex gap-2"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" /> 24/7 deutschsprachiger Kundenservice per WhatsApp und E-Mail</li>
        </ul>
        <h2 className="mt-8 font-display text-2xl">Mission</h2>
        <p className="mt-3 text-muted-foreground">
          „Premium-IPTV sollte einfach funktionieren – ohne lange Verträge, ohne Hardwarebindung und mit einem Support, der innerhalb von Minuten antwortet. Genau dafür stehen wir seit 2019.“
        </p>
      </Card>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappLink("Hallo Abo, ich habe eine Frage zu IPTV Anbieter.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp an Abo
        </a>
        <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-md border border-input px-5 py-2.5 text-sm font-medium hover:bg-accent">
          <Mail className="h-4 w-4" /> Kontaktseite
        </Link>
      </div>

      {posts.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-3xl">Artikel von Abo Hamza</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {posts.slice(0, 6).map((p) => (
              <Card key={p.slug} className="border-border/60 bg-card/60 p-5 transition hover:border-primary/40">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                  <h3 className="font-display text-lg group-hover:text-primary">{p.title}</h3>
                  {p.excerpt && <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>}
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                    Weiterlesen <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 text-center text-sm text-muted-foreground">
        Fragen? Schreib uns auf <a className="text-primary hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> oder besuche die <Link to="/kontakt" className="text-primary hover:underline">Kontaktseite</Link>.
      </p>
    </div>
  );
}
