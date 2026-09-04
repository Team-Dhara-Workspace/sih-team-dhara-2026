import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'amber' | 'blue' | 'purple' | 'slate';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  icon
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/15',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/15',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/15',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/15',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/15',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium font-mono border backdrop-blur-sm transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
