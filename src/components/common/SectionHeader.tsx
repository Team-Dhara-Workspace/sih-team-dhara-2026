import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'emerald' | 'cyan' | 'amber' | 'blue' | 'purple' | 'slate';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'emerald',
  title,
  subtitle,
  align = 'center'
}) => {
  const badgeColorClasses = {
    emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    amber: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    purple: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    slate: 'text-slate-400 border-slate-700/80 bg-slate-800/80'
  };

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
      {badge && (
        <span
          className={`inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border mb-3 ${badgeColorClasses[badgeVariant]}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
