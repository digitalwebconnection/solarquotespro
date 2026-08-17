import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  XCircle,
  ArrowRight, 
  Cpu, 
  FileCheck2, 
  Star, 
  DollarSign, 
  Zap,
  Lock,
  Building2,
  Sparkles,
  Layers
} from 'lucide-react';      
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function VerificationProcess() {
  const { openQuoteModal } = useQuoteModal();
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const stages = [
    {
      id: 1,
      number: "01",
      badge: "Stage 1: Pre-Screening",
      title: "Legal & License Audit",
      desc: "Before any installer joins our network, our compliance team conducts deep-tier checks on state licenses and insurance.",
      metrics: "100% Verified",
      checks: [
        { title: "Current Clean Energy Council (CEC) ID", detail: "Verified directly against the Clean Energy Council registry" },
        { title: "Registered Electrical Contractor (REC)", detail: "Licensed master electricians in your specific state" },
        { title: "$10M - $20M Public Liability Insurance", detail: "Active policy certificate on file to safeguard your home" },
        { title: "ASIC Business & Financial Health Check", detail: "Active ABN/ACN with verified operational history" }
      ]
    },
    {
      id: 2,
      number: "02",
      badge: "Stage 2: Hardware Quality",
      title: "Tier-1 Equipment Benchmark",
      desc: "We enforce strict hardware standards so your system generates maximum kilowatt-hours for 25+ years without degradation.",
      metrics: "Tier-1 Only",
      checks: [
        { title: "BloombergNEF Tier-1 Solar Panels", detail: "High-yield monocrystalline panels from world-leading manufacturers" },
        { title: "CEC-Approved Smart Inverters", detail: "Enphase, Fronius, Sungrow & SolarEdge with live app monitoring" },
        { title: "AS/NZS 5033 & AS 4777.2 Safety Code", detail: "Compliant cabling, DC isolators & rooftop switchboard integration" },
        { title: "Battery Storage Certification", detail: "Endorsed for Tesla Powerwall, BYD, Sigenergy & Sungrow batteries" }
      ]
    },
    {
      id: 3,
      number: "03",
      badge: "Stage 3: Consumer Protection",
      title: "Warranties & Transparent Quotes",
      desc: "Guaranteed protection with binding workmanship warranties and government rebate deductions applied upfront.",
      metrics: "10-Yr Minimum",
      checks: [
        { title: "10-Year Workmanship Warranty", detail: "Legally binding installer warranty covering all roof work & labor" },
        { title: "Clean Energy Regulator STC Deduction", detail: "Government small-scale technology certificates deducted upfront" },
        { title: "4.8+ Star Australian Customer Rating", detail: "Ongoing quality auditing from verified Aussie homeowners" },
        { title: "100% Itemized Honest Quotes", detail: "Zero hidden installation fees or surprise switchboard upgrade costs" }
      ]
    }
  ];

  // Auto-advance stages every 8 seconds, pausing on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev % stages.length) + 1);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused, stages.length]);

  return (
    <section id="standards" className="py-12 lg:py-20 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden scroll-mt-20">
      
      {/* ─── Ambient Glow Effects ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-175 bg-[#00417E]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-125 h-125 bg-[#0A6702]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#00417E]/20 text-[#00417E] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-[#0A6702]" />
            <span>Australia's Strictest Verification Pipeline</span>
            <span className="w-2 h-2 rounded-full bg-[#0A6702] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-[1.12] tracking-tight mb-4">
            How We Vet Every Installer <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00417E] via-[#0A6702] to-[#F9B122]">
              Before You Get A Quote
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            We reject over <strong className="text-slate-950">85% of applicants</strong>. Only Clean Energy Council (CEC) accredited professionals who pass all 3 audit stages are allowed to quote on True Solar Quote.
          </p>
        </div>

        {/* ─── 3-Stage Interactive Stepper Header (Auto 8s Rotation) ─── */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(stage.id);
                  setIsPaused(false);
                }}
                className={`text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#00417E] border-[#00417E] text-white shadow-xl shadow-[#00417E]/20 scale-101'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50/80 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-[#F9B122] text-[#00417E]' 
                      : 'bg-slate-100 text-slate-600 font-semibold'
                  }`}>
                    {stage.badge}
                  </span>
                  <span className={`text-xl font-black font-mono ${isActive ? 'text-[#F9B122]' : 'text-slate-300'}`}>
                    {stage.number}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-serif font-black leading-snug ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {stage.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                    {stage.desc}
                  </p>
                </div>

                {/* Animated 8s Progress Bar on Active Tab */}
                {isActive && (
                  <motion.div 
                    key={`bar-${stage.id}`}
                    initial={{ width: "0%" }}
                    animate={{ width: isPaused ? undefined : "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1.5 bg-linear-to-r from-[#F9B122] via-emerald-400 to-[#F9B122]" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ─── Active Stage Inspection Showcase Card ─── */}
        <AnimatePresence mode="wait">
          {stages.filter(s => s.id === activeStage).map((stage) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-4 sm:p-6 lg:p-6 border border-slate-200/90 shadow-xl mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-[#0A6702] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4 text-[#F9B122]" />
                    <span>Audit Checklist & Verification Standards</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-slate-900">
                    {stage.title}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <div className="px-3.5 py-2 rounded-xl bg-[#0A6702]/10 border border-[#0A6702]/20 text-[#0A6702] font-bold text-xs flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0A6702]" />
                    <span>CEC Verified Standard</span>
                  </div>
                  <button
                    onClick={() => openQuoteModal()}
                    className="bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] font-black text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-all shadow-md shadow-[#F9B122]/30 hover:scale-103 cursor-pointer flex items-center justify-center gap-1.5 shrink-0 w-full sm:w-auto text-center"
                  >
                    <span>Get Verified Quotes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4 Check Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 pt-4 sm:pt-6">
                {stage.checks.map((check, i) => (
                  <div 
                    key={i}
                    className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00417E]/30 hover:shadow-md transition-all flex items-start gap-3 group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white border border-slate-200 group-hover:bg-[#00417E] group-hover:border-[#00417E] group-hover:text-white text-[#00417E] flex items-center justify-center shrink-0 transition-colors shadow-xs">
                      <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A6702] group-hover:text-[#F9B122] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 group-hover:text-[#00417E] transition-colors">
                        {check.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        {check.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* ─── High-Contrast Direct Comparison: True Solar vs Average Market ─── */}
        <div className="bg-linear-to-br from-[#00417E] via-[#002f5a] to-slate-950 text-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-2xl border border-slate-800 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F9B122]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A6702]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9B122] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Why Verification Matters
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-white mt-3">
                True Solar Quote vs. Unvetted Market
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 mt-1.5">
                See the difference between verified CEC installers and aggressive marketing middlemen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Unvetted Market Risks */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-3.5">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm border-b border-white/10 pb-3">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>The Average Solar Market (Risks)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold text-sm leading-none mt-0.5">&#10005;</span>
                    <span>High-pressure door-to-door sales reps using aggressive tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold text-sm leading-none mt-0.5">&#10005;</span>
                    <span>Subcontracted to cheapest unverified third-party electrical crews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold text-sm leading-none mt-0.5">&#10005;</span>
                    <span>Generic unbranded solar panels with high degradation rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold text-sm leading-none mt-0.5">&#10005;</span>
                    <span>No workmanship warranty when the sales company liquidates</span>
                  </li>
                </ul>
              </div>

              {/* True Solar Quote Standards */}
              <div className="bg-linear-to-b from-[#0A6702]/20 to-[#00417E]/40 border border-[#0A6702]/40 rounded-2xl p-5 sm:p-6 backdrop-blur-sm space-y-3.5 shadow-lg">
                <div className="flex items-center gap-2 text-[#F9B122] font-bold text-sm border-b border-white/15 pb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>True Solar Quote Verified Network</span>
                </div>
                <ul className="space-y-2.5 text-xs text-white font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Clean Energy Council Accredited</strong> master installers only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>10-Year Workmanship Warranty</strong> backed by established Australian companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Tier-1 BloombergNEF hardware</strong> with 25-year manufacturer performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Free & Independent</strong> comparison with zero sales pressure</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom CTA Row inside Banner */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-bold text-white">Compare 3 Vetted Installers In Your Postcode</p>
                <p className="text-xs text-slate-300">Takes less than 60 seconds • 100% free and no-obligation</p>
              </div>
              <button
                onClick={() => openQuoteModal()}
                className="bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] font-black text-sm py-3.5 px-8 rounded-full transition-all shadow-xl shadow-[#F9B122]/30 hover:scale-105 active:scale-100 shrink-0 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Zap className="w-4 h-4 text-[#00417E] fill-[#00417E]" />
                <span>Get 3 Free Quotes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* ─── 10-Point Micro-Badge Grid ─── */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Full 10-Point Pre-Screening Checklist
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { icon: Award, label: "CEC Accredited" },
              { icon: Lock, label: "$20M Insurance" },
              { icon: Cpu, label: "Tier-1 Hardware" },
              { icon: ShieldCheck, label: "10-Yr Warranty" },
              { icon: Star, label: "4.8★ Ratings" },
              { icon: DollarSign, label: "STC Rebates" },
              { icon: Layers, label: "LiDAR Sizing" },
              { icon: FileCheck2, label: "AS/NZS Code" },
              { icon: Building2, label: "ASIC Check" },
              { icon: CheckCircle2, label: "Itemized Prices" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => openQuoteModal()}
                  className="bg-white p-3 rounded-xl border border-slate-400/90 shadow-lg hover:shadow-xl shadow-black/60 hover:border-[#00417E]/40 transition-all flex items-center gap-2.5 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-[#00417E] group-hover:text-white text-[#00417E] flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#00417E] transition-colors leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
