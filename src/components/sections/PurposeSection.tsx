'use client';

import React from 'react';
import { PURPOSE_STATS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Clock, MapPin, AlertCircle } from 'lucide-react';

export const PurposeSection: React.FC = () => {
  return (
    <section id="project" className="relative py-16 md:py-24 bg-[#FEFCF9] dark:bg-[#1A1917] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial heading */}
        <div className="mb-14">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Oral cancer is curable when caught early.<br className="hidden md:block" />
            Most cases are not.
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
            In underserved communities, early precancerous lesions are routinely missed by
            non-specialist health workers with no diagnostic tools. By the time patients
            reach a specialist, curative options have often closed.
          </p>
        </div>

        {/* 3 impact stats — plain numbers, no card borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 pb-16 border-b border-stone-200 dark:border-stone-800">
          {PURPOSE_STATS.map((item, i) => (
            <div key={i}>
              <p className="editorial-stat text-4xl font-bold text-cyan-700 dark:text-cyan-500 mb-2">
                {item.stat}
              </p>
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column editorial comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Barriers */}
          <div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Why communities suffer from late-stage diagnoses
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              In small clinics and rural health posts, health workers must rely on unaided
              visual inspection. Early white patches (leukoplakia) look identical to harmless
              ulcers without specialist training or equipment.
            </p>
            <div className="space-y-5">
              {[
                {
                  Icon: Clock,
                  title: 'Prolonged referral delays',
                  body: 'Patients wait 6–12 weeks to see an oral oncology specialist at regional hospitals.',
                },
                {
                  Icon: MapPin,
                  title: 'Geographic isolation',
                  body: 'Rural clinics have no on-site biopsy or specialist diagnostic infrastructure.',
                },
                {
                  Icon: AlertCircle,
                  title: 'High diagnostic uncertainty',
                  body: 'Up to 40% of subtle dysplastic lesions are dismissed as benign trauma.',
                },
              ].map(({ Icon, title, body }, i) => (
                <div key={i} className="flex gap-3.5">
                  <Icon className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CareScan approach */}
          <div className="border-l-accent pl-8 border-l-2 border-cyan-700">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Standardised, point-of-care decision support
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              CareScan turns any smartphone into an objective triage companion. A photograph of
              the oral cavity is analysed on-device, producing a calibrated risk score and a
              complete referral summary — no specialist presence required.
            </p>
            <div className="space-y-5">
              {[
                {
                  title: 'Instant, objective triage',
                  body: 'Frozen MobileNet localizer crops the lesion ROI; a 16-qubit VQC produces the calibrated risk probability.',
                },
                {
                  title: 'Zero specialist dependency at capture',
                  body: 'Any trained community nurse can complete a screening in under one minute with no additional equipment.',
                },
                {
                  title: 'Hospital-ready records',
                  body: 'Results are automatically packaged as HL7 FHIR R4 Observation and RiskAssessment resources, ready for EHR upload.',
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="flex gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="var(--warm-bg)" variant="curve-2" />
      </div>
    </section>
  );
};
