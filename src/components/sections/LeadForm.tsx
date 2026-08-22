"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertTriangle } from "lucide-react";

// ─── Zod Schema ────────────────────────────────────────────────────────────────
// Field names match the Laravel PublicB2BLeadRequest contract 1-to-1.
const formSchema = z.object({
  contact_name: z.string().min(2, "Name must be at least 2 characters"),
  company_name: z.string().min(2, "Company name is required"),
  email:        z.string().email("Enter a valid email address"),
  phone:        z.string().min(7, "Enter a valid phone number").max(50),
  state:        z.string().min(2, "State is required"),
  volume:       z.string().min(1, "Please select a volume option"),
  // Honeypot — must remain empty; bots may fill it.
  // Optional so react-hook-form initialises it as an empty string.
  _gotcha:      z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ─── API Types ─────────────────────────────────────────────────────────────────
interface ApiValidationError {
  message: string;
  errors: Record<string, string[]>;
}

// ─── UTM Capture ───────────────────────────────────────────────────────────────
function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source:   params.get("utm_source")   ?? "",
    utm_medium:   params.get("utm_medium")   ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
  };
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function LeadForm() {
  const [isSuccess, setIsSuccess]   = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setErrorBanner(null);

    const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL;
    if (!apiUrl) {
      setErrorBanner("Configuration error: CRM API URL is not set.");
      return;
    }

    const payload = {
      contact_name: data.contact_name,
      company_name: data.company_name,
      email:        data.email,
      phone:        data.phone,
      // Map the volume dropdown into the message field
      message:      `Projects per month: ${data.volume} | State: ${data.state}`,
      // UTM attribution captured from URL params
      ...getUtmParams(),
      // Honeypot — must remain empty; bots may fill it
      _gotcha: "",
    };

    try {
      const response = await fetch(`${apiUrl}/api/public/b2b/leads`, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(payload),
      });

      // ── Happy path ────────────────────────────────────────────────────────
      if (response.status === 201) {
        reset();
        setIsSuccess(true);
        return;
      }

      // ── Validation errors from Laravel ─────────────────────────────────────
      if (response.status === 422) {
        const body: ApiValidationError = await response.json();
        const fieldMap: Partial<Record<keyof FormData, keyof FormData>> = {
          contact_name: "contact_name",
          company_name: "company_name",
          email:        "email",
          phone:        "phone",
          state:        "state",
          volume:       "volume",
        };

        let hasFieldError = false;
        for (const [apiField, formField] of Object.entries(fieldMap)) {
          if (body.errors?.[apiField]?.length) {
            setError(formField as keyof FormData, {
              type:    "server",
              message: body.errors[apiField][0],
            });
            hasFieldError = true;
          }
        }

        if (!hasFieldError) {
          setErrorBanner(body.message ?? "Validation failed. Please review your entries.");
        }
        return;
      }

      // ── Rate limited ───────────────────────────────────────────────────────
      if (response.status === 429) {
        setErrorBanner("Too many submissions. Please wait a moment and try again.");
        return;
      }

      // ── Temporary server-side issue ───────────────────────────────────────
      if (response.status === 503) {
        setErrorBanner("We are experiencing a temporary issue. Please try again later or contact us directly.");
        return;
      }

      // ── Unexpected status ─────────────────────────────────────────────────
      setErrorBanner(`Unexpected error (${response.status}). Please try again.`);
    } catch {
      // Network failure / CORS error / server unreachable
      setErrorBanner("Could not reach our servers. Please check your connection and try again.");
    }
  };

  // ─── Success State ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <section id="demo" className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-zinc-950 rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl shadow-emerald-500/10">
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-2">
                  You&apos;re on the list!
                </h2>
                <p className="text-zinc-400 max-w-md">
                  Thanks for reaching out. Our team will review your information and contact you within 24 hours to schedule your personalized demo.
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
              >
                Submit another response
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── Form ───────────────────────────────────────────────────────────────────
  return (
    <section id="demo" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">

            {/* Left Side: Copy */}
            <div className="md:col-span-2 bg-zinc-900 p-6 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-4 leading-snug">
                ¿Listo para dominar tu territorio?
              </h2>
              <p className="text-zinc-400 mb-8">
                Completa el formulario para agendar una demo de nuestro sistema y descubrir cómo podemos llenar tu calendario con dueños de casa pre-calificados.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">✓</div>
                  Exclusividad de Área
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">✓</div>
                  Leads 100% Confirmados
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">✓</div>
                  CRM Incluido
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:col-span-3 p-6 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

                {/* Row 1: Name + Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact_name">Owner&apos;s Name</Label>
                    <Input id="contact_name" placeholder="John Doe" {...register("contact_name")} />
                    {errors.contact_name && (
                      <span className="text-red-400 text-xs">{errors.contact_name.message}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company_name">Company Name</Label>
                    <Input id="company_name" placeholder="Acme Remodeling" {...register("company_name")} />
                    {errors.company_name && (
                      <span className="text-red-400 text-xs">{errors.company_name.message}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@acmeremodeling.com" {...register("email")} />
                    {errors.email && (
                      <span className="text-red-400 text-xs">{errors.email.message}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} />
                    {errors.phone && (
                      <span className="text-red-400 text-xs">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: State */}
                <div className="space-y-2">
                  <Label htmlFor="state">State (e.g. Florida, Texas)</Label>
                  <Input id="state" placeholder="State where you operate" {...register("state")} />
                  {errors.state && (
                    <span className="text-red-400 text-xs">{errors.state.message}</span>
                  )}
                </div>

                {/* Row 4: Volume */}
                <div className="space-y-2">
                  <Label htmlFor="volume" className="text-sm leading-snug block">
                    How many accessibility projects do you complete per month?
                  </Label>
                  <select
                    id="volume"
                    className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm ring-offset-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 text-zinc-100"
                    {...register("volume")}
                  >
                    <option value="">Select an option</option>
                    <option value="1-3">1 to 3 projects</option>
                    <option value="4-10">4 to 10 projects</option>
                    <option value="10+">More than 10 projects</option>
                  </select>
                  {errors.volume && (
                    <span className="text-red-400 text-xs">{errors.volume.message}</span>
                  )}
                </div>

                {/* Honeypot — hidden from real users, traps bots */}
                <input type="text" {...register("_gotcha")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                {/* Error Banner */}
                {errorBanner && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{errorBanner}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="emerald"
                  size="lg"
                  className="w-full h-auto py-3 md:py-4 text-base md:text-lg mt-2 whitespace-normal text-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get my growth plan"}
                </Button>

                <p className="text-center text-xs text-zinc-500">
                  Your data is safe. We will never share it with anyone.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
