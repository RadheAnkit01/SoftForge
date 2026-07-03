"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  service: z.string().min(1, "Choose a service."),
  budget: z.string().min(1, "Choose a budget range."),
  message: z.string().min(20, "Tell us a little more about the project."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "focus-ring min-h-11 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
      budget: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("Preparing your consultation request...");
    sessionStorage.setItem("softforge:lastInquiry", JSON.stringify(values));
    await new Promise((resolve) => setTimeout(resolve, 450));
    router.push("/thank-you");
  }

  return (
    <form
      className="rounded-lg border bg-background p-5 shadow-sm sm:p-6"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input autoComplete="name" className={inputClass} {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input autoComplete="email" className={inputClass} type="email" {...register("email")} />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          <input autoComplete="organization" className={inputClass} {...register("company")} />
        </Field>
        <Field label="Service" error={errors.service?.message}>
          <select className={inputClass} {...register("service")}>
            <option value="">Select service</option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>Backend or API Development</option>
            <option>AI Integration</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Budget range" error={errors.budget?.message}>
          <select className={inputClass} {...register("budget")}>
            <option value="">Select budget</option>
            <option>$799 - $1,999</option>
            <option>$2,000 - $5,000</option>
            <option>$5,000+</option>
            <option>Need guidance</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Project details" error={errors.message?.message}>
          <textarea
            className={cn(inputClass, "min-h-36 resize-y leading-6")}
            placeholder="Tell us what you want to build, your timeline, and what success looks like."
            {...register("message")}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {status ?? "You will be redirected after validation."}
        </p>
        <Button disabled={isSubmitting} size="lg" type="submit">
          <Send className="size-4" />
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  children,
  error,
  label,
}: {
  children: React.ReactNode;
  error?: string;
  label: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      <span>{label}</span>
      {children}
      {error ? (
        <span className="text-sm font-normal text-destructive">{error}</span>
      ) : null}
    </label>
  );
}
