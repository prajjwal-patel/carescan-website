'use client';

import React, { useState } from 'react';
import { TECH_TIERS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Smartphone, Layers, Atom, ShieldCheck } from 'lucide-react';

const TIER_ICONS = {
  Smartphone,
  Layers,
  Atom,
  ShieldCheck,
};

export const TechnologyStack: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('mobile');
  const active = TECH_TIERS.find((t) => t.id === selectedId) || TECH_TIERS[0];
  const ActiveIcon = TIER_ICONS[active.icon as keyof typeof TIER_ICONS] || Layers;

  return (
    <section id="technology" className="relative py-16 md:py-24 bg-[#FEFCF9] dark:bg-[#1A1917] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-3">
            The Technology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Four layers, working together
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
            CareScan connects a Flutter mobile client, a frozen MobileNet lesion localizer,
            a 16-qubit Variational Quantum Classifier, and hospital EHR integration into
            a single coherent pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Layer selector as plain list */}
          <div className="lg:col-span-4">
            <nav className="space-y-1">
              {TECH_TIERS.map((tier) => {
                const Icon = TIER_ICONS[tier.icon as keyof typeof TIER_ICONS] || Layers;
                const isActive = tier.id === selectedId;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedId(tier.id)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-stone-100 dark:bg-stone-800/80 text-stone-900 dark:text-stone-50'
                        : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800/40'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-700 dark:text-cyan-500' : ''}`} />
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold truncate ${isActive ? '' : ''}`}>{tier.title}</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500 truncate">{tier.tagline}</p>
                    </div>
                    {isActive && (
                      <span className="ml-auto w-1 h-1 rounded-full bg-cyan-700 dark:bg-cyan-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Active tier detail */}
          <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-stone-200 dark:border-stone-800 pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-cyan-700 dark:text-cyan-500">
                <ActiveIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">{active.title}</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">{active.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              {active.description}
            </p>

            {/* Specs as definition list */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">
                Specifications
              </p>
              <div className="divide-y divide-stone-100 dark:divide-stone-800">
                {active.specs.map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between gap-4">
                    <span className="text-sm text-stone-500 dark:text-stone-400">{spec.label}</span>
                    <span className="text-sm font-mono font-semibold text-stone-900 dark:text-stone-100 text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights as plain bullet list */}
            <div>
              <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">
                Key Capabilities
              </p>
              <ul className="space-y-2">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                    <span className="text-cyan-700 dark:text-cyan-500 shrink-0 mt-0.5">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="var(--warm-bg)" variant="curve-1" />
      </div>
    </section>
  );
};
