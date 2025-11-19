import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.canonical ?? "https://nessfuarcilik.com.tr"),
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: { canonical: siteMeta.canonical },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: siteMeta.ogImage ? [siteMeta.ogImage] : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${jakarta.variable} bg-slate-50 text-slate-900`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
