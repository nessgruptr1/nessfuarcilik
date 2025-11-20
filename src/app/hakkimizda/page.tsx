"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  LuTarget,
  LuLightbulb,
  LuUsers,
  LuAward,
  LuGlobe,
  LuTrendingUp,
} from "react-icons/lu";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  const mission = {
    title: "Misyonumuz",
    description:
      "Markaların fuarlarda, mağaza içlerinde ve geçici alanlarda güçlü ve tutarlı bir marka deneyimi üretmesine yardımcı oluyoruz. Her projede estetik, işlevsellik ve sürdürülebilirliği bir araya getirerek müşterilerimizin hedeflerine ulaşmalarını sağlıyoruz.",
    icon: LuTarget,
    points: [
      "Müşteri odaklı yaklaşım ile özel çözümler üretmek",
      "Yüksek kalite standartlarını her projede korumak",
      "Zamanında teslimat ve profesyonel hizmet sunmak",
      "Sürdürülebilir ve çevre dostu malzemeler kullanmak",
    ],
  };

  const vision = {
    title: "Vizyonumuz",
    description:
      "Türkiye'nin önde gelen fuarcılık ve stand tasarım firması olarak, uluslararası pazarda da güçlü bir konum elde etmek. Yenilikçi teknolojiler ve yaratıcı tasarımlarla sektörde öncü olmak, müşterilerimize değer katmak ve sürdürülebilir büyüme sağlamak.",
    icon: LuLightbulb,
    points: [
      "Sektörde öncü ve yenilikçi çözümler sunmak",
      "Uluslararası pazarda güçlü bir marka olmak",
      "Dijital dönüşümle süreçleri optimize etmek",
      "Müşteri memnuniyetini en üst seviyede tutmak",
    ],
  };

  const values = [
    {
      icon: LuUsers,
      title: "Müşteri Odaklılık",
      description: "Her projede müşteri ihtiyaçlarını ön planda tutuyoruz.",
    },
    {
      icon: LuAward,
      title: "Kalite",
      description: "Yüksek standartlarda işçilik ve malzeme kullanımı.",
    },
    {
      icon: LuGlobe,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu çözümler ve yeniden kullanılabilir sistemler.",
    },
    {
      icon: LuTrendingUp,
      title: "İnovasyon",
      description: "Sürekli gelişim ve yenilikçi teknolojilerle ilerleme.",
    },
  ];

  return (
    <>
      <PageHero
        title="Hakkımızda"
        description="Yıllardır büyük özveriyle yaptığımız yüzlerce organizasyonu en büyük kazanç sayıyoruz."
        breadcrumbs={[{ label: "Hakkımızda", href: "/hakkimizda" }]}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* İstatistikler */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "120+", value: "Tamamlanan Proje" },
            { label: "1000+", value: "Mutlu Müşteri" },
            { label: "12", value: "Takım Arkadaşı" },
            { label: "8", value: "Ödül" },
          ].map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
            >
              <p className="text-4xl font-bold text-brand">{stat.label}</p>
              <p className="mt-2 text-base font-medium text-slate-600">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fotoğraf ve Metin Bölümü */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 md:grid-cols-2 md:items-center"
        >
          {/* Sol: Fotoğraf */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="/images/hakkimizda/neslihan-fidan.jpg"
              alt="Ness Fuarcılık"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Sağ: Metin */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              İŞLETMENİZİ DİKKAT ÇEKİCİ KILIN!
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand">
                Estetik ve Dayanıklı Tasarımlar
              </h3>
              <p className="text-lg leading-relaxed text-slate-700">
                Estetik tasarım, dayanıklılık, işlevsellik ve taşınabilirlik
                gibi avantajlar sunan işletmemiz, şirketlere ve markalara
                fuarlarda güçlü bir varlık oluşturur. Modern fuar
                katılımcılarının ihtiyaçlarına cevap verirken, markaların
                etkileyici ve dikkat çekici bir şekilde temsil edilmesi her
                zaman hedeflediğimiz noktadır.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Misyon */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
              <mission.icon className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {mission.title}
            </h2>
          </div>
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            {mission.description}
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {mission.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-base text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Vizyon */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white md:p-12"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
              <vision.icon className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold">{vision.title}</h2>
          </div>
          <p className="mb-6 text-lg leading-relaxed text-white/90">
            {vision.description}
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {vision.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span className="text-base text-white/90">{point}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Değerlerimiz */}
        <SectionHeading
          overline="Değerlerimiz"
          title="Çalışma prensiplerimiz"
          description="Her projede bu değerleri ön planda tutarak ilerliyoruz."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <value.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
