import type { SeoMeta } from "@/types/common";

export const siteMeta: SeoMeta = {
  title: "Ness Fuarcılık | Stand Tasarım, Uygulama ve Danışmanlık",
  description:
    "Ness Fuarcılık; stand tasarımı, uygulama, malzeme kiralama ve iç mekan projelerinde uçtan uca hizmet sunar.",
  canonical: "https://nessfuarcilik.com.tr",
  ogImage: {
    url: "/images/og-default.jpg",
    alt: "Ness Fuarcılık stand tasarımları",
  },
};

export const companyInfo = {
  name: "Ness Fuarcılık ve Stand Sistemleri",
  mission:
    "Markaların fuarlarda, mağaza içlerinde ve geçici alanlarda güçlü ve tutarlı bir marka deneyimi üretmesine yardımcı oluyoruz.",
  stats: [
    { label: "+12 yıl", value: "Deneyim" },
    { label: "500+", value: "Tamamlanan Proje" },
    { label: "24 ülke", value: "Teslimat" },
  ],
  cta: {
    primary: {
      label: "Teklif Al",
      href: "/iletisim",
    },
    secondary: {
      label: "Portföyü İncele",
      href: "/tasarimlar",
    },
  },
};
