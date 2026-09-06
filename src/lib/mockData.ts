import { TestCasePreset } from '@/types';

export const TEST_CASE_PRESETS: TestCasePreset[] = [
  {
    id: 'case-benign',
    name: 'Healthy Buccal Mucosa',
    category: 'Normal / Benign',
    clinicalDescription:
      'Uniform pink mucosal surface with smooth vascularization and no demonstrable ulceration, keratosis, or architectural disruption.',
    lifestyle: {
      smoking: false,
      alcohol: false,
      betelQuid: false,
    },
    classicalFeatureNorm: 0.18,
    expectedQuantumExpectation: 0.74, // ⟨Z⟩ near +1 → p_cancer = (1 − 0.74)/2 = 0.13
    expectedClassicalProb: 0.12,
    expectedFinalProb: 0.08,
    riskLevel: 'Low',
    recommendation: 'Routine periodic oral hygiene examination. No clinical escalation indicated.',
    snomedCode: '363349007-NEG',
    snomedDisplay: 'Negative for Oral Cavity Malignancy',
  },
  {
    id: 'case-moderate',
    name: 'Oral Lichenoid Keratosis',
    category: 'Low-Grade Dysplasia / Reactive',
    clinicalDescription:
      'Reticular white striae on right lateral buccal mucosa with localized mild erythema. Patient reports mild episodic spicy food sensitivity.',
    lifestyle: {
      smoking: true,
      alcohol: false,
      betelQuid: false,
    },
    classicalFeatureNorm: 0.48,
    expectedQuantumExpectation: 0.12, // ⟨Z⟩ intermediate → p_cancer = (1 − 0.12)/2 = 0.44
    expectedClassicalProb: 0.44,
    expectedFinalProb: 0.38,
    riskLevel: 'Moderate',
    recommendation: 'Targeted clinical follow-up in 4–6 weeks with high-resolution photographic monitoring and lifestyle cessation counseling.',
    snomedCode: '363349007-OBS',
    snomedDisplay: 'Equivocal / Close Monitoring Indicated',
  },
  {
    id: 'case-high',
    name: 'Homogeneous Leukoplakia with Ulceration',
    category: 'High-Risk Premalignant Lesion',
    clinicalDescription:
      'Non-scrapable thick, elevated white plaque on left lateral tongue border with central focal erythematous ulceration (>1.2 cm). Longstanding betel quid exposure.',
    lifestyle: {
      smoking: true,
      alcohol: true,
      betelQuid: true,
    },
    classicalFeatureNorm: 0.88,
    expectedQuantumExpectation: -0.68, // ⟨Z⟩ near −1 → p_cancer = (1 − (−0.68))/2 = 0.84
    expectedClassicalProb: 0.82,
    expectedFinalProb: 0.86,
    riskLevel: 'High',
    recommendation: 'Immediate referral for urgent incisional biopsy and specialist maxillofacial oncological evaluation.',
    snomedCode: '363349007-POS',
    snomedDisplay: 'Screening Positive — Specialist Triage Required',
  },
];

/**
 * Simulated risk calculation following the CareScan PDF methodology:
 *  1. Primary quantum output: p_cancer = (1 − ⟨Z_q⟩) / 2
 *  2. Clinical risk factors (smoking, alcohol, betel quid) shift ⟨Z_q⟩ per the
 *     multimodal configuration described in the Methodology document.
 *  3. This is a SIMULATION for demonstration purposes only.
 *     Final experimental results depend on the live 16-qubit VQC experiment (Phase D).
 */
export function calculateSimulatedRisk(
  preset: TestCasePreset,
  customLifestyle?: { smoking: boolean; alcohol: boolean; betelQuid: boolean }
) {
  const lifestyle = customLifestyle || preset.lifestyle;

  // Clinical feature auxiliary score (c vector from the Methodology PDF, §5)
  let clinicalAux = 0;
  if (lifestyle.smoking) clinicalAux += 0.12;
  if (lifestyle.alcohol) clinicalAux += 0.08;
  if (lifestyle.betelQuid) clinicalAux += 0.18;

  // Shift ⟨Z_q⟩ based on clinical risk factors
  // (multimodal configuration: image + clinical features combined before classification)
  const shiftedExpectation = Math.max(-0.95, Math.min(0.95,
    preset.expectedQuantumExpectation - clinicalAux * 0.8
  ));

  // Primary quantum probability formula per PDF §9: p_cancer = (1 − ⟨Z_q⟩) / 2
  const quantumProb = (1.0 - shiftedExpectation) / 2.0;

  // Classical feature probability (image-only baseline for comparison)
  const classicalProb = Math.min(0.96, Math.max(0.04,
    preset.expectedClassicalProb + clinicalAux * 0.4
  ));

  // Final probability: quantum output is the primary signal in this simulation
  // (matches the VQC-as-primary-classifier design per the Progress Report)
  const finalProb = Number(quantumProb.toFixed(4));

  // Risk stratification (calibration into risk bands per Phase E of roadmap)
  let riskLevel: 'Low' | 'Moderate' | 'High' = 'Low';
  let recommendation = preset.recommendation;

  if (finalProb >= 0.65) {
    riskLevel = 'High';
    recommendation = 'Immediate specialist referral for incisional biopsy and comprehensive oncological staging.';
  } else if (finalProb >= 0.30) {
    riskLevel = 'Moderate';
    recommendation = 'Clinical re-examination in 30 days. Cessation of all tobacco and betel quid risk factors recommended.';
  } else {
    riskLevel = 'Low';
    recommendation = 'Normal oral mucosal presentation. Continue routine oral health screening.';
  }

  return {
    classicalProb: Number(classicalProb.toFixed(4)),
    quantumExpectation: Number(shiftedExpectation.toFixed(4)),
    quantumProb: Number(quantumProb.toFixed(4)),
    finalProb,
    riskLevel,
    recommendation,
  };
}
