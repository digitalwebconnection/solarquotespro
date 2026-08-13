import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function VerificationProcess() {
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
    <section className="py-12 lg:py-24 bg-white relative">
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Use a standard grid that stretches by default, allowing the left column to be as tall as the right column */}
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
                  <div className="h-px w-12 bg-amber-500" />
                  <span className="text-sm font-bold tracking-[0.2em] uppercase text-amber-600">
                    Strict Criteria
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                  The <span className="text-amber-500 font-bold relative whitespace-nowrap">
                    Standard
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-amber-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span> We Enforce.
                </h2>
                
                <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed mb-10">
                  We don't accept every installer who applies. Before joining our network, installers are strictly assessed to ensure ultimate reliability.
                </p>

                <div className="p-8 bg-amber-50 rounded-md border border-amber-100 shadow-sm border-l-4 border-l-amber-500">
                  <p className="text-lg md:text-xl font-medium text-slate-800 leading-snug">
                    "Our goal is simple: Connect Australian homeowners with installers we'd confidently recommend to our own families."
                  </p>
                </div>
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
                  className="group relative border-b border-slate-200 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 cursor-default overflow-hidden"
                >
                  {/* Subtle hover background fill */}
                  <div className="absolute inset-0 bg-amber-50/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />

                  <span className="text-base font-mono font-bold text-slate-400 group-hover:text-amber-600 transition-colors duration-300 w-10 shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {item}
                  </h3>

                  <div className="ml-auto hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors duration-300">
                    <Check className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Extra padding at the bottom of the scroll area to ensure the last item is fully visible past the fade mask */}
            <div className="h-12 lg:h-24 w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
