import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: SeoInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
  const url = absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    applicationName: siteConfig.name,
    authors: [
      {
        name: siteConfig.name,
      },
    ],
    
    creator: siteConfig.name,
    
    publisher: siteConfig.name,
    
    category: "Technology",
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl("/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: "SoftForge - Premium Software Development Agency",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl("/images/og-image.png")],
    },
  };
}
