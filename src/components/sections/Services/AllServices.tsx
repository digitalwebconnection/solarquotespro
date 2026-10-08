import { useEffect, useState } from "react";
import { Sun, BatteryCharging, Zap, Snowflake, Droplets, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const solutions = [
  {
    title: "Solar Energy",
    subtitle: "Generate electricity from sunlight",
    description: "Understand how rooftop solar works, what size system suits your home, and which options give the best return before you compare quotes.",
    detail: "The right setup depends on your roof, daytime electricity use and future plans. Comparing system designs helps you understand expected generation and what is included in a quote.",
    goodFit: "Homes with suitable roof space and regular daytime energy use",
    image: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww",
    imageAlt: "Solar panels installed across a rooftop",
    icon: Sun,
    iconStyle: "bg-amber-100 text-amber-600",
    points: [
      "System sizing",
      "Panel options",
      "Pricing & value",
    ],
    linkText: "Explore Solar",
    linkUrl: "/service/explore-solar",
  },
  {
    title: "Home Batteries",
    subtitle: "Store energy for later",
    description: "Learn how battery storage works, what capacity you need, and how backup power can improve reliability during outages or peak pricing periods.",
    detail: "Battery size, usable capacity and backup capability all affect how a system works for your household. Consider when you use electricity and what you want the battery to support.",
    goodFit: "Solar homes looking to use more of their own generation after sunset",
    image: "https://plus.unsplash.com/premium_photo-1773152019508-6df3ea1ac9a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxzb2xhciUyMGJhdHRlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Household energy costs being calculated",
    icon: BatteryCharging,
    iconStyle: "bg-emerald-100 text-emerald-600",
    points: [
      "Battery capacity",
      "Technology types",
      "Backup & usage",
    ],
    linkText: "Explore Battery",
    linkUrl: "/service/explore-battery",
  },
  {
    title: "EV Charging",
    subtitle: "Charge your electric vehicle",
    description: "Compare charging speeds, smart features, and ways to use your solar setup more effectively for everyday EV driving.",
    detail: "A home charger can make everyday charging more convenient. Your vehicle, available electrical capacity and parking arrangement help determine which charger and features are appropriate.",
    goodFit: "Households with off-street parking and a plug-in vehicle",
    image: "https://plus.unsplash.com/premium_photo-1664283228678-b1da10cd249e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGV2JTIwY2hhcmdpbmd8ZW58MHx8MHx8fDA%3D",
    imageAlt: "Bright modern home interior",
    icon: Zap,
    iconStyle: "bg-sky-100 text-sky-600",
    points: [
      "Charger speeds",
      "Smart features",
      "Solar pairing",
    ],
    linkText: "Explore EV Charging",
    linkUrl: "/service/explore-evcharging",
  },
  {
    title: "Heat Pumps",
    subtitle: "Efficient hot water",
    description: "See how heat-pump hot water systems work, how they compare with gas or electric systems, and what may qualify for rebates.",
    detail: "When replacing a hot-water system, compare household capacity, installation requirements and running costs. Available incentives can vary by location and eligibility.",
    goodFit: "Households planning a hot-water replacement or efficiency upgrade",
    image: "https://plus.unsplash.com/premium_photo-1663047170515-66632d2a374d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhlYXQlMjBwdW1wfGVufDB8fDB8fHww",
    imageAlt: "Homeowners discussing clean energy options with an installer",
    icon: Droplets,
    iconStyle: "bg-amber-100 text-amber-600 ",
    points: [
      "Efficiency gains",
      "Running costs",
      "Rebates",
    ],
    linkText: "Explore Heat Pumps",
    linkUrl: "/service/explore-heatpumps",
  },
  {
    title: "Air Conditioning",
    subtitle: "Heating & cooling",
    description: "Explore efficient climate control options for comfort, running costs, and how systems work alongside the rest of your home energy setup.",
    detail: "Room size, insulation and how you use each space influence system selection. Efficiency ratings and operating modes can help you compare options beyond the upfront price.",
    goodFit: "Homes upgrading an older system or improving year-round comfort",
    image: "https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    imageAlt: "Technician inspecting a residential rooftop",
    icon: Snowflake,
    iconStyle: "bg-emerald-100 text-emerald-600",
    points: [
      "Cooling options",
      "Efficiency ratings",
      "Smart control",
    ],
    linkText: "Explore Air Conditioning",
    linkUrl: "/service/explore-airconditionar",
  },
  {
    title: "Inverters",
    subtitle: "Convert power for your home",
    description: "Learn how inverters support performance, backup capability, and compatibility with solar and battery systems across different loads.",
    detail: "Inverter choice affects how solar and storage components work together. Check system sizing, equipment compatibility and whether backup power is part of your requirements.",
    goodFit: "Solar or battery projects where component compatibility matters",
    image: "https://plus.unsplash.com/premium_photo-1671808063278-5ffee0bb3db7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludmVydGVyfGVufDB8fDB8fHww",
    imageAlt: "Solar installer discussing a home energy installation",
    icon: Zap,
    iconStyle: "bg-blue-100 text-blue-700",
    points: [
      "Inverter types",
      "Sizing",
      "Battery compatibility",
    ],
    linkText: "Explore Inverters",
    linkUrl: "/service/explore-inverters",
  },
];
export default function AllServices() {

  const [activeService, setActiveService] = useState(solutions[0]);
  const ActiveIcon = activeService.icon;

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveService((currentService) => {
        const currentIndex = solutions.findIndex(
          (service) => service.linkUrl === currentService.linkUrl,
        );
        return solutions[(currentIndex + 1) % solutions.length];
      });
    }, 6000);

    return () => window.clearInterval(rotationTimer);
  }, []);

  return (
    <section className="relative overflow-hidden  bg-slate-50 py-12 sm:py-14" id="all-services">
      <div className="pointer-events-none absolute -left-16 top-20 h-100 w-100 rounded-full bg-amber-400/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 top-25 h-150 w-100 rounded-full bg-orange-500/12 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-amber-600">Home energy guide</p>
          <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-5xl">
            Explore <span className="text-amber-500">your energy options</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-slate-600">
            Select a solution to see what it does, what to consider, and whether it could suit your home.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[290px_minmax(0,1fr)] lg:items-stretch">
          <div className="flex min-h-125 min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 shadow-[0_12px_30px_rgba(15,23,42,0.03)] lg:border-0 lg:bg-transparent lg:shadow-none">
            {solutions.map((item, index) => {
              const isActive = activeService.linkUrl === item.linkUrl;
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.linkUrl}
                  type="button"
                  onClick={() => setActiveService(item)}
                  aria-pressed={isActive}
                  className={`group w-full cursor-pointer px-4 py-4 text-left transition-all duration-200 ${isActive
                    ? "rounded-2xl border border-amber-400 bg-white text-amber-600 shadow-[0_10px_25px_rgba(245,158,11,0.12)]"
                    : "border-b border-slate-200/80 text-slate-700 hover:bg-white/60 hover:text-slate-900 last:border-b-0"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconStyle}`}
                    >
                      <ItemIcon className="h-5 w-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base font-semibold">{item.title}</span>
                        <span className="text-[10px] font-bold tracking-[0.18em] text-slate-300">
                          0{index + 1}
                        </span>
                      </div>
                      <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.12em] text-slate-500">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeService.linkUrl}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative min-h-115 min-w-0 w-full overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(15,23,42,0.24)]"
          >
            <img
              src={activeService.image}
              alt={activeService.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-br from-slate-950/75 via-slate-950/55 to-slate-950/20" />

            <div className="relative z-10 flex h-full flex-col p-5 sm:p-7">
              <div className="mt-4 flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${activeService.iconStyle}`}
                >
                  <ActiveIcon className="h-6 w-6" />
                </span>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-white/80">
                    {activeService.subtitle}
                  </div>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-4xl">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid min-w-0 gap-6 px-3 lg:grid-cols-2">
                <div className="min-w-0">
                  <p className="text-base leading-7 tracking-wide text-white sm:text-lg">
                    {activeService.description}
                  </p>
                  <p className="mt-4 text-base leading-6 text-white/80">
                    {activeService.detail}
                  </p>

                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-300/30 bg-black/25 p-3 backdrop-blur-sm ring-1 ring-white/5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <p className="text-sm leading-5 text-white/90">
                      <span className="font-bold text-amber-400">Worth exploring if:</span>{" "}
                      {activeService.goodFit}
                    </p>
                  </div>
                </div>

                <div className="min-w-0 rounded-2xl border-l border-slate-400/70 bg-slate-950/10 p-6 backdrop-blur-[2px]">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-white/75">
                    Things to compare
                  </p>
                  <ul className="space-y-3">
                    {activeService.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm font-medium text-white"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-[11px] leading-5 text-amber-300">
                    Compare options based on your home, usage and budget.
                  </p>

                  <Link
                    to={activeService.linkUrl}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 active:scale-95"
                  >
                    {activeService.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
