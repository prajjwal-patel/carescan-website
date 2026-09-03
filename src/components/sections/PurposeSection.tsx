'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PURPOSE_STATS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { AlertCircle, CheckCircle2, Clock, MapPin, Sparkles, Shield, HeartHandshake } from 'lucide-react';

export const PurposeSection: React.FC = () => {
  return (
    <section id="project" className="relative py-14 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <SectionHeader
          badge="The Healthcare Crisis We Are Solving"
          badgeVariant="teal"
          title="Why Early Detection Matters:"
          highlightText="Saving Lives at the Frontline"
          subtitle="Oral cancer is among the deadliest and most disfiguring malignancies when detected late, yet it is almost entirely curable when caught early. Orqis exists to eliminate the diagnostic divide."
        />

        {/* 3 Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PURPOSE_STATS.map((item, i) => (
            <Card
              key={i}
              variant="white"
              padding="md"
              organic="subtle"
              className="relative overflow-hidden group hover:border-teal-300 shadow-xs"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-50 rounded-full -mr-6 -mt-6 pointer-events-none group-hover:scale-125 transition-transform" />
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-700 font-mono">
                {item.stat}
              </p>
              <h3 className="text-base font-bold text-slate-900 mt-2">{item.label}</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>

        {/* Side-by-Side Comparison: Traditional vs Orqis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Traditional Bottlenecks */}
          <Card variant="white" padding="lg" className="border-rose-200/80 bg-gradient-to-b from-rose-50/40 via-white to-white shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="danger">Current Clinical Barrier</Badge>
              <span className="text-xs font-bold text-rose-800">Delayed & Unequal Access</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Why Communities Suffer from Late-Stage Diagnoses
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-5 leading-relaxed">
              In small clinics and rural health posts, non-specialist health workers must rely on visual inspection with poor lighting. Early precancerous white patches (leukoplakia) look identical to harmless ulcers.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Prolonged Referral Delays: </strong> Patients wait 6–12 weeks to see an oral oncology specialist in regional hospitals.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Geographic Isolation: </strong> Rural clinics have zero on-site biopsy or specialized diagnostic infrastructure.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">High Diagnostic Uncertainty: </strong> Up to 40% of subtle dysplastic lesions are dismissed as benign trauma.
                </span>
              </li>
            </ul>
          </Card>

          {/* Orqis Solution */}
          <Card variant="white" padding="lg" className="border-teal-200/80 bg-gradient-to-b from-teal-50/40 via-white to-white shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="teal">The Orqis Solution</Badge>
              <span className="text-xs font-bold text-teal-800">Immediate Frontline Empowerment</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Standardized, Point-of-Care Decision Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-5 leading-relaxed">
              Orqis turns any smartphone into an intelligent triage companion, providing community nurses with instant objective risk scores and automatic specialist referral summaries.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">1-Second Objective Triage: </strong> Instant risk scoring combining deep visual textures and lifestyle exposures.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Quantum-Enhanced Precision: </strong> Quantum ML evaluates multi-dimensional tissue risk patterns classical models miss.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <HeartHandshake className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Calm, Actionable Guidance: </strong> Empowers patients with clear next steps while sending clean FHIR records to doctors.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-2" />
      </div>
    </section>
  );
};
