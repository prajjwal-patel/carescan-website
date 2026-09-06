'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldAlert, Cpu, FileText, Sparkles, Heart } from 'lucide-react';
import { CLINICAL_DISCLAIMER, NAV_ITEMS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden font-body border-t border-slate-800/80">
      {/* Ambient background glows for curtain reveal effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clinical Disclaimer Callout Box with High-Tech Glass Styling */}
        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-start gap-4 shadow-xl">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-xs">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>Clinical Decision Support Disclaimer</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                Notice
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              {CLINICAL_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-md border border-slate-700/60 shrink-0">
                <Image
                  src="/orqis-logo.png"
                  alt="Orqis Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Orqis
                </span>
                <span className="text-[11px] text-teal-400 font-medium -mt-0.5">
                  Quantum-Classical Oral Cancer Screening Research
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-body">
              A privacy-conscious hybrid quantum-classical framework combining frozen MobileNet ROI localization (DEC-020), 16-qubit amplitude-encoded VQC (65,536 states), and strict patient-level evaluation integrity on the University of Peradeniya Oral Cancer Dataset v1 (SMART-OM).
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-300 bg-teal-950/70 px-3 py-1 rounded-full border border-teal-800/70 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-teal-400" /> IBM Heron r2 & Aer
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/70 shadow-2xs">
                <FileText className="w-3.5 h-3.5 text-indigo-400" /> HL7 FHIR R4
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-purple-300 bg-purple-950/70 px-3 py-1 rounded-full border border-purple-800/70 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> 16-Qubit VQC (2¹⁶)
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400">
              Project Architecture
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm font-body">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Documentation */}
          <div className="space-y-3">
            <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400">
              Research & Ethics
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm font-body">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© {new Date().getFullYear()} Orqis Research Project. University of Peradeniya Oral Cancer Dataset v1 (SMART-OM) &amp; IBM Quantum Evaluation.</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with clinical precision & empathy</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
