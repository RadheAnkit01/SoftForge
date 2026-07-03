import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn about SoftForge, a premium micro software development agency for websites, apps, and product engineering.",
  path: "/about",
});

const values = [
  "Production quality over surface polish alone.",
  "Clear communication from first call to launch.",
  "Fast delivery without fragile shortcuts.",
  "Long-term architecture for future growth.",
];

export default function AboutPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="About SoftForge"
          title="A small studio built for focused, premium delivery."
          description="SoftForge helps startups, small businesses, and growing companies turn ideas into websites, apps, and digital products that feel credible from the first visit."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Build high-quality websites and mobile applications with affordable pricing, fast delivery, premium user experience, and personalized client support.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Establish SoftForge as a trusted software studio that delivers scalable, performance-driven digital products while keeping every client relationship personal.
            </p>
          </Card>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {values.map((value) => (
            <Card key={value}>
              <p className="text-sm font-semibold leading-6">{value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
