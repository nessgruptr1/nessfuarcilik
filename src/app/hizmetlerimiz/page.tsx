import Link from "next/link";
import { services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        description="Stand tasarımından iç mekana uzanan uçtan uca hizmet zinciri"
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }]}
      />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetlerimiz/${service.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {service.slug.replace(/-/g, " ")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
