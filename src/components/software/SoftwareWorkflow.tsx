import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  UploadCloud, 
  Sliders, 
  Cpu, 
  Filter, 
  Percent, 
  Tag, 
  MapPin, 
  LayoutDashboard, 
  FileText, 
  ArrowRight
} from 'lucide-react';

export const SoftwareWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: '01',
      title: 'Upload Sonar Log',
      desc: 'Ingest raw multi-channel .XTF, .JSF, or .SDF side-scan sonar files from survey missions.',
      icon: <UploadCloud className="w-5 h-5" />
    },
    {
      id: '02',
      title: 'Preprocess',
      desc: 'Apply slant-range correction, TVG normalization, and Lee/Frost speckle filtering.',
      icon: <Sliders className="w-5 h-5" />
    },
    {
      id: '03',
      title: 'AI Detection',
      desc: 'YOLOv8 & Faster R-CNN scan acoustic highlight-shadow pairs across the entire swath.',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: '04',
      title: 'Noise Filtering',
      desc: 'Prune acoustic multipathing artifacts and transient bubble backscatter reflections.',
      icon: <Filter className="w-5 h-5" />
    },
    {
      id: '05',
      title: 'Confidence Scoring',
      desc: 'Calculate multi-factor probability combining shadow length, highlight intensity & aspect ratio.',
      icon: <Percent className="w-5 h-5" />
    },
    {
      id: '06',
      title: 'Classification',
      desc: 'Categorize target into Ghost Net, Shipwreck, Pipe, Cylinder, or Entangled Debris.',
      icon: <Tag className="w-5 h-5" />
    },
    {
      id: '07',
      title: 'Geotagging',
      desc: 'Fuse ping timestamp, GPS, and vehicle altitude into high-precision WGS84 coordinates.',
      icon: <MapPin className="w-5 h-5" />
    },
    {
      id: '08',
      title: 'Visualization',
      desc: 'Render interactive waterfall imagery, bounding boxes, and nautical spatial heatmaps.',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      id: '09',
      title: 'Report Generation',
      desc: 'Auto-generate structured JSON, CSV, and GIS-compliant bathymetric cleanup manifests.',
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Autonomous Pipeline Lifecycle"
        badgeVariant="cyan"
        title="Complete End-to-End Sonar Workflow"
        subtitle="Chronological execution trace from raw hydrographic ingest to actionable diver manifests."
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
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-110 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {step.icon}
                </div>
                <span className="font-mono text-[10px] text-slate-400 mt-3 font-semibold">
                  STEP {step.id}
                </span>
                <span className={`text-xs font-bold mt-1 line-clamp-2 px-1 ${isActive ? 'text-cyan-300' : 'text-slate-300'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 text-left flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {steps[activeStep].icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400">STEP {steps[activeStep].id} OF 09</span>
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
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
              {step.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold">
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
