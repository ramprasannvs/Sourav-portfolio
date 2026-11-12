import { useState } from 'react';
import { ArrowUp, Mail, Check, Copy } from 'lucide-react';
import { navigationLinks, profileData } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Column 1: Candidate identity & contact */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold tracking-wider text-navy-950">
                SR
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold tracking-tight text-white">
                  {profileData.displayName}
                </h3>
                <p className="truncate text-xs text-slate-400">
                  Customer Service Executive
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Customer-focused professional experienced in international voice and chat support, inbound and outbound calling, US staffing recruitment, and accurate data management.
            </p>

            <div className="mt-5 max-w-sm rounded-lg border border-white/10 bg-white/5 p-3 sm:p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Email
              </p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex min-w-0 items-center gap-2 text-xs font-medium text-white transition-colors hover:text-blue-300 sm:text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                  <span className="truncate">{profileData.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded bg-white/10 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Sections
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:grid-cols-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operational Scope */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Service Overview
            </h4>
            <dl className="mt-4 divide-y divide-white/10 text-sm">
              <div className="flex flex-col gap-0.5 pb-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-400">Time Zones</dt>
                <dd className="font-medium text-white sm:text-right">EST, CST &amp; PST</dd>
              </div>
              <div className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-400">Channels</dt>
                <dd className="font-medium text-white sm:text-right">Voice, Email &amp; Chat</dd>
              </div>
              <div className="flex flex-col gap-0.5 py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-400">Typing Speed</dt>
                <dd className="font-medium text-white sm:text-right">English &amp; Hindi – 60 WPM</dd>
              </div>
              <div className="flex flex-col gap-0.5 pt-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-slate-400">Platforms</dt>
                <dd className="font-medium text-white sm:text-right">JobDiva, QPro, MS Office</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-slate-400 sm:text-left">
            &copy; {currentYear} {profileData.displayName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
