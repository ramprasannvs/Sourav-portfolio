import { cn } from '../../lib/utils';

export function TabsList({ className = '', children }) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-slate-100/80 p-1',
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ active, onClick, className = '', children }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-all sm:text-sm',
        active
          ? 'bg-white text-slate-950 shadow-2xs ring-1 ring-slate-200/80'
          : 'text-slate-600 hover:text-slate-900',
        className
      )}
    >
      {children}
    </button>
  );
}

