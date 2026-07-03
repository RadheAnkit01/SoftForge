"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { useForm ,useWatch} from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const contactSchema = z
  .object({
    name: z.string().min(2, "Please enter your name."),
    email: z.string().email("Please enter a valid email."),
    company: z.string().optional(),
    countryCode: z.string().min(1, "Select a country code."),
    customCountryCode: z.string().optional(),
    phone: z.string().regex(/^\d{7,15}$/, "Please enter a valid phone number."),
    service: z.string().min(1, "Choose a service."),
    budget: z.string().min(1, "Choose a budget range."),
    message: z
      .string()
      .min(20, "Tell us a little more about the project.")
      .max(2000, "Project details cannot exceed 2000 characters."),

  })
  .refine(
    (data) =>
      data.countryCode !== "other" ||
      !!data.customCountryCode?.trim(),
    {
      path: ["customCountryCode"],
      message: "Please enter your country code.",
    }
  );

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "focus-ring min-h-11 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground";

type ContactFormProps = {
  isIndia: boolean;
};
const indianBudgets: string[] = [
  "₹14,999 - ₹24,999",
  "₹24,999 - ₹34,999",
  "₹34,999 - ₹49,999",
  "₹50,000+",
  "Need guidance",
];

const internationalBudgets: string[] = [
  "$399 - $699",
  "$700 - $999",
  "$1,000 - $2,000",
  "$2,000+",
  "Need guidance",
];

export function ContactForm({
  isIndia,
}: ContactFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const budgets = isIndia
    ? indianBudgets
    : internationalBudgets;
  
  const {
  control,
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<ContactFormValues>({
  resolver: zodResolver(contactSchema),
  defaultValues: {
    countryCode: "+91",
    customCountryCode: "",
    service: "",
    budget: "",
  },
});

const selectedCountryCode = useWatch({
  control,
  name: "countryCode",
});

  async function onSubmit(values: ContactFormValues) {
    try {
      setStatus("Sending inquiry...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Failed");
      }
      setStatus("Inquiry sent successfully.");
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
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

      <div className="mt-4">
        <Field
          label="Phone Number"
          error={errors.countryCode?.message || errors.phone?.message}
        >
          <div className="flex gap-2">
            <select
              className="w-36 rounded-md border bg-background px-3 py-2 text-sm"
              {...register("countryCode")}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+971">🇦🇪 +971</option>

              <option value="other">🌍 Other</option>
            </select>

            {selectedCountryCode === "other" && (
              <input
                className="w-24 rounded-md border bg-background px-3 py-2 text-sm"
                placeholder="+123"
                {...register("customCountryCode")}
              />
            )}

            <input
              type="tel"
              className={cn(inputClass, "flex-1")}
              placeholder="9876543210"
              {...register("phone")}
            />
          </div>
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
            <option>Need Combo Plan</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Budget range" error={errors.budget?.message}>
          <select className={inputClass} {...register("budget")}>
            <option value="">Select budget</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
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
