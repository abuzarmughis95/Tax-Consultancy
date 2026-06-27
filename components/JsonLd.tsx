import { site } from "@/lib/site";
import { services } from "@/lib/services";

// Structured data (schema.org) for rich results & local SEO.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "AccountingService", "Organization"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phoneIntl,
        email: site.email,
        areaServed: {
          "@type": "Country",
          name: site.country,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
        priceRange: "$$",
        knowsAbout: services.map((s) => s.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tax & Corporate Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.summary,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
