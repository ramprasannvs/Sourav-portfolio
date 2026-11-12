import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { coreSkillGroups } from '../data/portfolioData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-indigo-200/80 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Core Skills"
            subtitle="Competencies in voice and non-voice customer communication, international time-zone coverage, and high-accuracy data management."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {coreSkillGroups.map((group, groupIdx) => (
            <Reveal key={group.groupTitle} className="min-w-0" delay={groupIdx * 60}>
              <Card className="h-full rounded-xl border-blue-200 bg-white/90 shadow-xs backdrop-blur-xs">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-navy-900 sm:text-base">
                    {group.groupTitle}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="rounded-lg border border-blue-200 bg-blue-50/90 px-3 py-1.5 text-xs font-medium text-navy-900 shadow-2xs transition-colors hover:border-blue-400 hover:bg-blue-100 sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
