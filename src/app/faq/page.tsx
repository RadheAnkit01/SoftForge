import type { Metadata } from "next";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { faqs } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description: "Answers to common questions about SoftForge pricing, timelines, websites, mobile apps, SEO, and launch support.",
  path: "/faq",
});

export default function FaqPage() {
  const faqData = faqSchema(faqs);
  return (
    <>
    <StructuredData data={faqData} />
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before the first consultation."
          description="Use this page to help visitors understand timelines, scope, pricing, SEO, and post-launch support."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
    </>
  );
}
