import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Sprout, 
  Bug, 
  Droplets, 
  CloudSun, 
  Cpu, 
  UserCheck, 
  BarChart3, 
  Tractor,
  CheckCircle2,
  Flame,
  CloudRain
} from 'lucide-react';

export const HardwareFeatureCards: React.FC = () => {
  const [activeAlertIndex, setActiveAlertIndex] = useState<number>(0);

  const alerts = [
    { title: 'Irrigate Now', detail: 'Plot B soil moisture below 28% VWC. Recommended cycle: 45 min.', color: 'cyan', icon: <Droplets className="w-3.5 h-3.5" /> },
    { title: 'Possible Disease Detected', detail: 'Early Blight symptoms identified on 12% lower leaf canopy.', color: 'purple', icon: <Sprout className="w-3.5 h-3.5" /> },
    { title: 'Pest Activity Increasing', detail: 'Aphid cluster threshold exceeded in Sector 3. Apply bio-control.', color: 'emerald', icon: <Bug className="w-3.5 h-3.5" /> },
    { title: 'Heat-Stress Warning', detail: 'VPD > 2.8 kPa with ambient temperature 39°C. Increase misting.', color: 'amber', icon: <Flame className="w-3.5 h-3.5" /> },
    { title: 'Flood-Risk Alert', detail: 'Rainfall accumulation 75mm/6hr. Ensure drainage channels open.', color: 'blue', icon: <CloudRain className="w-3.5 h-3.5" /> }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="System Capabilities"
        badgeVariant="emerald"
        title="Expected Solution & 8 Feature Pillars"
        subtitle="Modular, multi-faceted edge intelligence delivering continuous field oversight and decision support."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto text-left">
        
        {/* Card 1: Crop Health Monitoring 🌱 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <Sprout className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-emerald-400/80 uppercase font-bold">PILLAR 01</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Crop Health Monitoring 🌱
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              High-resolution canopy diagnosis for disease and nutrient deficiencies.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Visible signs of crop diseases</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Nutrient deficiency analysis</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Color, texture & growth rates</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> Crop phenology tracking</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>Overall Field Health Index</span>
            <span className="font-bold">94.2% OPTIMAL</span>
          </div>
        </div>

        {/* Card 2: Pest Detection 🐛 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 group-hover:scale-105 transition-transform">
                <Bug className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-teal-400/80 uppercase font-bold">PILLAR 02</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Pest Detection 🐛
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Automated pest infestation density tracking and early warning system.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-400 flex-shrink-0" /> Detect common insect pests</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-400 flex-shrink-0" /> Map infestation clusters</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-400 flex-shrink-0" /> Generate early outbreak alarms</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-teal-400 flex-shrink-0" /> Targeted micro-pesticide spray</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-teal-400">
            <span>Spray Reduction Target</span>
            <span className="font-bold">-40% CHEMICALS</span>
          </div>
        </div>

        {/* Card 3: Smart Irrigation 💧 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                <Droplets className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-cyan-400/80 uppercase font-bold">PILLAR 03</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Smart Irrigation 💧
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Dynamic evapotranspiration and soil moisture-guided scheduling.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> Volumetric soil moisture (VWC)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> Soil & ambient temperature</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> Water-stress indexing (CWSI)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> Automated valve recommendations</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-cyan-400">
            <span>Water Conservation</span>
            <span className="font-bold">+35% SAVINGS</span>
          </div>
        </div>

        {/* Card 4: Environmental Risk Monitoring 🌦️ */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                <CloudSun className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-amber-400/80 uppercase font-bold">PILLAR 04</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Environmental Risks 🌦️
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Agro-meteorological surveillance predicting agricultural disasters.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" /> Drought early warning</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" /> Flood & rainfall accumulation</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" /> Heat-stress & canopy scorch</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" /> Localized disaster mitigation</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-amber-400">
            <span>Disaster Warning Lead</span>
            <span className="font-bold">24-48 HR NOTICE</span>
          </div>
        </div>

        {/* Card 5: Edge AI 🤖 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-indigo-400/80 uppercase font-bold">PILLAR 05</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Edge AI 🤖
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Ultra low-power neural compute on farm node with zero cloud lock-in.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-indigo-400 flex-shrink-0" /> On-device NPU inference</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-indigo-400 flex-shrink-0" /> Local image & video processing</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-indigo-400 flex-shrink-0" /> Multi-sensor real-time sync</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-indigo-400 flex-shrink-0" /> Complete offline operability</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-indigo-400">
            <span>Inference Speed</span>
            <span className="font-bold">&lt; 20ms ON-DEVICE</span>
          </div>
        </div>

        {/* Card 6: Farmer Advisory 👨🌾 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <UserCheck className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-emerald-400/80 uppercase font-bold">PILLAR 06</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Farmer Advisory 👨🌾
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Context-aware actionable alerts in plain vernacular language.
            </p>

            {/* Interactive Alert Simulator */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="text-[10px] font-mono text-slate-400 flex justify-between">
                <span>SIMULATED ADVISORY DISPATCH</span>
                <span className="text-emerald-400 cursor-pointer" onClick={() => setActiveAlertIndex((activeAlertIndex + 1) % alerts.length)}>
                  Next Alert ↻
                </span>
              </div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                {alerts[activeAlertIndex].icon}
                <span>{alerts[activeAlertIndex].title}</span>
              </div>
              <div className="text-[11px] text-slate-300">
                {alerts[activeAlertIndex].detail}
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>Dispatch Channels</span>
            <span>App • E-Paper • SMS</span>
          </div>
        </div>

        {/* Card 7: Farm Analytics 📊 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-blue-400/80 uppercase font-bold">PILLAR 07</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Farm Analytics 📊
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Long-term micro-climate & crop health intelligence for yield forecasting.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" /> Historical crop-health curves</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" /> Field-level micro-zonation</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" /> Yield-risk forecasting</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" /> Decision-support insights</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-blue-400">
            <span>Data Retention</span>
            <span className="font-bold">SEASONAL TRENDING</span>
          </div>
        </div>

        {/* Card 8: Scalable Deployment 🚜 */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                <Tractor className="w-5 h-5" />
              </span>
              <span className="font-mono text-[10px] text-purple-400/80 uppercase font-bold">PILLAR 08</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              Scalable Deployment 🚜
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Adaptable architecture for marginal plots to enterprise plantations.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0" /> Smallholder farm friendly</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0" /> FPO & cooperative clusters</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0" /> Weather-data integration</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0" /> Solenoid valve & pump sync</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-purple-400">
            <span>Ecosystem Interop</span>
            <span className="font-bold">OPEN API & MODBUS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
