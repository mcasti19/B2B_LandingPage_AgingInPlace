const reasons = [
  {
    title: "Mide lo que nadie más mide",
    text: "El Fall Risk Score convierte una visita en un número de 0 a 100 que la familia entiende y que tu equipo usa para priorizar.",
  },
  {
    title: "Habla el idioma de tu sector",
    text: "Barras de apoyo, pasamanos, umbrales, residente, caídas recientes. No tienes que adaptar un CRM de ventas genérico.",
  },
  {
    title: "Tu marca en todo",
    text: "Tu logo y tu color en el sistema y en cada reporte que recibe la familia.",
  },
  {
    title: "Un solo equipo responsable",
    text: "Xentra es un producto y servicio de SkyWeb Agency: software y publicidad del mismo equipo. Nada de culpas entre el proveedor del CRM y la agencia.",
  },
  {
    title: "Te acompañamos en español",
    text: "Te lo entregamos configurado, con capacitación y soporte en español para ti y tu equipo.",
  },
];

export function Reasons() {
  return (
    <section id="porque" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Por qué Xentra</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
            5 razones para elegir Xentra y no otra plataforma
          </h2>
          <p className="mt-4 text-muted">
            Lo construimos pensando en dueños latinos de empresas de aging in place, no en cualquier
            negocio.
          </p>
        </div>
        <ol className="divide-y divide-line">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex gap-5 py-5 first:pt-0">
              <span className="text-xl font-extrabold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-bold text-ink">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
