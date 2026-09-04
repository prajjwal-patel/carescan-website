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
    <section id="journey" className="relative py-14 md:py-20 bg-slate-50/70 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="Research & Clinical Roadmap"
          badgeVariant="teal"
          title="The Journey of the"
          highlightText="Orqis Healthcare Initiative"
          subtitle="From clinical problem definition to hardware-aware quantum variational circuits and upcoming community field trials."
        />

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-500 via-indigo-500 to-slate-300 dark:to-slate-700 hidden sm:block" />

          <div className="space-y-6">
            {TIMELINE_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.phase}
                  className={`relative flex flex-col sm:flex-row items-center gap-4 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <Card
                      variant="white"
                      padding="md"
                      organic="subtle"
                      className="border-slate-200 dark:border-slate-800 shadow-2xs hover:border-teal-400 dark:hover:border-teal-600 transition-all space-y-2.5"
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
                            ? 'Active Phase'
                            : 'Planned'}
                        </Badge>
                        <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                          {item.phase} • {item.quarter}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">{item.title}</h3>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-body">
                        {item.description}
                      </p>

                      <div className="pt-1.5 space-y-1 border-t border-slate-100 dark:border-slate-800">
                        {item.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200 font-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Center Node on Timeline */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-400 items-center justify-center text-teal-600 dark:text-teal-400 shadow-2xs z-10">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : item.status === 'in-progress' ? (
                      <CircleDot className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 animate-pulse" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
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

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="var(--warm-surface)" variant="curve-1" />
      </div>
    </section>
  );
};
