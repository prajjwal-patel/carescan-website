import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  // Legacy props kept for backward compatibility but no longer rendered
  badge?: string;
  badgeVariant?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
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
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.18]">
        {title}{' '}
        {highlightText && (
          <span className="text-cyan-700 dark:text-cyan-500">
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};
