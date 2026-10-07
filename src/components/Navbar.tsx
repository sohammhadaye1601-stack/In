import React, { useState, useEffect } from 'react';
import { GoldsGymLogo } from './GoldsGymLogo';
import { Menu, X, Settings2, Sparkles, ArrowRight } from 'lucide-react';
import { GymConfig } from '../config/gymConfig';

interface NavbarProps {
  config: GymConfig;
  onOpenImageManager: () => void;
  onOpenPreSaleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenImageManager,
  onOpenPreSaleModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Pre-Sale', href: '#pre-sale' },
    { label: 'About', href: '#about' },
    { label: 'Why Gold’s', href: '#why-golds' },
    { label: 'Training', href: '#training' },
    { label: 'Experience', href: '#experience' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a 
              href="#" 
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC700] rounded-lg"
              aria-label="Gold's Gym MIT-WPU Kothrud Home"
            >
              <GoldsGymLogo size="md" />
            </a>

            {/* Zone 2: Navigation Links (Clean single-line text links) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap hover:text-[#FFC700] transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC700] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-3">
              {/* Gym Owner Customizer Affordance */}
              <button
                onClick={onOpenImageManager}
                title="Customize Images & Contact Details"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 rounded-md transition-colors"
                aria-label="Customize Images & Pre-Sale Settings"
              >
                <Settings2 className="w-3.5 h-3.5 text-[#FFC700]" />
                <span className="hidden md:inline">Edit Details</span>
              </button>

              {/* Primary Pre-Sale Action */}
              <a
                href="#lead-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-black bg-[#FFC700] hover:bg-[#FFD733] active:bg-[#E5B200] rounded-md transition-all shadow-[0_0_20px_rgba(255,199,0,0.25)] hover:shadow-[0_0_25px_rgba(255,199,0,0.45)] whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>JOIN PRE-SALE</span>
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC700]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#FFC700] hover:bg-neutral-900/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreSaleModal();
                }}
                className="w-full py-3 px-4 text-center font-bold tracking-wider uppercase text-black bg-[#FFC700] hover:bg-[#FFD733] rounded-md text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                CLAIM PRE-SALE OFFER
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenImageManager();
                }}
                className="w-full py-2.5 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md flex items-center justify-center gap-2"
              >
                <Settings2 className="w-4 h-4 text-[#FFC700]" />
                Customize Images, Phone & Pre-Sale Info
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
