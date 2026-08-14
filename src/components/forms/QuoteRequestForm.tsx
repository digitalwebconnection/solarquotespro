import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MapPin, 
  Sun, 
  Battery, 
  Zap, 
  Home, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Award,
  Sparkles
} from 'lucide-react';

interface QuoteRequestFormProps {
  onClose?: () => void;
  initialPostcode?: string;
}

export default function QuoteRequestForm({ onClose, initialPostcode = '' }: QuoteRequestFormProps) {
  const [step, setStep] = useState(1);
  const [postcode, setPostcode] = useState(initialPostcode);
  const [systemType, setSystemType] = useState('solar_battery');
  const [propertyType, setPropertyType] = useState('residential');
  const [quarterlyBill, setQuarterlyBill] = useState('$400 - $800');
  const [ownership, setOwnership] = useState('own');
  const [roofType, setRoofType] = useState('single_storey');

  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Australian State detection helper
  const auLocationPreview = useMemo(() => {
    const clean = postcode.trim();
    if (!clean || clean.length < 3) return null;
    const num = parseInt(clean, 10);
    if (isNaN(num)) return null;

    if ((num >= 1000 && num <= 2599) || (num >= 2619 && num <= 2899) || (num >= 2921 && num <= 2999)) return 'NSW • Installers Active';
    if ((num >= 2600 && num <= 2618) || (num >= 2900 && num <= 2920)) return 'ACT • Canberra Region';
    if ((num >= 3000 && num <= 3999) || (num >= 8000 && num <= 8999)) return 'VIC • Installers Active';
    if ((num >= 4000 && num <= 4999) || (num >= 9000 && num <= 9999)) return 'QLD • Installers Active';
    if (num >= 5000 && num <= 5799) return 'SA • Adelaide Region';
    if (num >= 6000 && num <= 6797) return 'WA • Perth Region';
    if (num >= 7000 && num <= 7799) return 'TAS • Hobart Region';
    if (num >= 800 && num <= 999) return 'NT • Darwin Region';
    return 'Australia-Wide';
  }, [postcode]);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim() || postcode.trim().length < 3) {
      setErrorMsg('Please enter a valid Australian postcode (e.g. 2000, 3000, 4000)');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!contactData.email.trim() || !contactData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (!contactData.phone.trim() || contactData.phone.replace(/\D/g, '').length < 8) {
      setErrorMsg('Please enter a valid Australian phone number');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35)] border border-slate-200 overflow-hidden w-full max-w-lg mx-auto relative">
      
      {/* ─── Premium Header ─── */}
      <div className="relative bg-linear-to-br from-slate-950 via-slate-900 to-slate-900 text-white p-6 sm:p-7 border-b border-slate-800">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-full p-2 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md z-20"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wide mb-2.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            100% Free & No Obligation
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            {isSubmitted ? 'Your Request is Confirmed!' : 'Get 3 Free Solar Quotes'}
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            {isSubmitted 
              ? 'Connecting you with local CEC-accredited installers.' 
              : 'Compare verified, top-rated local installers in your area.'}
          </p>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="mt-5 pt-3.5 border-t border-slate-800/80 relative z-10">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-orange-400 font-bold">Step {step} of 3</span>
              <span className="text-slate-300">
                {step === 1 && 'Location & System'}
                {step === 2 && 'Energy & Property'}
                {step === 3 && 'Contact & Matching'}
              </span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={false}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 h-full rounded-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* ─── Form Body ─── */}
      <div className="p-6 sm:p-7 max-h-[calc(85vh-160px)] overflow-y-auto bg-linear-to-b from-white to-slate-50/40">
        {errorMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm rounded-2xl flex items-center gap-2.5 shadow-xs"
          >
            <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0">!</span>
            <span className="font-medium">{errorMsg}</span>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* ═════════ STEP 1: SYSTEM & POSTCODE ═════════ */}
          {step === 1 && !isSubmitted && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleStep1Submit}
              className="space-y-5"
            >
              {/* Australian Postcode */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="postcode" className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                    Australian Postcode <span className="text-amber-500">*</span>
                  </label>
                  {auLocationPreview && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {auLocationPreview}
                    </span>
                  )}
                </div>

                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 transition-colors group-focus-within:bg-amber-500 group-focus-within:text-slate-950">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="postcode"
                    required
                    maxLength={4}
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 2000, 3000, 4000"
                    className="w-full pl-13 pr-4 py-3.5 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border-2 border-slate-200 focus:border-amber-500 rounded-2xl text-slate-900 font-bold text-base outline-none transition-all placeholder:text-slate-400 placeholder:font-normal focus:ring-4 focus:ring-amber-500/15"
                  />
                </div>
              </div>

              {/* System Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What are you interested in?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'solar_only', label: 'Solar Only', desc: 'Panels & Inverter', icon: <Sun className="w-4 h-4" /> },
                    { id: 'solar_battery', label: 'Solar + Battery', desc: 'Max Savings', tag: 'Popular', icon: <Zap className="w-4 h-4" /> },
                    { id: 'battery_only', label: 'Battery Only', desc: 'Add Storage', icon: <Battery className="w-4 h-4" /> },
                  ].map((item) => {
                    const isSelected = systemType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSystemType(item.id)}
                        className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/80 text-slate-950 shadow-sm ring-2 ring-amber-500/20 scale-[1.02]'
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.tag && (
                          <span className="absolute -top-2.5 bg-linear-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider shadow-xs">
                            {item.tag}
                          </span>
                        )}
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition-all ${
                          isSelected ? 'bg-orange-500 text-slate-950' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.icon}
                        </div>
                        <span className="text-xs font-bold leading-tight">{item.label}</span>
                        <span className="text-[10px] text-slate-500 font-medium">{item.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Type Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'residential', label: 'Residential Home', desc: 'House / Townhouse', icon: <Home className="w-4 h-4" /> },
                    { id: 'commercial', label: 'Commercial Building', desc: 'Business / Warehouse', icon: <Building2 className="w-4 h-4" /> },
                  ].map((item) => {
                    const isSelected = propertyType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPropertyType(item.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-orange-500 bg-orange-50/80 text-slate-950 shadow-sm ring-2 ring-orange-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? 'bg-orange-500 text-slate-950' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <span className="block text-xs sm:text-sm font-bold text-slate-900 leading-tight">{item.label}</span>
                          <span className="text-[10px] text-slate-500 font-medium">{item.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Continue CTA */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-base py-4 px-6 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          )}

          {/* ═════════ STEP 2: ENERGY & DETAILS ═════════ */}
          {step === 2 && !isSubmitted && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleStep2Submit}
              className="space-y-5"
            >
              {/* Electricity Bill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                    Quarterly Electricity Bill
                  </label>
                  <span className="text-[11px] font-semibold text-amber-700">Helps size system</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { bill: 'Under $400', est: 'Small System' },
                    { bill: '$400 - $800', est: 'Avg (6.6-10kW)' },
                    { bill: '$800+', est: 'High Output' },
                  ].map((item) => {
                    const isSelected = quarterlyBill === item.bill;
                    return (
                      <button
                        key={item.bill}
                        type="button"
                        onClick={() => setQuarterlyBill(item.bill)}
                        className={`p-3 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/80 text-slate-950 font-bold ring-2 ring-amber-500/20 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900">{item.bill}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{item.est}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Ownership */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Property Ownership
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'own', label: 'I Own the Property', desc: 'Owner-Occupier' },
                    { id: 'renting', label: 'I am Renting', desc: 'Tenant' },
                  ].map((item) => {
                    const isSelected = ownership === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setOwnership(item.id)}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/80 text-slate-950 font-bold ring-2 ring-amber-500/20 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Roof Layout */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Roof Storey / Layout
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'single_storey', label: 'Single Storey', desc: 'Standard Access' },
                    { id: 'multi_storey', label: 'Double / Multi Storey', desc: 'Multi-Level Roof' },
                  ].map((item) => {
                    const isSelected = roofType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setRoofType(item.id)}
                        className={`p-3.5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/80 text-slate-950 font-bold ring-2 ring-amber-500/20 shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold text-slate-900">{item.label}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Action */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-base py-4 px-4 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          {/* ═════════ STEP 3: CONTACT & MATCH ═════════ */}
          {step === 3 && !isSubmitted && (
            <motion.form
              key="step3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleFinalSubmit}
              className="space-y-4"
            >
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-700 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-800">
                  <span className="font-bold text-slate-900 block">Almost Finished!</span>
                  Where should our vetted local installers send your 3 custom solar proposals?
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={contactData.fullName}
                  onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3.5 bg-slate-50 focus:bg-white border-2 border-slate-200 focus:border-orange-500 rounded-2xl text-slate-900 font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-orange-500/15"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  placeholder="sarah.jenkins@example.com.au"
                  className="w-full px-4 py-3.5 bg-slate-50 focus:bg-white border-2 border-slate-200 focus:border-orange-500 rounded-2xl text-slate-900 font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-orange-500/15"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                  Contact Phone <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={contactData.phone}
                  onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  placeholder="0400 000 000"
                  className="w-full px-4 py-3.5 bg-slate-50 focus:bg-white border-2 border-slate-200 focus:border-orange-500 rounded-2xl text-slate-900 font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-4 focus:ring-orange-500/15"
                />
              </div>

              {/* Privacy Guarantee */}
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-slate-500 leading-relaxed bg-slate-100/70 p-3 rounded-xl border border-slate-200/60">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800 font-bold">100% Privacy Guarantee:</strong> Your information is strictly protected and only shared with up to 3 CEC-accredited installers for quoting.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setStep(2)}
                  className="w-1/3 py-4 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-base py-4 px-4 rounded-2xl shadow-xl shadow-orange-500/30 hover:shadow-orange-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Matching Installers...
                    </span>
                  ) : (
                    'Get My Free Quotes ⚡'
                  )}
                </button>
              </div>
            </motion.form>
          )}

          {/* ═════════ SUCCESS STATE ═════════ */}
          {isSubmitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4 space-y-5"
            >
              <div className="relative mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 bg-emerald-100 border-2 border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-11 h-11" />
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900">
                  Great news, {contactData.fullName.split(' ')[0] || 'there'}!
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  We've matched your property in <strong className="text-slate-900 font-bold">{postcode}</strong> with verified CEC-accredited solar specialists.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2.5 shadow-inner">
                <div className="flex justify-between items-center text-slate-600 pb-2 border-b border-slate-200">
                  <span>Selected Setup:</span>
                  <span className="font-bold text-slate-900 uppercase">{systemType.replace('_', ' + ')}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 pb-2 border-b border-slate-200">
                  <span>Target Area:</span>
                  <span className="font-bold text-slate-900">Postcode {postcode}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Est. Response Time:</span>
                  <span className="font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Within 24 Hours</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-slate-700 flex items-center gap-3 text-left">
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Installers will review your roof orientation and prepare transparent, itemized quotes.</span>
              </div>

              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl cursor-pointer mt-2 active:scale-98"
                >
                  Done & Return to Site
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
