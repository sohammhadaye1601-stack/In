import React from 'react';
import { GymConfig } from '../config/gymConfig';
import { MessageSquare, Phone } from 'lucide-react';

interface FloatingActionsProps {
  config: GymConfig;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ config }) => {
  const cleanWhatsApp = config.whatsappNumber.replace(/[^0-9]/g, '');
  const cleanPhone = config.contactPhone.replace(/\s+/g, '');

  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    "Hello Gold's Gym MIT-WPU Kothrud! I would like more information about the Pre-Sale offer and founding member benefits."
  )}`;

  return (
    <>
      {/* Desktop & Tablet Floating Quick WhatsApp Button */}
      <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105"
          aria-label="Chat on WhatsApp with Gold's Gym Kothrud pre-sale team"
        >
          <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            Pre-Sale WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar (capped at <10% mobile viewport) */}
      <aside aria-label="Mobile contact bar" className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 border-t border-neutral-800 p-2.5 flex items-center gap-2 backdrop-blur-md">
        <a
          href={`tel:${cleanPhone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-bold text-xs uppercase tracking-wider active:bg-neutral-800"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFC700]" />
          <span>Call Gym</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] rounded-lg text-white font-bold text-xs uppercase tracking-wider active:bg-[#20bd5a]"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#lead-form"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#FFC700] rounded-lg text-black font-extrabold text-xs uppercase tracking-wider active:bg-[#e5b200]"
        >
          <span>Join</span>
        </a>
      </aside>
    </>
  );
};
