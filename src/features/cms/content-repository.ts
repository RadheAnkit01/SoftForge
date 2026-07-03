import {
  faqs,
  pricingPlans,
  processSteps,
  services,
  technologies,
  testimonials,
} from "@/lib/site";

export type ContentRepository = {
  getServices: () => Promise<typeof services>;
  getTestimonials: () => Promise<typeof testimonials>;
  getFaqs: () => Promise<typeof faqs>;
  getTechnologies: () => Promise<typeof technologies>;
  getPricingPlans: () => Promise<typeof pricingPlans>;
  getProcessSteps: () => Promise<typeof processSteps>;
};

export const localContentRepository: ContentRepository = {
  getServices: async () => services,
  getTestimonials: async () => testimonials,
  getFaqs: async () => faqs,
  getTechnologies: async () => technologies,
  getPricingPlans: async () => pricingPlans,
  getProcessSteps: async () => processSteps,
};

export const contentRepository = localContentRepository;
