"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuPhone, LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
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
      icon: FaWhatsapp,
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
        "Bize günün her saati ulaşabilirsiniz. Mümkün olan en kısa sürede size dönüş yapacağımızdan emin olabilirsiniz.",
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
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {cardsToRender.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-md border border-slate-200 bg-white p-6 shadow-sm h-full"
            >
              <Link
                href={card.href}
                className="flex h-full flex-col gap-4"
                target={card.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  card.title === "WhatsApp" ? "noopener noreferrer" : undefined
                }
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded text-white ${card.accent}`}
                >
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {card.title}
                  </p>
                  {card.title === "E-posta" ? (
                    <div className="mt-2 space-y-1">
                      <p className="text-base font-semibold text-slate-900">
                        {office.email}
                      </p>
                      {office.secondaryEmail && (
                        <p className="text-base font-semibold text-slate-900">
                          {office.secondaryEmail}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="mt-2 text-xl font-semibold text-slate-900">
                      {card.value}
                    </p>
                  )}
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
            className="rounded-md border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {office.companyName}
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-slate-100 text-slate-600">
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
                  className="flex items-center gap-3 rounded bg-slate-50 p-4 text-sm text-slate-600"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand">
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
            className="relative overflow-hidden rounded-xl border border-brand-500/40 bg-linear-to-br from-brand-700 via-brand-600 to-brand-800 p-px shadow-xl"
          >
            <div className="relative h-full rounded-[0.7rem] bg-slate-950/90 px-7 py-8 text-center text-white">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15)_0,transparent_55%)] opacity-60" />
              <div className="relative z-10 space-y-5">
                <h3 className="text-xl md:text-2xl font-semibold tracking-[0.18em] uppercase text-white/80">
                  Birlikte çalışalım
                </h3>
                <p className="text-sm md:text-base text-white/75 max-w-xl mx-auto">
                  Projeniz için keşif toplantısı planlayalım. Fuar hedeflerinizi
                  dinleyelim, bütçe ve teslim sürelerinize uygun, anahtar teslim
                  stand çözümleri sunalım.
                </p>
                <div className="mt-4 space-y-1 text-xs md:text-sm text-white/80">
                  <p>• Fuar stand tasarımı ve uygulama</p>
                  <p>• İç mekân ve mağaza konseptleri</p>
                  <p>• Malzeme kiralama, lojistik ve kurulum</p>
                </div>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
                  <Link
                    href={`mailto:${office.email}`}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-black/30 transition hover:shadow-lg hover:-translate-y-px"
                  >
                    <LuMail className="mr-2 h-4 w-4" />
                    Teklif Alın
                  </Link>
                  {office.whatsapp && (
                    <Link
                      href={`https://wa.me/${office.whatsapp.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10 hover:border-white"
                    >
                      <span className="mr-2 text-lg">✆</span>
                      WhatsApp&apos;tan Yazın
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
