type SectionHeadingProps = {
  overline?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {overline && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{overline}</p>}
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {description && <p className="text-base text-slate-600">{description}</p>}
    </div>
  );
}
