"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function GeneralInfo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
        {/* Sol Taraf - Resim */}
        <motion.div
          className="relative aspect-square md:aspect-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/images/home/ness-sade.png"
            alt="Ness Fuarcılık"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Sağ Taraf - İçerik */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Trend Takibi ve Yenilikçi Çözümler
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Doğru Tasarlanmış Standlar
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Doğru tasarlanmış standlar, markaların ürünlerini en iyi şekilde
            sergilemelerine, müşterilerle etkileşimde bulunmalarına ve marka
            bilinirliğini artırmalarına yardımcı olan etkili pazarlama
            araçlarıdır. Standlarınızın özenle tasarlanması, marka imajınızı
            güçlendirecek ve hedef kitlenizle daha yakın bir bağ kurmanıza
            olanak tanıyacaktır.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
