"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";

// 3D görselleri dinamik olarak yükle
const design3DImages = [
  { src: "/images/home/3d/AHSAP-TASARiMLAR/AYD CAM.webp", alt: "AYD CAM Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/AYD_01.webp", alt: "AYD Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/DNS TASARIM.webp", alt: "DNS Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/SR DÖNER.webp", alt: "SR Döner Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/FC FANTASY.webp", alt: "FC Fantasy Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/YEDİTEPE MEDİKAL.webp", alt: "Yeditepe Medikal Tasarım" },
  { src: "/images/home/3d/AHSAP-TASARiMLAR/ELMANN.webp", alt: "Elmann Tasarım" },
  { src: "/images/home/3d/MAXiMA-TASARiMLAR/AYD.webp", alt: "AYD Maxima Tasarım" },
  { src: "/images/home/3d/MAXiMA-TASARiMLAR/Aygen.webp", alt: "Aygen Maxima Tasarım" },
  { src: "/images/home/3d/MAXiMA-TASARiMLAR/Trunch-Cosmetics.webp", alt: "Trunch Cosmetics Tasarım" },
  { src: "/images/home/3d/YURT-DiSi-STANDLARi/Global Connect Stuttgart 2024.webp", alt: "Global Connect Stuttgart 2024" },
  { src: "/images/home/3d/YURT-DiSi-STANDLARi/BARSELONA MEDİKAL KONGRESİ.webp", alt: "Barselona Medikal Kongresi" },
  { src: "/images/home/3d/YURT-DiSi-STANDLARi/HANNOVER TİCARET FUARI UYGULAMA.webp", alt: "Hannover Ticaret Fuarı" },
];

export function Design3DShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [stepPx, setStepPx] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Refs
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 kart
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet: 2 kart
      } else {
        setItemsPerView(1); // Mobile: 1 kart
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Kart genişliği + gap'i ölç (piksel bazlı hesaplama)
  useEffect(() => {
    const calculateStep = () => {
      if (!trackRef.current || !firstCardRef.current) return;

      const cardRect = firstCardRef.current.getBoundingClientRect();
      const styles = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");

      setStepPx(cardRect.width + gap);
    };

    calculateStep();
    window.addEventListener("resize", calculateStep);
    return () => window.removeEventListener("resize", calculateStep);
  }, [itemsPerView]);

  const nextSlide = () => {
    if (currentIndex < design3DImages.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Otomatik geçiş (4 saniye)
  useEffect(() => {
    if (design3DImages.length <= itemsPerView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = design3DImages.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? design3DImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === design3DImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const totalImages = design3DImages.length;
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalImages - itemsPerView;
  const maxIndex = Math.max(1, totalImages - itemsPerView + 1);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeading
        overline="3D Tasarımlar"
        title="Tasarladığımız Projelerden Örnekler"
        description="Stand tasarım süreçlerimizde oluşturduğumuz 3D görselleştirmelerden seçkiler."
      />

      {/* Carousel Container */}
      <div className="relative mt-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute -left-4 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border-2 border-brand-200 flex items-center justify-center transition-all duration-300 ${
              canGoPrev
                ? "hover:bg-brand hover:text-white hover:scale-110 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Önceki tasarım"
          >
            <LuChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`absolute -right-4 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border-2 border-brand-200 flex items-center justify-center transition-all duration-300 ${
              canGoNext
                ? "hover:bg-brand hover:text-white hover:scale-110 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Sonraki tasarım"
          >
            <LuChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-auto" style={{ maxWidth: "100%" }}>
            <motion.div
              ref={trackRef}
              className="flex gap-4 md:gap-6 py-4"
              animate={{
                x: itemsPerView === 1 ? 0 : -currentIndex * stepPx,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
            >
              {design3DImages.map((image, index) => {
                // Mobilde sadece aktif card'ı göster
                if (itemsPerView === 1 && index !== currentIndex) {
                  return null;
                }

                return (
                  <motion.div
                    key={index}
                    ref={index === 0 ? firstCardRef : undefined}
                    className="shrink-0 w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => openLightbox(index)}
                      className="group relative aspect-4/3 w-full overflow-hidden rounded bg-slate-900/80 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                        <p className="text-sm font-semibold text-white drop-shadow-lg">
                          {image.alt}
                        </p>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "bg-brand w-8 h-3"
                  : "bg-brand-200 hover:bg-brand-300 w-3 h-3"
              }`}
              aria-label={`${index + 1}. tasarım grubuna git`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Kapat"
          >
            <IoClose className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Önceki"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Sonraki"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={design3DImages[selectedImage].src}
              alt={design3DImages[selectedImage].alt}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
              priority
            />
            <p className="mt-4 text-center text-white">
              {design3DImages[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
