import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero() {
  const features = [
    "100% Free Service",
    "No Obligation Quotes",
    "Verified Installers Only",
    "Australia Wide"
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-200/50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-amber-600 font-medium text-sm mb-6 shadow-sm">
              <Award className="w-4 h-4" />
              Australia's Trusted Way To Compare Solar Quotes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Get 3 Free Quotes From <span className="text-gradient">Verified</span> Solar Installers
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl font-medium">
              Stop wasting time comparing dozens of solar companies.
            </p>
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-xl">
              Tell us about your home once, and we'll connect you with up to 3 carefully verified local installers who compete for your business.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="group relative inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1">
                Get Your Free Quotes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Abstract aesthetic graphic right side */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-transparent rounded-3xl transform rotate-6 border border-slate-200 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 border border-slate-100 shadow-xl p-8 flex flex-col justify-center">
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                       <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                         <ShieldCheck className="w-6 h-6 text-green-600" />
                       </div>
                       <div>
                         <div className="text-slate-900 font-bold">Verified Installers</div>
                         <div className="text-sm text-slate-500">Pre-vetted for quality</div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 ml-8 shadow-sm">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                         <Clock className="w-6 h-6 text-blue-600" />
                       </div>
                       <div>
                         <div className="text-slate-900 font-bold">Save Time</div>
                         <div className="text-sm text-slate-500">One form, 3 quotes</div>
                       </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                       <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                         <Award className="w-6 h-6 text-amber-600" />
                       </div>
                       <div>
                         <div className="text-slate-900 font-bold">Best Value</div>
                         <div className="text-sm text-slate-500">Installers compete</div>
                       </div>
                    </div>
                 </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
