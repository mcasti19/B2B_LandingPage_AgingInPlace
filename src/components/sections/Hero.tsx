"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ingeniería de Adquisición B2B
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-50 mb-8 leading-tight">
            Escala tu empresa de Aging in Place con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Ingeniería de Adquisición.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Dejamos de enviarte 'clicks' y empezamos a agendarte citas con dueños de casa que necesitan adaptaciones de accesibilidad hoy mismo.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="emerald" size="lg" className="w-full sm:w-auto text-lg px-8 h-14" asChild>
              <a href="#demo">Solicitar Demo del Sistema</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14" asChild>
              <a href="#how-it-works">Cómo Funciona</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
