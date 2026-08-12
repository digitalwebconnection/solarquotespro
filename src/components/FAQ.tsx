import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'How much does solar cost?',
    a: 'The cost varies depending on system size, location, and equipment. However, with incentives and financing, many homeowners see immediate savings on their utility bills.'
  },
  {
    q: 'Are your quotes really free?',
    a: 'Yes! We connect you with up to 3 local installers to provide free, no-obligation quotes.'
  },
  {
    q: 'How long do solar panels last?',
    a: 'Most modern solar panels are guaranteed to last 25 years or more, with very little degradation in performance.'
  },
  {
    q: 'Do I need a battery with my solar system?',
    a: 'It depends on your energy goals. A battery is great for backup power and maximizing self-consumption, but a grid-tied system without a battery is still highly cost-effective.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 skew-y-3 -z-10 transform origin-top-left"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-500 mb-12 font-light">Got questions? We've got answers.</p>
            
            <motion.div 
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-xl shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Sparkles size={64} className="text-orange-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Government Rebates & Incentives</h3>
              <p className="text-slate-300 mb-8 leading-relaxed font-light relative z-10">Going solar is more affordable than ever. Take advantage of federal and state incentives that can significantly reduce your upfront installation costs.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all flex-1">
                  Check Rebates
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl border border-white/20 transition-all flex-1 backdrop-blur-sm">
                  Read Guide
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-4 justify-center">
            {faqs.map((faq, index) => (
              <motion.div 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-orange-500 shadow-lg shadow-orange-500/10' : 'border-slate-200 hover:border-orange-300 hover:shadow-md'}`}
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button 
                  className="w-full text-left p-6 md:p-8 bg-transparent text-lg md:text-xl font-bold text-slate-900 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="pr-8">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed font-light text-lg">
                        {faq.a}
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
