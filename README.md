# Ness Fuarcılık - Kurumsal Web Sitesi

Ness Fuarcılık için geliştirilmiş modern, performanslı ve SEO-optimize edilmiş kurumsal web sitesi. Stand tasarımı, uygulama, malzeme kiralama ve iç mekan projeleri hizmetlerini tanıtan profesyonel bir platform.

## 📋 Proje Hakkında

Bu proje, Ness Fuarcılık'ın dijital varlığını güçlendirmek ve potansiyel müşterilere hizmetlerini etkili bir şekilde sunmak amacıyla geliştirilmiştir. Site, şirketin yurt içi ve yurt dışı (Hollanda, Dubai, Almanya, Şam) projelerini vurgular ve profesyonel bir kurumsal kimlik sunar.

### Özellikler

- ✅ **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- ✅ **SEO Optimizasyonu**: Kapsamlı metadata, structured data (JSON-LD), sitemap
- ✅ **Performans**: Next.js App Router ile optimize edilmiş statik site
- ✅ **Animasyonlar**: Framer Motion ile akıcı kullanıcı deneyimi
- ✅ **Erişilebilirlik**: WCAG standartlarına uygun yapı
- ✅ **PWA Desteği**: Web manifest ve service worker

## 🛠️ Teknoloji Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasyonlar**: [Framer Motion](https://www.framer.com/motion/)
- **İkonlar**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: Plus Jakarta Sans (Google Fonts)

## 🚀 Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- npm, yarn, pnpm veya bun

### Adımlar

1. **Projeyi klonlayın** (veya indirin):
   ```bash
   git clone <repository-url>
   cd nessfuarcilik
   ```

2. **Bağımlılıkları yükleyin**:
   ```bash
   npm install
   # veya
   yarn install
   # veya
   pnpm install
   ```

3. **Geliştirme sunucusunu başlatın**:
   ```bash
   npm run dev
   # veya
   yarn dev
   # veya
   pnpm dev
   ```

