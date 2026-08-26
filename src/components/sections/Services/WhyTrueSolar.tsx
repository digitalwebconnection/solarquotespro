import { ShieldCheck, Award, Zap, HeartHandshake, CircleCheck } from "lucide-react";


export default function MiniWhyTrueSolarQuotes() {
  

  const highlights = [
    {
      title: "100% Unbiased",
      desc: "Independent quotes with zero pushy sales commissions.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      style: "border-emerald-500/30 hover:border-emerald-400/60",
      badge: "Honest",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    {
      title: "CEC Accredited",
      desc: "Fully vetted, licensed local electrical experts.",
      icon: <Award className="w-8 h-8 text-blue-400" />,
      style: "border-blue-500/30 hover:border-blue-400/60",
      badge: "Verified",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20"
    },
    {
      title: "Tier-1 Hardware",
      desc: "Top-tier panels built for harsh Aussie climates.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      style: "border-amber-500/30 hover:border-amber-400/60",
      badge: "Quality",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20"
    },
    {
      title: "Full Care Support",
      desc: "From bill assessment to final grid connection.",
      icon: <HeartHandshake className="w-8 h-8 text-indigo-400" />,
      style: "border-indigo-500/30 hover:border-indigo-400/60",
      badge: "End-to-End",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    }
  ];

  return (
    <section className="bg-slate-900 py-16 text-white overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_60%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-13">
          <span className=" bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1"><CircleCheck  strokeWidth={2} className="w-4 h-4"/> why True solar Quote </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-6 font-serif bg-linear-to-r from-amber-300 from-35% to-emerald-400 bg-clip-text text-transparent"> Australia's Most Trusted Solar Company </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base"> From a small local team to one of Australia's most trusted solar networks. </p>
        </div>

        <div className="max-w-7xl mx-auto flex gap-4 items-center justify-center">
          {highlights.map((item, index) => (
            <div key={index} className={`bg-slate-950/80 border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${item.style}`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-transparent group-hover:bg-transparent transition-all duration-250 group-hover:-translate-y-1 ease-in-out">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed"> {item.desc} </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">True Solar Promise
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 transition-all duration-200 group-hover:bg-yellow-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}