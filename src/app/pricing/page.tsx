import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { pricingPlans } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import { getVisitorCountry } from "@/lib/geo";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description: "Simple starting prices for SoftForge website and software development projects, with custom quotations for larger builds.",
  path: "/pricing",
});

export default async function PricingPage() {
  const country =
    await getVisitorCountry();
  const plans =
    country === "IN"
      ? pricingPlans.india
      : pricingPlans.international;
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent pricing plans for projects of any size."
          description="Fixed enterprise pricing is intentionally avoided. Larger products, SaaS platforms, and mobile apps should start with a consultation and custom quotation."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {plans.map((plan) => (
            <Card className={plan.featured ? "border-foreground" : undefined} key={plan.name}>
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{plan.description}</p>
              <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li className="flex gap-3 text-sm text-muted-foreground" key={feature}>
                    <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={plan.featured ? "default" : "outline"}>
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
