'use client';

import React from 'react';
import { PHILOSOPHY_PILLARS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { HeartHandshake, Eye, Lock, Shield } from 'lucide-react';

const ICONS = { HeartHandshake, Eye, Lock, Shield };

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-16 md:py-24 bg-[#FEFCF9] dark:bg-[#1A1917] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-3">
            Ethics &amp; Responsibility
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Clinical care, built on trust
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            Medical AI must be designed with clinical humility, strong privacy protections,
            and genuine respect for patient peace of mind. These are the principles that
            govern every decision in CareScan.
          </p>
        </div>

        {/* 4 pillars — no cards, clean text grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {PHILOSOPHY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] || Shield;
            return (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 text-cyan-700 dark:text-cyan-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                  <ul className="space-y-1.5">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-2 text-sm text-stone-700 dark:text-stone-300">
                        <span className="text-cyan-700 dark:text-cyan-500 shrink-0">—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="var(--warm-bg)" variant="wave" />
      </div>
    </section>
  );
};
