import { Separator } from './ui/separator';

export default function SectionHeader({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.14em] ${
              dark ? 'text-sky-300' : 'text-blue-700'
            }`}
          >
            {eyebrow}
          </p>
          <h2
            className={`mt-1 font-heading text-2xl font-bold tracking-tight sm:text-3xl ${
              dark ? 'text-white' : 'text-slate-950'
            }`}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            className={`max-w-md text-sm leading-relaxed sm:text-right ${
              dark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      <Separator className={`mt-4 ${dark ? 'bg-white/15' : 'bg-blue-200/80'}`} />
    </div>
  );
}
