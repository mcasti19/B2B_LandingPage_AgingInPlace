const steps = [
  {
    title: "Te traemos los leads",
    text: "Campañas en redes para familias de tu zona, con los funnels gestionados desde Xentra.",
  },
  {
    title: "Inspecciones con el Fall Risk Score",
    text: "Desde el celular o el iPad: 21 riesgos en 6 espacios y un índice de 0 a 100 al terminar.",
  },
  {
    title: "Cotizas en un clic",
    text: "Los riesgos encontrados se convierten en una cotización con tus precios y tu margen a la vista.",
  },
  {
    title: "Cierras y cobras",
    text: "Contrato, pagos, certificado de finalización y garantía. Y seguimiento por email para lo que aún no decidió.",
  },
];

export function Difference() {
  return (
    <section id="sistema" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">La diferencia</p>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-4xl">
          Otras plataformas te dan una herramienta. Xentra te da el sistema completo.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Un software solo no llena tu agenda. Xentra viene con el equipo que trae los leads y el
          sistema que lleva cada familia desde la primera llamada hasta el contrato firmado.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl bg-mist p-5">
              <span className="text-2xl font-extrabold text-brand">{i + 1}</span>
              <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
