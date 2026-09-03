'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { WORKFLOW_STAGES } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Camera, Cpu, Sparkles, FileCheck, Check, ArrowRight } from 'lucide-react';

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
    <section id="how-it-works" className="relative py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="Simple 4-Step Journey"
          badgeVariant="teal"
          title="How Orqis Works:"
          highlightText="From Smartphone Photo to Clinical Triage"
          subtitle="A seamless, guided workflow designed so any nurse, community health worker, or patient can perform an accurate screening in under a minute."
        />

        {/* 4 Connected Stages Nav Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const IconComp = ICONS[stage.icon as keyof typeof ICONS] || Sparkles;
            const isSelected = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-50 border-teal-600 shadow-xs ring-2 ring-teal-500/20'
                    : 'bg-stone-50/80 border-slate-200 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {stage.step}
                  </span>
                  <IconComp
                    className={`w-4 h-4 ${isSelected ? 'text-teal-700' : 'text-slate-500'}`}
                  />
                </div>
                <p className={`text-sm font-bold ${isSelected ? 'text-teal-950' : 'text-slate-900'}`}>
                  {stage.title}
                </p>
                <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                  {stage.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card for Active Stage */}
        <div className="max-w-4xl mx-auto">
          <Card variant="white" padding="lg" organic="subtle" className="border-teal-200 shadow-sm bg-gradient-to-br from-white via-teal-50/20 to-indigo-50/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Badge variant="teal">{currentStage.badge}</Badge>
                  <span className="text-xs font-mono font-bold text-slate-500">STAGE {currentStage.step} OF 04</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentStage.title} — {currentStage.subtitle}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="pt-2 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Highlights</p>
                  {currentStage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Next / Previous Controls */}
                <div className="pt-3 flex items-center gap-3">
                  {activeStep < 3 && (
                    <Button
                      variant="secondary"
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
                <div className="w-full max-w-xs bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-3.5 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-teal-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm">
                    <CurrentIcon className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{currentStage.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">Orqis Intelligent Pipeline</p>
                  </div>

                  {/* Stage-specific visual preview element */}
                  {activeStep === 0 && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs text-slate-700">
                      <div className="flex justify-between font-mono text-[11px] text-slate-600">
                        <span>Framing Guide:</span>
                        <span className="text-emerald-700 font-bold">Sharp Focus</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full w-full" />
                      </div>
                      <p className="text-[10px] text-slate-600 text-center pt-0.5">Automatic illumination and distance check</p>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs text-slate-700">
                      <div className="flex justify-between font-mono text-[11px] text-slate-600">
                        <span>Tissue Embedding:</span>
                        <span className="text-teal-700 font-bold">512 Features</span>
                      </div>
                      <div className="font-mono text-[10px] text-slate-600 bg-white p-1.5 rounded-lg border border-slate-200">
                        Extracts color, texture, & border morphology
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="bg-purple-50 p-3 rounded-2xl border border-purple-200 text-left space-y-1.5 text-xs text-purple-950">
                      <div className="flex justify-between font-mono text-[11px] text-purple-800">
                        <span>Quantum Ansatz:</span>
                        <span className="text-purple-800 font-bold">8-Qubit VQC</span>
                      </div>
                      <div className="font-mono text-[10px] text-purple-700 bg-white p-1.5 rounded-lg border border-purple-200">
                        Evaluates multi-dimensional risk in Hilbert space
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-left space-y-1.5 text-xs text-emerald-950">
                      <div className="flex justify-between font-mono text-[11px] text-emerald-800">
                        <span>Clinical Triage:</span>
                        <span className="text-emerald-800 font-bold">Calibrated Score</span>
                      </div>
                      <div className="font-mono text-[10px] text-emerald-700 bg-white p-1.5 rounded-lg border border-emerald-200">
                        HL7 FHIR Clinical Referral Generated
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#F8FAFC" variant="wave" />
      </div>
    </section>
  );
};
