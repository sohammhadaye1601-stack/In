import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Dumbbell, Target, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  config: GymConfig;
  onPreSaleClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  config,
  onPreSaleClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-4">
              <Dumbbell className="w-3.5 h-3.5" />
              THE GOLD'S GYM HERITAGE
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
              MORE THAN A GYM. <br />
              <span className="text-[#FFC700]">IT'S THE MECCA.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Gold's Gym MIT-WPU Kothrud is bringing a world-class, premium fitness experience directly to the heart of Kothrud. Built upon an iconic 55+ year global legacy that began on Venice Beach, California, our new facility is engineered to deliver results without compromise.
            </p>

            <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              Equipped with professional-grade biomechanical strength apparatus, dedicated high-performance zones, certified expert trainers, and an electrifying training atmosphere, we provide the ultimate environment for authentic physical transformation.
            </p>

            {/* Pillar highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                  <Target className="w-5 h-5 text-[#FFC700]" />
                  <span>ELITE STANDARDS</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Engineered biomechanics and gold-standard resistance machines designed for maximum muscle engagement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                  <Award className="w-5 h-5 text-[#FFC700]" />
                  <span>TRANSFORMATION CULTURE</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  A high-energy, respectful, and motivating fitness community where every rep brings you closer to your peak self.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onPreSaleClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-all shadow-[0_0_20px_rgba(255,199,0,0.3)] cursor-pointer"
              >
                <span>BECOME A FOUNDING MEMBER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900/70 border border-neutral-800 rounded-md transition-colors"
              >
                Follow @golds_mit_wpu.kothrud
              </a>
            </div>
          </div>

          {/* Right Column: Large Gym Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              {/* Gold decorative accent frame corner */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#FFC700] z-20 pointer-events-none rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#FFC700] z-20 pointer-events-none rounded-bl-2xl" />

              {!imageError ? (
                <img
                  src={config.images.gymImage1}
                  alt="Gold's Gym MIT-WPU Kothrud Interior Showcase"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-110"
                />
              ) : (
                <div className="w-full h-[480px] sm:h-[540px] bg-neutral-900 flex flex-col items-center justify-center p-8 text-center">
                  <Dumbbell className="w-16 h-16 text-[#FFC700] mb-4 opacity-50" />
                  <div className="font-display text-xl font-bold text-white uppercase">
                    GOLD'S GYM KOTHRUD
                  </div>
                  <div className="text-sm text-neutral-400 mt-2">
                    Premium Strength & Conditioning Arena
                  </div>
                </div>
              )}

              {/* Scrim with Info Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#FFC700] font-bold">
                      FLAGSHIP TRAINING ENVIRONMENT
                    </div>
                    <div className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                      KOTHRUD, PUNE
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#FFC700] text-black font-extrabold text-xs tracking-wider uppercase">
                    NEW FACILITY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
