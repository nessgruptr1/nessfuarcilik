import { notFound } from "next/navigation";
import Link from "next/link";
import { standTypes } from "@/data/services";
type StandDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const standDetailContent: Record<
  string,
  {
    sections: {
      heading: string;
      body: string[];
      list?: string[];
    }[];
  }
> = {
  "ahsap-stand": {
    sections: [
      {
        heading: "Ahşap Fuar Standı",
        body: [
          "Ham sunta ve işlenmiş sunta gibi doğal malzemelerle tasarlanan ahşap standlar, boyanabilir veya malzemenin kendi dokusunu sergileyen yüzey seçenekleriyle öne çıkar. Konsepte uygun renk, form ve malzeme tercihleri markanızın kimliğini doğrudan yansıtır.",
          "Fuar katılımlarında stand alanı markanızın sahnesidir. Doğru planlanmış bir tasarım, ürünlerinizi ziyaretçilere daha çekici bir şekilde sunmanızı sağlar; merak uyandırır, etkileşim fırsatlarını artırır.",
          "Ulusal ve uluslararası fuarlarda, ziyaretçilerle birebir temas kurduğunuz bu alanların estetik ve işlevsel olarak kusursuz olması büyük önem taşır. Ahşap standlar, markanızı sıcak ve güven veren bir atmosferle anlatmanıza yardımcı olur.",
        ],
      },
      {
        heading: "Ahşap Fuar Standı Kullanım Yerleri",
        body: [
          "Doğal malzeme dokusu sayesinde ahşap standlar gıda, kozmetik, sağlık ve eğitim gibi sektörlerde sıklıkla tercih edilir. Organik görünümüyle ürünlerinize hikaye eşlik eder, ziyaretçilerin standda daha uzun süre vakit geçirmesini sağlar.",
          "Sektör ayrımı olmaksızın, fuar ve kongrelerde güçlü bir görsel sunmak isteyen tüm markalar ahşap formlardan faydalanabilir. Rekabetin yoğun olduğu ortamlarda fark edilirliği artıran modern çizgiler sunar.",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        body: [
          "Stand tasarlarken ürün yerleşimi, boyutlandırma, renk uyumu ve hedef kitlenin beklentileri birlikte değerlendirilir. Kurulum yapılacak alanın doğru belirlenmesi, ziyaretçilerin akıcı şekilde standı gezebilmesini sağlar.",
          "Üretim aşamasında planlama, malzeme seçimi ve montaj sıralaması gibi kritik noktalar netleştirilir. Böylece hem estetik hem de operasyonel açıdan sorunsuz bir deneyim oluşturulur.",
        ],
        list: [
          "Suntalam yüzeyler boyama gerektirmez; tek renk veya desen kombinasyonlarıyla kısa sürede kurulabilir.",
          "Ham sunta yüzeylerde alçı ve çok katlı boya uygulaması yapılır; daha mat ve sade görünüm sunar.",
          "Kurulum süreleri seçilen malzemeye göre değişir ancak her biri planlı montaj akışıyla ilerler.",
        ],
      },
      {
        heading: "Kullanım Avantajları",
        body: [
          "Ahşap standlar sağlam gövdesi, gizlenmiş bağlantı noktaları ve kolay temizlenebilir yapısıyla gün boyu profesyonel duruşunu korur. Hafif yapısı taşımayı ve tekrar kurulumu kolaylaştırır.",
          "Atölye işçiliğinin özenle yürütüldüğü bu tasarımlarda, marka kimliğinize özel çizgiler oluşturmak mümkündür. Modüler parçalar sayesinde her organizasyonda ihtiyaca göre revize edilebilir.",
          "Fuar ve organizasyonlarda özgün bir tasarımla öne çıkmak, ziyaretçi akışını doğal şekilde artırır. Detaylı işçilik sayesinde markanızın güven veren yüzünü yansıtabilirsiniz.",
        ],
      },
      {
        heading: "Fiyatlandırma",
        body: [
          "Ahşap stand maliyetleri; kullanılacak malzeme türü, alan ölçüsü, kurulum yöntemi (monte / demonte), işçilik yoğunluğu ve sevkiyat süreçlerine göre değişir. Kullanılacak ahşap adedi ve tercih edilen yüzey işlemleri bütçenin ana kalemleridir.",
          "Tasarım çizimleri, renk teması ve lojistik plan netleştiğinde bütçe şeffaf şekilde paylaşılır. Uzun ömürlü ve dayanıklı malzemelerden ürettiğimiz standlarımız hakkında detaylı bilgi almak için ekibimizle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  "moduler-stand": {
    sections: [
      {
        heading: "Modüler Fuar Standı",
        body: [
          "Değiştirilebilir ve yeniden kullanılabilir bileşenlerden oluşan modüler standlar, her etkinlikte farklı boyut ve konfigürasyonlara adapte olabilen esnek bir yapı sunar. Alüminyum profiller, paneller, ayaklar ve baskılı yüzeyler sayesinde markanızı farklı sahnelere aynı kimlikle taşıyabilirsiniz.",
          "Hafif malzemelerle inşa edilmeleri lojistik süreçleri kolaylaştırır; grafik paneller marka renklerini, logoyu ve mesajı güçlü şekilde öne çıkarır.",
        ],
      },
      {
        heading: "Temel Özellikler",
        body: [
          "Modüler tasarım, standın ölçülerinin ve kurgusunun hızlıca değiştirilmesine izin verdiği için, sık fuara katılan ekipler her etkinlikte yeni bir yerleşim planı oluşturabilir.",
          "Kurulumdan demontaja kadar tüm süreçler pratik bağlantı parçaları sayesinde kısa sürede tamamlanır; böylece ekipler enerjisini ziyaretçi deneyimine ayırabilir.",
        ],
        list: [
          "Esneklik ve özelleştirme: Boyut, form ve içerik anında güncellenebilir.",
          "Taşınabilirlik: Hafif profiller ve paneller kolay taşıma sağlar.",
          "Hızlı montaj/demontaj: Kısıtlı zamanlı etkinliklerde büyük avantaj.",
          "Yeniden kullanılabilirlik: Aynı modüller farklı fuarlarda tekrar değerlendirilir.",
          "Marka uyumu: Grafik paneller kurumsal kimliği birebir yansıtır.",
          "Ekonomik yapı: Uzun vadeli kullanım maliyetleri düşürür.",
        ],
      },
      {
        heading: "Kimler İçin İdeal?",
        body: [
          "Sık fuara katılan, farklı metrekarelerde alan kullanan veya bütçe dostu çözüme ihtiyaç duyan markalar için modüler sistemler en pratik seçeneklerden biridir.",
          "Esneklik, taşınabilirlik ve maliyet tasarrufu sağlayan bu standlar, değişen ihtiyaçlara hızla uyum sağlarken profesyonel bir görünüm sunar.",
        ],
      },
    ],
  },
  "maxima-stand": {
    sections: [
      {
        heading: "Maxima Fuar Standı",
        body: [
          "Alüminyum iskeletlerin ahşap panellerle kaplanmasıyla ortaya çıkan Maxima standlar, modern çizgileriyle fuar alanlarında prestijli bir duruş sağlar. Yüksek etkileşimli ortamlarda kurumunuzu ve ürünlerinizi öne çıkarırken farklı materyallerin birleşimi sayesinde akılda kalıcı bir sahne oluşturur.",
          "Şık görünümü, dayanıklı malzeme tercihleri ve özgün tasarım diliyle işletmenizi rakiplerinizden ayrıştırır; fuar ziyaretçileri için güçlü bir ilk izlenim yaratır.",
        ],
      },
      {
        heading: "Öne Çıkan Özellikler",
        body: [
          "Modüler tak-çıkar yapısı kurulum ve demontaj süreçlerini hızlandırır; böylece zamandan ve işçilik maliyetinden tasarruf edersiniz. Tüm detaylar önceden planlandığı için sahada sürpriz yaşanmadan montaj tamamlanır.",
          "Farklı materyallerin uyumlu kullanımı standı hem estetik hem de işlevsel kılar. Tasarım sürecinde konsept ve dekor unsurları işletmenin kimliğiyle birebir örtüşecek şekilde belirlenir.",
          "Geri dönüştürülebilir malzeme kullanımı sürdürülebilirlik açısından avantaj sunarken, tekrar kullanılabilir yapısı uzun vadede bütçeyi rahatlatır.",
        ],
        list: [
          "Kolay kurulum: Parçalar birbirine hızlıca monte edilip sökülebilir.",
          "Esnek tasarım: Tek malzemeyle sade, çoklu materyalle gösterişli konseptler mümkün.",
          "Operasyonel verimlilik: Kısa sürede kurulum, düşük işçilik maliyeti.",
          "Sürdürülebilirlik: Yeniden kullanılabilir parçalar çevreye ve bütçeye dosttur.",
          "Yüksek algı değeri: Markanın özenini ve kalite seviyesini yansıtır.",
        ],
      },
      {
        heading: "Kullanılan Malzemeler",
        body: [
          "Maxima standlarda alüminyum, ahşap, pleksi, tül ve cam gibi materyaller birlikte kullanılır. Bu kombinasyon hem sağlamlık hem de görsel zenginlik sunar. Malzeme sayısı arttıkça maliyet yükselse de, elde edilen premium görünüm fuar ziyaretçilerinin dikkatini yoğun şekilde çeker.",
          "Her işletmenin tercih ettiği renk, doku ve hikâye farklı olduğu için tasarımlar da kişiye özel şekillenir. Sektörünüze uygun renk paleti, aydınlatma ve aksesuarlar seçilerek konsept tamamlanır.",
        ],
      },
      {
        heading: "Tasarım ve Konumlandırma",
        body: [
          "Fuar alanlarında doğru yer seçimi ve ölçülere sadık kalarak hazırlanan çizimler, standın sahada sorunsuz yerleşmesini sağlar. Aydınlatma, renk ve ürün yerleşimleri ziyaretçi akışını yönlendirecek şekilde planlanır.",
          "Birden fazla parçanın birleşmesiyle oluşan yapı, tak-çıkar mantığıyla yeniden düzenlenebilir. Böylece aynı stand farklı etkinliklerde farklı kombinasyonlarla kullanılabilir.",
        ],
      },
      {
        heading: "Neden Maxima?",
        body: [
          "Maxima standlar, geniş müşteri kitlelerine hitap eden fuar merkezlerinde marka algısını güçlendirmek isteyen işletmeler için idealdir. Gösterişli görünümüyle ziyaretçi trafiğini artırır, ürünlerinizi daha etkileyici şekilde sergilemenize yardımcı olur.",
          "Uzman tasarım ekibimizle hayalinizdeki standı ölçülerinize ve kurumsal kimliğinize göre planlıyor, sorunsuz bir fuar deneyimi yaşamanız için üretimden kuruluma tüm adımları üstleniyoruz.",
        ],
      },
    ],
  },
  "truss-stand": {
    sections: [
      {
        heading: "Truss Fuar Standı",
        body: [
          "Truss yapılar, üçgen formdaki çubukların birleşmesiyle yüksek taşıma kapasitesi sunan, estetik ve dayanıklı sistemlerdir. Alüminyum veya çelik malzemeden üretilen bu standlar, marka hikayenizi modern ve dikkat çekici bir dille anlatmanıza yardımcı olur.",
          "Fuarlarda ürünlerinizi sergilerken hem mühendislik gücünü hem de tasarım zarafetini aynı anda sunarak ziyaretçilerin ilgisini çeker.",
        ],
      },
      {
        heading: "Estetik Tasarım ve Çeşitlilik",
        body: [
          "Üçgen form, hem görsel olarak dinamik hem de yapısal olarak sağlam bir iskelet oluşturur. Truss sistemleri farklı yüksekliklerde, açılarda ve kombinasyonlarda kurgulanabildiği için her marka için özgün çözümler üretilebilir.",
          "Metalik parlaklık, ışıklandırma ve grafik panellerle birleştiğinde standınız bulunduğu alanda odak noktası haline gelir.",
        ],
      },
      {
        heading: "Hafiflik ve Modülerlik",
        body: [
          "Alüminyum ya da ince duvarlı çelik malzeme kullanımı, truss standları hafif ve taşınabilir kılar. Aynı set, farklı fuar alanlarına kolayca taşınıp yeniden kurulabilir.",
          "Modüler yapı sayesinde metrekare değiştikçe standı büyütmek veya küçültmek mümkündür; parçalar hızlı montaj/demontaj için optimize edilmiştir.",
        ],
      },
      {
        heading: "Teknoloji Entegrasyonu",
        body: [
          "Truss sistemleri LED ekranlar, interaktif paneller, ses sistemleri ve aydınlatma aksesuarlarını kolayca taşıyabilecek şekilde tasarlanır. Bu sayede ziyaretçilerinizle etkileşimi artıran deneyimler kurgulayabilirsiniz.",
        ],
      },
      {
        heading: "Dayanıklılık ve Çok Yönlülük",
        body: [
          "Alüminyum/çelik iskelet uzun ömürlü kullanım sunarken, tekrar tekrar kurulup sökülmeye uygun yapısı sayesinde bütçe dostudur.",
          "Sadece belirli bir sektöre değil, teknoloji, otomotiv, turizm, moda gibi pek çok endüstride kullanılabilecek kadar esnektir.",
          "Estetik, dayanıklılık, işlevsellik ve taşınabilirliği bir araya getirerek fuarlarda güçlü bir marka varlığı kurmanıza olanak sağlar.",
        ],
      },
    ],
  },
  "urun-teshir-standi": {
    sections: [
      {
        heading: "Ürün Teşhir Standı",
        body: [
          "Fuar, mağaza, etkinlik ve showroom gibi alanlarda kullanılan ürün teşhir standları; ziyaretçilere ürünleri fiziksel olarak inceleme, deneme ve karşılaştırma imkanı sunar. Marka deneyimini güçlendiren bu alanlar doğru kurgulandığında satış sürecine doğrudan katkı sağlar.",
          "Görsel çekicilik, fonksiyonellik ve markaya uygun malzeme seçimi bir arada düşünülerek tasarlanmalıdır.",
        ],
      },
      {
        heading: "Estetik ve Çekicilik",
        body: [
          "Renk paleti, malzeme dokusu ve genel form; ürünleri ön plana çıkaracak şekilde seçilmelidir. Estetik açıdan güçlü bir stand, ziyaretçilerin dikkatini hızla üzerine çeker.",
        ],
      },
      {
        heading: "İşlevsellik ve Modüler Tasarım",
        body: [
          "Standlar ürünleri düzenli sunmanın yanı sıra, müşterilerin rahatça inceleme yapmasına olanak vermelidir. Raf yükseklikleri, açılar, deneme alanları ve stok bölmeleri bu amaçla planlanır.",
          "Modüler tasarım, farklı boyutlara ve konfigürasyonlara uyum sağlayarak standın farklı mekanlara adapte olmasını kolaylaştırır. Ürün güncelleme ve yeniden düzenleme süreçleri pratik hale gelir.",
        ],
      },
      {
        heading: "Malzeme Seçimi ve Marka Kimliği",
        body: [
          "Ahşap, metal, cam, pleksi ya da plastik gibi malzemeler marka imajını yansıtacak biçimde kombinlenir. Renkler, logolar ve mesajlar tasarıma entegre edilerek markanın hikayesi anlatılır.",
        ],
      },
      {
        heading: "Teknoloji ve Taşınabilirlik",
        body: [
          "LED aydınlatmalar, interaktif ekranlar ve dijital içerikler ziyaretçilere etkileşimli deneyimler sunar. Hafif malzeme kullanımı ve kolay montaj/demontaj yapısı, standın farklı etkinliklere taşınmasını sağlar.",
        ],
      },
      {
        heading: "Hedef Kitle ve Geri Bildirim",
        body: [
          "Standın tasarımı hedef kitlenizin beklentilerine göre kurgulanmalıdır. Ziyaretçi davranışlarını ölçümlemek ve geri bildirim toplamak, sonraki stand tasarımlarını optimize etmek için kritik öneme sahiptir.",
          "Özenle tasarlanmış teşhir çözümleri, marka imajınızı güçlendirir ve hedef kitlenizle duygusal bağ kurmanıza yardımcı olur.",
        ],
      },
    ],
  },
};

export default async function StandDetailPage({
  params,
}: StandDetailPageProps) {
  const { slug } = await params;
  const stand = standTypes.find((item) => item.slug === slug);

  if (!stand) {
    notFound();
  }

  const related = stand.relatedStandTypes
    ?.map((slug) => standTypes.find((item) => item.slug === slug))
    .filter(Boolean);
  const detail = standDetailContent[slug];
  const description = stand.longDescription ?? stand.shortDescription;

  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-16 space-y-12 md:pt-44">
      <div className="rounded-lg bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl shadow-slate-900/30">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Stand Tipi
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
          {stand.name}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
      {detail ? (
        <div className="space-y-8">
          {detail.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-md border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {section.heading}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-6 list-disc space-y-2 pl-6 text-base text-slate-600">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      ) : (
        <>
          {stand.advantages && (
            <div className="rounded-md border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Avantajlar
              </h3>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                {stand.advantages.map((adv) => (
                  <li key={adv}>• {adv}</li>
                ))}
              </ul>
            </div>
          )}
          {stand.suitableFor && (
            <div className="rounded-md border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Kimler için uygun?
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                {stand.suitableFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {related && related.length > 0 && (
        <div className="rounded-md border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Alternatifler
          </h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {related.map(
              (item) =>
                item && (
                  <Link
                    key={item.id}
                    href={`/hizmetlerimiz/stand-tasarimi/${item.slug}`}
                    className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:border-slate-900"
                  >
                    {item.name}
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
