
import { AirVent, Thermometer, Gauge, Flame, Snowflake, RotateCw } from "lucide-react";


const HowAcWorks = () => {
    const steps = [
      {
        number: "01",
        icon: AirVent,
        title: "Indoor Air Passes Over the Evaporator",
        description:
          "Warm indoor air is drawn into the indoor unit. The air passes over a cold evaporator coil containing refrigerant.",
      },
      {
        number: "02",
        icon: Thermometer,
        title: "Refrigerant Absorbs Heat",
        description:
          "The refrigerant absorbs heat from the indoor air. As the refrigerant gains heat, it changes state and becomes a warmer gas.",
      },
      {
        number: "03",
        icon: Gauge,
        title: "Compressor Raises the Temperature",
        description:
          "The compressor compresses the refrigerant gas. This increases its pressure and temperature.",
      },
      {
        number: "04",
        icon: Flame,
        title: "Heat Is Released Outdoors",
        description:
          "The hot refrigerant travels to the outdoor unit. The condenser coil releases the absorbed heat into the outdoor air.",
      },
      {
        number: "05",
        icon: Snowflake,
        title: "Refrigerant Cools and Expands",
        description:
          "The refrigerant passes through an expansion device, reducing its pressure and temperature. It is then ready to absorb more heat from inside the home.",
      },
      {
        number: "06",
        icon: RotateCw,
        title: "The Cycle Repeats",
        description:
          "The refrigeration cycle continues while the system is operating, continuously moving heat from indoors to outdoors.",
      },
    ];
  return (
    <section className="w-full py-10 sm:py-12 lg:py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">
            How Does an
            <span className="text-blue-700"> Air Conditioner Work?
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed"> Air conditioners use a refrigeration cycle to transfer heat. In cooling mode, the system takes heat from inside your home and moves it outside. </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((step) => {
              const Icon = step.icon;
              return (
                  <div key={step.number}
                  className="group relative bg-white rounded-lg border border-slate-200 p-6 sm:p-7 shadow-lg hover:shadow-xl shadow-black/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-900 to-blue-600 group-hover:w-full transition-all duration-500" />
                <div className="absolute top-5 right-5 text-4xl text-blue-600/5 font-serif font-black text-slate group-hover:text-blue-600/10 transition-colors">
                  {step.number}
                </div>
                <div className="relative w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:bg-blue-900 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900  mb-3">{step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description} </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default HowAcWorks

