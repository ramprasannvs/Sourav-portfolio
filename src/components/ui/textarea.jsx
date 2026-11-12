import { cn } from '../../lib/utils';

export function Textarea({ className = '', error = false, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[112px] w-full rounded-lg border bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        error
          ? 'border-red-400 focus-visible:border-red-500 focus-visible:ring-red-100'
          : 'border-slate-300 focus-visible:border-blue-600 focus-visible:ring-blue-100',
        className
      )}
      {...props}
    />
  );
}

