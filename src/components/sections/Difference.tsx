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
    <section id="sistema" className="bg-white py-20 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-widest lg:text-sm text-brand">La diferencia</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight lg:text-5xl xl:text-[3.4rem] text-ink">
          Otras plataformas te dan una herramienta. Xentra te da el sistema completo.
        </h2>
        <p className="mt-5 max-w-3xl text-muted lg:text-lg xl:text-xl xl:leading-relaxed">
          Un software solo no llena tu agenda. Xentra viene con el equipo que trae los leads y el
          sistema que lleva cada familia desde la primera llamada hasta el contrato firmado.
        </p>
        <ol className="mt-12 grid gap-4 lg:mt-16 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-mist p-6 xl:p-8">
              <span className="text-3xl font-extrabold text-brand xl:text-4xl">{i + 1}</span>
              <h3 className="mt-4 font-bold text-ink lg:text-lg xl:text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted lg:text-base">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
