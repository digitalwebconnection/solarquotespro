import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Activity, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    icon: <Sun size={28} />,
    title: 'Solar Panels',
    desc: 'Discover the best panels for maximum efficiency.',
    features: ['Monocrystalline technology', 'Top tier brands compared', 'Efficiency ratings'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    colorFrom: 'from-orange-500',
    colorTo: 'to-yellow-500',
    bgLight: 'bg-orange-50',
    textDark: 'text-orange-600',
  },
  {
    icon: <Battery size={28} />,
    title: 'Home Batteries',
    desc: 'Store your solar energy for when the sun goes down.',
    features: ['Lithium-ion vs LifePO4', 'Backup power capability', 'Lifespan & warranties'],
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-500',
    bgLight: 'bg-emerald-50',
    textDark: 'text-emerald-600',
  },
  {
    icon: <Activity size={28} />,
    title: 'Smart Inverters',
    desc: 'The brains of your solar power system.',
    features: ['String vs Microinverters', 'Monitoring software', 'Phase configurations'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-500',
    bgLight: 'bg-blue-50',
    textDark: 'text-blue-600',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Top Installers',
    desc: 'Find vetted professionals in your local area.',
    features: ['CEC Accredited experts', 'Verified reviews', 'Workmanship guarantees'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    colorFrom: 'from-slate-700',
    colorTo: 'to-slate-900',
    bgLight: 'bg-slate-100',
    textDark: 'text-slate-800',
  }
];

export default function CategoryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="categories">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-slate-200/50 to-transparent rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Comprehensive Guides</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">know about solar.</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-500 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Dive deep into our expert-written guides, unbiased reviews, and essential knowledge base before making the switch.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              className="relative group cursor-pointer h-full flex"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-slate-200 rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500 ease-out -z-10 shadow-xl opacity-0 group-hover:opacity-100"></div>
              
              <div className="w-full bg-white rounded-xl shadow-md group-hover:shadow-xl border border-slate-100 transition-all duration-500 overflow-hidden flex flex-col">
                
                {/* Image Header Section */}
                <div className="relative w-full">
                  <div className="h-56 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/40 transition-colors duration-500 z-10"></div>
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col relative z-10 bg-white">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-slate-800 transition-colors">{cat.title}</h3>
                  <p className="text-slate-500 mb-6 font-light text-sm">{cat.desc}</p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {cat.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className={`${cat.textDark} mt-0.5 shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Footer */}
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-slate-200/50 transition-colors">
                    <span className={`font-bold transition-colors ${cat.textDark}`}>
                      Explore Guide
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? `bg-gradient-to-r ${cat.colorFrom} ${cat.colorTo} text-white shadow-md translate-x-0` : 'bg-slate-50 text-slate-400 -translate-x-2'}`}>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
