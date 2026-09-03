'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TECH_TIERS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Smartphone, Layers, Atom, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const TIER_ICONS = {
  Smartphone: Smartphone,
  Layers: Layers,
  Atom: Atom,
  ShieldCheck: ShieldCheck,
};

export const TechnologyStack: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>('mobile');

  const activeTier = TECH_TIERS.find((t) => t.id === selectedTierId) || TECH_TIERS[0];
  const ActiveIcon = TIER_ICONS[activeTier.icon as keyof typeof TIER_ICONS] || Layers;

  return (
    <section id="technology" className="relative py-20 md:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="System Architecture"
          badgeVariant="quantum"
          title="Modular, Multi-Tier"
          highlightText="Healthcare Engineering"
          subtitle="CareScan decouples user acquisition, computer vision embeddings, quantum state classification, and clinical reporting into independently testable and verifiable subsystems."
        />

        {/* 4 Tier Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_TIERS.map((tier) => {
            const Icon = TIER_ICONS[tier.icon as keyof typeof TIER_ICONS] || Layers;
            const isSelected = selectedTierId === tier.id;

            return (
              <Card
                key={tier.id}
                variant={isSelected ? 'white' : 'stone'}
                padding="md"
                organic="subtle"
                onClick={() => setSelectedTierId(tier.id)}
                className={`cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-indigo-600 rotate-90' : 'text-slate-400'
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900">{tier.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{tier.tagline}</p>
              </Card>
            );
          })}
        </div>

        {/* Active Tier Deep-Dive Overview */}
        <Card variant="white" padding="lg" organic="subtle" className="border-indigo-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Specs & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant={activeTier.color === 'quantum' ? 'quantum' : activeTier.color === 'teal' ? 'teal' : 'iris'}>
                    {activeTier.tagline}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeTier.title}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeTier.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTier.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specification Table */}
            <div className="lg:col-span-5 bg-stone-50 rounded-3xl p-6 border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Technical Specifications
              </h4>

              <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                {activeTier.specs.map((spec, i) => (
                  <div key={i} className="py-3 flex justify-between items-center gap-4">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="font-mono font-bold text-slate-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-600 bg-white p-3 rounded-2xl border border-slate-200/60 leading-relaxed">
                <strong className="text-slate-700">Decoupled Architecture: </strong>
                This subsystem communicates across clean service interfaces with zero tight coupling.
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-1" />
      </div>
    </section>
  );
};
