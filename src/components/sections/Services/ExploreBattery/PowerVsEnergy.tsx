import { BatteryCharging, Zap } from "lucide-react";

const PowerVsEnergy = () => {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif bg-linear-to-r from-orange-500 from-30% to-amber-400 bg-clip-text text-transparent">POWER vs ENERGY</h2>
          <p className="text-lg text-slate-700 font-semibold leading-7 mt-3">Ensure your battery has enough power AND enough energy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border grid grid-cols-2 border-slate-300 overflow-hidden bg-linear-to-br from-slate-950 to-slate-900 ">
            <div className="w-full">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmwgKUlqG3mdfJr4cy7rN9mO_yQsBUKmKdrnC03rJ1w&s=10"
                className="rounded-2xl w-full h-48 object-cover" alt="Electric power flow"/>
            </div>
            <div className="">
              <div className="bg-amber-400/10 p-4 rounded-2xl text-amber-400 shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl text-amber-500 font-extrabold tracking-wide">POWER</span>
                <div className="font-black text-5xl text-amber-400">kW</div>
              </div>

              <h2 className="text-xl text-white font-bold">HOW FAST?</h2>
              <p className="text-slate-300 font-medium tracking-wide text-lg mt-1">How quickly electricity can flow.
              </p>
              <h2 className="font-extrabold text-xl text-amber-300"> Higher kW </h2>
              <p className="font-medium text-lg text-slate-300 mt-1"> More appliances can potentially run at the same time.</p>
            </div>
         </div>
        
        <div className="rounded-2xl border grid grid-cols-2 border-slate-300 overflow-hidden bg-linear-to-br from-slate-950 to-slate-900 ">
            <div className="w-full mt-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQrUW1EcOxt5Hzn7PWk55VmhFSk--f_rrUWyDKebw3A&s=10"
                className="rounded-2xl w-full h-48 object-cover" alt="Battery energy storage"/>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-400/10 p-4 rounded-2xl text-emerald-400 shrink-0">
                <BatteryCharging className="w-14 h-14" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl text-emerald-500 font-extrabold tracking-wide">ENERGY </span>
                <div className="font-black text-5xl text-emerald-400"> kWh</div>
              </div>

              <h2 className="text-xl text-white font-bold">HOW MUCH?</h2>
              <p className="text-slate-300 font-medium tracking-wide text-lg mt-1">How much electricity the battery can store.</p>

              <h2 className="font-extrabold text-xl text-emerald-300">Higher kWh </h2>
              <p className="font-medium text-lg text-slate-300 mt-1"> More stored energy available for longer use.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-md px-6 py-5">
            <p className="text-center text-lg font-bold text-slate-800 mb-4">Remember the key difference</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-center gap-3 bg-amber-50 rounded-xl py-4 px-5">
                <span className="text-2xl font-black text-amber-500">kW</span>
                <span className="text-slate-700 font-semibold">Speed / Rate</span>
              </div>    
              <div className="flex items-center justify-center gap-3 bg-emerald-50 rounded-xl py-4 px-5">
                <span className="text-2xl font-black text-emerald-500">kWh</span>
                <span className="text-slate-700 font-semibold">Quantity / Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerVsEnergy;