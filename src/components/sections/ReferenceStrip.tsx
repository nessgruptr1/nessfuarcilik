import { clientReferences } from "@/data/references";

export function ReferenceStrip() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
        Bize güvenen markalar
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-4">
        {clientReferences.map((ref) => (
          <div key={ref.id} className="rounded-2xl border border-dashed border-slate-200 p-4 text-center text-sm font-medium text-slate-600">
            {ref.name}
          </div>
        ))}
      </div>
    </section>
  );
}
