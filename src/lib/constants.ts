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
  { label: 'Workflow', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Sandbox', href: '#sandbox' },
  { label: 'Ethics', href: '#philosophy' },
  { label: 'Roadmap', href: '#journey' },
  { label: 'Team', href: '#team' },
];

export const HERO_METRICS: MetricItem[] = [
  {
    value: '16-Qubit VQC',
    label: '65,536 Quantum State',
    description: '256×256 grayscale = 65,536 amplitudes = 2¹⁶ — exact amplitude encoding, no lossy compression',
  },
  {
    value: '2,436 / 328',
    label: 'Images / Patients',
    description: 'Strict patient-level split (P_train ∩ P_val ∩ P_test = ∅) — 230 train / 50 val / 48 test patients',
  },
  {
    value: '98.16%',
    label: 'ROI Localization Rate',
    description: 'Frozen MobileNet localizer: 374/381 test images localized (0.5279 mean IoU)',
  },
  {
    value: '182 Tests',
    label: 'Automated Test Suite',
    description: 'Structural defenses against data leakage, condition merging & contamination at Phase D checkpoint',
  },
];

export const PURPOSE_STATS = [
  {
    stat: '377,000+',
    label: 'Lives Impacted Globally Each Year',
    detail: 'Oral cancer is one of the most prevalent and lethal malignancies in underserved regions. Early detection is critical — CareScan brings preliminary screening to frontline health workers.',
  },
  {
    stat: '0.5279 IoU',
    label: 'Validated MobileNet Test Performance',
    detail: 'Frozen MobileNet lesion localizer achieves 0.5285 validation vs 0.5279 test mean IoU on held-out annotated images, trained exclusively on lesion boxes per DEC-020.',
  },
  {
    stat: '328 Patients',
    label: 'Strict Patient-Level Partitioning',
    detail: 'University of Peradeniya Oral Cancer Dataset v1: 2,436 usable images from 328 patients. Split strictly at patient level (230 train / 50 val / 48 test) — no cross-partition patient leakage.',
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Guided Mobile Capture & QC',
    subtitle: 'On-Device Acquisition (com.carescan.patient)',
    description:
      'A frontline healthcare worker captures intra-oral photographs using the Flutter mobile application. The on-device engine performs instant quality checks for illumination, blur, and visibility while stripping all EXIF metadata.',
    icon: 'Camera',
    badge: 'Step 1 • Capture & QC',
    details: [
      'On-device image quality validation flags inadequate lighting or excessive blur',
      'Local preprocessing removes unnecessary EXIF metadata before feature generation',
      'Operates natively on standard budget smartphones in community field clinics',
    ],
  },
  {
    step: '02',
    title: 'Lesion ROI Localization',
    subtitle: 'Frozen MobileNet Localizer (DEC-020)',
    description:
      'The image passes to a frozen MobileNet localizer trained exclusively on supervised lesion boxes. It isolates the suspicious oral region and produces an exact 256×256 deterministic grayscale representation (65,536 uint8 pixels).',
    icon: 'Cpu',
    badge: 'Step 2 • Localize & Crop',
    details: [
      'Excludes broad region boxes to prevent geometric classification shortcuts (AUC 0.983)',
      'Achieves 0.5279 mean IoU on held-out test data with 98.16% localization rate',
      'Transforms the ROI into an exact 256×256 uint8 grayscale pixel array',
    ],
  },
  {
    step: '03',
    title: '16-Qubit Quantum VQC Analysis',
    subtitle: 'Amplitude Encoding & Hardware-Aware Circuit',
    description:
      'The 65,536 normalized pixel values map directly to the 2¹⁶ amplitudes of a 16-qubit quantum state vector without lossy compression. Processed through parameterized Rz(ψ)Ry(ϕ) rotations and hardware-aware coupling entanglement.',
    icon: 'Sparkles',
    badge: 'Step 3 • Quantum VQC',
    details: [
      'Amplitude encoding: 256×256 = 65,536 = 2¹⁶ amplitudes, exactly compatible with 16 qubits',
      'Hardware-aware entanglement layers mapped to IBM Heron r2 (ibm_kingston) topology',
      'Trained via SPSA stochastic gradient descent under Binary Cross-Entropy loss',
    ],
  },
  {
    step: '04',
    title: 'Calibrated Triage & FHIR Reporting',
    subtitle: 'Actionable Clinical Decision Support',
    description:
      'Measures the Pauli-Z expectation ⟨Z_q⟩ on the readout qubit to calculate the preliminary risk probability p = (1 - ⟨Z_q⟩)/2. Automatically formats findings into HL7 FHIR R4 Observations and local clinical PDF referral summaries.',
    icon: 'FileCheck',
    badge: 'Step 4 • Triage & FHIR',
    details: [
      'Calibrated probability stratification into Low, Moderate, and High triage bands',
      'Direct generation of HL7 FHIR R4 Observation and RiskAssessment resources',
      'Includes clear clinical disclaimers emphasizing AI-assisted screening decision support',
    ],
  },
];

