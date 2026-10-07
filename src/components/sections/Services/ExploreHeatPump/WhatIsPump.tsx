import { motion, type Variants } from "framer-motion";
import { Flame } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  }),
};

const WhatIsPump = () => {
  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 font-serif text-slate-900 capitalize"> What is a hot water heat pump? </h2>
          <p className="text-lg text-slate-700 font-semibold leading-7 mt-5"> Solar panels produce electricity when the sun is shining, but your home's energy consumption doesn't stop when the sun goes down. </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-2 gap-3 my-5"
        >
          <div className="p-4">
            <span className="inline-flex items-center gap-1 uppercase text-sm font-semibold tracking-wide px-2.5 py-1 border rounded-2xl bg-amber-400/10 shadow-xl/40 shadow-amber-400/50 border-amber-400 text-amber-500">
              <Flame size={17} strokeWidth={3} className="animate-pulse" /> Hot Water Heat Pump </span>

            <p className="leading-relaxed text-base text-slate-600 mt-3 mb-1 text-justify "> The heat pump extracts heat from the surrounding air, increases  its temperature using a refrigeration cycle, and transfers that heat into the water stored in the tank.  </p>

            <p className="leading-relaxed text-base text-slate-600 mb-1 text-justify "> Unlike a conventional electric water heater, which uses an electrical element to directly heat the water, a heat pump uses  a refrigeration cycle to capture heat from the air and transfer it into the tank. Because it transfers heat rather than creating all of the heat directly from electricity, a heat pump can produce significantly more heat energy than the electrical energy it consumes.  </p>

            <h3 className="text-3xl font-extrabold font-serif my-3 text-slate-800"> How Is It Different From Conventional Electric Heating? </h3>

            <p className="leading-relaxed text-base text-slate-600 mb-2 text-justify ">  A conventional electric water heater uses electricity to heat a  resistance element, which then heats the water. </p>

            <p className="leading-relaxed text-base text-slate-600 mb-1 text-justify "> A heat pump uses electricity primarily to operate components such as the compressor and fan. These components allow the system to extract heat from the surrounding air and transfer it into the water. </p>
          </div>

          <div className="relative">
            <div className="bg-linear-to-t from-slate-50 from-10% via-transparent to-transparent absolute inset-0 z-10" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7gEk-P82JQzlT3thuouJL3uK5-p_PLFtQYTw6jz0nQ&s=10" className="rounded-2xl w-full h-full object-cover" alt="Hot water heat pump" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsPump;