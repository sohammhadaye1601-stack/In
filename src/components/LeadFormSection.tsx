import React, { useState } from 'react';
import { GymConfig } from '../config/gymConfig';
import { Phone, MessageSquare, CheckCircle, Send, Sparkles, Shield, AlertCircle } from 'lucide-react';

export interface LeadSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredMembership: string;
  message: string;
  timestamp: string;
}

interface LeadFormSectionProps {
  config: GymConfig;
  initialGoal?: string;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  config,
  initialGoal = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState(initialGoal || 'Strength & Hypertrophy');
  const [preferredMembership, setPreferredMembership] = useState('Founding Annual Member');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Clean WhatsApp number
  const cleanWhatsAppNumber = config.whatsappNumber.replace(/[^0-9]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const newLead: LeadSubmission = {
      id: `lead_${Date.now()}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      fitnessGoal,
      preferredMembership,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save lead to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('golds_gym_leads') || '[]');
      localStorage.setItem('golds_gym_leads', JSON.stringify([newLead, ...existing]));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedLead(newLead);
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmittedLead(null);
    setErrorMsg('');
  };

  // WhatsApp click handler
  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Gold's Gym MIT-WPU Kothrud! I am interested in joining the Pre-Sale. Name: ${
        fullName || 'Fitness Enthusiast'
      }, Goal: ${fitnessGoal}, Plan: ${preferredMembership}. Please share pre-sale details and founding rates.`
    );
    return `https://wa.me/${cleanWhatsAppNumber}?text=${text}`;
  };

  return (
    <section id="lead-form" className="relative py-24 bg-[#0A0A0A] border-t border-neutral-800/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Conversion Copy & Fast Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFC700]/10 border border-[#FFC700]/30 text-xs font-bold tracking-widest uppercase text-[#FFC700] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                FOUNDING MEMBER ENROLMENT
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
                READY TO JOIN <br />
                <span className="text-[#FFC700]">THE MECCA?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Pre-sale invitations are processed on a strictly first-come basis. Register your interest below to receive preferential launch pricing and an invitation to our private facility orientation.
              </p>
            </div>

            {/* Direct Instant Channels */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                PREFER INSTANT ASSISTANCE?
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* WhatsApp Button with configurable variable */}
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>

                {/* Direct Call Button with configurable phone */}
                <a
                  href={`tel:${config.contactPhone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFC700]" />
                  <span>Call: {config.contactPhone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-500 pt-2">
                <Shield className="w-3.5 h-3.5 text-[#FFC700]" />
                <span>Zero spam guarantee. Your details are strictly confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 border-2 border-neutral-800 focus-within:border-[#FFC700]/60 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {/* Form Gold Accent Top Strip */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#FFC700] rounded-t-2xl" />

              {submittedLead ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#FFC700]/20 text-[#FFC700] mx-auto flex items-center justify-center border-2 border-[#FFC700]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-wide">
                      PRE-SALE REQUEST RECEIVED!
                    </h3>
                    <p className="text-neutral-300 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{submittedLead.fullName}</strong>. Your founding member pre-sale priority reference has been recorded.
                    </p>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-left max-w-md mx-auto text-xs space-y-1.5 text-neutral-400">
                    <div><span className="text-neutral-200 font-semibold">Goal:</span> {submittedLead.fitnessGoal}</div>
                    <div><span className="text-neutral-200 font-semibold">Selected Plan:</span> {submittedLead.preferredMembership}</div>
                    <div><span className="text-neutral-200 font-semibold">Contact:</span> {submittedLead.phone} · {submittedLead.email}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Lead Capture Input Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-neutral-800 pb-4 mb-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                      PRE-SALE INQUIRY FORM
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Complete below to unlock founding member benefits for Gold's Gym Kothrud.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-950/80 border border-red-800/80 rounded-lg flex items-center gap-2 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFC700] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFC700] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFC700] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Fitness Goal */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={fitnessGoal}
                        onChange={(e) => setFitnessGoal(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-[#FFC700] transition-colors"
                      >
                        <option value="Strength & Hypertrophy">Strength & Muscle Hypertrophy</option>
                        <option value="Fat Loss & Conditioning">Fat Loss & Metabolic Conditioning</option>
                        <option value="Athletic Performance">Athletic & Sports Performance</option>
                        <option value="Personal Coaching">1-on-1 Personal Training</option>
                        <option value="General Health & Mobility">General Health & Mobility</option>
                      </select>
                    </div>

                    {/* Preferred Membership */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Preferred Membership
                      </label>
                      <select
                        value={preferredMembership}
                        onChange={(e) => setPreferredMembership(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-[#FFC700] transition-colors"
                      >
                        <option value="Founding Annual Member">Founding Annual Member (Best Value)</option>
                        <option value="6-Month Gold Plan">6-Month Transformation Plan</option>
                        <option value="Couple / Buddy Membership">Couple / Buddy Membership</option>
                        <option value="Student Special (MIT-WPU)">Student Special (MIT-WPU Campus)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Message / Special Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific questions regarding equipment, timings, or personal training..."
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FFC700] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-sm sm:text-base font-extrabold uppercase tracking-wider text-black bg-[#FFC700] hover:bg-[#FFD733] active:bg-[#E5B200] rounded-lg transition-all shadow-[0_0_25px_rgba(255,199,0,0.35)] hover:shadow-[0_0_35px_rgba(255,199,0,0.55)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Priority Enrolment...</span>
                    ) : (
                      <>
                        <span>GET PRE-SALE DETAILS</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
