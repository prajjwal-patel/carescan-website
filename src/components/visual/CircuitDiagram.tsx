'use client';

import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Info, Sparkles } from 'lucide-react';

interface GateInfo {
  name: string;
  type: string;
  math: string;
  description: string;
  clinicalImpact: string;
}

const GATE_DETAILS: Record<string, GateInfo> = {
  prep: {
    name: '1. State Preparation (Encoding the Photo)',
    type: 'Input Encoding',
    math: '|ψ(x)⟩ = ∑ xᵢ |i⟩',
    description:
      'Compresses the 256 visual features from the oral photograph into the synchronized quantum states of 8 qubits at once.',
    clinicalImpact:
      'Preserves tiny textural subtleties in oral lesions without losing resolution or slowing down edge mobile devices.',
  },
  rot: {
    name: '2. Variational Rotations (Trained Diagnostic Weights)',
    type: 'Learned Weights',
    math: 'U(θ, ϕ) = R_z(ϕ) R_y(θ)',
    description:
      'Adjusts the orientation of quantum states based on trained clinical weights to separate benign mucosal tissue from precancerous changes.',
    clinicalImpact:
      'Acts like learned diagnostic filters, highlighting high-risk cellular patterns and ulcerated borders.',
  },
  cnot: {
    name: '3. Quantum Entanglement (Cross-Risk Consultation)',
    type: 'Feature Correlation',
    math: 'CX(qᵢ, qᵢ₊₁)',
    description:
      'Intertwines all 8 qubits so visual lesion markers, smoking habits, and betel nut usage are evaluated together as an interconnected profile.',
    clinicalImpact:
      'Catches combined risk combinations that single-factor tests miss (e.g. subtle white patch + heavy betel quid exposure).',
  },
  readout: {
    name: '4. Readout Measurement (Objective Triage Score)',
    type: 'Clinical Readout',
    math: '⟨Z₀⟩ → P = (1 - ⟨Z₀⟩) / 2',
    description:
      'Measures the final quantum state over 1,024 simulator iterations to calculate the definitive preliminary risk score.',
    clinicalImpact:
      'Produces a calibrated triage score (Low, Moderate, or High Risk) ready for instant specialist escalation.',
  },
};

