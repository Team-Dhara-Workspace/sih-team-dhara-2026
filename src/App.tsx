import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { ProblemType } from './types';

// Hardware Problem Components (SIH26180)
import { HardwareHero } from './components/hardware/HardwareHero';
import { HardwareBackground } from './components/hardware/HardwareBackground';
import { HardwareArchitecture } from './components/hardware/HardwareArchitecture';
import { HardwareDescription } from './components/hardware/HardwareDescription';
import { HardwareFeatureCards } from './components/hardware/HardwareFeatureCards';
import { HardwareWorkflow } from './components/hardware/HardwareWorkflow';

// Software Problem Components (SIH26057)
import { SoftwareHero } from './components/software/SoftwareHero';
import { SoftwareBackground } from './components/software/SoftwareBackground';
import { SoftwareSonarExplanation } from './components/software/SoftwareSonarExplanation';
import { SoftwareCoreChallenge } from './components/software/SoftwareCoreChallenge';
import { SoftwareDataChallenges } from './components/software/SoftwareDataChallenges';
import { SoftwareAIPipeline } from './components/software/SoftwareAIPipeline';
import { SoftwareDetectionEngine } from './components/software/SoftwareDetectionEngine';
import { SoftwareConfidenceNoise } from './components/software/SoftwareConfidenceNoise';
import { SoftwareGeotagging } from './components/software/SoftwareGeotagging';
import { SoftwareDashboard } from './components/software/SoftwareDashboard';
import { SoftwareWorkflow } from './components/software/SoftwareWorkflow';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProblemType>('hardware');

  const handleTabChange = (tab: ProblemType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Fixed / Sticky Navigation */}
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Interactive Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-300">
        {activeTab === 'hardware' ? (
          <div key="hardware" className="space-y-4">
            <HardwareHero />
            <HardwareBackground />
            <HardwareArchitecture />
            <HardwareDescription />
            <HardwareFeatureCards />
            <HardwareWorkflow />
          </div>
        ) : (
          <div key="software" className="space-y-4">
            <SoftwareHero />
            <SoftwareBackground />
            <SoftwareSonarExplanation />
            <SoftwareCoreChallenge />
            <SoftwareDataChallenges />
            <SoftwareAIPipeline />
            <SoftwareDetectionEngine />
            <SoftwareConfidenceNoise />
            <SoftwareGeotagging />
            <SoftwareDashboard />
            <SoftwareWorkflow />
          </div>
        )}
      </main>

      {/* Global Minimal Footer */}
      <Footer activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default App;
