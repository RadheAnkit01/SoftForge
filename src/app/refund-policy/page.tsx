import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/lib/seo";
import { legalPages } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Refund Policy",
  description: "SoftForge refund policy for project deposits, milestone payments, cancellations, and third-party costs.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return <LegalPage page={legalPages.refund} />;
}
