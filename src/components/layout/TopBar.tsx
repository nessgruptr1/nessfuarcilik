"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { office } from "@/data/contact";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/nessfuarcilik",
    icon: FaInstagram,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
];

export function TopBar() {
  return (
    <div className="border-b border-slate-100 bg-slate-900 text-xs text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-1.5 sm:px-6">
        {/* Mobil: sol iletişim - sağ sosyal ikonlar */}
        <div className="flex w-full items-center justify-between">
          {/* İLETİŞİM */}
          <div className="flex flex-col gap-[2px] text-white/80 sm:flex-row sm:items-center sm:gap-3">
            <Link href={`tel:${office.phone}`} className="hover:text-white">
              {office.phone}
            </Link>

            <span className="hidden sm:inline text-white/40">•</span>

            <Link href={`mailto:${office.email}`} className="hover:text-white">
              {office.email}
            </Link>

            <span className="hidden sm:inline text-white/40">•</span>

            <p className="text-white/70">Yenimahalle / Ankara</p>
          </div>

          {/* SOSYAL MEDYA */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/20 p-1.5 text-white/80 transition hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
