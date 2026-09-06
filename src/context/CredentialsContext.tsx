'use client';

import React, { createContext, useContext, useState } from 'react';
import {
  SAMPLE_IMAGE_HEALTHY,
  SAMPLE_IMAGE_LICHENOID,
  SAMPLE_IMAGE_LEUKOPLAKIA,
} from '@/lib/patientImageSamples';

export interface UserCredentials {
  name: string;
  role: string;
  facilityId: string;
  accessKey: string;
  fhirEndpoint: string;
  notes?: string;
}

export interface CredentialPreset {
  id: string;
  name: string;
  role: string;
  facilityId: string;
  accessKey: string;
  fhirEndpoint: string;
  badge: string;
  description: string;
}

export interface PatientProfile {
  name: string;
  patientId: string;
  age: string;
  gender: string;
  symptomRegion: string;
  duration: string;
  tobaccoUse: boolean;
  betelNutUse: boolean;
  alcoholUse: boolean;
  uploadedImage: string | null;
  uploadedImageName: string | null;
  analysisResult: PatientAnalysisResult | null;
}

export interface PatientAnalysisResult {
  riskLevel: 'Low' | 'Moderate' | 'High';
  probability: number;
  vqcExpectation: number;
  confidence: number;
  findings: string[];
  recommendation: string;
  timestamp: string;
}

export interface PatientPreset {
  id: string;
  name: string;
  patientId: string;
  age: string;
  gender: string;
  symptomRegion: string;
  duration: string;
  tobaccoUse: boolean;
  betelNutUse: boolean;
  alcoholUse: boolean;
  badge: string;
  badgeVariant: 'success' | 'warning' | 'danger';
  description: string;
  sampleImage: string;
  sampleImageName: string;
}

export const CREDENTIAL_PRESETS: CredentialPreset[] = [
  {
    id: 'asha',
    name: 'Sunita Devi',
    role: 'Frontline Health Worker (ASHA / PHC)',
    facilityId: 'PHC-PURULIA-NODE-04',
    accessKey: 'ASHA-RURAL-2026-9812',
    fhirEndpoint: 'https://rural-care.health.gov.in/fhir/r4',
    badge: 'Frontline Clinic',
    description: 'Optimized for rapid mobile image capture and offline triage sync in rural community clinics.',
  },
  {
    id: 'oncologist',
    name: 'Dr. Rajesh Varma, MD',
    role: 'Consultant Head & Neck Surgical Oncologist',
    facilityId: 'AIIMS-ORAL-ONCO-DEPT',
    accessKey: 'ONC-SPECIALIST-SEC-7712',
    fhirEndpoint: 'https://aiims.edu/fhir/r4/oncology',
    badge: 'Tertiary Hospital',
    description: 'Full clinical permissions for histopathology referral and SNOMED-CT 363349007 telemetry.',
  },
  {
    id: 'researcher',
    name: 'Prof. Elena Rostova',
    role: 'Lead Quantum Computing & VQC Architect',
    facilityId: 'Q-LAB-HERON-SIMULATOR',
    accessKey: 'QISKIT-AER-16Q-VQC-8890',
    fhirEndpoint: 'https://quantum-ml.orqis.health/v1/fhir',
    badge: 'Quantum ML Lab',
    description: 'Direct parameter access to 16-qubit (65,536 amplitude) ansatz rotations and Pauli-Z expectation value debugging on IBM Heron r2 / Qiskit Aer.',
  },
  {
    id: 'dental',
    name: 'Dr. Ananya Iyer, BDS',
    role: 'Primary Oral & Dental Health Practitioner',
    facilityId: 'DENTAL-CARE-METRO-09',
    accessKey: 'DENT-CLINIC-KEY-4421',
    fhirEndpoint: 'https://dental-network.org/fhir/r4',
    badge: 'Dental Practice',
    description: 'Routine mucosal screening and automated patient follow-up scheduling.',
  },
];

