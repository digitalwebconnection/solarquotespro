import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/solarqoat copy.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready To Compare Solar Quotes?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Get connected with trusted Australian solar installers today. 
            Receive up to 3 free, no-obligation solar quotes and choose with confidence.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:-translate-y-1 mx-auto">
            Get My Free Quotes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-4 text-slate-500 font-medium text-sm">
            It only takes 2 minutes
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="True Solar Quote Logo" className="h-8 w-auto opacity-80 grayscale" />
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} True Solar Quote. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
