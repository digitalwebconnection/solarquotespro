import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function VerificationProcess() {
  const { openQuoteModal } = useQuoteModal();

  const criteria = [
    "Appropriate licences and accreditation",
    "Industry experience",
    "Business reputation",
    "Customer feedback",
    "Product quality",
    "Warranty support",
    "Professional installation standards",
    "On-time project delivery",
    "Transparent pricing models",
    "Post-installation maintenance"
  ];

  return (
    <section id="standards" className="py-8 lg:py-14 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column - Sticky Context */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 lg:pb-12">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-px w-12 bg-orange-500" />
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-orange-600">
                    Strict Criteria
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
                  The <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 font-black relative whitespace-nowrap">
                    Standard
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-orange-400/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span> We Enforce.
                </h2>
                
                <p className="text-lg md:text-xl  text-slate-900 leading-relaxed mb-8">
                  We don't accept every installer who applies. Before joining our network, installers are strictly assessed to ensure ultimate reliability.
                </p>

                <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 shadow-sm border-l-4 border-l-orange-500 mb-8">
                  <p className="text-base md:text-lg font-medium text-slate-800 leading-snug">
                    "Our goal is simple: Connect Australian homeowners with installers we'd confidently recommend to our own families."
                  </p>
                </div>

                <button
                  onClick={() => openQuoteModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black px-8 py-3 rounded-full transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 cursor-pointer active:scale-100"
                >
                  Match With Vetted Installers
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Normal flow, pushes grid height */}
          <div className="lg:col-span-7 relative">
            
            <div className="border-t-2 border-slate-900">
              {criteria.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  onClick={() => openQuoteModal()}
                  className="group relative border-b border-slate-200 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 cursor-pointer overflow-hidden"
                >
                  {/* Subtle hover background fill */}
                  <div className="absolute inset-0 bg-orange-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

                  <span className="text-base font-mono font-bold text-slate-400 group-hover:text-orange-600 transition-colors duration-300 w-10 shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {item}
                  </h3>

                  <div className="ml-auto hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:border-orange-500 group-hover:text-slate-950 transition-colors duration-300">
                    <Check className="w-6 h-6 text-slate-300 group-hover:text-slate-950 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="h-12 lg:h-16 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
