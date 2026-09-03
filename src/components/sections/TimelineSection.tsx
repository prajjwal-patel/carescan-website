'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TIMELINE_MILESTONES } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { CheckCircle2, CircleDot, Clock } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="relative py-20 md:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Project Roadmap"
          badgeVariant="teal"
          title="The Evolution of the"
          highlightText="Orqis Research Initiative"
          subtitle="From initial clinical problem definition to hardware-aware quantum variational circuits and multi-center validation protocols."
        />

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-8 bottom-8 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-500 via-indigo-500 to-slate-300 hidden sm:block" />

          <div className="space-y-8">
            {TIMELINE_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.phase}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <Card
                      variant="white"
                      padding="md"
                      organic="subtle"
                      className="border-slate-200/90 shadow-xs hover:border-teal-300 transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            item.status === 'completed'
                              ? 'success'
                              : item.status === 'in-progress'
                              ? 'teal'
                              : 'neutral'
                          }
                          size="sm"
                          pulse={item.status === 'in-progress'}
                        >
                          {item.status === 'completed'
                            ? 'Completed'
                            : item.status === 'in-progress'
                            ? 'Active Research'
                            : 'Planned'}
                        </Badge>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {item.phase} • {item.quarter}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 space-y-1.5 border-t border-slate-100">
                        {item.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Center Node on Timeline */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-teal-600 items-center justify-center text-teal-600 shadow-sm z-10">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : item.status === 'in-progress' ? (
                      <CircleDot className="w-4 h-4 text-teal-600 animate-pulse" />
                    ) : (
                      <Clock className="w-4 h-4 text-slate-400" />
                    )}
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-1" />
      </div>
    </section>
  );
};
