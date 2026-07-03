import {
  Blocks,
  Bot,
  Code2,
  Database,
  Figma,
  Gauge,
  Globe2,
  Layers3,
  Lock,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "SoftForge",
  tagline: "Forging Digital Experiences That Drive Growth.",
  description:
    "SoftForge builds premium websites, web apps, and Flutter mobile apps for startups, small businesses, and growing companies worldwide.",
  email: "hello@softforge.site",
  whatsapp: "+917903707134",
  whatsappUrl:
    "https://wa.me/917903707134?text=Hi%20SoftForge%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://softforge.site",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/technologies", label: "Tech" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const trustStats = [
  { value: "2-6 wk", label: "Typical MVP delivery" },
  { value: "95+", label: "Performance target" },
  { value: "WCAG", label: "Accessibility-first build" },
  { value: "Global", label: "Remote-ready delivery" },
];

export const services = [
  {
    title: "Website Development",
    description:
      "Conversion-focused landing pages, business websites, portfolios, corporate sites, e-commerce stores, and custom web applications.",
    icon: Globe2,
    items: [
      "Landing pages",
      "Business websites",
      "E-commerce websites",
      "Custom web applications",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, and Flutter applications built with polished interfaces, scalable architecture, and release readiness.",
    icon: Smartphone,
    items: ["Android apps", "iOS apps", "Flutter apps", "App maintenance"],
  },
  {
    title: "Product Engineering",
    description:
      "Backend systems, APIs, AI integrations, security hardening, performance optimization, and hosting assistance.",
    icon: Code2,
    items: ["Backend development", "API development", "AI integration", "Hosting support"],
  },
  {
    title: "Design & Growth",
    description:
      "UI/UX design, logo design, brand-aligned product systems, and ongoing website improvements for growing teams.",
    icon: Figma,
    items: ["UI/UX design", "Logo design", "Design systems", "Maintenance"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We define the business goal, audience, core workflows, budget range, and launch constraints.",
  },
  {
    title: "Design",
    description:
      "We map the user journey, create the interface direction, and align on the conversion story.",
  },
  {
    title: "Build",
    description:
      "We ship clean, type-safe, responsive code with reusable components and production-minded architecture.",
  },
  {
    title: "Launch",
    description:
      "We optimize performance, SEO, accessibility, analytics, hosting, and handoff before going live.",
  },
];

export const technologies = [
  { name: "Next.js", icon: Layers3 },
  { name: "React", icon: Blocks },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Supabase", icon: Database },
  { name: "Firebase Auth", icon: ShieldCheck },
  { name: "Flutter", icon: Smartphone },
  { name: "Spring Boot", icon: Code2 },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "AI Integrations", icon: Bot },
  { name: "Vercel", icon: Rocket },
  { name: "Security", icon: Lock },
  { name: "Performance", icon: Gauge },
  { name: "Maintenance", icon: Wrench },
];

export const pricingPlans = [
  {
    name: "Basic Plan",
    price: "From ₹7,999",
    description:
      "A polished foundation for businesses that need a fast, credible online presence.",
    features: [
      "Up to 5 core pages",
      "Responsive website build",
      "Contact form and WhatsApp CTA",
      "Basic SEO setup",
      "Performance optimization",
      "Deployment guidance",
    ],
    cta: "Book Free Consultation",
  },
  {
    name: "Premium Plan",
    price: "From ₹14,999",
    description:
      "A stronger product-grade build for startups, SaaS teams, and growing businesses.",
    features: [
      "Custom website or web app",
      "CMS-ready content architecture",
      "Advanced animations and interactions",
      "Analytics and conversion tracking",
      "Security and accessibility pass",
      "Launch support and documentation",
    ],
    cta: "Discuss Premium Build",
    featured: true,
  },
];

export const testimonials = [
  {
    quote:
      "SoftForge translated our rough startup idea into a clean, fast website that felt credible from day one.",
    name: "Maya Chen",
    role: "Founder, Orbit Labs",
  },
  {
    quote:
      "The process was direct, organized, and refreshingly technical. We knew exactly what was being built and why.",
    name: "Arjun Mehta",
    role: "Director, Northline Fitness",
  },
  {
    quote:
      "They cared about usability and performance as much as the visual design. That made the launch feel premium.",
    name: "Elena Ward",
    role: "COO, Haven Clinics",
  },
];

export const sampleLogos = ["NOVA", "HAVEN", "ORBIT", "KIN", "ATLAS"];

export const faqs = [
  {
    question: "How fast can SoftForge launch a website?",
    answer:
      "Most focused websites can launch in two to six weeks depending on scope, content readiness, integrations, and feedback speed.",
  },
  {
    question: "Do you build mobile apps too?",
    answer:
      "Yes. SoftForge builds Android, iOS, and Flutter applications, including MVPs, internal tools, and customer-facing products.",
  },
  {
    question: "Can you work with an existing brand?",
    answer:
      "Yes. We can use your existing brand guidelines or refine the visual system so the product feels more polished and consistent.",
  },
  {
    question: "Do you offer fixed pricing?",
    answer:
      "Version 1 displays two starting plans. Larger websites, SaaS platforms, and mobile apps are quoted after a free consultation.",
  },
  {
    question: "Will the website be SEO-ready?",
    answer:
      "Yes. The build includes semantic HTML, metadata, Open Graph tags, structured data, robots, sitemap, and performance-minded implementation.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can support maintenance, performance improvements, content updates, hosting assistance, analytics, and future feature development.",
  },
];

export const team = [
  {
    name: "Radhe Sharma",
    role: "Founder & Product Engineer",
    bio: "Leads strategy, engineering, and delivery for web and mobile products.",
  },
  {
    name: "Design Partner Network",
    role: "UI/UX & Brand Support",
    bio: "A flexible creative bench for interface design, identity, and launch assets.",
  },
  {
    name: "Engineering Collaborators",
    role: "Specialist Developers",
    bio: "Trusted support for backend systems, AI integrations, QA, and app delivery.",
  },
];

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "SoftForge respects visitor and client privacy. This policy explains the data collected through the website and how inquiries are handled.",
    sections: [
      "We collect contact details that visitors voluntarily submit through forms, email, or WhatsApp.",
      "Analytics may be used to understand website performance and visitor behavior in aggregate.",
      "Submitted project details are used only to respond to inquiries, prepare quotations, and deliver agreed services.",
      "SoftForge does not sell personal information. Data may be shared only with service providers required to operate the website or deliver the project.",
      "Visitors may request correction or deletion of their submitted information by contacting SoftForge.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "These terms govern use of the SoftForge website and outline expectations for prospective client engagement.",
    sections: [
      "Website content is provided for general information and does not create a client relationship until a proposal or agreement is accepted.",
      "Project timelines and pricing depend on scope, content readiness, integrations, and response times.",
      "All intellectual property terms, payment schedules, and deliverables are defined in the project agreement.",
      "SoftForge may update website content, services, and pricing information without prior notice.",
      "Visitors agree not to misuse the website, forms, or communication channels.",
    ],
  },
  refund: {
    title: "Refund Policy",
    intro:
      "SoftForge aims to keep pricing, milestones, and deliverables clear before paid work begins.",
    sections: [
      "Deposits and milestone payments are generally tied to scheduled project work and reserved delivery capacity.",
      "Refund eligibility depends on the signed proposal, project stage, delivered work, and unrecoverable third-party costs.",
      "If a project is cancelled, SoftForge will review completed work and remaining milestones before determining any refund amount.",
      "Third-party software, hosting, domains, subscriptions, and payment gateway charges are not controlled by SoftForge and may be non-refundable.",
      "Clients should contact SoftForge promptly if there is a concern with scope, quality, or delivery.",
    ],
  },
};

export const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  areaServed: "Worldwide",
  serviceType: [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Backend Development",
    "AI Integration",
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SoftForge Development Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export const primaryCta = {
  label: "Book Free Consultation",
  href: "/contact",
  icon: MessageCircle,
};
