import { Zap, ShieldCheck, BatteryCharging, Trophy  } from "lucide-react";
import { motion } from "framer-motion";
export default function OurJourney() {
  const steps = [
  {
    year: "2018",
    title: "Started with Transparency",
    desc: "Launched with a simple goal: make solar information and pricing easier for Australian homeowners to understand.",
    icon: Zap,
  },
  {
    year: "2020",
    title: "Building a Trusted Network",
    desc: "Expanded our platform to connect homeowners with a growing network of trusted solar and energy professionals across Australia.",
    icon: ShieldCheck,
  },
  {
    year: "2023",
    title: "Beyond Solar",
    desc: "Expanded our research and comparison resources to include batteries, EV chargers, hot-water heat pumps and other home-energy solutions.",
    icon: BatteryCharging,
  },
  {
    year: "2026",
    title: "A Smarter Way to Compare",
    desc: "Today, True Solar Quote helps Australian homeowners research their options, compare providers and request competitive quotes — all in one place.",
    icon: Trophy,
  },
];

  return (
    <section className="relative z-20 bg-slate-900 py-16 text-white overflow-hidden">
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
         
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-serif bg-linear-to-r from-amber-300 from-35% to-emerald-400 bg-clip-text text-transparent"> Our Journey So Far </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base"> From a small local team to one of Australia's most trusted solar networks. </p>
        </div>

        <div className="relative">
          <div  className="absolute top-12 left-16 right-16 border-t-2 border-dashed border-amber-400/40 z-0" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">

            {steps.map((step , index ) => {
              const Icon = step.icon;
              return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.14
                }}
                  className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/80 p-6 rounded-xl hover:border-amber-400/60 hover:-translate-y-1 transition-all duration-300 shadow-xl relative group">
                  <div className="absolute -top-1 -right-0.5 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-65 group-hover:opacity-85 transition-opacity " />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400">{step.year}</span>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-amber-400/30 text-amber-400"><Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
      </motion.section>
    </section>
  );
}