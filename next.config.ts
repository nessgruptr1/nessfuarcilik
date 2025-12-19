import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        // Eski URL'den yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/magaza-ve-ofis-dekorasyonu",
        destination: "/hizmetlerimiz/magaza-ofis-dekorasyonu",
        permanent: true, // 301 redirect (SEO için önemli)
      },
      {
        // Eski ürün teşhir standı URL'inden yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/urun-teshir-standi",
        destination: "/hizmetlerimiz/stand-tasarimi/urun-teshir-standi",
        permanent: true, // 301 redirect (SEO için önemli)
      },
      {
        // Eski ahşap fuar standı URL'inden yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/ahsap-fuar-standi",
        destination: "/hizmetlerimiz/stand-tasarimi/ahsap-stand",
        permanent: true, // 301 redirect (SEO için önemli)
      },
      {
        // Eski modüler fuar standı URL'inden yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/moduler-fuar-standi",
        destination: "/hizmetlerimiz/stand-tasarimi/moduler-stand",
        permanent: true, // 301 redirect (SEO için önemli)
      },
      {
        // Eski truss fuar standı URL'inden yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/truss-fuar-standi",
        destination: "/hizmetlerimiz/stand-tasarimi/truss-stand",
        permanent: true, // 301 redirect (SEO için önemli)
      },
      {
        // Eski maxima fuar standı URL'inden yeni URL'e kalıcı redirect (301)
        source: "/hizmetlerimiz/maxima-fuar-standi",
        destination: "/hizmetlerimiz/stand-tasarimi/maxima-stand",
        permanent: true, // 301 redirect (SEO için önemli)
      },
    ];
  },
};

export default nextConfig;
