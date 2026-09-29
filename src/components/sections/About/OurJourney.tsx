import { Zap, ShieldCheck, BatteryCharging, Trophy } from "lucide-react";
import { StackedJourney, type JourneyStep } from "../../ui/stacked-journey";

const steps: JourneyStep[] = [
  {
    year: "2018",
    title: "Started with Transparency",
    icon: Zap,
    color: "amber",
    desc: "True Solar Quote began with the belief that choosing solar should be based on clear information rather than confusing sales conversations. The platform was established to simplify the solar journey by helping Australian homeowners understand system sizes, electricity generation, pricing structures, installation considerations and the factors that influence long-term solar value. The focus from the beginning was on creating a more transparent and informed approach to researching residential energy solutions."
  },

  {
    year: "2020",
    title: "Building a Trusted Network",
    icon: ShieldCheck,
    color: "emerald",
    desc: "As interest in residential solar continued to grow, the need for reliable and suitable installation providers became increasingly important. True Solar Quote developed its network model to help bridge the gap between homeowners researching solar and professionals capable of delivering suitable energy solutions. By considering factors such as location, property requirements and energy needs, the platform created a more structured way for homeowners to discover and compare potential providers."
  },

  {
    year: "2023",
    title: "Beyond Solar",
    icon: BatteryCharging,
    color: "sky",
    desc: "The modern home-energy landscape began extending beyond solar panels alone. Homeowners increasingly explored battery storage, electric vehicle charging, hot-water heat pumps and other technologies designed to improve energy efficiency and flexibility. True Solar Quote expanded its educational and comparison resources to reflect this broader energy ecosystem, helping homeowners understand how different technologies work individually and how they can potentially operate together as part of a more integrated home-energy strategy."
  },

  {
    year: "2026",
    title: "A Smarter Way to Compare",
    icon: Trophy,
    color: "orange",
    desc: "Today, True Solar Quote brings research, education, comparison and provider connections together within a single platform. Instead of approaching an energy decision without sufficient information, homeowners can explore technologies, understand important considerations, compare available options and request competitive quotes from relevant professionals. The goal is to make the decision-making process more structured, transparent and easier to navigate as Australian households consider the next generation of home-energy solutions."
  },
];
export default function OurJourney() {
  return (
    <section className="relative z-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-2xl px-4 pb-5 pt-20 text-center">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold bg-linear-to-r from-amber-300 from-35% to-emerald-400 bg-clip-text text-transparent">
          Our Journey So Far
        </h2>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          From a small local team to one of Australia's most trusted solar networks.
        </p>
      </div>
      <StackedJourney steps={steps} />
    </section>
  );
}