export function buildCAOrganizationJsonLd(input: {
  name: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: string;
  foundingLocation?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingBusiness",
    name: input.name,
    url: input.url,
    telephone: input.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.address.streetAddress,
      addressLocality: input.address.addressLocality,
      addressRegion: input.address.addressRegion,
      postalCode: input.address.postalCode,
      addressCountry: input.address.addressCountry,
    },
    areaServed: input.areaServed,
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
    brand: {
      "@type": "Brand",
      name: input.name,
    },
    serviceType: [
      "Chartered Accountant in India",
      "Tax consultant",
      "GST filing",
      "Income tax filing",
      "Business compliance",
    ],
  };
}

