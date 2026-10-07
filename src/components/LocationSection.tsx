import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { MapPin, Navigation, Clock, Phone, Building2, Check, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  config: GymConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ config }) => {
  const [mapZoom, setMapZoom] = useState(15);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Gold's Gym MIT WPU Kothrud Pune Maharashtra`
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(config.addressFull);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="location" className="relative py-24 bg-[#0D0D0D] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-3">
            FLAGSHIP PUNE VENUE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            YOUR NEW FITNESS DESTINATION IN <span className="text-[#FFC700]">KOTHRUD</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Strategically situated in the vibrant educational and residential hub of Kothrud, right by MIT World Peace University.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Landmark & Operating Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#FFC700]">
                  OFFICIAL LOCATION
                </div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mt-1">
                  {config.brandName} {config.branchName}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {config.addressFull}
                </p>
              </div>

              {/* Landmark info */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                  <Building2 className="w-4 h-4 text-[#FFC700]" />
                  <span>Landmark & Accessibility</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {config.landmark}
                </p>
                <div className="pt-2 text-[11px] text-neutral-400 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300">✓ Dedicated Parking</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300">✓ Metro Connected</span>
                  <span className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300">✓ Elevator Access</span>
                </div>
              </div>

              {/* Proposed Operating Timings */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-950 text-[#FFC700] border border-neutral-800">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-neutral-300">Planned Hours</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Mon - Sat: 6:00 AM – 10:30 PM</div>
                  <div className="text-xs text-neutral-400">Sunday: 8:00 AM – 8:00 PM</div>
                </div>
              </div>

              {/* Pre-sale Desk Contact */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-950 text-[#FFC700] border border-neutral-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-neutral-300">Pre-Sale Desk</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{config.contactPhone}</div>
                  <div className="text-xs text-neutral-400">Available for inquiries & slot reservations</div>
                </div>
              </div>

              {/* Button Island */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-4 py-3.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <span>Copy Address</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Google Maps Styled Embed Area */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden relative min-h-[420px] flex flex-col">
            {/* Map Top Bar */}
            <div className="p-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FFC700]" />
                <span className="font-semibold">Kothrud, Pune (MIT-WPU Vicinity)</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMapZoom(prev => Math.min(prev + 1, 18))}
                  className="px-2 py-1 bg-neutral-900 hover:bg-neutral-800 text-xs text-white rounded border border-neutral-700 font-bold"
                  title="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={() => setMapZoom(prev => Math.max(prev - 1, 12))}
                  className="px-2 py-1 bg-neutral-900 hover:bg-neutral-800 text-xs text-white rounded border border-neutral-700 font-bold"
                  title="Zoom out"
                >
                  -
                </button>
              </div>
            </div>

            {/* Simulated High-End Dark Map Graphic with Live Pin & Controls */}
            <div className="relative flex-1 bg-[#1a1a1a] overflow-hidden flex items-center justify-center select-none group">
              {/* Map grid lines simulation */}
              <div 
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #333 1px, transparent 1px),
                    linear-gradient(to bottom, #333 1px, transparent 1px)
                  `,
                  backgroundSize: `${mapZoom * 3}px ${mapZoom * 3}px`,
                }}
              />

              {/* Road arteries simulation */}
              <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
                <line x1="0" y1="40%" x2="100%" y2="55%" stroke="#444" strokeWidth="18" />
                <line x1="0" y1="40%" x2="100%" y2="55%" stroke="#FFC700" strokeWidth="2" strokeDasharray="8 8" />
                <line x1="45%" y1="0" x2="60%" y2="100%" stroke="#444" strokeWidth="24" />
                <line x1="10%" y1="80%" x2="90%" y2="20%" stroke="#333" strokeWidth="12" />
                <circle cx="53%" cy="48%" r="45" fill="none" stroke="#FFC700" strokeWidth="2" opacity="0.4" />
              </svg>

              {/* Area Labels */}
              <div className="absolute top-12 left-12 text-[11px] font-bold text-neutral-500 uppercase tracking-widest pointer-events-none">
                MIT WORLD PEACE UNIVERSITY
              </div>
              <div className="absolute bottom-12 right-12 text-[11px] font-bold text-neutral-500 uppercase tracking-widest pointer-events-none">
                PAUD ROAD METRO CORRIDOR
              </div>
              <div className="absolute top-1/4 right-1/4 text-[10px] font-semibold text-neutral-600 uppercase tracking-wider pointer-events-none">
                KOTHRUD CENTRAL
              </div>

              {/* Gold's Gym Center Pin Marker */}
              <div className="relative z-20 flex flex-col items-center animate-bounce-slow">
                <div className="px-3 py-1.5 rounded-lg bg-black/90 border-2 border-[#FFC700] text-white text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#FFC700] animate-ping" />
                  <span>GOLD'S GYM KOTHRUD</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FFC700] text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,199,0,0.8)] border-2 border-black">
                  <MapPin className="w-5 h-5 fill-black" />
                </div>
                <div className="w-3 h-1.5 bg-black/60 rounded-full blur-[1px] mt-1" />
              </div>

              {/* Open in Google Maps Banner on hover */}
              <div className="absolute bottom-4 inset-x-4 bg-neutral-950/90 border border-neutral-800 rounded-xl p-3 flex items-center justify-between text-xs text-neutral-300 backdrop-blur-md">
                <span className="hidden sm:inline">Open interactive live route in Google Maps app:</span>
                <span className="sm:hidden">Get directions:</span>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded bg-[#FFC700] hover:bg-[#FFD733] text-black font-bold uppercase text-[11px] tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Launch Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
