import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "SoftForge privacy policy for website visitors, contact form submissions, analytics, and client inquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage page={legalPages.privacy} />;
}
