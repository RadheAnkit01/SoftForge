import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description: "Website development, Flutter app development, UI/UX design, backend systems, APIs, AI integration, and maintenance from SoftForge.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Services"
          title="Everything needed to design, build, and launch modern digital products."
          description="SoftForge keeps the Version 1 offering focused while covering the services most clients need to move from idea to shipped product."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title}>
                <Icon className="size-6 text-muted-foreground" />
                <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 grid gap-3">
                  {service.items.map((item) => (
                    <li className="flex gap-3 text-sm text-muted-foreground" key={item}>
                      <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
