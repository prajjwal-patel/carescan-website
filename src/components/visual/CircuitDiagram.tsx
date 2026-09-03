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
    name: 'State Preparation (Amplitude Encoding)',
    type: 'State Preparation',
    math: '|ψ(x)⟩ = ∑ᵢ₌₀²⁵⁵ xᵢ |i⟩',
    description:
      'Encodes the 256-dimensional normalized visual feature vector into the probability amplitudes of 8 entangled qubits simultaneously.',
    clinicalImpact:
      'Compresses high-dimensional intraoral morphological textures without spatial resolution loss.',
  },
  rot: {
    name: 'Parameterized Rotations: Rz(ϕ) Ry(θ)',
    type: 'Variational Layer',
    math: 'U(θ, ϕ) = R_z(ϕ) R_y(θ)',
    description:
      'Single-qubit parameterized gates that rotate the state on the Bloch sphere according to weights trained by SPSA gradient optimization.',
    clinicalImpact:
      'Learns subtle non-linear decision boundaries between benign mucosa and dysplastic tissue.',
  },
  cnot: {
    name: 'Hardware-Aware CNOT Cascade',
    type: 'Entanglement Layer',
    math: 'CX(q_i, q_{i+1})',
    description:
      'Nearest-neighbor linear CNOT cascade with circular closure connecting adjacent qubits into a deeply correlated quantum state.',
    clinicalImpact:
      'Captures spatial and contextual correlations across different tissue quadrants and risk factors.',
  },
  readout: {
    name: 'Pauli-Z Expectation Readout',
    type: 'Measurement',
    math: '⟨Z₀⟩ = P(0) - P(1)  →  P_cancer = (1 - ⟨Z₀⟩) / 2',
    description:
      'Samples qubit 0 over 1,024 simulator shots to calculate the projection along the Z axis, mapping expectation value [-1, 1] to risk probability [0, 1].',
    clinicalImpact:
      'Outputs a continuous preliminary risk score subsequently calibrated into Low, Moderate, or High triage strata.',
  },
};

export const CircuitDiagram: React.FC = () => {
  const [selectedGate, setSelectedGate] = useState<string>('rot');

  const activeGate = GATE_DETAILS[selectedGate];

  const qubits = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full space-y-6">
      {/* Interactive Quantum Circuit SVG Card */}
      <Card variant="white" padding="md" className="overflow-x-auto border-slate-200">
        <div className="min-w-[760px] py-2">
          {/* Circuit Header / Legend */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-slate-700">
                8-Qubit Hardware-Aware VQC Architecture (Qiskit Engine)
              </span>
            </div>
            <span className="text-slate-400">Click any circuit block to inspect its mathematical role</span>
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
                    fill="#475569"
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    |q_{q}⟩
                  </text>

                  {/* Wire line */}
                  <line x1="55" y1={y} x2="720" y2={y} stroke="#CBD5E1" strokeWidth="1.5" />
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
                stroke={selectedGate === 'prep' ? '#4F46E5' : '#E2E8F0'}
                strokeWidth={selectedGate === 'prep' ? '2' : '1.5'}
                className="transition-all duration-200"
              />
              <text
                x="112"
                y="160"
                fill="#312E81"
                fontSize="12"
                fontWeight="700"
                textAnchor="middle"
                transform="rotate(-90 112 160)"
              >
                Amplitude State Prep |ψ(x)⟩
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
                      className="transition-all duration-200"
                    />
                    <text
                      x="220"
                      y={y + 4}
                      fill="#5B21B6"
                      fontSize="10"
                      fontWeight="600"
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
                stroke={selectedGate === 'cnot' ? '#0D9488' : '#E2E8F0'}
                strokeWidth={selectedGate === 'cnot' ? '2' : '1.5'}
                className="transition-all duration-200"
              />
              {qubits.slice(0, 7).map((q) => {
                const y1 = 35 + q * 38;
                const y2 = 35 + (q + 1) * 38;
                const x = 305 + (q % 3) * 25;
                return (
                  <g key={q}>
                    {/* Control dot */}
                    <circle cx={x} cy={y1} r="4" fill="#0D9488" />
                    {/* Vertical link */}
                    <line x1={x} y1={y1} x2={x} y2={y2} stroke="#0D9488" strokeWidth="1.5" />
                    {/* Target circle */}
                    <circle cx={x} cy={y2} r="6" fill="#FFFFFF" stroke="#0D9488" strokeWidth="1.5" />
                    <line x1={x - 4} y1={y2} x2={x + 4} y2={y2} stroke="#0D9488" strokeWidth="1.5" />
                    <line x1={x} y1={y2 - 4} x2={x} y2={y2 + 4} stroke="#0D9488" strokeWidth="1.5" />
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
                      className="transition-all duration-200"
                    />
                    <text
                      x="460"
                      y={y + 4}
                      fill="#5B21B6"
                      fontSize="10"
                      fontWeight="600"
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
                stroke={selectedGate === 'cnot' ? '#0D9488' : '#E2E8F0'}
                strokeWidth={selectedGate === 'cnot' ? '2' : '1.5'}
                className="transition-all duration-200"
              />
              <text
                x="570"
                y="160"
                fill="#0F766E"
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
                y="20"
                width="70"
                height="30"
                rx="6"
                fill={selectedGate === 'readout' ? '#FEF2F2' : '#FFFFFF'}
                stroke={selectedGate === 'readout' ? '#DC2626' : '#EF4444'}
                strokeWidth={selectedGate === 'readout' ? '2' : '1.5'}
                className="transition-all duration-200"
              />
              {/* Measurement icon representation */}
              <path d="M 660 40 A 10 10 0 0 1 680 40" stroke="#DC2626" strokeWidth="1.5" fill="none" />
              <line x1="670" y1="40" x2="676" y2="28" stroke="#DC2626" strokeWidth="1.5" />
              <text x="693" y="40" fill="#991B1B" fontSize="10" fontWeight="700">M(Z)</text>

              {/* Arrow out to classical register */}
              <line x1="710" y1="35" x2="740" y2="35" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="740,32 748,35 740,38" fill="#DC2626" />
              <text x="752" y="39" fill="#0F172A" fontSize="11" fontWeight="700" fontFamily="monospace">
                ⟨Z₀⟩
              </text>
            </g>
          </svg>
        </div>
      </Card>

      {/* Selected Gate Inspection Detail Panel */}
      <Card variant="stone" padding="md" className="border-indigo-100 bg-gradient-to-r from-indigo-50/40 via-white to-purple-50/30">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge variant={selectedGate === 'cnot' ? 'teal' : selectedGate === 'rot' ? 'quantum' : selectedGate === 'prep' ? 'iris' : 'danger'}>
                {activeGate.type}
              </Badge>
              <h4 className="text-base font-bold text-slate-900">{activeGate.name}</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{activeGate.description}</p>
            <div className="flex items-start gap-2 pt-1 text-xs text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/60">
              <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>
                <strong className="text-indigo-900">Clinical Purpose: </strong>
                {activeGate.clinicalImpact}
              </span>
            </div>
          </div>

          <div className="shrink-0 bg-white px-4 py-3 rounded-2xl border border-slate-200/80 shadow-xs">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Circuit Formulation
            </p>
            <code className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50/70 px-2.5 py-1 rounded-lg block">
              {activeGate.math}
            </code>
          </div>
        </div>
      </Card>
    </div>
  );
};
