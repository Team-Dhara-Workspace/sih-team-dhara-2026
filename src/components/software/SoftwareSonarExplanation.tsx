import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Radio } from 'lucide-react';

export const SoftwareSonarExplanation: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { num: '1', title: 'Acoustic Pulse Emission', text: 'The piezoelectric transducer emits high-frequency acoustic pings (100kHz–900kHz) in fan-shaped beams.' },
    { num: '2', title: 'Water Column Propagation', text: 'Sound waves travel through the water column at ~1500 m/s toward the seabed on port and starboard sides.' },
    { num: '3', title: 'Seafloor & Target Interaction', text: 'The acoustic wavefront hits seabed substrate, geological formations, and man-made debris.' },
    { num: '4', title: 'Backscatter Reflection', text: 'Reflected acoustic energy bounces back toward the sonar receiver at variable intensities based on object hardness.' },
    { num: '5', title: 'Echo-to-Intensity Conversion', text: 'Strong specular echoes become high-brightness pixels (white/light gray); soft seabed becomes mid-tone.' },
    { num: '6', title: 'Waterfall Image Synthesis', text: 'Successive pings are stitched line-by-line into a continuous geospatial sonar bathymetry map.' },
    { num: '7', title: 'Acoustic Shadow Formation', text: 'Protruding objects block acoustic rays, casting pitch-black acoustic shadows whose length reveals object height.' },
    { num: '8', title: 'AI Anomaly Segmentation', text: 'Convolutional neural networks parse highlight-shadow pairs to classify debris vs natural seafloor features.' },
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Acoustic Physics & Imaging"
        badgeVariant="cyan"
        title="How Side-Scan Sonar (SSS) Works"
        subtitle="Understanding the principles of acoustic backscatter, shadow geometry, and intensity conversion."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Column: Educational Flow & 8-Step Breakdown */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-400">8-STAGE ACOUSTIC PROCESSING CYCLE</span>
            <span className="text-[10px] font-mono text-slate-400">Click any step to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-500/60 ring-1 ring-cyan-500/40 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'
                    }`}>
                      {item.num}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-7">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Physical Sonar Fan Beam & Acoustic Shadow Diagram */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#060D1A] via-slate-900 to-[#030710] border border-cyan-800/40 shadow-xl">
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" /> ACOUSTIC BEAM GEOMETRY
              </span>
              <span className="text-slate-400 text-[10px]">SWATH PROFILE</span>
            </div>

            {/* Visual Cross-Section Diagram */}
            <div className="relative rounded-xl bg-[#02050D] border border-cyan-950 p-4 font-mono text-center overflow-hidden">
              
              {/* Vessel / Towfish */}
              <div className="flex flex-col items-center">
                <div className="px-3 py-1 rounded bg-cyan-950 border border-cyan-600/50 text-cyan-300 text-xs font-bold shadow-md">
                  Vessel / AUV Towfish
                </div>
                <div className="w-0.5 h-6 bg-cyan-400/60 my-1" />
                <div className="px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
                  [ SSS Transducer Array ]
                </div>
              </div>

              {/* Acoustic Fan Rays */}
              <div className="relative my-3">
                <div className="flex justify-around text-cyan-400 text-xs">
                  <span>↙ Port Beam</span>
                  <span className="text-slate-500 text-[10px]">Nadir</span>
                  <span>Starboard Beam ↘</span>
                </div>
                <div className="h-10 w-full flex items-center justify-between px-6 opacity-60">
                  <div className="w-20 h-px bg-gradient-to-r from-cyan-400 to-transparent -rotate-25 transform origin-right" />
                  <div className="w-20 h-px bg-gradient-to-l from-cyan-400 to-transparent rotate-25 transform origin-left" />
                </div>
              </div>

              {/* Seafloor Line */}
              <div className="w-full h-0.5 bg-slate-600 mb-3" />
              <div className="text-[10px] text-slate-400 mb-2 font-bold tracking-wider">SEAFLOOR BED (SUB-SURFACE)</div>

              {/* Targets on Seafloor */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <div className="text-sm mb-0.5">🪨</div>
                  <div className="text-[10px] text-slate-300 font-bold">Natural Rock</div>
                  <div className="text-[9px] text-slate-500 mt-1 bg-black/60 py-0.5 rounded">Acoustic Shadow</div>
                </div>

                <div className="p-2 rounded bg-red-950/40 border border-red-500/60 ring-1 ring-red-500/30">
                  <div className="text-sm mb-0.5">🕸️</div>
                  <div className="text-[10px] text-red-300 font-bold">Ghost Net</div>
                  <div className="text-[9px] text-red-400 mt-1 bg-black/80 py-0.5 rounded">High Shadow Area</div>
                </div>

                <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                  <div className="text-sm mb-0.5">🪨</div>
                  <div className="text-[10px] text-slate-300 font-bold">Sand Ripple</div>
                  <div className="text-[9px] text-slate-500 mt-1 bg-black/60 py-0.5 rounded">Periodic Shadow</div>
                </div>
              </div>

            </div>

            <div className="mt-3 text-[11px] text-slate-400 leading-relaxed font-sans">
              <strong className="text-cyan-300">Acoustic Shadow Height Formula:</strong> <code className="bg-slate-950 px-1 py-0.5 rounded text-cyan-200 text-[10px] font-mono">H = (L_shadow × Altitude) / Range</code> enables 3D dimensional estimation.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
