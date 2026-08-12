import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-200 pt-4 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
