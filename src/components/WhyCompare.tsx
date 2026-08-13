import { motion } from 'framer-motion';
import { Settings, ShieldAlert, Cpu, UserCheck, DollarSign, Search } from 'lucide-react';

export default function WhyCompare() {
  return (
    <section className="py-24 lg:py-32 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px]">
          
          {/* Main Title Box (Spans 2 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-md p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col justify-between group overflow-hidden relative"
          >
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl group-hover:bg-amber-100 transition-colors duration-700 pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-8">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Why Compare <br />
                <span className="text-slate-400 font-light">Three Quotes?</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-slate-600">
              <p className="font-bold text-slate-900">
                Many Australians buy the first quote they receive.
              </p>
              <p>
                That often means paying more than necessary—or choosing the wrong system for their specific roof and energy needs.
              </p>
            </div>
          </motion.div>

          {/* Pricing Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-md p-8 border border-slate-200 shadow-sm flex flex-col justify-end group hover:border-emerald-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Fair Pricing</h3>
            <p className="text-slate-500 mt-2">Understand the true market value.</p>
          </motion.div>

          {/* Brands Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-md p-8 border border-slate-200 shadow-sm flex flex-col justify-end group hover:border-blue-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Top Brands</h3>
            <p className="text-slate-500 mt-2">Compare panels & inverters.</p>
          </motion.div>

          {/* Warranties Box (Spans 2 cols on tablet, 1 on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1 bg-white rounded-md p-8 border border-slate-200 shadow-sm flex flex-col justify-end group hover:border-purple-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Warranties</h3>
            <p className="text-slate-500 mt-2">Evaluate long-term protection.</p>
          </motion.div>

          {/* System Design Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-md p-8 border border-slate-200 shadow-sm flex flex-col justify-end group hover:border-orange-300 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-auto group-hover:scale-110 transition-transform">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">System Design</h3>
            <p className="text-slate-500 mt-2">Learn different setups.</p>
          </motion.div>

          {/* Final Conclusion Box (Spans full width at bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-4 bg-amber-500 rounded-md p-8 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group border border-amber-600/20"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-400/50 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none group-hover:bg-amber-400/70 transition-colors duration-700" />
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-1/2">
              <div className="w-16 h-16 rounded-full bg-amber-400/50 border border-amber-300 flex items-center justify-center shrink-0 shadow-inner">
                <UserCheck className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Find the installer who best suits your needs.
              </h3>
            </div>

            <div className="relative z-10 w-full md:w-1/2 text-left md:text-right">
              <p className="text-xl md:text-2xl font-medium text-slate-800 italic">
                "A better comparison leads to a <span className="text-slate-900 font-black not-italic border-b-2 border-slate-900/20 pb-1">better investment.</span>"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
