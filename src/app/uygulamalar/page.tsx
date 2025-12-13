"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { SectionHeading } from "@/components/ui/SectionHeading";

const applicationSlides = [
  { image: "/images/home/hero1.jpg", alt: "Stand Tasarımı" },
  { image: "/images/home/hero2.jpg", alt: "Profesyonel Uygulama" },
  { image: "/images/home/hero3.jpg", alt: "Malzeme Kiralama" },
  { image: "/images/home/hero4.jpg", alt: "İç Mekan Tasarımı" },
  { image: "/images/home/hero5.jpg", alt: "3D Tasarım" },
  { image: "/images/home/hero6.jpg", alt: "Modüler Sistemler" },
  { image: "/images/home/hero7.jpg", alt: "Mağaza & Ofis Dekorasyonu" },
  { image: "/images/home/hero8.jpg", alt: "Fuar Danışmanlığı" },
  { image: "/images/home/hero9.jpg", alt: "Özel Tasarımlar" },
  { image: "/images/home/hero10.jpg", alt: "Kalite & Güven" },
  { image: "/images/home/hero11.jpg", alt: "Marka Deneyimi" },
];

export default function ApplicationsPage() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextIndex = useMemo(
    () => (current + 1) % applicationSlides.length,
    [current]
  );

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % applicationSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = applicationSlides[nextIndex].image;
  }, [nextIndex]);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 space-y-10 md:pt-48">
      <div className="relative overflow-hidden rounded-lg bg-slate-900 text-white shadow-2xl shadow-slate-900/20">
        {applicationSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/60" />
          </div>
        ))}

        <div className="relative z-10 p-10 text-center md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Uygulamalar
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Sahada Teslim Edilen Projeler
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
            Render aşamasında onaylanan tasarımlar, üretim ve kurulum
            ekiplerimizin koordinasyonuyla fuar alanlarında hayata geçiriliyor.
            Her fotoğraf gerçek projelerimizden bir kare.
          </p>
        </div>
      </div>

      <SectionHeading
        overline="Sahadan Kareler"
        title="Teslim ettiğimiz projelerden seçili görüntüler"
        description="Uygulama ekibimiz, her detayın tasarım dosyalarına birebir uymasına dikkat eder."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {applicationSlides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-4/3 overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
              src={applicationSlides[selectedImage].image}
              alt={applicationSlides[selectedImage].alt}
              width={1400}
              height={1050}
              className="max-h-[90vh] rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
