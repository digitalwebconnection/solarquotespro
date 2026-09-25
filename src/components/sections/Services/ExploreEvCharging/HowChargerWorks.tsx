import { BatteryCharging, Car, Zap, House, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
const HowChargerWorks = () => {
  const energyFlowSteps = [
    {
      icon: Zap,
      label: "Grid / Solar",
      iconColor: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      icon: BatteryCharging,
      label: "EV Charger",
      iconColor: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    {
      icon: Car,
      label: "Vehicle Charging System",
      iconColor: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: BatteryCharging,
      label: "EV Battery",
      iconColor: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: Car,
      label: "Electric Vehicle",
      iconColor: "text-slate-600",
      bg: "bg-slate-100",
      border: "border-slate-300",
    },
  ];

  const chargingFactors = [
    {
      number: "01",
      icon: Zap,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-400/10",
      title: "Charger Power",
      question: "How much electricity can the charger deliver?",
      description: "A higher-power charger can potentially deliver electricity to the vehicle faster.",
      keyPoint: "More charger power can mean faster charging when the vehicle and electrical supply can support it.",
      shadow: "shadow-lg",
    },
    {
      number: "02",
      icon: Car,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-400/10",
      title: "Vehicle Charging Capability",
      question: "How much power can your EV accept?",
      description:
        "Every EV has its own maximum charging capability. A high-powered charger cannot force the vehicle to accept more electricity than its charging system is designed to handle.",
      keyPoint: "More powerful charger ≠ automatically faster charging.",
      shadow: "shadow-md",
    },
    {
      number: "03",
      icon: House,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-400/10",
      title: "Electrical Supply",
      question: "How much power can your home provide?",
      description:
        "Your home's electrical connection and available capacity affect how much power can be supplied to an EV charger.",
      keyPoint: "Other appliances operating at the same time may also affect available capacity.",
      shadow: "shadow-md",
    },
  ];
  return (
    <section className="py-14 bg-slate-50">
      <div className=" ">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold  text-blue-950">How Does EV Charging Work?</h2>
          <p className="text-lg text-slate-600 font-md mt-3"> Understanding how electricity moves from your energy source to your electric vehicle. </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} >
            <span className="text-sm font-bold tracking-widest uppercase text-orange-500">Understanding EV Charging</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 mt-2">How electricity reaches your EV</h3>
            <p className="text-lg text-slate-600 leading-7 mt-4">An EV charger connects your electric vehicle to an electricity supply and manages the delivery of electricity to the vehicle's battery.</p>
            <p className="text-lg text-slate-600 leading-7 mt-4"> Electricity can come from the{" "}
              <span className="font-semibold text-slate-800"> grid, solar panels, or a combination of both </span> , depending on how your charging system is configured.</p>
          </motion.div>

          <div className="py-10">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
              Energy Flow
            </p>
            <div
              className="w-108 flex flex-col items-center gap-1 sm:px-12 mx-auto"
            >
              {energyFlowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15
                    }} key={step.label} className="w-full flex flex-col items-center gap-1">
                    <div className={`flex items-center gap-3 ${step.bg} border ${step.border} rounded-xl px-5 py-3 w-full`}
                    >
                      <Icon className={step.iconColor} size={28} />
                      <span className="font-bold text-slate-800">{step.label}</span>
                    </div>
                    {index < energyFlowSteps.length - 1 && (
                      <div >
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full mb-14">
          <div className="bg-slate-900  py-7 px-15 text-white">
            <div className="flex gap-5 items-start">
              <div className="bg-blue-400/10 p-3 rounded-xl shrink-0"> <Zap className="text-blue-400" size={30} />
              </div>
              <div>
                <h3 className="text-xl tracking-wide font-bold">The vehicle is part of the charging process</h3>
                <p className="text-slate-300 leading-relaxed mt-2">For AC charging, the vehicle's onboard charger converts the incoming AC electricity into the DC electricity required to charge the battery.
                </p>
                <p className="text-slate-300 leading-7 mt-3">The charging equipment supplies electricity within the limits supported by the vehicle and the electrical installation. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-950 font-serif">
            Three Things Determine Charging Speed
          </h3>
          <p className="text-slate-600 text-lg mt-2">
            Charging speed depends on the charger, the vehicle and the electrical supply working together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {chargingFactors.map((factor , index) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={factor.number}
                initial={{ opacity : 0 , y: 20 }}
                whileInView={{ opacity:1 , y: 0}}
                viewport={{ once: true}}
                transition={{ duration: 0.5 , 
                  delay : index * 0.16
                }}
                className={`bg-white rounded-lg border border-slate-200 ${factor.shadow} hover:-translate-y-1.5 duration-200 transition-transform group p-7 relative`}
              >
                <div className="flex items-center justify-between">
                  <div className={`${factor.iconBg} ${factor.iconColor} group-hover:bg-transparent transition-colors duration-200 p-4 rounded-2xl mb-5`}>
                    <Icon size={42} />
                  </div>
                  <span className={`text-sm font-bold tracking-widest ${factor.iconColor} absolute top-12 right-5`}>
                    {factor.number}
                  </span>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-serif">{factor.title}</h4>
                <p className="text-lg font-bold text-slate-700 mt-4">{factor.question}</p>
                <p className="text-slate-600 leading-7 mt-3">{factor.description}</p>
                <div className="mt-5 pt-5 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Key Point</p>
                  <p className="text-slate-700 font-medium mt-1">{factor.keyPoint}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowChargerWorks;