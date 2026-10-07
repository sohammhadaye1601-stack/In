import React from 'react';

interface GoldsGymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const GoldsGymLogo: React.FC<GoldsGymLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Iconic Barbell Medallion Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full bg-[#FFC700] text-black shadow-[0_0_20px_rgba(255,199,0,0.35)]"
        style={{ width: iconSize, height: iconSize }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[84%] h-[84%]"
          fill="currentColor"
        >
          {/* Circular Gold's Gym stylized ring */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#000" strokeWidth="6" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="#000" strokeWidth="1.5" />
          
          {/* Center Heavy Barbell with Weights */}
          {/* Left Weight Plates */}
          <rect x="18" y="32" width="5" height="36" rx="2" fill="#000" />
          <rect x="25" y="27" width="5" height="46" rx="2" fill="#000" />
          <rect x="32" y="36" width="4" height="28" rx="1.5" fill="#000" />
          
          {/* Barbell Center Shaft */}
          <rect x="34" y="47" width="32" height="6" rx="1" fill="#000" />
          
          {/* Center Knurling Details */}
          <line x1="42" y1="47" x2="42" y2="53" stroke="#FFC700" strokeWidth="1.5" />
          <line x1="50" y1="47" x2="50" y2="53" stroke="#FFC700" strokeWidth="1.5" />
          <line x1="58" y1="47" x2="58" y2="53" stroke="#FFC700" strokeWidth="1.5" />

          {/* Right Weight Plates */}
          <rect x="64" y="36" width="4" height="28" rx="1.5" fill="#000" />
          <rect x="70" y="27" width="5" height="46" rx="2" fill="#000" />
          <rect x="77" y="32" width="5" height="36" rx="2" fill="#000" />

          {/* Top & Bottom Arch Stars */}
          <circle cx="50" cy="18" r="3" fill="#000" />
          <circle cx="50" cy="82" r="3" fill="#000" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="font-display font-bold tracking-wider text-white text-xl sm:text-2xl uppercase">
            GOLD'S <span className="text-[#FFC700]">GYM</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mt-0.5">
            MIT-WPU · KOTHRUD
          </span>
        )}
      </div>
    </div>
  );
};
