import Link from "next/link";
import { pressItems } from "@/data/references";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PressPage() {
  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="Basında Biz"
        title="Trend raporlarında yer alan projeler"
        description="Stand tasarımındaki yaklaşımımız ulusal ve uluslararası yayınlarda yer aldı."
      />
      <div className="space-y-4">
        {pressItems.map((press) => (
          <Link
            key={press.id}
            href={press.url ?? "#"}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {press.source} · {press.date}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{press.title}</h3>
            {press.excerpt && <p className="text-sm text-slate-600">{press.excerpt}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
