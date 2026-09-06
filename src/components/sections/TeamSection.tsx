'use client';

import React from 'react';
import { TEAM_MEMBERS } from '@/lib/constants';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-16 md:py-24 bg-[#FEFCF9] dark:bg-[#1A1917] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-3">
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Clinicians, engineers, and researchers
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            CareScan unites oncology informatics, quantum computing, and mobile engineering
            toward a single goal — accessible, accurate oral cancer screening.
          </p>
        </div>

        {/* Team grid — minimal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* Monogram avatar */}
              <div className="w-12 h-12 rounded-full border-2 border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 font-bold text-sm bg-stone-50 dark:bg-stone-800">
                {member.avatarPlaceholder}
              </div>
              <div>
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-500 mb-0.5">
                  {member.discipline}
                </p>
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {member.role}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                  {member.department}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {member.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Research note — plain editorial text */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-8">
          <p className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl">
            <span className="font-semibold text-stone-700 dark:text-stone-300">Open scientific research.</span>{' '}
            CareScan is developed as an open academic collaboration targeting peer-reviewed
            clinical benchmarks in frontline AI oral triage and hardware-aware quantum acceleration.
          </p>
        </div>
      </div>
    </section>
  );
};
