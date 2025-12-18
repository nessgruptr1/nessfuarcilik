"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kurumsal Müşteri",
    role: "Pazarlama Direktörü",
    company: "Ulusal Marka",
    quote:
      "Fuar sürecinin başından sonuna kadar tüm detaylar bizim yerimize düşünüldü. Stand tasarımı ve uygulaması markamızı tam olarak yansıttı.",
  },
  {
    id: 2,
    name: "İhracat Sorumlusu",
    role: "Satış & Pazarlama",
    company: "Uluslararası Fuar Katılımcısı",
    quote:
      "Yurt içi ve yurt dışında birden fazla fuarda birlikte çalıştık. Zamanında teslim ve sorunsuz kurulum bizim için en büyük konfor oldu.",
  },
  {
    id: 3,
    name: "Mağaza Sahibi",
    role: "Perakende Sektörü",
    company: "Mağaza & İç Mekân Projesi",
    quote:
      "İç mimari ve stand çözümlerinde sundukları yönlendirmeler sayesinde hem bütçemize uygun hem de çok şık bir sonuç ortaya çıktı.",
  },
];

export function TestimonialsStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(2); // Desktop: 2 kart
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 9000);
    return () => clearInterval(timer);
  }, [itemsPerView]);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="space-y-8">
      <SectionHeading
        overline="Müşteri Memnuniyeti"
        title="Mutlu Müşterilerimizden"
        description="Yıllardır birlikte çalıştığımız markalar için fuar ve iç mekân projelerinde, ilk toplantıdan teslim sonrasına kadar kesintisiz destek sunuyoruz."
      />

      <div className="relative">
        {/* Navigation */}
        <div className="pointer-events-none absolute -top-10 right-0 flex gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={!canGoPrev}
            className={`pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand hover:text-brand hover:shadow-md ${
              !canGoPrev ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Önceki yorum"
          >
            <LuChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canGoNext}
            className={`pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand hover:text-brand hover:shadow-md ${
              !canGoNext ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Sonraki yorum"
          >
            <LuChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden pt-4 pb-2">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={{
              x:
                itemsPerView === 1
                  ? 0
                  : stepPx > 0
                  ? -currentIndex * stepPx
                  : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag={itemsPerView === 2 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000 && canGoNext) {
                next();
              } else if (swipe > 10000 && canGoPrev) {
                prev();
              }
            }}
          >
            {testimonials.map((testimonial, index) => {
              // Mobilde sadece aktif card'ı göster
              if (itemsPerView === 1 && index !== currentIndex) {
                return null;
              }

              return (
                <article
                  key={testimonial.id}
                  ref={index === 0 ? firstCardRef : undefined}
                  className="relative flex h-full flex-col gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-sm shrink-0 w-full md:w-[calc(50%-0.75rem)]"
                >
                  <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                    <LuQuote className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-3 text-sm">
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {testimonial.role}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
