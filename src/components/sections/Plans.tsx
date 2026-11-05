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
    <section id="planes" className="bg-mist py-20">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Empieza donde estás hoy
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Todos los planes incluyen Xentra configurado, el Fall Risk Score con reporte PDF,
          cotizaciones, contratos y seguimiento por email.
        </p>
        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "rounded-2xl p-6",
                p.featured
                  ? "bg-navy text-white shadow-xl md:-my-3 md:py-9"
                  : "border border-line bg-white text-ink"
              )}
            >
              <p
                className={cn(
                  "text-[11px] font-bold uppercase tracking-wider",
                  p.featured ? "text-sky" : "text-muted"
                )}
              >
                {p.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-extrabold">{p.name}</h3>
              <p className={cn("mt-3 text-sm leading-relaxed", p.featured ? "text-white/70" : "text-muted")}>
                {p.text}
              </p>
              <p className="mt-6 text-2xl font-extrabold">[PRECIO]</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