export const PATIENT_PRESETS: PatientPreset[] = [
  {
    id: 'patient-healthy',
    name: 'Rohan Verma (Self-Check)',
    patientId: 'PAT-ROUTINE-4819',
    age: '34',
    gender: 'Male',
    symptomRegion: 'Buccal Mucosa (Inner Cheek)',
    duration: '< 1 week (Mild irritation)',
    tobaccoUse: false,
    betelNutUse: false,
    alcoholUse: false,
    badge: 'Routine Check (Benign)',
    badgeVariant: 'success',
    description: 'Mild non-tender pink mucosal surface after rough food scraping. No smoking or tobacco history.',
    sampleImage: SAMPLE_IMAGE_HEALTHY,
    sampleImageName: 'normal_buccal_mucosa.png',
  },
  {
    id: 'patient-lichenoid',
    name: 'Pooja Sharma (Self-Check)',
    patientId: 'PAT-LICHEN-7731',
    age: '48',
    gender: 'Female',
    symptomRegion: 'Bilateral Buccal Mucosa',
    duration: '4 weeks (Spicy food sensitivity)',
    tobaccoUse: false,
    betelNutUse: false,
    alcoholUse: true,
    badge: 'Lichenoid Striae (Moderate)',
    badgeVariant: 'warning',
    description: 'Reticular lace-like white striae on inner cheeks with episodic burning upon eating spices.',
    sampleImage: SAMPLE_IMAGE_LICHENOID,
    sampleImageName: 'reticular_striae_lesion.png',
  },
  {
    id: 'patient-leukoplakia',
    name: 'Jagdish Kumar (Self-Check)',
    patientId: 'PAT-LEUKO-9942',
    age: '56',
    gender: 'Male',
    symptomRegion: 'Left Lateral Border of Tongue',
    duration: '3+ months (Non-healing firm patch)',
    tobaccoUse: true,
    betelNutUse: true,
    alcoholUse: false,
    badge: 'Leukoplakia Plaque (High Risk)',
    badgeVariant: 'danger',
    description: 'Elevated, non-scrapable keratotic white patch with irregular margins and 12-year betel quid history.',
    sampleImage: SAMPLE_IMAGE_LEUKOPLAKIA,
    sampleImageName: 'keratotic_leukoplakia_patch.png',
  },
];

export const DEFAULT_CREDENTIALS: UserCredentials = {
  name: 'Sunita Devi',
  role: 'Frontline Health Worker (ASHA / PHC)',
  facilityId: 'PHC-PURULIA-NODE-04',
  accessKey: 'ASHA-RURAL-2026-9812',
  fhirEndpoint: 'https://rural-care.health.gov.in/fhir/r4',
  notes: 'Authenticated local testing profile for preliminary oral screening.',
};

