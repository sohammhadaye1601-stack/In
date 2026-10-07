import React from 'react';
import { GymConfig } from '../config/gymConfig';
import { GoldsGymLogo } from './GoldsGymLogo';
import { Instagram, Facebook, MessageSquare, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  config: GymConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const cleanWhatsApp = config.whatsappNumber.replace(/[^0-9]/g, '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Lockup & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <GoldsGymLogo size="lg" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-3">
              {config.tagline || "World's number #1 Fitness Destination is Arriving Soon in KOTHRUD"}.
              Bringing the authentic Mecca legacy of bodybuilding and elite fitness to Pune.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#FFC700] hover:text-[#FFC700] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#FFC700] hover:text-[#FFC700] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${cleanWhatsApp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-[#FFC700] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFC700] transition-colors">About</a>
              </li>
              <li>
                <a href="#why-golds" className="hover:text-[#FFC700] transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#training" className="hover:text-[#FFC700] transition-colors">Training</a>
              </li>
              <li>
                <a href="#pre-sale" className="hover:text-[#FFC700] transition-colors">Pre-Sale</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FFC700] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#lead-form" className="hover:text-[#FFC700] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              CLUB VENUE
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#FFC700] shrink-0 mt-0.5" />
              <span>{config.addressFull}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Phone className="w-4 h-4 text-[#FFC700] shrink-0" />
              <a href={`tel:${config.contactPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {config.contactPhone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <Mail className="w-4 h-4 text-[#FFC700] shrink-0" />
              <span>{config.emailContact}</span>
            </div>

            <div className="pt-2 text-xs text-neutral-500">
              Instagram: <a href={config.instagramUrl} target="_blank" rel="noreferrer" className="text-[#FFC700] hover:underline">{config.instagramHandle}</a>
              <br />
              Facebook: <span className="text-neutral-400">{config.facebookName}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Gold's Gym MIT-WPU Kothrud. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Official Franchise Announcement</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-[#FFC700] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
