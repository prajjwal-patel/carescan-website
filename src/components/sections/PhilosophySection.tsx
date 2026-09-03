'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PHILOSOPHY_PILLARS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { HeartHandshake, Eye, Lock, Shield, CheckCircle2 } from 'lucide-react';

const ICONS = {
  HeartHandshake: HeartHandshake,
  Eye: Eye,
  Lock: Lock,
  Shield: Shield,
};

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Design Ethics & Values"
          badgeVariant="teal"
          title="Human-Centered, Responsible"
          highlightText="Healthcare Innovation"
          subtitle="We believe medical artificial intelligence must be designed with deep clinical humility, radical privacy protections, and unwavering empathy for patient well-being."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS] || Shield;

            return (
              <Card
                key={i}
                variant="white"
                padding="lg"
                organic="subtle"
                className="border-slate-200/90 hover:border-teal-200 shadow-xs transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <Badge variant="teal">{pillar.tagline}</Badge>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{pillar.title}</h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-100">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#F8FAFC" variant="wave" />
      </div>
    </section>
  );
};
