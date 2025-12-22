"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { SectionHeading } from "@/components/ui/SectionHeading";

const applicationSlides = [
  {
    image: "/images/uygulamalarimiz/ABC LOJİSTİK.webp",
    alt: "ABC Lojistik Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/Arfem Aleminyum.webp",
    alt: "Arfem Alüminyum Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/Arfem Alüminyum 2020.webp",
    alt: "Arfem Alüminyum 2020 Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/Averest candy uygulama.webp",
    alt: "Averest Candy Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/BATTAL GRUP.webp",
    alt: "Battal Grup Standı",
  },
  {
    image: "/images/uygulamalarimiz/Bay şeker uygulama.webp",
    alt: "Bay Şeker Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/CNBE 2018.webp",
    alt: "CNBE 2018 Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/DEVLET DEMİR YOLLARI.webp",
    alt: "Devlet Demir Yolları Standı",
  },
  {
    image: "/images/uygulamalarimiz/DİYARBAKIR BÜYÜKŞEHİR BELEDİYESİ.webp",
    alt: "Diyarbakır Büyükşehir Belediyesi Standı",
  },
  {
    image: "/images/uygulamalarimiz/DİYARBAKIR VALİLİĞİ.webp",
    alt: "Diyarbakır Valiliği Standı",
  },
  {
    image: "/images/uygulamalarimiz/DİYARBAKIR VALİLİĞİ (2).webp",
    alt: "Diyarbakır Valiliği Uygulama 2",
  },
  {
    image: "/images/uygulamalarimiz/DİYARBAKIR VALİLİĞİ (3).webp",
    alt: "Diyarbakır Valiliği Uygulama 3",
  },
  {
    image: "/images/uygulamalarimiz/DNS GALVANİZ.webp",
    alt: "DNS Galvaniz Standı",
  },
  {
    image: "/images/uygulamalarimiz/ELMAN MEDİKAL.webp",
    alt: "Elman Medikal Standı",
  },
  {
    image: "/images/uygulamalarimiz/EMİTT ÖDÜLLÜ STANDIMIZ.webp",
    alt: "EMITT Ödüllü Standımız",
  },
  {
    image: "/images/uygulamalarimiz/EV TEKSTİLİ MAGİZA.webp",
    alt: "Ev Tekstili Mağaza Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/Fc Fanstasy.webp",
    alt: "FC Fantasy Standı",
  },
  { image: "/images/uygulamalarimiz/GİZEDOOR.webp", alt: "Gizedoor Standı" },
  {
    image: "/images/uygulamalarimiz/HASANPAŞAHANI.webp",
    alt: "Hasanpaşahani Uygulaması",
  },
  { image: "/images/uygulamalarimiz/LİDYA AŞ.webp", alt: "Lidya AŞ Standı" },
  {
    image: "/images/uygulamalarimiz/MAGİZA TÜL.webp",
    alt: "Mağiza Tül Mağaza Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/MEDUSA KAPI.webp",
    alt: "Medusa Kapı Standı",
  },
  {
    image: "/images/uygulamalarimiz/MEDİSAM MEDİKAL.webp",
    alt: "Medisam Medikal Standı",
  },
  {
    image: "/images/uygulamalarimiz/MPS PLASTİK.webp",
    alt: "MPS Plastik Standı",
  },
  {
    image: "/images/uygulamalarimiz/MTM MADENCİLİK.webp",
    alt: "MTM Madencilik Standı",
  },
  {
    image: "/images/uygulamalarimiz/MUĞLA BÜYÜK ŞEHİR BELEDİYESİ.webp",
    alt: "Muğla Büyükşehir Belediyesi Standı",
  },
  {
    image: "/images/uygulamalarimiz/Miral Metal 2020.webp",
    alt: "Miral Metal 2020 Standı",
  },
  { image: "/images/uygulamalarimiz/Mps uygulama.webp", alt: "MPS Uygulaması" },
  { image: "/images/uygulamalarimiz/OPTİKSAN.webp", alt: "Optiksan Standı" },
  {
    image: "/images/uygulamalarimiz/PEKER METAL.webp",
    alt: "Peker Metal Standı",
  },
  {
    image: "/images/uygulamalarimiz/RANDO ŞEKERLEME.webp",
    alt: "Rando Şekerleme Standı",
  },
  { image: "/images/uygulamalarimiz/SR DÖNER.webp", alt: "SR Döner Standı" },
  {
    image: "/images/uygulamalarimiz/SİYA LİFE YEM.webp",
    alt: "Siya Life Yem Standı",
  },
  {
    image: "/images/uygulamalarimiz/TURK OLUKLU MUKAVVA.webp",
    alt: "Turk Oluklu Mukavva Standı",
  },
  {
    image: "/images/uygulamalarimiz/YEDİTEPEMEDİKAL.webp",
    alt: "Yeditepe Medikal Standı",
  },
  {
    image: "/images/uygulamalarimiz/electrio uygulama.webp",
    alt: "Electrio Uygulaması",
  },
  {
    image: "/images/uygulamalarimiz/İNTEGRO ROBOTİK.webp",
    alt: "İntegro Robotik Standı",
  },
  {
    image: "/images/uygulamalarimiz/İNTEGRO ROBOTİK 2.webp",
    alt: "İntegro Robotik Uygulama 2",
  },
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
