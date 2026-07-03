"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/site";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-lg border bg-secondary/35 p-6 sm:p-8">
        <Quote className="size-6 text-muted-foreground" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.figure
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: 8 }}
            key={current.name}
            transition={{ duration: 0.25 }}
          >
            <blockquote className="mt-6 text-xl font-medium leading-9 sm:text-2xl">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{current.name}</span>
              <span> · {current.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2">
        <Button
          aria-label="Previous testimonial"
          onClick={() => setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1))}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div aria-live="polite" className="px-3 text-sm text-muted-foreground">
          {index + 1} / {testimonials.length}
        </div>
        <Button
          aria-label="Next testimonial"
          onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
