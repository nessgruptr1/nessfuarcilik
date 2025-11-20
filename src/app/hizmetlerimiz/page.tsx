"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuPalette,
  LuBox,
  LuHouse,
  LuBuilding2,
  LuSparkles,
  LuShieldCheck,
  LuLayers,
  LuArrowRight,
} from "react-icons/lu";
import { services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

const serviceIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "stand-tasarimi": LuPalette,
  "malzeme-kiralama": LuBox,
  "ic-mekan-tasarimi": LuHouse,
  "magaza-ofis-dekorasyonu": LuBuilding2,
};

const serviceHighlights = [
  {
    icon: LuSparkles,
    title: "Uçtan uca yönetim",
    description: "Tasarımdan uygulamaya tek ekip, tek zaman çizelgesi.",
  },
  {
    icon: LuShieldCheck,
    title: "Kalite ve güven",
    description: "Deneyimli üretim kadrosu ile hatasız teslimatlar.",
  },
  {
    icon: LuLayers,
    title: "Çevik süreçler",
    description: "Modüler ve tekrar kullanılabilir çözümlerle esneklik.",
  },
];

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Stand tasarımından iç mekana uzanan uçtan uca hizmet zinciri."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        <div className="rounded-[32px] bg-linear-to-br from-brand-50 via-white to-brand-50/60 p-6 md:p-10 shadow-inner shadow-brand-100/60">
          <SectionHeading
            overline="Uzmanlıklarımız"
            title="Her ölçek için ölçeklenebilir çözümler"
            description="Fuarda, showroomda veya mağaza içinde markanızı aynı kalite standardıyla temsil ediyoruz."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-3xl border border-white/60 bg-white/80 p-6 text-center shadow-lg shadow-brand-100/40 backdrop-blur"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/40">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] ?? LuPalette;
            const listBlock = service.contentBlocks?.find(
              (block) => block.type === "list"
            ) as { type: "list"; items?: string[] } | undefined;
            const textBlock = service.contentBlocks?.find(
              (block) => block.type === "text"
            ) as { type: "text"; body?: string } | undefined;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/hizmetlerimiz/${service.slug}`}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        {service.slug.replace(/-/g, " ")}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-base text-slate-600">
                    {service.shortDescription}
                  </p>

                  {listBlock?.items && listBlock.items.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {listBlock.items.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    textBlock?.body && (
                      <p className="mt-4 text-sm text-slate-600 line-clamp-3">
                        {textBlock.body}
                      </p>
                    )
                  )}

                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand">
                    Detayları incele
                    <LuArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-linear-to-br from-brand to-brand-700 p-8 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Teklif alın
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight">
                Projeniz için en doğru hizmet kombinasyonunu birlikte
                planlayalım.
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
