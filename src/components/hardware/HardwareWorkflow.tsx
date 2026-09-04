import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Camera, 
  Database, 
  Cpu, 
  Search, 
  AlertTriangle, 
  BrainCircuit, 
  BellRing, 
  Zap, 
  LineChart, 
  ArrowRight
} from 'lucide-react';

export const HardwareWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: '01',
      title: 'Sensors + Cameras',
      desc: 'Multispectral RGB/NIR imaging & soil probe telemetry capture raw ground truth.',
      icon: <Camera className="w-5 h-5" />,
      color: 'emerald'
    },
    {
      id: '02',
      title: 'Data Collection',
      desc: 'Local micro-controller aggregates analog & digital signals at calibrated frequencies.',
      icon: <Database className="w-5 h-5" />,
      color: 'teal'
    },
    {
      id: '03',
      title: 'Edge Processing',
      desc: 'Raw stream noise filtering, image normalization, and feature vector extraction on device.',
      icon: <Cpu className="w-5 h-5" />,
      color: 'cyan'
    },
    {
      id: '04',
      title: 'AI Detection',
      desc: 'Quantized neural network computes disease, pest, and moisture stress probabilities.',
      icon: <Search className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: '05',
      title: 'Risk Analysis',
      desc: 'Agronomic risk engine evaluates cumulative disaster thresholds and weather forecasts.',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'amber'
    },
    {
      id: '06',
      title: 'Recommendation Engine',
      desc: 'Synthesizes targeted irrigation volumes, spray formulations, and timing schedules.',
      icon: <BrainCircuit className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: '07',
      title: 'Farmer Alert',
      desc: 'Dispatches multi-lingual notification to App, field E-Paper display, or SMS.',
      icon: <BellRing className="w-5 h-5" />,
      color: 'emerald'
    },
    {
      id: '08',
      title: 'Action',
      desc: 'Direct solenoid valve trigger or farmer manual application in affected crop zone.',
      icon: <Zap className="w-5 h-5" />,
      color: 'teal'
    },
    {
      id: '09',
      title: 'Historical Analytics',
      desc: 'Local telemetry synced to flash memory for seasonal trend and yield forecasting.',
      icon: <LineChart className="w-5 h-5" />,
      color: 'cyan'
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="End-to-End Operational Lifecycle"
        badgeVariant="emerald"
        title="Hardware Workflow & Execution Pipeline"
        subtitle="Step-by-step data transformation from physical field signals to validated remediation."
      />

      {/* Desktop / Tablet Horizontal Timeline */}
      <div className="hidden lg:block max-w-6xl mx-auto overflow-x-auto pb-4">
        <div className="grid grid-cols-9 gap-2 relative">
          {/* Connector Line */}
          <div className="absolute top-7 left-6 right-6 h-0.5 bg-slate-800 -z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center text-center cursor-pointer group relative z-10"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/25 scale-110'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {step.icon}
                </div>
                <span className="font-mono text-[10px] text-slate-400 mt-3 font-semibold">
                  STEP {step.id}
                </span>
                <span className={`text-xs font-bold mt-1 line-clamp-2 px-1 ${isActive ? 'text-emerald-300' : 'text-slate-300'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/30 text-left flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              {steps[activeStep].icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-400">STEP {steps[activeStep].id} OF 09</span>
                <span className="text-white font-bold text-base font-mono">{steps[activeStep].title}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1">{steps[activeStep].desc}</p>
            </div>
          </div>
          <button
            onClick={() => setActiveStep((activeStep + 1) % steps.length)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Next Step <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden max-w-lg mx-auto space-y-3 text-left">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 font-bold">
                  STEP {step.id}
                </span>
                <h4 className="text-xs font-bold text-white">{step.title}</h4>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
