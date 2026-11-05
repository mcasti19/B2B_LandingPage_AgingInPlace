import Image from "next/image";
import { buttonClasses } from "@/components/ui/button";

const links = [
  { href: "#sistema", label: "El sistema" },
  { href: "#reporte", label: "El reporte" },
  { href: "#porque", label: "Por qué Xentra" },
  { href: "#planes", label: "Planes" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto flex h-16 lg:h-20 max-w-[1480px] items-center justify-between px-6 lg:px-12">
        <a href="#" aria-label="Xentra CRM, inicio">
          <Image
            src="/brand/xentra-horizontal-blanco.svg"
            alt="Xentra"
            width={132}
            height={33}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </a>
        <nav className="flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden text-sm font-medium text-white/80 lg:text-base hover:text-white md:block"
            >
              {l.label}
            </a>
          ))}
          <a href="#demo" className={buttonClasses({ size: "sm" })}>
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}
