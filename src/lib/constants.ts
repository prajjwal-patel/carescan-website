import {
  NavItem,
  MetricItem,
  WorkflowStage,
  TechnologyTier,
  QuantumConcept,
  PhilosophyPillar,
  TimelineMilestone,
  TeamMember,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Mission', href: '#project' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Quantum Engine', href: '#quantum-ml' },
  { label: 'Interactive Triage', href: '#sandbox' },
  { label: 'Care Ethics', href: '#philosophy' },
  { label: 'Roadmap', href: '#journey' },
  { label: 'Team', href: '#team' },
];

export const HERO_METRICS: MetricItem[] = [
  {
    value: '< 1 Second',
    label: 'Rapid Triage',
    description: 'Instant preliminary risk assessment on frontline mobile devices',
  },
  {
    value: '8-Qubit VQC',
    label: 'Deep Pattern Recognition',
    description: 'Quantum-accelerated analysis of subtle tissue textures',
  },
  {
    value: 'FHIR R4 Ready',
    label: 'Hospital Interoperable',
    description: 'Instantly exportable records for seamless specialist referral',
  },
  {
    value: '100% On-Device Privacy',
    label: 'Patient-First Security',
    description: 'Zero cloud storage of personal photos or patient identities',
  },
];

export const PURPOSE_STATS = [
  {
    stat: '377,000+',
    label: 'Lives Impacted Each Year',
    detail: 'Oral cancer is one of the most common cancers globally, especially across high-risk rural communities with limited specialist access.',
  },
  {
    stat: '65%+',
    label: 'Detected Far Too Late',
    detail: 'Most patients are diagnosed at advanced stages (III/IV) because early warning signs look harmless and painless to the untrained eye.',
  },
  {
    stat: '85%+',
    label: '5-Year Survival When Caught Early',
    detail: 'Catching precancerous patches early transforms a life-threatening disease into a manageable, highly curable condition.',
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Guided Capture',
    subtitle: 'Assisted Mobile Photography',
    description:
      'A community health worker or patient takes a picture of the oral cavity using guided on-screen visual crosshairs that automatically check lighting, focus, and angle.',
    icon: 'Camera',
    badge: 'Step 1 • Capture',
    details: [
      'Smart camera guides ensure the lesion is in sharp focus and good light',
      'Works with standard smartphone cameras in local community clinics',
      'Images are safely processed on-device with zero personal data uploaded',
    ],
  },
  {
    step: '02',
    title: 'Pattern Extraction',
    subtitle: 'Deep Visual & Risk Profiling',
    description:
      'Advanced computer vision analyzes microscopic variations in color, texture, and borders while incorporating known risk factors like tobacco and betel nut usage.',
    icon: 'Cpu',
    badge: 'Step 2 • Process',
    details: [
      'Extracts 512 subtle textural markers that the human eye might miss',
      'Combines image features with patient lifestyle risk factors',
      'Normalizes the data into compact mathematical vectors for fast analysis',
    ],
  },
  {
    step: '03',
    title: 'Quantum Analysis',
    subtitle: 'High-Dimensional Pattern Matching',
    description:
      'The data is evaluated through an 8-qubit Variational Quantum Classifier (VQC) that examines complex non-linear correlations between tissue changes and clinical risk.',
    icon: 'Sparkles',
    badge: 'Step 3 • Analyze',
    details: [
      'Maps data into a 256-state quantum space to separate healthy from suspicious tissue',
      'Evaluates interconnected risk indicators simultaneously rather than in isolation',
      'Built-in error mitigation ensures reliable, reproducible risk scores',
    ],
  },
  {
    step: '04',
    title: 'Clear Guidance',
    subtitle: 'Actionable Triage & Referral',
    description:
      'Translates raw probabilities into reassuring, plain-language triage strata (Low, Moderate, High) with concrete next steps and hospital-ready clinical reports.',
    icon: 'FileCheck',
    badge: 'Step 4 • Understand',
    details: [
      'Non-alarmist, empathetic results designed to reduce patient anxiety',
      'Clear instructions on whether to schedule follow-up or seek urgent biopsy',
      'One-click export of standardized HL7 FHIR records for doctors',
    ],
  },
];

