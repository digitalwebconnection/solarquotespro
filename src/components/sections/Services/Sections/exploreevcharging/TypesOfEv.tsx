import { Zap , Rocket , Plug } from "lucide-react"

const TypesOfEv = () => {
    return(
        <section className="py-14 bg-slate-50">
            <div className="text-center max-w-3xl mx-auto mt-5 py-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-serif">Types of EV charger  </h3>
          <p className="text-slate-600 text-lg mt-2">Not every charger is designed for the same situation.</p>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center py-10 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Plug className="text-orange-500" size={28} />
                <h2 className="text-2xl font-bold text-blue-950">Portable / Level 1 Charging</h2>
              </div>
              <p className="text-slate-700 leading-7"> Portable chargers can connect to a standard household power
                outlet. They are convenient because they generally require little installation, but charging is relatively slow. </p>
              <p className="mt-3 text-slate-600 leading-7">A typical 10A, 230V supply provides around 2.3 kW, making this option suitable when the vehicle does not need to be charged quickly. </p>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Best for: <span className=" text-slate-600">occasional charging, emergency charging and low daily mileage.
                </span>
              </p>
            </div>
            <div className="h-56 overflow-hidden rounded-xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu81X_PsVYqk5QPHmZGLBaMBEoq0uUDFtYI6ul95lbeg&s=10" alt="Portable EV charging"
                className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center py-10 border-b border-slate-200">
            <div className="h-56 overflow-hidden rounded-xl ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlvBxdE4KTc5wra-74sDtlPFQe_koB_AUlLKRZoRjqw&s=10"
                alt="Level 2 home charging" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-orange-500" size={28} />
                <h2 className="text-2xl font-bold text-blue-950">Level 2 Home Charging</h2>
              </div>
              <p className="text-slate-700 leading-7">A dedicated wall-mounted charger can provide substantially more power than a standard household outlet.</p>
              <p className="mt-3 text-slate-600 leading-7">Home chargers commonly operate around 7–22 kW, depending on the charger, vehicle and available electrical supply.</p>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Best for:
                <span className=" text-slate-600"> daily home charging, overnight charging and solar-integrated charging.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center py-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-orange-500" size={28} />
                <h2 className="text-2xl font-bold text-blue-950">DC Fast Charging</h2>
              </div>
              <p className="text-slate-700 leading-7">DC fast chargers can deliver much higher charging power and are primarily designed for rapid charging while travelling.</p>
              <p className="mt-3 text-slate-600 leading-7">They are particularly useful when drivers need to add a meaningful amount of range during a short stop.</p>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Particularly useful for:
                <span className=" text-slate-600">long-distance journeys, highway travel, quick charging stops
                  and public charging locations.</span>
              </p>
            </div>
            <div className="h-56 overflow-hidden rounded-xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoB8qUlIeolZsyNDvjL-kvNufUwWmzQ5Zb2RTPdwc5Q&s=10"
                alt="DC fast charging"   className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto my-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 font-serif">How Fast Can an EV Charge?</h2>
          <p className="text-lg text-slate-700 font-semibold mt-3">Charging speed is measured in kilowatts (kW).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-lg border border-slate-200 shadow-md p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-amber-500 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">Standard Home Charging</span>
                <Zap className="text-amber-500" size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 font-serif tracking-wide">7 kW Charger</h3>
              <p className="text-slate-600 leading-7 mt-4">A typical 7 kW charger can add roughly
                40 km of driving range per hour, depending on the vehicle's efficiency.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 shadow-md p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-500 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">High-Power AC Charging</span>
                <Zap className="text-emerald-500 " size={28} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 font-serif tracking-wide">22 kW Charger</h3>
              <p className="text-slate-600 leading-7 mt-4">
                A 22 kW charger can potentially add around 125 km of range per hour, but only when the vehicle and electrical supply support that charging rate.
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

        </section>

    )    
}

export default TypesOfEv