import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ThumbsUp, Lock } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Vetted and trusted local installers'
  },
  {
    icon: <ThumbsUp size={28} />,
    title: '100% free, no-obligation quotes'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Independent, unbiased reviews and guides'
  },
  {
    icon: <Lock size={28} />,
    title: 'Secure and private data handling'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radial from-orange-500/10 via-transparent to-transparent opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-radial from-blue-500/10 via-transparent to-transparent opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full font-bold text-sm mb-8 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <ShieldCheck size={20} />
              <span>Your Trust, Our Priority</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white tracking-tight leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">SolarQuotes Pro?</span>
            </h2>
            
            <p className="text-xl text-slate-300 opacity-90 mb-12 leading-relaxed font-light">
              We are committed to helping you find the best solar solution with absolute transparency and unbiased advice. No jargon, just savings.
            </p>
            
            <ul className="flex flex-col gap-8">
              {reasons.map((reason, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-6 text-xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                >
                  <span className="text-orange-400 bg-orange-400/10 w-14 h-14 flex items-center justify-center rounded-xl shrink-0 border border-orange-400/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                    {reason.icon}
                  </span>
                  <span className="text-slate-200">{reason.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/why_choose_solar.png" 
              alt="Sleek modern solar panels" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Glassmorphic floating card over the image */}
            <div className="absolute bottom-8 left-8 right-8 bg-slate-900/70 backdrop-blur-xl border border-white/20 p-8 rounded-xl shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white mb-2">Maximize Your Savings</h3>
              <p className="text-slate-300 mb-6 font-light">Join the renewable energy revolution today.</p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-lg border border-orange-400/50">
                Try the Calculator
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
