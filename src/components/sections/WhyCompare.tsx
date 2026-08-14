import { motion } from 'framer-motion';
import { 
  Settings, 
  ShieldCheck, 
  Cpu, 
  UserCheck, 
  DollarSign, 
  ArrowRight, 
  TrendingDown, 
  CheckCircle2, 
  Scale
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { solarSavingsImg, solarRoofImg, installerHandshakeImg, modernHomeImg } from '../../assets/images';

export default function WhyCompare() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      
      {/* ─── Ambient Background Graphics ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          
          {/* Main Hero Bento Card (Spans 2 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-2xl p-6 lg:p-6 border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col justify-between group overflow-hidden relative"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-100/60 rounded-full blur-3xl group-hover:bg-amber-200/50 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
                <Scale className="w-3.5 h-3.5 text-amber-600" />
                Smart Consumer Strategy
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-[1.1] mb-4 tracking-tight">
                Why Compare <br />
                <span className="text-amber-500 relative whitespace-nowrap">
                  Three Quotes?
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-amber-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h2>

              <p className="text-base text-slate-900 leading-relaxed mb-6 font-medium">
                Many Australians accept the very first quote they receive—frequently paying up to <strong className="text-slate-950 font-bold">$3,500+ more</strong> for outdated hardware or undersized inverters.
              </p>

              {/* ─── Visual Comparison Infographic Graphic ─── */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 mb-4">
                
                {/* 1 Quote Row */}
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white border border-rose-200/70 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Single Quote (No Competition)</span>
                  </div>
                  <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md text-[11px]">Pay Full Retail Rate</span>
                </div>

                {/* 3 Quotes Row */}
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-300 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>3 Verified Quotes (SolarQuotes Pro)</span>
                  </div>
                  <span className="font-black text-emerald-800 bg-emerald-200/70 px-2.5 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    Save Up To 30%
                  </span>
                </div>

              </div>
            </div>
            
            <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                100% Free & No Obligation
              </span>
              <span className="text-amber-600 font-bold">Takes &lt; 60 Sec</span>
            </div>
          </motion.div>

          {/* ─── Bento Box 1: Fair Pricing ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => openQuoteModal()}
            className="relative bg-white rounded-xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:border-emerald-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden min-h-55"
          >
            {/* Background Hover Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
              <img
                src={solarSavingsImg}
                alt="Fair Pricing Analysis"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/70 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 group-hover:shadow-emerald-500/40 transition-all duration-300 shadow-xs group-hover:scale-110">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 group-hover:text-emerald-300 border border-transparent px-2.5 py-1 rounded-full transition-colors duration-300">
                Market True Cost
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-serif font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                Fair Market Pricing
              </h3>
              <p className="text-slate-600 group-hover:text-slate-200 mt-1.5 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300">
                Installers sharpen their pricing knowing they are competing for your business.
              </p>
            </div>
          </motion.div>

          {/* ─── Bento Box 2: Tier-1 Brands ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => openQuoteModal()}
            className="relative bg-white rounded-xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden min-h-55"
          >
            {/* Background Hover Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
              <img
                src={solarRoofImg}
                alt="Solar Panels Hardware"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/70 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-slate-950 group-hover:border-blue-400 group-hover:shadow-blue-500/40 transition-all duration-300 shadow-xs group-hover:scale-110">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-100 group-hover:bg-blue-500/20 group-hover:border-blue-400 group-hover:text-blue-300 border border-transparent px-2.5 py-1 rounded-full transition-colors duration-300">
                Tier-1 Hardware
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-serif font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                Top Tier Brands
              </h3>
              <p className="text-slate-600 group-hover:text-slate-200 mt-1.5 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300">
                Compare premium Bloomberg Tier-1 panels, microinverters & smart batteries.
              </p>
            </div>
          </motion.div>

          {/* ─── Bento Box 3: 25-Year Warranties ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => openQuoteModal()}
            className="md:col-span-1 lg:col-span-1 bg-white rounded-xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:border-purple-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden min-h-55"
          >
            {/* Background Hover Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
              <img
                src={installerHandshakeImg}
                alt="Warranty Protection"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/70 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-slate-950 group-hover:border-purple-400 group-hover:shadow-purple-500/40 transition-all duration-300 shadow-xs group-hover:scale-110">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 group-hover:bg-purple-500/20 group-hover:border-purple-400 group-hover:text-purple-300 border border-transparent px-2.5 py-1 rounded-full transition-colors duration-300">
                25-Yr Protection
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-serif font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                Ironclad Warranties
              </h3>
              <p className="text-slate-600 group-hover:text-slate-200 mt-1.5 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300">
                Verify 25-year performance output and Australian-backed local support.
              </p>
            </div>
          </motion.div>

          {/* ─── Bento Box 4: Custom System Design ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => openQuoteModal()}
            className="md:col-span-1 lg:col-span-1 bg-white rounded-xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between group hover:border-amber-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden min-h-55"
          >
            {/* Background Hover Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
              <img
                src={modernHomeImg}
                alt="System Design Analysis"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/70 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 group-hover:shadow-amber-500/40 transition-all duration-300 shadow-xs group-hover:scale-110">
                <Settings className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 group-hover:bg-amber-500/20 group-hover:border-amber-400 group-hover:text-amber-300 border border-transparent px-2.5 py-1 rounded-full transition-colors duration-300">
                Custom Layout
              </span>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-serif font-black text-slate-900 group-hover:text-white transition-colors duration-300">
                Engineered Layout
              </h3>
              <p className="text-slate-600 group-hover:text-slate-200 mt-1.5 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-300">
                Optimised panel placement tailored specifically to your roof azimuth & shade.
              </p>
            </div>
          </motion.div>

          {/* ─── Final Bottom Action Card (Full Width) ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-4 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 rounded-xl p-6 lg:p-8 shadow-xl shadow-orange-500/25 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group border border-orange-400/80"
          >
            {/* Ambient Card Glow */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            
            <div className="flex items-center gap-4 sm:gap-5 relative z-10 w-full md:w-3/5">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 shadow-lg border border-slate-800">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-slate-950 leading-tight">
                  Find the installer who best suits your property.
                </h3>
                <p className="text-slate-900 text-xs sm:text-sm font-semibold mt-1">
                  Connect with up to 3 vetted, CEC-accredited local installers today.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-2/5 flex flex-col items-start md:items-end gap-2">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm px-7 py-3 rounded-xl transition-all shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 active:scale-100"
              >
                <span>Compare 3 Quotes Now</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
              <span className="text-[11px] text-slate-900 font-bold">100% Free • No Obligation Required</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
