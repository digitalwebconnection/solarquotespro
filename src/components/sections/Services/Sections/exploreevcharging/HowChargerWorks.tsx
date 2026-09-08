import { BatteryCharging, Car, Zap, House, Plug, CircleCheckBig, Rocket } from "lucide-react";

const HowChargerWorks = () => {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif bg-linear-to-r from-amber-500 from-40% to-emerald-400 bg-clip-text text-transparent">How Does EV Charging Work?</h2>
          <p className="text-lg text-slate-700 font-semibold mt-3"> Understanding how electricity moves from your energy source to your electric vehicle. </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-orange-500">Understanding EV Charging</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 mt-2">How electricity reaches your EV</h3>
            <p className="text-lg text-slate-600 leading-7 mt-4">An EV charger connects your electric vehicle to an electricity supply and manages the delivery of electricity to the vehicle's battery.</p>
            <p className="text-lg text-slate-600 leading-7 mt-4"> Electricity can come from the{" "} 
                <span className="font-semibold text-slate-800"> grid, solar panels, or a combination of both </span> , depending on how your charging system is configured.</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-7">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
              Energy Flow</p>
            <div className="flex flex-col items-center gap-3 sm:px-12 max-w-md mx-auto">
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 w-full"> <Zap className="text-amber-500 shrink-0" size={28} /> <span className="font-bold text-slate-800">Grid / Solar</span>
              </div>
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 w-full "> <BatteryCharging className="text-orange-500 shrink-0" size={28} /> <span className="font-bold text-slate-800">EV Charger</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 w-full "><Car className="text-blue-500 shrink-0" size={28} /> <span className="font-bold text-slate-800"> Vehicle Charging System</span>
            </div>

              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3 w-full"> <BatteryCharging className="text-emerald-500 shrink-0" size={28} />
                <span className="font-bold text-slate-800">EV Battery</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-100 border border-slate-300 rounded-xl px-5 py-3 w-full"><Car className="text-slate-600 shrink-0" size={28} /><span className="font-bold text-slate-800">Electric Vehicle</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-14">
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 text-white">
            <div className="flex gap-4 items-start">
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

        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 font-serif">Three Things Determine Charging Speed </h3>
          <p className="text-slate-600 text-lg mt-2"> Charging speed depends on the charger, the vehicle and the
            electrical supply working together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-7 relative">
            <div className="flex items-center justify-between">
            <div className="bg-amber-400/10 text-amber-500 p-4 rounded-2xl mb-5"> <Zap size={42} />
            </div>
            <span className="text-sm font-bold tracking-widest text-amber-500 absolute top-12 right-5">01</span></div>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-serif">Charger Power </h4>
            <p className="text-lg font-bold text-slate-700 mt-4"> How much electricity can the charger deliver?
            </p>
            <p className="text-slate-600 leading-7 mt-3"> A higher-power charger can potentially deliver electricity to the vehicle faster.</p>
            <div className="mt-5 pt-5 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Key Point </p>
              <p className="text-slate-700 font-medium mt-1">More charger power can mean faster charging when the vehicle and electrical supply can support it. </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-7 relative">
            <div className="flex justify-between">
            <div className="bg-blue-400/10 text-blue-500 p-4 rounded-2xl mb-5"><Car size={42} />
            </div>
            <div className="text-sm font-bold tracking-widest text-blue-500 absolute top-12 right-5">02 </div></div>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-serif">Vehicle Charging Capability</h4>
            <p className="text-lg font-bold text-slate-700 mt-4">How much power can your EV accept?</p>
            <p className="text-slate-600 leading-7 mt-3">Every EV has its own maximum charging capability. A high-powered charger cannot force the vehicle to accept more electricity than its charging system is designed to handle. </p>  
            <div className="mt-5 pt-5 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Key Point</p>
              <p className="text-slate-700 font-medium mt-1">More powerful charger ≠ automatically faster charging. </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-7 relative">
            <div className="flex justify-between">
            <div className="bg-emerald-400/10 text-emerald-500 p-4 rounded-2xl mb-5"><House size={42} />
            </div>
            <div className="text-sm font-bold tracking-widest text-emerald-500 absolute right-5 top-12">03</div></div>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-serif"> Electrical Supply</h4>
            <p className="text-lg font-bold text-slate-700 mt-4">How much power can your home provide? </p>
            <p className="text-slate-600 leading-7 mt-3"> Your home's electrical connection and available capacity affecthow much power can be supplied to an EV charger.</p>
            <div className="mt-5 pt-5 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Key Point </p>
              <p className="text-slate-700 font-medium mt-1">Other appliances operating at the same time may also affect available capacity. </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white text-lg sm:text-xl font-semibold leading-8">
            A suitable charging installation considers the<span className="text-amber-400"> home's electrical supply</span>, the <span className="text-blue-400"> charger</span> and the
            <span className="text-emerald-400"> vehicle</span> together.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto py-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 font-serif">Types of EV charger  </h3>
          <p className="text-slate-600 text-lg mt-2">Not every charger is designed for the same situation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="p-5 border border-slate-200 rounded-3xl bg-white group overflow-hidden relative hover:bg-linear-to-b from-slate-950 to-slate-900 duration-300 transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu81X_PsVYqk5QPHmZGLBaMBEoq0uUDFtYI6ul95lbeg&s=10" className="opacity-0 absolute z-0 group-hover:opacity-40 duration-300 transition-all inset-0 w-full h-full object-cover" alt="" />
            <div className="relative z-10">
              <h2 className="mb-2.5 text-2xl font-extrabold text-black group-hover:text-white duration-300 transition-colors flex items-center gap-2"><Plug strokeWidth={3} className="shrink-0 text-orange-500" />Portable/Level 1 Charging</h2>
              <p className="mb-2 font-semibold text-lg text-slate-800 group-hover:text-slate-200 duration-300 transition-colors">Portable chargers can connect to a standard household power outlet.</p>
              <p className="text-base text-slate-800 group-hover:text-white duration-300 transition-colors">They are convenient because they generally require little installation, but charging is relatively slow. A typical 10A, 230V supply provides around 2.3 kW</p>
              <h3 className="font-bold mt-3 text-lg border-t pt-3 group-hover:text-white duration-300 transition-colors border-slate-300">Best for:</h3>
              <ul className="mt-2 duration-300 text-sm tracking-wide font-semibold group-hover:text-white transition-colors space-y-1.5">
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Occasional charging</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Emergency charging</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Drivers with low daily mileage</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Situations where faster charging isn't required</li>
              </ul>
            </div>
          </div>
          <div className="p-5 border border-slate-200 rounded-3xl bg-white group overflow-hidden relative hover:bg-linear-to-b from-slate-950 to-slate-900 duration-300 transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlvBxdE4KTc5wra-74sDtlPFQe_koB_AUlLKRZoRjqw&s=10" className="opacity-0 absolute z-0 group-hover:opacity-40 duration-300 transition-all inset-0 w-full h-full object-cover" alt="" />
            <div className="relative z-10">
              <h2 className="mb-2.5 text-2xl font-extrabold text-black group-hover:text-white duration-300 transition-colors flex items-center gap-2"><Zap strokeWidth={3} className="shrink-0 text-orange-500" />Level 2 Home Charging</h2>
              <p className="mb-2 font-semibold text-lg text-slate-800 group-hover:text-slate-200 duration-300 transition-colors">A dedicated wall-mounted charger can provide substantially more power than a standard outlet.</p>
              <p className="text-base text-slate-800 group-hover:text-white duration-300 transition-colors">Home chargers commonly operate around 7–22 kW, depending on the charger, vehicle and electrical supply..</p>
              <h3 className="font-bold mt-3 text-lg border-t pt-3 group-hover:text-white duration-300 transition-colors border-slate-300">Best for:</h3>
              <ul className="mt-2 duration-300 text-sm tracking-wide font-semibold group-hover:text-white transition-colors space-y-1.5">
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Daily home charging</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Overnight charging</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Higher daily driving</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Solar-integrated charging</li>
              </ul>
            </div>
          </div>
          <div className="p-5 border border-slate-200 rounded-3xl bg-white group overflow-hidden relative hover:bg-linear-to-b from-slate-950 to-slate-900 duration-300 transition-all">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoB8qUlIeolZsyNDvjL-kvNufUwWmzQ5Zb2RTPdwc5Q&s=10" className="opacity-0 absolute z-0 group-hover:opacity-40 duration-300 transition-all inset-0 w-full h-full object-cover" alt="" />
            <div className="relative z-10">
              <h2 className="mb-2.5 text-2xl font-extrabold text-black group-hover:text-white duration-300 transition-colors flex items-center gap-2"><Rocket strokeWidth={3} className="shrink-0 text-orange-500" />DC Fast Charging</h2>
              <p className="mb-2 font-semibold text-lg text-slate-800 group-hover:text-slate-200 duration-300 transition-colors">DC fast chargers can deliver much higher charging power and are primarily designed for rapid charging while travelling.</p>
              <h3 className="font-bold mt-3 text-lg border-t pt-3 group-hover:text-white duration-300 transition-colors border-slate-300">They are particularly useful for:</h3>
              <ul className="mt-2 duration-300 text-sm tracking-wide font-semibold group-hover:text-white transition-colors space-y-1.5">
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Long-distance journeys</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Highway travel</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" /> Quick charging stops</li>
                <li className="flex gap-2 items-center"><CircleCheckBig size={15} className="shrink-0" />Public charging locations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto my-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif bg-linear-to-r from-orange-500  to-emerald-500 bg-clip-text text-transparent">How Fast Can an EV Charge?</h2>
          <p className="text-lg text-slate-700 font-semibold mt-3">Charging speed is measured in kilowatts (kW).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-amber-500 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Standard Home Charging</span>
                <Zap className="text-amber-500" size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 font-serif">7 kW Charger</h3>
              <p className="text-slate-600 leading-7 mt-4">A typical 7 kW charger can add roughly{" "}
                <span className="font-bold text-slate-800">40 km of driving range per hour</span>, depending on the vehicle's efficiency.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">High-Power AC Charging</span>
                <Zap className="text-emerald-500 " size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 font-serif">22 kW Charger</h3>
              <p className="text-slate-600 leading-7 mt-4">
                A 22 kW charger can potentially add around{" "}
                <span className="font-bold text-slate-800">125 km of range per hour</span>, but only when the vehicle and electrical supply support that charging rate.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-lg border-l-4 border-orange-500">
            <div className="flex gap-4 items-start">
              <div className="bg-orange-500/10 p-3 rounded-xl ">
                <Zap className="text-orange-500" size={30} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl tracking-wide font-bold text-orange-400">Important</h4>
                <p className="text-slate-200  mt-2 font-medium">A 22 kW charger does not automatically mean your car will charge at 22 kW.</p>
                <p className="text-slate-300  mt-2">Your vehicle's onboard AC charging capability determines how much AC power it can actually accept.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowChargerWorks;