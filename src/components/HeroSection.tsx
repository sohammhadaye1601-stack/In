import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Flame, ArrowRight, Compass, ChevronDown, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  config: GymConfig;
  onExploreClick: () => void;
  onPreSaleClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onExploreClick,
  onPreSaleClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image Container with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        {!imageError ? (
          <img
            src={config.images.heroImage}
            alt="Gold's Gym MIT-WPU Kothrud Training Floor"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-75 contrast-125 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFC700]/15 via-transparent to-transparent" />
          </div>
        )}

        {/* Cinematic Scrims & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_90%)] opacity-80" />
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#FFC700]/40 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Unboxed Status / Pre-Sale Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#FFC700]/40 text-neutral-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,199,0,0.2)] animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC700] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC700]" />
          </span>
          <span className="tracking-widest uppercase text-[11px] sm:text-xs text-[#FFC700]">PRE-SALE NOW LIVE</span>
          <span className="text-neutral-500 font-bold">·</span>
          <span className="tracking-wider uppercase text-[11px] sm:text-xs text-neutral-300">COMING SOON TO KOTHRUD</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.95] max-w-4xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          THE MECCA OF FITNESS IS ARRIVING IN <span className="text-[#FFC700] underline decoration-[#FFC700]/50 decoration-wavy decoration-from-font">KOTHRUD</span>
        </h1>

        {/* Supporting Tagline */}
        <p className="mt-6 text-base sm:text-xl md:text-2xl text-neutral-300 font-medium max-w-2xl text-balance leading-relaxed">
          {config.heroSubtext || "World's #1 Fitness Destination is arriving soon in Kothrud."}
        </p>

        {/* Location & Brand Proof Micro-Anchor */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-400 font-medium">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-[#FFC700]" />
            Official Gold’s Gym Franchise
          </span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-neutral-300">MIT-WPU Campus Vicinity, Pune</span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-[#FFC700] font-semibold">Exclusive Founding Slots</span>
        </div>

        {/* CTA Button Island */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={onPreSaleClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] active:bg-[#E5B200] rounded-md transition-all transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(255,199,0,0.35)] hover:shadow-[0_0_40px_rgba(255,199,0,0.55)] cursor-pointer"
          >
            <Flame className="w-5 h-5 fill-black" />
            <span>JOIN THE PRE-SALE</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-500 rounded-md transition-all backdrop-blur-sm cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#FFC700]" />
            <span>EXPLORE THE GYM</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl text-left">
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Global Legacy</div>
            <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">55+ YEARS</div>
            <div className="text-[11px] text-neutral-400">Since Venice Beach, CA</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Worldwide Presence</div>
            <div className="font-display text-lg sm:text-xl font-bold text-[#FFC700] mt-0.5">700+ CLUBS</div>
            <div className="text-[11px] text-neutral-400">Across 30+ Countries</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Pre-Sale Advantage</div>
            <div className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">TIER 1 PRICING</div>
            <div className="text-[11px] text-neutral-400">Limited Founding Invites</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Target Opening</div>
            <div className="font-display text-lg sm:text-xl font-bold text-[#FFC700] mt-0.5">COMING SOON</div>
            <div className="text-[11px] text-neutral-400">Phase 1 Induction</div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll to explore"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-neutral-400 hover:text-[#FFC700] transition-colors focus:outline-none cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-500">SCROLL</span>
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2.5 bg-[#FFC700] rounded-full animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 -mt-1 animate-pulse" />
      </button>
    </section>
  );
};
