"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { office } from "@/data/contact";

const customerImages = [
  "/images/musteri-memnuniyeti/AMBALAJ.webp",
  "/images/musteri-memnuniyeti/ARFEM ALÜMİNYUM.webp",
  "/images/musteri-memnuniyeti/AVREST CANDY.webp",
  "/images/musteri-memnuniyeti/AYGEN MÜHENDİSLİK.webp",
  "/images/musteri-memnuniyeti/BATTAL GRUP.webp",
  "/images/musteri-memnuniyeti/BİTLİS KÜLTÜR MÜDÜRLÜĞÜ.webp",
  "/images/musteri-memnuniyeti/CAM DÜNYASI.webp",
  "/images/musteri-memnuniyeti/DEVLET DEMİRYOLLARI.webp",
  "/images/musteri-memnuniyeti/DNS GALVANİZ.webp",
  "/images/musteri-memnuniyeti/DİYARVAKIR VALİLİĞİ.webp",
  "/images/musteri-memnuniyeti/ELMAN MEDİKAL.webp",
  "/images/musteri-memnuniyeti/EMA AMBALAJ.webp",
  "/images/musteri-memnuniyeti/EMİTT.webp",
  "/images/musteri-memnuniyeti/IMG_20211203_172035.webp",
  "/images/musteri-memnuniyeti/KUBİK ROBOTİK.webp",
  "/images/musteri-memnuniyeti/MAGİZA TÜL.webp",
  "/images/musteri-memnuniyeti/MPS PLASTİK.webp",
  "/images/musteri-memnuniyeti/MTM MADEN.webp",
  "/images/musteri-memnuniyeti/SR DÖNER.webp",
  "/images/musteri-memnuniyeti/SR DÖNER 2.webp",
  "/images/musteri-memnuniyeti/SR DÖNER 3.webp",
  "/images/musteri-memnuniyeti/STERİLMED MEDİKAL.webp",
  "/images/musteri-memnuniyeti/SİYALİFE.webp",
  "/images/musteri-memnuniyeti/TEKNOMAR MEDİKAL.webp",
  "/images/musteri-memnuniyeti/TURK OLUKLU MUKAVVA.webp",
  "/images/musteri-memnuniyeti/YEDİTEPE MEDİKAL.webp",
];

const getImageLabel = (src: string): string => {
  const fileName = src.split("/").pop() ?? "";
  const withoutExt = fileName.replace(/\.[^/.]+$/, "");
  const cleaned = withoutExt.replace(/[_-]+/g, " ").trim();
  return cleaned || fileName || "Müşteri Memnuniyeti";
};

type SelectedImage = {
  src: string;
  label: string;
} | null;

export default function CustomerSatisfactionPage() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  return (
    <>
      <PageHero
        title="Müşteri Memnuniyeti"
        description="Müşterilerimizin deneyimleri ve geri bildirimleri bizim için en değerli ödüldür."
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Müşteri Memnuniyeti", href: "/musteri-memnuniyeti" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        {/* Açıklama */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-slate-700">
            Yıllardır büyük bir özveriyle yaptığımız yüzlerce organizasyonu,
            bugüne kadar edindiğimiz referansları ve müşteri memnuniyetini en
            büyük kazancımız sayıyoruz. Her projede müşteri odaklı yaklaşımımız
            ve kaliteli hizmet anlayışımızla markaların fuarlarda başarılı
            olmasına katkı sağlıyoruz.
          </p>
        </div>

        <SectionHeading
          overline="Müşteri Memnuniyeti"
          title="Mutlu müşterilerimizden kareler"
          description="Başarılı projelerimiz ve memnun müşterilerimizden görüntüler."
        />

        {/* Galeri */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerImages.map((src) => {
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

        {/* CTA Bölümü */}
        <div className="rounded-lg border border-slate-200 bg-linear-to-br from-slate-900 to-slate-800 p-8 text-white md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Siz de Müşterilerimiz Arasına Katılın
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Profesyonel stand tasarımı ve uygulama hizmetlerimizle markanızı
              fuarlarda öne çıkarın. Size özel çözümler için bizimle iletişime
              geçin.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/iletisim"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Teklif Alın
              </a>
              <a
                href={`tel:${office.phone}`}
                className="rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
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
    </>
  );
}
