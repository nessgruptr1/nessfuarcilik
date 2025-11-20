import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ness Fuarcılık ile iletişime geçin. Projeniz için keşif toplantısı planlayalım, fuar hedeflerinizi dinleyelim. Ankara merkezli hizmet.",
  openGraph: {
    title: "İletişim | Ness Fuarcılık",
    description:
      "Projeniz için keşif toplantısı planlayalım, fuar hedeflerinizi dinleyelim.",
    url: "https://nessfuarcilik.com.tr/iletisim",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

