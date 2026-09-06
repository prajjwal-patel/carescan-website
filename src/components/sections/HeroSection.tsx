'use client';

import React from 'react';
import { HERO_METRICS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F8F6F2] dark:bg-[#0F0E0D] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial headline block */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-4">
            Oral Cancer Screening Research
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12] mb-6">
            Earlier detection.<br className="hidden sm:block" />
            Better outcomes for every community.
          </h1>

          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mb-8">
            CareScan equips primary health workers with AI-assisted oral cancer triage.
            A smartphone photograph, analysed by a frozen MobileNet localizer and a
            16-qubit Variational Quantum Classifier, produces a calibrated risk score
            and a hospital-ready FHIR record — in seconds.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#sandbox"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-semibold transition-colors"
            >
              Try the Triage Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#project"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Why this matters
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust line — plain inline text */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500 dark:text-stone-500 border-t border-stone-200 dark:border-stone-800 pt-5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
              Patient-level data partitioning
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              2,436 images · 328 patients · Peradeniya dataset
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              IBM Heron r2 evaluation · Phase D active
            </span>
          </div>
        </div>

        {/* Metrics — plain numbers, no cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 dark:border-stone-800 pt-10">
          {HERO_METRICS.map((metric, i) => (
            <div key={i}>
              <p className="editorial-stat text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-stone-700 dark:text-stone-300 mt-1">
                {metric.label}
              </p>
              <p className="text-[11px] text-stone-500 dark:text-stone-500 mt-0.5 leading-snug hidden sm:block">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <OrganicDivider position="bottom" fillColor="var(--warm-surface)" variant="curve-1" />
      </div>
    </section>
  );
};
