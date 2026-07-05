import { siteConfig } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,

    url: siteConfig.url,

    logo: `${siteConfig.url}/logo.png`,

    image: `${siteConfig.url}/images/softforge-hero.png`,

    description: siteConfig.description,

    email: siteConfig.email,

    telephone: siteConfig.whatsapp,

    foundingDate: "2026",

    founder: {
      "@type": "Person",
      name: "Ankit Raj",
    },

    areaServed: "Worldwide",

    priceRange: "$$",

    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    inLanguage: "en",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: name,

    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },

    areaServed: "Worldwide",

    description,
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webpageSchema(
  name: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name,

    description,

    url: `${siteConfig.url}${path}`,

    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },

    inLanguage: "en",
  };
}