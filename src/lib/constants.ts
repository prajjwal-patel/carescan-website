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
  { label: 'Project', href: '#project' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Quantum ML', href: '#quantum-ml' },
  { label: 'Interactive Sandbox', href: '#sandbox' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Journey', href: '#journey' },
  { label: 'Team', href: '#team' },
];

export const HERO_METRICS: MetricItem[] = [
  {
    value: '< 850 ms',
    label: 'Pipeline Latency',
    description: 'Rapid on-device feature extraction & simulator inference',
  },
  {
    value: '8 Qubits',
    label: 'VQC State Space',
    description: '256-dimensional Hilbert space for subtle lesion patterns',
  },
  {
    value: 'FHIR R4',
    label: 'Clinical Standard',
    description: 'Interoperable Observation & RiskAssessment resources',
  },
  {
    value: '100% Client Privacy',
    label: 'Pseudonymous Triage',
    description: 'Zero persistent storage of patient identity vectors',
  },
];

export const PURPOSE_STATS = [
  {
    stat: '377,000+',
    label: 'New Oral Cases Annually',
    detail: 'Global annual incidence of oral cavity malignancies according to WHO data, with high concentration in South Asia.',
  },
  {
    stat: '65%+',
    label: 'Diagnosed at Stage III/IV',
    detail: 'The majority of cases are identified late due to subtle early lesion symptoms and limited specialist access in rural clinics.',
  },
  {
    stat: '85%+',
    label: '5-Year Survival When Early',
    detail: 'Detection of premalignant lesions (leukoplakia, erythroplakia) drastically improves curative prognosis.',
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Capture',
    subtitle: 'Standardized Mobile Acquisition',
    description:
      'The frontline healthcare worker or patient captures high-resolution intraoral imagery using guided on-screen visual targets to ensure uniform focal distance, angle, and illumination.',
    icon: 'Camera',
    badge: 'Mobile Patient Portal',
    details: [
      'Interactive focal guide ensures clear lesion framing',
      'EXIF orientation auto-normalization and lighting validation',
      'Local client-side image compression prior to feature processing',
    ],
  },
  {
    step: '02',
    title: 'Process',
    subtitle: 'Deep Convolutional Embedding',
    description:
      'High-resolution imagery is transformed through a deep feature backbone (MobileNetV3) into a dense 512-dimensional latent vector capturing morphological textures, boundaries, and vascular patterns.',
    icon: 'Cpu',
    badge: 'Classical Computer Vision',
    details: [
      'Extracts 512-dimensional morphological feature embeddings',
      'Ingests auxiliary clinical history (tobacco, betel quid, alcohol exposure)',
      'Constructs normalized feature tensors for quantum state preparation',
    ],
  },
  {
    step: '03',
    title: 'Analyze',
    subtitle: 'Variational Quantum Classification',
    description:
      'Feature vectors are encoded into an 8-qubit quantum circuit via amplitude encoding. Parameterized rotation layers and hardware-aware CNOT entanglement evaluate non-linear correlations in Hilbert space.',
    icon: 'Sparkles',
    badge: 'Quantum Machine Learning',
    details: [
      'Amplitude encoding state initialization: |ψ⟩ = ∑ x_i |i⟩',
      'Parameterized Ry(θ) and Rz(ϕ) rotations with linear nearest-neighbor CNOT cascade',
      'Pauli-Z expectation value readout on readout qubit: ⟨Z_0⟩ ∈ [-1, 1]',
    ],
  },
  {
    step: '04',
    title: 'Understand',
    subtitle: 'Calibrated Risk & FHIR Interoperability',
    description:
      'Expectation values are mapped to calibrated risk strata (Low, Moderate, High) via isotonic regression, outputting human-readable clinical guidance and structured HL7 FHIR resources for clinician referral.',
    icon: 'FileCheck',
    badge: 'Clinical Decision Support',
    details: [
      'Multimodal probability calibration with Zero-Noise Extrapolation (ZNE)',
      'Clear, non-alarmist risk classification and recommended clinical follow-ups',
      'Exportable HL7 FHIR R4 Observation and RiskAssessment JSON records',
    ],
  },
];

export const TECH_TIERS: TechnologyTier[] = [
  {
    id: 'mobile',
    title: 'Patient & Frontline Mobile Experience',
    tagline: 'Flutter Cross-Platform Application',
    description:
      'A human-centered mobile interface designed for intuitive, stress-free clinical screening. Built with strict defensive UI practices, local session caching, and WCAG AA accessibility compliance.',
    specs: [
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Design System', value: 'CareScan Token Contract' },
      { label: 'Camera Engine', value: 'Hardware Camera Plugin' },
    ],
    highlights: [
      'Guided viewfinder overlays for lesion alignment',
      'Offline-first inspection history storage with zero PHI leakage',
      'Calm, reassuring results presentation designed to mitigate health anxiety',
      'Instant generation of specialist referral summaries',
    ],
    icon: 'Smartphone',
    color: 'iris',
  },
  {
    id: 'classical',
    title: 'Classical Feature Extraction Pipeline',
    tagline: 'Deep Convolutional Morphological Embeddings',
    description:
      'Computes compact, discriminative latent representations from intraoral photographs. Combines computer vision texture analysis with auxiliary lifestyle and demographic clinical risk indicators.',
    specs: [
      { label: 'Backbone', value: 'MobileNetV3 / EfficientNet' },
      { label: 'Embedding Dimension', value: '512D Latent Vector' },
      { label: 'Auxiliary Features', value: 'Smoking, Betel Quid, Alcohol' },
      { label: 'Feature Preprocessing', value: 'L2 Unit-Norm Normalization' },
    ],
    highlights: [
      'Sub-100ms lightweight feature inference suitable for edge deployment',
      'Extracts fine textural granularities of leukoplakic and erythroplakic tissue',
      'Auxiliary channels dynamically scale weights based on validated epidemiological risk',
      'Deterministic embedding hashing for auditability and reproducible evaluation',
    ],
    icon: 'Layers',
    color: 'teal',
  },
  {
    id: 'quantum',
    title: 'Variational Quantum Classifier (VQC)',
    tagline: 'Hardware-Aware Quantum Circuit Engine',
    description:
      'Leverages high-dimensional quantum Hilbert spaces to identify subtle non-linear decision boundaries that classical linear kernels may underfit. Optimized with SPSA and Zero-Noise Extrapolation.',
    specs: [
      { label: 'State Initialization', value: 'Amplitude Encoding (2^8 = 256 states)' },
      { label: 'Ansatz Depth', value: '2 Layers (Hardware-Aware Coupling)' },
      { label: 'Parameter Count', value: '32 Trainable Rotation Angles' },
      { label: 'Execution Backend', value: 'Qiskit Aer Simulator / Braket Target' },
    ],
    highlights: [
      'Circular & linear nearest-neighbor CNOT entanglement topology',
      'Pauli-Z expectation measurement mapped to probability: P = (1 - ⟨Z⟩)/2',
      'Simultaneous Perturbation Stochastic Approximation (SPSA) gradient training',
      'Zero-Noise Extrapolation (ZNE) error mitigation against gate decoherence',
    ],
    icon: 'Atom',
    color: 'quantum',
  },
  {
    id: 'clinical',
    title: 'Clinical Decision Support & FHIR',
    tagline: 'Interoperable Healthcare Informatics',
    description:
      'Bridges advanced machine learning models with standard hospital EHR systems. Converts raw model probabilities into calibrated risk categories and standardized HL7 FHIR R4 resources.',
    specs: [
      { label: 'Terminology Standard', value: 'SNOMED CT (Code 363349007)' },
      { label: 'Clinical Format', value: 'HL7 FHIR R4 Resources' },
      { label: 'Calibration', value: 'Isotonic Regression / Platt Scaling' },
      { label: 'Audit Trail', value: 'Immutable Structured Audit Logs' },
    ],
    highlights: [
      'Categorizes screening results into Low, Moderate, and High triage strata',
      'Embeds clear clinical disclaimers and recommended follow-up timelines',
      'Generates exportable FHIR Observation and FHIR RiskAssessment JSON bundles',
      'Designed to assist rather than replace certified histopathological biopsy',
    ],
    icon: 'ShieldCheck',
    color: 'slate',
  },
];

export const QUANTUM_CONCEPTS: QuantumConcept[] = [
  {
    title: 'Amplitude Encoding',
    description:
      'Maps a 256-dimensional normalized classical feature vector into the quantum amplitudes of just 8 qubits using exponential dimensional compression.',
    badge: 'State Preparation',
    formula: '|ψ⟩ = ∑ᵢ₌₀²⁵⁵ xᵢ |i⟩',
    analogy: 'Compresses a large visual fingerprint into an entangled microscopic state vector.',
  },
  {
    title: 'Parameterized Rotations',
    description:
      'Applies trainable single-qubit Ry(θ) and Rz(ϕ) rotation gates that adjust the quantum state orientation based on learned weights.',
    badge: 'Variational Ansatz',
    formula: 'U(θ, ϕ) = R_z(ϕ) R_y(θ)',
    analogy: 'Acts like learnable neural weights, rotating the high-dimensional decision hyperplanes.',
  },
  {
    title: 'Entanglement Cascade',
    description:
      'Creates quantum correlations across all 8 qubits via linear nearest-neighbor CNOT cascades with circular boundary closure.',
    badge: 'Hardware-Aware Entanglement',
    formula: 'CX(qᵢ, qᵢ₊₁) ⊗ CX(q₇, q₀)',
    analogy: 'Allows features across different visual zones of the oral tissue to evaluate collective risk together.',
  },
  {
    title: 'Pauli-Z Expectation Readout',
    description:
      'Measures the projection of the primary readout qubit along the Z-axis, yielding an expectation value ⟨Z₀⟩ ∈ [-1, 1] converted to screening probability.',
    badge: 'Measurement & Readout',
    formula: 'P_risk = (1 - ⟨Z₀⟩) / 2',
    analogy: 'Calculates the net balance of quantum states to produce a calibrated clinical probability score.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: 'Clarity & Reassurance',
    tagline: 'Non-Alarmist Clinical Communication',
    description:
      'Receiving a screening result can trigger significant health anxiety. CareScan frames results with calm, objective language, emphasizing preliminary triage and clear next steps rather than frightening medical jargon.',
    icon: 'HeartHandshake',
    points: [
      'Calm neutral palette avoiding aggressive danger alerts',
      'Clear, understandable triage categories with actionable guidance',
      'Explicit reminders that screening is non-diagnostic',
    ],
  },
  {
    title: 'Human-Centered Ergonomics',
    tagline: 'Designed for Real Clinical Conditions',
    description:
      'Frontline health workers often operate in resource-constrained clinics with varying lighting, modest mobile devices, and high patient throughput. CareScan optimizes for speed, simplicity, and low cognitive load.',
    icon: 'Eye',
    points: [
      'High-contrast visual feedback visible in bright natural light',
      'Large 48×48dp minimum touch targets for gloved operation',
      'Immediate tactile confirmation on image capture and submission',
    ],
  },
  {
    title: 'Privacy by Default',
    tagline: 'Zero Persistent Biometric Tracking',
    description:
      'Medical data security is non-negotiable. CareScan employs pseudonymous patient identifiers, local temporary image caching, and strict data boundary encapsulation.',
    icon: 'Lock',
    points: [
      'No personal identification numbers or facial biometrics retained',
      'Local image buffers cleaned immediately after inference',
      'Audit logging strictly anonymized with cryptographic hashing',
    ],
  },
  {
    title: 'Responsible AI & Rigor',
    tagline: 'Transparent Decision Support',
    description:
      'Machine learning must support clinicians, not replace clinical judgment. CareScan provides transparent confidence intervals, multimodal feature transparency, and standards-compliant documentation.',
    icon: 'Shield',
    points: [
      'Zero black-box diagnostic claims; highlights contributing risk factors',
      'Calibrated uncertainty indicators for edge cases',
      'Built-in HL7 FHIR interoperability for seamless clinician escalation',
    ],
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    phase: 'Phase 01',
    quarter: 'Q1',
    title: 'Clinical Protocol & Problem Definition',
    status: 'completed',
    description:
      'Established screening requirements, clinical risk factors (betel quid, tobacco, alcohol exposure), and ethical guidelines for AI-assisted oral lesion triage.',
    deliverables: [
      'Clinical requirement specifications',
      'Multimodal risk factor matrix',
      'FHIR R4 data mapping definitions',
    ],
  },
  {
    phase: 'Phase 02',
    quarter: 'Q2',
    title: 'Mobile Architecture & Design System',
    status: 'completed',
    description:
      'Designed the patient-facing mobile portal in Flutter, implementing the CareScan Stitch design contract with strict accessibility and defensive UI boundaries.',
    deliverables: [
      'Flutter patient mobile application scaffold',
      'Standardized camera capture & guided framing overlay',
      'Centralized design tokens and responsive typography',
    ],
  },
  {
    phase: 'Phase 03',
    quarter: 'Q3',
    title: 'Classical Feature Pipeline & Fast Inference',
    status: 'completed',
    description:
      'Engineered deep convolutional feature extractors yielding 512D latent embeddings with multimodal clinical history integration.',
    deliverables: [
      'MobileNetV3 feature extraction pipeline',
      'Deterministic embedding hashing for auditability',
      'FastAPI orchestration microservices',
    ],
  },
  {
    phase: 'Phase 04',
    quarter: 'Q4',
    title: 'Variational Quantum Classifier (VQC) Modeling',
    status: 'completed',
    description:
      'Developed 8-qubit hardware-aware parameterized ansatz circuits on Qiskit Aer with linear CNOT entanglement and SPSA gradient optimization.',
    deliverables: [
      'Amplitude encoding state preparation modules',
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
      'Integrating classical visual embeddings with quantum expectation values through isotonic probability calibration and SNOMED CT clinical coding.',
    deliverables: [
      'Platt scaling & isotonic risk calibrator',
      'Automated FHIR Observation & RiskAssessment exporter',
      'Standalone interactive research showcase platform',
    ],
  },
  {
    phase: 'Phase 06',
    quarter: 'Future',
    title: 'Multi-Center Clinical Evaluation',
    status: 'planned',
    description:
      'Planning prospective multi-center validation in frontline dental and community health clinics comparing CareScan triage against histopathological gold standards.',
    deliverables: [
      'Real-world clinical accuracy benchmark study',
      'Hardware quantum backend deployment (IBM Quantum / AWS Braket)',
      'Frontline healthcare worker usability study',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: 'Quantum Machine Learning',
    discipline: 'Quantum Algorithms & VQC Optimization',
    department: 'Quantum Computing Research',
    focus: 'Ansatz circuit architecture, SPSA gradient descent, and Zero-Noise Extrapolation mitigation on Qiskit Aer.',
    avatarPlaceholder: 'QM',
  },
  {
    role: 'Computer Vision & Deep Learning',
    discipline: 'Medical Image Processing',
    department: 'Classical ML Pipeline',
    focus: 'MobileNetV3 512D morphological feature extraction, image preprocessing, and multimodal risk vector fusion.',
    avatarPlaceholder: 'CV',
  },
  {
    role: 'Mobile Architecture & UX',
    discipline: 'Cross-Platform Flutter & Stitch UI',
    department: 'Patient Experience Engineering',
    focus: 'Guided intraoral camera framing, WCAG AA accessibility, token contracts, and offline session resilience.',
    avatarPlaceholder: 'UX',
  },
  {
    role: 'Clinical Informatics & Backend',
    discipline: 'Healthcare Interoperability',
    department: 'FastAPI & Clinical Standards',
    focus: 'HL7 FHIR R4 schema design, SNOMED CT terminology integration, probability calibration, and secure APIs.',
    avatarPlaceholder: 'CI',
  },
];

export const CLINICAL_DISCLAIMER =
  'CareScan is an investigational research project and clinical decision support system designed to assist frontline healthcare professionals. It does not provide medical diagnosis or replace definitive histopathological biopsy and examination by a qualified clinical specialist.';
