"use client";

import { clientReferences } from "@/data/references";
import { motion } from "framer-motion";

const marqueeList = [...clientReferences, ...clientReferences];

export function ReferenceStrip() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-8 shadow-sm backdrop-blur">
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
              className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {ref.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
