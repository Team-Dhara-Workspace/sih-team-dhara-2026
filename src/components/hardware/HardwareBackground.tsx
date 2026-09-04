import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { CloudRain, SunMedium, Bug, AlertOctagon, Layers, Cpu, ShieldAlert } from 'lucide-react';

export const HardwareBackground: React.FC = () => {
  const highlights = [
    { label: 'Drought', icon: <SunMedium className="w-3.5 h-3.5" />, color: 'amber' },
    { label: 'Floods', icon: <CloudRain className="w-3.5 h-3.5" />, color: 'blue' },
    { label: 'Pest', icon: <Bug className="w-3.5 h-3.5" />, color: 'emerald' },
    { label: 'Disease', icon: <AlertOctagon className="w-3.5 h-3.5" />, color: 'purple' },
    { label: 'Heat Stress', icon: <SunMedium className="w-3.5 h-3.5" />, color: 'amber' },
    { label: 'Soil Degradation', icon: <Layers className="w-3.5 h-3.5" />, color: 'emerald' },
    { label: 'Edge AI', icon: <Cpu className="w-3.5 h-3.5" />, color: 'cyan' },
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Context & Importance"
        badgeVariant="emerald"
        title="Background & Problem Landscape"
        subtitle="Addressing agrarian vulnerabilities through on-field intelligence and distributed sensor telemetry."
      />

      {/* Highlighted Keywords Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {highlights.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm font-semibold font-mono text-slate-200 shadow-sm hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
          >
            <span className="text-emerald-400">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold font-mono text-emerald-400">
            <ShieldAlert className="w-4 h-4" />
            Vulnerabilities in Modern Indian Farming
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Agriculture remains a primary livelihood for millions of people in India, but farmers face recurring challenges from droughts, erratic rainfall, floods, pest infestations, crop diseases, heat stress, and soil degradation.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            Climate variability is increasing the frequency of these risks, affecting crop productivity and farm incomes. Many small and marginal farmers lack access to timely diagnostics and expert advice, particularly in regions with limited internet connectivity.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold font-mono text-teal-400">
            <Cpu className="w-4 h-4" />
            The Need for On-Device Edge Intelligence
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Environmental monitoring, edge AI, and local sensing technologies can help deliver real-time insights directly at the farm level without relying on continuous cloud access.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            Early detection of crop stress, pest outbreaks, irrigation issues, and adverse environmental conditions can significantly reduce crop losses and improve resilience against agricultural disasters such as droughts, floods, and disease outbreaks.
          </p>
        </div>
      </div>
    </section>
  );
};
