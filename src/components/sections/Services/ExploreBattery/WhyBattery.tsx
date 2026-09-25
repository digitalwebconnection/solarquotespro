import { Moon, Clock3, Zap, Network } from "lucide-react";
import { motion } from "framer-motion";

const content = [
    {
        id: 1,
        title: "Use Solar After Sunset",
        highlight: "Store excess daytime solar and use it during the evening or night.",
        description:
            "Instead of sending all surplus solar electricity to the grid, a battery can store some of it for later use. This can reduce the amount of electricity you need to purchase from the grid.",
        icon: Moon,
        accent: "blue",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2hEIB6HmAIc91mb_eONdd-i8iYlDzxmsu-GmPd1G0A&s",
    },
    {
        id: 2,
        title: "Manage Time-of-Use Pricing",
        highlight: "Use stored energy when electricity prices are higher.",
        description:
            "With time-of-use electricity plans, electricity can cost more during high-demand periods. A suitably sized battery can supply some of your home's electricity during these expensive periods.",
        icon: Clock3,
        accent: "amber",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oUaORB6YrwXjO3Zw93v0PHDmk97Nitv52VCZN75WbA&s",
    },
    {
        id: 3,
        title: "Backup Power",
        highlight: "Keep important circuits running during an outage.",
        description:
            "Some battery systems can provide backup power when the grid goes down. Depending on the system, backup may be designed for selected essential loads rather than the entire home.",
        icon: Zap,
        accent: "emerald",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhJTodF7HURodWcNRGdzEMDOBc4y4v3TtdbVEoj_wiQ&s=10",
    },
    {
        id: 4,
        title: "Virtual Power Plants",
        highlight: "Your battery can potentially become part of a larger energy network.",
        description:
            "Virtual Power Plants (VPPs) connect multiple battery systems so their combined energy storage can support the electricity grid. Participating systems may receive financial benefits depending on the program.",
        icon: Network,
        accent: "violet",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7Zn73uPJhpM8b6iCWX3k3tmyhKwxRujvw2t6kmWGgg&s",
    },
];

// Accent themes, kept as static class strings so Tailwind's compiler can see them
const accentStyles: Record<string, { border: string; iconBg: string; iconText: string; glow: string }> = {
    blue: {
        border: "border-blue-200",
        iconBg: "bg-blue-50 group-hover:bg-blue-700/80",
        iconText: "text-blue-600 group-hover:text-blue-300",
        glow: "group-hover:shadow-blue-400/50",
    },
    amber: {
        border: "border-amber-200",
        iconBg: "bg-amber-50 group-hover:bg-orange-500/80",
        iconText: "text-amber-600 group-hover:text-orange-300",
        glow: "group-hover:shadow-orange-300/50",
    },
    emerald: {
        border: "border-emerald-200",
        iconBg: "bg-emerald-50 group-hover:bg-emerald-500/80",
        iconText: "text-emerald-600 group-hover:text-emerald-300",
        glow: "group-hover:shadow-emerald-500/50",
    },
    violet: {
        border: "border-violet-200",
        iconBg: "bg-violet-50 group-hover:bg-amber-500/80",
        iconText: "text-violet-600 group-hover:text-amber-300",
        glow: "group-hover:shadow-amber-500/50",
    },
};

const WhyBattery = () => {
    return (
        <section className="relative py-16 bg-slate-50 overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute top-10 left-1/3 w-[520px] h-[400px] bg-amber-300/10 rounded-full blur-[120px]"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900">
                        Why Get a Home Battery?
                    </h2>
                    <p className="text-lg text-slate-600 leading-7 mt-4">
                        Solar panels produce electricity when the sun is shining, but your
                        home's energy use doesn't stop when the sun goes down.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {content.map((step, index) => {
                        const Icon = step.icon;
                        const accent = accentStyles[step.accent];
                        return (
                            <motion.article
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className={`group relative overflow-hidden flex flex-col bg-white rounded-xl border ${accent.border} p-6 shadow-sm hover:shadow-lg ${accent.glow} hover:-translate-y-1 transition-all duration-300`}
                            >
                                <div className="absolute inset-0 w-full h-full z-0">
                                    <img
                                        src={step.image}
                                        alt=""
                                        className="w-full h-full object-cover opacity-0 group-hover:opacity-80 duration-500 transition-all ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="relative z-10">
                                    <div
                                        className={`inline-flex w-fit items-center justify-center rounded-lg p-2.5 mb-5 backdrop-blur-md transition-colors duration-300 ${accent.iconBg}`}
                                    >
                                        <Icon className={`w-6 h-6 transition-colors duration-300 ${accent.iconText}`} aria-hidden="true" />
                                    </div>

                                    <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-white mb-2 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-slate-700 group-hover:text-slate-100 mb-3 transition-colors duration-300">
                                        {step.highlight}
                                    </p>
                                    <p className="text-sm text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyBattery;