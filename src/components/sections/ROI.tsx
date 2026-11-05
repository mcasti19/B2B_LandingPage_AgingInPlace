import { ArrowRight, CheckCircle2 } from "lucide-react";

const projects = [
  "Rampas de acceso personalizadas",
  "Remodelación de baños sin barreras",
  "Instalación de salvaescaleras y ascensores",
];

export function ROI() {
  return (
    <section id="roi" className="bg-mist py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-balance text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-ink lg:text-5xl">
          Matemática simple: rentabilidad innegable
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-muted lg:text-lg xl:text-xl xl:leading-relaxed">
          Nuestro sistema no es un &ldquo;gasto&rdquo;, es una inversión de flujo de caja positivo.
          Solo necesitas un cierre para que el servicio se pague solo por meses.
        </p>

        <div className="mt-12 grid overflow-hidden rounded-3xl shadow-xl shadow-navy/10 lg:mt-16 lg:grid-cols-2">
          <div className="bg-white p-8 lg:p-12 xl:p-14">
            <p className="text-base font-semibold text-muted lg:text-lg">Ticket promedio aging in place</p>
            <p className="mt-2 flex items-baseline gap-3">
              <span className="text-5xl font-extrabold tracking-tight text-ink xl:text-6xl">$8k – $15k</span>
              <span className="text-sm text-muted lg:text-base">/ obra</span>
            </p>
            <ul className="mt-8 space-y-4 lg:mt-10">
              {projects.map((p) => (
                <li key={p} className="flex items-center gap-3 text-ink lg:text-lg">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand lg:h-6 lg:w-6" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-navy p-8 text-white lg:p-12 xl:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
            />
            <h3 className="relative text-2xl font-extrabold leading-snug lg:text-3xl">
              Una sola obra cerrada paga múltiples meses de nuestro sistema y CRM.
            </h3>
            <p className="relative mt-5 leading-relaxed text-white/70 lg:text-lg">
              Imagina cerrar 3 o 4 de estas obras cada mes. La pregunta no es si puedes pagarlo, sino
              cuánto dinero estás dejando sobre la mesa por no tener un sistema de adquisición de leads
              de alta intención.
            </p>
            <a
              href="#demo"
              className="group relative mt-8 inline-flex items-center gap-2 font-semibold text-sky hover:text-white lg:text-lg"
            >
              Calcula tu ROI potencial en nuestra demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
