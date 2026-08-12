import { motion } from 'framer-motion';

export default function ValueProposition() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why Thousands of Australians Choose <span className="text-amber-500">True Solar Quote</span>
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Buying solar is one of the biggest investments you'll make for your home. 
              Unfortunately, not every installer delivers the same quality, pricing or service.
            </p>
            <p>
              That's where True Solar Quote helps. We match homeowners with trusted solar 
              professionals who have been verified for licensing, experience and customer satisfaction—so 
              you receive competitive quotes from installers you can trust.
            </p>
            <div className="pt-6 font-semibold text-slate-900 text-xl flex flex-col gap-2">
              <span className="text-slate-500">No endless phone calls.</span>
              <span className="text-slate-500">No searching through hundreds of companies.</span>
              <span className="text-amber-500">Just genuine quotes from quality installers.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
