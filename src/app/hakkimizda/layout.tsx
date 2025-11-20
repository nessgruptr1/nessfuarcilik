import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ness Fuarcılık olarak yıllardır büyük özveriyle yaptığımız yüzlerce organizasyonu en büyük kazanç sayıyoruz. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin.",
  openGraph: {
    title: "Hakkımızda | Ness Fuarcılık",
    description:
      "Ness Fuarcılık olarak yıllardır büyük özveriyle yaptığımız yüzlerce organizasyonu en büyük kazanç sayıyoruz.",
    url: "https://nessfuarcilik.com.tr/hakkimizda",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

