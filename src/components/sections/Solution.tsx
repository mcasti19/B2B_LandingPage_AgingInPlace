import { Home, Stethoscope, Database } from "lucide-react";

export function Solution() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
            La Infraestructura SkyWeb
          </h2>
          <p className="text-lg text-zinc-400">
            Nuestro sistema hace el trabajo pesado por ti. Transformamos el proceso de adquisición caótico en una máquina de precisión.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-2xl bg-zinc-900 border-2 border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center">1</div>
                <Home className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">Filtro de Propiedad</h3>
              <p className="text-zinc-400 leading-relaxed">
                Solo generamos leads confirmados como dueños de vivienda (Homeowners). Si no son los dueños de la propiedad, no llegan a ti. Eliminamos el ruido desde la raíz.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-2xl bg-zinc-900 border-2 border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center">2</div>
                <Stethoscope className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">Calificación de Urgencia</h3>
              <p className="text-zinc-400 leading-relaxed">
                Nuestro sistema identifica la urgencia. ¿Hubo una caída reciente? ¿Cirugía próxima? Clasificamos y priorizamos tu agenda para atender a quienes necesitan ayuda inmediata.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-2xl bg-zinc-900 border-2 border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-emerald-500 text-zinc-950 font-bold flex items-center justify-center">3</div>
                <Database className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">CRM Especializado</h3>
              <p className="text-zinc-400 leading-relaxed">
                Visualiza tu pipeline de obras y el ROI de cada campaña en un solo lugar. Todo el seguimiento, desde el lead hasta el contrato firmado, controlado de forma centralizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
