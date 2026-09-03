'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { QUANTUM_CONCEPTS } from '@/lib/constants';
import { CircuitDiagram } from '../visual/CircuitDiagram';
import { OrganicDivider } from '../visual/OrganicDivider';
import { Atom, Zap, Shield, BookOpen } from 'lucide-react';

export const QuantumMLSection: React.FC = () => {
  return (
    <section id="quantum-ml" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Quantum Computing Research"
          badgeVariant="quantum"
          title="Harnessing Quantum Hilbert Spaces for"
          highlightText="Subtle Oncology Features"
          subtitle="Orqis investigates how Parameterized Quantum Circuits (VQC) can map complex multi-modal visual and clinical correlations into high-dimensional quantum states for superior boundary separation."
        />

        {/* Why Quantum Section Narrative Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="stone" padding="lg" organic="subtle" className="border-purple-100 bg-gradient-to-b from-purple-50/40 to-white">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Atom className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Exponential State Compression
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With 8 qubits, Orqis represents $2^8 = 256$ complex probability amplitudes simultaneously, allowing rich visual texture embeddings to be processed in parallel.
            </p>
          </Card>

          <Card variant="stone" padding="lg" organic="subtle" className="border-purple-100 bg-gradient-to-b from-purple-50/40 to-white">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Hardware-Aware Entanglement
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Linear CNOT cascades with circular boundary closure model complex cross-feature interactions between morphological lesion markers and clinical lifestyle history.
            </p>
          </Card>

          <Card variant="stone" padding="lg" organic="subtle" className="border-purple-100 bg-gradient-to-b from-purple-50/40 to-white">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Zero-Noise Extrapolation (ZNE)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Quantum error mitigation systematically scales intentional noise factors to extrapolate zero-noise ideal expectation values, ensuring robust classification on NISQ simulators.
            </p>
          </Card>
        </div>

        {/* Interactive Circuit Diagram Visualizer */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Interactive Orqis VQC Circuit Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                End-to-end Variational Quantum Classifier executed on Qiskit Aer
              </p>
            </div>
            <Badge variant="quantum" pulse>
              Live Interactive Schematic
            </Badge>
          </div>

          <CircuitDiagram />
        </div>

        {/* 4 Core Concepts Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Mathematical Foundations Made Intuitive
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Accessible conceptual models bridging quantum mechanics with clinical diagnostics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUANTUM_CONCEPTS.map((concept, i) => (
              <Card key={i} variant="white" padding="md" organic="subtle" className="border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="quantum">{concept.badge}</Badge>
                  {concept.formula && (
                    <code className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                      {concept.formula}
                    </code>
                  )}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{concept.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {concept.description}
                </p>
                <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <BookOpen className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Intuitive Analogy: </strong>
                    {concept.analogy}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#FAFAF9" variant="curve-2" />
      </div>
    </section>
  );
};
