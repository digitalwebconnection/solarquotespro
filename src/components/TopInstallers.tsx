import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const installers = [
  { name: 'SolarPro Tech', rating: 5, reviews: 120, exp: '10 years' },
  { name: 'EcoEnergy Solutions', rating: 4.9, reviews: 85, exp: '8 years' },
  { name: 'SunPower Locals', rating: 4.8, reviews: 204, exp: '15 years' },
  { name: 'GreenGrid Solar', rating: 5, reviews: 92, exp: '5 years' }
];

export default function TopInstallers() {
  return (
    <section className="py-24 bg-white" id="installers">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Top Rated Installers in Your Area</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">Connect with the best local professionals</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {installers.map((installer, index) => (
            <motion.div 
              className="bg-white border border-slate-200 rounded-xl p-8 text-center transition-all hover:border-orange-500 hover:shadow-lg"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{installer.name}</h3>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-slate-500">({installer.reviews})</span>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Serving your local area with over {installer.exp} of experience.
              </p>
              
              <button className="w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold py-3 px-6 rounded-full shadow-sm border border-slate-200 hover:shadow-md transition-all">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
