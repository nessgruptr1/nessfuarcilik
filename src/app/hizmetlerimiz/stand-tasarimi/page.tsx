import Link from "next/link";
import { standTypes } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function StandDesignPage() {
  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="Stand Tasarımı"
        title="Doğru tasarlanmış standlar, markaların fuar başarısını hızlandırır."
        description="Ahşap, modüler, maxima, truss ve ürün teşhir çözümleriyle projeleri uçtan uca yönetiyoruz."
      />
      <div className="space-y-6">
        {standTypes.map((type) => (
          <Link
            key={type.id}
            href={`/hizmetlerimiz/stand-tasarimi/${type.slug}`}
            className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-900"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-slate-900">{type.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                İncele
              </span>
            </div>
            <p className="text-sm text-slate-600">{type.shortDescription}</p>
            {type.advantages && (
              <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                {type.advantages.map((adv) => (
                  <span key={adv} className="rounded-full border border-slate-200 px-3 py-1">
                    {adv}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
