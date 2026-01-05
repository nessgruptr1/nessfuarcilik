"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import { companyInfo } from "@/data/site";

export function Hero() {
  return (
    <section className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-00">
        <div className="absolute top-[130px] bottom-[100px] left-0 right-0 md:top-[45px] md:bottom-[2px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain md:object-cover md:object-bottom"
            aria-label="Ness Fuarcılık Hero Video"
          >
            <source
              src="/images/home/ness-web-video-yeni-optimized.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/5 to-black/15" />
      </div>

      {/* CTA Buttons - Sol alt köşe */}
      <div className="absolute bottom-24 left-4 md:bottom-8 md:left-8 z-20">
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          <Link
            href={companyInfo.cta.primary.href}
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-2xl transition-all hover:bg-slate-800 hover:scale-105 hover:shadow-slate-900/50 md:px-5 md:py-2.5 md:text-base"
          >
            {companyInfo.cta.primary.label} <LuChevronRight className="ml-2" />
          </Link>
          <Link
            href={companyInfo.cta.secondary.href}
            className="inline-flex items-center rounded-md border-2 border-white bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-xl md:px-5 md:py-2.5 md:text-base"
          >
            {companyInfo.cta.secondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
