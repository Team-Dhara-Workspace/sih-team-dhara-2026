import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Zap, 
  Scaling, 
  Moon, 
  WifiOff, 
  Rotate3d 
} from 'lucide-react';

export const SoftwareDataChallenges: React.FC = () => {
  const challenges = [
    {
      id: '01',
      title: 'Speckle Noise',
      desc: 'High-frequency acoustic interference caused by constructive and destructive phase interference of backscattered acoustic waves.',
      mitigation: 'Adaptive Lee / Frost filtering & Non-Local Means denoising',
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      color: 'cyan'
    },
    {
      id: '02',
      title: 'Variable Resolution',
      desc: 'Range-dependent beam spreading and disparate sonar models (100kHz vs 900kHz) lead to non-uniform spatial pixel resolutions across the swath.',
      mitigation: 'Slant-range correction & multi-scale spatial pyramid pooling',
      icon: <Scaling className="w-5 h-5 text-blue-400" />,
      color: 'blue'
    },
    {
      id: '03',
      title: 'Acoustic Shadows',
      desc: 'Obstacles block sound pulses, producing high-contrast zero-intensity regions that hide adjacent objects and fool naive threshold detectors.',
      mitigation: 'Shadow-Highlight joint segmentation & shadow length geometry models',
      icon: <Moon className="w-5 h-5 text-amber-400" />,
      color: 'amber'
    },
    {
      id: '04',
      title: 'Data Dropouts',
      desc: 'Thermal clines, aeration bubbles, vehicle turns, and acoustic multi-pathing produce missing swaths or blank stripes in the raw waterfall.',
      mitigation: 'Spatial inpainting, ping interpolation & dropout masking algorithms',
      icon: <WifiOff className="w-5 h-5 text-red-400" />,
      color: 'red'
    },
    {
      id: '05',
      title: 'Vehicle Motion Artifacts',
      desc: 'AUV or towfish heave, pitch, roll, and yaw distort the acoustic wavefront, causing wavy seafloor artifacts and geometric stretching.',
      mitigation: 'IMU / Doppler Velocity Log (DVL) motion compensation & attitude correction',
      icon: <Rotate3d className="w-5 h-5 text-purple-400" />,
      color: 'purple'
    }
  ];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <SectionHeader
        badge="Sensor Artifacts"
        badgeVariant="cyan"
        title="Sonar Data Challenges & AI Preprocessing"
        subtitle="Addressing acoustic physics distortions inherent to real-world maritime Side-Scan Sonar acquisition."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto text-left">
        {challenges.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                  {item.icon}
                </span>
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  CHALLENGE {item.id}
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-mono">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-300">
              <span className="text-slate-400 block text-[10px]">AI Pipeline Mitigation:</span>
              <span className="font-semibold">{item.mitigation}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
