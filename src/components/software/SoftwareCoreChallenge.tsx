import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Mountain, AlertTriangle, Sparkles } from 'lucide-react';

export const SoftwareCoreChallenge: React.FC = () => {
  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Computer Vision Dilemma"
        badgeVariant="cyan"
        title="The Core Challenge: Natural vs Anthropogenic Confusion"
        subtitle="Acoustic physics cause geological formations and marine debris to generate nearly identical intensity and shadow patterns."
      />

      <div className="max-w-5xl mx-auto space-y-6 text-left">
        
        {/* Warning Callout Box */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-200">
            <strong>Key Acoustic Vision Challenge:</strong> Both natural rock ridges and synthetic ghost nets create high-reflectivity bright regions paired with pitch-black acoustic shadows. Without specialized deep-learning texture segmentation, false alarm rates exceed 60%.
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Column 1: Natural Seafloor */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-slate-400" />
                <h3 className="text-base font-bold text-white font-mono">Natural Seafloor</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                GEOLOGICAL SUBSTRATE
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-bold">•</span>
                <span><strong>Rock Outcrops:</strong> Irregular stone boulders with hard acoustic reflections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-bold">•</span>
                <span><strong>Sand Ripples:</strong> Periodic wave-like dunes mimicking ribbed structures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-bold">•</span>
                <span><strong>Marine Ridges:</strong> Long underwater fractures and coral mounds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-bold">•</span>
                <span><strong>Geological Formations:</strong> Basalt ledges and continental shelf steps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-bold">•</span>
                <span><strong>Natural Shadows:</strong> Elongated shadows from seafloor topography</span>
              </li>
            </ul>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
              Visual Signatures: Organic boundaries, random cluster geometries, non-uniform aspect ratios.
            </div>
          </div>

          {/* Column 2: Man-Made Anomalies */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-slate-900/80 border border-cyan-500/40 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-900/50">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white font-mono">Man-Made Anomalies</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                TARGET ANOMALIES
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-cyan-100">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Ghost Nets:</strong> Entangled synthetic mesh trapping debris on coral</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Shipwrecks:</strong> Hull profiles, masts, ballast piles and metallic frames</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Pipes & Pipelines:</strong> Continuous linear high-intensity acoustic cylinders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Cylinders & Drums:</strong> Regular geometric objects with crisp parallel shadows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Marine Debris:</strong> Discarded plastic crates, cables, tires, industrial waste</span>
              </li>
            </ul>

            <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-900/60 text-[11px] font-mono text-cyan-300">
              Visual Signatures: Geometric lines, uniform mesh textures, sharp shadow cutoffs, high specular highlights.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
