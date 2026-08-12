import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-32 relative overflow-hidden bg-slate-900 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_solar_home.png" 
          alt="Modern solar home" 
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="absolute -top-1/4 -right-10 w-[600px] h-[600px] bg-radial from-orange-500/20 to-transparent rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg mb-8 text-sm text-white border border-white/20">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
              ))}
            </div>
            <span><strong className="font-bold">4.9/5</strong> from happy homeowners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white drop-shadow-xl">
            The Future of Energy <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] pb-2">Switch to Solar.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md">
            Join thousands of homeowners taking control of their energy. Get up to 3 free, no-obligation quotes from trusted local installers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg border border-orange-400/50">
              Get 3 Free Quotes <ChevronRight size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-full shadow-lg border border-white/30 hover:border-white/50 hover:-translate-y-1 transition-all text-lg">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Calculate Savings</h3>
            <p className="text-slate-300 mb-8 relative z-10 font-light">See how much you could save with solar in seconds.</p>
            
            <div className="mb-6 text-left relative z-10">
              <label className="block font-medium text-slate-200 text-sm mb-2">Your Postcode</label>
              <input type="text" placeholder="e.g. 2000" className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all text-white placeholder-slate-400 backdrop-blur-sm" />
            </div>
            
            <div className="mb-6 text-left relative z-10">
              <label className="block font-medium text-slate-200 text-sm mb-2">Average Power Bill</label>
              <select className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all text-white backdrop-blur-sm appearance-none">
                <option value="" className="bg-slate-800">Select your range</option>
                <option value="low" className="bg-slate-800">$100 - $300 / quarter</option>
                <option value="med" className="bg-slate-800">$300 - $600 / quarter</option>
                <option value="high" className="bg-slate-800">$600+ / quarter</option>
              </select>
            </div>
            
            <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all text-lg mt-4 relative z-10 border border-orange-400/50">
              Get Estimate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
