import { Sun, BatteryCharging, Zap, Snowflake, ArrowRight } from "lucide-react";
export default function AllServices() {
  const solutions = [
    {
      title: "Solar Panel Systems",
      subtitle: "High-Efficiency Clean Energy",
      description: "Custom-designed solar arrays using Tier-1 panels engineered to withstand harsh weather and maximize daily bill savings.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLZ9c-6HDuibdX9ywAEB6w22grIzC2GfeUpfe4FxeKQ&s=10",
      accentBorder: "   border-l-amber-500 hover:border-l-amber-600",
      badgeStyle: "bg-amber-800/20 backdrop-blur-sm text-amber-200 border-amber-300",
      icon: <Sun className="w-6 h-6 text-amber-600" />,
      watermarkIcon: <Sun className="w-70 h-70 text-amber-500/10 group-hover:text-orange-500/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />,
      features: [
        "Tier-1 monocrystalline panels",
        "25-year performance warranty",
        "Real-time app energy tracking",
      ],
      linkText: "Explore Solar Packages",
      linkUrl: "#solar",
  
    },
    {
      title: "Home Battery Storage",
      subtitle: "24/7 Power Security & Backup",
      description: "Store daytime solar generation to power your home through the night and automatically protect against unexpected grid outages.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9W6f4bGsD1MIGRUBPk_r9dcNu9tFJnUMA0tP4o0Ob7Q&s=10",
      accentBorder: "border-l-emerald-500 hover:border-l-emerald-600",
      badgeStyle: "bg-emerald-900/20 backdrop-blur-sm text-emerald-300 border-emerald-300",
      icon: <BatteryCharging className="w-6 h-6 text-emerald-600" />,
      watermarkIcon: <BatteryCharging className="w-70 h-70 text-emerald-500/10 group-hover:text-emerald-500/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />,
      features: [
        "Safe LFP battery technology",
        "Blackout emergency protection",
        "Smart grid feed-in optimization",
      ],
      linkText: "View Battery Options",
      linkUrl: "#batteries",
    },
    {
      title: "Smart EV Chargers",
      subtitle: "Fast & Convenient Home Charging",
      description: "Level-2 fast-charging stations designed to charge your electric vehicle directly from your free daytime solar generation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqQSRc-Z16YXpZe0RjqNlNvNTfF13iZUGB50la7TyLw&s=10",
      accentBorder: "border-l-blue-500 hover:border-l-blue-600",
      badgeStyle: "bg-blue-800/20 text-blue-300 backdrop-blur-sm  border-blue-300",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      watermarkIcon: <Zap className="w-70 h-70 text-blue-500/10 group-hover:text-blue-500/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />,
      features: [
        "Charge with 100% excess solar",
        "Universal EV brand support",
        "Weatherproof indoor & outdoor",
      ],
      linkText: "Get an EV Charger Quote",
      linkUrl: "#ev-charging",
    },
    {
      title: "Energy Efficient AC",
      subtitle: "Smart Heating & Cooling",
      description: "High-inverter reverse cycle air conditioners paired with smart solar scheduling to keep your home comfortable for less.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdfCOqZ4JLUy969Mjx3Bd6SEq09xoFv31VxHzUKkqag&s=10",
      accentBorder: "border-l-cyan-500 hover:border-l-cyan-600",
      badgeStyle: "bg-cyan-900/40 backdrop-blur-sm text-cyan-300 border-cyan-300",
      icon: <Snowflake className="w-6 h-6 text-cyan-500" />,
      watermarkIcon: <Snowflake className="w-70 h-70 text-cyan-500/10 group-hover:text-cyan-500/30 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />,
      features: [
        "High-star energy rating units",
        "Smart mobile climate control",
        "Whisper-quiet indoor operation",
      ],
      linkText: "Explore AC Systems",
      linkUrl: "#air-conditioning",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 text-slate-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-amber-500/10 border border-amber-500 text-amber-600 text-xs font-semibold tracking-wider uppercase">
            <span className="inline-flex items-center gap-1"><Sun className="w-4 h-4" />Complete Energy Solutions</span>
          </div>
          <h2 className=" text-3xl sm:text-4xl font-bold  text-slate-900 mb-4 font-serif">
            Powering Your Home With <br/>
            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-emerald-600 bg-clip-text text-transparent">
              Smart Clean Tech
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From generation and storage to smart climate control and EV charging—we engineer end-to-end setups tailored to lower your energy bills.</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {solutions.map((item, index) => (
            <div key={index} className={`group relative  overflow-hidden bg-white border-l-4 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-gray-400 shadow-md hover:shadow-lg hover:-translate-y-1 ${item.accentBorder}`}>
              {/* Image Banner Header */}
              <div className="relative h-55 z-20 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"/>
                
                {/* Floating Top Badge */}
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border ${item.badgeStyle}`}>
                  {item.subtitle}
                </span>
              </div>

              {/* Background Watermark Icon */}
              <div className="absolute bottom-35 -right-20 pointer-events-none select-none ">
                {item.watermarkIcon}
              </div>

              {/* Card Body Content */}
              <div className="relative p-6 sm:p-8 flex flex-col">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-4  pt-4">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-amber-500 transition-colors" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Card Action Link */}
                <div className="pt-3 ">
                  <a href={item.linkUrl}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors" >
                    <span>{item.linkText}</span>
                    <ArrowRight className ="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}