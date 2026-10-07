import { motion, type Variants } from "framer-motion";
import { Check, Flame, X, Zap } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const comparisonData = [
  {
    title: "Conventional Electric",
    icon: Zap,
    iconBg: "bg-orange-500",
    border: "border-slate-200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytmLlv17fDG5CTCmc47TfIJsmKYSz3shAoXt-PsETuQ&s=10",
    alt: "Conventional electric hot water system",
    description:
      "A conventional electric storage system uses a resistive heating element to heat the water directly, similar to a large electric kettle.",
    points: [
      { type: "check", title: "Lower upfront cost", text: "Generally simpler and cheaper to purchase and install." },
      { type: "check", title: "Simple technology", text: "Straightforward electric element and storage tank design." },
      { type: "x", title: "Higher energy consumption", text: "Electricity is used directly to generate heat." },
      { type: "x", title: "Higher running costs", text: "Can cost more to operate, especially on grid electricity." },
    ],
  },
  {
    title: "Heat Pump",
    icon: Flame,
    iconBg: "bg-emerald-500",
    border: "border-2 border-slate-200",
    image:
      "https://weekendplumbingco.com/assets/images/heat-pump-hot-water-systems-brisbane.webp",
    alt: "Heat pump hot water system",
    badge: "More Efficient",
    description:
      "A heat pump extracts heat from the surrounding air and transfers that heat into the water instead of generating all the heat directly with an electric element.",
    points: [
      { type: "check", title: "Much lower electricity use", text: "Government guidance says heat pumps can use around 30% of the energy of conventional electric systems." },
      { type: "check", title: "Lower running costs", text: "Using less electricity can significantly reduce ongoing hot water costs." },
      { type: "check", title: "Works well with solar", text: "Many systems can be scheduled to use available solar electricity during the day." },
      { type: "x", title: "Higher upfront cost", text: "Purchase and installation can cost more than conventional electric storage." },
    ],
  },
];

export default function HeatPumpType() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto mb-14 mt-10 max-w-3xl text-center"
        >
          <h2 className="mt-5 font-serif text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Conventional <span className="text-orange-400">Electric vs Heat Pump</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Both systems use electricity, but they use it in very different ways to heat your
            hot water.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {comparisonData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className={`group overflow-hidden rounded-xl bg-white shadow-lg shadow-black/30 ${item.border}`}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 to-transparent" />
                  {item.badge && (
                    <div className="absolute right-5 top-5 rounded-full bg-emerald-500 px-3 py-2 text-sm font-bold text-white">
                      {item.badge}
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className={`${item.iconBg} rounded-xl p-3`}>
                      <Icon className="text-white" size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="mb-6 leading-relaxed text-slate-600">{item.description}</p>
                  <div className="space-y-4">
                    {item.points.map((point) => {
                      const PointIcon = point.type === "check" ? Check : X;
                      const iconColor =
                        point.type === "check" ? "text-emerald-500" : "text-red-500";
                      return (
                        <div key={point.title} className="flex items-center gap-4">
                          <PointIcon className={iconColor} size={25} aria-hidden="true" />
                          <div>
                            <h4 className="font-bold text-slate-900">{point.title}</h4>
                            <p className="mt-1 text-sm text-slate-500">{point.text}</p>
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
}
