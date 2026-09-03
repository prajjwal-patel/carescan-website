import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'iris' | 'teal' | 'quantum' | 'neutral';
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'iris',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <div className={`mb-4 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-600 to-indigo-600">
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
