import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'iris' | 'teal' | 'quantum' | 'neutral' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'iris',
  size = 'md',
  pulse = false,
  className = '',
}) => {
  const variantStyles = {
    iris: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    teal: 'bg-teal-50 text-teal-700 border-teal-200/80',
    quantum: 'bg-purple-50 text-purple-700 border-purple-200/80',
    neutral: 'bg-stone-100 text-stone-700 border-stone-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-800 border-amber-200/80',
    danger: 'bg-rose-50 text-rose-700 border-rose-200/80',
  };

  const dotColors = {
    iris: 'bg-indigo-600',
    teal: 'bg-teal-600',
    quantum: 'bg-purple-600',
    neutral: 'bg-stone-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs px-3.5 py-1 font-semibold tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
