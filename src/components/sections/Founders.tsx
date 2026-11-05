export function Founders() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-sky">Por qué creamos Xentra</p>
        <span aria-hidden className="mt-4 block text-4xl leading-none text-sky">&rdquo;</span>
        <blockquote className="mt-2 text-xl font-semibold leading-relaxed md:text-2xl">
          Vimos a empresas latinas de aging in place perder clientes no por falta de calidad, sino por
          falta de un sistema. Creamos Xentra para que cada familia que necesita ayuda reciba una
          respuesta a tiempo, y para que tu negocio crezca sin depender de la memoria ni de los
          referidos.
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2" aria-hidden>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold ring-2 ring-navy">
              S
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-sm font-bold text-navy ring-2 ring-navy">
              M
            </span>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold">Samantha y Moisés</p>
            <p className="text-xs text-white/60">Fundadores de SkyWeb Agency y Xentra</p>
          </div>
        </div>
      </div>
    </section>
  );
}
