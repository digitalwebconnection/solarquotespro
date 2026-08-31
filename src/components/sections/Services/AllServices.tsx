import {Sun,BatteryCharging,Zap,Snowflake,Droplets,ArrowRight,BookOpen,CheckCircle2} from "lucide-react";

export default function AllServices() {

  const solutions = [
    {
      title: "Solar Energy",
      subtitle: "Generate electricity from sunlight",
      description:"Understand how rooftop solar works, how much energy a system can produce, and what to consider before comparing solar options.",
      icon: Sun,
      iconStyle: "text-amber-500 bg-amber-500/20",
      borderStyle: "hover:border-amber-400",
      points: [
        "Solar system sizes",
        "Panel & inverter options",
        "Solar pricing & value",
      ],
      linkText: "Explore Solar",
      linkUrl: "#solar",
    },
    {
      title: "Home Batteries",
      subtitle: "Store energy for later",
      description:" Learn how batteries store excess solar energy and explore capacity, battery technology, backup power and other important considerations.",
      icon: BatteryCharging,
      iconStyle: "text-emerald-600 bg-emerald-500/20",
      borderStyle: "hover:border-emerald-400",
      points: [
        "Battery capacity",
        "Battery technology",
        "Backup & energy storage",
      ],
      linkText: "Explore Batteries",
      linkUrl: "#batteries",
    },
    {
      title: "EV Charging",
      subtitle: "Charge your electric vehicle",
      description:" Discover home EV charging options, charging speeds and smart features, including ways to make better use of your solar energy.",
      icon: Zap,
      iconStyle: "text-blue-600 bg-blue-500/20",
      borderStyle: "hover:border-blue-400",
      points: [
        "Charger types & speeds",
        "Smart charging features",
        "Solar EV charging",
      ],
      linkText: "Explore EV Charging",
      linkUrl: "#ev-charging",
    },
    {
      title: "Hot Water Heat Pumps",
      subtitle: "Efficient hot water",
      description: "Find out how heat-pump hot-water systems work and what homeowners should consider when comparing traditional and efficient alternatives.",
      icon: Droplets,
      iconStyle: "text-cyan-600 bg-cyan-500/20",
      borderStyle: "hover:border-cyan-400",
      points: [
        "How heat pumps work",
        "Energy efficiency",
        "Rebates & incentives",
      ],
      linkText: "Explore Heat Pumps",
      linkUrl: "#heat-pumps",
    },
    {
      title: "Air Conditioning",
      subtitle: "Efficient heating & cooling",
      description: "Explore heating and cooling options, efficiency ratings and ways air conditioning can work alongside a home's broader energy setup.",
      icon: Snowflake,
      iconStyle: "text-indigo-600 bg-indigo-500/20",
      borderStyle: "hover:border-indigo-400",
      points: [
        "Energy efficiency ratings",
        "Heating & cooling options",
        "Smart climate control",
      ],
      linkText: "Explore Air Conditioning",
      linkUrl: "#air-conditioning",
    },
  ];

  return (
    <section className="relative  bg-slate-50 py-14">
      <div className="absolute z-0 top-30 -left-50 w-140 h-90 rounded-full bg-amber-300/20  blur-[120px]"/>
      <div className="absolute z-0 bottom-5 -right-10 w-250 h-170 rounded-full bg-amber-300/20  blur-[120px]"/>
      <div className="absolute z-0 top-80 -right-30 w-100 h-100 rounded-full  bg-blue-800/20 blur-[120px]"/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/20 border border-amber-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 text-amber-500" />
            Home Energy Guide
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900">
            Explore Your{" "} <span className="bg-linear-to-r from-amber-400 via-orange-400 to-emerald-600 bg-clip-text text-transparent">Energy Options</span>
          </h2>

          <p className="mt-5 text-slate-700 text-sm sm:text-base leading-6 max-w-2xl mx-auto">Research the technologies available for your home, understand the important factors and compare your
            options before speaking with an energy professional.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`group relative overflow-hidden bg-white/90 border border-slate-300 shadow-gray-400 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all duration-300  hover:-translate-y-1 ${item.borderStyle}`}>

                <div className="absolute top-5 right-5 text-xs font-bold text-slate-400">0{index + 1}</div>
                <div className={`w-12 h-12 rounded-xl flex justify-center items-center mb-5 ${item.iconStyle}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">{item.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-1">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  {item.description}
                </p>
                <div className="my-5" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  What to consider
                </p>
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-2 text-sm text-slate-700"  >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />{point}
                    </li>
                  ))}
                </ul>
                <a href={item.linkUrl} className=" pt-8 flex items-center justify-between text-sm font-bold  text-blue-900  group-hover:text-amber-600 transition-colors">
                  <span>{item.linkText}</span>
                  <ArrowRight className="  w-4  h-4  transition-transform  duration-300  group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 px-6 py-8 sm:px-10 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">Not sure which option is right for you?
            </h3>
            <p className="text-slate-400 text-sm mt-1">Start by telling us about your home and energy needs.
            </p>
          </div>

          <button type="button" className="inline-flex items-center gap-2  bg-amber-500  hover:bg-amber-400  text-white font-bold px-5 py-3 rounded-xl transition-all">
            Compare Your Options
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}