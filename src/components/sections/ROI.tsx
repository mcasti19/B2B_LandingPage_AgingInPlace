import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ROI() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
              Matemática Simple: Rentabilidad Innegable
            </h2>
            <p className="text-lg text-zinc-400">
              Nuestro sistema no es un "gasto", es una inversión de flujo de caja positivo. Solo necesitas un cierre para que el servicio se pague solo por meses.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* The Cost */}
              <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800">
                <h3 className="text-xl font-medium text-zinc-400 mb-2">Ticket Promedio Aging in Place</h3>
                <div className="flex items-baseline gap-2 mb-8 flex-wrap">
                  <span className="text-4xl md:text-5xl font-bold text-zinc-50 break-words">$8k - $15k</span>
                  <span className="text-zinc-500">/ obra</span>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                    <span className="text-zinc-300">Rampas de acceso personalizadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                    <span className="text-zinc-300">Remodelación de baños sin barreras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                    <span className="text-zinc-300">Instalación de salvaescaleras y ascensores</span>
                  </li>
                </ul>
              </div>

              {/* The ROI */}
              <div className="p-6 md:p-12 bg-zinc-900 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-6 relative z-10 leading-snug">
                  Una sola obra cerrada paga múltiples meses de nuestro sistema y CRM.
                </h3>
                
                <p className="text-zinc-400 mb-8 relative z-10">
                  Imagina cerrar 3 o 4 de estas obras cada mes. La pregunta no es si puedes pagarlo, sino cuánto dinero estás dejando sobre la mesa por no tener un sistema de adquisición de leads de alta intención.
                </p>
                
                <div className="flex items-center gap-4 text-emerald-400 font-semibold relative z-10">
                  <span>Calcula tu ROI potencial en nuestra demo</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
