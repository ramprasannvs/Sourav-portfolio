import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { additionalStrengths, educationList } from '../data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

export default function EducationStrengths() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-b border-blue-200/80 bg-gradient-to-br from-sky-100/70 via-blue-50 to-indigo-100/80 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Credentials"
            title="Education &amp; Additional Strengths"
            subtitle="Academic qualifications, technical certifications, typing proficiency, and core work attributes."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Reveal className="min-w-0" delay={40}>
            <Card className="h-full rounded-xl border-blue-200 bg-white/90 shadow-xs backdrop-blur-xs">
              <CardHeader className="p-4 pb-3 sm:p-6 sm:pb-4">
                <CardTitle className="text-base font-semibold text-navy-950 sm:text-lg">
                  Education &amp; Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Separator className="mb-4 bg-blue-100" />
                <ul className="divide-y divide-blue-100/80">
                  {educationList.map((edu) => (
                    <li
                      key={edu.credential}
                      className="flex flex-col justify-between gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                    >
                      <span className="font-heading text-sm font-semibold text-navy-900 sm:text-base">
                        {edu.credential}
                      </span>
                      <span className="text-xs font-medium text-blue-700 sm:text-right">
                        {edu.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="min-w-0" delay={80}>
            <Card className="h-full rounded-xl border-blue-200 bg-white/90 shadow-xs backdrop-blur-xs">
              <CardHeader className="p-4 pb-3 sm:p-6 sm:pb-4">
                <CardTitle className="text-base font-semibold text-navy-950 sm:text-lg">
                  Additional Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Separator className="mb-4 bg-blue-100" />
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {additionalStrengths.map((strength) => (
                    <div
                      key={strength.title}
                      className="rounded-lg border border-blue-200/80 bg-gradient-to-r from-blue-50/90 to-indigo-50/60 px-3.5 py-2.5 text-sm font-medium text-navy-900"
                    >
                      {strength.title}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
