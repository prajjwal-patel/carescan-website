import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PurposeSection } from '@/components/sections/PurposeSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TechnologyStack } from '@/components/sections/TechnologyStack';
import { QuantumMLSection } from '@/components/sections/QuantumMLSection';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { TeamSection } from '@/components/sections/TeamSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50/50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. The Problem & Clinical Purpose */}
        <PurposeSection />

        {/* 3. How It Works (Capture -> Process -> Analyze -> Understand) */}
        <HowItWorks />

        {/* 4. Technology Stack Architecture */}
        <TechnologyStack />

        {/* 5. Quantum ML Research & Circuit Visualizer */}
        <QuantumMLSection />

        {/* 6. Interactive Conceptual Sandbox (Standalone Demo) */}
        <InteractiveDemo />

        {/* 7. Design Ethics & Human-Centered Philosophy */}
        <PhilosophySection />

        {/* 8. Project Evolution Timeline */}
        <TimelineSection />

        {/* 9. Multidisciplinary Research Team */}
        <TeamSection />
      </main>

      {/* 10. Footer with Clinical Disclaimer */}
      <Footer />
    </div>
  );
}