export const TECH_TIERS: TechnologyTier[] = [
  {
    id: 'mobile',
    title: 'Frontline Mobile Application',
    tagline: 'Flutter & Dart (com.carescan.patient)',
    description:
      'Cross-platform mobile application engineered for frontline health workers and community nurses. Provides guided camera acquisition, local OpenCV image quality validation, EXIF scrubbing, and offline session resilience.',
    specs: [
      { label: 'Package Identifier', value: 'com.carescan.patient' },
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'Quality Controls', value: 'Illumination, Blur & ROI Size Checks' },
      { label: 'Routing & Navigation', value: 'Centralized go_router' },
    ],
    highlights: [
      'Real-time viewfinder guidance ensuring sharp focus and clinical-grade exposure',
      'Local stripping of all personal EXIF metadata prior to payload preparation',
      'Standardized design tokens for high-contrast accessibility in bright field clinics',
      'Defensive error handling for camera permission denial and offline operations',
    ],
    icon: 'Smartphone',
    color: 'iris',
  },
  {
    id: 'classical',
    title: 'MobileNet ROI Localizer',
    tagline: 'Lesion-Only Supervised Detection',
    description:
      'A frozen MobileNet convolutional network that isolates the lesion region of interest (ROI). Trained strictly on lesion boxes (DEC-020) to eliminate geometric crop shortcuts, outputting a deterministic 256×256 grayscale matrix.',
    specs: [
      { label: 'Model Checkpoint', value: 'localizer.pt (Epoch 17)' },
      { label: 'Input Dimensions', value: '224×224 Bilinear ImageNet Normalization' },
      { label: 'Decision Threshold', value: '0.30 (Selected on Validation F1)' },
      { label: 'Held-Out Test IoU', value: '0.5279 Mean IoU (98.16% Localized)' },
    ],
    highlights: [
      'Eliminated broad region boxes that leaked diagnostic class through geometry (AUC ≈ 0.983)',
      'Validation mean IoU (0.5285) matches test mean IoU (0.5279) with zero overfitting collapse',
      'Outputs an exact 256×256 uint8 grayscale array (65,536 values) for direct quantum encoding',
      'Explicit separation of A (Oracle ROI), B (Predicted ROI), and C (Fallback) conditions',
    ],
    icon: 'Layers',
    color: 'teal',
  },
  {
    id: 'quantum',
    title: 'Hardware-Aware 16-Qubit VQC',
    tagline: 'Variational Quantum Classifier & IBM Heron r2',
    description:
      'A dedicated Variational Quantum Classifier (VQC) operating directly on 65,536 amplitude-encoded quantum states (2¹⁶ = 65,536). Evaluated across 8-, 10-, 12-, and 16-qubit configurations on Qiskit Aer ideal/noisy simulation and IBM Heron r2 (ibm_kingston) real hardware.',
    specs: [
      { label: 'State Representation', value: '16 Qubits (65,536 Normalized Amplitudes)' },
      { label: 'Ansatz Rotations', value: 'U_j(ϕ_j, ψ_j) = R_z(ψ_j) R_y(ϕ_j)' },
      { label: 'Entanglement Layer', value: 'Hardware-Aware Coupling Graph G=(V,E)' },
      { label: 'Optimization Engine', value: 'SPSA (primary) / COBYLA (baseline)' },
    ],
    highlights: [
      'Amplitude encoding: 256×256 = 65,536 = 2¹⁶ — exact state space, no lossy compression',
      'Scalable experiment: 8-, 10-, 12-, 16-qubit configurations evaluated systematically',
      'Hardware transpilation: measured 4,083 CX gates at 12 qubits; extrapolated ~62,940 CX at 16 qubits',
      'Evaluation chain: Ideal Simulation → Noisy Simulation → IBM Heron r2 (ibm_kingston)',
    ],
    icon: 'Atom',
    color: 'quantum',
  },
  {
    id: 'clinical',
    title: 'Clinical Interoperability & Security',
    tagline: 'FastAPI, PostgreSQL & HL7 FHIR R4',
    description:
      'Backend infrastructure orchestrating typed inference payloads, model artifact management, and healthcare system integration. Connects field screenings to hospital EHRs using standardized HL7 FHIR R4 resources.',
    specs: [
      { label: 'Backend Architecture', value: 'FastAPI / Python (Pydantic Schemas)' },
      { label: 'Database Security', value: 'PostgreSQL Row-Level Security (RLS)' },
      { label: 'Clinical Interoperability', value: 'HL7 FHIR R4 (Observation & RiskAssessment)' },
      { label: 'Pseudonymization', value: 'UUIDv4 (clinic_record = clinic_session)' },
    ],
    highlights: [
      'Translates Pauli-Z expectation ⟨Z_q⟩ into calibrated screening probability p = (1 - ⟨Z_q⟩)/2',
      'SNOMED CT coding (363349007) for malignant tumor of oral cavity screening assessment',
      'Zero default retention of raw patient photos or high-dimensional pixel matrices',
      'Row-aligned classical baseline comparisons ensuring fair evaluation on identical populations',
    ],
    icon: 'ShieldCheck',
    color: 'slate',
  },
];

