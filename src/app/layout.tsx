import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareScan — AI & Quantum-Enhanced Oral Screening Research',
  description:
    'CareScan is a standalone research platform combining mobile imaging, deep convolutional feature extraction, and Variational Quantum Classifiers (VQC) for rapid, accessible preliminary triage.',
  keywords: [
    'CareScan',
    'Oral Cancer Screening',
    'Quantum Machine Learning',
    'Variational Quantum Classifier',
    'VQC',
    'Clinical Decision Support',
    'HL7 FHIR R4',
    'Medical Image Analysis',
    'Mobile Triage',
  ],
  authors: [{ name: 'CareScan Research Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-stone-50 font-sans">{children}</body>
    </html>
  );
}
