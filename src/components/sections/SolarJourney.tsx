import { motion } from 'framer-motion';
import { 
  Sun, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Star, 
  TrendingDown 
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { solarRoofImg } from '../../assets/images';

const SolarJourney = () => {
  const { openQuoteModal } = useQuoteModal();

  const journeyMilestones = [
    {
      step: "01",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Rooftop Sizing",
      detail: "Instant 60s Bill Analysis",
      color: "border-amber-500/40 bg-amber-500/10 text-amber-300"
    },
    {
      step: "02",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "3 Vetted CEC Pros",
      detail: "Clean Energy Council Matched",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
    },
    {
      step: "03",
      icon: <TrendingDown className="w-5 h-5 text-sky-400" />,
      title: "Save Up To 85%",
      detail: "Zero Power Bill Shocks",
      color: "border-sky-500/40 bg-sky-500/10 text-sky-300"
    }
  ];

  return (
    <section 
      className="relative min-h-110 sm:min-h-130 flex flex-col justify-center items-center bg-slate-950 overflow-hidden my-4 lg:my-8 bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${solarRoofImg})` }}
    >
      {/* ─── Layered Gradient Dark Vignette Overlay ─── */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 backdrop-blur-[2px]" />
      
      {/* ─── Ambient Glow Orbs & Solar Waves ─── */}
      <div className="absolute -top-24 left-1/4 w-125 h-125 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-125 h-125 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Vector Rays SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none select-none"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 300C300 150 600 450 1540 100" stroke="url(#journeyGrad)" strokeWidth="2" strokeDasharray="8 8" />
        <path d="M-100 450C400 300 800 600 1540 250" stroke="url(#journeyGrad)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="journeyGrad" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="1" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Animated Particles */}
      <div className="absolute top-20 left-12 w-2.5 h-2.5 rounded-full bg-amber-400/60 animate-ping pointer-events-none" />
      <div className="absolute bottom-20 right-16 w-2 h-2 rounded-full bg-emerald-400/70 animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 lg:py-10">
        
        {/* Top Trust Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-lg shadow-amber-500/10"
        >
          <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-spin" style={{ animationDuration: '15s' }} />
          <span>The Smarter Way to Go Solar in Australia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-3 sm:mb-4 tracking-tight leading-[1.15]"
        >
          Your Solar Journey <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-300 to-orange-400">
            Starts Here
          </span>
        </motion.h2>
        
        {/* High-Readability Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-1 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 font-medium max-w-7xl mx-auto mb-6 sm:mb-8 leading-relaxed"
        >
          <p>
            Whether you're installing your first solar system or upgrading with battery storage, True Solar Quote eliminates the guesswork.
          </p>
          <p className="text-amber-200/90 font-bold">
            Compare trusted local installers who compete to give you the highest quality at the best price.
          </p>
        </motion.div>

        {/* ─── 3-Step Solar Milestone Journey Graphic HUD ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto mb-6 text-left"
        >
          {journeyMilestones.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-3 sm:gap-3.5 shadow-xl shadow-black/40 group cursor-pointer"
              onClick={() => openQuoteModal()}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Step {item.step}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Action Button & Live Trust Ratings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto"
        >
          <button 
            onClick={() => openQuoteModal()}
            className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg py-3 px-8 sm:px-10 rounded-full shadow-[0_10px_35px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.5)] transition-all hover:scale-105 cursor-pointer active:scale-98 w-full sm:w-auto"
          >
            <span>Get Your Free Quotes</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Social Proof Badges */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-slate-800 text-xs w-full sm:w-auto">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">4.9 / 5</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-semibold">10,000+ Aussies</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SolarJourney;

