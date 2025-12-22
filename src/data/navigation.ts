import type { NavItem } from "@/types/navigation";

export const navigation: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    children: [
      {
        label: "Stand Tasarımı",
        href: "/hizmetlerimiz/stand-tasarimi",
        children: [
          { label: "Ahşap Stand", href: "/hizmetlerimiz/stand-tasarimi/ahsap-stand" },
          { label: "Modüler Stand", href: "/hizmetlerimiz/stand-tasarimi/moduler-stand" },
          { label: "Maxima Stand", href: "/hizmetlerimiz/stand-tasarimi/maxima-stand" },
          { label: "Truss Stand", href: "/hizmetlerimiz/stand-tasarimi/truss-stand" },
          {
            label: "Ürün Teşhir Standı",
            href: "/hizmetlerimiz/stand-tasarimi/urun-teshir-standi",
          },
        ],
      },
      { label: "Malzeme Kiralama", href: "/hizmetlerimiz/malzeme-kiralama" },
      { label: "İç Mekan Tasarımı", href: "/hizmetlerimiz/ic-mekan-tasarimi" },
      { label: "Mağaza & Ofis Dekorasyonu", href: "/hizmetlerimiz/magaza-ofis-dekorasyonu" },
    ],
  },
  { label: "Tasarımlar (3D)", href: "/tasarimlar" },
  { label: "Uygulamalar", href: "/uygulamalar" },
  { label: "Referanslarımız", href: "/referanslar" },
  { label: "Müşteri Memnuniyeti", href: "/musteri-memnuniyeti" },
  { label: "Basında Biz", href: "/basinda-biz" },
  { label: "İletişim", href: "/iletisim" },
];
