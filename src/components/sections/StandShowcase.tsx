"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight, LuTreePine, LuBox, LuZap, LuGrid3X3, LuLayoutList } from "react-icons/lu";
import { standTypes } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Her stand tipi için ikon
const standIcons: Record<string, typeof LuTreePine> = {
  "ahsap-stand": LuTreePine,
  "moduler-stand": LuBox,
  "maxima-stand": LuZap,
  "truss-stand": LuGrid3X3,
  "urun-teshir-standi": LuLayoutList,
};

export function StandShowcase() {
  return (
    <section className="space-y-10">
      <SectionHeading
        overline="Stand Tipleri"
        title="Her marka hikayesi için doğru modül"
        description="Ahşap, modüler, maxima ve truss çözümleriyle ölçeklenebilirlik sunuyoruz."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {standTypes.map((stand, index) => {
          const Icon = standIcons[stand.slug] || LuBox;

          return (
            <motion.div
              key={stand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Link
                href={`/hizmetlerimiz/stand-tasarimi/${stand.slug}`}
                className="group relative flex h-full w-full flex-col rounded border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 text-white shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <div className="mb-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand">
                      {stand.slug.replace(/-/g, " ")}
                    </p>
                    <h3 className="mt-1.5 text-base font-bold leading-tight text-slate-900">
                      {stand.name}
                    </h3>
                  </div>

                  <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {stand.shortDescription}
                  </p>

                  {/* Arrow */}
                  <div className="mt-auto flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all group-hover:bg-brand group-hover:text-white">
                    <LuArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 -z-10 rounded bg-gradient-to-br from-slate-50/0 via-brand-50/0 to-slate-50/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
