import React from 'react';
import { GymConfig } from '../config/gymConfig';
import { Instagram, ExternalLink, Heart, MessageCircle, CheckCircle } from 'lucide-react';

interface SocialProofSectionProps {
  config: GymConfig;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ config }) => {
  // 6 Instagram grid posts matching the user prompt
  const sampleCaptions = [
    "The Mecca of Fitness is arriving soon in Kothrud! Pre-sale phase 1 registrations are officially open. #GoldsGym #Kothrud",
    "Iron paradise in progress. Heavy-duty calibrated plate-loaded machinery arriving for the elite training floor.",
    "Engineered for transformation. Gold's Gym MIT-WPU Kothrud brings global training standards to Pune.",
    "Dedicated zones for functional training, athletic conditioning & Olympic lifting. Claim your founding pass.",
    "Empowering female fitness in Kothrud. Premium, comfortable, state-of-the-art strength training.",
    "Join the movement. Tag your workout partner and get ready to experience the Mecca.",
  ];

  return (
    <section id="social" className="relative py-24 bg-[#0A0A0A] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Instagram Profile Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-2 flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              OFFICIAL INSTAGRAM COMMUNITY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
              FOLLOW THE <span className="text-[#FFC700]">JOURNEY</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400">
              Get behind-the-scenes progress, equipment unboxing, and pre-sale announcements.
            </p>
          </div>

          {/* Official Profile Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-neutral-900/80 border border-neutral-800 p-4 rounded-xl">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-[#FFC700] text-black font-display font-bold flex items-center justify-center text-sm shadow-md shrink-0">
              GG
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                <span>{config.instagramHandle}</span>
                <CheckCircle className="w-4 h-4 text-[#FFC700] fill-[#FFC700] text-black" />
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                <span><strong className="text-white tabular-nums">{config.instagramPosts}</strong> posts</span>
                <span>·</span>
                <span><strong className="text-white tabular-nums">{config.instagramFollowers}</strong> followers</span>
                <span>·</span>
                <span><strong className="text-white tabular-nums">{config.instagramFollowing}</strong> following</span>
              </div>
            </div>

            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 sm:mt-0 sm:ml-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-colors"
            >
              <span>FOLLOW</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3x2 Instagram Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {config.images.instagramImages.slice(0, 6).map((imgUrl, idx) => (
            <a
              key={idx}
              href={config.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-md block"
            >
              <img
                src={imgUrl}
                alt={`Gold's Gym MIT-WPU Kothrud Instagram Post ${idx + 1}`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
              />

              {/* Instagram Hover Card Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 sm:p-6 backdrop-blur-[2px]">
                {/* Top Instagram badge */}
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span className="text-[#FFC700] font-bold text-[11px]">{config.instagramHandle}</span>
                  <Instagram className="w-4 h-4 text-white" />
                </div>

                {/* Caption snippet */}
                <p className="text-xs text-neutral-200 line-clamp-3 leading-relaxed">
                  {sampleCaptions[idx % sampleCaptions.length]}
                </p>

                {/* Simulated engagement stats */}
                <div className="flex items-center gap-4 text-xs font-semibold text-neutral-300 pt-2 border-t border-neutral-700/60">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    <span>View on IG</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Official Update</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md transition-all shadow-[0_0_20px_rgba(255,199,0,0.3)]"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW US ON INSTAGRAM</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={config.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors"
          >
            Facebook: {config.facebookName}
          </a>
        </div>
      </div>
    </section>
  );
};
