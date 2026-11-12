import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { toolsCategories } from '../data/portfolioData';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function Tools() {
  return (
    <section
      id="tools"
      className="scroll-mt-16 border-b border-blue-900/40 bg-gradient-to-b from-[#09172f] via-[#0d2243] to-[#071326] py-10 sm:py-16 lg:py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            dark
            eyebrow="Systems &amp; Platforms"
            title="Tools &amp; Technologies"
            subtitle="Office productivity applications, ATS/CRM platforms, and candidate sourcing portals."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {toolsCategories.map((group, idx) => (
            <Reveal
              key={group.category}
              className={`min-w-0 ${idx === 0 ? 'md:col-span-5' : 'md:col-span-7'}`}
              delay={idx * 60}
            >
              <Card className="h-full rounded-xl border-white/15 bg-white/10 text-white shadow-md backdrop-blur-xs">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-sky-300 sm:text-base">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((tool) => (
                      <Badge
                        key={tool.name}
                        className="rounded-lg border border-sky-400/30 bg-blue-950/70 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-sky-300 hover:bg-blue-900/80 sm:text-sm"
                      >
                        {tool.name}
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
