import { Zap, ShieldCheck, BatteryCharging, Trophy } from "lucide-react";

export default function OurJourney() {
  const steps = [
    {
      year: "2018",
      title: "Started with Honesty",
      desc: "Launched to eliminate pushy tactics and bring transparent solar quotes to Aussie homeowners.",
      icon: Zap,
    },
    {
      year: "2020",
      title: "1,000+ Homes Powered",
      desc: "Expanded across NSW & QLD with 100% CEC-accredited installer teams and Tier-1 hardware.",
      icon: ShieldCheck,
    },
    {
      year: "2023",
      title: "Battery Revolution",
      desc: "Helped thousands add battery storage to protect against rising electricity prices.",
      icon: BatteryCharging,
    },
    {
      year: "2026",
      title: "10,000+ Installations",
      desc: "Now delivering trusted, clean energy solutions nationwide with top customer satisfaction.",
      icon: Trophy,
    },
  ];

  return (
    <section className="bg-slate-900 py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className=" bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full"> Our Story </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 font-serif bg-linear-to-r from-amber-300 from-35% to-emerald-400 bg-clip-text text-transparent"> Our Journey So Far </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base"> From a small local team to one of Australia's most trusted solar networks. </p>
        </div>

        <div className="relative">
          <div  className="absolute top-12 left-16 right-16 border-t-2 border-dashed border-amber-400/40 z-0" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.year}
                  className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/80 p-6 rounded-xl hover:border-amber-400/60 hover:-translate-y-1 transition-all duration-300 shadow-xl relative group">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-25 group-hover:opacity-75 transition-opacity" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400">{step.year}</span>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-amber-400/30 text-amber-400"><Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}