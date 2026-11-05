import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="mx-auto flex max-w-[1480px] flex-col items-center justify-between gap-3 px-6 lg:px-12 py-7 text-xs lg:text-sm md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/brand/xentra-simbolo-color.svg" alt="" width={28} height={18} className="h-5 w-auto" />
          <span>
            Xentra CRM Platform · Un producto y servicio de{" "}
            <b className="text-white/90">SkyWeb Agency</b>
          </span>
        </div>
        <span>[EMAIL] · [WHATSAPP]</span>
      </div>
    </footer>
  );
}
