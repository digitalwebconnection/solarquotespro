
import { ThermometerSun, Gauge, Wind, Snowflake, RotateCw } from "lucide-react";


const AcProcess = () =>  {
    const coolingSteps = [
      {
        number: "01",
        icon: ThermometerSun,
        title: "Absorb",
        description:
          "The indoor evaporator absorbs heat from the air inside your home.",
      },
      {
        number: "02",
        icon: Gauge,
        title: "Compress",
        description:
          "The compressor increases the refrigerant's pressure and temperature.",
      },
      {
        number: "03",
        icon: Wind,
        title: "Release",
        description:
          "The outdoor condenser releases the absorbed heat into the outside air.",
      },
      {
        number: "04",
        icon: Snowflake,
        title: "Expand",
        description:
          "The expansion device reduces the refrigerant's pressure and temperature.",
      },
      {
        number: "05",
        icon: RotateCw,
        title: "Repeat",
        description:
          "The refrigerant returns to the indoor coil and the process starts again.",
      },
    ];
  return (
    <section className="w-full py-14 sm:py-18 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-300/10 text-blue-900 border border-blue-800/20 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Snowflake className="w-4 h-4" /> Air Conditioning Basics
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-serif  leading-tight bg-linear-to-r from-blue-900 from-60% to-amber-400 bg-clip-text text-transparent">The Cooling Cycle </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed"> Understanding the cooling cycle makes it easier to see how an air conditioner turns a warm room into a more comfortable space. </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {coolingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div  key={step.number} className={`relative bg-slate-50 rounded-lg group p-6 hover:-translate-y-1.5 transition-all duration-300 ${ index % 2 !== 0 ? "translate-y-4" : "" }`}
                >
                  <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-800/90 text-blue-800 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 " />     
                  </div>
                  <p className="text-center mt-5 text-xs font-bold uppercase tracking-widest text-slate-700 ">
                    Step {step.number}
                  </p>
                  <h3 className="text-center mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-center text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcProcess