import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

const routes = [
  "",
  "about",
  "services",
  "pricing",
  "technologies",
  "testimonials",
  "team",
  "faq",
  "blog",
  "contact",
  "privacy-policy",
  "terms-and-conditions",
  "refund-policy",
  "thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.7 : 1,
  }));
}
