"use client";

import Link from "next/link";
import { LuChevronRight, LuHouse } from "react-icons/lu";
import { useScrollPosition } from "@/hooks/useScrollPosition";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeroProps) {
  const { isScrolled } = useScrollPosition();

  // Scroll yapınca TopBar gizleniyor, navbar yüksekliği azalıyor
  // Mobilde: scroll yokken ~140px (TopBar + Header), scroll yapınca ~100px (sadece Header)
  // Güvenli padding için daha fazla boşluk bırakıyoruz
  const topPadding = isScrolled ? "pt-36" : "pt-44";

  return (
    <section
      className={`relative overflow-hidden ${
        backgroundImage
          ? "min-h-[40vh] bg-cover bg-center"
          : "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
      }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
      )}

      <div
        className={`relative z-10 mx-auto max-w-6xl px-4 md:px-6 ${topPadding} pb-4 md:pt-40 md:pb-8`}
      >
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 md:mb-6 mt-2 md:mt-0 flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/80">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              <LuHouse className="h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Anasayfa</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div
                key={crumb.href}
                className="flex items-center gap-1 md:gap-2"
              >
                <LuChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white/60 shrink-0" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium whitespace-nowrap">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title and Description */}
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-white/90 drop-shadow-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