export const TECH_TIERS: TechnologyTier[] = [
  {
    id: 'mobile',
    title: 'Frontline Mobile Portal',
    tagline: 'Accessible Care in Any Clinic',
    description:
      'A lightweight mobile app built for frontline nurses, community health workers, and patients. Designed to work reliably on budget smartphones in rural areas with poor connectivity.',
    specs: [
      { label: 'Technology', value: 'Flutter Cross-Platform' },
      { label: 'Compatibility', value: 'Android & iOS' },
      { label: 'Offline Capability', value: 'Local On-Device Caching' },
      { label: 'Accessibility', value: 'WCAG AA High-Contrast' },
    ],
    highlights: [
      'On-screen camera overlays guide users to take clinical-grade photos',
      'Large, tactile buttons engineered for gloved health workers',
      'Works offline with instant local triage feedback',
      'Clear, jargon-free result screens designed to minimize panic',
    ],
    icon: 'Smartphone',
    color: 'iris',
  },
  {
    id: 'classical',
    title: 'Computer Vision Engine',
    tagline: 'Deep Morphological Analysis',
    description:
      'Processes oral photographs through optimized convolutional neural networks (MobileNetV3) to isolate fine tissue abnormalities, mucosal color shifts, and lesion borders.',
    specs: [
      { label: 'Backbone', value: 'MobileNetV3 Feature Extractor' },
      { label: 'Feature Embedding', value: '512-Dimensional Vector' },
      { label: 'Risk Factors Ingested', value: 'Tobacco, Alcohol, Betel Nut' },
      { label: 'Inference Time', value: '< 80 milliseconds' },
    ],
    highlights: [
      'Detects micro-texture irregularities invisible in casual visual checks',
      'Seamlessly blends visual data with epidemiological lifestyle risks',
      'Ultra-compact footprint designed for edge smartphone processors',
      'Consistent, objective baseline across different clinic environments',
    ],
    icon: 'Layers',
    color: 'teal',
  },
  {
    id: 'quantum',
    title: 'Quantum ML Classifier',
    tagline: 'Advanced Hilbert-Space Pattern Separation',
    description:
      'The breakthrough computational engine powering Orqis. Leverages quantum state superposition and entanglement to uncover intricate correlations between lifestyle habits and tissue pathology.',
    specs: [
      { label: 'State Representation', value: '8 Qubits (256 Superposition States)' },
      { label: 'Ansatz Topology', value: 'Hardware-Aware CNOT Cascade' },
      { label: 'Optimization', value: 'SPSA Stochastic Gradient Descent' },
      { label: 'Simulation Backend', value: 'Qiskit Aer Simulator' },
    ],
    highlights: [
      'Discovers non-linear risk boundaries that classical linear models miss',
      'Parallel evaluation of interconnected risk signals in Hilbert space',
      'Zero-Noise Extrapolation (ZNE) ensures noise-resilient precision',
      'Engineered to scale from classical simulators to real quantum hardware',
    ],
    icon: 'Atom',
    color: 'quantum',
  },
  {
    id: 'clinical',
    title: 'Clinical Decision Support & FHIR',
    tagline: 'Bridging Field Clinics to Hospital EHRs',
    description:
      'Turns raw AI calculations into standardized clinical intelligence. Connects field screenings directly to hospital Electronic Health Record (EHR) systems using global medical standards.',
    specs: [
      { label: 'Clinical Coding', value: 'SNOMED CT (Code 363349007)' },
      { label: 'Data Standard', value: 'HL7 FHIR R4 Observations' },
      { label: 'Risk Calibration', value: 'Isotonic Probability Scaling' },
      { label: 'Privacy Standard', value: 'Zero PHI Cloud Retention' },
    ],
    highlights: [
      'Calibrated triage tiers: Low Risk (routine check), Moderate (re-check), High (biopsy)',
      'Generates standardized clinical referral summaries ready for hospital specialists',
      'Provides transparent decision rationale rather than a black-box percentage',
      'Empowers doctors with rich diagnostic context before the patient arrives',
    ],
    icon: 'ShieldCheck',
    color: 'slate',
  },
];

