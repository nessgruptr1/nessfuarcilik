import type { PortfolioItem } from "@/types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "design-aurora",
    slug: "aurora-healthcare-deneyim-standi",
    type: "design",
    title: "Aurora Healthcare Deneyim Alanı",
    clientName: "Aurora Healthcare",
    fairName: "Expomed 2024",
    city: "İstanbul",
    country: "Türkiye",
    areaM2: 96,
    standType: "ahsap-stand",
    description:
      "İki katlı akış kurgusu ve entegre VR demo istasyonları ile sağlık teknolojilerini deneyimletiyoruz.",
    coverImage: {
      url: "/images/portfolio/design-aurora-cover.jpg",
      alt: "Aurora Healthcare stand tasarımı",
    },
    gallery: [
      { url: "/images/portfolio/design-aurora-01.jpg", alt: "Stand perspektif" },
      { url: "/images/portfolio/design-aurora-02.jpg", alt: "VR demo bölgesi" },
    ],
    year: 2024,
    tags: ["Sağlık", "Teknoloji"],
  },
  {
    id: "design-e-mobility",
    slug: "voltgo-e-mobility-3d",
    type: "design",
    title: "VoltGo E-Mobility 3D Tasarım",
    clientName: "VoltGo",
    fairName: "CES 2025",
    city: "Las Vegas",
    country: "ABD",
    areaM2: 72,
    standType: "maxima-stand",
    coverImage: {
      url: "/images/portfolio/design-voltgo-cover.jpg",
      alt: "Voltgo tasarım" ,
    },
    gallery: [
      { url: "/images/portfolio/design-voltgo-01.jpg", alt: "Şarj istasyonu teşhir" },
    ],
    year: 2025,
    tags: ["Enerji", "Mobilite"],
  },
  {
    id: "app-cafem",
    slug: "cafem-gida-uygulama",
    type: "application",
    title: "Cafem Gıda Stand Uygulaması",
    clientName: "Cafem",
    fairName: "Gulfood 2024",
    city: "Dubai",
    country: "BAE",
    areaM2: 64,
    standType: "moduler-stand",
    description:
      "Lojistik ve kurulum süresini kısaltmak için hafif malzemeler tercih edildi.",
    coverImage: {
      url: "/images/portfolio/app-cafem-cover.jpg",
      alt: "Cafem stand uygulaması",
    },
    gallery: [
      { url: "/images/portfolio/app-cafem-01.jpg", alt: "Ürün teşhir alanı" },
    ],
    year: 2024,
    tags: ["Gıda", "İhracat"],
  },
  {
    id: "app-ototech",
    slug: "ototech-truss-sahne",
    type: "application",
    title: "Ototech Truss Sahne",
    clientName: "Ototech",
    fairName: "Automechanika 2023",
    city: "Frankfurt",
    country: "Almanya",
    standType: "truss-stand",
    coverImage: {
      url: "/images/portfolio/app-ototech-cover.jpg",
      alt: "Truss sahne uygulaması",
    },
    gallery: [
      { url: "/images/portfolio/app-ototech-01.jpg", alt: "Truss ışık sistemi" },
    ],
    year: 2023,
    tags: ["Otomotiv"],
  },
];
