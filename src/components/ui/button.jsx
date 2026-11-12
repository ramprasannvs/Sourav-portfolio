import { cn } from '../../lib/utils';

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none';

  const variants = {
    default: 'bg-navy-900 text-white shadow-xs hover:bg-navy-800 active:scale-[0.99]',
    outline:
      'border border-slate-300 bg-white text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-400 active:scale-[0.99]',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-[0.99]',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    link: 'text-blue-700 underline-offset-4 hover:underline p-0 h-auto',
  };

  const sizes = {
    default: 'h-10 px-4 py-2 rounded-lg',
    sm: 'h-9 px-3 rounded-md text-xs',
    lg: 'h-11 px-6 rounded-lg text-sm font-semibold',
    icon: 'h-10 w-10 rounded-lg',
  };

  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

