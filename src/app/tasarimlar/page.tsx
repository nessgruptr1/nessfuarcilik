"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StandDrawingAnimation } from "@/components/sections/StandDrawingAnimation";

const designSections = [
  {
    title: "Ahşap Tasarımlar",
    images: [
      "/images/home/3d/AHSAP-TASARiMLAR/Atasam.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/AYD CAM.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/AYD_01.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/CEMİLPAŞA KONAĞI.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/DESTİNASYON ÖDÜLLÜ STANDIMIZ.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/DNS TASARIM.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/Efor Kapı.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/ELMANN.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/FC FANTASY.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/İLSA.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/İNEGÖL PAPEL.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/İNTECRO ROBOTİK.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/Keçiburcu Emitt.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/LİDYA AŞ.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/MAGİZA TÜL.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/Miral Metal.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/MPS PLASTİK.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/mps tasarım.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/MTM MADEN.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/MUĞLA BÜYÜKŞEHİR BELEDİYESİ.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/RANDO.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/SİYA LİFE.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/SR DÖNER.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/TURK OLUKLU MUKAVVA.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/UĞURLU.webp",
      "/images/home/3d/AHSAP-TASARiMLAR/YEDİTEPE MEDİKAL.webp",
    ],
  },
  {
    title: "Maxima Tasarımlar",
    images: [
      "/images/home/3d/MAXiMA-TASARiMLAR/Arda Kimya.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/AYD.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/Aygen.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/CAM DÜNYASI MAXİMA R01 R03.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/İlham Sweets.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/TAG.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/Trunch-Cosmetics.webp",
      "/images/home/3d/MAXiMA-TASARiMLAR/Zeta Enerji.webp",
    ],
  },
  {
    title: "Yurt Dışı Standları",
    images: [
      "/images/home/3d/YURT-DiSi-STANDLARi/AMSTERDAM  İNTERTRAFİC 2024 UYGULAMA .webp",
      "/images/home/3d/YURT-DiSi-STANDLARi/AMSTERDAM  İNTERTRAFİC UYGULAMA .webp",
      "/images/home/3d/YURT-DiSi-STANDLARi/BARSELONA MEDİKAL KONGRESİ.webp",
      "/images/home/3d/YURT-DiSi-STANDLARi/Global Connect Stuttgart 2024 UYGULAMA.webp",
      "/images/home/3d/YURT-DiSi-STANDLARi/Global Connect Stuttgart 2024.webp",
      "/images/home/3d/YURT-DiSi-STANDLARi/HANNOVER TİCARET FUARI UYGULAMA.webp",
    ],
  },
];

type SelectedImage = {
  src: string;
  label: string;
} | null;

const getImageLabel = (src: string): string => {
  const fileName = src.split("/").pop() ?? "";
  const withoutExt = fileName.replace(/\.[^/.]+$/, "");
  const cleaned = withoutExt.replace(/[_-]+/g, " ").trim();
  return cleaned || fileName || "Tasarım görseli";
};

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 space-y-10 md:pt-48">
      <div className="relative rounded-lg bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl shadow-slate-900/20 overflow-hidden">
        {/* SVG Animation - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5 opacity-30 pointer-events-none">
          <StandDrawingAnimation className="h-full w-full" duration={18} />
        </div>

        {/* Content - Left Side */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Tasarım Arşivi
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            3D Tasarım ve Konsept Çalışmaları
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Fuar öncesi tüm konseptleri fotogerçekçi renderlar ve teknik
            çizimlerle sunuyor, markaların karar alma sürecini hızlandırıyoruz.
            Aşağıda son dönem projelerimizden seçili kareleri bulabilirsiniz.
          </p>
          <div className="mt-6 inline-flex items-center text-sm font-semibold text-white/80">
            Arşivi incelemeye devam edin
            <LuArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>

      <SectionHeading
        overline="Seçkiler"
        title="Konseptten üretime uzanan yolculuk"
        description="3D tasarımlarımız; stand yüksekliği, malzeme seçimi ve ışık senaryolarını en baştan doğru kurgulamak için kullanılıyor."
      />

      <div className="space-y-10">
        {designSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              {section.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.images.map((src) => {
                const label = getImageLabel(src);
                return (
                  <button
                    key={src}
                    onClick={() =>
                      setSelectedImage({
                        src,
                        label,
                      })
                    }
                    className="group relative aspect-4/3 w-full overflow-hidden rounded-md border border-slate-200 bg-slate-900/80 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  >
                    <Image
                      src={src}
                      alt={label}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-left opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="text-xs font-medium text-white/90 drop-shadow-lg">
                        {label}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Kapat"
          >
            <IoClose className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.label}
              width={1400}
              height={1050}
              className="max-h-[90vh] rounded-md object-contain"
            />
            <p className="mt-4 text-center text-white text-sm">
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
