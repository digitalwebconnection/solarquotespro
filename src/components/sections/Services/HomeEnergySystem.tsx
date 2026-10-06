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
  },
  {
    title: "Smart inverter",
    description: "Convert and manage electricity between your solar panels, battery and home.",
    icon: Zap,
    link: "/service/explore-inverters",
    color: "text-sky-600",
  },
];

const waysToUseEnergy = [
  {
    title: "Home battery",
    description: "Save surplus solar generation and use it when panels aren't producing.",
    icon: BatteryCharging,
    link: "/service/explore-battery",
    color: "text-emerald-600",
  },
  {
    title: "EV charging",
    description: "Charge at home and make use of solar generation when it's available.",
    icon: CarFront,
    link: "/service/explore-evcharging",
    color: "text-blue-600",
  },
  {
    title: "Hot water heat pump",
    description: "Use efficient heat-pump technology to meet your household hot-water needs.",
    icon: Droplets,
    link: "/service/explore-heatpumps",
    color: "text-cyan-600",
  },
  {
    title: "Heating & cooling",
    description: "Heat and cool your home while considering the energy your system can provide.",
    icon: Snowflake,
    link: "/service/explore-airconditionar",
    color: "text-indigo-600",
  },
];

export default function HomeEnergySystem() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-20">
      <div className="pointer-events-none absolute -right-24 top-0 h-100 w-100 rounded-full bg-amber-400/12 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-400/14 blur-[112px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.90fr_1.15fr] lg:items-center lg:gap-16 lg:px-8">
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
          <p className="mt-6 max-w-xl text-base leading-6 text-slate-700">
            Your home's energy technologies don't have to work in isolation. Solar panels can
            generate electricity during the day, while an inverter helps direct that energy to
            the places it is needed.
          </p>
          <p className="mt-4 max-w-xl text-base leading-6 text-slate-700">
            When generation is greater than your immediate use, a home battery may store some
            energy for later. You may also use electricity to charge an EV, heat water, or run
            heating and cooling—depending on your equipment, usage and when energy is available.
          </p>
          <p className="mt-4 max-w-xl text-base leading-6 text-slate-700">
            There is no one-size-fits-all setup, and not every home needs every technology. Start
            with how your household uses energy, then consider which solutions suit your home
            today and your plans for the future.
          </p>
          <Link
            to="#energy-options"
            className="group mt-8 inline-flex text-sm items-center gap-2 font-semibold px-4 py-2.5 border border-amber-500 rounded-full text-slate-900 transition-colors hover:text-amber-600  "
          >
            Explore Your Energy Options
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          aria-label="Solar energy is managed by a smart inverter and flows to your home. Depending on your setup, energy may be stored in a battery or used for EV charging, hot water, heating and cooling."
          className="relative"
        >
          <div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {supply.map(({ title, description, icon: Icon, link, color }) => (
                <Link
                  key={title}
                  to={link}
                  className="group flex items-start gap-3 "
                >
                  <Icon aria-hidden="true" className={`mt-0.5 h-6 w-6 shrink-0 ${color}`} strokeWidth={1.8} />
                  <span>
                    <span className="font-serif font-bold text-slate-950 decoration-amber-500 decoration-2 underline-offset-4 group-hover:underline">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{description}</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="my-4 flex justify-center">
              <ArrowDown aria-hidden="true" className="h-5 w-5 text-amber-600" />
            </div>

            <div className="flex justify-center items-center text-left gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <House aria-hidden="true" className="h-7 w-7 text-amber-700" strokeWidth={1.7} />
              </span>
              <div>
                <p className="mt-2 font-serif text-lg font-bold text-slate-950">Your home</p>
                <p className="mt-1 text-sm text-slate-600">Where energy is managed and used</p></div>
            </div>

            <div className="my-4 flex justify-center">
              <ArrowDown aria-hidden="true" className="h-5 w-5 text-amber-600" />
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {waysToUseEnergy.map(({ title, description, icon: Icon, link, color }) => (
                <Link
                  key={title}
                  to={link}
                  className="group flex items-start gap-3 border-t border-slate-200 pt-4 "
                >
                  <Icon aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${color}`} strokeWidth={1.8} />
                  <span>
                    <span className="font-serif font-bold text-slate-950 decoration-amber-500 decoration-2 underline-offset-4 group-hover:underline">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
