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
    <section id="reporte" className="bg-navy py-20 text-white lg:py-28 xl:py-32">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 lg:gap-20 lg:px-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-sky lg:text-sm">El reporte que cierra ventas</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight lg:text-5xl xl:text-[3.4rem]">
            La familia ve el riesgo de su casa. Tú dejas de convencer.
          </h2>
          <p className="mt-5 max-w-xl text-white/70 lg:text-lg xl:text-xl xl:leading-relaxed">
            Al terminar la inspección, Xentra genera un reporte PDF profesional con el logo de tu
            empresa, listo para entregar junto con la cotización.
          </p>
        </div>
        <ul className="space-y-3 rounded-2xl border border-white/10 bg-navy-800 p-6 lg:space-y-4 lg:p-8">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-lg border border-white/10 bg-navy-700/40 px-4 py-3 text-sm text-white/90 lg:px-5 lg:py-4 lg:text-base xl:text-lg"
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
