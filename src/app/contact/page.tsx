import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/features/contact/contact-form";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import { getVisitorCountry } from "@/lib/geo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Book a free SoftForge consultation for website development, mobile app development, UI/UX design, backend systems, or AI integration.",
  path: "/contact",
});


export default async function ContactPage() {
  const country = await getVisitorCountry();
  const isIndia = country === "IN";
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Contact"
          title="Book a free consultation."
          description="Share what you want to build. SoftForge will help clarify scope, timeline, budget, and the most practical launch path."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid content-start gap-4">
            <Card>
              <MessageCircle className="size-6 text-muted-foreground" />
              <h2 className="mt-5 text-lg font-semibold">WhatsApp</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Best for quick questions, project fit, and scheduling a first call.
              </p>
              <a className="focus-ring mt-4 inline-flex rounded-md text-sm font-semibold hover:underline" href={siteConfig.whatsappUrl}>
                Start WhatsApp chat
              </a>
            </Card>
            <Card>
              <Mail className="size-6 text-muted-foreground" />
              <h2 className="mt-5 text-lg font-semibold">Email</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Send project briefs, documents, references, or longer context.
              </p>
              <a className="focus-ring mt-4 inline-flex rounded-md text-sm font-semibold hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </Card>
          </div>
          <ContactForm isIndia={isIndia} />
        </div>
      </div>
    </section>
  );
}