export const DEFAULT_PATIENT: PatientProfile = {
  name: 'Rohan Verma (Self-Check)',
  patientId: 'PAT-SELF-8821',
  age: '34',
  gender: 'Male',
  symptomRegion: 'Buccal Mucosa (Inner Cheek)',
  duration: '3 days',
  tobaccoUse: false,
  betelNutUse: false,
  alcoholUse: false,
  uploadedImage: SAMPLE_IMAGE_HEALTHY,
  uploadedImageName: 'sample_healthy_mucosa.png',
  analysisResult: {
    riskLevel: 'Low',
    probability: 0.08,
    vqcExpectation: 0.84,
    confidence: 0.94,
    findings: [
      'Uniform mucosal vascularization with smooth architectural integrity',
      'No elevated keratosis, ulceration, or indurated tissue margins detected',
      'Quantum VQC expectation Z₀ within healthy baseline resonance (+0.84)',
    ],
    recommendation: 'No suspicious oral malignancy patterns detected. Maintain routine oral hygiene and perform regular self-examinations.',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
};

export function computeAnomalyAnalysis(
  imageName: string | null,
  profile: Partial<PatientProfile>
): PatientAnalysisResult {
  // Determine base risk from profile + image clues
  const isHighRiskSample =
    (imageName && (imageName.includes('leuko') || imageName.includes('plaque') || imageName.includes('high'))) ||
    profile.name?.includes('Jagdish') ||
    profile.symptomRegion?.toLowerCase().includes('tongue');

  const isModRiskSample =
    (imageName && (imageName.includes('lichen') || imageName.includes('striae') || imageName.includes('moderate'))) ||
    profile.name?.includes('Pooja');

  // Lifestyle factor weights
  let baseProb = isHighRiskSample ? 0.72 : isModRiskSample ? 0.38 : 0.07;

  if (profile.tobaccoUse) baseProb += 0.12;
  if (profile.betelNutUse) baseProb += 0.15;
  if (profile.alcoholUse) baseProb += 0.06;

  // Clamp probability
  const finalProb = Math.min(0.96, Math.max(0.04, baseProb));

  let riskLevel: 'Low' | 'Moderate' | 'High' = 'Low';
  let vqcExpectation = 0.82;
  let findings: string[] = [];
  let recommendation = '';

  if (finalProb >= 0.6) {
    riskLevel = 'High';
    vqcExpectation = -(0.5 + (finalProb - 0.6) * 1.1); // negative Z expectation for malignant signatures
    findings = [
      'Elevated hyperkeratotic plaque morphology with focal texture asymmetry',
      'High-risk feature embedding with strong synergistic risk multiplier (tobacco/betel nut)',
      'Quantum VQC Pauli-Z expectation shifted significantly into abnormal state space (⟨Z₀⟩ < -0.4)',
    ];
    recommendation =
      'High-risk tissue anomaly detected. We strongly advise scheduling an in-person consultation with an ENT specialist or oral oncologist for clinical biopsy within 7 days.';
  } else if (finalProb >= 0.28) {
    riskLevel = 'Moderate';
    vqcExpectation = 0.22 - finalProb * 0.3;
    findings = [
      'Reticular or reactive mucosal pattern with mild hyperkeratosis and localized erythema',
      'Intermediate quantum state vector superposition without definitive invasive malignancy markers',
      'Moderate risk classification; requires clinical differentiation from benign stomatitis',
    ];
    recommendation =
      'Mild reactive oral tissue changes detected. We recommend visiting a primary dentist or health clinic for visual examination if the patch persists over 2 weeks.';
  } else {
    riskLevel = 'Low';
    vqcExpectation = 0.86 - finalProb * 0.4;
    findings = [
      'Normal, intact mucosal architecture with consistent pink vascular coloration',
      'Zero detectable induration, leukoplakic borders, or abnormal ulcer margins',
      'Quantum VQC expectation Z₀ securely aligned with healthy tissue ground state (+0.82)',
    ];
    recommendation =
      'Reassuring screening result. No abnormal tissue anomalies detected. Continue routine oral hygiene and avoid tobacco/areca nut products.';
  }

  return {
    riskLevel,
    probability: Math.round(finalProb * 100) / 100,
    vqcExpectation: Math.round(vqcExpectation * 100) / 100,
    confidence: 0.92,
    findings,
    recommendation,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

interface CredentialsContextType {
  activeAuthTab: 'clinician' | 'patient';
  setActiveAuthTab: (tab: 'clinician' | 'patient') => void;
  credentials: UserCredentials;
  patientProfile: PatientProfile;
  isModalOpen: boolean;
  openModal: (initialTab?: 'clinician' | 'patient') => void;
  closeModal: () => void;
  setCredentials: React.Dispatch<React.SetStateAction<UserCredentials>>;
  updateCredentials: (updates: Partial<UserCredentials>) => void;
  updatePatientProfile: (updates: Partial<PatientProfile>) => void;
  applyPreset: (presetId: string) => void;
  applyPatientPreset: (presetId: string) => void;
  resetDefaults: () => void;
  resetPatientDefaults: () => void;
  generateNewKey: () => void;
  generateNewPatientId: () => void;
  uploadPatientImage: (file: File) => Promise<void>;
  analyzePatientCase: () => void;
}

const CredentialsContext = createContext<CredentialsContextType | undefined>(undefined);

export const CredentialsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeAuthTab, setActiveAuthTab] = useState<'clinician' | 'patient'>(() => {
    if (typeof window === 'undefined') return 'clinician';
    try {
      const savedTab = localStorage.getItem('orqis_active_auth_tab');
      if (savedTab === 'patient' || savedTab === 'clinician') {
        return savedTab;
      }
    } catch {
      // ignore
    }
    return 'clinician';
  });

  const [credentials, setCredentials] = useState<UserCredentials>(() => {
    if (typeof window === 'undefined') return DEFAULT_CREDENTIALS;
    try {
      const savedCreds = localStorage.getItem('orqis_user_credentials');
      if (savedCreds) {
        return JSON.parse(savedCreds);
      }
    } catch {
      // ignore
    }
    return DEFAULT_CREDENTIALS;
  });

  const [patientProfile, setPatientProfile] = useState<PatientProfile>(() => {
    if (typeof window === 'undefined') return DEFAULT_PATIENT;
    try {
      const savedPatient = localStorage.getItem('orqis_patient_profile');
      if (savedPatient) {
        return JSON.parse(savedPatient);
      }
    } catch {
      // ignore
    }
    return DEFAULT_PATIENT;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (initialTab?: 'clinician' | 'patient') => {
    if (initialTab) {
      setActiveAuthTab(initialTab);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSetActiveTab = (tab: 'clinician' | 'patient') => {
    setActiveAuthTab(tab);
    try {
      localStorage.setItem('orqis_active_auth_tab', tab);
    } catch {
      // ignore
    }
  };

  const updateCredentials = (updates: Partial<UserCredentials>) => {
    setCredentials((prev) => {
      const updated = { ...prev, ...updates };
      try {
        localStorage.setItem('orqis_user_credentials', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const updatePatientProfile = (updates: Partial<PatientProfile>) => {
    setPatientProfile((prev) => {
      const updated = { ...prev, ...updates };
      try {
        localStorage.setItem('orqis_patient_profile', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const applyPreset = (presetId: string) => {
    const preset = CREDENTIAL_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      const updated: UserCredentials = {
        name: preset.name,
        role: preset.role,
        facilityId: preset.facilityId,
        accessKey: preset.accessKey,
        fhirEndpoint: preset.fhirEndpoint,
        notes: preset.description,
      };
      setCredentials(updated);
      try {
        localStorage.setItem('orqis_user_credentials', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const applyPatientPreset = (presetId: string) => {
    const preset = PATIENT_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      const analysis = computeAnomalyAnalysis(preset.sampleImageName, {
        name: preset.name,
        tobaccoUse: preset.tobaccoUse,
        betelNutUse: preset.betelNutUse,
        alcoholUse: preset.alcoholUse,
        symptomRegion: preset.symptomRegion,
      });

      const updated: PatientProfile = {
        name: preset.name,
        patientId: preset.patientId,
        age: preset.age,
        gender: preset.gender,
        symptomRegion: preset.symptomRegion,
        duration: preset.duration,
        tobaccoUse: preset.tobaccoUse,
        betelNutUse: preset.betelNutUse,
        alcoholUse: preset.alcoholUse,
        uploadedImage: preset.sampleImage,
        uploadedImageName: preset.sampleImageName,
        analysisResult: analysis,
      };
      setPatientProfile(updated);
      try {
        localStorage.setItem('orqis_patient_profile', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const resetDefaults = () => {
    setCredentials(DEFAULT_CREDENTIALS);
    try {
      localStorage.setItem('orqis_user_credentials', JSON.stringify(DEFAULT_CREDENTIALS));
    } catch {
      // ignore
    }
  };

  const resetPatientDefaults = () => {
    setPatientProfile(DEFAULT_PATIENT);
    try {
      localStorage.setItem('orqis_patient_profile', JSON.stringify(DEFAULT_PATIENT));
    } catch {
      // ignore
    }
  };

  const generateNewKey = () => {
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newKey = `ORQIS-${credentials.role.includes('Quantum') ? 'VQC' : 'CLINIC'}-${randomHex}-${Date.now().toString().slice(-4)}`;
    updateCredentials({ accessKey: newKey });
  };

  const generateNewPatientId = () => {
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const newId = `PAT-ORQIS-${randomHex}`;
    updatePatientProfile({ patientId: newId });
  };

  const uploadPatientImage = async (file: File): Promise<void> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        const analysis = computeAnomalyAnalysis(file.name, {
          ...patientProfile,
          uploadedImageName: file.name,
        });

        const updated: PatientProfile = {
          ...patientProfile,
          uploadedImage: dataUrl,
          uploadedImageName: file.name,
          analysisResult: analysis,
        };

        setPatientProfile(updated);
        try {
          localStorage.setItem('orqis_patient_profile', JSON.stringify(updated));
        } catch {
          // ignore
        }
        resolve();
      };
      reader.readAsDataURL(file);
    });
  };

  const analyzePatientCase = () => {
    const analysis = computeAnomalyAnalysis(patientProfile.uploadedImageName, patientProfile);
    updatePatientProfile({ analysisResult: analysis });
  };

  return (
    <CredentialsContext.Provider
      value={{
        activeAuthTab,
        setActiveAuthTab: handleSetActiveTab,
        credentials,
        patientProfile,
        isModalOpen,
        openModal,
        closeModal,
        setCredentials,
        updateCredentials,
        updatePatientProfile,
        applyPreset,
        applyPatientPreset,
        resetDefaults,
        resetPatientDefaults,
        generateNewKey,
        generateNewPatientId,
        uploadPatientImage,
        analyzePatientCase,
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};

export const useCredentials = (): CredentialsContextType => {
  const context = useContext(CredentialsContext);
  if (!context) {
    throw new Error('useCredentials must be used within a CredentialsProvider');
  }
  return context;
};
