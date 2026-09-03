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
    expectedQuantumExpectation: 0.74, // <Z> near +1 -> low cancer risk
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
    expectedQuantumExpectation: 0.12, // <Z> intermediate
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
    expectedQuantumExpectation: -0.68, // <Z> near -1 -> high cancer risk: P = (1 - (-0.68))/2 = 0.84
    expectedClassicalProb: 0.82,
    expectedFinalProb: 0.86,
    riskLevel: 'High',
    recommendation: 'Immediate referral for urgent incisional biopsy and specialist maxillofacial oncological evaluation.',
    snomedCode: '363349007-POS',
    snomedDisplay: 'Screening Positive — Specialist Triage Required',
  },
];

export function calculateSimulatedRisk(
  preset: TestCasePreset,
  customLifestyle?: { smoking: boolean; alcohol: boolean; betelQuid: boolean }
) {
  const lifestyle = customLifestyle || preset.lifestyle;
  
  // Calculate auxiliary risk bonus
  let auxScore = 0;
  if (lifestyle.smoking) auxScore += 0.12;
  if (lifestyle.alcohol) auxScore += 0.08;
  if (lifestyle.betelQuid) auxScore += 0.18;

  // Compute simulated classical probability
  const classicalProb = Math.min(0.96, Math.max(0.04, preset.expectedClassicalProb + auxScore * 0.4));
  
  // Compute simulated quantum expectation value <Z> in [-1, 1]
  const baseExpectation = preset.expectedQuantumExpectation;
  const shiftedExpectation = Math.max(-0.95, Math.min(0.95, baseExpectation - auxScore * 0.8));
  
  // Quantum probability formula: P_q = (1 - <Z>) / 2
  const quantumProb = (1.0 - shiftedExpectation) / 2.0;

  // Multimodal fusion (weighted 60% quantum, 40% classical)
  const fusedProb = Number((0.6 * quantumProb + 0.4 * classicalProb).toFixed(4));

  // Risk categorization based on CareScan clinical threshold (0.50)
  let riskLevel: 'Low' | 'Moderate' | 'High' = 'Low';
  let recommendation = preset.recommendation;

  if (fusedProb >= 0.65) {
    riskLevel = 'High';
    recommendation = 'Immediate specialist referral for incisional biopsy and comprehensive oncological staging.';
  } else if (fusedProb >= 0.30) {
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
    finalProb: fusedProb,
    riskLevel,
    recommendation,
  };
}