export const QUANTUM_CONCEPTS: QuantumConcept[] = [
  {
    title: 'Why Quantum for Oncology?',
    description:
      'Precancerous oral tissue exhibits hundreds of subtle, overlapping visual and genetic traits. Quantum computing handles these high-dimensional relationships naturally in exponential state space.',
    badge: 'The Core Advantage',
    formula: '2⁸ = 256 State Space',
    analogy: 'Like scanning an entire library simultaneously rather than flipping through books page by page.',
  },
  {
    title: 'Amplitude Encoding',
    description:
      'Compresses a dense 256-point visual fingerprint into the quantum amplitudes of 8 entangled qubits with zero loss of spatial detail.',
    badge: 'State Preparation',
    formula: '|ψ⟩ = ∑ xᵢ |i⟩',
    analogy: 'Condensing a high-resolution microscopic photo into a compact quantum signature.',
  },
  {
    title: 'Hardware-Aware Entanglement',
    description:
      'Connects all qubits in a circular cascade, allowing tissue textures, patient history, and risk factors to influence the diagnosis collectively.',
    badge: 'Correlated Decision Making',
    formula: 'CX(qᵢ, qᵢ₊₁)',
    analogy: 'Like a panel of specialized doctors conferring in real-time on different aspects of a patient case.',
  },
  {
    title: 'Calibrated Readout',
    description:
      'Measures the final quantum state along the Pauli-Z axis and translates the physics expectation into a reliable, clinical probability score.',
    badge: 'Clinical Measurement',
    formula: 'P = (1 - ⟨Z⟩) / 2',
    analogy: 'Translates microscopic quantum resonance into a simple, trustworthy triage indicator.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: 'Compassionate & Clear Triage',
    tagline: 'Reducing Health Anxiety',
    description:
      'Receiving a screening result can be alarming. Orqis uses calm, reassuring language and clear next steps, ensuring patients understand what the score means without inducing unnecessary panic.',
    icon: 'HeartHandshake',
    points: [
      'Calm, supportive colors rather than jarring red alarms for preliminary cases',
      'Clear, understandable explanations of why a follow-up is recommended',
      'Explicit reminders that screening is non-invasive and preliminary',
    ],
  },
  {
    title: 'Designed for Frontline Realities',
    tagline: 'Built for Real Community Health Clinics',
    description:
      'Frontline health workers often work under challenging conditions with fluctuating lighting, budget mobile phones, and busy patient queues. Orqis makes accurate capture fast and effortless.',
    icon: 'Eye',
    points: [
      'High-contrast visual indicators readable in bright outdoor sunlight',
      'Large, tactile touch targets designed for gloved clinical use',
      'Immediate capture validation so health workers never doubt image quality',
    ],
  },
  {
    title: 'Uncompromising Privacy',
    tagline: 'Zero Patient Photo Storage',
    description:
      'Patient dignity and data security are fundamental. Orqis processes images locally, generates pseudonymous session IDs, and permanently clears photo buffers after feature extraction.',
    icon: 'Lock',
    points: [
      'No personal names, national IDs, or facial biometrics ever uploaded',
      'Temporary camera buffers immediately wiped after feature processing',
      'Cryptographically hashed audit trails for clinical accountability',
    ],
  },
  {
    title: 'Responsible AI & Doctor Partnership',
    tagline: 'Empowering Clinicians, Not Replacing Them',
    description:
      'Orqis is built to assist clinicians with reliable decision support. It provides transparent risk indicators so doctors understand the rationale behind every referral.',
    icon: 'Shield',
    points: [
      'Clearly highlights contributing factors (e.g. tobacco exposure + tissue ulceration)',
      'Calibrated probability intervals to communicate confidence realistically',
      'Seamless HL7 FHIR export for fast clinical escalation to oncology specialists',
    ],
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    phase: 'Phase 01',
    quarter: 'Q1',
    title: 'Clinical Protocol & Healthcare Mission',
    status: 'completed',
    description:
      'Defined frontline oral oncology screening protocols, epidemiological risk factors (tobacco, betel nut, alcohol), and ethical privacy guidelines.',
    deliverables: [
      'Clinical requirement specifications & risk matrix',
      'Standardized oral cavity photographic protocol',
      'HL7 FHIR R4 interoperability blueprint',
    ],
  },
  {
    phase: 'Phase 02',
    quarter: 'Q2',
    title: 'Mobile Experience & Ergonomic Design',
    status: 'completed',
    description:
      'Engineered the patient-facing mobile application in Flutter with guided camera framing, accessible typography, and offline session storage.',
    deliverables: [
      'Cross-platform Flutter mobile application',
      'Guided viewfinder overlays for lesion alignment',
      'Defensive UI architecture with zero data leakage',
    ],
  },
  {
    phase: 'Phase 03',
    quarter: 'Q3',
    title: 'Classical Feature Pipeline & Edge Inference',
    status: 'completed',
    description:
      'Developed lightweight MobileNetV3 deep learning feature extraction pipelines producing 512D latent embeddings with multimodal clinical integration.',
    deliverables: [
      'MobileNetV3 deep feature extractor',
      'Multimodal clinical risk factor ingestion pipeline',
      'Deterministic feature hashing for audit trails',
    ],
  },
  {
    phase: 'Phase 04',
    quarter: 'Q4',
    title: 'Variational Quantum Classifier (VQC) Engine',
    status: 'completed',
    description:
      'Created 8-qubit hardware-aware parameterized quantum circuits on Qiskit Aer with linear CNOT entanglement and SPSA optimization.',
    deliverables: [
      'Amplitude encoding state preparation module',
      'Hardware-aware VQC ansatz circuit engine',
      'Zero-Noise Extrapolation (ZNE) error mitigation',
    ],
  },
  {
    phase: 'Phase 05',
    quarter: 'Current',
    title: 'Multimodal Fusion & Probability Calibration',
    status: 'in-progress',
    description:
      'Fusing classical visual embeddings with quantum expectation values through isotonic probability calibration and SNOMED CT clinical coding.',
    deliverables: [
      'Isotonic probability calibrator for calibrated risk strata',
      'Automated FHIR Observation & RiskAssessment exporter',
      'Guided standalone interactive research showcase platform',
    ],
  },
  {
    phase: 'Phase 06',
    quarter: 'Future',
    title: 'Multi-Center Community Field Trials',
    status: 'planned',
    description:
      'Preparing prospective community field validation in dental and rural primary health centers, benchmarking Orqis triage against gold-standard histopathological biopsy.',
    deliverables: [
      'Real-world clinical accuracy benchmark study',
      'Deployment on cloud quantum hardware (IBM Quantum / AWS Braket)',
      'Frontline healthcare worker usability study',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: 'Clinical Informatics & Healthcare',
    discipline: 'Medical Systems & FHIR Standards',
    department: 'Healthcare Integration',
    focus: 'HL7 FHIR R4 interoperability, SNOMED CT clinical coding, risk calibration, and medical ethical compliance.',
    avatarPlaceholder: 'MD',
  },
  {
    role: 'Computer Vision & Deep Learning',
    discipline: 'Medical Image Processing',
    department: 'Classical ML Pipeline',
    focus: 'MobileNetV3 512D morphological feature extraction, lesion boundary detection, and multimodal risk vector fusion.',
    avatarPlaceholder: 'CV',
  },
  {
    role: 'Quantum Machine Learning',
    discipline: 'Quantum Algorithms & Optimization',
    department: 'Quantum Computing Research',
    focus: 'Hardware-aware VQC ansatz circuits, SPSA gradient optimization, and Zero-Noise Extrapolation mitigation on Qiskit Aer.',
    avatarPlaceholder: 'QM',
  },
  {
    role: 'Mobile Architecture & UX',
    discipline: 'Patient-Centered Design',
    department: 'Mobile Engineering',
    focus: 'Guided intraoral camera framing, WCAG AA accessibility, offline resilience, and calm clinical user journeys.',
    avatarPlaceholder: 'UX',
  },
];

export const CLINICAL_DISCLAIMER =
  'Orqis is an investigational research initiative and clinical decision support system designed to assist frontline healthcare professionals. It does not provide definitive medical diagnoses or replace histopathological examination by certified healthcare specialists.';
