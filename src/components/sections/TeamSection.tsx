'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TEAM_MEMBERS } from '@/lib/constants';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Research Contributors"
          badgeVariant="teal"
          title="Multidisciplinary Research &"
          highlightText="Engineering Collaboration"
          subtitle="Orqis unites expertise across quantum information science, medical computer vision, clinical informatics, and patient-centered mobile design."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <Card
              key={i}
              variant="white"
              padding="lg"
              organic="subtle"
              className="border-slate-200/90 hover:border-teal-300 shadow-xs transition-all space-y-4 text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-teal-50 via-indigo-50 to-purple-50 border border-teal-100/80 flex items-center justify-center text-teal-700 font-bold text-lg shadow-2xs group-hover:scale-105 transition-transform">
                <span>{member.avatarPlaceholder}</span>
              </div>

              <div>
                <Badge variant={i === 0 ? 'quantum' : i === 1 ? 'teal' : i === 2 ? 'iris' : 'neutral'} size="sm">
                  {member.discipline}
                </Badge>
                <h3 className="text-base font-bold text-slate-900 mt-2">{member.role}</h3>
                <p className="text-xs font-semibold text-slate-500">{member.department}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {member.focus}
              </p>
            </Card>
          ))}
        </div>

        {/* Academic & Open Research Collaboration Banner */}
        <Card variant="stone" padding="md" organic="subtle" className="max-w-3xl mx-auto border-teal-100 text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-700">Open-Access Research Initiative</p>
          <p className="text-sm text-slate-700">
            Orqis is developed as an open scientific collaboration targeting peer-reviewed benchmarks in AI-assisted oral oncology triage and quantum circuit acceleration.
          </p>
        </Card>
      </div>
    </section>
  );
};
