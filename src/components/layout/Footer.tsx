'use client';

import React from 'react';
import { ShieldAlert, Cpu, FileText, Sparkles, Heart } from 'lucide-react';
import { CLINICAL_DISCLAIMER, NAV_ITEMS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clinical Disclaimer Callout Box */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Clinical Decision Support Disclaimer
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {CLINICAL_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-sm border border-slate-700/60 shrink-0">
                <img
                  src="/orqis-logo.png"
                  alt="Orqis Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">Orqis</span>
                <span className="text-[11px] text-teal-400 font-medium -mt-0.5">Quantum-Enhanced Oral Triage</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              AI-assisted, quantum-enhanced oral screening research designed to empower frontline healthcare providers with rapid, accessible, and privacy-preserving preliminary triage.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-800/60">
                <Cpu className="w-3 h-3" /> Qiskit Aer VQC
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-800/60">
                <FileText className="w-3 h-3" /> HL7 FHIR R4
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800/60">
                <Sparkles className="w-3 h-3" /> MobileNetV3 512D
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Navigation</h5>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Documentation */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Research & Ethics</h5>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(4).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Orqis Research Project. Standalone Open-Access Demonstration.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with clinical precision & empathy</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
