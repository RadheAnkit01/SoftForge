import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description: "Thank you for contacting SoftForge. Your consultation request has been received.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <section className="section-shell">
      <div className="container-soft max-w-3xl text-center">
        <CheckCircle2 className="mx-auto size-12 text-foreground" />
        <h1 className="mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">
          Thanks for reaching out.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          SoftForge has your inquiry. For the fastest response, you can also send a quick WhatsApp message with any references or deadline details.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.whatsappUrl}>
              <MessageCircle className="size-4" />
              Continue on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
