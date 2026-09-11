import {Dot, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroBlog() {
  // const highlights = [
  //   {
  //     icon: <Flame className="w-4 h-4 text-orange-400" />,
  //     text: "Solar & Battery Guides",
  //   },
  //   {
  //     icon: <Clock className="w-4 h-4 text-cyan-400" />,
  //     text: "Regularly Updated",
  //   },
  //   {
  //     icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
  //     text: "Reviews & Comparisons",
  //   },
  //   {
  //     icon: <Landmark className="w-4 h-4 text-yellow-400" />,
  //     text: "Rebates & Pricing",
  //   },
  // ];

  return (
    <section className="relative h-auto min-h-130 w-full overflow-hidden bg-slate-800">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNBYWoL81tQE1y2HUSppSAsvmZqpcEPTytWgWRobVvQ&s=10" alt="Solar energy and smart grid technology"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50"/>

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/65 to-slate-900/50 z-0" />
      <div className="absolute -top-20 right-1/4 w-100 h-100 bg-amber-400/7 blur-[120px] rounded-full" />

      <div className="relative  max-w-7xl mx-auto  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white mt-5 space-y-7">
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 bg-amber-400/10 text-amber-300 border border-amber-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className="w-5 h-5 text-amber-400 animate-pulse"/>
            <span>Energy Knowledge Hub</span>
          </p>                    
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            Learn Before You{" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent">Make an Energy Decision</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-3xl">Explore guides, reviews, comparisons, pricing information and practical advice to help you understand solar, batteries, EV
          charging and other home-energy technologies.</p>
          <div className="pt-2 flex items-center">
            <Link to="/service/explore-solar"  className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-400/20 inline-flex items-center gap-2.5 cursor-pointer active:scale-95 group">
              <BookOpen className="w-4 h-4" />
              <span>Explore Energy Guides</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"/>
            </Link>
          </div>
        </div>


        {/* <div className="flex items-center justify-end ">
            <div className="relative bg-slate-950/75 backdrop-blur-md border border-white/20 rounded-2xl p-5 ">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center"><Search className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">What are you researching?</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Explore before comparing quotes</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 mt-5">
                {highlights.map((item, index) => (
                  <div key={index} className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center ">
                      {item.icon} 
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">
                      {item.text}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all"/>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
                  Research - Compare - Decide
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed"> Get the information you need to make a more informed home-energy choice.
                </p>
              </div>
            </div>
        </div> */}
      </div>
    </section>
  );
}