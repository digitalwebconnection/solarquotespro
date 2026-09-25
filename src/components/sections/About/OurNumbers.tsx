import { motion } from "framer-motion";

export default function OurNumbers() {
  return (
    <section className="py-16 bg-slate-50">
      <motion.section
        initial={{ opacity: 0.50, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-blue-950  font-serif">Our Numbers</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">A snapshot of how True Solar Quote helps Australian homeowners research, compare and connect with energy professionals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            <div className="py-6 px-5 text-center border-r  border-slate-200">
              <h3 className="text-4xl tracking-wide font-extrabold text-blue-900">25,000+</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Australian homeowners helped compare energy options</p>
            </div>

            <div className="py-6 px-5 text-center border-r  border-slate-200">
              <h3 className="text-4xl tracking-wide font-extrabold text-blue-900">40,000+</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Solar and home-energy quotes requested through our platform</p>
            </div>

            <div className="py-6 px-5 text-center border-r  border-slate-200">
              <h3 className="text-4xl tracking-wide font-extrabold text-blue-900">500+</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Trusted solar and home-energy professionals across Australia</p>
            </div>

            <div className="py-6 px-5 text-center ">
              <h3 className="text-4xl tracking-wide font-extrabold text-blue-900">1200+</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">Guides, reviews and resources for homeowners</p>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}   