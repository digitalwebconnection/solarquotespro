
import { ArrowDown, ArrowUp, Fan, ArrowRight } from "lucide-react";

const WhatIsAc = () => {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-200/20 text-blue-900 border border-blue-100 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Fan className="w-4 h-4" /> Understanding Air Conditioners </span>

          <h2 className="mt-4 text-3xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900  ">
            What Is an
            <span className="text-blue-800"> Air Conditioner? </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed"> An air conditioner is a system designed to control the temperature and comfort of an indoor space. Rather than simply creating cold
            air, an air conditioner moves heat from one place to another.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 mb-10">

          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Cooling</h3>
                <p className="text-sm text-slate-500"> Removing heat from indoors</p>
              </div>
            </div>
            <div className="bg-slate-100/50 rounded-2xl  p-5 mb-5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                <span className="px-4 py-2 rounded-xl bg-sky-200/40 text-sky-700 font-bold text-sm">  Indoor Air
                </span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-xl bg-amber-200/40 text-amber-400 font-bold text-sm"> Heat Removed
                </span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-xl bg-orange-200/40 text-orange-500 font-bold text-sm">Released Outdoors
                </span>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed"> The air conditioner absorbs heat from the indoor air and transfers it outside. This lowers the indoor temperature while the indoor unit circulates cooler air through the room. </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <ArrowUp className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif"> Heating</h3>
                <p className="text-sm text-slate-500">Reverse-cycle operation</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100/40 p-5 mb-5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                <span className="px-4 py-2 rounded-xl bg-sky-200/40 text-sky-700 font-bold text-sm">
                  Outdoor Air</span>
                  <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-xl bg-amber-200/40 text-amber-400 font-bold text-sm">
                  Heat Extracted</span>
                  <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-xl bg-orange-200/40 text-orange-500 font-bold text-sm">
                  Transferred Indoors
                </span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">A reverse-cycle air conditioner can reverse the refrigeration cycle. This allows the same system to extract heat from outdoor air and transfer it indoors when the weather is cooler.
            </p>
          </div>
        </div>

        {/* <div className="rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 lg:p-10">
            <div className="flex gap-4 ">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center"> <Zap className="w-7 h-7 text-yellow-400" /> </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4"> Why Air Conditioners Use Electricity
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-4xl"> powers components such as the compressor, fans and control systems. The system uses this electrical energy to operate the refrigeration cycle and transfer heat rather than directly creating cooling. </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Zap className="w-5 h-5 text-yellow-400 " />
                  <span className="text-sm font-semibold"> Electrical Energy </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Fan className="w-5 h-5 text-sky-400 " />
                  <span className="text-sm font-semibold"> Refrigeration Cycle </span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Thermometer className="w-5 h-5 text-orange-400 " />
                  <span className="text-sm font-semibold">Heating & Cooling
                  </span>
                </div>
              </div>
              <p className="mt-6 text-slate-300 leading-relaxed"> This is why the efficiency of an air conditioner depends on how much heating or cooling it can provide compared with the electricity it consumes.
              </p>
            </div>
            </div>
          </div> */}
        </div>
    </section>
  );
}

export default WhatIsAc
