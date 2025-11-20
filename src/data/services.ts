import type { Service, StandType } from "@/types/services";

export const services: Service[] = [
  {
    id: "svc-stand-tasarimi",
    slug: "stand-tasarimi",
    name: "Stand Tasarımı",
    shortDescription:
      "Ahşap, modüler, maxima ve truss sistemlerde konsept tasarımdan üretime uçtan uca hizmet.",
    heroImage: {
      url: "/images/hero/stand-design.jpg",
      alt: "Modern fuar stand tasarımı",
    },
    contentBlocks: [
      {
        type: "text",
        title: "Marka Odaklı Yaklaşım",
        body: "Deneyimli tasarım ekibimiz, markanızın tonunu ve hedeflerini fuar alanında güçlü bir hikayeye dönüştürür.",
      },
      {
        type: "list",
        title: "Teslimat Kapsamımız",
        items: [
          "3D konsept tasarım ve revizyon",
          "Statik hesaplar ve teknik çizimler",
          "Üretim, kurulum ve söküm yönetimi",
        ],
      },
    ],
    seo: {
      title: "Fuar Stand Tasarım Hizmetleri",
      description: "Ness Fuarcılık stand tasarım ekibi ile fuar alanında dikkat çekin.",
    },
  },
  {
    id: "svc-malzeme-kiralama",
    slug: "malzeme-kiralama",
    name: "Malzeme Kiralama",
    shortDescription:
      "Satılık ya da kiralık stand ve ekipman seçenekleriyle fuar operasyonlarınıza esnek, ekonomik çözümler sunuyoruz.",
    contentBlocks: [
      {
        type: "text",
        title: "Malzeme Kiralama Hizmeti",
        body:
          "Fuar standınızı satın almak yerine kısa süreli etkinliklerde kiralamayı tercih ederek bütçe ve hız avantajı sağlayabilirsiniz. Satılık çözümlerimizin yanına eklediğimiz kiralama opsiyonları, ulusal ve uluslararası fuarlarda hızlı aksiyon almanıza yardımcı olur.",
      },
      {
        type: "text",
        title: "Hangi Standlar Kiralanabilir?",
        body:
          "Ahşap, modüler, maxima, kongre standları, mağaza/ofis dekorları ve ürün teşhir üniteleri dahil geniş bir envanteri kiralama modeliyle sunuyoruz. Markanızın konforlu kullanımına uygun ölçüler ve planlar geliştirerek ekonomik seçenekler oluşturuyoruz.",
      },
      {
        type: "text",
        title: "Sevkiyat ve Kurulum",
        body:
          "Kiralama paketlerinde sevkiyat, montaj-demontaj ve depolama gibi operasyonel hizmetleri üstleniyoruz. Böylece ekipleriniz sadece fuar iletişimine odaklanırken, lojistik süreçler tek merkezden yönetiliyor.",
      },
      {
        type: "text",
        title: "Ahşap Standlar",
        body:
          "Kiralık ahşap standlarımız suntalam ve ham sunta seçenekleriyle iki formda sunulur. Ofis, ziyaretçi, mutfak veya depo alanı gereksinimlerinize göre modüller eklenir; yalın renkler sayesinde farklı sektörlerle kolay uyum yakalanır.",
      },
      {
        type: "text",
        title: "Modüler Sistemler",
        body:
          "Ekonomik fiyatları, fonksiyonel kullanımı ve hızlı kurulumu sayesinde modüler sistemler kiralama modelinde en çok tercih edilen çözümlerimizdir. Alüminyum iskelet ve suntalam panellerle kurulan bu yapılar gerektiğinde cam, pleksi, kumaş veya ışıklı panolarla zenginleştirilir.",
      },
      {
        type: "text",
        title: "Avantajları",
        body:
          "Modüler stand malzemeleri sunta, suntalam, MDF, cam gibi bileşenlerle kombinlenebilir; boş bırakılan panolara reklam uygulamaları yapılabilir. Montaj-demontaj ve nakliye maliyetleri düşüktür, farklı etkinliklerde tekrar kullanılabilir.",
      },
      {
        type: "text",
        title: "Kumaş ve Pleksi Seçenekleri",
        body:
          "Pleksi yüzeyler, tüller ve kumaş panellerle desteklenen kiralık sistemler, markanızın kurumsal renklerini alanda vurgular. Hedef kitlenize özel atmosferleri kısa sürede kurmanıza olanak tanır.",
      },
      {
        type: "list",
        title: "Kiralama Paketlerimiz",
        items: [
          "Stand tasarım uyarlaması ve teknik çizimler",
          "Modüler veya ahşap envanter seçimi",
          "Kurulum, söküm, nakliye ve depolama yönetimi",
          "Opsiyonel ses, ışık, ekran ve mobilya kiralama",
        ],
      },
    ],
  },
  {
    id: "svc-ic-mekan",
    slug: "ic-mekan-tasarimi",
    name: "İç Mekan Tasarımı",
    shortDescription:
      "Estetik, konfor ve fonksiyonelliği aynı mekânda buluşturan, marka kimliğinize özel iç mekanlar tasarlıyoruz.",
    contentBlocks: [
      {
        type: "text",
        title: "Estetik, Konfor ve Fonksiyonelliği Birleştiren Mükemmel Dokunuş",
        body:
          "İç mekan tasarımı; müşterilerinizin, çalışanlarınızın ya da ziyaretçilerinizin mekâna adım attığı ilk andaki hissini şekillendirir. Renk paletinden mobilya seçimine, aydınlatmadan duvar dokularına kadar her ayrıntı markanızın hikâyesini anlatır.",
      },
      {
        type: "text",
        title: "Fonksiyonelliği Artırma",
        body:
          "İyi planlanmış yerleşim düzenleri, ergonomik çözümler, depolama alanları ve iş akışını destekleyen modüller sayesinde her metrekareyi verimli kullanıyoruz. Mekânı sadece güzel değil, aynı zamanda akıcı ve üretken hâle getiriyoruz.",
      },
      {
        type: "text",
        title: "Kişiye Özel Tasarım",
        body:
          "Her proje, müşterimizin kullanım amacı, marka kimliği ve hedef kitlesine göre yeniden kurgulanıyor. Ofis, mağaza, showroom veya deneyim alanı fark etmeksizin taleplere göre özelleştirilmiş konseptler geliştiriyoruz.",
      },
      {
        type: "text",
        title: "Renk Psikolojisi ve Atmosfer",
        body:
          "Renk psikolojisinden faydalanarak mekânın ruh halini belirliyoruz. Rahatlatıcı, enerjik ya da sofistike atmosferler; doğru palet, malzeme seçimi ve aydınlatma kurgusuyla hayat buluyor.",
      },
      {
        type: "text",
        title: "Teknoloji Entegrasyonu",
        body:
          "Akıllı ev/ofis sistemleri, aydınlatma kontrolü, ses sistemleri ve dijital ekranlar gibi modern teknolojileri tasarıma entegre ederek mekânların çağdaş ve işlevsel olmasını sağlıyoruz.",
      },
      {
        type: "text",
        title: "Yeşil ve Sürdürülebilir Yaklaşım",
        body:
          "Enerji verimliliği, geri dönüştürülebilir malzemeler ve çevre dostu üretim süreçlerini gözeterek sürdürülebilir iç mekanlar tasarlıyoruz.",
      },
      {
        type: "text",
        title: "Proje Yönetimi",
        body:
          "Planlama, bütçe yönetimi, malzeme tedariki ve uygulama adımlarını tek bir elden yönetiyoruz. Deneyimli ekiplerimizle projelerinizi zamanında ve sorunsuz teslim ediyoruz.",
      },
      {
        type: "text",
        title: "Trend Takibi ve Yenilik",
        body:
          "Dünya çapındaki malzeme, mobilya ve dekorasyon trendlerini yakından izliyor; projelerimize yenilikçi çözümlerle değer katıyoruz.",
      },
    ],
  },
  {
    id: "svc-magaza-ofis",
    slug: "magaza-ofis-dekorasyonu",
    name: "Mağaza & Ofis Dekorasyonu",
    shortDescription:
      "Mağaza ve ofislerinizi marka kimliğinizi yansıtan, estetik ve fonksiyonel deneyim alanlarına dönüştürüyoruz.",
    contentBlocks: [
      {
        type: "text",
        title: "İş Yerinizde Estetik ve Fonksiyonel Dönüşüm",
        body:
          "Mağaza ve ofis dekorasyonu; müşterilerinizde kalıcı bir izlenim bırakmanın ve çalışanlarınıza verimli bir ortam sunmanın kilit araçlarından biridir. Mekânın görsel kimliği markanızın değerlerini yansıtırken, planlanan her detay iş süreçlerinize katkı sağlar.",
      },
      {
        type: "text",
        title: "Marka Kimliği ile Uyum",
        body:
          "Kurumsal renkler, logo kullanımı ve görsel dil, iç mekân tasarımına entegre edilerek marka kimliğiniz güçlendirilir. Ziyaretçileriniz girişteki ilk saniyeden itibaren kim olduğunuzu hisseder.",
      },
      {
        type: "text",
        title: "Müşteri Deneyimini Artırma",
        body:
          "Mağaza dekorasyonunda ürün yerleşimi, yönlendirme ve aydınlatma gibi unsurlar alışveriş deneyimini iyileştirir; müşterilerin rahatça dolaşıp ürünleri keşfetmesini sağlar.",
      },
      {
        type: "text",
        title: "Ofis Verimliliği",
        body:
          "Ergonomik mobilyalar, doğru ışıklandırma, akustik çözümler ve işbirliğini destekleyen yerleşimler çalışan motivasyonunu artırırken iş süreçlerini hızlandırır.",
      },
      {
        type: "text",
        title: "Fonksiyonellik ve Akıllı Kullanım",
        body:
          "Depolama çözümleri, modüler bölücüler ve akıllı planlama ile sınırlı alanları etkin şekilde kullanıyor; mekânı ihtiyaçlarınıza göre ölçekliyoruz.",
      },
      {
        type: "text",
        title: "Çalışan Motivasyonu",
        body:
          "Renk psikolojisi, doğal ışık kullanımı ve konforlu dinlenme alanlarıyla çalışanların işe aidiyetini güçlendiriyoruz.",
      },
      {
        type: "text",
        title: "Enerji Veren Atmosferler",
        body:
          "Renk paletleri ve ışık senaryoları, mekânın enerjisini belirler. Hem çalışan hem müşteri deneyimini destekleyecek atmosferler tasarlıyoruz.",
      },
      {
        type: "text",
        title: "Sürdürülebilir Yaklaşım",
        body:
          "Geri dönüştürülebilir malzemeler, enerji tasarruflu aydınlatmalar ve çevre dostu dekoratif öğelerle sürdürülebilir mekânlar kuruyoruz.",
      },
      {
        type: "text",
        title: "Profesyonel Tasarım ve Uygulama",
        body:
          "Deneyimli tasarım ve uygulama ekiplerimiz, ihtiyaçlarınıza uygun çözümleri anahtar teslim yönetir; projeyi planlamadan uygulamaya tek merkezden yürütür.",
      },
    ],
  },
];

