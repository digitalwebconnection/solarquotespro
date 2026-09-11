import { BatteryCharging, Car, Zap, House, ArrowDown } from "lucide-react";

const HowChargerWorks = () => {
  return (
    <section className="py-14 bg-slate-50">
      <div className=" ">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold  text-blue-950">How Does EV Charging Work?</h2>
          <p className="text-lg text-slate-600 font-md mt-3"> Understanding how electricity moves from your energy source to your electric vehicle. </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-10">
          <div className="">
            <span className="text-sm font-bold tracking-widest uppercase text-orange-500">Understanding EV Charging</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 mt-2">How electricity reaches your EV</h3>
            <p className="text-lg text-slate-600 leading-7 mt-4">An EV charger connects your electric vehicle to an electricity supply and manages the delivery of electricity to the vehicle's battery.</p>
            <p className="text-lg text-slate-600 leading-7 mt-4"> Electricity can come from the{" "}
              <span className="font-semibold text-slate-800"> grid, solar panels, or a combination of both </span> , depending on how your charging system is configured.</p>
          </div>

          <div className=" py-10  ">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
              Energy Flow</p>
            <div className="w-108 flex flex-col items-center gap-1 sm:px-12  mx-auto">
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 w-full"> <Zap className="text-amber-500 " size={28} /> <span className="font-bold text-slate-800">Grid / Solar</span>
              </div>
              <div><ArrowDown className="w-4 h-4" /></div>
              <div className=" flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 w-full "> <BatteryCharging className="text-orange-500" size={28} /> <span className="font-bold text-slate-800">EV Charger</span>
              </div>
              <div><ArrowDown className="w-4 h-4" /></div>
              <div className=" flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 w-full "><Car className="text-blue-500 " size={28} /> <span className="font-bold text-slate-800"> Vehicle Charging System</span>
              </div>
              <div><ArrowDown className="w-4 h-4" /></div>
              <div className=" flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3 w-full"> <BatteryCharging className="text-emerald-500" size={28} />
                <span className="font-bold text-slate-800">EV Battery</span>
              </div>
              <div><ArrowDown className="w-4 h-4" /></div>
              <div className=" flex items-center gap-3 bg-slate-100 border border-slate-300 rounded-xl px-5 py-3 w-full"><Car className="text-slate-600 " size={28} /><span className="font-bold text-slate-800">Electric Vehicle</span>
              </div>
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
          <h3 className="text-2xl sm:text-4xl font-extrabold text-blue-950 font-serif">Three Things Determine Charging Speed </h3>
          <p className="text-slate-600 text-lg mt-2"> Charging speed depends on the charger, the vehicle and the
            electrical supply working together.</p>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white rounded-lg border border-slate-200 shadow-lg p-7 relative">
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

          <div className="bg-white rounded-lg border border-slate-200 shadow-md p-7 relative">
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

          <div className="bg-white rounded-lg border border-slate-200 shadow-md p-7 relative">
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

        {/* <div className="max-w-7xl mx-auto mt-8 p-6 bg-linear-to-r from-slate-900 to-slate-800 rounded-lg text-center">
          <p className="text-white text-lg sm:text-xl font-semibold leading-8">
            A suitable charging installation considers the<span className="text-amber-400"> home's electrical supply</span>, the <span className="text-blue-400"> charger</span> and the
            <span className="text-emerald-400"> vehicle</span> together.
          </p>
        </div> */}

        
      </div>
    </section>
  );
};

export default HowChargerWorks;