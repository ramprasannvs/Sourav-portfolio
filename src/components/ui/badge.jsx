import { cn } from '../../lib/utils';

export function Badge({ className = '', variant = 'default', ...props }) {
  const base =
    'inline-flex max-w-full items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors select-none whitespace-normal text-left';

  const variants = {
    default: 'bg-navy-900 text-white',
    secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'border border-slate-300 text-slate-700 bg-white',
    accent: 'bg-blue-50 text-blue-700 border border-blue-200',
  };

  return <span className={cn(base, variants[variant], className)} {...props} />;
}