export const CircuitDiagram: React.FC = () => {
  const [selectedGate, setSelectedGate] = useState<string>('rot');

  const activeGate = GATE_DETAILS[selectedGate];
  const qubits = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full space-y-4">
      {/* Interactive Quantum Circuit SVG Card */}
      <Card variant="white" padding="md" className="overflow-x-auto border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="min-w-[720px] py-1">
          {/* Circuit Header / Legend */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-slate-800 dark:text-slate-100">
                8-Qubit Variational Quantum Classifier (Qiskit Engine)
              </span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 font-medium">Click any circuit block to see what it does in plain language</span>
          </div>

          <svg viewBox="0 0 780 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background wire lanes */}
            {qubits.map((q) => {
              const y = 35 + q * 38;
              return (
                <g key={q}>
                  {/* Qubit Label */}
                  <text
                    x="15"
                    y={y + 4}
                    fill="#64748B"
                    className="dark:fill-slate-300"
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="700"
                  >
                    |q_{q}⟩
                  </text>

                  {/* Wire line */}
                  <line x1="55" y1={y} x2="720" y2={y} stroke="#CBD5E1" strokeWidth="1.5" className="dark:stroke-slate-700" />
                </g>
              );
            })}

            {/* BLOCK 1: Amplitude Encoding Column */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('prep')}
            >
              <rect
                x="65"
                y="15"
                width="95"
                height="305"
                rx="12"
                fill={selectedGate === 'prep' ? '#EEF2FF' : '#F8FAFC'}
                stroke={selectedGate === 'prep' ? '#4F46E5' : '#CBD5E1'}
                strokeWidth={selectedGate === 'prep' ? '2.5' : '1.5'}
                className="transition-all duration-200 dark:fill-slate-800/80 dark:stroke-slate-700"
              />
              <text
                x="112"
                y="160"
                fill="#312E81"
                className="dark:fill-indigo-300"
                fontSize="12"
                fontWeight="700"
                textAnchor="middle"
                transform="rotate(-90 112 160)"
              >
                1. Photo State Prep |ψ(x)⟩
              </text>
            </g>

            {/* BLOCK 2: Layer 1 Parameterized Rotations */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('rot')}
            >
              {qubits.map((q) => {
                const y = 35 + q * 38;
                return (
                  <g key={q}>
                    <rect
                      x="180"
                      y={y - 14}
                      width="80"
                      height="28"
                      rx="6"
                      fill={selectedGate === 'rot' ? '#EDE9FE' : '#FAF5FF'}
                      stroke={selectedGate === 'rot' ? '#7C3AED' : '#DDD6FE'}
                      strokeWidth={selectedGate === 'rot' ? '2' : '1'}
                      className="transition-all duration-200 dark:fill-purple-950/60 dark:stroke-purple-800"
                    />
                    <text
                      x="220"
                      y={y + 4}
                      fill="#5B21B6"
                      className="dark:fill-purple-300"
                      fontSize="10"
                      fontWeight="700"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      Ry(θ) Rz(ϕ)
                    </text>
                  </g>
                );
              })}
            </g>

            {/* BLOCK 3: CNOT Cascade 1 */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('cnot')}
            >
              <rect
                x="280"
                y="15"
                width="120"
                height="305"
                rx="12"
                fill={selectedGate === 'cnot' ? '#F0FDFA' : '#F8FAFC'}
                stroke={selectedGate === 'cnot' ? '#0D9488' : '#CBD5E1'}
                strokeWidth={selectedGate === 'cnot' ? '2.5' : '1.5'}
                className="transition-all duration-200 dark:fill-teal-950/40 dark:stroke-teal-800"
              />
              {qubits.slice(0, 7).map((q) => {
                const y1 = 35 + q * 38;
                const y2 = 35 + (q + 1) * 38;
                const x = 305 + (q % 3) * 25;
                return (
                  <g key={q}>
                    {/* Control dot */}
                    <circle cx={x} cy={y1} r="4.5" fill="#0D9488" />
                    {/* Vertical link */}
                    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#0D9488" strokeWidth="2" />
                    {/* Target circle */}
                    <circle cx={x} cy={y2} r="6" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2" />
                    <line x1={x - 4} y1={y2} x2={x + 4} y2={y2} stroke="#0D9488" strokeWidth="2" />
                    <line x1={x} y1={y2 - 4} x2={x} y2={y2 + 4} stroke="#0D9488" strokeWidth="2" />
                  </g>
                );
              })}
            </g>

            {/* BLOCK 4: Layer 2 Parameterized Rotations */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('rot')}
            >
              {qubits.map((q) => {
                const y = 35 + q * 38;
                return (
                  <g key={q}>
                    <rect
                      x="420"
                      y={y - 14}
                      width="80"
                      height="28"
                      rx="6"
                      fill={selectedGate === 'rot' ? '#EDE9FE' : '#FAF5FF'}
                      stroke={selectedGate === 'rot' ? '#7C3AED' : '#DDD6FE'}
                      strokeWidth={selectedGate === 'rot' ? '2' : '1'}
                      className="transition-all duration-200 dark:fill-purple-950/60 dark:stroke-purple-800"
                    />
                    <text
                      x="460"
                      y={y + 4}
                      fill="#5B21B6"
                      className="dark:fill-purple-300"
                      fontSize="10"
                      fontWeight="700"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      Ry(θ₂) Rz(ϕ₂)
                    </text>
                  </g>
                );
              })}
            </g>

            {/* BLOCK 5: CNOT Cascade 2 */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('cnot')}
            >
              <rect
                x="520"
                y="15"
                width="100"
                height="305"
                rx="12"
                fill={selectedGate === 'cnot' ? '#F0FDFA' : '#F8FAFC'}
                stroke={selectedGate === 'cnot' ? '#0D9488' : '#CBD5E1'}
                strokeWidth={selectedGate === 'cnot' ? '2.5' : '1.5'}
                className="transition-all duration-200 dark:fill-teal-950/40 dark:stroke-teal-800"
              />
              <text
                x="570"
                y="160"
                fill="#0F766E"
                className="dark:fill-teal-300"
                fontSize="11"
                fontWeight="700"
                textAnchor="middle"
                transform="rotate(-90 570 160)"
              >
                Circular Entanglement CX(q₇, q₀)
              </text>
            </g>

            {/* BLOCK 6: Measurement on Readout Qubit q_0 */}
            <g
              className="cursor-pointer group"
              onClick={() => setSelectedGate('readout')}
            >
              <rect
                x="640"
                y="18"
                width="74"
                height="34"
                rx="8"
                fill={selectedGate === 'readout' ? '#FEF2F2' : '#FFFFFF'}
                stroke={selectedGate === 'readout' ? '#DC2626' : '#EF4444'}
                strokeWidth={selectedGate === 'readout' ? '2.5' : '1.5'}
                className="transition-all duration-200 dark:fill-rose-950/50 dark:stroke-rose-700"
              />
              <path d="M 660 40 A 10 10 0 0 1 680 40" stroke="#DC2626" strokeWidth="1.5" fill="none" />
              <line x1="670" y1="40" x2="676" y2="28" stroke="#DC2626" strokeWidth="1.5" />
              <text x="688" y="40" fill="#991B1B" className="dark:fill-rose-300" fontSize="10" fontWeight="700">M(Z)</text>

              {/* Arrow out to classical register */}
              <line x1="714" y1="35" x2="744" y2="35" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="744,32 752,35 744,38" fill="#DC2626" />
              <text x="756" y="39" fill="#0F172A" className="dark:fill-slate-200" fontSize="11" fontWeight="700" fontFamily="monospace">
                ⟨Z₀⟩
              </text>
            </g>
          </svg>
        </div>
      </Card>

      {/* Selected Gate Inspection Detail Panel */}
      <Card variant="stone" padding="md" className="border-indigo-100 dark:border-indigo-950/60 bg-gradient-to-r from-indigo-50/50 via-white to-purple-50/40 dark:from-indigo-950/30 dark:via-slate-900 dark:to-purple-950/30 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge variant={selectedGate === 'cnot' ? 'teal' : selectedGate === 'rot' ? 'quantum' : selectedGate === 'prep' ? 'iris' : 'danger'}>
                {activeGate.type}
              </Badge>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{activeGate.name}</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{activeGate.description}</p>
            <div className="flex items-start gap-2 pt-1 text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
              <Info className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-white">Clinical Purpose: </strong>
                {activeGate.clinicalImpact}
              </span>
            </div>
          </div>

          <div className="shrink-0 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Mathematical Formulation
            </p>
            <code className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-1 rounded-lg block border border-transparent dark:border-indigo-800/50">
              {activeGate.math}
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
};
