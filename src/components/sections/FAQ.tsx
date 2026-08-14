import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  DollarSign, 
  Scale 
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function FAQ() {
  const { openQuoteModal } = useQuoteModal();

  const faqs = [
    {
      icon: <DollarSign className="w-4 h-4 text-emerald-500" />,
      tag: "100% Free",
      question: "Is the service completely free to use?",
      answer: "Yes, 100% free with zero hidden charges. Installers pay a small administration fee to connect with serious homeowners, meaning you never pay a single cent to receive and compare quotes."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-500" />,
      tag: "Zero Pressure",
      question: "Am I required to choose one of the installers?",
      answer: "Not at all. You are under zero obligation to proceed with any proposal. You are free to review the itemized estimates, compare products and pricing, and decide if going solar makes sense for your household."
    },
    {
      icon: <Scale className="w-4 h-4 text-blue-500" />,
      tag: "Top 3 Match",
      question: "How many quotes will I receive?",
      answer: "You will receive up to 3 competitive quotes from vetted, local installers operating in your postcode. 3 quotes give you the perfect benchmark to compare prices and warranties without getting overwhelmed."
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
      tag: "CEC Vetted",
      question: "Are all participating installers accredited?",
      answer: "Yes. Every partner in our network is strictly verified for Clean Energy Council (CEC) accreditation, Australian electrical contractor licensing, public liability insurance, and proven customer satisfaction records."
    },
    {
      icon: <Clock className="w-4 h-4 text-purple-500" />,
      tag: "< 2 Minutes",
      question: "How long does the whole process take?",
      answer: "Submitting your property details takes less than 60 seconds. Our matching engine pairs your project immediately, and verified local installers typically reach out with tailored proposals within 24 business hours."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-8 lg:py-14 bg-linear-to-b from-white via-slate-50/50 to-white relative overflow-hidden scroll-mt-20">
      
      {/* ─── Ambient Background Graphics ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ─── Left Column: Header & Interactive Support Graphic Card ─── */}
          <div className="lg:col-span-5">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
              Everything You Need To Know
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4 leading-tight tracking-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 relative whitespace-nowrap">
                Questions
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-orange-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-base text-slate-700 mb-8 leading-relaxed font-medium">
              Transparent answers to help you understand how our free comparison platform connects you with top-rated Australian installers.
            </p>
            
            {/* Interactive Support Advisor HUD Card */}
            <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-100/60 rounded-full blur-2xl group-hover:bg-orange-200/50 transition-colors pointer-events-none" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-linear-to-tr from-amber-400 via-orange-400 to-orange-500 text-slate-950 rounded-2xl flex items-center justify-center shrink-0 shadow-md font-black text-xl">
                    ☀️
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900 text-base">Still have questions?</h4>
                    <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Live</span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    Our AI Solar Advisor & verified installer network are ready to guide your project.
                  </p>
                  <button 
                    onClick={() => openQuoteModal()} 
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer active:scale-98"
                  >
                    <span>Request 3 Free Quotes</span>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* ─── Right Column: FAQ Graphic Accordion Cards ─── */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-orange-400 shadow-xl shadow-orange-500/10 ring-1 ring-orange-400/30' 
                      : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0 pr-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isOpen 
                          ? 'bg-linear-to-br from-amber-400 to-orange-500 text-slate-950 border-orange-400 shadow-xs' 
                          : 'bg-slate-50 text-slate-500 border-slate-200 group-hover:bg-orange-50 group-hover:text-orange-600'
                      }`}>
                        {faq.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                            Q0{index + 1}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            isOpen ? 'bg-orange-50 border-orange-200 text-orange-800' : 'bg-slate-100 border-slate-200 text-slate-600'
                          }`}>
                            {faq.tag}
                          </span>
                        </div>
                        <h3 className={`font-bold text-base sm:text-lg transition-colors leading-snug ${
                          isOpen ? 'text-slate-950' : 'text-slate-800 group-hover:text-orange-600'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isOpen ? 'bg-linear-to-br from-amber-400 to-orange-500 text-slate-950 rotate-180 shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed pl-17 sm:pl-19 border-t border-slate-100/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
