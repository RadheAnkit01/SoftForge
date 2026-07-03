import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with SoftForge on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
      href={siteConfig.whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="size-5" />
    </a>
  );
}
