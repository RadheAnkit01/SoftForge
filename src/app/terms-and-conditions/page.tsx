import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using the SoftForge website and starting a project inquiry.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <LegalPage page={legalPages.terms} />;
}
