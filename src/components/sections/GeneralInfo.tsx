import Image from "next/image";

export function GeneralInfo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-12">
        {/* Sol Taraf - Resim */}
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="/images/home/ness-sade.png"
            alt="Ness Fuarcılık"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Sağ Taraf - İçerik */}
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Trend Takibi ve Yenilikçi Çözümler
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Doğru Tasarlanmış Standlar
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Doğru tasarlanmış standlar, markaların ürünlerini en iyi şekilde
            sergilemelerine, müşterilerle etkileşimde bulunmalarına ve marka
            bilinirliğini artırmalarına yardımcı olan etkili pazarlama
            araçlarıdır. Standlarınızın özenle tasarlanması, marka imajınızı
            güçlendirecek ve hedef kitlenizle daha yakın bir bağ kurmanıza olanak
            tanıyacaktır.
          </p>
        </div>
      </div>
    </section>
  );
}

