import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StructuredData } from "@/components/StructuredData";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.canonical ?? "https://nessfuarcilik.com.tr"),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.title.split(" | ")[0]}`,
  },
  description: siteMeta.description,
  keywords: [
    "fuar stand tasarımı",
    "stand tasarım",
    "fuar standı",
    "modüler stand",
    "ahşap stand",
    "maxima stand",
    "truss stand",
    "malzeme kiralama",
    "iç mekan tasarımı",
    "mağaza dekorasyonu",
    "ofis dekorasyonu",
    "fuarcılık",
    "stand uygulama",
    "fuar danışmanlığı",
    "Ankara fuar standı",
    "Ness Fuarcılık",
  ],
  authors: [{ name: "Ness Fuarcılık" }],
  creator: "Ness Fuarcılık",
  publisher: "Ness Fuarcılık ve Stand Sistemleri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteMeta.canonical ?? "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteMeta.canonical ?? "https://nessfuarcilik.com.tr",
    siteName: "Ness Fuarcılık | Stand Tasarım ve Uygulama",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ness Fuarcılık - Stand Tasarım ve Uygulama Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification eklenebilir
    // google: 'your-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: "#8c2358",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
      </head>
      <body className={`${jakarta.variable} bg-slate-50 text-slate-900`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
