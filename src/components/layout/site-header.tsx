"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, primaryCta, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const CtaIcon = primaryCta.icon;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/88 backdrop-blur-xl">
      <div className="container-soft flex h-16 items-center justify-between gap-4">
        <Link
          aria-label="SoftForge home"
          className="focus-ring flex items-center gap-2 rounded-md"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            SF
          </span>
          <span className="text-sm font-bold">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href={primaryCta.href}>
              <CtaIcon aria-hidden="true" className="size-4" />
              {primaryCta.label}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            size="icon"
            type="button"
            variant="ghost"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="container-soft grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 justify-start">
              <Link href={primaryCta.href} onClick={() => setOpen(false)}>
                <CtaIcon aria-hidden="true" className="size-4" />
                {primaryCta.label}
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
