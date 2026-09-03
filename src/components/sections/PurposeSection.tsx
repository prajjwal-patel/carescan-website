'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PURPOSE_STATS } from '@/lib/constants';
import { OrganicDivider } from '../visual/OrganicDivider';
import { AlertCircle, CheckCircle2, Clock, MapPin, Sparkles, Shield } from 'lucide-react';

export const PurposeSection: React.FC = () => {
  return (
    <section id="project" className="relative py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <SectionHeader
          badge="The Clinical Challenge"
          badgeVariant="teal"
          title="Bridging the Gap in"
          highlightText="Frontline Oral Triage"
          subtitle="Oral cancer is among the most prevalent malignancies in high-risk populations, yet over 65% of cases are diagnosed at late stages when curative treatment is complex and costly."
        />

        {/* 3 Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PURPOSE_STATS.map((item, i) => (
            <Card
              key={i}
              variant="white"
              padding="lg"
              organic="subtle"
              className="relative overflow-hidden group hover:border-teal-200"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50/60 rounded-full -mr-8 -mt-8 pointer-events-none group-hover:scale-125 transition-transform" />
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-700 font-mono">
                {item.stat}
              </p>
              <h3 className="text-base font-bold text-slate-900 mt-2">{item.label}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>

        {/* Side-by-Side Comparison: Traditional vs Orqis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Bottlenecks */}
          <Card variant="white" padding="lg" className="border-rose-100/80 bg-gradient-to-b from-rose-50/30 to-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="danger">Traditional Workflow</Badge>
              <span className="text-xs font-semibold text-rose-700">Delayed Escalation</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Barriers in Primary Healthcare Settings
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              In resource-constrained community clinics, high patient volume and lack of specialized oral oncology training lead to missed early-stage presentations.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Weeks of Waiting: </strong> Patients wait weeks for specialist referral appointments.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Geographical Isolation: </strong> Rural health workers lack immediate access to biopsy facilities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Subjective Visual Inspection: </strong> High variance between examiners for subtle leukoplakia.
                </span>
              </li>
            </ul>
          </Card>

          {/* Orqis Solution */}
          <Card variant="white" padding="lg" className="border-teal-100/80 bg-gradient-to-b from-teal-50/30 to-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="teal">Orqis Platform</Badge>
              <span className="text-xs font-semibold text-teal-700">Immediate Decision Support</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Standardized AI & Quantum Triage
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Orqis turns any smartphone into an objective, standardized screening companion for primary care providers.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Instant Objective Risk Scoring: </strong> Sub-second feature extraction & VQC risk classification.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Multimodal Lifestyle Ingestion: </strong> Evaluates tobacco, betel quid, and clinical history together.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Seamless FHIR Referrals: </strong> Automatically generates standard clinical summary records.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <OrganicDivider position="bottom" fillColor="#FFFFFF" variant="curve-2" />
      </div>
    </section>
  );
};
