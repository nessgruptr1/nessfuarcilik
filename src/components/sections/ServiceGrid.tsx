"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuPalette,
  LuPackage,
  LuBuilding2,
  LuStore,
} from "react-icons/lu";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Her hizmet için ikon
const serviceIcons: Record<string, typeof LuPalette> = {
  "stand-tasarimi": LuPalette,
  "malzeme-kiralama": LuPackage,
  "ic-mekan-tasarimi": LuBuilding2,
  "magaza-ofis-dekorasyonu": LuStore,
};

export function ServiceGrid() {
  return (
    <section className="relative space-y-10">
      {/* Dotted background */}
      <div className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 -z-10 flex justify-center">
        <div className="h-full w-full max-w-6xl rounded-lg bg-[radial-gradient(circle,rgba(140,35,88,0.35)_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-60" />
      </div>

      <SectionHeading
        overline="Hizmetler"
        title="Uçtan uca proje yönetimi"
        description="Fuar sürecindeki her dokunuşu tek ekipten yönetiyoruz."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.slug] || LuPalette;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/hizmetlerimiz/${service.slug}`}
                className="group relative block h-full rounded-md border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded bg-brand text-white shadow-lg transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                        {service.slug.replace(/-/g, " ")}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {service.name}
                      </h3>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all group-hover:bg-brand group-hover:text-white">
                      <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </p>

                  {/* Features Preview */}
                  {service.contentBlocks.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <ul className="space-y-2">
                        {service.contentBlocks[0]?.type === "list" &&
                          service.contentBlocks[0].items
                            ?.slice(0, 3)
                            .map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                <span>{item}</span>
                              </li>
                            ))}
                        {service.contentBlocks[0]?.type === "text" && (
                          <li className="text-sm text-slate-600 line-clamp-2">
                            {service.contentBlocks[0].body}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 -z-10 rounded-md bg-linear-to-br from-brand-50/0 via-brand-50/0 to-brand-50/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