export const QUANTUM_CONCEPTS: QuantumConcept[] = [
  {
    title: 'Exact 16-Qubit State Space',
    description:
      'A 256×256 grayscale image contains exactly 65,536 pixels, which matches the Hilbert-space dimension of a 16-qubit quantum register (2¹⁶ = 65,536 amplitudes).',
    badge: 'Exact Amplitude Encoding',
    formula: '|ψ⟩ = ∑_{i=0}^{65,535} a_i |i⟩,  ∑ |a_i|² = 1',
    analogy: 'Directly mapping every pixel amplitude into quantum state superposition without lossy dimensional compression.',
  },
  {
    title: 'Hardware-Aware Entanglement',
    description:
      'Entangling layers are constructed directly from physical qubit coupling graphs G=(V,E) of target processors (e.g. IBM Heron r2 ibm_kingston), minimizing transpilation SWAP gate overhead.',
    badge: 'Hardware-Aware Ansatz',
    formula: 'U_{rot} = ⨂ R_z(ψ_j) R_y(ϕ_j),  CX(q_i, q_k) ∈ E',
    analogy: 'Structuring quantum gates to respect physical hardware layout, preventing error-prone long-distance qubit swaps.',
  },
  {
    title: 'SPSA Classical Optimization',
    description:
      'Simultaneous Perturbation Stochastic Approximation (SPSA) optimizes the variational parameters θ = (ϕ, ψ) under Binary Cross-Entropy loss in the presence of quantum measurement noise.',
    badge: 'Noise-Tolerant Optimizer',
    formula: 'θ* = arg min_θ L_{BCE}(y, p_m)',
    analogy: 'Navigating noisy quantum energy landscapes with dual-sample gradient approximations.',
  },
  {
    title: 'Pauli-Z Readout & Calibration',
    description:
      'The classifier measures the expectation value of the Pauli-Z operator ⟨Z_q⟩ on the readout qubit, mapping it linearly to a binary screening probability in [0, 1].',
    badge: 'Calibrated Measurement',
    formula: '⟨Z_q⟩ ∈ [-1, 1]  ⟹  p_{cancer} = (1 - ⟨Z_q⟩) / 2',
    analogy: 'Extracting a calibrated oncological risk estimate from the measured quantum superposition state.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    title: 'Patient-Level Data Isolation',
    tagline: 'Eliminating Cross-Patient Data Leakage',
    description:
      'Multiple images from the same patient share correlated visual patterns. CareScan strictly enforces patient-level dataset partitioning (P_train ∩ P_val ∩ P_test = ∅) across all 328 patients.',
    icon: 'Shield',
    points: [
      'Guarantees no patient images appear across training and test partitions simultaneously',
      'Dataset reconstruction: 2,436 usable images from 328 patients (University of Peradeniya Oral Cancer Dataset v1, SMART-OM)',
      'Structural tripwires in test suites prevent accidental condition merging or leakage regressions',
    ],
  },
  {
    title: 'Methodological Rigor over Shortcuts',
    tagline: 'Lesion-Only Supervised Targets (DEC-020)',
    description:
      'Analysis revealed that broad region-box area alone separated diagnostic classes at AUC ≈ 0.983. CareScan decisively rejected broad region annotations to prevent models from learning geometric shortcuts.',
    icon: 'Eye',
    points: [
      'Trained exclusively on 318 lesion-annotated images with verified ground-truth boundaries',
      'Separates experimental conditions: A (Oracle ROI), B (Predicted ROI), and C (Fallback)',
      'Unannotated test images are transparently reported as unverified rather than false successes',
    ],
  },
  {
    title: 'Privacy-Conscious Data Minimization',
    tagline: 'Zero Default Storage of Raw Patient Photos',
    description:
      'The architecture follows strict data minimization. High-dimensional raw images are processed locally on-device and cleared from memory immediately following feature extraction.',
    icon: 'Lock',
    points: [
      'Pseudonymous UUIDv4 tokens separate clinical identifiers from inference records',
      'PostgreSQL Row-Level Security (RLS) ensures strict clinic tenant isolation',
      'Local inference mode and privacy-conscious minimized payload quantum-cloud mode',
    ],
  },
  {
    title: 'Defensible Science & Clinical Humility',
    tagline: 'Row-Aligned Baselines & Clear Disclaimers',
    description:
      'CareScan does not assume quantum superiority in advance. Every quantum configuration is benchmarked against row-aligned classical baselines evaluated on the exact same patient populations.',
    icon: 'HeartHandshake',
    points: [
      'Row-aligned classical comparisons prevent false claims from differing sample prevalence',
      'Simulator conveniences (Aer set_statevector) are clearly distinguished from hardware constraints',
      'Explicitly framed as AI-assisted preliminary decision support, not a definitive diagnosis',
    ],
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    phase: 'Phase A & B',
    quarter: 'Complete',
    title: 'Dataset Reconstruction & Leakage Controls',
    status: 'completed',
    description:
      'Curated the University of Peradeniya Oral Cancer Dataset v1 (2,436 usable images from 328 patients after QC rejection of 33 images). Enforced strict patient-level partitioning and resolved a Ca 2.png filename collision.',
    deliverables: [
      '2,436 usable images from 328 patients (original 2,469 − 33 QC rejections)',
      'Patient-level split: 230 train / 50 val / 48 test — zero cross-partition leakage',
      'Reproducible cache generation and verified dataset manifests',
    ],
  },
  {
    phase: 'Phase C',
    quarter: 'Complete',
    title: 'Frozen MobileNet Lesion Localizer (DEC-020)',
    status: 'completed',
    description:
      'Trained MobileNet exclusively on lesion boxes (DEC-020) to eliminate crop-geometry shortcuts (region-box AUC ≈ 0.983). Frozen checkpoint evaluated on held-out test set: 0.5279 mean IoU.',
    deliverables: [
      'Frozen localizer.pt (Epoch 17, threshold 0.30, SHA-256: 27d6036e…)',
      '98.16% test localization rate (374/381 localized; 7 fallback; 0 rejected)',
      'Validation: 0.5285 mean IoU | Test: 0.5279 mean IoU (96% IoU≥0.25 val)',
    ],
  },
  {
    phase: 'Phase C',
    quarter: 'Complete',
    title: 'Deterministic Pixel Pipeline & Quantum Diagnostics',
    status: 'completed',
    description:
      'Engineered exact 256×256 grayscale representation (65,536 pixels = 2¹⁶ amplitudes). Measured quantum state diagnostics: mean uniform-state overlap 0.946, minimum pairwise overlap 0.607.',
    deliverables: [
      'Exact 16-qubit amplitude encoding without forced dimensionality reduction',
      'State diagnostics: mean overlap 0.946, random ⟨Z₀⟩ spread 0.0186, 1024-shot SE 0.031',
      'Hardware transpilation: measured 4,083 CX at 12Q; extrapolated ~62,940 CX at 16Q',
    ],
  },
  {
    phase: 'Phase D',
    quarter: 'Active Phase',
    title: 'Phase D: 16-Qubit VQC Depth Sweep & Training',
    status: 'in-progress',
    description:
      'Active phase: depth sweep using validation PR-AUC, SPSA optimization under Binary Cross-Entropy loss, and row-aligned evaluation against the classical baseline. Final quantum performance numbers not yet claimed.',
    deliverables: [
      'Depth sweep on validation PR-AUC → frozen VQC configuration',
      'Oracle ROI, Predicted ROI, and Fallback condition evaluations (A/B/C)',
      'Row-aligned classical comparison on identical patient populations',
    ],
  },
  {
    phase: 'Phase E & F',
    quarter: 'Next',
    title: 'Probability Calibration & FastAPI Backend',
    status: 'planned',
    description:
      'Calibrating raw VQC output (raw score → calibrated probability → risk band) without test set contamination. Building production FastAPI inference service with Pydantic schemas and model versioning.',
    deliverables: [
      'Calibrated probability: raw ⟨Z_q⟩ → risk bands (fitted on validation only)',
      'FastAPI backend: image upload → ROI → pixels → VQC → calibration → typed result',
      'HL7 FHIR R4 Observation & RiskAssessment resource generation',
    ],
  },
  {
    phase: 'Phase G – I',
    quarter: 'Roadmap',
    title: 'Flutter Integration, E2E Testing & Product Readiness',
    status: 'planned',
    description:
      'Connecting the Flutter mobile application (Camera/Gallery → Preview → Analyzing → API → Result → History) to the backend, followed by end-to-end security testing, UI polish, and real-device demonstration.',
    deliverables: [
      'Flutter client: Camera/Gallery → API → Result → History screens connected',
      'Security testing: camera denial, invalid images, localization failures, timeouts',
      'Product readiness: UI fidelity, accessibility, documentation, reproducibility record',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: 'Clinical Informatics & Healthcare',
    discipline: 'Medical Systems & FHIR Standards',
    department: 'Healthcare Systems & Ethics',
    focus: 'HL7 FHIR R4 interoperability, SNOMED CT (363349007) clinical coding, patient-safe triage strata, and ethical compliance.',
    avatarPlaceholder: 'MD',
  },
  {
    role: 'Computer Vision & Deep Learning',
    discipline: 'Medical Image Processing',
    department: 'Classical ML & ROI Architecture',
    focus: 'MobileNet lesion localizer (DEC-020), deterministic 256×256 grayscale pixel pipeline, and geometric leakage prevention.',
    avatarPlaceholder: 'CV',
  },
  {
    role: 'Quantum Machine Learning',
    discipline: 'Quantum Algorithms & Optimization',
    department: 'Quantum Computing Research',
    focus: '16-qubit amplitude encoding, hardware-aware ansatz design, SPSA optimization, and IBM Heron r2 (ibm_kingston) execution.',
    avatarPlaceholder: 'QM',
  },
  {
    role: 'Mobile Architecture & UX',
    discipline: 'Patient-Centered Design',
    department: 'Mobile Engineering (Flutter)',
    focus: 'com.carescan.patient client architecture, on-device image quality checks, EXIF scrubbing, and WCAG AA accessibility.',
    avatarPlaceholder: 'UX',
  },
];

export const CLINICAL_DISCLAIMER =
  'CareScan is an investigational research initiative and clinical decision support system designed to assist frontline healthcare professionals. It provides an AI-assisted preliminary screening risk estimate and does not provide a definitive pathological diagnosis or replace histopathological biopsy by certified specialists.';
