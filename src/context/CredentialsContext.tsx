'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

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
    facilityId: 'Q-LAB-ZNE-SIMULATOR',
    accessKey: 'QISKIT-AER-VQC-8890',
    fhirEndpoint: 'https://quantum-ml.orqis.health/v1/fhir',
    badge: 'Quantum ML Lab',
    description: 'Direct parameter access to 8-qubit ansatz rotations and Pauli-Z expectation value debugging.',
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

const DEFAULT_CREDENTIALS: UserCredentials = {
  name: 'Sunita Devi',
  role: 'Frontline Health Worker (ASHA / PHC)',
  facilityId: 'PHC-PURULIA-NODE-04',
  accessKey: 'ASHA-RURAL-2026-9812',
  fhirEndpoint: 'https://rural-care.health.gov.in/fhir/r4',
  notes: 'Authenticated local testing profile for preliminary oral screening.',
};

interface CredentialsContextType {
  credentials: UserCredentials;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setCredentials: React.Dispatch<React.SetStateAction<UserCredentials>>;
  updateCredentials: (updates: Partial<UserCredentials>) => void;
  applyPreset: (presetId: string) => void;
  resetDefaults: () => void;
  generateNewKey: () => void;
}

const CredentialsContext = createContext<CredentialsContextType | undefined>(undefined);

export const CredentialsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [credentials, setCredentials] = useState<UserCredentials>(DEFAULT_CREDENTIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load from localStorage if available on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('orqis_user_credentials');
      if (saved) {
        setCredentials(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const resetDefaults = () => {
    setCredentials(DEFAULT_CREDENTIALS);
    try {
      localStorage.setItem('orqis_user_credentials', JSON.stringify(DEFAULT_CREDENTIALS));
    } catch {
      // ignore
    }
  };

  const generateNewKey = () => {
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newKey = `ORQIS-${credentials.role.includes('Quantum') ? 'VQC' : 'CLINIC'}-${randomHex}-${Date.now().toString().slice(-4)}`;
    updateCredentials({ accessKey: newKey });
  };

  return (
    <CredentialsContext.Provider
      value={{
        credentials,
        isModalOpen,
        openModal,
        closeModal,
        setCredentials,
        updateCredentials,
        applyPreset,
        resetDefaults,
        generateNewKey,
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
