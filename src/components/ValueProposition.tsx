import { motion } from 'framer-motion';
import { PhoneOff, SearchSlash, BadgeCheck, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* ─── Left: Image with Overlays ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1 mt-12 lg:mt-0 flex flex-col"
          >
           
            {/* Main Image */}
            <div className="relative rounded-md overflow-hidden shadow-2xl flex-1 border border-slate-100 min-h-[250px]">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=1000&fit=crop&q=80"
                alt="Solar panels on Australian home"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 lg:-right-12 bg-white rounded-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 max-w-[240px] z-20"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium italic mb-3">
                "Saved us over $4,200 by comparing quotes. The process was incredibly simple and fast."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">JM</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">James M. — Sydney</div>
              </div>
            </motion.div>
            
            {/* Floating Stat Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-6 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-3 z-20"
            >
               <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-100">
                 <ShieldCheck className="w-5 h-5" />
               </div>
               <div>
                 <div className="text-xl font-black text-slate-900 leading-none mb-1">100%</div>
                 <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Verified Installers</div>
               </div>
            </motion.div>

          </motion.div>

          {/* ─── Right: Content ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] mb-4">
              Why Thousands of Australians Choose{' '}
              <span className="text-amber-500 relative whitespace-nowrap">
                True Solar Quote
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-amber-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Copy */}
            <div className="space-y-2 text-base text-slate-600 leading-relaxed mb-6">
              <p>
                Buying solar is one of the biggest investments you'll make for your home. Unfortunately,{' '}
                <strong className="text-slate-900 font-bold">not every installer delivers the same quality, pricing or service.</strong>
              </p>
              <p>
                That's where True Solar Quote helps. We match homeowners with trusted solar professionals who have been verified for licensing, experience and customer satisfaction—so you receive competitive quotes from installers you can trust.
              </p>
            </div>

            {/* Pain Points */}
            <div className="space-y-3 mb-5">
              {[
                { icon: <PhoneOff className="w-4 h-4" />, text: "No endless phone calls.", muted: true },
                { icon: <SearchSlash className="w-4 h-4" />, text: "No searching through hundreds of companies.", muted: true },
                { icon: <BadgeCheck className="w-4 h-4" />, text: "Just genuine quotes from quality installers.", muted: false },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    item.muted
                      ? 'bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-slate-100'
                      : 'bg-amber-100 border border-amber-200 text-amber-600 shadow-sm'
                  }`}>
                    {item.icon}
                  </div>
                  <p className={`text-base font-bold leading-tight pt-1 ${item.muted ? 'text-slate-600' : 'text-slate-900'}`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
               <div>
                 <div className="text-2xl font-black text-slate-900 mb-0.5">30<span className="text-amber-500">%</span></div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Savings</div>
               </div>
               <div>
                 <div className="text-2xl font-black text-slate-900 mb-0.5">10k<span className="text-amber-500">+</span></div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Homes Matched</div>
               </div>
            </div>

          </motion.div>

        </div>

        {/* Global CTA centered below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 lg:mt-18 flex justify-center"
        >
          <a
            href="#get-quotes"
            className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-slate-900/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 w-full sm:w-auto"
          >
            Get Your Free Quotes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
