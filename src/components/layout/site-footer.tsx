import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/refund-policy", label: "Refunds" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-soft grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div className="max-w-md">
          <Link className="focus-ring inline-flex items-center gap-2 rounded-md" href="/">
            <span className="grid size-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              SF
            </span>
            <span className="text-sm font-bold">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {siteConfig.tagline} Premium websites, web apps, and mobile products for teams that care about quality.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="focus-ring inline-flex items-center gap-2 rounded-md text-muted-foreground hover:text-foreground" href={`mailto:${siteConfig.email}`}>
              <Mail className="size-4" />
              {siteConfig.email}
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-md text-muted-foreground hover:text-foreground" href={siteConfig.whatsappUrl}>
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link className="focus-ring rounded-md text-sm text-muted-foreground hover:text-foreground" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="focus-ring rounded-md text-sm text-muted-foreground hover:text-foreground" href="/blog">
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Policies</h2>
          <div className="mt-4 grid gap-3">
            {policyLinks.map((item) => (
              <Link className="focus-ring rounded-md text-sm text-muted-foreground hover:text-foreground" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-5">
        <div className="container-soft text-sm text-muted-foreground">
          © {new Date().getFullYear()} SoftForge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
