import React, { useState, useEffect } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Clock, ShieldAlert, Sparkles, CheckCircle2, ArrowRight, Zap, Users } from 'lucide-react';

interface PreSaleSectionProps {
  config: GymConfig;
  onClaimOffer: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const PreSaleSection: React.FC<PreSaleSectionProps> = ({
  config,
  onClaimOffer,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 28,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    // Dynamic countdown timer
    const target = new Date(config.openingTargetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Fallback for rolling urgency
        setTimeLeft({ days: 18, hours: 9, minutes: 22, seconds: 15 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [config.openingTargetDate]);

  const preSalePerks = [
    {
      title: "Founding Member Preferred Rates",
      desc: "Lock in lowest inaugural rates before public launch, honored on your renewal.",
    },
    {
      title: "Zero Registration & Joining Fee",
      desc: "Save 100% on standard one-time facility onboarding fees during pre-sale only.",
    },
    {
      title: "1-on-1 InBody™ Composition & Consultation",
      desc: "Comprehensive segmental body fat, skeletal muscle analysis and trainer roadmap.",
    },
    {
      title: "Official Gold's Gym Welcome Kit",
      desc: "Exclusive training bag, shaker bottle, and workout towel for early enrollments.",
    },
    {
      title: "Early Gym Walkthrough Access",
      desc: "Private preview orientation of all strength and cardio zones prior to inauguration.",
    },
    {
      title: "Complimentary Personal Training Sessions",
      desc: "Includes introductory PT sessions with certified Gold’s Gym Master Trainers.",
    },
  ];

  return (
    <section id="pre-sale" className="relative py-24 bg-[#0D0D0D] border-y border-neutral-800/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,199,0,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,199,0,0.05),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFC700] text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5 fill-[#FFC700]" />
            LIMITED PRE-LAUNCH REGISTRATIONS
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            PRE-SALE IS <span className="text-[#FFC700]">LIVE</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            Get exclusive access to Gold's Gym MIT-WPU Kothrud before the official opening.
            Secure founding member benefits with limited early-bird slots.
          </p>
        </div>

        {/* Countdown Box */}
        <div className="max-w-3xl mx-auto mb-14 bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 mb-6 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-neutral-200">
              <Clock className="w-5 h-5 text-[#FFC700]" />
              <span className="font-display font-bold tracking-wider uppercase text-sm sm:text-base">
                OPENING SOON IN KOTHRUD
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFC700]">
              <span className="w-2 h-2 rounded-full bg-[#FFC700] animate-ping" />
              PRE-SALE PHASE 1 REGISTRATION WINDOW
            </div>
          </div>

          {/* Countdown Numbers Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3 sm:p-5">
              <div className="font-display font-bold text-2xl sm:text-5xl text-[#FFC700] tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Days
              </div>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3 sm:p-5">
              <div className="font-display font-bold text-2xl sm:text-5xl text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Hours
              </div>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3 sm:p-5">
              <div className="font-display font-bold text-2xl sm:text-5xl text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Minutes
              </div>
            </div>

            <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3 sm:p-5">
              <div className="font-display font-bold text-2xl sm:text-5xl text-[#FFC700] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>

        {/* Premium Pre-Sale Feature Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-[#FFC700]/50 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(255,199,0,0.15)] relative overflow-hidden">
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFC700] via-[#FFD733] to-[#FFC700]" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFC700] mb-2">
                <Sparkles className="w-4 h-4" />
                FOUNDING MEMBER PRIVILEGE CARD
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase">
                EXCLUSIVE PRE-SALE PASS
              </h3>
              <p className="text-neutral-400 text-sm mt-1">
                Gold's Gym MIT-WPU Kothrud · Limited First 100 Enrolments Only
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <div className="text-xs uppercase tracking-wider text-neutral-400">STATUS</div>
              <div className="text-base font-bold text-[#FFC700] flex items-center gap-2 mt-0.5">
                <Users className="w-4 h-4" />
                <span>Founding Slots Filling Rapidly</span>
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">Zero commitment inquiry</div>
            </div>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {preSalePerks.map((perk, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800/80"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FFC700] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">{perk.title}</div>
                  <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{perk.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <ShieldAlert className="w-4 h-4 text-[#FFC700] shrink-0" />
              <span>Pre-sale rates will expire immediately once official opening is announced.</span>
            </div>

            <button
              onClick={onClaimOffer}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] active:bg-[#E5B200] rounded-md transition-all shadow-[0_0_30px_rgba(255,199,0,0.4)] hover:shadow-[0_0_40px_rgba(255,199,0,0.6)] cursor-pointer whitespace-nowrap"
            >
              <span>CLAIM PRE-SALE OFFER</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
