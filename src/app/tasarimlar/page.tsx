"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { LuArrowRight } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StandDrawingAnimation } from "@/components/sections/StandDrawingAnimation";

const designShowcaseImages = [
  { src: "/images/home/3d/ayd-3d.jpg", alt: "AYD 3D Tasarım" },
  { src: "/images/home/3d/aygen-3d.jpg", alt: "Aygen 3D Tasarım" },
  { src: "/images/home/3d/bodrum-3d.jpg", alt: "Bodrum 3D Tasarım" },
  { src: "/images/home/3d/cosmosis-3d.jpg", alt: "Cosmosis 3D Tasarım" },
  { src: "/images/home/3d/dns-3d.jpg", alt: "DNS 3D Tasarım" },
  { src: "/images/home/3d/EMA-3d.jpg", alt: "EMA 3D Tasarım" },
  { src: "/images/home/3d/fethiye-3d.jpg", alt: "Fethiye 3D Tasarım" },
  { src: "/images/home/3d/KOLT-3d.jpg", alt: "KOLT 3D Tasarım" },
  { src: "/images/home/3d/psi.jpg", alt: "PSI 3D Tasarım" },
  { src: "/images/home/3d/srdoner-3d.jpg", alt: "SR Döner 3D Tasarım" },
  { src: "/images/home/3d/TCDD-3d.jpg", alt: "TCDD 3D Tasarım" },
];

export default function DesignsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 space-y-10 md:pt-48">
      <div className="relative rounded-[32px] bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl shadow-slate-900/20 overflow-hidden">
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {designShowcaseImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-sm font-semibold text-white drop-shadow-lg">
                {image.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
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
              src={designShowcaseImages[selectedImage].src}
              alt={designShowcaseImages[selectedImage].alt}
              width={1400}
              height={1050}
              className="max-h-[90vh] rounded-3xl object-contain"
            />
            <p className="mt-4 text-center text-white text-sm">
              {designShowcaseImages[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
