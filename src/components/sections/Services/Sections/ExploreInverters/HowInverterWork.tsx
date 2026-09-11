import {Sun, ArrowRight, BatteryCharging,  Zap } from "lucide-react";

const HowInverterWork = () => {
  const steps = [
    {
      number: "01",
      boxStyle : " hover:border-orange-400",
      title: "Solar Panels Generate DC Power",
      description:
        "Solar panels capture sunlight and generate direct current (DC) electricity.",
      icon: Sun,
      iconStyle : "text-orange-400"
    },
    {
        number: "02",
        boxStyle : "hover:border-blue-700",
        title: "DC Power Becomes AC Power",
        description:
        "The inverter converts DC electricity into alternating current (AC), which is used by most appliances in your home.",
        icon: ArrowRight,
        iconStyle : "text-blue-700"
    },
    {
        number: "03",
        boxStyle : "hover:border-amber-400",
        title: "The Inverter Receives the Power",
        description:
        "The DC electricity produced by the panels flows to the solar inverter for conversion.",
        icon: Zap,
        iconStyle : "text-amber-400"
    },
    {
        number: "04",
        boxStyle : "hover:border-emerald-400",
        title: "Power Is Used or Stored",
        description:
        "The electricity can power your home. Excess energy may be stored in a battery or exported to the grid.",
        icon: BatteryCharging,
        iconStyle : "text-emerald-500"
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-500">How It Works
          </p>
          <h2 className="font-serif text-3xl font-bold  md:text-3xl lg:text-4xl mt-5 text-blue-950">
            How Does a Solar Inverter Work?
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg"> A solar inverter converts the electricity produced by your solar panels into a form your home can use. It also helps manage energy between your solar panels, home, battery and the electricity grid.
          </p>
        </div>


        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={`group relative rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 400 hover:shadow-lg shadow-black/40 ${step.boxStyle} `}
              >
                <div className="absolute right-5 top-5 text-3xl font-bold group-hover:text-slate-300/50 text-slate-100 font-serif transition-colors duration-300">
                  {step.number} </div>
                <div className="mb-6 ">
                  <Icon className={` ${step.iconStyle} group-hover:scale-120  group-hover:translate-x-1.5 transition-transform h-7 w-7 `} />
                </div>
                <h3 className="text-xl tracking-wide font-bold leading-7 text-slate-900 ">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-lg leading-8 text-slate-700"> The inverter acts as the central link between your solar panels and your home's electrical system, helping turn solar generation into usable household energy.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowInverterWork