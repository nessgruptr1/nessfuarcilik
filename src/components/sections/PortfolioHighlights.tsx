import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioHighlights() {
  const featured = portfolioItems.slice(0, 3);

  // Görseller yoksa bileşeni gösterme
  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="space-y-10">
      <SectionHeading
        overline="Portföy"
        title="3D tasarımlar ve uygulamalardan seçkiler"
        description="Stand tasarım süreçlerimizi görmek için tasarım ve uygulama projelerimizi inceleyin."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <Link
            key={item.id}
            href={`/${item.type === "design" ? "tasarimlar" : "uygulamalar"}/${
              item.slug
            }`}
            className="group rounded-md border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1"
          >
            <div className="relative mb-4 aspect-video overflow-hidden rounded bg-slate-100">
              <Image
                src={item.coverImage.url}
                alt={item.coverImage.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Görsel yüklenemezse placeholder göster
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {item.type === "design" ? "Tasarım" : "Uygulama"}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {item.clientName} · {item.city}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        <Link
          href="/tasarimlar"
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900"
        >
          Tüm Tasarımlar
        </Link>
        <Link
          href="/uygulamalar"
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-slate-900"
        >
          Tüm Uygulamalar
        </Link>
      </div>
    </section>
  );
}
