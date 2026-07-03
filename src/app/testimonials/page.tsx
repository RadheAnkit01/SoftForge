import type { Metadata } from "next";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { SectionHeading } from "@/components/sections/section-heading";
import { sampleLogos } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description: "Placeholder testimonials and sample social proof for the SoftForge website launch.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Testimonials"
          title="Social proof placeholders ready for real client feedback."
          description="These professionally written testimonials can be replaced as soon as SoftForge collects verified reviews."
        />
        <div className="mt-12">
          <TestimonialSlider />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {sampleLogos.map((logo) => (
            <span className="rounded-md border px-5 py-3 text-xs font-bold text-muted-foreground" key={logo}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
