import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { experienceList } from '../data/portfolioData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-indigo-200/70 bg-gradient-to-b from-indigo-50/90 via-blue-50/70 to-sky-100/60 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Career History"
            title="Professional Experience"
            subtitle="Work record spanning customer service, US staffing recruitment, telecalling, and commercial operations."
          />
        </Reveal>

        <div className="space-y-4 sm:space-y-5">
          {experienceList.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 35}>
              <Card className="rounded-xl border-blue-200/80 border-l-4 border-l-blue-600 bg-white/90 shadow-xs transition-all hover:border-blue-300 hover:shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-baseline">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-base font-semibold text-navy-950 sm:text-lg">
                          {item.role}
                        </h3>
                        <Badge variant="accent">{item.category}</Badge>
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-600">{item.company}</p>
                    </div>

                    <span className="shrink-0 self-start rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800 sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-3.5 space-y-2 text-sm leading-relaxed text-slate-700">
                    {item.responsibilities.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
