import { cn } from "@/lib/utils";

const plans = [
  {
    eyebrow: "Si ya tienes leads",
    name: "Xentra CRM",
    text: "Todo el sistema: inspección, Fall Risk Score, reporte, cotización, contratos y pagos.",
    featured: false,
  },
  {
    eyebrow: "Si quieres más clientes · Recomendado",
    name: "Xentra Growth",
    text: "Todo lo anterior, más estrategia de marketing y publicidad en redes, con funnels gestionados desde Xentra.",
    featured: true,
  },
  {
    eyebrow: "Si quieres delegarlo todo",
    name: "Xentra Full",
    text: "Todo lo de Growth, más gestión completa de tus redes sociales.",
    featured: false,
  },
];

export function Plans() {
  return (
    <section id="planes" className="bg-mist py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-ink lg:text-5xl">
          Empieza donde estás hoy
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-muted lg:text-lg xl:text-xl">
          Todos los planes incluyen Xentra configurado, el Fall Risk Score con reporte PDF,
          cotizaciones, contratos y seguimiento por email.
        </p>
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "rounded-2xl p-6 lg:p-8 xl:p-10",
                p.featured
                  ? "bg-navy text-white shadow-xl md:-my-4 md:py-10 xl:py-12"
                  : "border border-line bg-white text-ink"
              )}
            >
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-wider lg:text-xs",
                  p.featured ? "text-sky" : "text-muted"
                )}
              >
                {p.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-extrabold lg:text-2xl xl:text-3xl">{p.name}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed lg:text-base xl:text-lg", p.featured ? "text-white/70" : "text-muted")}>
                {p.text}
              </p>
              <p className="mt-8 text-2xl font-extrabold lg:text-3xl">[PRECIO]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
