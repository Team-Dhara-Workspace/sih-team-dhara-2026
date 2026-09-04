import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Radio, 
  FileCode2, 
  Sliders, 
  Cpu, 
  Search, 
  Filter, 
  Layers, 
  MapPin, 
  Database, 
  LayoutDashboard, 
  FileSpreadsheet, 
  ArrowDown, 
  CheckCircle2 
} from 'lucide-react';

export const SoftwareAIPipeline: React.FC = () => {
  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Deep Learning Architecture"
        badgeVariant="cyan"
        title="Automated Sonar CV & Geolocation Pipeline"
        subtitle="From raw acoustic pings to validated geospatial debris database records and reports."
      />

      <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#070E1C] via-slate-900 to-[#040810] border border-cyan-900/40 shadow-2xl relative overflow-hidden text-center">
        
        {/* Stage 1: Acquisition & Ingestion */}
        <div className="max-w-md mx-auto space-y-3">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white font-mono">SIDE-SCAN SONAR (SSS)</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-300">TOWFISH / AUV</span>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-4 h-4 text-cyan-500 animate-bounce" />
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-white font-mono">RAW SONAR LOGS</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">.XTF / .JSF / .SDF FORMATS</span>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </div>

        {/* Stage 2: Data Preprocessing */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-cyan-400 flex items-center gap-1.5">
              <Sliders className="w-4 h-4" /> DATA PREPROCESSING & CLEANING
            </span>
            <span className="text-slate-400 text-[10px]">SLANT-RANGE & HEAVE FILTER</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-left">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-white font-mono">01. Denoise</div>
              <p className="text-[10px] text-slate-400 mt-0.5">Lee & Frost speckle filter</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-white font-mono">02. Normalize</div>
              <p className="text-[10px] text-slate-400 mt-0.5">Time-Varied Gain (TVG)</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-white font-mono">03. Motion Correct</div>
              <p className="text-[10px] text-slate-400 mt-0.5">Pitch / Roll DVL sync</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </div>

        {/* Stage 3: AI Inference Core */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/40 max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> AI DEEP LEARNING MODEL
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] border border-cyan-500/30 font-bold">
              YOLOv8 + U-Net DUAL HEAD
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-left">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white font-mono">
                <Search className="w-3.5 h-3.5 text-cyan-400" /> Object Detection
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Fast bounding box locator for shipwrecks, pipes, cylinders & debris.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-400 font-mono">
                <Layers className="w-3.5 h-3.5 text-teal-400" /> Semantic Segmentation
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Pixel-accurate contour delineation for irregular ghost nets & ropes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </div>

        {/* Stage 4: Filtering & Verification Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 font-mono">
              <Filter className="w-3.5 h-3.5" /> CONFIDENCE FILTER
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Thresholding &gt; 70% IoU + shadow highlight verification
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" /> NATURAL VS ARTIFICIAL
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Eliminates sand ripples, basalt ridges & reef boulders
            </p>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </div>

        {/* Stage 5: Geolocation & Database */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 font-mono">
              <MapPin className="w-3.5 h-3.5" /> GEOLOCATION FUSION
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Ping offset + USBL/GPS coordinate transformation
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 font-mono">
              <Database className="w-3.5 h-3.5" /> ANOMALY DATABASE
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              PostGIS spatial index & high-resolution crop archive
            </p>
          </div>
        </div>

        <div className="flex justify-center my-3">
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </div>

        {/* Stage 6: Visualization & Reporting Outputs */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 via-cyan-950/40 to-slate-900 border border-cyan-500/40 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-xs font-bold text-white font-mono">WEB INTERACTIVE DASHBOARD</div>
              <div className="text-[11px] text-slate-300">Live waterfall viewer with bounding box toggles</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300 flex items-center gap-1">
              <FileSpreadsheet className="w-3.5 h-3.5" /> JSON / CSV REPORT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
