import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { aboutHighlights, coreServicePractices, profileData } from '../data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-blue-200/70 bg-gradient-to-br from-sky-50 via-blue-50/90 to-indigo-100/70 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title="Professional Background"
            subtitle="Experience spanning customer support, international communication, US staffing, and daily data operations."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="min-w-0 lg:col-span-7" delay={40}>
            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {profileData.professionalSummary}
              </p>

              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                {aboutHighlights.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-xl border-blue-200/80 bg-white/85 shadow-xs backdrop-blur-xs"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <h3 className="font-heading text-sm font-semibold text-navy-900 sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-5" delay={80}>
            <Card className="h-full rounded-xl border-navy-800 bg-navy-900 text-white shadow-md">
              <CardHeader className="p-4 pb-3 sm:p-6 sm:pb-4">
                <CardTitle className="text-base font-semibold text-white sm:text-lg">
                  Service &amp; Operational Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Separator className="mb-4 bg-white/15" />
                <ul className="space-y-3.5 text-sm leading-relaxed text-slate-200">
                  {coreServicePractices.map((practice, idx) => (
                    <li key={practice} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-blue-400/40 bg-blue-600/30 text-[11px] font-semibold text-sky-200">
                        {idx + 1}
                      </span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