export const standTypes: StandType[] = [
  {
    id: "stand-ahsap",
    slug: "ahsap-stand",
    name: "Ahşap Fuar Standı",
    shortDescription: "Premium görünüm, sınırsız form özgürlüğü ve sıcak malzeme dokusu.",
    longDescription:
      "Özel üretim ahşap standlarımız, detaylı işçilik ve yüksek kaliteli malzemeler ile markanızın hikayesini vurgular.",
    advantages: [
      "Tamamen kişiselleştirilebilir",
      "Yüksek taşıma ve tekrar kullanım",
      "Sürdürülebilir malzeme seçenekleri",
    ],
    suitableFor: ["Kurumsal markalar", "Ürün lansmanları", "Premium segment"],
    gallery: [
      { url: "/images/stands/wood-01.jpg", alt: "Ahşap stand örneği" },
      { url: "/images/stands/wood-02.jpg", alt: "Ahşap stand detay" },
    ],
    relatedStandTypes: ["maxima-stand", "urun-teshir-standi"],
  },
  {
    id: "stand-moduler",
    slug: "moduler-stand",
    name: "Modüler Fuar Standı",
    shortDescription: "Hızlı kurulum, optimize bütçe ve tekrar kullanım avantajı.",
    advantages: [
      "Hafif ve taşınabilir",
      "Bütçe dostu",
      "Farklı fuarlara uyarlanabilir",
    ],
    gallery: [
      { url: "/images/stands/modular-01.jpg", alt: "Modüler stand" },
    ],
    relatedStandTypes: ["truss-stand"],
  },
  {
    id: "stand-maxima",
    slug: "maxima-stand",
    name: "Maxima Fuar Standı",
    shortDescription: "Ahşap hissi veren alüminyum strüktürle sağlamlık ve esneklik.",
    gallery: [
      { url: "/images/stands/maxima-01.jpg", alt: "Maxima stand" },
    ],
    relatedStandTypes: ["ahsap-stand"],
  },
  {
    id: "stand-truss",
    slug: "truss-stand",
    name: "Truss Fuar Standı",
    shortDescription: "Geniş açıklıklarda yüksek taşıma gücü ve dinamik ışık kullanımı.",
    gallery: [
      { url: "/images/stands/truss-01.jpg", alt: "Truss stand" },
    ],
    relatedStandTypes: ["moduler-stand"],
  },
  {
    id: "stand-urun-teshir",
    slug: "urun-teshir-standi",
    name: "Ürün Teşhir Standı",
    shortDescription: "Perakende ve lansman alanları için ürün odaklı çözümler.",
    gallery: [
      { url: "/images/stands/display-01.jpg", alt: "Ürün teşhir standı" },
    ],
    relatedStandTypes: ["ahsap-stand"],
  },
];
