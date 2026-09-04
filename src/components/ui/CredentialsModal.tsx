'use client';

import React, { useState } from 'react';
import { useCredentials, CREDENTIAL_PRESETS } from '@/lib/../context/CredentialsContext';
import { Button } from './Button';
import { Badge } from './Badge';
import {
  X,
  KeyRound,
  User,
  Building2,
  ShieldCheck,
  RefreshCw,
  Copy,
  Check,
  Server,
  Sparkles,
  Lock,
  Stethoscope,
  Info,
} from 'lucide-react';

export const CredentialsModal: React.FC = () => {
  const {
    credentials,
    isModalOpen,
    closeModal,
    updateCredentials,
    applyPreset,
    resetDefaults,
    generateNewKey,
  } = useCredentials();

  const [formData, setFormData] = useState(credentials);
  const [copiedKey, setCopiedKey] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync formData when modal opens or credentials change
  React.useEffect(() => {
    setFormData(credentials);
  }, [credentials, isModalOpen]);

  if (!isModalOpen) return null;

  const handleCopyKey = () => {
    navigator.clipboard.writeText(formData.accessKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateCredentials(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      closeModal();
    }, 1200);
  };

  const handlePresetSelect = (presetId: string) => {
    applyPreset(presetId);
    const preset = CREDENTIAL_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setFormData({
        name: preset.name,
        role: preset.role,
        facilityId: preset.facilityId,
        accessKey: preset.accessKey,
        fhirEndpoint: preset.fhirEndpoint,
        notes: preset.description,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 px-6 py-5 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg font-bold tracking-tight text-white">
                  User & Clinician Credentials
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-900/60 px-2 py-0.5 rounded-full border border-teal-700/50">
                  Local Session
                </span>
              </div>
              <p className="text-xs text-slate-300 font-body">
                Configure practitioner credentials for interactive screening & FHIR export
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close credentials modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto font-body">
          {/* Preset Roles Quick Selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Quick-Select Role Presets
              </label>
              <span className="text-[11px] text-slate-400">Click to auto-populate</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CREDENTIAL_PRESETS.map((preset) => {
                const isSelected = formData.role === preset.role && formData.name === preset.name;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`p-2.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/80 ring-2 ring-teal-600/20 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/60 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase text-teal-700">
                      {preset.badge}
                    </span>
                    <span className="block text-xs font-semibold text-slate-900 truncate">
                      {preset.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Inputs for Custom Values */}
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Clinician Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Clinician / User Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Sunita Devi"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors"
                />
              </div>

              {/* Facility ID */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  Facility / Clinic ID
                </label>
                <input
                  type="text"
                  required
                  value={formData.facilityId}
                  onChange={(e) => setFormData({ ...formData, facilityId: e.target.value })}
                  placeholder="e.g. PHC-PURULIA-NODE-04"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 font-mono transition-colors"
                />
              </div>
            </div>

            {/* Clinical Role Selection / Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                Designation / Clinical Role
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Frontline Health Worker (ASHA / PHC)"
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors"
              />
            </div>

            {/* Session Access Key */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Session Access Key / API Token
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      generateNewKey();
                      const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
                      const newK = `ORQIS-CLINIC-${randomHex}-${Date.now().toString().slice(-4)}`;
                      setFormData({ ...formData, accessKey: newK });
                    }}
                    className="text-[11px] text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Generate New
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyKey}
                    className="text-[11px] text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1"
                  >
                    {copiedKey ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
              <input
                type="text"
                required
                value={formData.accessKey}
                onChange={(e) => setFormData({ ...formData, accessKey: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 font-mono text-slate-800 transition-colors"
              />
            </div>

            {/* FHIR Server Target Endpoint */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-slate-400" />
                HL7 FHIR R4 Target Server
              </label>
              <input
                type="text"
                required
                value={formData.fhirEndpoint}
                onChange={(e) => setFormData({ ...formData, fhirEndpoint: e.target.value })}
                placeholder="https://rural-care.health.gov.in/fhir/r4"
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 font-mono text-slate-800 transition-colors"
              />
            </div>

            {/* Privacy & Zero-Cloud Notice */}
            <div className="bg-teal-50/60 border border-teal-200/70 rounded-2xl p-3.5 flex items-start gap-3 text-xs text-teal-900">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold">Zero-Cloud PHI Guarantee:</span>
                <p className="text-teal-800/90 text-[11px] leading-relaxed">
                  Entered credentials and session tokens are strictly stored in your local browser session and utilized solely to dynamically stamp client-side FHIR telemetry in the Sandbox.
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  resetDefaults();
                  setFormData({
                    name: 'Sunita Devi',
                    role: 'Frontline Health Worker (ASHA / PHC)',
                    facilityId: 'PHC-PURULIA-NODE-04',
                    accessKey: 'ASHA-RURAL-2026-9812',
                    fhirEndpoint: 'https://rural-care.health.gov.in/fhir/r4',
                    notes: 'Authenticated local testing profile for preliminary oral screening.',
                  });
                }}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
              >
                Reset to Default Preset
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="flex-1 sm:flex-initial"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  icon={saveSuccess ? <Check className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                  className="flex-1 sm:flex-initial bg-teal-600 hover:bg-teal-700"
                >
                  {saveSuccess ? 'Saved & Applied!' : 'Save & Apply Credentials'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
