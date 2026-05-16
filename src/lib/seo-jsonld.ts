// Shared JSON-LD helpers for site-wide schema consistency.
// All entities use absolute @ids anchored at iptvs-anbieter.de so Google
// can stitch the @graph across pages (FAQPage, BreadcrumbList, Product,
// Article) and link back to the root Organization / WebPage nodes.

export const SITE = "https://iptvs-anbieter.de";
export const ORG_ID = `${SITE}/#organization`;
export const HOME_WEBPAGE_ID = `${SITE}/#webpage`;

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[], pageId?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE}${crumbs[crumbs.length - 1].path}#breadcrumb`,
    name: "Breadcrumb",
    inLanguage: "de-DE",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: {
        "@type": "WebPage",
        "@id":
          i === crumbs.length - 1 && pageId
            ? pageId
            : `${SITE}${c.path}#webpage`,
        url: `${SITE}${c.path}`,
        name: c.name,
      },
    })),
  };
}

export function productJsonLd(opts: {
  id: string;
  name: string;
  description: string;
  price: string;
  path: string;
  sku: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE}${opts.path}#product`,
    name: opts.name,
    description: opts.description,
    sku: opts.sku,
    mpn: opts.sku,
    inLanguage: "de-DE",
    brand: { "@type": "Brand", "@id": ORG_ID, name: "IPTV Anbieter" },
    isRelatedTo: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": `${SITE}${opts.path}#webpage` },
    offers: {
      "@type": "Offer",
      "@id": `${SITE}${opts.path}#offer`,
      price: opts.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE}${opts.path}`,
      seller: { "@id": ORG_ID },
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    },
  };
}
