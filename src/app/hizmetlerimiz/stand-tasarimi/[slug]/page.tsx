import { notFound } from "next/navigation";
import Link from "next/link";
import { standTypes } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

type StandDetailPageProps = {
  params: { slug: string };
};

export default function StandDetailPage({ params }: StandDetailPageProps) {
  const stand = standTypes.find((item) => item.slug === params.slug);

  if (!stand) {
    notFound();
  }

  const related = stand.relatedStandTypes
    ?.map((slug) => standTypes.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="Stand Tipi"
        title={stand.name}
        description={stand.longDescription ?? stand.shortDescription}
      />
      {stand.advantages && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Avantajlar
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {stand.advantages.map((adv) => (
              <li key={adv}>• {adv}</li>
            ))}
          </ul>
        </div>
      )}
      {stand.suitableFor && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Kimler için uygun?
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            {stand.suitableFor.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {related && related.length > 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
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
                ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
