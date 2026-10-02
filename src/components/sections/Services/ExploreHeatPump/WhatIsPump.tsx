import { motion, type Variants } from "framer-motion";
import { Zap, Flame, X, Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  }),
};

const WhatIsPump = () => {
  const comparisonData = [
    {
      title: "Conventional Electric",
      icon: Zap,
      iconBg: "bg-orange-500",
      border: "border-slate-200",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytmLlv17fDG5CTCmc47TfIJsmKYSz3shAoXt-PsETuQ&s=10",
      alt: "Conventional electric hot water system",
      description: "A conventional electric storage system uses a resistive heating element to heat the water directly, similar to a large electric kettle.",
      points: [
        {
          type: "check",
          title: "Lower upfront cost",
          text: "Generally simpler and cheaper to purchase and install.",
        },
        {
          type: "check",
          title: "Simple technology",
          text: "Straightforward electric element and storage tank design.",
        },
        {
          type: "x",
          title: "Higher energy consumption",
          text: "Electricity is used directly to generate heat.",
        },
        {
          type: "x",
          title: "Higher running costs",
          text: "Can cost more to operate, especially on grid electricity.",
        },
      ],
    },
    {
      title: "Heat Pump",
      icon: Flame,
      iconBg: "bg-emerald-500",
      border: "border-2 border-slate-200",
      image: "https://weekendplumbingco.com/assets/images/heat-pump-hot-water-systems-brisbane.webp",
      alt: "Heat pump hot water system",
      badge: "More Efficient",
      description: "A heat pump extracts heat from the surrounding air and transfers that heat into the water instead of generating all the heat directly with an electric element.",
      points: [
        {
          type: "check",
          title: "Much lower electricity use",
          text: "Government guidance says heat pumps can use around 30% of the energy of conventional electric systems.",
        },
        {
          type: "check",
          title: "Lower running costs",
          text: "Using less electricity can significantly reduce ongoing hot water costs.",
        },
        {
          type: "check",
          title: "Works well with solar",
          text: "Many systems can be scheduled to use available solar electricity during the day.",
        },
        {
          type: "x",
          title: "Higher upfront cost",
          text: "Purchase and installation can cost more than conventional electric storage.",
        },
      ],
    },
  ];
  return (
    <section className="py-14 bg-slate-50">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14 mt-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 mt-5"> Conventional  <span className="text-orange-400">  Electric vs Heat Pump </span> </h2>
          <p className="text-lg text-slate-600 mt-3 "> Both systems use electricity, but they use it in very different ways to heat your hot water. </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {comparisonData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className={`bg-white rounded-xl group overflow-hidden ${item.border} shadow-lg shadow-black/30`}
              >
                <div className="relative h-60 overflow-hidden ">
                  <img src={item.image} alt={item.alt} className="w-full h-ful group-hover:scale-107 transition-all duration-600 object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 to-transparent" />
                  {item.badge && (
                    <div className="absolute top-5 right-5 bg-emerald-500 text-white px-3 py-2 rounded-full text-sm font-bold">{item.badge}</div>
                  )}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className={`${item.iconBg} p-3 rounded-xl`}><Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6"> {item.description} </p>
                  <div className="space-y-4">
                    {item.points.map((point, pointIndex) => {
                      const PointIcon = point.type === "check" ? Check : X;
                      const iconColor = point.type === "check" ? "text-emerald-500" : "text-red-500";
                      return (
                        <div key={pointIndex} className="flex items-center gap-4" >
                          <PointIcon className={`${iconColor} `} size={25} />
                          <div>
                            <h4 className="font-bold text-slate-900">{point.title}</h4>
                            <p className="text-slate-500 text-sm mt-1">{point.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPump;