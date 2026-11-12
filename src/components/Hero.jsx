import { Download, Mail, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/downloadResume';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden border-b border-blue-900/40 bg-gradient-to-br from-navy-950 via-navy-900 to-blue-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300 sm:text-sm sm:tracking-[0.16em]">
              {profileData.title}
            </p>

            <h1 className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-white sm:mt-3 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {profileData.name}
            </h1>

            <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:mt-4 sm:text-base lg:text-lg">
              {profileData.heroIntroduction}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Button
                size="lg"
                onClick={downloadResumePdf}
                className="min-h-[46px] w-full bg-blue-600 text-white shadow-sm hover:bg-blue-500 sm:w-auto"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span>Download Resume</span>
              </Button>

              <a
                href="#contact"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20 sm:w-auto"
              >
                <Mail className="h-4 w-4 shrink-0 text-sky-300" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-300 sm:mt-7">
              <span className="font-medium text-slate-400">Email:</span>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex min-w-0 max-w-full items-center gap-1 font-medium text-sky-200 underline decoration-sky-400/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                <span className="break-all sm:truncate">{profileData.email}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-sky-300" />
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Card className="rounded-xl border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-sky-200">
                    Profile Summary
                  </h2>
                  <span className="text-xs font-medium text-slate-300">Resume Overview</span>
                </div>
                <Separator className="bg-white/15" />
                <dl className="divide-y divide-white/10 text-sm">
                  <div className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center sm:gap-4">
                    <dt className="shrink-0 font-medium text-slate-300">Primary Focus</dt>
                    <dd className="font-medium text-white sm:text-right">
                      Customer Support &amp; CSR
                    </dd>
                  </div>
                  <div className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center sm:gap-4">
                    <dt className="shrink-0 font-medium text-slate-300">Channels</dt>
                    <dd className="font-medium text-white sm:text-right">
                      Voice, Email &amp; Chat
                    </dd>
                  </div>
                  <div className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center sm:gap-4">
                    <dt className="shrink-0 font-medium text-slate-300">Time Zones</dt>
                    <dd className="font-medium text-white sm:text-right">EST, CST &amp; PST</dd>
                  </div>
                  <div className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center sm:gap-4">
                    <dt className="shrink-0 font-medium text-slate-300">Staffing &amp; Ops</dt>
                    <dd className="font-medium text-white sm:text-right">
                      US Recruiting &amp; Data Management
                    </dd>
                  </div>
                  <div className="flex flex-col justify-between gap-1 pt-3 sm:flex-row sm:items-center sm:gap-4">
                    <dt className="shrink-0 font-medium text-slate-300">Typing Speed</dt>
                    <dd className="font-medium text-white sm:text-right">
                      English &amp; Hindi – 60 WPM
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
