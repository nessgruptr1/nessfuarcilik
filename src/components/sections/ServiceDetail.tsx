import Image from "next/image";
import type { Service } from "@/types/services";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const heroHasImage = Boolean(service.heroImage?.url);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-16 space-y-10 md:pt-48">
      <div className="relative overflow-hidden rounded-lg bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl shadow-slate-900/20">
        {heroHasImage && service.heroImage && (
          <>
            <Image
              src={service.heroImage.url}
              alt={service.heroImage.alt}
              fill
              priority
              className="object-cover opacity-30"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </>
        )}
        <div className="relative z-10 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Hizmet
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {service.name}
          </h1>
          {service.shortDescription && (
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
              {service.shortDescription}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {service.contentBlocks.map((block, index) => {
          if (block.type === "text") {
            return (
              <article
                key={`${block.title ?? "text"}-${index}`}
                className="rounded-md border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur"
              >
                {block.title && (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    {block.title}
                  </p>
                )}
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {block.body}
                </p>
              </article>
            );
          }
          if (block.type === "list") {
            return (
              <article
                key={`${block.title ?? "list"}-${index}`}
                className="rounded-md border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur"
              >
                {block.title && (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    {block.title}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-base text-slate-700">
                  {block.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            );
          }
          if (block.type === "image-grid") {
            return (
              <article
                key={`${block.title ?? "images"}-${index}`}
                className="rounded-md border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur"
              >
                {block.title && (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                    {block.title}
                  </p>
                )}
                <div className="mt-4 grid gap-2 md:grid-cols-3">
                  {block.images.map((image) => (
                    <div
                      key={image.url}
                      className="aspect-video rounded bg-slate-100"
                    />
                  ))}
                </div>
              </article>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}
