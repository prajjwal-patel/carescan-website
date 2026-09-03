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
    <section id="technology" className="relative py-14 md:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="End-to-End Technology Architecture"
          badgeVariant="teal"
          title="Engineered for"
          highlightText="Clinical Precision & Accessibility"
          subtitle="Orqis connects frontline mobile devices, edge computer vision, and quantum algorithms directly to hospital healthcare records."
        />

        {/* 4 Tier Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
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
                    ? 'border-teal-600 shadow-sm ring-2 ring-teal-500/20'
                    : 'hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-tr from-teal-600 to-indigo-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-teal-700 rotate-90' : 'text-slate-400'
                    }`}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{tier.title}</h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{tier.tagline}</p>
              </Card>
            );
          })}
        </div>

        {/* Active Tier Deep-Dive Overview */}
        <Card variant="white" padding="lg" organic="subtle" className="border-teal-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Specs & Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant={activeTier.color === 'quantum' ? 'quantum' : activeTier.color === 'teal' ? 'teal' : 'iris'}>
                    {activeTier.tagline}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">{activeTier.title}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeTier.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Clinical & Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeTier.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specification Table */}
            <div className="lg:col-span-5 bg-stone-50 rounded-3xl p-5 border border-slate-200 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                System Specifications
              </h4>

              <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                {activeTier.specs.map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center gap-3">
                    <span className="text-slate-600 font-medium">{spec.label}</span>
                    <span className="font-mono font-bold text-slate-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-700 bg-white p-3 rounded-2xl border border-slate-200 leading-relaxed">
                <strong className="text-slate-900">Clinical Integration: </strong>
                Engineered for zero disruption to existing clinical hospital workflows and high patient privacy.
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-1" />
      </div>
    </section>
  );
};
