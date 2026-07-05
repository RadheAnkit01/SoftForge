import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/features/analytics/google-analytics";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { createMetadata } from "@/lib/seo";
// import { schemaOrg } from "@/lib/site";
// import {
//   organizationSchema,
//   websiteSchema,
// } from "@/lib/schema";
import { StructuredData } from "@/components/seo/structured-data";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  ...createMetadata(),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://softforge.site"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};


export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <a
            className="focus-ring sr-only left-4 top-4 z-[60] rounded-md bg-background px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed"
            href="#main-content"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
          {/* <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
            type="application/ld+json"
          /> */}
          {/* <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema()),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema()),
            }}
          /> */}
        <StructuredData data={organizationSchema()} />
        <StructuredData data={websiteSchema()} />   
        </ThemeProvider>
      </body>
    </html>
  );
}
