import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Dumbbell, HeartPulse, Flame, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface TrainingProgram {
  id: string;
  title: string;
  headline: string;
  desc: string;
  imageKey: keyof GymConfig['images'];
  icon: React.ReactNode;
  highlights: string[];
}

const trainingPrograms: TrainingProgram[] = [
  {
    id: 'strength',
    title: 'STRENGTH TRAINING',
    headline: 'Build strength with professional-grade equipment.',
    desc: 'Master the core compound lifts—squats, bench presses, deadlifts—and isolate muscle groups with biomechanically calibrated plate-loaded and selectorized machines.',
    imageKey: 'trainingImage1',
    icon: <Dumbbell className="w-5 h-5 text-[#FFC700]" />,
    highlights: ['Powerlifting & Olympic Lifting Platforms', 'Comprehensive Free Weights', 'Targeted Hypertrophy Stations'],
  },
  {
    id: 'cardio',
    title: 'CARDIO & STAMINA',
    headline: 'Improve endurance and cardiovascular fitness.',
    desc: 'Enhance your VO2 max and burn calories with cutting-edge treadmills, stairmasters, elliptical trainers, and rowers with real-time biometric tracking.',
    imageKey: 'trainingImage2',
    icon: <HeartPulse className="w-5 h-5 text-[#FFC700]" />,
    highlights: ['Interactive Cardio Consoles', 'HIIT & Steady-State Conditioning', 'Low-Impact Joint Friendly Options'],
  },
  {
    id: 'functional',
    title: 'FUNCTIONAL TRAINING',
    headline: 'Train for real-world performance.',
    desc: 'Unleash athletic agility, core stabilization, and rotational power using weighted sled tracks, kettlebells, battle ropes, medicine balls, and plyo platforms.',
    imageKey: 'trainingImage3',
    icon: <Flame className="w-5 h-5 text-[#FFC700]" />,
    highlights: ['Turf Sprint & Sled Track', 'Multi-Grip Pull-Up & Rig Stations', 'Metabolic Conditioning Circuits'],
  },
  {
    id: 'personal',
    title: 'PERSONAL TRAINING',
    headline: 'Get personalized guidance from experienced trainers.',
    desc: 'Work directly with certified Gold’s Gym elite fitness specialists who tailor periodized workout routines, mobility protocols, and accountability tracking to your body.',
    imageKey: 'trainingImage4',
    icon: <UserCheck className="w-5 h-5 text-[#FFC700]" />,
    highlights: ['Bespoke 1-on-1 Periodization', 'Form Correction & Injury Prevention', 'Goal Milestones & Assessment'],
  },
  {
    id: 'female',
    title: 'FEMALE FITNESS',
    headline: 'A motivating and comfortable environment for women.',
    desc: 'A dedicated, empowering space designed to foster confidence and results, featuring tailored glute machines, pelvic stability programs, and welcoming guidance.',
    imageKey: 'trainingImage5',
    icon: <ShieldCheck className="w-5 h-5 text-[#FFC700]" />,
    highlights: ['Booty Builder & Glute Drive Rigs', 'Supportive Community Atmosphere', 'Female Certified Coaches Available'],
  },
];

interface TrainingSectionProps {
  config: GymConfig;
  onSelectProgram: (programName: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  config,
  onSelectProgram,
}) => {
  const [selectedId, setSelectedId] = useState<string>('strength');
  const activeProgram = trainingPrograms.find(p => p.id === selectedId) || trainingPrograms[0];

  return (
    <section id="training" className="relative py-24 bg-[#0D0D0D] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-3">
            COMPREHENSIVE ATHLETIC DISCIPLINES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            TRAIN HARD. <span className="text-[#FFC700]">GET STRONGER.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Whatever your objective—pure hypertrophy, functional speed, fat reduction, or endurance—our training floors are built to turn effort into victory.
          </p>
        </div>

        {/* Training Programs Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Program Selectors Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {trainingPrograms.map((program) => {
              const isCurrent = program.id === selectedId;
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedId(program.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-neutral-900 border-[#FFC700] shadow-[0_0_20px_rgba(255,199,0,0.15)] translate-x-1'
                      : 'bg-neutral-950/60 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isCurrent ? 'bg-[#FFC700] text-black' : 'bg-neutral-900 text-[#FFC700]'}`}>
                        {program.icon}
                      </div>
                      <div>
                        <h3 className={`font-display font-bold text-base sm:text-lg uppercase tracking-wide ${isCurrent ? 'text-[#FFC700]' : 'text-white'}`}>
                          {program.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                          {program.headline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isCurrent ? 'text-[#FFC700] translate-x-1' : 'text-neutral-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Program Spotlight Showcase */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Visual Aspect Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
              <img
                src={config.images[activeProgram.imageKey] as string}
                alt={activeProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-115 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#FFC700] text-black text-xs font-extrabold uppercase tracking-wider">
                PROGRAM HIGHLIGHT
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  {activeProgram.title}
                </h3>
                <p className="text-sm font-semibold text-[#FFC700] mt-1">
                  {activeProgram.headline}
                </p>
                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {activeProgram.desc}
                </p>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <div className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-3">
                    WHAT'S INCLUDED:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProgram.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC700]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Ask our fitness counselor about personalized scheduling during pre-sale.
                </span>
                <button
                  onClick={() => onSelectProgram(activeProgram.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>INQUIRE FOR {activeProgram.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
