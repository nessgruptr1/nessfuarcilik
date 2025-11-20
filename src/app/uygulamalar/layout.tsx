import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uygulamalar",
  description:
    "Sahada teslim ettiğimiz projelerden seçili görüntüler. Render aşamasında onaylanan tasarımlar, üretim ve kurulum ekiplerimizin koordinasyonuyla fuar alanlarında hayata geçiriliyor.",
  openGraph: {
    title: "Uygulamalar | Ness Fuarcılık",
    description:
      "Sahada teslim ettiğimiz projelerden seçili görüntüler. Her fotoğraf gerçek projelerimizden bir kare.",
    url: "https://nessfuarcilik.com.tr/uygulamalar",
    images: [
      {
        url: "/images/home/hero1.jpg",
        width: 1200,
        height: 800,
        alt: "Ness Fuarcılık Uygulama Projeleri",
      },
    ],
  },
};

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

