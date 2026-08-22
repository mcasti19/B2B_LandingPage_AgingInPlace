import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { ROI } from "@/components/sections/ROI";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ROI />
      <LeadForm />
      
      <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} SkyWeb Agency. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
