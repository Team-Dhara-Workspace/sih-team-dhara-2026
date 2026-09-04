import React from 'react';
import { Cpu, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import type { ProblemType } from '../types';

interface HeaderProps {
  activeTab: ProblemType;
  onTabChange: (tab: ProblemType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0B0F17]/90 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Team Identity */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
              <span className="font-mono text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                D
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  DHARA
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/60">
                  <Sparkles className="w-3 h-3 text-amber-400" /> SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide uppercase font-medium">
                Smart India Hackathon Innovation Portal
              </p>
            </div>
          </div>

          {/* Segmented Interactive Switcher */}
          <div className="flex items-center">
            <div className="p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner flex items-center gap-1">
              <button
                id="toggle-hardware"
                type="button"
                onClick={() => onTabChange('hardware')}
                className={`relative flex items-center gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === 'hardware'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/30 border border-emerald-400/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                aria-pressed={activeTab === 'hardware'}
              >
                <Cpu className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'hardware' ? 'scale-110 text-emerald-200' : 'text-slate-400'}`} />
                <span className="font-mono uppercase font-bold tracking-wider">HARDWARE</span>
                <span className={`hidden md:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  activeTab === 'hardware' ? 'bg-emerald-800/60 text-emerald-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  SIH26180
                </span>
              </button>

              <button
                id="toggle-software"
                type="button"
                onClick={() => onTabChange('software')}
                className={`relative flex items-center gap-2 px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === 'software'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/30 border border-cyan-400/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                aria-pressed={activeTab === 'software'}
              >
                <Terminal className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'software' ? 'scale-110 text-cyan-200' : 'text-slate-400'}`} />
                <span className="font-mono uppercase font-bold tracking-wider">SOFTWARE</span>
                <span className={`hidden md:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  activeTab === 'software' ? 'bg-cyan-800/60 text-cyan-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  SIH26057
                </span>
              </button>
            </div>
          </div>

          {/* Quick status pill */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Problem Brief
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
