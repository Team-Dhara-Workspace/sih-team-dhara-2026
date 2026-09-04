import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  SlidersHorizontal
} from 'lucide-react';

export const SoftwareConfidenceNoise: React.FC = () => {
  const [filterThreshold, setFilterThreshold] = useState<number>(75);

  const sampleAnomalies = [
    {
      type: 'Ghost Net',
      confidence: 94,
      location: '13.0827° N, 80.2707° E',
      size: '3.2m × 1.8m',
      status: 'HIGH PRIORITY',
      statusColor: 'bg-red-500/20 text-red-300 border-red-500/30'
    },
    {
      type: 'Submerged Pipe',
      confidence: 87,
      location: '13.0841° N, 80.2735° E',
      size: '4.6m × 0.8m',
      status: 'MEDIUM PRIORITY',
      statusColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    },
    {
      type: 'Unknown Cylinder / Drum',
      confidence: 71,
      location: '13.0815° N, 80.2690° E',
      size: '1.4m × 0.9m',
      status: 'REVIEW REQUIRED',
      statusColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Verification & Gating"
        badgeVariant="cyan"
        title="Confidence Scoring & Noise Filtering Engine"
        subtitle="Eliminating false acoustic alarms through multi-stage geometric and confidence gating."
      />

      <div className="max-w-5xl mx-auto space-y-8 text-left">
        
        {/* 4-Step Linear Flow Diagram */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block mb-1">STAGE 01</span>
              <div className="text-xs font-bold text-white font-mono">Raw Detection</div>
              <p className="text-[10px] text-slate-400 mt-1">High specular bounding proposals</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center relative">
              <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold block mb-1">STAGE 02</span>
              <div className="text-xs font-bold text-cyan-300 font-mono">Noise Filtering</div>
              <p className="text-[10px] text-slate-400 mt-1">Speckle & shadow validation</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center">
              <span className="font-mono text-[10px] text-teal-400 uppercase font-bold block mb-1">STAGE 03</span>
              <div className="text-xs font-bold text-teal-300 font-mono">Confidence Score</div>
              <p className="text-[10px] text-slate-400 mt-1">Weighted backscatter rating</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block mb-1">STAGE 04</span>
              <div className="text-xs font-bold text-emerald-300 font-mono">Validated Anomaly</div>
              <p className="text-[10px] text-emerald-200/80 mt-1">Approved for clean-up log</p>
            </div>

          </div>
        </div>

        {/* Live Filter Sensitivity Adjuster & Example Anomaly Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Filter Threshold Controller */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
              <SlidersHorizontal className="w-4 h-4" />
              CONFIDENCE GATE
            </div>
            
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Acceptance Threshold:</span>
                <span className="font-bold text-cyan-300">{filterThreshold}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                value={filterThreshold}
                onChange={(e) => setFilterThreshold(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>50% (High Recall)</span>
                <span>95% (High Precision)</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Detections falling below <strong className="text-white">{filterThreshold}%</strong> confidence are automatically flagged for manual review or secondary sonar re-pass.
            </p>
          </div>

          {/* Right: Validated Anomaly UI Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleAnomalies.map((item, idx) => {
              const isValidated = item.confidence >= filterThreshold;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isValidated
                      ? 'bg-slate-900/80 border-cyan-500/30 shadow-lg shadow-cyan-950/20'
                      : 'bg-slate-900/30 border-slate-800/60 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-white font-mono">{item.type}</h4>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Confidence:</span>
                      <span className={`font-bold ${isValidated ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {item.confidence}% {isValidated ? '✓' : '(Filtered)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-slate-200">{item.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Size:</span>
                      <span className="text-slate-200">{item.size}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">State:</span>
                    <span className={`font-bold ${isValidated ? 'text-cyan-300' : 'text-slate-500'}`}>
                      {isValidated ? 'ACTIVE TARGET' : 'BELOW THRESHOLD'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
