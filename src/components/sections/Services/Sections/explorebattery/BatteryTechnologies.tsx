import { BatteryCharging, CircleCheck } from "lucide-react"


const BatteryTechnologies = () => {
    return(
        <section className="relative py-14 bg-slate-50 overflow-hidden">

      <div className="absolute top-14 right-50 w-130 h-100 bg-blue-400/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-300/20 border border-amber-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
          <BatteryCharging className="w-5 h-5 text-amber-500" />Battery Technologies</div>
          <h1 className="text-3xl sm:text-3xl font-extrabold mt-2 font-serif bg-linear-to-r from-amber-500 from-40% to-blue-800 bg-clip-text text-transparent">Which Battery Technology Is Right for You?</h1>
          <p className="text-lg text-slate-700 font-semibold leading-7 mt-5">Different battery technologies offer different combinations of size, performance, maintenance requirements and suitability for residential energy storage.
          </p>
        </div>

        <div className="grid grid-cols-2 max-w-7xl gap-6 mx-auto">
          <div className="p-6 rounded-2xl border border-amber-400/40 bg-amber-300/4 shadow-lg/30 shadow-amber-500/50">
            <h2 className="mb-4 font-extrabold text-3xl font-serif text-orange-400">Lead-Acid</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Traditional Energy Storage</h3>
            <p className="text-md mb-4 text-slate-500">Lead-acid batteries have been used for energy storage for many years and remain relevant in some off-grid applications. However, they are generally larger, heavier and more maintenance-intensive than modern lithium-based systems.</p>
            <h3 className="text-lg font-bold text-slate-600 mb-1.5">Key Characterstics:</h3>
            <ul className="text-sm space-y-1 text-slate-600">
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Large and heavy</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Higher maintenance requirements</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Historically common in off-grid systems</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Less common in modern residential installations</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-amber-400/40 bg-amber-300/4 shadow-lg/30 shadow-amber-500/50">
            <h2 className="mb-4 font-extrabold text-3xl font-serif text-orange-400">Lithium-Ion</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Modern Residential Storage</h3>
            <p className="text-md mb-4 text-slate-500">Lithium-ion batteries have become widely used for residential energy storage because they offer a combination of compact size, performance and relatively low maintenance requirements.</p>
            <h3 className="text-lg font-bold text-slate-600 mb-1.5">Key Characterstics:</h3>
            <ul className="text-sm space-y-1 text-slate-600 mb-2.5">
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Compact</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Lightweight</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>High performance</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Low maintenance</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-orange-400"/>Common in residential systems</li>
            </ul>
            <h3 className="capitalize text-slate-600 font-bold ">Two common lithium-ion chemistries:</h3>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="rounded-sm bg-emerald-400/20 text-black/80 px-2.5 py-1 tracking-wide font-bold">NMC</span>
              <span className="rounded-sm bg-emerald-400/20 text-black/80 px-2.5 py-1 tracking-wide font-bold">LFP</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-400/40 bg-emerald-500/2 shadow-lg/30 shadow-emerald-500/50">
            <h2 className="mb-4 font-extrabold text-3xl font-serif text-emerald-400">NMC</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Nickel Manganese Cobalt</h3>
            <p className="text-md mb-4 text-slate-500">NMC is a lithium-ion chemistry known for its high energy density, allowing batteries to store substantial amounts of energy in a relatively compact package.</p>
            <h3 className="text-lg font-bold text-slate-600 mb-1.5">Key Characterstics:</h3>
            <ul className="text-sm space-y-1 text-slate-600">
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>High energy density</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Compact design</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Used in some residential battery systems</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-emerald-400/40 bg-emerald-500/2 shadow-lg/30 shadow-emerald-500/50">
            <h2 className="mb-4 font-extrabold text-3xl font-serif text-emerald-400">LFP</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Lithium Iron Phosphate</h3>
            <p className="text-md mb-4 text-slate-500">LFP is another lithium-ion chemistry that has become widely used in modern energy-storage systems. It is known for strong cycle-life characteristics and favorable thermal stability.</p>
            <h3 className="text-lg font-bold text-slate-600 mb-1.5">Key Characterstics:</h3>
            <ul className="text-sm space-y-1 text-slate-600">
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Strong cycle-life characteristics  </li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Common in modern energy storage</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Widely used in residential systems</li>
              <li className="flex gap-2 items-center"><CircleCheck className="w-3.5 h-3.5 text-emerald-400"/>Favorable thermal stability</li>
            </ul>
          </div>
        </div>
        <div className="border-blue-950 max-w-4xl mx-auto text-center text-slate-600 leading-relaxed mt-10 font-semibold tracking-wide"><p>For modern residential energy storage, lithium-ion batteries—particularly LFP and NMC chemistries—are widely used. The right choice depends on factors such as system design, available space, performance requirements, warranty, budget and intended</p></div>
        </div>
    </section>
    )
}
export default BatteryTechnologies