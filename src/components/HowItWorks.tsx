import { motion } from 'framer-motion';
import { FileText, Users, ArrowRightLeft, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      title: "Tell Us About Your Property",
      description: "Complete our quick online form in under 2 minutes.",
      color: "amber"
    },
    {
      num: "02",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "We Match You With Verified Installers",
      description: "Based on your location and requirements, we select up to three trusted installers from our network.",
      color: "emerald"
    },
    {
      num: "03",
      icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
      title: "Compare & Choose",
      description: "Receive personalised quotes, compare pricing, products, warranties and choose the installer that's right for you.",
      color: "blue"
    }
  ];

  return (
    <section className="py-12 lg:py-18 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600">The Process</span>
            <div className="h-px w-8 bg-amber-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6"
          >
            How It <span className="text-amber-500 relative whitespace-nowrap">
              Works
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative bg-white rounded-md p-8 lg:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 group hover:-translate-y-2 transition-all duration-500 z-10 overflow-hidden"
            >
              {/* Massive background number */}
              <div className="absolute -right-4 -bottom-4 text-[10rem] font-black text-slate-50 group-hover:text-slate-100/80 transition-colors duration-500 z-0 select-none leading-none tracking-tighter">
                {step.num}
              </div>

              {/* Content (relative to sit above number) */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm border ${
                    step.color === 'amber' ? 'bg-amber-50 border-amber-100' :
                    step.color === 'emerald' ? 'bg-emerald-50 border-emerald-100' :
                    'bg-blue-50 border-blue-100'
                  }`}>
                    {step.icon}
                  </div>
                  <div className={`text-sm font-bold tracking-widest ${
                    step.color === 'amber' ? 'text-amber-500' :
                    step.color === 'emerald' ? 'text-emerald-500' :
                    'text-blue-500'
                  }`}>
                    STEP {step.num}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Badge at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <div className="flex items-center gap-3 text-sm md:text-base font-bold text-slate-700">
              <span>No pressure.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span>No obligation.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
