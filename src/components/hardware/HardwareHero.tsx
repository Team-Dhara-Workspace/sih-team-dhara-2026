import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Sprout, 
  Camera, 
  Droplets, 
  SunMedium, 
  WifiOff, 
  Activity, 
  Smartphone, 
  CheckCircle2, 
  Zap,
  Radio
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const HardwareHero: React.FC = () => {
  const [activeSensor, setActiveSensor] = useState<string>('soil');
  const [moisture, setMoisture] = useState<number>(34);
  const [inferenceTime, setInferenceTime] = useState<number>(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture(prev => Math.min(65, Math.max(25, prev + (Math.random() * 4 - 2))));
      setInferenceTime(Math.floor(16 + Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Problem Meta Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/20 backdrop-blur-md mb-8">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
            <Cpu className="w-4 h-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-400">PROBLEM STATEMENT ID</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono font-bold border border-emerald-700/50">
                SIH26180
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Category: Hardware • Domain: Agriculture, FoodTech & Rural Development</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
            <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            100% Offline Edge Inference
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Title & Overview */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <Sprout className="w-3.5 h-3.5" />
              Smart Agriculture & Disaster Resilience
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              AI-Powered <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Smart Farming</span> Assistant
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A field-deployable edge-AI system that helps farmers detect crop diseases, pests, nutrient deficiencies, irrigation needs, and environmental risks in real time.
          </p>

          {/* Key Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="emerald" icon={<Cpu className="w-3.5 h-3.5" />}>Edge AI</Badge>
            <Badge variant="emerald" icon={<Sprout className="w-3.5 h-3.5" />}>Smart Agriculture</Badge>
            <Badge variant="cyan" icon={<Camera className="w-3.5 h-3.5" />}>Computer Vision</Badge>
            <Badge variant="blue" icon={<Radio className="w-3.5 h-3.5" />}>IoT</Badge>
            <Badge variant="amber" icon={<Activity className="w-3.5 h-3.5" />}>Real-Time Monitoring</Badge>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Inference Latency</div>
              <div className="text-lg font-bold text-white font-mono mt-0.5 flex items-center gap-1">
                {inferenceTime} ms <Zap className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Sensors Monitored</div>
              <div className="text-lg font-bold text-white font-mono mt-0.5">8+ Metrics</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Connectivity</div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">Zero Cloud Dep</div>
            </div>
          </div>
        </div>

        {/* Right Column: Agricultural Technology System Illustration */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-5 shadow-2xl shadow-emerald-950/20">
            {/* Header bar of visual */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-semibold">FIELD-NODE DEPLOYMENT ARCHITECTURE</span>
              </div>
              <span className="text-slate-400">NODE #04-EDGE-AI</span>
            </div>

            {/* Interactive Visual Canvas */}
            <div className="relative rounded-xl bg-[#070B10] border border-slate-800/80 p-4 sm:p-6 overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* System Component Cards Layout */}
              <div className="relative z-10 space-y-4">
                
                {/* Top Tier: Environmental & Camera Inputs */}
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setActiveSensor('camera')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      activeSensor === 'camera' 
                        ? 'bg-cyan-500/15 border-cyan-500/50 text-white' 
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Camera className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-mono text-cyan-300">4K RGB+NIR</span>
                    </div>
                    <div className="text-xs font-bold">Crop Cameras</div>
                    <div className="text-[10px] text-slate-400 font-mono">Canopy Inspection</div>
                  </button>

                  <button 
                    onClick={() => setActiveSensor('soil')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      activeSensor === 'soil' 
                        ? 'bg-emerald-500/15 border-emerald-500/50 text-white' 
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Droplets className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-emerald-300">{moisture.toFixed(0)}% VWC</span>
                    </div>
                    <div className="text-xs font-bold">Soil Sensors</div>
                    <div className="text-[10px] text-slate-400 font-mono">Moisture, NPK, pH</div>
                  </button>

                  <button 
                    onClick={() => setActiveSensor('weather')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      activeSensor === 'weather' 
                        ? 'bg-amber-500/15 border-amber-500/50 text-white' 
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <SunMedium className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-mono text-amber-300">32°C / 68%</span>
                    </div>
                    <div className="text-xs font-bold">Env Sensors</div>
                    <div className="text-[10px] text-slate-400 font-mono">VPD, Lux, Rainfall</div>
                  </button>
                </div>

                {/* Central Processing Core (Edge AI Unit) */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-bold text-white font-mono">ON-FIELD EDGE AI DEVICE</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ON-DEVICE INFERENCE
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3">
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-mono">Disease Engine</span>
                      <span className="text-xs font-bold text-emerald-300">Early Rust / Blight</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-mono">Pest Classifier</span>
                      <span className="text-xs font-bold text-teal-300">Aphids (Low)</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block font-mono">Water Stress</span>
                      <span className="text-xs font-bold text-amber-300">Moderate Stress</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Output Channels: Mobile App / SMS / Smart Valve */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                    <Smartphone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Farmer Mobile / SMS Alert</div>
                      <div className="text-[11px] text-emerald-300 font-mono mt-0.5">
                        "Irrigate Plot B: 45 min at 18:00"
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                    <Droplets className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Smart Irrigation System</div>
                      <div className="text-[11px] text-cyan-300 font-mono mt-0.5">
                        Precision Valve Actuator: AUTO
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom info strip */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Autonomous Decision Loop
              </span>
              <span>Solar / Battery Powered Micro-Station</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
