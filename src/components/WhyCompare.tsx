import { motion } from 'framer-motion';
import { Settings, ShieldAlert, Cpu, UserCheck, DollarSign } from 'lucide-react';

export default function WhyCompare() {
  const points = [
    { icon: <DollarSign className="w-5 h-5" />, text: "Understand fair market pricing" },
    { icon: <Cpu className="w-5 h-5" />, text: "Compare panel and inverter brands" },
    { icon: <ShieldAlert className="w-5 h-5" />, text: "Evaluate warranties" },
    { icon: <Settings className="w-5 h-5" />, text: "Learn different system designs" },
    { icon: <UserCheck className="w-5 h-5" />, text: "Find the installer who best suits your needs" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Compare Three Quotes?</h2>
          <div className="text-lg text-slate-600 max-w-2xl mx-auto space-y-4">
            <p>Many Australians buy the first quote they receive.</p>
            <p>That often means paying more than necessary—or choosing the wrong system.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Comparing multiple quotes helps you:</h3>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {points.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-500">
                  {point.icon}
                </div>
                <span className="text-slate-800 font-medium">{point.text}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-amber-50 text-amber-600 font-bold px-6 py-3 rounded-full text-lg border border-amber-200 shadow-sm">
              A better comparison leads to a better investment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
