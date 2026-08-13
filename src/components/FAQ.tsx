import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Is the service free?",
      answer: "Yes. There is no cost for homeowners to receive quotes."
    },
    {
      question: "Am I required to choose one of the installers?",
      answer: "No. You're under no obligation to proceed."
    },
    {
      question: "How many quotes will I receive?",
      answer: "You'll receive up to three quotes depending on your location and project."
    },
    {
      question: "Are the installers verified?",
      answer: "Yes. Every installer must meet our quality standards before joining our network."
    },
    {
      question: "How long does it take?",
      answer: "Most homeowners complete the form in under two minutes, and installers generally make contact shortly after your enquiry."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-2 leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">Questions</span>
            </h2>
            <p className="text-lg text-slate-900 mb-6 leading-relaxed">
              Everything you need to know about getting solar quotes through our platform. Can't find the answer you're looking for?
            </p>
            
            <div className=" flex flex-col items-start gap-4">
              <div className="w-14 h-14 bg-white shadow-sm text-amber-500 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-lg mb-2">Still have questions?</h4>
                <p className="text-slate-900 mb-4 leading-relaxed">Our team is ready to help you with any queries about the process.</p>
                <a href="#" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  Contact Support 
                  <span className="text-xl">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Column */}
          <div className="lg:w-2/3 flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className={`border border-transparent ${openIndex === index ? 'bg-slate-50 rounded-3xl border-slate-100' : 'border-b-slate-200 rounded-none'} transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between text-left py-6 ${openIndex === index ? 'px-6 md:px-8' : 'px-2'} group transition-all duration-300`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-sm font-bold font-mono tracking-widest transition-colors duration-300 hidden sm:block ${openIndex === index ? 'text-amber-500' : 'text-slate-600 group-hover:text-amber-400'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 ${openIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 sm:pl-[4.5rem] md:pl-[5.5rem] text-slate-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
