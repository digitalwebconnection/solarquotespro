import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Sun, 
  BatteryCharging, 
  Zap,
  BadgeCheck,
  PhoneOff,
  SearchSlash,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { solarRoofImg } from '../../assets/images';

export default function ValueProposition() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-8 lg:py-14 bg-linear-to-b from-white via-slate-50/60 to-white relative overflow-hidden">

      {/* ─── Background Graphic Elements ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ─── Left: Image with Realtime Graphical HUD Overlays ─── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col"
          >
            {/* Ambient Card Backlight */}
            <div className="absolute -inset-3 bg-linear-to-tr from-amber-300/30 via-emerald-200/30 to-sky-200/30 rounded-3xl blur-xl opacity-80 pointer-events-none" />

            {/* Main High-Definition Rooftop Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 min-h-95 sm:min-h-160 group">
              <img
                src={solarRoofImg}
                alt="Australian clean energy residential rooftop solar installation"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                loading="lazy"
              />
              
              {/* Subtle Dark Gradient Overlay for HUD clarity */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />

              {/* Floating Graphic Badge: CEC Accredited */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% CEC-Accredited Only</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Live Solar Analytics HUD Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 p-4 rounded-2xl shadow-2xl text-white space-y-3">
                <div className="flex items-center justify-between text-xs font-bold pb-2 border-b border-slate-800">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400" />
                    Live System Generation
                  </span>
                  <span className="text-emerald-400 font-mono font-black">6.8 kW Active</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-400 font-medium">Home Consumption</div>
                    <div className="text-sm font-black text-white mt-0.5">1.8 kW <span className="text-[10px] text-emerald-400 font-bold">(Free Solar)</span></div>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-400 font-medium flex items-center gap-1">
                      <BatteryCharging className="w-3.5 h-3.5 text-amber-400" />
                      Battery Storage
                    </div>
                    <div className="text-sm font-black text-amber-400 mt-0.5">96% Charged</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Customer Social Proof Graphic Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-200 p-4 max-w-67.5 z-20"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic mb-2.5">
                "Saved over $4,200 by comparing 3 quotes on this platform. Incredible service!"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-black text-[11px] flex items-center justify-center">
                  JM
                </div>
                <div className="text-[11px] text-slate-600 font-bold">James M. — Sydney NSW</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: High Contrast Copy & Visual Bill Savings Graphic ─── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 font-bold text-xs uppercase tracking-wider mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-orange-600" />
              The Smarter Way To Compare
            </div>

            {/* Heading with Underline Curve */}
            <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-5 tracking-tight">
              Why Thousands of Australians Choose{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 relative whitespace-nowrap">
                Solar Quotes Pro
                <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Copy */}
            <div className="space-y-2.5 text-base sm:text-lg text-slate-900 leading-relaxed mb-6">
              <p>
                Solar is one of the highest-yield financial investments for your home. However,{' '}
                <strong className="text-slate-900 font-bold">pricing and installer quality can vary by over $4,000 for the exact same system.</strong>
              </p>
              <p className="text-slate-900 text-sm sm:text-base">
                We match homeowners with trusted, verified solar professionals who compete transparently—so you receive the absolute best equipment and price.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="space-y-3 mb-6">
              {[
                { icon: <PhoneOff className="w-4 h-4" />, text: "No spam or endless aggressive telemarketing calls.", color: "text-slate-500 bg-slate-100" },
                { icon: <SearchSlash className="w-4 h-4" />, text: "No wasting hours researching hundreds of different companies.", color: "text-slate-500 bg-slate-100" },
                { icon: <BadgeCheck className="w-4 h-4" />, text: "100% verified Clean Energy Council accredited local installers.", color: "text-amber-600 bg-amber-100 border-amber-200" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs"
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${item.color}`}>
                    {item.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

        

            {/* Primary Section CTA */}
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base px-8 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto active:translate-y-0"
            >
              <span>Get 3 Free Quotes Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
