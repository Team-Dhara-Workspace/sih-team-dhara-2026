import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Waves, 
  Camera, 
  Compass, 
  Cpu, 
  Radio, 
  Anchor, 
  CheckCircle2, 
  Crosshair, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const SoftwareHero: React.FC = () => {
  const [beamAngle, setBeamAngle] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeamAngle(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Background glow effects - Ocean Cyan & Deep Navy Blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Problem Meta Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md mb-8">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Terminal className="w-4 h-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyan-400">PROBLEM STATEMENT ID</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono font-bold border border-cyan-700/50">
                SIH26057
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Category: Software • Domain: Ocean Technology, AI/ML & Marine Conservation</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            Side-Scan Sonar (SSS) Computer Vision
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Title & Overview */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
              <Waves className="w-3.5 h-3.5" />
              Marine Autonomy & Acoustic CV
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">Underwater Marine Debris</span> Detection
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            An automated computer-vision pipeline that analyzes Side-Scan Sonar imagery to identify marine debris, shipwrecks, pipes, cylinders, ghost nets, and other underwater anomalies.
          </p>

          {/* Key Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="cyan" icon={<Radio className="w-3.5 h-3.5" />}>Side-Scan Sonar</Badge>
            <Badge variant="cyan" icon={<Camera className="w-3.5 h-3.5" />}>Computer Vision</Badge>
            <Badge variant="blue" icon={<Cpu className="w-3.5 h-3.5" />}>AI/ML</Badge>
            <Badge variant="amber" icon={<Crosshair className="w-3.5 h-3.5" />}>Anomaly Detection</Badge>
            <Badge variant="purple" icon={<Compass className="w-3.5 h-3.5" />}>Geospatial Intelligence</Badge>
            <Badge variant="emerald" icon={<Cpu className="w-3.5 h-3.5" />}>Edge AI</Badge>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Detection Acc. (mAP)</div>
              <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5 flex items-center gap-1">
                93.8% <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Target Classes</div>
              <div className="text-lg font-bold text-white font-mono mt-0.5">6 Debris Types</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Survey Speedup</div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">40x vs Manual</div>
            </div>
          </div>
        </div>

        {/* Right Column: Underwater Sonar Bathymetry & Detection Visual */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#050D18] border border-cyan-900/50 p-5 shadow-2xl shadow-cyan-950/40">
            
            {/* Header bar of visual */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-semibold">SSS ACOUSTIC SWATH TELEMETRY</span>
              </div>
              <span className="text-slate-400 font-mono">AUV-SSS-LOG // 450kHz</span>
            </div>

            {/* Simulated Waterfall Sonar & Detection Canvas */}
            <div className="relative rounded-xl bg-[#040811] border border-cyan-950 p-4 sm:p-5 overflow-hidden">
              
              {/* Sweeping Sonar Beam Visual Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-75 shadow-[0_0_15px_#22d3ee] pointer-events-none transition-all duration-75"
                style={{ left: `${beamAngle}%` }}
              />

              {/* Underwater Acoustic Waterfall Visual Container */}
              <div className="relative z-10 space-y-3 font-mono">
                
                {/* Top: Sonar Towfish / AUV Status */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200 font-bold">TOWFISH DEPTH: 18.4m</span>
                  </div>
                  <span className="text-[11px] text-cyan-300">ALTITUDE: 5.2m OFF SEAFLOOR</span>
                </div>

                {/* Sonar Scan Line Visualization Area */}
                <div className="relative h-44 rounded-lg bg-gradient-to-b from-[#0A1628] via-[#06101E] to-[#030810] border border-cyan-900/40 p-3 overflow-hidden flex flex-col justify-between">
                  
                  {/* Acoustic Shadow Grayscale texture background */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Sonar Center Port/Starboard Nadir Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/40 border-r border-dashed border-cyan-400/30" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 text-[9px] text-cyan-400/80 bg-slate-950/80 px-1 rounded">
                    NADIR (BLIND ZONE)
                  </div>

                  {/* Target 1: Ghost Net with Bounding Box & Acoustic Shadow */}
                  <div className="absolute top-8 left-6 p-2 rounded border border-red-500 bg-red-950/40 backdrop-blur-xs">
                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="font-bold text-red-300">GHOST NET</span>
                      <span className="px-1 py-0.2 rounded bg-red-500/30 text-red-200">94% CONF</span>
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Dims: 3.2m × 1.8m</div>
                    {/* Simulated Acoustic Shadow Bar behind object */}
                    <div className="w-16 h-2 bg-black/80 border-t border-slate-700/60 mt-1 rounded-xs" title="Acoustic Shadow" />
                  </div>

                  {/* Target 2: Submerged Pipe with Segmentation Overlay */}
                  <div className="absolute top-16 right-6 p-2 rounded border border-amber-500 bg-amber-950/40 backdrop-blur-xs">
                    <div className="flex items-center justify-between gap-2 text-[10px]">
                      <span className="font-bold text-amber-300">PIPE / CYLINDER</span>
                      <span className="px-1 py-0.2 rounded bg-amber-500/30 text-amber-200">87% CONF</span>
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Length: 4.6m</div>
                    <div className="w-20 h-2 bg-black/80 border-t border-slate-700/60 mt-1 rounded-xs" />
                  </div>

                  {/* Port & Starboard Swath Labels */}
                  <div className="flex justify-between text-[10px] text-slate-500 z-10 pt-28">
                    <span>← PORT SWATH (50m)</span>
                    <span>STARBOARD SWATH (50m) →</span>
                  </div>
                </div>

                {/* Bottom Live Geotag Output */}
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200 font-mono text-[11px]">
                      GEOLOCATION: 13.0827° N, 80.2707° E
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    VALIDATED ANOMALY
                  </span>
                </div>

              </div>
            </div>

            {/* Bottom info strip */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Resolution Sonar CV Engine
              </span>
              <span>Raw SSS Log (.XTF / .JSF) Compatible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
