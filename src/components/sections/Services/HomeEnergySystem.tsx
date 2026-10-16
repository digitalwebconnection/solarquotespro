import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  CarFront,
  Droplets,
  House,
  Snowflake,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const supply = [
  {
    title: "Solar energy",
    description: "Generate electricity from sunlight and power your home during the day.",
    icon: Sun,
    link: "/service/explore-solar",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    title: "Smart inverter",
    description: "Convert and manage electricity between your solar panels, battery and home.",
    icon: Zap,
    link: "/service/explore-inverters",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
];

const waysToUseEnergy = [
  {
    title: "Home battery",
    description: "Save surplus solar generation and use it when panels aren't producing.",
    icon: BatteryCharging,
    link: "/service/explore-battery",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "EV charging",
    description: "Charge at home and make use of solar generation when it's available.",
    icon: CarFront,
    link: "/service/explore-evcharging",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Hot water heat pump",
    description: "Use efficient heat-pump technology to meet your household hot-water needs.",
    icon: Droplets,
    link: "/service/explore-heatpumps",
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },
  {
    title: "Heating & cooling",
    description: "Heat and cool your home while considering the energy your system can provide.",
    icon: Snowflake,
    link: "/service/explore-airconditionar",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
];

export default function HomeEnergySystem() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="pointer-events-none absolute -right-24 top-0 h-100 w-100 rounded-full bg-amber-400/12 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-400/14 blur-[112px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.80fr_1.20fr] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl capitalize lg:text-5xl text-slate-900">
            One home.{" "}
            <span className="text-amber-500">
              multiple energy solutions.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base tracking-wide text-slate-600">
            Your home's energy technologies don't have to work in isolation. Solar panels can
            generate electricity during the day, while an inverter helps direct that energy to
            the places it is needed.
          </p>
          <p className="mt-3 max-w-xl text-base tracking-wide  text-slate-600">
            When generation is greater than your immediate use, a home battery may store some
            energy for later. You may also use electricity to charge an EV, heat water, or run
            heating and cooling—depending on your equipment, usage and when energy is available.
          </p>
          {/* <p className="mt-4 max-w-xl text-base leading-6 text-slate-700">
            There is no one-size-fits-all setup, and not every home needs every technology. Start
            with how your household uses energy, then consider which solutions suit your home
            today and your plans for the future.
          </p> */}

        </motion.div>

        <motion.div
          id="energy-options"
          role="group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          aria-label="Solar energy is managed by a smart inverter and flows to your home. Depending on your setup, energy may be stored in a battery or used for EV charging, hot water, heating and cooling."
          className="relative scroll-mt-24"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
            {/* LEFT: Supply */}
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-amber-700 sm:col-span-2 lg:text-center">
                Makes energy
              </p>
              {supply.map(({ title, description, icon: Icon, link, color, bg }) => (
                <Link
                  key={title}
                  to={link}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-amber-300 hover:shadow-md"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                    <Icon aria-hidden="true" className={`h-5 w-5 ${color}`} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-serif font-bold text-slate-950 group-hover:underline decoration-amber-500 decoration-2 underline-offset-4">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-slate-600">{description}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* CENTER: Home */}
            <div className="flex flex-col items-center justify-center gap-2 py-4 text-center sm:col-span-2 lg:col-span-1 lg:py-0">
              <span className="flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600  ring-8 ring-amber-100 shadow-xl shadow-amber-500 mb-2 ">
                <House aria-hidden="true" className="h-8 w-8 text-white" strokeWidth={1.6} />
              </span>
              <p className="font-serif text-lg font-bold text-slate-950">Your home</p>
              <p className="max-w-30 text-xs text-slate-600">Where energy is managed and used</p>
            </div>

            {/* RIGHT: Uses */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-emerald-700 text-center">
                Stores &amp; uses energy
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {waysToUseEnergy.map(({ title, description, icon: Icon, link, color, bg }) => (
                  <Link
                    key={title}
                    to={link}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 transition hover:border-emerald-300 hover:shadow-md"
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                      <Icon aria-hidden="true" className={`h-4.5 w-4.5 ${color}`} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-serif text-sm font-bold text-slate-950 group-hover:underline decoration-amber-500 decoration-2 underline-offset-4">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-600">{description}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center -mt-3">
        <a
          href="#all-services"
          className="group  inline-flex text-sm items-center gap-2 font-semibold px-5 py-2.5 border border-amber-500 bg-linear-to-r from-amber-500 to-amber-400 rounded-full text-white   hover:text-slate-50 focus-visible:outline- shadow-xl/60 shadow-amber-500/50 hover:shadow-xl/40 focus-visible:outline-offset-4 focus-visible:outline-amber-700 transition-shadow duration-200 active:scale-97"
        >
          Explore Your Energy Options
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
