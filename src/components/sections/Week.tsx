const days = [
  ["Lunes", "Entran los leads de tu campaña con su contexto: residente, caída reciente y movilidad."],
  ["Martes", "Tu equipo llama, agenda las visitas y las ve en su agenda de Field Mode."],
  ["Miércoles", "Inspeccionas desde el iPad, obtienes el Fall Risk Score y entregas el reporte con la cotización."],
  ["Jueves", "La familia aprueba, el lead avanza solo en el pipeline y generas el contrato."],
  ["Viernes", "Revisas tus números: evaluaciones pendientes, propuestas enviadas, tasa de cierre, valor del pipeline y cobros."],
];

export function Week() {
  return (
    <section className="bg-mist py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand lg:text-sm">Así se ve tu semana</p>
        <h2 className="mt-3 text-balance text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-ink lg:text-5xl">
          Tú atiendes familias. Xentra se encarga del resto.
        </h2>
        <dl className="mt-12 space-y-3 lg:mt-16 lg:space-y-4">
          {days.map(([day, text]) => (
            <div
              key={day}
              className="grid gap-1 rounded-xl bg-white px-6 py-5 shadow-sm sm:grid-cols-[130px_1fr] sm:gap-6 lg:px-8 lg:py-6 lg:grid-cols-[160px_1fr]"
            >
              <dt className="text-sm font-bold text-brand lg:text-lg">{day}</dt>
              <dd className="text-sm text-muted lg:text-lg">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
