import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { technologies } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Technologies",
  description: "SoftForge uses Next.js, React, TypeScript, Tailwind CSS, Supabase, Firebase Authentication, Flutter, AI integrations, and Vercel.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Technology Stack"
          title="A scalable foundation for websites, apps, and future product features."
          description="The stack is selected for maintainability, performance, developer velocity, and deployment reliability."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <Card key={tech.name}>
                <Icon className="size-6 text-muted-foreground" />
                <h2 className="mt-5 text-lg font-semibold">{tech.name}</h2>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
