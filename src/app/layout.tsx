import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Orqis — AI & Quantum-Enhanced Oral Screening Research',
  description:
    'Orqis is an open scientific research platform combining mobile imaging, deep convolutional feature extraction, and Variational Quantum Classifiers (VQC) for rapid, accessible preliminary oral oncology triage.',
  keywords: [
    'Orqis',
    'Oral Cancer Screening',
    'Quantum Machine Learning',
    'Variational Quantum Classifier',
    'VQC',
    'Clinical Decision Support',
    'HL7 FHIR R4',
    'Medical Image Analysis',
    'Mobile Triage',
  ],
  authors: [{ name: 'Orqis Research Team' }],
  icons: {
    icon: '/orqis-logo.png',
  },
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
