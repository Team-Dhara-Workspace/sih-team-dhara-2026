import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Cpu, 
  Eye, 
  Sparkles, 
  TrendingDown, 
  ShieldCheck
} from 'lucide-react';

export const HardwareDescription: React.FC = () => {
  const coreDeliverables = [
    {
      title: 'Autonomous In-Field Edge AI',
      desc: 'Operates locally on edge devices deployed in farms, enabling rapid inference & recommendations even in areas with poor or intermittent connectivity.',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Multimodal Sensor Fusion',
      desc: 'Combines RGB/NIR canopy cameras with multi-depth soil moisture, NPK, and ambient weather telemetry for holistic agronomic diagnostics.',
      icon: <Eye className="w-4 h-4 text-teal-400" />
    },
    {
      title: 'Resource & Cost Optimization',
      desc: 'Helps farmers make informed decisions about irrigation scheduling, targeted pesticide application, and fertilizer usage to slash input costs.',
      icon: <TrendingDown className="w-4 h-4 text-cyan-400" />
    },
    {
      title: 'Proactive Disaster Prevention',
      desc: 'Delivers actionable alerts and early warnings through mobile and field displays before emerging stresses turn into large-scale crop failures.',
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Technical Scope"
        badgeVariant="emerald"
        title="Comprehensive System Description"
        subtitle="A resilient, decentralized cyber-physical agricultural assistant engineered for field deployment."
      />

      <div className="max-w-5xl mx-auto space-y-8 text-left">
        {/* Main Narrative Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 space-y-4">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Develop a <strong className="text-emerald-300 font-semibold">Smart Farming Assistant</strong>, an edge AI-powered solution that continuously monitors crop health and environmental conditions directly in the field.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Using a combination of cameras, environmental sensors, and on-device AI, the system identifies crop diseases, pest infestations, nutrient deficiencies, water stress, and irrigation requirements in real time.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The solution operates locally on edge devices deployed in farms, enabling rapid analysis and recommendations even in areas with poor connectivity. The platform provides actionable alerts and recommendations through a simple mobile or field display interface, enabling farmers to respond quickly to emerging risks before they become large-scale crop failures.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>Edge AI enables real-time decision-making while reducing dependence on cloud infrastructure.</span>
          </div>
        </div>

        {/* 4 Pillars of Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="p-1.5 rounded-lg bg-slate-800 border border-slate-700">
                  {item.icon}
                </span>
                <h4 className="text-sm font-bold text-white font-mono">{item.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
