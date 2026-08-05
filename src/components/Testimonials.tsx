import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Doe',
    initials: 'JD',
    rating: 5,
    title: 'Fantastic Installation',
    text: 'The installers were incredibly professional. They arrived on time, answered all my questions, and the system looks incredibly clean on the roof. Highly recommend.',
    verified: true
  },
  {
    name: 'Jane Smith',
    initials: 'JS',
    rating: 5,
    title: 'Saved so much money',
    text: 'SolarQuotes Pro made it so easy to find a reliable installer. Within a month of installation, our energy bills dropped significantly.',
    verified: true
  },
  {
    name: 'Mike Johnson',
    initials: 'MJ',
    rating: 5,
    title: 'Great unbiased advice',
    text: 'I loved how transparent the whole process was. The three quotes helped me understand the market and I picked the best option without pressure.',
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 relative" id="reviews">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Latest Trusted Reviews</h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-16">Real feedback from real homeowners</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              className="bg-white p-10 rounded-xl text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
            >
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex gap-1.5 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">"{review.title}"</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 flex-grow font-light">{review.text}</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 font-bold flex items-center justify-center rounded-full shrink-0 text-xl border border-orange-200 shadow-inner">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-lg">{review.name}</span>
                  {review.verified && <span className="text-sm font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full w-fit mt-1 border border-emerald-100">Verified Customer</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
