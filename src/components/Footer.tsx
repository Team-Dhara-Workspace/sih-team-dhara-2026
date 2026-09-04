import React from 'react';
import { Cpu, Terminal, Sparkles } from 'lucide-react';
import type { ProblemType } from '../types';

interface FooterProps {
  activeTab: ProblemType;
  onTabChange: (tab: ProblemType) => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, onTabChange }) => {
  return (
    <footer className="w-full bg-[#080B11] border-t border-slate-800/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                DHARA
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                SIH 2026
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Innovating with AI, intelligent systems and technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={() => onTabChange('hardware')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeTab === 'hardware'
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Hardware: SIH26180
              </span>
            </button>
            <button
              onClick={() => onTabChange('software')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeTab === 'software'
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Software: SIH26057
              </span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Hardware • Software • AI • Edge Computing
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built for Smart India Hackathon 2026</span>
            <span className="mx-1.5 text-slate-700">•</span>
            <span className="text-slate-400">Team DHARA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
