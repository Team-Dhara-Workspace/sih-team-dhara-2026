import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldAlert, Search } from 'lucide-react';

export const SoftwareBackground: React.FC = () => {
  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Marine Ecological Crisis"
        badgeVariant="cyan"
        title="Background & Ocean Cleanup Context"
        subtitle="Addressing the critical threat of anthropogenic debris and ghost gear through automated sonar processing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold font-mono text-cyan-400">
            <ShieldAlert className="w-4 h-4" />
            The Destructive Threat of Ghost Nets & Debris
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            The accumulation of anthropogenic (man-made) debris in marine ecosystems poses a critical threat to global biodiversity.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Among the most destructive types of pollution are <strong className="text-cyan-300">“ghost nets”</strong> — abandoned, lost, or discarded fishing gear. These nets continuously trap and kill marine life, destroy coral reefs, and damage commercial vessel propellers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold font-mono text-blue-400">
            <Search className="w-4 h-4" />
            The Bottleneck of Manual Sonar Inspection
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Because the ocean is vast and dark, marine conservationists and underwater technologists rely on Side-Scan Sonar (SSS) instruments. These sensors are towed behind ships or mounted on Autonomous Underwater Vehicles (AUVs) to create detailed acoustic maps of the seafloor.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            However, manual inspection of thousands of kilometers of sonar logs is incredibly slow, tedious, and prone to human error. Debris can easily blend into natural geological features such as rock formations, sand ripples, and marine ridges. Automating this process using computer vision is essential for efficient ocean cleanup operations.
          </p>
        </div>
      </div>
    </section>
  );
};
