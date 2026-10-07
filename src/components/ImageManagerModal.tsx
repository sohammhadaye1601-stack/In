import React, { useState } from 'react';
import { GymConfig, saveGymConfig, resetGymConfig } from '../config/gymConfig';
import { X, Image as ImageIcon, Sliders, Users, RotateCcw, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { LeadSubmission } from './LeadFormSection';

interface ImageManagerModalProps {
  config: GymConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newConfig: GymConfig) => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  config,
  isOpen,
  onClose,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'images' | 'settings' | 'leads'>('images');
  const [draftConfig, setDraftConfig] = useState<GymConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  // Retrieve captured leads
  let leads: LeadSubmission[] = [];
  try {
    leads = JSON.parse(localStorage.getItem('golds_gym_leads') || '[]');
  } catch {
    leads = [];
  }

  const handleImageChange = (key: keyof GymConfig['images'], value: string) => {
    setDraftConfig((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        [key]: value,
      },
    }));
  };

  const handleInstagramImageChange = (index: number, value: string) => {
    const updated = [...draftConfig.images.instagramImages];
    updated[index] = value;
    setDraftConfig((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        instagramImages: updated,
      },
    }));
  };

  const handleSave = () => {
    saveGymConfig(draftConfig);
    onSave(draftConfig);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    if (window.confirm("Reset all images, contact numbers, and settings back to original defaults?")) {
      const def = resetGymConfig();
      setDraftConfig(def);
      onSave(def);
    }
  };

  const imageSlots: { key: keyof GymConfig['images']; label: string; placeholderName: string }[] = [
    { key: 'heroImage', label: 'Hero Background Image', placeholderName: 'heroImage' },
    { key: 'gymImage1', label: 'About Section Gym Floor', placeholderName: 'gymImage1' },
    { key: 'gymImage2', label: 'Secondary Gym Facility', placeholderName: 'gymImage2' },
    { key: 'trainingImage1', label: 'Strength Training Program', placeholderName: 'trainingImage1' },
    { key: 'trainingImage2', label: 'Cardio & Stamina Zone', placeholderName: 'trainingImage2' },
    { key: 'trainingImage3', label: 'Functional & Turf Arena', placeholderName: 'trainingImage3' },
    { key: 'trainingImage4', label: 'Personal Training Session', placeholderName: 'trainingImage4' },
    { key: 'trainingImage5', label: 'Female Fitness Area', placeholderName: 'trainingImage5' },
    { key: 'galleryImage1', label: 'Gallery 1: Olympic Lifting', placeholderName: 'galleryImage1' },
    { key: 'galleryImage2', label: 'Gallery 2: Dumbbell Alley', placeholderName: 'galleryImage2' },
    { key: 'galleryImage3', label: 'Gallery 3: Aerobic Zone', placeholderName: 'galleryImage3' },
    { key: 'galleryImage4', label: 'Gallery 4: Plate Loaded Rigs', placeholderName: 'galleryImage4' },
    { key: 'galleryImage5', label: 'Gallery 5: Empowering Fitness', placeholderName: 'galleryImage5' },
    { key: 'galleryImage6', label: 'Gallery 6: Sled & Turf', placeholderName: 'galleryImage6' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FFC700] rounded-lg text-black font-bold">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wide">
                IMAGE & BRAND MANAGEMENT SYSTEM
              </h3>
              <p className="text-xs text-neutral-400">
                Easily replace images, customize phone numbers, and inspect pre-sale leads.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-5 pt-3 bg-neutral-950 border-b border-neutral-800 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-2 ${
              activeTab === 'images'
                ? 'bg-neutral-900 text-[#FFC700] border-t-2 border-[#FFC700]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Image Slots ({imageSlots.length + 6})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-neutral-900 text-[#FFC700] border-t-2 border-[#FFC700]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Contact & Pre-Sale Settings</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'bg-neutral-900 text-[#FFC700] border-t-2 border-[#FFC700]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Captured Leads ({leads.length})</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>
                  💡 <strong>Image Placeholders:</strong> Enter any image URL (Unsplash, Cloudinary, AWS S3, or direct CDN links) to swap in real time.
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1 text-[11px] font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded flex items-center gap-1 shrink-0 ml-3"
                >
                  <RotateCcw className="w-3 h-3 text-[#FFC700]" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Grid of Main Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {imageSlots.map((slot) => {
                  const currentValue = draftConfig.images[slot.key] as string;
                  return (
                    <div
                      key={slot.key}
                      className="p-3.5 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white uppercase">{slot.label}</div>
                          <div className="text-[10px] font-mono text-[#FFC700]">{slot.placeholderName}</div>
                        </div>
                        {currentValue && (
                          <a
                            href={currentValue}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-400 hover:text-white"
                            title="Open original image"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      <div className="flex gap-3 items-center">
                        {/* Live Thumbnail Preview */}
                        <div className="w-16 h-14 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden shrink-0">
                          {currentValue ? (
                            <img
                              src={currentValue}
                              alt={slot.label}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.opacity = '0.3';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-600 text-[10px]">
                              Empty
                            </div>
                          )}
                        </div>

                        {/* Input */}
                        <input
                          type="text"
                          value={currentValue}
                          onChange={(e) => handleImageChange(slot.key, e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="flex-1 px-3 py-2 bg-neutral-900 border border-neutral-700/80 rounded-md text-xs text-neutral-200 focus:outline-none focus:border-[#FFC700]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Instagram Feed Images */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FFC700]">
                  INSTAGRAM 3x2 FEED IMAGE SLOTS (instagramImage1 - instagramImage6)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {draftConfig.images.instagramImages.map((imgUrl, i) => (
                    <div key={i} className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-300">
                        <span>Post {i + 1} Placeholder</span>
                        <span className="text-[10px] font-mono text-[#FFC700]">instagramImage{i + 1}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 overflow-hidden shrink-0">
                          <img src={imgUrl} alt={`Insta ${i}`} className="w-full h-full object-cover" />
                        </div>
                        <input
                          type="text"
                          value={imgUrl}
                          onChange={(e) => handleInstagramImageChange(i, e.target.value)}
                          className="flex-1 px-2.5 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-xs text-neutral-200 focus:outline-none focus:border-[#FFC700]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FFC700]">
                  CONFIGURABLE CONTACT & PRE-SALE VARIABLES
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Number Variable */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      WhatsApp Phone Variable *
                    </label>
                    <input
                      type="text"
                      value={draftConfig.whatsappNumber}
                      onChange={(e) => setDraftConfig({ ...draftConfig, whatsappNumber: e.target.value })}
                      placeholder="+919876543210"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                    />
                    <p className="text-[10px] text-neutral-500 mt-1">
                      Used for all instant WhatsApp buttons and automated lead greetings.
                    </p>
                  </div>

                  {/* Calling Phone Variable */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Click-to-Call Phone Variable *
                    </label>
                    <input
                      type="text"
                      value={draftConfig.contactPhone}
                      onChange={(e) => setDraftConfig({ ...draftConfig, contactPhone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                    />
                    <p className="text-[10px] text-neutral-500 mt-1">
                      Triggered when visitors tap "Call Gym" or "Pre-Sale Desk".
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Target Opening Date Countdown */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Pre-Sale Countdown Target Date (ISO)
                    </label>
                    <input
                      type="text"
                      value={draftConfig.openingTargetDate}
                      onChange={(e) => setDraftConfig({ ...draftConfig, openingTargetDate: e.target.value })}
                      placeholder="2026-11-15T00:00:00"
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                    />
                    <p className="text-[10px] text-neutral-500 mt-1">
                      Controls the days, hours, mins, secs remaining clock.
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={draftConfig.emailContact}
                      onChange={(e) => setDraftConfig({ ...draftConfig, emailContact: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                    />
                  </div>
                </div>

                {/* Address Full */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Club Full Address
                  </label>
                  <textarea
                    rows={2}
                    value={draftConfig.addressFull}
                    onChange={(e) => setDraftConfig({ ...draftConfig, addressFull: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                  />
                </div>

                {/* Landmark */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Landmark Details
                  </label>
                  <input
                    type="text"
                    value={draftConfig.landmark}
                    onChange={(e) => setDraftConfig({ ...draftConfig, landmark: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-white focus:outline-none focus:border-[#FFC700]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FFC700]">
                  RECEIVED PRE-SALE PROSPECTS ({leads.length})
                </div>
                {leads.length > 0 && (
                  <button
                    onClick={() => {
                      if (window.confirm("Clear all captured leads?")) {
                        localStorage.removeItem('golds_gym_leads');
                        setDraftConfig({ ...draftConfig });
                      }
                    }}
                    className="text-xs text-red-400 hover:text-red-300 underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="p-8 text-center bg-neutral-950 rounded-xl border border-neutral-800 text-neutral-500 text-xs">
                  No pre-sale inquiries yet. New submissions from the form will appear here with instant WhatsApp triggers.
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
                    const waLink = `https://wa.me/${cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}?text=${encodeURIComponent(
                      `Hello ${lead.fullName}, thank you for your interest in Gold's Gym MIT-WPU Kothrud! Here are the pre-sale details for the ${lead.preferredMembership}.`
                    )}`;

                    return (
                      <div
                        key={lead.id}
                        className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{lead.fullName}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                              {lead.fitnessGoal}
                            </span>
                          </div>
                          <div className="text-xs text-neutral-400 mt-1 flex flex-wrap gap-3">
                            <span>📞 {lead.phone}</span>
                            <span>✉️ {lead.email}</span>
                            <span>🎯 {lead.preferredMembership}</span>
                          </div>
                          {lead.message && (
                            <div className="text-xs text-neutral-500 italic mt-1">"{lead.message}"</div>
                          )}
                          <div className="text-[10px] text-neutral-600 mt-1">
                            {new Date(lead.timestamp).toLocaleString()}
                          </div>
                        </div>

                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp Lead</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFC700] hover:bg-[#FFD733] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>SAVED!</span>
              </>
            ) : (
              <span>SAVE CHANGES</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
