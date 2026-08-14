import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, Users, ArrowRightLeft, ShieldCheck, Zap } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function HowItWorks() {
  const { openQuoteModal } = useQuoteModal();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: "Tell Us About Your Property",
      description: "Complete our quick online form in under 2 minutes. We check your roof size and bill amount.",
      tag: "Takes < 60 Seconds",
      color: "amber",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsqW7JsArNw1RjgX6oMIiHQJtvSwDxcvW23xqGcMAQEfGUQLBP64UFUE&s=10"
    },
    {
      num: "02",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "We Match You With Verified Installers",
      description: "Based on your location and requirements, we select up to 3 CEC-accredited installers in your postcode.",
      tag: "100% CEC-Accredited",
      color: "emerald",
      bgImage: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80"
    },
    {
      num: "03",
      icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
      title: "Compare & Choose The Best",
      description: "Receive itemized quotes with government STC rebates deducted upfront. Choose the installer that's right for you.",
      tag: "Save Up To 30%",
      color: "blue",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DwN8uDElQs7Pn5464VrWh97UfMo5fLnelnSUh9uhslWg5G3mW4813Po&s=10"
    }
  ];

  // Auto-hover rotation every 6 seconds
  useEffect(() => {
    if (hoveredCardIndex !== null) return; // Pause auto-rotation when user is hovering manually
    
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [hoveredCardIndex, steps.length]);

  return (
    <section id="how-it-works" className="py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden scroll-mt-20">
      
      {/* ─── Background Graphic Elements ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-orange-500" />
            Simple 3-Step Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-5 tracking-tight"
          >
            How It <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 relative whitespace-nowrap">
              Works
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>

          <p className="text-base sm:text-lg text-slate-900 max-w-3xl mx-auto">
            Get transparent, competitive quotes from verified local solar installers in 3 effortless steps.
          </p>
        </div>

        {/* Steps Grid with Auto & Manual Hover Background Images */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-amber-300 via-orange-400 to-emerald-400 z-0 opacity-60" />

          {steps.map((step, index) => {
            const isCardActive = hoveredCardIndex !== null ? hoveredCardIndex === index : activeCardIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                onClick={() => openQuoteModal()}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                className={`relative bg-white rounded-xl p-4 lg:p-6 shadow-xl border transition-all duration-500 z-10 overflow-hidden cursor-pointer flex flex-col justify-between min-h-85 ${
                  isCardActive 
                    ? '-translate-y-2 shadow-2xl border-orange-400 ring-2 ring-orange-400/30' 
                    : 'shadow-slate-200/50 border-slate-200/90 hover:-translate-y-2 hover:border-orange-400'
                }`}
              >
                {/* ─── Active/Hover 6s Progress Bar Indicator ─── */}
                {isCardActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-20 overflow-hidden">
                    <motion.div
                      key={`progress-${index}-${hoveredCardIndex !== null ? 'manual' : activeCardIndex}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: hoveredCardIndex !== null ? 0.3 : 6, ease: 'linear' }}
                      className="h-full bg-linear-to-r from-amber-400 via-orange-500 to-amber-500"
                    />
                  </div>
                )}

                {/* ─── Prominent Background Image (Active on 6s cycle or Hover) ─── */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-xl pointer-events-none">
                  <img
                    src={step.bgImage}
                    alt={step.title}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                      isCardActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                    loading="lazy"
                  />
                  {/* Dark Vignette Overlay so photo is visible & text is 100% readable */}
                  <div className={`absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/75 to-slate-900/60 transition-opacity duration-500 ${
                    isCardActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Massive background number */}
                <div className={`absolute -right-3 -bottom-4 text-[9rem] font-black transition-colors duration-500 z-0 select-none leading-none tracking-tighter ${
                  isCardActive ? 'text-white/10' : 'text-slate-100'
                }`}>
                  {step.num}
                </div>

                {/* Top Row: Icon Capsule + Step Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md border transition-all duration-300 ${
                      isCardActive
                        ? (step.color === 'amber' ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/40 scale-110' :
                           step.color === 'emerald' ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/40 scale-110' :
                           'bg-sky-500 text-slate-950 border-sky-400 shadow-sky-500/40 scale-110')
                        : (step.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-600' :
                           step.color === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-600' :
                           'bg-blue-50 border-blue-200 text-blue-600')
                    }`}>
                      {step.icon}
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-xs transition-colors duration-300 ${
                      isCardActive
                        ? (step.color === 'amber' ? 'bg-amber-500/20 border-amber-400 text-amber-300' :
                           step.color === 'emerald' ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' :
                           'bg-sky-500/20 border-sky-400 text-sky-300')
                        : (step.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                           step.color === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
                           'bg-blue-50 border-blue-200 text-blue-800')
                    }`}>
                      {step.tag}
                    </span>
                  </div>

                  <div className={`text-xs font-bold tracking-widest uppercase mb-1.5 transition-colors duration-300 ${
                    isCardActive ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    STEP {step.num}
                  </div>

                  <h3 className={`text-2xl font-bold transition-colors duration-300 mb-3 leading-snug ${
                    isCardActive ? 'text-white' : 'text-slate-900'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`leading-relaxed text-sm sm:text-base mb-6 font-medium transition-colors duration-300 ${
                    isCardActive ? 'text-slate-200' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className={`relative z-10 pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors duration-300 ${
                  isCardActive ? 'border-slate-800 text-amber-400' : 'border-slate-100 text-amber-600'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className={`w-4 h-4 ${isCardActive ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    100% Free & No Obligation
                  </span>
                  <div className="flex items-center gap-1">
                    <span>Start</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge and CTA at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <div className="inline-flex items-center gap-3 shadow-xl shadow-slate-300  bg-white rounded-full px-6 py-3  border border-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <span>No pressure.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              <span>No obligation quotes.</span>
            </div>
          </div>

          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3 rounded-full transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 cursor-pointer active:scale-100"
          >
            Get Free Quotes Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
