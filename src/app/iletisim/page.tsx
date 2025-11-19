"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuPhone, LuMail, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { office } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="İletişim"
        title="Ekibimizle hemen bağlantı kurun"
        description="Projeleriniz için profesyonel çözümler sunuyoruz. Hemen iletişime geçin."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{office.companyName}</h3>
          </div>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <LuMapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  Adres
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {office.address}
                  <br />
                  {office.city} / {office.country}
                </p>
              </div>
            </div>

            {/* Phone */}
            <Link
              href={`tel:${office.phone}`}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-brand-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                <LuPhone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  Telefon
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {office.phone}
                </p>
              </div>
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${office.email}`}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-brand-50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                <LuMail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  E-posta
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {office.email}
                </p>
              </div>
            </Link>

            {/* WhatsApp */}
            {office.whatsapp && (
              <Link
                href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-green-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white">
                  <LuMessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {office.whatsapp}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-sm"
        >
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg">
              <LuMessageCircle className="h-10 w-10" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Bize Ulaşın
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Telefon, e-posta veya WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
              <br />
              <br />
              Çalışma saatlerimiz içinde en kısa sürede size dönüş yapacağız.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
