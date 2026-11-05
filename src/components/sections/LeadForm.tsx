"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input, fieldClasses } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertTriangle } from "lucide-react";

// ─── Schema Zod ────────────────────────────────────────────────────────────────
// Los nombres coinciden 1 a 1 con el contrato de PublicB2BLeadRequest (Laravel).
// `company_type` no existe en el backend: viaja dentro de `message`.
const COMPANY_TYPES = [
  "Modificaciones del hogar",
  "Remodelación general",
  "Especialista en aging in place",
  "Otro",
] as const;

const formSchema = z.object({
  contact_name: z.string().min(2, "Escribe tu nombre"),
  company_name: z.string().min(2, "Escribe el nombre de tu empresa"),
  email: z.string().email("Escribe un email válido"),
  phone: z.string().min(7, "Escribe un teléfono válido").max(50),
  company_type: z.enum(COMPANY_TYPES),
  // Honeypot: debe quedar vacío.
  _gotcha: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;
type ServerField = "contact_name" | "company_name" | "email" | "phone";

interface ApiValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const SERVER_FIELDS: ServerField[] = ["contact_name", "company_name", "email", "phone"];

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
  };
}

function FieldError({ message }: { message?: string }) {
  return message ? <span className="text-xs text-red-600">{message}</span> : null;
}

export function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { company_type: COMPANY_TYPES[0] },
  });

  const onSubmit = async (data: FormData) => {
    setErrorBanner(null);

    const apiUrl = process.env.NEXT_PUBLIC_CRM_API_URL;
    if (!apiUrl) {
      setErrorBanner("Error de configuración: falta la URL de la API.");
      return;
    }

    const payload = {
      contact_name: data.contact_name,
      company_name: data.company_name,
      email: data.email,
      phone: data.phone,
      message: `Tipo de empresa: ${data.company_type}`,
      ...getUtmParams(),
      _gotcha: "",
    };

    try {
      const response = await fetch(`${apiUrl}/api/public/b2b/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.status === 201) {
        reset();
        setIsSuccess(true);
        return;
      }

      if (response.status === 422) {
        const body: ApiValidationError = await response.json();
        let hasFieldError = false;
        for (const field of SERVER_FIELDS) {
          const msg = body.errors?.[field]?.[0];
          if (msg) {
            setError(field, { type: "server", message: msg });
            hasFieldError = true;
          }
        }
        if (!hasFieldError) {
          setErrorBanner(body.message ?? "Revisa los datos e inténtalo de nuevo.");
        }
        return;
      }

      if (response.status === 429) {
        setErrorBanner("Demasiados envíos. Espera un momento e inténtalo de nuevo.");
        return;
      }

      if (response.status === 503) {
        setErrorBanner("Tenemos un problema temporal. Inténtalo más tarde o escríbenos directamente.");
        return;
      }

      setErrorBanner(`Error inesperado (${response.status}). Inténtalo de nuevo.`);
    } catch {
      setErrorBanner("No pudimos conectar con nuestros servidores. Revisa tu conexión e inténtalo de nuevo.");
    }
  };

  return (
    <section id="demo" className="bg-navy py-20 text-white lg:py-28 xl:py-32">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 lg:gap-24 lg:px-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight lg:text-5xl xl:text-[3.4rem]">
            Mira Xentra en acción con tu empresa.
          </h2>
          <p className="mt-5 max-w-xl text-white/70 lg:text-lg xl:text-xl xl:leading-relaxed">
            Déjanos tus datos y en una demo de 20 minutos te mostramos una inspección real con el Fall
            Risk Score. Después activas tu prueba gratis de 21 días. En español y sin compromiso.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-white p-6 text-ink shadow-2xl shadow-black/30 md:p-8 lg:max-w-xl lg:justify-self-end xl:p-10">
          {isSuccess ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center" role="status">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-extrabold">¡Listo, recibimos tus datos!</h3>
              <p className="max-w-sm text-sm text-muted">
                Nuestro equipo te contactará en menos de 24 horas para agendar tu demo de 20 minutos.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-2 text-xs text-muted underline underline-offset-4 hover:text-ink"
              >
                Enviar otra respuesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="contact_name">Tu nombre</Label>
                <Input id="contact_name" placeholder="Ej. María González" autoComplete="name" {...register("contact_name")} />
                <FieldError message={errors.contact_name?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_name">Nombre de tu empresa</Label>
                <Input id="company_name" autoComplete="organization" {...register("company_name")} />
                <FieldError message={errors.company_name?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" autoComplete="email" {...register("email")} />
                <FieldError message={errors.email?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+1" autoComplete="tel" {...register("phone")} />
                <FieldError message={errors.phone?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company_type">Tipo de empresa</Label>
                <select id="company_type" className={fieldClasses} {...register("company_type")}>
                  {COMPANY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.company_type?.message} />
              </div>

              {/* Honeypot: oculto para personas, atrapa bots */}
              <input type="text" {...register("_gotcha")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {errorBanner && (
                <div role="alert" className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{errorBanner}</span>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Agenda tu demo y activa tus 21 días gratis"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
