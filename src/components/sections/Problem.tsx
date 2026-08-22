import { XCircle, AlertTriangle, TrendingDown } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
            El problema de los leads genéricos en el sector de la remodelación
          </h2>
          <p className="text-lg text-zinc-400">
            Pagar por servicios como Angi o HomeAdvisor es quemar tu presupuesto de marketing. ¿Por qué conformarse con competir por las sobras cuando puedes tener la mesa servida?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Problem 1 */}
          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-3">Leads Compartidos</h3>
            <p className="text-zinc-400">
              Un mismo prospecto es vendido a 5 contratistas diferentes. Terminas compitiendo por precio, devaluando tu trabajo y erosionando tus márgenes de ganancia.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <XCircle className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-3">Mala Calidad</h3>
            <p className="text-zinc-400">
              Gente que solo está "curioseando", que ni siquiera es dueña de la casa o que busca soluciones temporales baratas en lugar de verdaderas reformas de Aging in Place.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
            <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <TrendingDown className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-3">Pérdida de Tiempo</h3>
            <p className="text-zinc-400">
              Tú o tu equipo pasan horas al teléfono tratando de calificar prospectos que no están listos, tiempo que podrías invertir cerrando proyectos rentables o en las obras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
