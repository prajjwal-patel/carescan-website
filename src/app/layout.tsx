import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-brand',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Orqis — AI & 16-Qubit Quantum-Enhanced Oral Screening Research',
  description:
    'Orqis is a privacy-conscious hybrid quantum-classical research framework combining frozen MobileNet lesion localization (DEC-020), 16-qubit amplitude-encoded VQC (65,536 states), and strict patient-level evaluation integrity on the University of Peradeniya Oral Cancer Dataset v1 (SMART-OM). Phase D VQC experiment active.',
  keywords: [
    'Orqis',
    'Oral Cancer Screening',
    'Quantum Machine Learning',
    'Variational Quantum Classifier',
    '16-Qubit VQC',
    'MobileNet ROI Localizer',
    'Clinical Decision Support',
    'HL7 FHIR R4',
    'SMART-OM Dataset',
    'University of Peradeniya Oral Cancer Dataset',
    'IBM Heron r2',
    'IBM Quantum',
  ],
  authors: [{ name: 'Orqis Research Team' }],
  icons: {
    icon: '/orqis-logo.png',
  },
};

import { AppProviders } from '@/components/providers/AppProviders';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${outfit.variable} ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased text-slate-900 dark:text-slate-100 bg-stone-50 dark:bg-slate-950 selection:bg-teal-100 selection:text-teal-950 dark:selection:bg-teal-900 dark:selection:text-teal-100 transition-colors duration-300">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
