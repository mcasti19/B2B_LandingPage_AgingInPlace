import { Check } from "lucide-react";

const items = [
  "Datos de la familia y de la propiedad: edad, tipo, pisos, baños y escaleras",
  "Índice global de riesgo de caídas de 0 a 100, con su nivel",
  "Puntaje y riesgos encontrados en cada espacio de la casa",
  "Recomendaciones y próximos pasos",
  "Firma del evaluador y de la familia",
];

export function Report() {
  return (
    <section id="reporte" className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-sky">El reporte que cierra ventas</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            La familia ve el riesgo de su casa. Tú dejas de convencer.
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Al terminar la inspección, Xentra genera un reporte PDF profesional con el logo de tu
            empresa, listo para entregar junto con la cotización.
          </p>
        </div>
        <ul className="space-y-3 rounded-2xl border border-white/10 bg-navy-800 p-6">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-lg border border-white/10 bg-navy-700/40 px-4 py-3 text-sm text-white/90"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
