import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Sun,
  CheckCircle,
  Star,
  TrendingDown,
  Zap,
} from "lucide-react";
import { useQuoteModal } from "../../context/QuoteModalContext";

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();

  const features = [
    "100% Free Service",
    "No Obligation Quotes",
    "Verified Installers Only",
    "Australia Wide",
  ];

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-linear-to-b from-slate-50 via-amber-50/30 to-white">
      
      {/* ─── Rich Background Graphic Effects (Light & Dynamic) ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        
        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-60" />

        {/* Ambient Radial Solar Glows */}
        <div className="absolute -top-24 right-1/4 w-137.5 h-137.5 bg-amber-300/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-24 w-112.5 h-112.5 bg-sky-200/40 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-[-5%] w-125 h-125 bg-emerald-200/35 rounded-full blur-[130px]" />

        {/* Geometric Solar Ray Lines SVG Graphic */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-35"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M800 -100L1500 800"
            stroke="url(#solarRay1)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M650 -100L1350 800"
            stroke="url(#solarRay2)"
            strokeWidth="1.5"
          />
          <path
            d="M950 -100L1650 800"
            stroke="url(#solarRay1)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="solarRay1" x1="800" y1="-100" x2="1500" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="solarRay2" x1="650" y1="-100" x2="1350" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Decorative Particle Dots */}
        <div className="absolute top-28 left-1/4 w-3 h-3 rounded-full bg-amber-400/60 animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-emerald-400/70 animate-pulse" />
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 rounded-full bg-sky-400/60 animate-ping" style={{ animationDuration: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─── Left Column: High-Impact Copy & Social Proof ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-orange-400 text-orange-900 font-bold text-xs sm:text-sm mb-6 shadow-md shadow-orange-500/10 backdrop-blur-sm">
              <Award className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Australia's Trusted Way To Compare Solar Quotes</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Main Headline with Custom Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black font-serif text-slate-900 leading-[1.1] tracking-tight mb-6">
              Get 3 Free Quotes From{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-500 to-amber-500">
                Verified
              </span>{" "}
              Solar Installers
            </h1>

            {/* High Readability Text */}
            <p className="text-lg sm:text-xl text-slate-950 mb-3 max-w-2xl font-bold leading-snug">
              Stop wasting time comparing dozens of solar companies.
            </p>
            <p className="text-base sm:text-lg text-slate-900 mb-8 max-w-xl leading-relaxed">
              Tell us about your home once, and we'll connect you with up to 3
              carefully verified local installers who compete for your business.
            </p>

            {/* Features Checkpoints Grid */}
            <ul className="grid sm:grid-cols-2 gap-3.5 mb-10 max-w-lg">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/90 border border-slate-200/80 px-3.5 py-2.5 rounded-xl text-slate-800 font-bold text-xs sm:text-sm shadow-xs backdrop-blur-sm"
                >
                  <CheckCircle className="w-4.5 h-4.5 text-orange-500 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA & Rating Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openQuoteModal()}
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 text-base sm:text-lg font-black px-8 py-2 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(249,115,22,0.35)] hover:shadow-[0_15px_45px_rgba(249,115,22,0.5)] cursor-pointer"
              >
                <span>Get Your Free Quotes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-3 text-left">
                <div className="flex -space-x-2">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80" alt="Verified Customer" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" alt="Verified Customer" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80" alt="Verified Customer" />
                </div>
                <div>
                  <div className="flex items-center text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-slate-900 font-black ml-1.5">4.9 / 5</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-semibold">10,000+ Aussie homeowners</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Right Column: Visual Composite Card with Rooftop Graphic ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Ambient Multi-layer Card Glow */}
            <div className="absolute -inset-4 bg-linear-to-tr from-amber-400/25 via-emerald-300/20 to-sky-300/20 rounded-xl blur-2xl opacity-75 pointer-events-none" />

            <div className="relative w-full max-w-lg mx-auto bg-white/95 rounded-xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] overflow-hidden backdrop-blur-xl">
              
              {/* Graphic Banner: Modern Australian Solar Rooftop */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=85"
                  alt="Modern Australian Home with High Efficiency Solar Panels"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Image Gradient Dark Overlay for HUD clarity */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Floating Top Status Badge */}
                <div className="absolute top-3.5 left-3.5 bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CEC Verified Network Active</span>
                </div>

                {/* Live Solar Output Badge overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between bg-slate-950/90 backdrop-blur-md border border-slate-700/70 px-3.5 py-2 rounded-xl text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Daily Generation</div>
                      <div className="text-xs font-black text-white">28.4 kWh <span className="text-emerald-400 font-bold">(Peak Sun)</span></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-slate-400 uppercase font-bold">Quarterly Savings</div>
                    <div className="text-xs font-black text-emerald-400 flex items-center gap-0.5 justify-end">
                      <TrendingDown className="w-3 h-3" />
                      Save ~85%
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Engine Live Steps & Stats */}
              <div className="p-3 sm:p-4 space-y-2">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-400/80 hover:bg-amber-50/50 transition-colors">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                      Vetted Installers
                    </div>
                    <div className="text-xl font-black text-slate-900 mt-0.5">
                      4,250<span className="text-amber-500">+</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50/60 rounded-xl p-3.5 border border-emerald-200/60 hover:bg-emerald-50 transition-colors">
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                      Avg. Savings
                    </div>
                    <div className="text-xl font-black text-emerald-700 mt-0.5">
                      30%<span className="text-xs font-bold text-emerald-600 ml-1">Off Bills</span>
                    </div>
                  </div>
                </div>

                {/* Match Engine Flow */}
                <div className="space-y-2.5 pt-1">
                  
                  {/* Step 1 */}
                  <div
                    onClick={() => openQuoteModal()}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50/80 border border-amber-300/80 hover:bg-amber-100/80 transition-all cursor-pointer group shadow-xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 text-xs flex items-center justify-between">
                        <span>Submit Details</span>
                        <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-full">Click to Start</span>
                      </div>
                      <p className="text-[11px] text-slate-600 truncate">Takes less than 60 seconds</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 text-xs">System Matches</div>
                      <p className="text-[11px] text-slate-500">We find top 3 local pros</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-emerald-800 text-xs">Compare & Save</div>
                      <p className="text-[11px] text-slate-500">Choose the best quote</p>
                    </div>
                  </div>

                </div>

                {/* Instant Quote CTA */}
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 active:scale-98"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Start My 3 Free Quotes</span>
                </button>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-10 sm:h-16 lg:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
