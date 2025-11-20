import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasarımlar",
  description:
    "3D tasarım ve konsept çalışmalarımızı inceleyin. Fuar öncesi tüm konseptleri fotogerçekçi renderlar ve teknik çizimlerle sunuyoruz. Stand tasarım portföyümüz.",
  openGraph: {
    title: "Tasarımlar | Ness Fuarcılık",
    description:
      "3D tasarım ve konsept çalışmalarımızı inceleyin. Fuar öncesi tüm konseptleri fotogerçekçi renderlar ve teknik çizimlerle sunuyoruz.",
    url: "https://nessfuarcilik.com.tr/tasarimlar",
    images: [
      {
        url: "/images/home/3d/ayd-3d.jpg",
        width: 1200,
        height: 800,
        alt: "Ness Fuarcılık 3D Tasarım Portföyü",
      },
    ],
  },
};

export default function DesignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

