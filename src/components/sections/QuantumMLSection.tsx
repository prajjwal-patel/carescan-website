'use client';

import React from 'react';
import { QUANTUM_CONCEPTS } from '@/lib/constants';
import { CircuitDiagram } from '../visual/CircuitDiagram';
import { OrganicDivider } from '../visual/OrganicDivider';

export const QuantumMLSection: React.FC = () => {
  return (
    <section id="quantum-ml" className="relative py-16 md:py-24 bg-[#F8F6F2] dark:bg-[#0F0E0D] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold text-violet-700 dark:text-violet-400 tracking-wide uppercase mb-3">
            Quantum Computing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight mb-4">
            Why a quantum classifier?
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
            Precancerous tissue conceals subtle patterns — variations in colour, texture,
            and cellular structure that often overlap with benign conditions. A classical
            neural network operates on a compressed representation of the image.
            Our 16-qubit Variational Quantum Classifier encodes all 65,536 pixels
            of the lesion crop directly into quantum amplitude — no lossy reduction —
            and evaluates complex correlations across the full state space simultaneously.
          </p>
        </div>

        {/* Quantum Circuit — scientific figure */}
        <div className="mb-14">
          <div className="quantum-figure">
            <CircuitDiagram />
          </div>
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-3 text-center">
            Figure: Interactive 16-qubit VQC circuit. Each wire represents one qubit;
            gate columns represent rotation and entanglement layers of the variational ansatz.
          </p>
        </div>

        {/* 4 quantum concepts — editorial list, no badge pills */}
        <div className="border-t border-stone-200 dark:border-stone-800 pt-12">
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-8">
            Core principles, plainly explained
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {QUANTUM_CONCEPTS.map((concept, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-3 mb-2">
                  <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {concept.title}
                  </h4>
                  {concept.formula && (
                    <code className="text-xs font-mono text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 px-1.5 py-0.5 rounded">
                      {concept.formula}
                    </code>
                  )}
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                  {concept.description}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed border-l-2 border-stone-200 dark:border-stone-700 pl-3 italic">
                  {concept.analogy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="var(--warm-surface)" variant="curve-2" />
      </div>
    </section>
  );
};
