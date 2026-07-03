import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ForgeLottie } from "@/components/sections/forge-lottie";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { contentRepository } from "@/features/cms/content-repository";
import {
  primaryCta,
  sampleLogos,
  siteConfig,
  trustStats,
} from "@/lib/site";

export default async function HomePage() {
  const [services, processSteps, technologies, pricingPlans, faqs] = await Promise.all([
    contentRepository.getServices(),
    contentRepository.getProcessSteps(),
    contentRepository.getTechnologies(),
    contentRepository.getPricingPlans(),
    contentRepository.getFaqs(),
  ]);
  const CtaIcon = primaryCta.icon;

  return (
    <>
      <section className="overflow-hidden border-b">
        <div className="container-soft grid min-h-[calc(100svh-4rem)] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div>
            <p className="eyebrow">Micro Software Development Agency</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
              SoftForge
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-8 text-muted-foreground">
              {siteConfig.tagline} We build premium websites, web apps, and Flutter mobile apps for startups and growing businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>
                  <CtaIcon className="size-4" />
                  {primaryCta.label}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {trustStats.map((stat) => (
                <div className="border-l pl-4" key={stat.label}>
                  <dt className="text-2xl font-semibold">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-3xl" />
            <Image
              alt="Premium web and mobile product interface visual for SoftForge"
              className="aspect-[16/10] rounded-lg border object-cover shadow-soft"
              height={900}
              priority
              src="/images/softforge-hero.png"
              width={1440}
            />
          </div>
        </div>
      </section>

      <section aria-label="Trusted by sample companies" className="border-b py-8">
        <div className="container-soft">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium text-muted-foreground">
              Empowering teams at leading organizations.
            </p>
            <div className="flex flex-wrap gap-3">
              {sampleLogos.map((logo) => (
                <span className="rounded-md border px-4 py-2 text-xs font-bold text-muted-foreground" key={logo}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Services"
            title="Production-quality software, scoped for fast growth."
            description="SoftForge covers the key pieces a modern business needs: websites, apps, product design, backend systems, integrations, and launch support."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card className="group" key={service.title}>
                  <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell border-y bg-secondary/35">
        <div className="container-soft">
          <ForgeLottie />
          <SectionHeading
            eyebrow="Process"
            title="A clear path from idea to launch."
            description="The workflow keeps decisions visible, momentum high, and the final product aligned with the business outcome."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title}>
                <div className="grid size-9 place-items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Technology"
            title="Modern stack, pragmatic choices."
            description="The recommended foundation is designed for speed, maintainability, security, and future product expansion."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.slice(0, 12).map((tech) => {
              const Icon = tech.icon;
              return (
                <div className="rounded-lg border p-4 text-center" key={tech.name}>
                  <Icon className="mx-auto size-5 text-muted-foreground" />
                  <p className="mt-3 text-sm font-semibold">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell border-y bg-secondary/35">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple starting points. Custom quotes for bigger builds."
            description="Choose a focused website launch or a stronger product-grade engagement. Complex apps and platforms are scoped after consultation."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <Card className={plan.featured ? "border-foreground" : undefined} key={plan.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      Popular
                    </span>
                  ) : null}
                </div>
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

      <section className="section-shell">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say."
            description="Real feedback from the forward-thinking teams and businesses we collaborate with everyday."
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-shell border-t">
        <div className="container-soft grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Questions clients ask before starting.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Clear answers reduce friction and help qualified clients move toward a useful consultation.
            </p>
          </div>
          <Accordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      <section className="section-shell border-t bg-primary text-primary-foreground">
        <div className="container-soft flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">Ready to build?</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Book a free consultation for your website or app.
            </h2>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Start the conversation
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
