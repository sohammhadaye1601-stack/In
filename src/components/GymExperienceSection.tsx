import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Eye, X, ArrowRight, Dumbbell } from 'lucide-react';

interface ExperienceItem {
  id: string;
  category: 'strength' | 'cardio' | 'functional' | 'lifestyle';
  title: string;
  subtitle: string;
  imageKey: keyof GymConfig['images'];
  alt: string;
}

const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    category: 'strength',
    title: 'Olympic Weightlifting & Power Racks',
    subtitle: 'Calibrated barbells, deadlift platforms, and competition bumper plates.',
    imageKey: 'galleryImage1',
    alt: 'Olympic weightlifting platform at Gold’s Gym',
  },
  {
    id: 'exp-2',
    category: 'strength',
    title: 'Precision Free Weights & Dumbbell Alley',
    subtitle: 'Extensive dumbbell range from 2.5kg to heavy iron bodybuilding increments.',
    imageKey: 'galleryImage2',
    alt: 'Dumbbell alley and free weight zone',
  },
  {
    id: 'exp-3',
    category: 'cardio',
    title: 'Aerobic Endurance & High-Tech Cardio',
    subtitle: 'State-of-the-art stair climbers, curved treadmills, and rowing ergometers.',
    imageKey: 'galleryImage3',
    alt: 'Cardio endurance and HIIT zone',
  },
  {
    id: 'exp-4',
    category: 'strength',
    title: 'Biomechanical Plate-Loaded Machinery',
    subtitle: 'Isolateral chest presses, hack squats, and precision cable fly assemblies.',
    imageKey: 'galleryImage4',
    alt: 'Athlete training on plate loaded equipment',
  },
  {
    id: 'exp-5',
    category: 'lifestyle',
    title: 'Female Fitness & Dedicated Conditioning',
    subtitle: 'Empowering, comfortable environment for strength, glute sculpting, and toning.',
    imageKey: 'galleryImage5',
    alt: 'Female strength and conditioning training',
  },
  {
    id: 'exp-6',
    category: 'functional',
    title: 'Functional Turf & Athletic Performance',
    subtitle: 'Sled pushes, kettlebells, plyometric boxes, and battle rope agility lanes.',
    imageKey: 'galleryImage6',
    alt: 'Functional turf and athletic performance training',
  },
];

interface GymExperienceSectionProps {
  config: GymConfig;
  onPreSaleClick: () => void;
}

export const GymExperienceSection: React.FC<GymExperienceSectionProps> = ({
  config,
  onPreSaleClick,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strength' | 'cardio' | 'functional' | 'lifestyle'>('all');
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? experienceItems 
    : experienceItems.filter(item => item.category === activeFilter);

  return (
    <section id="experience" className="relative py-24 bg-[#0A0A0A] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-3">
              THE FLOOR PLAN & ATMOSPHERE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              GYM <span className="text-[#FFC700]">EXPERIENCE</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal max-w-xl">
              An architectural synergy of raw iron, cutting-edge biomechanics, and luxury fitness hospitality.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FFC700] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setActiveFilter('strength')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'strength'
                  ? 'bg-[#FFC700] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Strength & Iron
            </button>
            <button
              onClick={() => setActiveFilter('cardio')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'cardio'
                  ? 'bg-[#FFC700] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Cardio
            </button>
            <button
              onClick={() => setActiveFilter('functional')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'functional'
                  ? 'bg-[#FFC700] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Functional & Turf
            </button>
            <button
              onClick={() => setActiveFilter('lifestyle')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'lifestyle'
                  ? 'bg-[#FFC700] text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Female Fitness
            </button>
          </div>
        </div>

        {/* Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const imageUrl = config.images[item.imageKey] as string;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#FFC700]/60 transition-all duration-300 shadow-xl cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={imageUrl}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled background
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-85 group-hover:brightness-100"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-neutral-700/60 text-[10px] font-bold uppercase tracking-wider text-[#FFC700]">
                    {item.category.toUpperCase()}
                  </div>

                  {/* Inspect Icon Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#FFC700] text-black shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-5 bg-neutral-900/90 border-t border-neutral-800">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FFC700] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pre-sale prompt */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#FFC700]/10 text-[#FFC700]">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Experience it Firsthand as a Founding Member</div>
              <div className="text-xs text-neutral-400">Lock in your pre-sale rate and get early walkthrough access.</div>
            </div>
          </div>
          <button
            onClick={onPreSaleClick}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            CLAIM PRE-SALE PASS
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[70vh] bg-black">
              <img
                src={config.images[selectedItem.imageKey] as string}
                alt={selectedItem.alt}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-neutral-800">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FFC700]">
                  {selectedItem.category.toUpperCase()} ZONE · GOLD'S GYM KOTHRUD
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mt-0.5">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                  {selectedItem.subtitle}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedItem(null);
                  onPreSaleClick();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-colors whitespace-nowrap"
              >
                <span>JOIN PRE-SALE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
