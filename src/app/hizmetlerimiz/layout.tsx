import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Stand tasarımı, uygulama, malzeme kiralama ve iç mekan projelerinde uçtan uca hizmet sunuyoruz. Ahşap, modüler, maxima ve truss stand sistemleri.",
  openGraph: {
    title: "Hizmetlerimiz | Ness Fuarcılık",
    description:
      "Stand tasarımı, uygulama, malzeme kiralama ve iç mekan projelerinde uçtan uca hizmet sunuyoruz.",
    url: "https://nessfuarcilik.com.tr/hizmetlerimiz",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

