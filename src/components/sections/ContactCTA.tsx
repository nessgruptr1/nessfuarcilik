"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuPhone, LuMail, LuMapPin, LuArrowRight } from "react-icons/lu";
import { office } from "@/data/contact";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden rounded-md border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-white shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-600 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
                İletişime Geçin
              </p>
              <h3 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Bir sonraki standınızı birlikte tasarlayalım.
              </h3>
            </div>
            <p className="text-base leading-relaxed text-slate-300">
              Projeleriniz için profesyonel çözümler sunuyoruz. Hemen iletişime
              geçin.
            </p>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Phone */}
            <Link
              href={`tel:${office.phone}`}
              className="group flex items-center gap-4 rounded bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand text-white">
                <LuPhone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                  Telefon
                </p>
                <p className="mt-1 text-lg font-semibold">{office.phone}</p>
              </div>
              <LuArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${office.email}`}
              className="group flex items-center gap-4 rounded bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white">
                <LuMail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                  E-posta
                </p>
                <p className="mt-1 text-lg font-semibold">{office.email}</p>
              </div>
              <LuArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Address */}
            <div className="flex items-start gap-4 rounded bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-700 text-white">
                <LuMapPin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
                  Adres
                </p>
                <p className="mt-1 text-base leading-relaxed text-slate-200">
                  {office.address}
                  <br />
                  {office.city} / {office.country}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
