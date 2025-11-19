import { clientReferences } from "@/data/references";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ReferencesPage() {
  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline="Referanslar"
        title="Yıllardır birlikte büyüdüğümüz markalar"
        description="Farklı sektörlerde yüzlerce projeyi tek proje yönetimi altında koordine ediyoruz."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {clientReferences.map((client) => (
          <div key={client.id} className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-lg font-semibold text-slate-900">{client.name}</p>
            {client.sector && <p className="text-sm text-slate-500">{client.sector}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
