"use client";

import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { companyInfo } from "@/data/site";

// Slider'lar şimdilik yoruma alındı
/*
const slides = [
  {
    image: "/images/home/hero1.jpg",
    title: "Stand Tasarımı",
    subtitle: "Yenilikçi Çözümler",
    description:
      "Markanızın kimliğini yansıtan, estetik ve işlevsel stand tasarımlarıyla fuarlarda öne çıkın.",
  },
  {
    image: "/images/home/hero2.jpg",
    title: "Profesyonel Uygulama",
    subtitle: "Zamanında Teslimat",
    description:
      "Deneyimli ekibimizle standlarınızı zamanında ve mükemmel kalitede hayata geçiriyoruz.",
  },
  {
    image: "/images/home/hero3.jpg",
    title: "Malzeme Kiralama",
    subtitle: "Esnek Çözümler",
    description:
      "Fuar ihtiyaçlarınız için geniş malzeme yelpazemizden kiralama hizmeti sunuyoruz.",
  },
  {
    image: "/images/home/hero4.jpg",
    title: "İç Mekan Tasarımı",
    subtitle: "Modern Yaklaşım",
    description:
      "Mağaza, ofis ve geçici alanlar için çağdaş iç mekan tasarım çözümleri üretiyoruz.",
  },
  {
    image: "/images/home/hero5.jpg",
    title: "3D Tasarım",
    subtitle: "Görselleştirme",
    description:
      "Projelerinizi 3D görselleştirme ile hayata geçirmeden önce görün, onaylayın.",
  },
  {
    image: "/images/home/hero6.jpg",
    title: "Modüler Sistemler",
    subtitle: "Yeniden Kullanılabilir",
    description:
      "Çevre dostu ve ekonomik modüler stand sistemleriyle sürdürülebilir çözümler.",
  },
  {
    image: "/images/home/hero7.jpg",
    title: "Mağaza & Ofis",
    subtitle: "Dekorasyon Hizmetleri",
    description:
      "Marka kimliğinize uygun, işlevsel ve estetik mağaza ve ofis dekorasyonu.",
  },
  {
    image: "/images/home/hero8.jpg",
    title: "Fuar Danışmanlığı",
    subtitle: "Uçtan Uca Hizmet",
    description:
      "Fuar sürecinizin her aşamasında yanınızdayız. Planlama, tasarım, uygulama ve sonrası.",
  },
  {
    image: "/images/home/hero9.jpg",
    title: "Özel Tasarımlar",
    subtitle: "Benzersiz Çözümler",
    description:
      "Markanıza özel, yaratıcı ve dikkat çekici stand tasarımlarıyla fuarlarda fark yaratın.",
  },
  {
    image: "/images/home/hero10.jpg",
    title: "Kalite & Güven",
    subtitle: "12+ Yıl Deneyim",
    description:
      "500+ tamamlanan proje ve 24 ülkede teslimat ile güvenilir çözüm ortağınız.",
  },
  {
    image: "/images/home/hero11.jpg",
    title: "Marka Deneyimi",
    subtitle: "Tutarlı Tasarım",
    description:
      "Marka kimliğinizi yansıtan, tutarlı ve etkileyici görsel deneyimler oluşturuyoruz.",
  },
];
*/

export function Hero() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // Bir sonraki görseli önceden yükle
  // const nextIndex = useMemo(
  //   () => (currentSlide + 1) % slides.length,
  //   [currentSlide]
  // );

  // Otomatik geçiş (5 saniye)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, []);

  // Bir sonraki görseli preload et
  // useEffect(() => {
  //   const img = new window.Image();
  //   img.src = slides[nextIndex].image;
  // }, [nextIndex]);

  // const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-label="Ness Fuarcılık Hero Video"
        >
          <source
            src="/images/home/hero-video-optimized.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Slider'lar şimdilik yoruma alındı */}
      {/* {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={index}
            className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={`Ness Fuarcılık - ${slide.title} ${slide.subtitle}`}
              fill
              sizes="100vw"
              className="object-cover object-center md:object-fill"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              quality={75}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/40" />
          </div>
        );
      })} */}

      {/* Content - Always visible, on top of video */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-8 md:py-0 text-center">
        <div className="transition-all duration-700">
          <h1 className="mt-12 md:mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Türkiye ve Dünya Genelinde
            <span className="block mt-2 text-brand drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Profesyonel Fuar Çözümleri
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
            Ness Fuarcılık olarak yurt içinde ve yurt dışında pek çok markaya
            fuar, stand ve iç mimari çözümler üretiyoruz. Stand tasarımından
            uygulamaya kadar tüm süreçleri tek elden yöneterek markanızı her
            fuarda tutarlı ve profesyonel bir şekilde görünür kılıyoruz.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={companyInfo.cta.primary.href}
            className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-base font-bold text-white shadow-2xl transition-all hover:bg-slate-800 hover:scale-105 hover:shadow-slate-900/50 md:px-8 md:py-4 md:text-lg"
          >
            {companyInfo.cta.primary.label} <LuChevronRight className="ml-2" />
          </Link>
          <Link
            href={companyInfo.cta.secondary.href}
            className="inline-flex items-center rounded-md border-2 border-white bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
          >
            {companyInfo.cta.secondary.label}
          </Link>
        </div>
      </div>

      {/* Navigation Dots - Şimdilik yoruma alındı */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-white w-10 h-3"
                : "bg-white/60 hover:bg-white/90 w-3 h-3"
            }`}
            aria-label={`Slide ${index + 1}'e git`}
            aria-current={index === currentSlide}
          />
        ))}
      </div> */}
    </section>
  );
}
