/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { getStoredGymConfig, GymConfig } from './config/gymConfig';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PreSaleSection } from './components/PreSaleSection';
import { AboutSection } from './components/AboutSection';
import { WhyGoldsSection } from './components/WhyGoldsSection';
import { GymExperienceSection } from './components/GymExperienceSection';
import { TrainingSection } from './components/TrainingSection';
import { SocialProofSection } from './components/SocialProofSection';
import { LocationSection } from './components/LocationSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ImageManagerModal } from './components/ImageManagerModal';

export default function App() {
  const [config, setConfig] = useState<GymConfig>(() => getStoredGymConfig());
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string>('Strength & Hypertrophy');

  const scrollToPreSale = () => {
    const el = document.getElementById('pre-sale');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProgram = (programTitle: string) => {
    setSelectedGoal(programTitle);
    scrollToLeadForm();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 flex flex-col font-sans selection:bg-[#FFC700] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        config={config}
        onOpenImageManager={() => setIsImageManagerOpen(true)}
        onOpenPreSaleModal={scrollToPreSale}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection
          config={config}
          onExploreClick={scrollToExperience}
          onPreSaleClick={scrollToPreSale}
        />

        {/* Pre-Sale Live Campaign Section with Countdown */}
        <PreSaleSection
          config={config}
          onClaimOffer={scrollToLeadForm}
        />

        {/* About Section: The Mecca of Fitness */}
        <AboutSection
          config={config}
          onPreSaleClick={scrollToPreSale}
        />

        {/* Why Gold's Gym: 6 Core Pillars */}
        <WhyGoldsSection
          onPreSaleClick={scrollToPreSale}
        />

        {/* Gym Experience: Curated Visual Atmosphere */}
        <GymExperienceSection
          config={config}
          onPreSaleClick={scrollToPreSale}
        />

        {/* Training Disciplines: Train Hard, Get Stronger */}
        <TrainingSection
          config={config}
          onSelectProgram={handleSelectProgram}
        />

        {/* Social Proof: Real Instagram Feed & Community */}
        <SocialProofSection
          config={config}
        />

        {/* Venue & Location: Kothrud, Pune */}
        <LocationSection
          config={config}
        />

        {/* High-Converting Pre-Sale Lead Form */}
        <LeadFormSection
          config={config}
          initialGoal={selectedGoal}
        />
      </main>

      {/* Official Footer */}
      <Footer config={config} />

      {/* Floating WhatsApp and Mobile Quick Bar */}
      <FloatingActions config={config} />

      {/* Gym Owner In-App Image & Settings Manager */}
      <ImageManagerModal
        config={config}
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
        onSave={(newCfg) => setConfig(newCfg)}
      />
    </div>
  );
}
