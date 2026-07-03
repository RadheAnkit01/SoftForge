import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="container-soft max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
          This page is not forged yet.
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          The page you are looking for may have moved, or it may be part of a future SoftForge release.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
