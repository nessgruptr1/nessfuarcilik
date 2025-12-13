"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuPalette,
  LuBox,
  LuLayers,
  LuBuilding2,
  LuPackage,
  LuSparkles,
  LuShieldCheck,
  LuArrowRight,
} from "react-icons/lu";
import { standTypes } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

const standIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "ahsap-stand": LuPalette,
  "moduler-stand": LuBox,
  "maxima-stand": LuLayers,
  "truss-stand": LuBuilding2,
  "urun-teshir-standi": LuPackage,
};

const highlights = [
  {
    icon: LuSparkles,
    title: "Özel Tasarım",
    description: "Marka kimliğinize özel konseptler geliştiriyoruz.",
  },
  {
    icon: LuShieldCheck,
    title: "Dayanıklı Üretim",
    description: "Ahşap, maxima ve truss sistemlerde premium malzeme.",
  },
  {
    icon: LuLayers,
    title: "Modüler Yapı",
    description: "Tekrar kullanılabilir ve taşınabilir modüller.",
  },
];

export default function StandDesignPage() {
  return (
    <>
      <PageHero
        title="Stand Tasarımı"
        description="Ahşap, modüler, maxima, truss ve ürün teşhir çözümleriyle fuarlarda güçlü bir marka deneyimi tasarlıyoruz."
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Stand Tasarımı", href: "/hizmetlerimiz/stand-tasarimi" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        <SectionHeading
          overline="Stand Tiplerimiz"
          title="Her ölçekte ölçeklenebilir sistemler"
          description="Ahşap ve maxima sistemlerde premium görünüm, modüler ve truss sistemlerde hız ve tekrar kullanım sunuyoruz."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {standTypes.map((type, index) => {
            const Icon = standIcons[type.slug] ?? LuPalette;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  href={`/hizmetlerimiz/stand-tasarimi/${type.slug}`}
                  className="flex h-full flex-col rounded border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        {type.slug.replace(/-/g, " ")}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">
                        {type.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    {type.shortDescription}
                  </p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-brand pt-4">
                    Detayları incele
                    <LuArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <SectionHeading
          overline="Yaklaşımımız"
          title="Her stand, markanızın hikayesini sahnede anlatır"
          description="Projelere konsept tasarım atölyesi, üretim ve montaj ekipleriyle tek akışta yön veriyoruz."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-md bg-linear-to-br from-brand to-brand-700 p-8 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Projenizi anlatalım
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">
                Hedeflediğiniz fuar için doğru standı birlikte tasarlayalım.
              </h3>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:scale-105"
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
