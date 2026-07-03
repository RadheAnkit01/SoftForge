"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: Item[] }) {
  return (
    <AccordionPrimitive.Root className="space-y-3" type="single" collapsible>
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          className="rounded-lg border bg-background px-5"
          key={item.question}
          value={`item-${index}`}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                "focus-ring flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold",
                "[&[data-state=open]>svg]:rotate-180",
              )}
            >
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground transition-transform"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-none data-[state=open]:animate-none">
            <div className="pb-5 leading-7">{item.answer}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
