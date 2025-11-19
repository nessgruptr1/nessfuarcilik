import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/services";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="space-y-8 py-10">
      <SectionHeading
        overline="Hizmet"
        title={service.name}
        description={service.shortDescription}
      />
      <div className="space-y-6">
        {service.contentBlocks.map((block, index) => {
          if (block.type === "text") {
            return (
              <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6">
                {block.title && (
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {block.title}
                  </p>
                )}
                <p className="mt-2 text-sm text-slate-600">{block.body}</p>
              </div>
            );
          }
          if (block.type === "list") {
            return (
              <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6">
                {block.title && (
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {block.title}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {block.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          }
          return (
            <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6">
              {block.title && (
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {block.title}
                </p>
              )}
              <div className="mt-4 grid gap-2 md:grid-cols-3">
                {block.images.map((image) => (
                  <div key={image.url} className="aspect-video rounded-2xl bg-slate-100" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
