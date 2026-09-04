import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Camera, 
  Droplets, 
  SunMedium, 
  Cpu, 
  Activity, 
  Bug, 
  BrainCircuit, 
  Smartphone, 
  Tv, 
  MessageSquare, 
  CheckCircle2, 
  ArrowDown, 
  Zap
} from 'lucide-react';

export const HardwareArchitecture: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<string>('edge');

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="System Concept Architecture"
        badgeVariant="emerald"
        title="Hardware System Flow & Data Pipeline"
        subtitle="End-to-end topological data flow from multi-spectral in-field sensors to autonomous crop protection."
      />

      {/* Main Diagram Container */}
      <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#070B10] border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Layer 1: SMART FARM SENSORY ARRAY */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              STAGE 01: SENSORY DATA CAPTURE
            </span>
            <span>SMART FARM FIELD ARRAY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div 
              onClick={() => setSelectedBlock('cameras')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                selectedBlock === 'cameras' 
                  ? 'bg-emerald-500/10 border-emerald-500/60 ring-1 ring-emerald-500/40' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Camera className="w-5 h-5 text-emerald-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">RGB / NIR</span>
              </div>
              <h4 className="text-sm font-bold text-white">Canopy Cameras</h4>
              <p className="text-xs text-slate-400 mt-1">High-res leaf color, texture, lesion & insect imagery</p>
            </div>

            <div 
              onClick={() => setSelectedBlock('soil')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                selectedBlock === 'soil' 
                  ? 'bg-emerald-500/10 border-emerald-500/60 ring-1 ring-emerald-500/40' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Droplets className="w-5 h-5 text-teal-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Multi-Depth</span>
              </div>
              <h4 className="text-sm font-bold text-white">Soil Sensors</h4>
              <p className="text-xs text-slate-400 mt-1">Capacitive moisture, electrical conductivity, NPK & pH</p>
            </div>

            <div 
              onClick={() => setSelectedBlock('environment')}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                selectedBlock === 'environment' 
                  ? 'bg-emerald-500/10 border-emerald-500/60 ring-1 ring-emerald-500/40' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <SunMedium className="w-5 h-5 text-amber-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Micro-Climate</span>
              </div>
              <h4 className="text-sm font-bold text-white">Environment Sensors</h4>
              <p className="text-xs text-slate-400 mt-1">Ambient temperature, relative humidity, solar radiation & rainfall</p>
            </div>
          </div>
        </div>

        {/* Central Connecting Down Arrow */}
        <div className="flex justify-center my-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 shadow-md">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* Layer 2: EDGE AI DEVICE & LOCAL MODELS */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-teal-950/30 border border-emerald-500/30 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 text-white font-bold">
              <Cpu className="w-4 h-4 text-emerald-400" />
              STAGE 02: ON-DEVICE EDGE AI PROCESSING
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] border border-emerald-500/30 font-bold">
              QUANTIZED TENSORFLOW LITE / ONNX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Disease Detection</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">CNN visual segmentation for fungal/bacterial leaf spot, blight & rust</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Bug className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold text-white">Pest Detection</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Lightweight YOLO detector for invasive pests & feeding patterns</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">Water Stress Detection</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Multimodal sensor fusion (VPD + soil tension) calculating crop water stress index</p>
            </div>
          </div>
        </div>

        {/* Central Connecting Down Arrow */}
        <div className="flex justify-center my-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 shadow-md">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Layer 3: DECISION & RECOMMENDATION ENGINE */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-white font-mono mb-1">
            <BrainCircuit className="w-4 h-4 text-amber-400" />
            STAGE 03: LOCAL DECISION & RISK ENGINE
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Evaluates agronomic thresholds, weather forecasts & soil dynamics to synthesize prioritized recommendations
          </p>
        </div>

        {/* Central Connecting Down Arrow */}
        <div className="flex justify-center my-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 shadow-md">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Layer 4: FARMER ADVISORY SYSTEM */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-cyan-400 font-bold">
              <Zap className="w-3.5 h-3.5" />
              STAGE 04: FARMER ADVISORY & MULTI-CHANNEL DISPATCH
            </span>
            <span>ACCESSIBLE UI/UX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Mobile Application
              </div>
              <p className="text-[11px] text-slate-400">Bluetooth/WiFi direct link with visual heatmap & vernacular alerts</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                <Tv className="w-4 h-4 text-emerald-400" />
                Field Display Unit
              </div>
              <p className="text-[11px] text-slate-400">Low-power sunlight-readable E-paper / OLED status screen on hub</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
              <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                GSM / SMS Gateway
              </div>
              <p className="text-[11px] text-slate-400">Fallback text alerts formatted for standard non-smartphone devices</p>
            </div>
          </div>
        </div>

        {/* Final Execution Step */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-teal-950/40 via-emerald-950/40 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                STAGE 05: IRRIGATION / CROP PROTECTION ACTION
              </div>
              <div className="text-xs text-slate-300">
                Automated solenoid valve triggering or targeted organic pesticide application by farmer.
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded bg-teal-900/60 text-teal-200 border border-teal-700/60 whitespace-nowrap">
            CLOSED-LOOP SYSTEM
          </span>
        </div>

      </div>
    </section>
  );
};
