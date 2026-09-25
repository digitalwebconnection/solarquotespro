import { motion } from "framer-motion";

const content = {
  title: "Our Numbers",
  description:
    "A snapshot of how True Solar Quote helps Australian homeowners research, compare and connect with energy professionals.",
  stats: [
    {
      value: "25,000+",
      description: "Australian homeowners helped compare energy options",
    },
    {
      value: "40,000+",
      description: "Solar and home-energy quotes requested through our platform",
    },
    {
      value: "500+",
      description: "Trusted solar and home-energy professionals across Australia",
    },
    {
      value: "1200+",
      description: "Guides, reviews and resources for homeowners",
    },
  ],
};

export default function OurNumbers() {
  return (
    <section className="py-24 bg-slate-50">
      <motion.section
        initial={{ opacity: 0.50, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-slate-950 font-serif">{content.title}</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">{content.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {content.stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`py-6 px-6 text-center ${index !== 3 ? "border-r border-slate-200" : ""}`}
              >
                <h3 className="text-4xl tracking-wide font-extrabold text-blue-900">{stat.value}</h3>
                <p className="mt-2 text-[16px] text-slate-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}   