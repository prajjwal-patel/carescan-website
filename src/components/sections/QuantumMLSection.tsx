'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { QUANTUM_CONCEPTS } from '@/lib/constants';
import { CircuitDiagram } from '../visual/CircuitDiagram';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Atom, Zap, Shield, BookOpen, Sparkles } from 'lucide-react';

export const QuantumMLSection: React.FC = () => {
  return (
    <section id="quantum-ml" className="relative py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="The Breakthrough Technology"
          badgeVariant="quantum"
          title="Why Quantum Computing Powers"
          highlightText="Our Oral Cancer Screening"
          subtitle="Precancerous tissue hides subtle microscopic patterns that classical computer vision can overlook. Orqis uses quantum mechanics to analyze complex biological correlations simultaneously."
        />

        {/* Why Quantum Narrative Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card variant="stone" padding="md" organic="subtle" className="border-purple-200/80 bg-gradient-to-b from-purple-50/40 via-white to-white shadow-xs">
            <div className="w-9 h-9 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <Atom className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Simultaneous Pattern Analysis
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              With 8 qubits, Orqis explores 256 tissue feature combinations at the exact same instant, identifying subtle irregularities across color, texture, and cellular shape.
            </p>
          </Card>

          <Card variant="stone" padding="md" organic="subtle" className="border-teal-200/80 bg-gradient-to-b from-teal-50/40 via-white to-white shadow-xs">
            <div className="w-9 h-9 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Interconnected Risk Detection
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Quantum entanglement models how tobacco, betel quid, and lesion texture interact together, making triage much more accurate than checking individual risk factors separately.
            </p>
          </Card>

          <Card variant="stone" padding="md" organic="subtle" className="border-indigo-200/80 bg-gradient-to-b from-indigo-50/40 via-white to-white shadow-xs">
            <div className="w-9 h-9 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Noise-Resilient Accuracy
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Equipped with Zero-Noise Extrapolation (ZNE) error mitigation, ensuring dependable, clinical-grade precision whether run on local simulators or cloud quantum hardware.
            </p>
          </Card>
        </div>

        {/* Interactive Circuit Diagram Visualizer */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Interactive Quantum Circuit Visualizer
              </h3>
              <p className="text-xs text-slate-600">
                See how an intraoral photograph transforms through the 8-qubit quantum classifier
              </p>
            </div>
            <Badge variant="quantum" pulse size="sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Interactive Circuit
            </Badge>
          </div>

          <CircuitDiagram />
        </div>

        {/* 4 Core Concepts Grid */}
        <div className="space-y-5 pt-2">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Quantum Principles Explained Simply
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              How fundamental quantum physics empowers earlier, clearer clinical triage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUANTUM_CONCEPTS.map((concept, i) => (
              <Card key={i} variant="white" padding="md" organic="subtle" className="border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="quantum">{concept.badge}</Badge>
                  {concept.formula && (
                    <code className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                      {concept.formula}
                    </code>
                  )}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">{concept.title}</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5">
                  {concept.description}
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <BookOpen className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Everyday Analogy: </strong>
                    {concept.analogy}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#FAFAF9" variant="curve-2" />
      </div>
    </section>
  );
};
