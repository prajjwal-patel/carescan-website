'use client';

import React from 'react';
import { WORKFLOW_STAGES } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 bg-[#F8F6F2] dark:bg-[#0F0E0D] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-500 tracking-wide uppercase mb-3">
            Clinical Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            From photograph to clinical record
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            A seamless four-step pipeline designed so any nurse or community health worker
            can complete an accurate oral cancer screening in under a minute.
          </p>
        </div>

        {/* Numbered editorial steps */}
        <div className="space-y-0">
          {WORKFLOW_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-stone-200 dark:border-stone-800"
            >
              {/* Step number — font-body (Inter) forces clean zeros, no dotted-zero OpenType */}
              <div className="md:col-span-1 flex md:justify-end pt-1">
                <span
                  className="text-3xl font-bold text-stone-300 dark:text-stone-700 leading-none font-body"
                  style={{ fontFeatureSettings: '"zero" 0' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Step content */}
              <div className="md:col-span-7">
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 font-medium mb-3">
                  {stage.subtitle}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  {stage.description}
                </p>
                <ul className="space-y-1.5">
                  {stage.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <span className="text-cyan-700 dark:text-cyan-500 shrink-0 mt-0.5">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: technical highlight */}
              <div className="md:col-span-4">
                <div className="bg-[#FEFCF9] dark:bg-[#1A1917] border border-stone-200 dark:border-stone-800 rounded-lg p-4 text-xs font-mono text-stone-600 dark:text-stone-400">
                  <p className="text-[10px] font-sans font-semibold text-stone-400 dark:text-stone-600 uppercase tracking-wider mb-2">
                    {stage.badge}
                  </p>
                  {idx === 0 && (
                    <>
                      <p className="text-stone-500">Quality check: <span className="text-emerald-600 dark:text-emerald-500 font-semibold">On-device</span></p>
                      <p className="text-stone-500 mt-1">OpenCV blur + illumination validation</p>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <p className="text-stone-500">Lesion ROI: <span className="text-cyan-700 dark:text-cyan-500 font-semibold">0.5279 test IoU</span></p>
                      <p className="text-stone-500 mt-1">Output: 256×256 grayscale crop</p>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <p className="text-stone-500">Encoding: <span className="text-violet-600 dark:text-violet-400 font-semibold">2¹⁶ = 65,536 amplitudes</span></p>
                      <p className="text-stone-500 mt-1">p = (1 − ⟨Z_q⟩) / 2</p>
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      <p className="text-stone-500">Output: <span className="text-emerald-600 dark:text-emerald-500 font-semibold">calibrated p ∈ [0, 1]</span></p>
                      <p className="text-stone-500 mt-1">HL7 FHIR R4 · SNOMED CT 363349007</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <OrganicDivider position="bottom" fillColor="var(--warm-surface)" variant="wave" />
      </div>
    </section>
  );
};
