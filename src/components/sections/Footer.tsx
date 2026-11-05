import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/brand/xentra-simbolo-color.svg" alt="" width={28} height={18} className="h-4 w-auto" />
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
