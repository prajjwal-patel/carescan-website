'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TEST_CASE_PRESETS, calculateSimulatedRisk } from '@/lib/mockData';
import { OrganicDivider } from '../visual/OrganicDivider';
import { useCredentials } from '@/context/CredentialsContext';
import {
  Info,
  Sparkles,
  ShieldCheck,
  Cpu,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  HeartHandshake,
  HelpCircle,
  KeyRound,
  Camera,
  User,
  Upload,
  Layers,
  Activity,
} from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const { credentials, patientProfile, openModal } = useCredentials();

  // Selected case state: 'synthetic-preset' or 'patient-upload'
  const [caseSource, setCaseSource] = useState<'preset' | 'patient'>('preset');
  const [selectedPresetId, setSelectedPresetId] = useState<string>(TEST_CASE_PRESETS[0].id);

  const [smoking, setSmoking] = useState<boolean>(false);
  const [alcohol, setAlcohol] = useState<boolean>(false);
  const [betelQuid, setBetelQuid] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'triage' | 'fhir'>('triage');

  const selectedPreset =
    TEST_CASE_PRESETS.find((p) => p.id === selectedPresetId) || TEST_CASE_PRESETS[0];

  // Sync default lifestyle factors when preset changes
  const handleSelectPreset = (presetId: string) => {
    setCaseSource('preset');
    setSelectedPresetId(presetId);
    const p = TEST_CASE_PRESETS.find((item) => item.id === presetId);
    if (p) {
      setSmoking(p.lifestyle.smoking);
      setAlcohol(p.lifestyle.alcohol);
      setBetelQuid(p.lifestyle.betelQuid);
    }
  };

  // Switch to Patient Uploaded Case
  const handleSelectPatientCase = () => {
    setCaseSource('patient');
    setSmoking(patientProfile.tobaccoUse);
    setAlcohol(patientProfile.alcoholUse);
    setBetelQuid(patientProfile.betelNutUse);
  };

  // Calculate risk based on either preset or patient image analysis
  let finalProb = 0.05;
  let classicalProb = 0.05;
  let quantumZ0 = 0.85;
  let riskLevel = 'Low';
  let recommendation = '';

  if (caseSource === 'patient' && patientProfile.analysisResult) {
    let p = patientProfile.analysisResult.probability;
    // Apply real-time checkbox overrides
    if (smoking && !patientProfile.tobaccoUse) p += 0.12;
    if (!smoking && patientProfile.tobaccoUse) p -= 0.12;
    if (betelQuid && !patientProfile.betelNutUse) p += 0.15;
    if (!betelQuid && patientProfile.betelNutUse) p -= 0.15;
    if (alcohol && !patientProfile.alcoholUse) p += 0.06;
    if (!alcohol && patientProfile.alcoholUse) p -= 0.06;

    finalProb = Math.min(0.96, Math.max(0.04, p));
    classicalProb = Math.min(0.95, finalProb * 0.9 + 0.02);
    quantumZ0 = finalProb >= 0.6 ? -(0.4 + finalProb * 0.4) : 0.88 - finalProb * 0.6;
    riskLevel = finalProb >= 0.6 ? 'High' : finalProb >= 0.28 ? 'Moderate' : 'Low';
    recommendation = patientProfile.analysisResult.recommendation;
  } else {
    const sim = calculateSimulatedRisk(selectedPreset, {
      smoking,
      alcohol,
      betelQuid,
    });
    finalProb = sim.finalProb;
    classicalProb = sim.classicalProb;
    quantumZ0 = sim.quantumExpectation;
    riskLevel = sim.riskLevel;
    recommendation = sim.recommendation;
  }

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'High':
        return (
          <Badge variant="danger" pulse size="md">
            High Risk • Urgent Referral
          </Badge>
        );
      case 'Moderate':
        return (
          <Badge variant="warning" pulse size="md">
            Moderate Risk • 30-Day Re-check
          </Badge>
        );
      default:
        return (
          <Badge variant="success" size="md">
            Low Risk • Routine Hygiene
          </Badge>
        );
    }
  };

  const simulatedFhirObservation = {
    resourceType: 'Observation',
    id: `obs-orqis-${caseSource === 'patient' ? patientProfile.patientId : selectedPreset.id}`,
    meta: {
      source: credentials.fhirEndpoint,
      profile: ['http://hl7.org/fhir/StructureDefinition/Observation'],
    },
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
    subject: {
      reference: `Patient/${caseSource === 'patient' ? patientProfile.patientId : 'SYNTH-PT-001'}`,
      display: caseSource === 'patient' ? patientProfile.name : 'Simulated Screening Patient',
      extension: [
        {
          url: 'https://orqis.health/patient-age',
          valueString: caseSource === 'patient' ? `${patientProfile.age}y` : '45y',
        },
        {
          url: 'https://orqis.health/oral-region',
          valueString:
            caseSource === 'patient' ? patientProfile.symptomRegion : selectedPreset.category,
        },
      ],
    },
    performer: [
      {
        display: credentials.name,
        type: 'Practitioner',
        identifier: {
          system: 'https://orqis.health/practitioners',
          value: credentials.facilityId,
        },
        extension: [
          {
            url: 'https://orqis.health/role',
            valueString: credentials.role,
          },
          {
            url: 'https://orqis.health/session-key',
            valueString: credentials.accessKey,
          },
        ],
      },
    ],
    valueQuantity: {
      value: Math.round(finalProb * 1000) / 1000,
      unit: 'probability',
      system: 'http://unitsofmeasure.org',
      code: '1',
    },
    interpretation: [
      {
        coding: [
          {
            code: riskLevel === 'High' ? 'POS' : riskLevel === 'Moderate' ? 'OBS' : 'NEG',
            display: riskLevel,
          },
        ],
        text: `${riskLevel} Risk Anomaly`,
      },
    ],
    component: [
      {
        code: { text: 'MobileNetV3 512D Classical CNN Feature Score' },
        valueQuantity: { value: Math.round(classicalProb * 1000) / 1000, unit: 'score' },
      },
      {
        code: { text: '8-Qubit VQC Pauli-Z Ground State Expectation ⟨Z₀⟩' },
        valueQuantity: { value: Math.round(quantumZ0 * 1000) / 1000, unit: 'expectation' },
      },
    ],
    note: [{ text: recommendation }],
  };

  return (
    <section id="sandbox" className="relative py-14 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <SectionHeader
          badge="Interactive Point-of-Care Simulator"
          badgeVariant="teal"
          title="Try the Guided"
          highlightText="Orqis Triage Sandbox"
          subtitle="Follow the 3 steps below to explore how Orqis fuses oral image patterns with patient lifestyle risk factors to generate calibrated clinical triage decisions."
        />

        {/* Guided 3-Step Progress Header Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3 p-2 rounded-xl bg-teal-50/60 border border-teal-100">
              <span className="w-7 h-7 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Choose Patient Case</p>
                <p className="text-[11px] text-slate-600">Preset scenario or live photo</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl bg-indigo-50/60 border border-indigo-100">
              <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Toggle Risk Factors</p>
                <p className="text-[11px] text-slate-600">Tobacco, alcohol, betel quid</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl bg-purple-50/60 border border-purple-100">
              <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Review AI & Quantum Score</p>
                <p className="text-[11px] text-slate-600">See clinical referral output</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sandbox Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Preset Selection, Patient Photo Case & Lifestyle Toggles */}
          <div className="lg:col-span-5 space-y-5">
            {/* Step 1: Case Selector */}
            <Card variant="white" padding="md" organic="subtle" className="border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Step 1 • Select Screening Case
                </span>
                <span className="text-[11px] text-teal-700 font-bold">
                  {caseSource === 'patient' ? 'Patient Photo Active' : 'Synthetic Presets'}
                </span>
              </div>

              {/* Case Source Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl mb-3">
                <button
                  type="button"
                  onClick={() => setCaseSource('preset')}
                  className={`text-xs font-bold py-1.5 px-2 rounded-lg transition-all cursor-pointer ${
                    caseSource === 'preset'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Clinical Presets
                </button>
                <button
                  type="button"
                  onClick={handleSelectPatientCase}
                  className={`text-xs font-bold py-1.5 px-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    caseSource === 'patient'
                      ? 'bg-teal-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Patient Photo Case</span>
                </button>
              </div>

              {/* View 1: Patient Photo Case Display */}
              {caseSource === 'patient' && (
                <div className="space-y-3 p-3 rounded-2xl bg-teal-50/70 border border-teal-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{patientProfile.name}</h4>
                      <p className="text-[11px] text-slate-600">
                        {patientProfile.age} yrs • {patientProfile.gender} • {patientProfile.symptomRegion}
                      </p>
                    </div>
                    <Badge
                      variant={
                        patientProfile.analysisResult?.riskLevel === 'High'
                          ? 'danger'
                          : patientProfile.analysisResult?.riskLevel === 'Moderate'
                          ? 'warning'
                          : 'success'
                      }
                      size="sm"
                    >
                      {patientProfile.analysisResult?.riskLevel || 'Analyzed'} Anomaly
                    </Badge>
                  </div>

                  {/* Photo Preview with Scanner */}
                  {patientProfile.uploadedImage && (
                    <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
                      <img
                        src={patientProfile.uploadedImage}
                        alt="Patient oral photo"
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-scan-line pointer-events-none" />
                      <div className="absolute bottom-1.5 left-2 right-2 bg-slate-900/80 px-2 py-0.5 rounded text-[10px] text-teal-300 font-mono truncate flex items-center justify-between">
                        <span>{patientProfile.uploadedImageName || 'patient_lesion.png'}</span>
                        <span className="text-emerald-400 font-bold">On-Device VQC Scanned</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500 font-mono">
                      ID: {patientProfile.patientId}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openModal('patient')}
                      icon={<Upload className="w-3 h-3 text-teal-700" />}
                      className="text-xs font-bold text-teal-800 bg-white hover:bg-teal-50 border border-teal-200"
                    >
                      Change Photo / Patient
                    </Button>
                  </div>
                </div>
              )}

              {/* View 2: Preset Scenarios List */}
              {caseSource === 'preset' && (
                <div className="space-y-2">
                  {TEST_CASE_PRESETS.map((preset) => {
                    const isSelected = preset.id === selectedPresetId;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-slate-900">{preset.name}</span>
                          <Badge
                            variant={
                              preset.riskLevel === 'High'
                                ? 'danger'
                                : preset.riskLevel === 'Moderate'
                                ? 'warning'
                                : 'neutral'
                            }
                            size="sm"
                          >
                            {preset.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {preset.clinicalDescription}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </Card>

            {/* Step 2: Lifestyle Auxiliary Risk Toggles */}
            <Card variant="white" padding="md" organic="subtle" className="border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Step 2 • Add Patient Risk Exposures
                </span>
                <span className="text-[11px] text-indigo-700 font-bold">Lifestyle Inputs</span>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    label: 'Tobacco / Cigarette Smoking',
                    desc: 'Regular consumption (>5 pack-years)',
                    checked: smoking,
                    setter: setSmoking,
                  },
                  {
                    label: 'Regular Alcohol Consumption',
                    desc: 'Frequent or heavy alcohol intake',
                    checked: alcohol,
                    setter: setAlcohol,
                  },
                  {
                    label: 'Betel Quid / Areca Nut Chewing',
                    desc: 'High synergistic oral mucosal carcinogen',
                    checked: betelQuid,
                    setter: setBetelQuid,
                  },
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
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
          <div className="lg:col-span-7 space-y-5">
            {/* Active Practitioner & Patient Session Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-teal-50/80 border border-teal-200/90 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs shrink-0">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-slate-900">{credentials.name}</span>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full border border-teal-200">
                      {credentials.role}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-mono">
                    Facility: {credentials.facilityId} • Patient: {caseSource === 'patient' ? patientProfile.name : 'Simulated Case'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => openModal('clinician')}
                icon={<KeyRound className="w-3.5 h-3.5 text-teal-700" />}
                className="text-xs font-bold text-teal-800 hover:bg-white border border-teal-200/80 bg-white/80 shadow-2xs"
              >
                Change Credentials
              </Button>
            </div>

            <Card variant="white" padding="lg" organic="subtle" className="border-teal-200 shadow-sm">
              {/* Tab Switcher */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('triage')}
                    className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                      activeTab === 'triage'
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Clinical Triage Result
                  </button>
                  <button
                    onClick={() => setActiveTab('fhir')}
                    className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                      activeTab === 'fhir'
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    HL7 FHIR R4 Record
                  </button>
                </div>

                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold hidden sm:inline">
                  Orqis Engine Active
                </span>
              </div>

              {/* Tab 1: Clinical Triage Presentation */}
              {activeTab === 'triage' && (
                <div className="space-y-5">
                  {/* Risk Level Banner */}
                  <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Step 3 • Calibrated Clinical Triage
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                        {riskLevel} Risk Stratum
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {caseSource === 'patient'
                          ? `Evaluated for ${patientProfile.name} on ${patientProfile.symptomRegion}`
                          : `Clinical presentation for ${selectedPreset.name}`}
                      </p>
                    </div>
                    <div>{getRiskBadge(riskLevel)}</div>
                  </div>

                  {/* Diagnostic Gauges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Classical CNN */}
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Classical CNN
                      </p>
                      <p className="text-lg font-extrabold text-slate-900 font-mono mt-0.5">
                        {(classicalProb * 100).toFixed(1)}%
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full transition-all duration-300"
                          style={{ width: `${classicalProb * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">MobileNetV3 512D</p>
                    </div>

                    {/* Quantum 8-Qubit VQC */}
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Quantum VQC ⟨Z₀⟩
                      </p>
                      <p className="text-lg font-extrabold text-purple-700 font-mono mt-0.5">
                        {quantumZ0 >= 0 ? '+' : ''}
                        {quantumZ0.toFixed(2)}
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className="bg-purple-600 h-full transition-all duration-300"
                          style={{ width: `${Math.max(10, (1 - (quantumZ0 + 1) / 2) * 100)}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Pauli-Z ground state</p>
                    </div>

                    {/* Multimodal Fused Probability */}
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Final Calibrated Score
                      </p>
                      <p className="text-lg font-extrabold text-teal-800 font-mono mt-0.5">
                        {(finalProb * 100).toFixed(1)}%
                      </p>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            finalProb >= 0.6
                              ? 'bg-rose-500'
                              : finalProb >= 0.28
                              ? 'bg-amber-500'
                              : 'bg-emerald-500'
                          }`}
                          style={{ width: `${finalProb * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Fused clinical decision</p>
                    </div>
                  </div>

                  {/* Recommendation Card */}
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-teal-950 font-bold text-xs uppercase tracking-wider">
                      <HeartHandshake className="w-4 h-4 text-teal-700" />
                      Clinical Action Plan for Health Worker & Patient
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {recommendation}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: HL7 FHIR R4 JSON Record */}
              {activeTab === 'fhir' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-bold">HL7 FHIR R4 Observation Resource</span>
                    <span className="font-mono text-slate-500">SNOMED CT: 363349007</span>
                  </div>
                  <pre className="p-3.5 rounded-2xl bg-slate-900 text-teal-300 font-mono text-xs overflow-x-auto max-h-80 border border-slate-800 leading-relaxed">
                    {JSON.stringify(simulatedFhirObservation, null, 2)}
                  </pre>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-1" />
      </div>
    </section>
  );
};
