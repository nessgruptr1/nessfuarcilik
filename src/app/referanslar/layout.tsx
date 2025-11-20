import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Kusursuz projelere imza attığımız değerli firmalarımız. Gıda, teknoloji, sağlık, kamu ve üretim sektörlerinden yüzlerce projede yer aldık. 100+ marka ile uzun soluklu iş ortaklıkları.",
  openGraph: {
    title: "Referanslarımız | Ness Fuarcılık",
    description:
      "Kusursuz projelere imza attığımız değerli firmalarımız. 100+ marka ile uzun soluklu iş ortaklıkları.",
    url: "https://nessfuarcilik.com.tr/referanslar",
  },
};

export default function ReferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

