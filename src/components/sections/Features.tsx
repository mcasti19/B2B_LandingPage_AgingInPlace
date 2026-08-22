import { MessageSquare, FileText, CalendarCheck } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium mb-6">
              El Cerebro de tu Operación
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
              Feature Spotlight: Tu Nuevo CRM
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              La adquisición es solo la mitad de la batalla. El cierre depende de la velocidad y el seguimiento. SkyWeb CRM automatiza los procesos manuales para que tu equipo se enfoque en instalar.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Seguimiento automático por WhatsApp</h4>
                  <p className="text-zinc-400">Interactúa con el prospecto a los 5 minutos de haber ingresado sus datos. No pierdas oportunidades por responder tarde.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Envío de presupuestos base</h4>
                  <p className="text-zinc-400">Genera y envía plantillas de cotización estimadas instantáneamente, filtrando a quienes no tienen el presupuesto adecuado.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <CalendarCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-zinc-100 mb-2">Recordatorios de inspección técnica</h4>
                  <p className="text-zinc-400">Asegura un 90% de asistencia a las visitas de evaluación en el hogar mediante recordatorios automáticos por SMS y WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Mockup visual of the CRM */}
            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-emerald-500/20 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/50">
                      <div className="h-12 w-12 rounded-lg bg-zinc-800 animate-pulse"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-zinc-800 rounded w-3/4 animate-pulse"></div>
                        <div className="h-3 bg-zinc-800 rounded w-1/2 animate-pulse"></div>
                      </div>
                      <div className="h-6 w-20 bg-emerald-500/10 rounded text-xs flex items-center justify-center text-emerald-500 font-medium border border-emerald-500/20">
                        {i === 1 ? "Urgente" : "Seguimiento"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glowing blur behind the mockup */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-emerald-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
