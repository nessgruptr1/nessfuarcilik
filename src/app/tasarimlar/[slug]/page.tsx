import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

type DesignDetailProps = {
  params: { slug: string };
};

export default function DesignDetailPage({ params }: DesignDetailProps) {
  const design = portfolioItems.find(
    (item) => item.slug === params.slug && item.type === "design",
  );

  if (!design) {
    notFound();
  }

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        overline={design.fairName}
        title={design.title}
        description={design.description}
      />
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-slate-100">
        <Image src={design.coverImage.url} alt={design.coverImage.alt} fill className="object-cover" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {design.gallery.map((image) => (
          <div key={image.url} className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Müşteri: {design.clientName}</p>
        <p>
          Konum: {design.city}, {design.country}
        </p>
        {design.areaM2 && <p>Alan: {design.areaM2} m²</p>}
        {design.tags && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
            {design.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
