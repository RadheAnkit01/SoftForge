import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "The SoftForge blog is coming soon with practical notes on websites, apps, performance, SEO, and product development.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="section-shell">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Blog"
          title="Coming soon."
          description="SoftForge will publish practical articles on web development, app development, product strategy, SEO, performance, and maintainable software."
        />
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/contact">Ask a project question</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
