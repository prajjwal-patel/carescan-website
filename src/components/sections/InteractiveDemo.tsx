'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TEST_CASE_PRESETS, calculateSimulatedRisk } from '@/lib/mockData';
import { OrganicDivider } from '../visual/OrganicDivider';
import {
  Info,
} from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(TEST_CASE_PRESETS[0].id);
  const [smoking, setSmoking] = useState<boolean>(false);
  const [alcohol, setAlcohol] = useState<boolean>(false);
  const [betelQuid, setBetelQuid] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'triage' | 'fhir'>('triage');

  const selectedPreset =
    TEST_CASE_PRESETS.find((p) => p.id === selectedPresetId) || TEST_CASE_PRESETS[0];

  // Sync default lifestyle factors when preset changes
  const handleSelectPreset = (presetId: string) => {
    setSelectedPresetId(presetId);
    const p = TEST_CASE_PRESETS.find((item) => item.id === presetId);
    if (p) {
      setSmoking(p.lifestyle.smoking);
      setAlcohol(p.lifestyle.alcohol);
      setBetelQuid(p.lifestyle.betelQuid);
    }
  };

  const simulation = calculateSimulatedRisk(selectedPreset, {
    smoking,
    alcohol,
    betelQuid,
  });

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'High':
        return <Badge variant="danger" pulse>High Risk Triage</Badge>;
      case 'Moderate':
        return <Badge variant="warning" pulse>Moderate Risk Triage</Badge>;
      default:
        return <Badge variant="success">Low Risk Triage</Badge>;
    }
  };

  const simulatedFhirObservation = {
    resourceType: 'Observation',
    id: `obs-orqis-${selectedPreset.id}`,
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '363349007',
          display: 'Malignant tumor of oral cavity (screening)',
        },
      ],
      text: 'Orqis AI & Quantum Oral Screening Risk Assessment',
    },
    valueQuantity: {
      value: simulation.finalProb,
      unit: 'probability',
      system: 'http://unitsofmeasure.org',
      code: '1',
    },
    interpretation: [
      {
        coding: [
          {
            code: simulation.riskLevel === 'High' ? 'POS' : simulation.riskLevel === 'Moderate' ? 'OBS' : 'NEG',
            display: simulation.riskLevel,
          },
        ],
        text: simulation.riskLevel,
      },
    ],
    note: [{ text: simulation.recommendation }],
  };

  return (
    <section id="sandbox" className="relative py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="Client-Side Demonstration"
          badgeVariant="teal"
          title="Interactive Conceptual"
          highlightText="Screening Sandbox"
          subtitle="Experience how Orqis conceptually fuses image embeddings, lifestyle risk vectors, and Variational Quantum expectation values without sending data to any external server."
        />

        {/* Sandbox Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Preset Selection & Lifestyle Toggles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Presets */}
            <Card variant="white" padding="md" organic="subtle" className="border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 1 • Select Clinical Test Case
                </span>
                <span className="text-[11px] text-teal-600 font-semibold">Synthetic Preset</span>
              </div>

              <div className="space-y-2.5">
                {TEST_CASE_PRESETS.map((preset) => {
                  const isSelected = preset.id === selectedPresetId;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal-50/80 border-teal-500 ring-2 ring-teal-500/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900">{preset.name}</span>
                        <Badge
                          variant={preset.riskLevel === 'High' ? 'danger' : preset.riskLevel === 'Moderate' ? 'warning' : 'neutral'}
                          size="sm"
                        >
                          {preset.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{preset.clinicalDescription}</p>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Lifestyle Auxiliary Risk Toggles */}
            <Card variant="white" padding="md" organic="subtle" className="border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Step 2 • Auxiliary Risk Factor Toggles
                </span>
                <span className="text-[11px] text-teal-600 font-semibold">Multimodal Channels</span>
              </div>

              <div className="space-y-3 pt-1">
                {[
                  {
                    label: 'Tobacco / Cigarette Smoking',
                    desc: 'Regular consumption (>5 pack-years)',
                    checked: smoking,
                    setter: setSmoking,
                  },
                  {
                    label: 'Regular Alcohol Consumption',
                    desc: 'Moderate to heavy alcohol intake',
                    checked: alcohol,
                    setter: setAlcohol,
                  },
                  {
                    label: 'Betel Quid / Areca Nut Exposure',
                    desc: 'High synergistic oral mucosal carcinogen',
                    checked: betelQuid,
                    setter: setBetelQuid,
                  },
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">{item.label}</p>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={(e) => item.setter(e.target.checked)}
                      className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300 cursor-pointer"
                    />
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Live Simulated Triage & FHIR Output */}
          <div className="lg:col-span-7 space-y-6">
            <Card variant="white" padding="lg" organic="subtle" className="border-teal-100 shadow-md">
              {/* Tab Switcher */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('triage')}
                    className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full transition-colors ${
                      activeTab === 'triage'
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Clinical Triage Result
                  </button>
                  <button
                    onClick={() => setActiveTab('fhir')}
                    className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full transition-colors ${
                      activeTab === 'fhir'
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    HL7 FHIR R4 JSON Payload
                  </button>
                </div>

                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold hidden sm:inline">
                  Orqis Simulator Active
                </span>
              </div>

              {/* Tab 1: Clinical Triage Presentation */}
              {activeTab === 'triage' && (
                <div className="space-y-6">
                  {/* Risk Level Banner */}
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Calibrated Risk Category
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                        {simulation.riskLevel} Risk Stratum
                      </h3>
                    </div>
                    <div>{getRiskBadge(simulation.riskLevel)}</div>
                  </div>

                  {/* Telemetry Progress Gauges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Classical Model Baseline */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Classical CNN Prob
                      </p>
                      <p className="text-xl font-bold text-slate-900 font-mono mt-1">
                        {(simulation.classicalProb * 100).toFixed(1)}%
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-teal-500 h-full transition-all duration-300"
                          style={{ width: `${simulation.classicalProb * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5">MobileNetV3 512D</p>
                    </div>

                    {/* Quantum Expectation <Z> */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Quantum ⟨Z₀⟩ Readout
                      </p>
                      <p className="text-xl font-bold text-purple-700 font-mono mt-1">
                        {simulation.quantumExpectation > 0 ? '+' : ''}
                        {simulation.quantumExpectation.toFixed(3)}
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-purple-600 h-full transition-all duration-300"
                          style={{
                            width: `${((1 - simulation.quantumExpectation) / 2) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5">8-Qubit VQC Ansatz</p>
                    </div>

                    {/* Multimodal Fused Probability */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Fused Risk Score
                      </p>
                      <p className="text-xl font-bold text-teal-700 font-mono mt-1">
                        {(simulation.finalProb * 100).toFixed(1)}%
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            simulation.finalProb >= 0.65
                              ? 'bg-rose-500'
                              : simulation.finalProb >= 0.3
                              ? 'bg-amber-500'
                              : 'bg-emerald-500'
                          }`}
                          style={{ width: `${simulation.finalProb * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1.5">Isotonic Calibration</p>
                    </div>
                  </div>

                  {/* Recommendation Card */}
                  <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2">
                    <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider">
                      <Info className="w-4 h-4 text-teal-600" />
                      Clinical Decision Support Guidance
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {simulation.recommendation}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: HL7 FHIR R4 JSON Record */}
              {activeTab === 'fhir' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold">HL7 FHIR R4 Observation Resource</span>
                    <span className="font-mono">SNOMED CT: 363349007</span>
                  </div>
                  <pre className="p-4 rounded-2xl bg-slate-900 text-teal-300 font-mono text-xs overflow-x-auto max-h-80 border border-slate-800 leading-relaxed">
                    {JSON.stringify(simulatedFhirObservation, null, 2)}
                  </pre>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-1" />
      </div>
    </section>
  );
};
