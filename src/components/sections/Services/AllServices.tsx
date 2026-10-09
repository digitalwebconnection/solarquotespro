import { useEffect, useState } from "react";
import { Sun, BatteryCharging, Zap, Snowflake, Droplets, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ac from "../../../assets/images/SolarServices/ac.webp";
import inverter from "../../../assets/images/SolarServices/inverter.webp";
import battery from "../../../assets/images/SolarServices/battery.webp";
import evcharger from "../../../assets/images/SolarServices/evcharger.webp";
import heatpump from "../../../assets/images/SolarServices/heatpump.webp";
import solar from "../../../assets/images/SolarServices/solar.webp";

const solutions = [
  {
    title: "Solar Energy",
    subtitle: "Rooftop solar",
    description: "Explore rooftop solar, compare panel and system options, and learn how to choose a setup that suits your home.",
    detail: "Roof space, orientation and electricity use all affect system design. Compare expected generation, equipment and installation inclusions before choosing a quote.",
    goodFit: "Homes with suitable roof space and regular daytime energy use",
    image: solar,
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
    subtitle: "Store solar power",
    description: "Find out how home batteries store energy, compare usable capacity and backup options, and see how storage can complement solar.",
    detail: "Choose capacity around your household’s energy use and the appliances you want to support. Compare usable storage, backup capability and system compatibility.",
    goodFit: "Solar homes looking to use more of their own generation after sunset",
    image: battery,
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
    subtitle: "Charge at home",
    description: "Compare home EV charger speeds and smart features, and learn how solar-aware charging can fit your daily routine.",
    detail: "Your vehicle, parking setup and available electrical capacity help determine the right charger. Consider charging speed, scheduling and solar integration.",
    goodFit: "Households with off-street parking and a plug-in vehicle",
    image: evcharger,
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
    description: "Discover how heat-pump hot water systems work and compare their efficiency, installation needs and available incentives.",
    detail: "When replacing a hot-water system, consider household capacity, placement and running costs. Rebates and eligibility vary by location.",
    goodFit: "Households planning a hot-water replacement or efficiency upgrade",
    image: heatpump,
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
    title: "Heating & Cooling",
    subtitle: "Year-round comfort",
    description: "Explore heating and cooling options that balance year-round comfort, energy use and running costs.",
    detail: "Room size, insulation and how you use each space affect system choice. Compare efficiency ratings and operating modes as well as upfront cost.",
    goodFit: "Homes upgrading an older system or improving year-round comfort",
    image: ac,
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
    subtitle: "Convert solar power",
    description: "Understand inverter types and how they convert solar power for home use, storage and backup.",
    detail: "Compare inverter capacity, system sizing and compatibility with your panels and battery. Check whether backup power meets your needs.",
    goodFit: "Solar or battery projects where component compatibility matters",
    image: inverter,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = solutions[activeIndex];
  const ActiveIcon = activeService.icon;

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % solutions.length);
    }, 6000);

    return () => window.clearInterval(rotationTimer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16" id="all-services">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-130 w-130 rounded-full bg-amber-200/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-130 w-130 rounded-full bg-emerald-200/20 blur-[100px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-amber-700">Home energy guide</p>
            <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-5xl leading-15 capitalize">
              Explore{" "}
              <span className="bg-linear-to-r from-amber-500 via-orange-500 to-emerald-600 bg-clip-text text-transparent">
                home energy
              </span>{" "}
              solutions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-slate-600">
              Compare options and find what fits your home.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-stretch">
            <div className="flex min-h-125 min-w-0 flex-col overflow-hidden rounded-2xl relative border border-slate-200 bg-slate-50/80 lg:border-0 lg:bg-transparent lg:shadow-none">
              <div aria-hidden="true" className="pointer-events-none absolute left-0 top-12 z-0 h-64 w-40 rounded-full bg-linear-to-br from-amber-300/35 via-orange-300/20 to-blue-600/30 blur-[90px]" />
              {solutions.map((item, index) => {
                const ItemIcon = item.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.linkUrl}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group relative z-10 w-full cursor-pointer px-4 py-4 text-left transition-all duration-200 ${isActive
                      ? "rounded-2xl border border-amber-300 bg-linear-to-r from-white via-amber-50 to-white text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.12)]"
                      : "border-b border-slate-200/80 text-slate-700 hover:bg-white/60 hover:text-slate-900 last:border-b-0"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconStyle}`}>
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

            <div className="relative min-h-115 min-w-0 w-full overflow-hidden rounded-2xl bg-slate-900 lg:shadow-lg lg:shadow-amber-900/20">
              <img
                src={activeService.image}
                alt={activeService.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-slate-950/10" />

              <div className="relative z-10 flex h-full min-h-115 flex-col p-5 sm:p-7">
                <div className="mt-4 flex items-center gap-3">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${activeService.iconStyle}`}>
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

                    <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-300/30 bg-black/40 p-3 ring-1 ring-white/5">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                      <p className="text-sm leading-5 text-white/90">
                        <span className="font-bold text-amber-300">A good fit for:</span>{" "}
                        {activeService.goodFit}
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 rounded-2xl bg-slate-950/30 p-6">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-white/75">
                      What to compare
                    </p>
                    <ul className="space-y-3">
                      {activeService.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-white">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-5 text-[11px] leading-5 text-amber-300">
                      Compare options against your home, priorities and budget.
                    </p>

                    <Link
                      to={activeService.linkUrl}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-amber-500/25 transition-colors hover:bg-amber-400 active:scale-95"
                    >
                      {activeService.linkText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}