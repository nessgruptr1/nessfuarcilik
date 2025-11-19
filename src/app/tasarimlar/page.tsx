import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function DesignsPage() {
  const designs = portfolioItems.filter((item) => item.type === "design");

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="3D Tasarımlar"
        title="Konsept ve avanstan final üretime hazır çizimler"
        description="Her kart ileride CMS üzerinden yönetilebilecek şekilde statik JSON'dan besleniyor."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {designs.map((item) => (
          <Link
            key={item.id}
            href={`/tasarimlar/${item.slug}`}
            className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              {item.fairName}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.city}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
