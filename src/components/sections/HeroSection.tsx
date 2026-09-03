'use client';

import React from 'react';
import { HERO_METRICS } from '@/lib/constants';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { QuantumOrb } from '../visual/QuantumOrb';
import { OrganicDivider } from '../visual/OrganicDivider';
import { ArrowRight, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-indigo-50/30 to-white">
      {/* Background Soft Organic Radial Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-200/20 via-indigo-200/20 to-purple-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="teal" pulse size="md">
                Orqis Research Project • AI & Quantum Clinical Screening
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Intelligent Oral Screening with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">
                Orqis Quantum AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Orqis bridges frontline diagnostic gaps by uniting mobile intraoral imaging, deep convolutional feature extraction, and Variational Quantum Classifiers (VQC) for rapid, privacy-preserving triage.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a href="#sandbox" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon={<Sparkles className="w-4 h-4" />} className="w-full sm:w-auto shadow-md">
                  Explore Interactive Sandbox
                </Button>
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
                  How the Pipeline Operates
                </Button>
              </a>
            </div>

            {/* Trust & Spec Chips */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Zero Cloud PHI Retention
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-600" />
                8-Qubit Qiskit VQC Circuit
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                HL7 FHIR R4 Interoperable
              </span>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <QuantumOrb />
          </div>
        </div>

        {/* Hero Metrics Row */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_METRICS.map((metric, i) => (
            <Card
              key={i}
              variant="white"
              padding="sm"
              organic="subtle"
              className="text-center group hover:border-teal-200 transition-all"
            >
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                {metric.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {metric.label}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#FAFAF9" variant="curve-1" />
      </div>
    </section>
  );
};
