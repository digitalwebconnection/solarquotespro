import { motion } from 'framer-motion';
import { Home, Users, CheckSquare } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Home className="w-8 h-8 text-amber-500" />,
      title: "1. Tell Us About Your Property",
      description: "Complete our quick online form in under 2 minutes."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "2. We Match You With Verified Installers",
      description: "Based on your location and requirements, we select up to three trusted installers from our network."
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-amber-500" />,
      title: "3. Compare & Choose",
      description: "Receive personalised quotes, compare pricing, products, warranties and choose the installer that's right for you."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-200 via-amber-300 to-slate-200" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center hover:border-amber-300 transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="w-20 h-20 mx-auto bg-white border-2 border-slate-100 group-hover:border-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 font-bold text-xl text-slate-700 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <span>No pressure.</span>
          <span className="hidden sm:inline text-amber-500">•</span>
          <span>No obligation.</span>
        </motion.div>
      </div>
    </section>
  );
}
