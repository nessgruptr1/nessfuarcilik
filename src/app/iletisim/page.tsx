"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuSend,
} from "react-icons/lu";
import { office } from "@/data/contact";
import { PageHero } from "@/components/ui/PageHero";

export default function ContactPage() {
  const contactCards = [
    {
      title: "Telefon",
      value: office.phone,
      href: `tel:${office.phone}`,
      icon: LuPhone,
      accent: "bg-brand",
      bg: "bg-brand-50",
    },
    {
      title: "E-posta",
      value: office.email,
      href: `mailto:${office.email}`,
      icon: LuMail,
      accent: "bg-brand-600",
      bg: "bg-brand-50",
    },
  ] as const;

  const whatsappCard =
    office.whatsapp &&
    ({
      title: "WhatsApp",
      value: office.whatsapp,
      href: `https://wa.me/${office.whatsapp.replace(/[^0-9]/g, "")}`,
      icon: LuMessageCircle,
      accent: "bg-green-500",
      bg: "bg-green-50",
    } as const);

  const cardsToRender = whatsappCard
    ? [...contactCards, whatsappCard]
    : [...contactCards];

  const supportItems = [
    {
      icon: LuSend,
      title: "7/24 İletişim",
      description:
        "Bize günün her saati ulaşabilir, mümkün olan en kısa sürede size dönüş yapacağımızdan emin olabilirsiniz.",
    },
  ];

  return (
    <>
      <PageHero
        title="İletişim"
        description="Projeleriniz için profesyonel çözümler sunuyoruz. Hemen iletişime geçin."
        breadcrumbs={[{ label: "İletişim", href: "/iletisim" }]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cardsToRender.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Link
                href={card.href}
                className="flex flex-col gap-4"
                target={card.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  card.title === "WhatsApp" ? "noopener noreferrer" : undefined
                }
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${card.accent}`}
                >
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`rounded-2xl ${card.bg} p-4 text-sm text-slate-600`}
                >
                  Daha hızlı iletişim için {card.title.toLowerCase()} üzerinden
                  bize ulaşabilirsiniz.
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Address & Support */}
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {office.companyName}
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                  <LuMapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Adres
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">
                    {office.address}
                    <br />
                    {office.city} / {office.country}
                  </p>
                </div>
              </div>
              {supportItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold text-slate-900">
                      {item.title}
                    </span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-brand text-white p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold">Birlikte çalışalım</h3>
            <p className="mt-4 text-sm text-white/80">
              Projeniz için keşif toplantısı planlayalım. Fuar hedeflerinizi
              dinleyelim, bütçe ve teslim sürelerine uygun çözümler oluşturalım.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white">
              <p>• Fuar stand tasarımı ve uygulama</p>
              <p>• İç mekan ve mağaza çözümleri</p>
              <p>• Malzeme kiralama ve lojistik</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
