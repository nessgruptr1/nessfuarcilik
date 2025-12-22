"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type VideoPressItem = {
  type: "video";
  title: string;
  description: string;
  embedUrl: string;
  source: string;
  link: string;
  date: string;
};

type ArticlePressItem = {
  type: "article";
  title: string;
  description: string;
  source: string;
  link: string;
  date: string;
  images?: string[];
};

type InstagramPressItem = {
  type: "instagram";
  image: string;
  link: string;
};

type PressItem = VideoPressItem | ArticlePressItem | InstagramPressItem;

const pressItems: PressItem[] = [
  {
    type: "video",
    title: "Ness Fuarcılık | Tr Ses TV Röportajı",
    description:
      "Firma sahibi Neslihan Fidan, stand tasarım süreçlerimizi ve kente kattığımız değeri anlattı.",
    embedUrl: "https://www.youtube.com/embed/FN2vMe6Wp1U",
    source: "Tr Ses TV (YouTube)",
    link: "https://www.youtube.com/watch?v=FN2vMe6Wp1U",
    date: "2024",
  },
  {
    type: "video",
    title: "Ness Fuarcılık | YouTube Röportajı",
    description:
      "Fuar stand tasarımı ve uygulama hizmetlerimiz hakkında detaylı bilgiler.",
    embedUrl: "https://www.youtube.com/embed/cDf3T5Ce-7U",
    source: "YouTube",
    link: "https://www.youtube.com/watch?v=cDf3T5Ce-7U",
    date: "2024",
  },
  {
    type: "article",
    title: "En iyi stant unvanı Diyarbakır'ın oldu",
    description:
      'Travel Turkey İzmir fuarında Diyarbakır standımız "En İyi Stant" ödülünü alarak büyük ses getirdi.',
    source: "Tigris Haber",
    link: "https://www.tigrishaber.com/en-iyi-stant-unvani-diyarbakirin-oldu-43459h.htm",
    date: "08 Aralık 2017",
    images: [
      "/images/basinda-biz/tigris-8-aralik-17/Screenshot 2025-11-20 at 12.47.45.png",
      "/images/basinda-biz/tigris-8-aralik-17/Screenshot 2025-11-20 at 12.49.13.png",
      "/images/basinda-biz/tigris-8-aralik-17/Screenshot 2025-11-20 at 12.49.42.png",
      "/images/basinda-biz/diyabakir.webp",
      "/images/basinda-biz/odul-toreni.webp",
    ],
  },
  {
    type: "article",
    title: "Diyarbakır, EMITT fuarında ödül aldı",
    description:
      "EMITT fuarında Diyarbakır standı yine büyük ilgi gördü ve ödüle layık görüldü; stand tasarımı Ness Stand Sistemleri tarafından hazırlandı.",
    source: "Tigris Haber",
    link: "https://www.tigrishaber.com/diyarbakir-emitt-fuarinda-odul-aldi-76565h.htm",
    date: "11 Şubat 2022",
    images: [
      "/images/basinda-biz/tigris-11-subat-22/Screenshot 2025-11-20 at 12.50.49.png",
      "/images/basinda-biz/tigris-11-subat-22/Screenshot 2025-11-20 at 12.51.10.png",
      "/images/basinda-biz/tigris-11-subat-22/Screenshot 2025-11-20 at 12.51.29.png",
      "/images/basinda-biz/emitt.webp",
      "/images/basinda-biz/emitt3.webp",
      "/images/basinda-biz/emitt4.webp",
      "/images/basinda-biz/emtt2.webp",
      "/images/basinda-biz/DESTiNASYON-oDuLuMuZ.webp",
    ],
  },
  {
    type: "article",
    title: "Basında Ness Fuarcılık",
    description:
      "Çalışmalarımız ve başarılarımız çeşitli basın organlarında yer buldu. Profesyonel stand tasarımlarımız ve fuar organizasyonlarımız hakkında yayınlanan haberler.",
    source: "Çeşitli Kaynaklar",
    link: "#",
    date: "2017 - 2024",
    images: [
      "/images/basinda-biz/BASINDA-BiZ.webp",
      "/images/basinda-biz/BASINDA-BiZ-1.webp",
      "/images/basinda-biz/BASINDA-BiZ-3.webp",
      "/images/basinda-biz/ilkha.webp",
    ],
  },
  {
    type: "instagram",
    image: "/images/basinda-biz/insta-1.webp",
    link: "https://www.instagram.com/reel/Ce4r098pDzy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    type: "instagram",
    image: "/images/basinda-biz/insta-2.webp",
    link: "https://www.instagram.com/p/CarYKxRgXLa/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    type: "instagram",
    image: "/images/basinda-biz/insta-3.webp",
    link: "https://www.instagram.com/reel/CmUSNCXKnPz/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
];

export default function PressPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const regularItems = pressItems.filter((item) => item.type !== "instagram");
  const instagramItems = pressItems.filter(
    (item) => item.type === "instagram"
  ) as InstagramPressItem[];

  return (
    <>
      <PageHero
        title="Basında Biz"
        description="Kusursuz projelerimize dair televizyon röportajları ve dijital basında yayınlanan haberler."
        breadcrumbs={[{ label: "Basında Biz", href: "/basinda-biz" }]}
      />
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        <SectionHeading
          overline="Basın"
          title="Kusursuz projelerimize dair haberler"
          description="Televizyon röportajları ve dijital basında çıkan haberlerimizi derledik."
        />

        <div className="space-y-10">
          {regularItems.map((item) =>
            item.type === "video" ? (
              <article
                key={item.title}
                className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.source} · {item.date}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600">{item.description}</p>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-brand hover:underline"
                  >
                    Videoyu izle →
                  </Link>
                </div>
              </article>
            ) : (
              <article
                key={item.title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.source} · {item.date}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-slate-600">
                  {item.description}
                </p>
                {item.images && item.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {item.images.map((src, idx) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setLightboxImage(src)}
                        className="group relative aspect-4/3 w-full overflow-hidden rounded border border-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
                      >
                        <Image
                          src={src}
                          alt={`${item.title} görsel ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </button>
                    ))}
                  </div>
                )}
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-xl font-semibold text-brand hover:underline"
                >
                  Haberi oku →
                </Link>
              </article>
            )
          )}

          {/* Instagram Gönderileri */}
          {instagramItems.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                Instagram&apos;dan
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {instagramItems.map((item) => (
                  <Link
                    key={item.image}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt="Instagram gönderisi"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Haber görseli"
              width={1600}
              height={900}
              className="h-auto w-full max-h-[80vh] rounded object-contain"
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
              aria-label="Kapat"
              onClick={() => setLightboxImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
