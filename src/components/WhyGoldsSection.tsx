import React from 'react';
import { Dumbbell, Award, Sparkles, Activity, Users, UserCheck } from 'lucide-react';

interface FeatureCardProps {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: FeatureCardProps[] = [
  {
    number: "01",
    title: "WORLD-CLASS EQUIPMENT",
    desc: "Engineered biomechanical machinery, Olympic grade free weights, calibrated plates, and precision cable systems built for maximum muscle activation.",
    icon: <Dumbbell className="w-6 h-6 text-[#FFC700]" />,
  },
  {
    number: "02",
    title: "EXPERT TRAINERS",
    desc: "Internationally certified Gold's Gym master trainers focused on posture correction, science-backed progression, and sustainable body composition changes.",
    icon: <Award className="w-6 h-6 text-[#FFC700]" />,
  },
  {
    number: "03",
    title: "PREMIUM FITNESS ENVIRONMENT",
    desc: "A luxury fitness sanctum featuring climate-controlled ventilation, acoustic high-energy soundscapes, hygienic locker rooms, and sleek modern architecture.",
    icon: <Sparkles className="w-6 h-6 text-[#FFC700]" />,
  },
  {
    number: "04",
    title: "STRENGTH & CONDITIONING",
    desc: "Dedicated powerlifting platforms, functional turf sled strips, kettlebell zones, and high-intensity conditioning gear to elevate athletic output.",
    icon: <Activity className="w-6 h-6 text-[#FFC700]" />,
  },
  {
    number: "05",
    title: "FITNESS COMMUNITY",
    desc: "An inspiring fraternity of serious fitness enthusiasts, student athletes, and everyday lifters holding each other accountable every single day.",
    icon: <Users className="w-6 h-6 text-[#FFC700]" />,
  },
  {
    number: "06",
    title: "PERSONAL TRAINING",
    desc: "Customized 1-on-1 coaching blueprints tailored specifically to your metabolic rate, lifestyle schedules, orthopedic comfort, and transformation goals.",
    icon: <UserCheck className="w-6 h-6 text-[#FFC700]" />,
  },
];

interface WhyGoldsSectionProps {
  onPreSaleClick: () => void;
}

export const WhyGoldsSection: React.FC<WhyGoldsSectionProps> = ({ onPreSaleClick }) => {
  return (
    <section id="why-golds" className="relative py-24 bg-[#0D0D0D] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-3">
              THE GOLD'S GYM ADVANTAGE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              WHY CHOOSE <span className="text-[#FFC700]">GOLD'S GYM</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal">
              Built on decades of strength training mastery, engineered for those who demand excellence in every workout.
            </p>
          </div>

          <button
            onClick={onPreSaleClick}
            className="self-start md:self-end px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-[0_0_15px_rgba(255,199,0,0.25)]"
          >
            CLAIM PRE-SALE BENEFIT
          </button>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative p-8 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-[#FFC700]/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Corner accent glow on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFC700]/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl font-extrabold text-neutral-500 group-hover:text-[#FFC700] transition-colors tabular-nums">
                    {feature.number}
                  </span>
                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-[#FFC700]/40 transition-colors">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white group-hover:text-[#FFC700] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom Hairline */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span>Gold's Gym Standard</span>
                <span className="text-[#FFC700] opacity-0 group-hover:opacity-100 transition-opacity">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