4. **Tarayıcıda açın**: [http://localhost:3000](http://localhost:3000)

## 📁 Proje Yapısı

```
nessfuarcilik/
├── public/                 # Statik dosyalar
│   ├── images/            # Görseller
│   ├── favicon.ico        # Favicon
│   ├── og-image.png       # Open Graph görseli
│   ├── robots.txt         # SEO robots dosyası
│   ├── sitemap.xml        # Otomatik oluşturulan sitemap
│   └── site.webmanifest   # PWA manifest
│
├── src/
│   ├── app/               # Next.js App Router sayfaları
│   │   ├── layout.tsx     # Root layout (metadata, header, footer)
│   │   ├── page.tsx       # Anasayfa
│   │   ├── hakkimizda/    # Hakkımızda sayfası
│   │   ├── hizmetlerimiz/ # Hizmetler sayfaları
│   │   ├── tasarimlar/    # Tasarımlar sayfası
│   │   ├── uygulamalar/   # Uygulamalar sayfası
│   │   ├── referanslar/   # Referanslar sayfası
│   │   ├── basinda-biz/   # Basında Biz sayfası
│   │   ├── iletisim/      # İletişim sayfası
│   │   └── sitemap.ts     # Dinamik sitemap oluşturucu
│   │
│   ├── components/         # React bileşenleri
│   │   ├── layout/        # Layout bileşenleri
│   │   │   ├── SiteHeader.tsx    # Ana navigasyon
│   │   │   ├── SiteFooter.tsx    # Footer
│   │   │   └── TopBar.tsx        # Üst bar (iletişim)
│   │   ├── sections/      # Sayfa bölümleri
│   │   │   ├── Hero.tsx           # Anasayfa hero
│   │   │   ├── GeneralInfo.tsx    # Genel bilgi
│   │   │   ├── ServiceGrid.tsx    # Hizmet grid
│   │   │   ├── ContactCTA.tsx     # İletişim CTA
│   │   │   └── ...                # Diğer bölümler
│   │   └── ui/            # UI bileşenleri
│   │       ├── PageHero.tsx       # Sayfa hero bileşeni
│   │       └── SectionHeading.tsx # Bölüm başlığı
│   │
│   ├── data/              # Veri dosyaları
│   │   ├── site.ts        # Site metadata
│   │   ├── navigation.ts  # Navigasyon menüsü
│   │   ├── services.ts    # Hizmet bilgileri
│   │   ├── contact.ts     # İletişim bilgileri
│   │   ├── references.ts  # Referanslar
│   │   └── portfolio.ts  # Portföy
│   │
│   ├── types/             # TypeScript tip tanımları
│   ├── hooks/              # Custom React hooks
│   │   └── useScrollPosition.ts  # Scroll pozisyon hook'u
│   └── components/
│       └── StructuredData.tsx    # JSON-LD structured data
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🔧 Önemli Dosyalar ve Yapılandırmalar

### Metadata ve SEO

- **`src/app/layout.tsx`**: Global metadata, OpenGraph, Twitter Card, favicon ayarları
- **`src/app/*/layout.tsx`**: Sayfa bazlı metadata (her sayfa için özel)
- **`src/components/StructuredData.tsx`**: JSON-LD structured data (Organization, LocalBusiness)
- **`src/app/sitemap.ts`**: Dinamik sitemap oluşturucu
- **`public/robots.txt`**: Search engine crawler direktifleri

### İletişim Bilgileri

İletişim bilgilerini güncellemek için:
- **`src/data/contact.ts`**: Telefon, e-posta, adres bilgileri
- **`src/data/site.ts`**: Şirket adı, misyon, istatistikler

### Navigasyon

Menü yapısını değiştirmek için:
- **`src/data/navigation.ts`**: Ana navigasyon menüsü

### Hizmetler

Hizmet bilgilerini güncellemek için:
- **`src/data/services.ts`**: Tüm hizmet tanımları ve içerikleri

### Stil ve Tema

- **`src/app/globals.css`**: Global CSS, animasyonlar, custom utilities
- **Tailwind Config**: Brand renkleri ve özel ayarlar

## 📝 Geliştirme Notları

### Yeni Sayfa Ekleme

1. `src/app/` altında yeni klasör oluşturun (örn: `yeni-sayfa/`)
2. `page.tsx` dosyası oluşturun
3. İsteğe bağlı: `layout.tsx` ile sayfa bazlı metadata ekleyin
4. `src/data/navigation.ts` içine menü linki ekleyin
5. `src/app/sitemap.ts` içine sayfa URL'ini ekleyin

### Yeni Bileşen Ekleme

1. Uygun klasöre ekleyin:
   - `components/sections/`: Sayfa bölümleri
   - `components/ui/`: Yeniden kullanılabilir UI bileşenleri
   - `components/layout/`: Layout bileşenleri

2. TypeScript tiplerini tanımlayın (`src/types/`)

### Animasyonlar

Framer Motion kullanılıyor. Örnek kullanım:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  İçerik
</motion.div>
```

### Responsive Tasarım

Tailwind CSS breakpoint'leri:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Örnek: `text-sm md:text-base lg:text-lg`

### Brand Renkleri

- **Primary (Brand)**: `#8c2358` (Pembe/Mor)
- **Slate**: Gri tonları (arka plan, metin)
- Renkler `globals.css` ve Tailwind config'de tanımlı

## 🚀 Deployment

### Vercel (Önerilen)

1. Projeyi GitHub'a push edin
2. [Vercel](https://vercel.com) hesabınıza giriş yapın
3. "New Project" ile projeyi import edin
4. Build ayarları otomatik algılanır:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Deploy edin

### Diğer Platformlar

Next.js statik export için:
```bash
npm run build
```

Build çıktısı `.next` klasöründe olacaktır.

## 🔍 SEO Kontrol Listesi

- ✅ Meta title ve description (her sayfa için)
- ✅ Open Graph ve Twitter Card
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt text'ler (görseller için)
- ✅ Semantic HTML
- ✅ Mobile-friendly (responsive)

### Google Search Console

1. Siteyi Google Search Console'a ekleyin
2. `src/app/layout.tsx` içindeki `verification.google` alanına verification code ekleyin
3. Sitemap'i gönderin: `https://nessfuarcilik.com.tr/sitemap.xml`

## 📱 PWA (Progressive Web App)

- **Manifest**: `public/site.webmanifest`
- **Service Worker**: `public/sw.js` (minimal)
- **Icons**: `public/` altında favicon ve app icon'ları

## 🐛 Sorun Giderme

### Build Hataları

```bash
# Node modules'ü temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
```

### Linter Hataları

```bash
npm run lint
```

### TypeScript Hataları

```bash
npx tsc --noEmit
```

## 📞 İletişim ve Destek

Proje ile ilgili sorularınız için:
- **E-posta**: [İletişim sayfasından](https://nessfuarcilik.com.tr/iletisim)
- **GitHub Issues**: Proje repository'sinde issue açabilirsiniz

## 📄 Lisans

Bu proje özel bir projedir ve Ness Fuarcılık'a aittir.

## 👨‍💻 Geliştirici Notları

### Önemli Hatırlatmalar

1. **İletişim Bilgileri**: `src/data/contact.ts` dosyasından güncelleyin
2. **SEO**: Her yeni sayfa için `layout.tsx` ile metadata ekleyin
3. **Görseller**: Yeni görseller eklerken `public/images/` altına ekleyin ve optimize edin
4. **Performans**: Büyük görseller için Next.js Image component kullanın
5. **Accessibility**: Semantic HTML ve ARIA etiketlerini kullanın

### Gelecek Geliştirmeler İçin Öneriler

- [ ] Blog/News bölümü eklenebilir
- [ ] Çoklu dil desteği (i18n)
- [ ] Form validasyonu ve backend entegrasyonu
- [ ] Analytics entegrasyonu (Google Analytics)
- [ ] A/B testing desteği
- [ ] Daha gelişmiş PWA özellikleri

---

**Son Güncelleme**: 2025
**Versiyon**: 0.1.0
**Durum**: Production Ready ✅
