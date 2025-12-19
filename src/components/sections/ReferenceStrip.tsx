"use client";

import { clientReferences } from "@/data/references";
import { motion } from "framer-motion";

const marqueeList = [...clientReferences, ...clientReferences];

export function ReferenceStrip() {
  return (
    <section className="rounded-md border-2 border-slate-800 bg-white/90 px-6 py-8 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Referanslarımız
          </p>
          <h3 className="text-2xl font-bold text-slate-900">
            100+ marka ile uzun soluklu iş ortaklığı
          </h3>
        </div>
      </div>

      <div className="mt-6 overflow-hidden">
        <motion.div
          className="flex min-w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 190, ease: "linear", repeat: Infinity }}
        >
          {marqueeList.map((ref, index) => (
            <div
              key={`${ref.id}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="flex items-center px-2 py-1 text-sm font-semibold text-slate-900 md:px-3 md:py-2 md:text-base">
                {ref.name}
              </span>
              <svg
                className="h-4 w-8 shrink-0 text-slate-300 md:h-5 md:w-10"
                viewBox="0 0 40 8"
                aria-hidden="true"
              >
                {/* İnce yatay çizgi (yuvarlatılmış uçlar) */}
                <rect
                  x="0"
                  y="3"
                  width="40"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                {/* Ortadaki kare blok */}
                <rect x="18" y="1" width="4" height="6" fill="currentColor" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
