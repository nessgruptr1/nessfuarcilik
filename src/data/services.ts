import type { Service, StandType } from "@/types/services";

export const services: Service[] = [
  {
    id: "svc-stand-tasarimi",
    slug: "stand-tasarimi",
    name: "Stand Tasarımı",
    shortDescription:
      "Ahşap, modüler, maxima ve truss sistemlerde konsept tasarımdan üretime uçtan uca hizmet.",
    heroImage: {
      url: "/images/hero/stand-design.jpg",
      alt: "Modern fuar stand tasarımı",
    },
    contentBlocks: [
      {
        type: "text",
        title: "Marka Odaklı Yaklaşım",
        body: "Deneyimli tasarım ekibimiz, markanızın tonunu ve hedeflerini fuar alanında güçlü bir hikayeye dönüştürür.",
      },
      {
        type: "list",
        title: "Teslimat Kapsamımız",
        items: [
          "3D konsept tasarım ve revizyon",
          "Statik hesaplar ve teknik çizimler",
          "Üretim, kurulum ve söküm yönetimi",
        ],
      },
    ],
    seo: {
      title: "Fuar Stand Tasarım Hizmetleri",
      description: "Ness Fuarcılık stand tasarım ekibi ile fuar alanında dikkat çekin.",
    },
  },
  {
    id: "svc-malzeme-kiralama",
    slug: "malzeme-kiralama",
    name: "Malzeme Kiralama",
    shortDescription:
      "Fuar mobilyaları, aydınlatma ve teknik ekipmanları günlük veya etkinlik bazlı kiralayın.",
    contentBlocks: [
      {
        type: "list",
        items: [
          "Premium fuar mobilyaları",
          "Ses, ışık ve LED ekran çözümleri",
          "Lojistik ve depolama desteği",
        ],
      },
    ],
  },
  {
    id: "svc-ic-mekan",
    slug: "ic-mekan-tasarimi",
    name: "İç Mekan Tasarımı",
    shortDescription:
      "Mağaza, showroom ve ofisler için markanıza özel deneyim alanları oluşturuyoruz.",
    contentBlocks: [
      {
        type: "text",
        body: "Modüler mobilyalar, dijital deneyim köşeleri ve sürdürülebilir malzemelerle kalıcı mekân projeleri geliştiriyoruz.",
      },
    ],
  },
  {
    id: "svc-magaza-ofis",
    slug: "magaza-ofis-dekorasyonu",
    name: "Mağaza & Ofis Dekorasyonu",
    shortDescription:
      "Kalıcılığı yüksek dekorasyon projelerinde tasarımdan uygulamaya tek ekip.",
    contentBlocks: [
      {
        type: "list",
        items: [
          "Mağaza rollout planlama",
          "Kurumsal kimlik standartlaştırma",
          "Anahtar teslim montaj",
        ],
      },
    ],
  },
];

export const standTypes: StandType[] = [
  {
    id: "stand-ahsap",
    slug: "ahsap-stand",
    name: "Ahşap Fuar Standı",
    shortDescription: "Premium görünüm, sınırsız form özgürlüğü ve sıcak malzeme dokusu.",
    longDescription:
      "Özel üretim ahşap standlarımız, detaylı işçilik ve yüksek kaliteli malzemeler ile markanızın hikayesini vurgular.",
    advantages: [
      "Tamamen kişiselleştirilebilir",
      "Yüksek taşıma ve tekrar kullanım",
      "Sürdürülebilir malzeme seçenekleri",
    ],
    suitableFor: ["Kurumsal markalar", "Ürün lansmanları", "Premium segment"],
    gallery: [
      { url: "/images/stands/wood-01.jpg", alt: "Ahşap stand örneği" },
      { url: "/images/stands/wood-02.jpg", alt: "Ahşap stand detay" },
    ],
    relatedStandTypes: ["maxima-stand", "urun-teshir-standi"],
  },
  {
    id: "stand-moduler",
    slug: "moduler-stand",
    name: "Modüler Fuar Standı",
    shortDescription: "Hızlı kurulum, optimize bütçe ve tekrar kullanım avantajı.",
    advantages: [
      "Hafif ve taşınabilir",
      "Bütçe dostu",
      "Farklı fuarlara uyarlanabilir",
    ],
    gallery: [
      { url: "/images/stands/modular-01.jpg", alt: "Modüler stand" },
    ],
    relatedStandTypes: ["truss-stand"],
  },
  {
    id: "stand-maxima",
    slug: "maxima-stand",
    name: "Maxima Fuar Standı",
    shortDescription: "Ahşap hissi veren alüminyum strüktürle sağlamlık ve esneklik.",
    gallery: [
      { url: "/images/stands/maxima-01.jpg", alt: "Maxima stand" },
    ],
    relatedStandTypes: ["ahsap-stand"],
  },
  {
    id: "stand-truss",
    slug: "truss-stand",
    name: "Truss Fuar Standı",
    shortDescription: "Geniş açıklıklarda yüksek taşıma gücü ve dinamik ışık kullanımı.",
    gallery: [
      { url: "/images/stands/truss-01.jpg", alt: "Truss stand" },
    ],
    relatedStandTypes: ["moduler-stand"],
  },
  {
    id: "stand-urun-teshir",
    slug: "urun-teshir-standi",
    name: "Ürün Teşhir Standı",
    shortDescription: "Perakende ve lansman alanları için ürün odaklı çözümler.",
    gallery: [
      { url: "/images/stands/display-01.jpg", alt: "Ürün teşhir standı" },
    ],
    relatedStandTypes: ["ahsap-stand"],
  },
];
