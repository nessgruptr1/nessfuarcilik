import Link from "next/link";
import { LuChevronRight, LuHouse } from "react-icons/lu";

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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-4 md:pt-40 md:pb-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              <LuHouse className="h-4 w-4" />
              <span>Anasayfa</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                <LuChevronRight className="h-4 w-4 text-white/60" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title and Description */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
