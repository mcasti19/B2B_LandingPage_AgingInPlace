import { FileText } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";

function ScoreRing({ value }: { value: number }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-20 w-20 shrink-0 lg:h-24 lg:w-24">
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="40" cy="40" r={r} fill="none" stroke="#e8edf7" strokeWidth="7" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="#16a870"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-2xl font-extrabold text-ink lg:text-3xl">{value}</span>
        <span className="mt-0.5 text-[9px] text-muted">de 100</span>
      </div>
    </div>
  );
}

function ReportCard() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-5 lg:max-w-lg lg:p-7 xl:max-w-xl text-ink shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between text-[11px] text-muted">
        <span>Inspección terminada · hoy</span>
        <span className="rounded border border-line px-2 py-0.5">Ejemplo ilustrativo</span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <ScoreRing value={23} />
        <div>
          <p className="font-bold lg:text-lg">Fall Risk Score</p>
          <p className="text-xs text-muted">Miami, FL · 2 pisos · con escaleras</p>
          <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
            Riesgo bajo global
          </span>
        </div>
      </div>
      <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-muted">
        Espacios que necesitan atención
      </p>
      <ul className="mt-2 divide-y divide-line text-sm lg:text-base">
        <li className="flex justify-between py-2">
          <span>
            <b>Entrada</b> · escalones sin pasamanos
          </span>
          <b className="text-red-600">78</b>
        </li>
        <li className="flex justify-between py-2">
          <span>
            <b>Baño</b> · sin barras de apoyo
          </span>
          <b className="text-red-600">64</b>
        </li>
      </ul>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-mist px-3 py-2.5 text-xs font-semibold text-brand lg:text-sm">
        <FileText className="h-4 w-4" />
        Reporte PDF listo · Cotización generada
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 py-16 lg:gap-16 lg:px-12 lg:py-28 lg:grid-cols-[1.15fr_1fr] xl:py-32">
        <div>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs lg:px-4 lg:py-1.5 lg:text-sm text-white/80">
            CRM + marketing para el sector de aging in place
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            El único CRM que te dice qué cliente necesita tu servicio primero.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/70 lg:text-xl lg:leading-relaxed">
            Convierte cada visita en una propuesta lista para firmar. Evalúa la casa, obtén el Fall
            Risk Score y entrega un reporte profesional en minutos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 lg:mt-10 lg:gap-4">
            <a href="#demo" className={buttonClasses({ size: "lg" })}>
              Quiero ver Xentra en acción
            </a>
            <a href="#sistema" className={buttonClasses({ variant: "outlineLight", size: "lg" })}>
              Cómo funciona
            </a>
          </div>
          <p className="mt-6 text-xs text-white/55 lg:text-sm">
            Prueba gratis de 21 días · Un producto y servicio de{" "}
            <b className="text-white/80">SkyWeb Agency</b>
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <ReportCard />
        </div>
      </div>
    </section>
  );
}
