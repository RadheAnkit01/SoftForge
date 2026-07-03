import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { team } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Team",
  description: "Meet the lean SoftForge delivery team and partner network behind premium website and app builds.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Team"
          title="Lean core team, flexible specialist network."
          description="SoftForge stays small enough to be personal and expands with trusted collaborators when a project needs deeper specialization."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <div className="grid size-12 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                {member.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
              </div>
              <h2 className="mt-5 text-lg font-semibold">{member.name}</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
