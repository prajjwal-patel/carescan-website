'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { WORKFLOW_STAGES } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Camera, Cpu, Sparkles, FileCheck, Check, ArrowRight, ArrowDown } from 'lucide-react';

const ICONS = {
  Camera: Camera,
  Cpu: Cpu,
  Sparkles: Sparkles,
  FileCheck: FileCheck,
};

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStage = WORKFLOW_STAGES[activeStep];
  const CurrentIcon = ICONS[currentStage.icon as keyof typeof ICONS] || Sparkles;

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Conceptual Journey"
          badgeVariant="iris"
          title="From Image Capture to"
          highlightText="Clinical Clarity"
          subtitle="CareScan connects every phase into an organic, sequential screening workflow engineered for high throughput and patient peace of mind."
        />

        {/* 4 Connected Stages Nav Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const IconComp = ICONS[stage.icon as keyof typeof ICONS] || Sparkles;
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-3xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/80 border-indigo-500 shadow-sm ring-2 ring-indigo-500/20'
                    : 'bg-stone-50 border-slate-200/80 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <IconComp
                    className={`w-4 h-4 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`}
                  />
                </div>
                <p className={`text-sm font-bold ${isSelected ? 'text-indigo-950' : 'text-slate-800'}`}>
                  {stage.title}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {stage.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card for Active Stage */}
        <div className="max-w-4xl mx-auto">
          <Card variant="white" padding="lg" organic="subtle" className="border-indigo-100 shadow-md bg-gradient-to-br from-white via-indigo-50/20 to-teal-50/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Badge variant="iris">{currentStage.badge}</Badge>
                  <span className="text-xs font-mono font-bold text-slate-400">STAGE {currentStage.step} OF 04</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {currentStage.title} — {currentStage.subtitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="pt-2 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Highlights</p>
                  {currentStage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Next / Previous Controls */}
                <div className="pt-4 flex items-center gap-3">
                  {activeStep < 3 && (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      onClick={() => setActiveStep(activeStep + 1)}
                    >
                      Next: {WORKFLOW_STAGES[activeStep + 1].title}
                    </Button>
                  )}
                  {activeStep > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Back
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Visual Stage Representation */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-xs bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-indigo-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                    <CurrentIcon className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">{currentStage.title} Module</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Deterministic Pipeline Unit</p>
                  </div>

                  {/* Stage-specific visual preview element */}
                  {activeStep === 0 && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between font-mono text-[11px] text-slate-500">
                        <span>Framing Status:</span>
                        <span className="text-emerald-600 font-bold">Optimal</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full" />
                      </div>
                      <p className="text-[10px] text-slate-400 text-center pt-1">Automatic EXIF rotation & zoom lock</p>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs text-slate-600">
                      <div className="flex justify-between font-mono text-[11px] text-slate-500">
                        <span>Latent Tensor:</span>
                        <span className="text-indigo-600 font-bold">512 Dimensions</span>
                      </div>
                      <div className="font-mono text-[10px] text-slate-400 bg-white p-1.5 rounded-lg border border-slate-200">
                        [0.214, -0.089, 0.451, ...]
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="bg-purple-50 p-3 rounded-2xl border border-purple-200 text-left space-y-1.5 text-xs text-purple-900">
                      <div className="flex justify-between font-mono text-[11px] text-purple-700">
                        <span>Qubit Amplitude:</span>
                        <span className="text-purple-700 font-bold">8 Qubits (256)</span>
                      </div>
                      <div className="font-mono text-[10px] text-purple-600 bg-white p-1.5 rounded-lg border border-purple-200">
                        ⟨Z₀⟩ = +0.742 (Shots: 1024)
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-left space-y-1.5 text-xs text-emerald-900">
                      <div className="flex justify-between font-mono text-[11px] text-emerald-700">
                        <span>Clinical Triage:</span>
                        <span className="text-emerald-700 font-bold">Low Risk</span>
                      </div>
                      <div className="font-mono text-[10px] text-emerald-600 bg-white p-1.5 rounded-lg border border-emerald-200">
                        FHIR R4 Observation Ready
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#F8FAFC" variant="wave" />
      </div>
    </section>
  );
};
