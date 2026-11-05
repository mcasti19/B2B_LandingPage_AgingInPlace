const days = [
  ["Lunes", "Entran los leads de tu campaña con su contexto: residente, caída reciente y movilidad."],
  ["Martes", "Tu equipo llama, agenda las visitas y las ve en su agenda de Field Mode."],
  ["Miércoles", "Inspeccionas desde el iPad, obtienes el Fall Risk Score y entregas el reporte con la cotización."],
  ["Jueves", "La familia aprueba, el lead avanza solo en el pipeline y generas el contrato."],
  ["Viernes", "Revisas tus números: evaluaciones pendientes, propuestas enviadas, tasa de cierre, valor del pipeline y cobros."],
];

export function Week() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand">Así se ve tu semana</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Tú atiendes familias. Xentra se encarga del resto.
        </h2>
        <dl className="mt-10 space-y-3">
          {days.map(([day, text]) => (
            <div
              key={day}
              className="grid gap-1 rounded-xl bg-white px-5 py-4 shadow-sm sm:grid-cols-[110px_1fr] sm:gap-4"
            >
              <dt className="text-sm font-bold text-brand">{day}</dt>
              <dd className="text-sm text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
