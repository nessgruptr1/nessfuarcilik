import { office } from "@/data/contact";
import { companyInfo } from "@/data/site";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://nessfuarcilik.com.tr",
    logo: "https://nessfuarcilik.com.tr/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: office.phone,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressCountry: office.country,
    },
    sameAs: [
      "https://www.instagram.com/nessgrup/",
      "https://www.facebook.com/www.nessfuarcilik.com.tr/",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: "https://nessfuarcilik.com.tr/images/logo.png",
    "@id": "https://nessfuarcilik.com.tr",
    url: "https://nessfuarcilik.com.tr",
    telephone: office.phone,
    email: office.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.city,
      addressCountry: office.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.9334",
      longitude: "32.8597",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
