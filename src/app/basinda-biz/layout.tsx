import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basında Biz",
  description:
    "Kusursuz projelerimize dair televizyon röportajları ve dijital basında yayınlanan haberler. Travel Turkey İzmir fuarında Diyarbakır standımız 'En İyi Stant' ödülünü aldı.",
  openGraph: {
    title: "Basında Biz | Ness Fuarcılık",
    description:
      "Kusursuz projelerimize dair televizyon röportajları ve dijital basında yayınlanan haberler.",
    url: "https://nessfuarcilik.com.tr/basinda-biz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ness Fuarcılık Basında Biz",
      },
    ],
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

