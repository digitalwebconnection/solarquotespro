
import { ArrowDown, ArrowUp, Fan, ArrowRight } from "lucide-react";

const WhatIsAc = () => {
  return (
    <section className="w-full py-6 sm:py-6 lg:py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-200/20 text-blue-900 border border-blue-100 text-xs sm:text-xs group font-bold uppercase tracking-wider">
            <Fan className="w-4 h-4 group-hover:rotate-360 duration-500 ease-in-out transition-transform" /> Understanding Air Conditioners </span>

          <h2 className="mt-4 text-3xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900  ">
            What Is an
            <span className="text-blue-800"> Air Conditioner? </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed"> An air conditioner is a system designed to control the temperature and comfort of an indoor space. Rather than simply creating cold
            air, an air conditioner moves heat from one place to another.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center mb-12">
          <div className="pr-0 lg:pr-10">

            <h3 className="mt-5 text-3xl font-bold text-slate-900 font-serif leading-tight">Heat is moved, not just created.</h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              An air conditioner does not create cold air in the traditional sense. Instead, it removes heat from one space and transfers it elsewhere, which is why it can cool a room efficiently even on warm days.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Inside the system, a refrigerant absorbs heat from indoor air and carries it to the outdoor unit, where the heat is released. In reverse-cycle systems, the process can also work in reverse, drawing warmth from outside air and moving it inside to provide heating.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <ArrowDown className="h-4 w-4" />
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">Cooling mode:</span> the system removes indoor heat and pushes it outdoors.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <ArrowUp className="h-4 w-4" />
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">Heating mode:</span> reverse-cycle units extract warmth from outside air and transfer it indoors.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1780445392698-646b69b12dd5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Air conditioner indoor system"
              className="h-full min-h-100 w-full object-cover rounded-xl"
            />
          </div>
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
                <span className="px-4 py-2 rounded-lg bg-sky-200/40 text-sky-700 font-bold text-sm">  Indoor Air
                </span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-lg bg-amber-200/20 text-amber-500 font-bold text-sm"> Heat Removed
                </span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-lg bg-orange-200/40 text-orange-500 font-bold text-sm">Released Outdoors
                </span>
              </div>
            </div>
            <p className="text-slate-600  text-base leading-relaxed"> The air conditioner absorbs heat from the indoor air and transfers it outside. This lowers the indoor temperature while the indoor unit circulates cooler air through the room. </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-orange-100 flex items-center justify-center">
                <ArrowUp className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif"> Heating</h3>
                <p className="text-sm text-slate-500">Reverse-cycle operation</p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-100/40 p-5 mb-5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                <span className="px-4 py-2 rounded-lg bg-sky-200/40 text-sky-700 font-bold text-sm">
                  Outdoor Air</span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-lg bg-amber-200/20 text-amber-500 font-bold text-sm">
                  Heat Extracted</span>
                <span className="text-slate-500"><ArrowRight size={15} /></span>
                <span className="px-4 py-2 rounded-lg bg-orange-200/40 text-orange-500 font-bold text-sm">
                  Transferred Indoors
                </span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">A reverse-cycle air conditioner can reverse the refrigeration cycle. This allows the same system to extract heat from outdoor air and transfer it indoors when the weather is cooler.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatIsAc
