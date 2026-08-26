import { Dot, ArrowRight, BookOpen, Clock, Flame, Tag } from "lucide-react";

export default function HeroBlog() {
  const highlights = [
    {
      icon: <Flame className="w-4 h-4 text-orange-400" />,
      text: "Latest Clean-Tech Guides",
    },
    {
      icon: <Clock className="w-4 h-4 text-cyan-400" />,
      text: "Updated Weekly",
    },
    {
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
      text: "Expert Insights & Reviews",
    },
    {
      icon: <Tag className="w-4 h-4 text-yellow-400" />,
      text: "Government Rebates & Savings",
    },
  ];

  return (
    <section className="relative h-130 w-full overflow-hidden flex items-center bg-slate-900">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNBYWoL81tQE1y2HUSppSAsvmZqpcEPTytWgWRobVvQ&s=10" alt="Solar energy and smart grid technology concept"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />

      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/70 to-slate-800/40" />

      <div className="relative z-10 grid grid-cols-2 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl text-white space-y-5">
          
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider  px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className="w-5 h-5  text-amber-400 animate-pulse" />
            <span>Energy Knowledge Hub</span>
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-serif leading-tight">
            Insights & Guides on{" "}<br/>
            <span className="bg-linear-to-r from-amber-300 via-orange-300 to-emerald-400 bg-clip-text text-transparent">
              Smart Clean Energy
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
            Stay ahead of rising energy costs. Explore practical installation tips, solar rebate updates, battery buying guides, and EV charging strategies from our industry experts.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#latest-posts"
              className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2.5 cursor-pointer active:scale-95 group">
              <span>Explore Articles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
            </a>
          </div>        
        </div>
        <div>
            <div className=" grid grid-cols-1 items-center gap-2 px-42 mt-10 sm:gap-5">
            {highlights.map((item, index) => (
              <div key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
                {item.icon}
                <span className="absolute w-2 h-2 top-2.5 -left-1 animate-pulse rounded-full bg-white"></span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}