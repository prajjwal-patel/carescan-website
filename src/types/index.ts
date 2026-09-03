export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  details: string[];
  badge: string;
}

export interface TechnologyTier {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  icon: string;
  color: 'iris' | 'teal' | 'quantum' | 'slate';
}

export interface QuantumConcept {
  title: string;
  description: string;
  badge: string;
  formula?: string;
  analogy: string;
}

export interface PhilosophyPillar {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  points: string[];
}

export interface TimelineMilestone {
  phase: string;
  quarter: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  role: string;
  discipline: string;
  department: string;
  focus: string;
  avatarPlaceholder: string;
}

export interface TestCasePreset {
  id: string;
  name: string;
  category: string;
  clinicalDescription: string;
  lifestyle: {
    smoking: boolean;
    alcohol: boolean;
    betelQuid: boolean;
  };
  classicalFeatureNorm: number;
  expectedQuantumExpectation: number; // <Z> in [-1, 1]
  expectedClassicalProb: number;
  expectedFinalProb: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  recommendation: string;
  snomedCode: string;
  snomedDisplay: string;
}
