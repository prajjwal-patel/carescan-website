import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'stone' | 'glass' | 'dark' | 'interactive';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  organic?: 'none' | 'subtle' | 'pill';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  padding = 'md',
  organic = 'none',
  className = '',
  onClick,
}) => {
  const variantStyles = {
    white: 'bg-white border border-slate-200/80 shadow-xs hover:border-slate-300/90',
    stone: 'bg-stone-50 border border-stone-200/80 shadow-xs',
    glass: 'glass-card shadow-sm',
    dark: 'glass-dark text-white border-slate-700/60 shadow-lg',
    interactive:
      'bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-300 hover:-translate-y-0.5 cursor-pointer transition-all duration-200',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4 md:p-5',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  const organicStyles = {
    none: 'rounded-2xl md:rounded-3xl',
    subtle: 'rounded-organic-1',
    pill: 'rounded-3xl',
  };

  return (
    <div
      onClick={onClick}
      className={`transition-all duration-200 ${variantStyles[variant]} ${paddingStyles[padding]} ${organicStyles[organic]} ${className}`}
    >
      {children}
    </div>
  );
};
