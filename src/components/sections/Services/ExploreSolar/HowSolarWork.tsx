import { Sun, Zap, PanelsTopLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const HowSolarWorks = () => {
    const solarWorkingSteps = [
        {
            number: "01",
            title: "Sunlight Hits the Cell",
            description:
                "Silicon solar cells absorb energy from sunlight and begin the electricity-generation process.",
            icon: Sun,
            bg: "bg-amber-50",
            iconBg: "bg-amber-100/50",
            iconColor: "text-amber-500",
            border: "border-amber-200",
            hover:
                "hover:border-amber-400 hover:bg-amber-100/20 hover:-translate-y-2",
        },
        {
            number: "02",
            title: "Electrons Start Moving",
            description:
                "Energy from sunlight excites electrons inside the cell, creating an electrical current.",
            icon: Zap,
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            border: "border-blue-200",
            hover:
                "hover:border-blue-400 hover:bg-blue-100/20 hover:-translate-y-2",
        },
        {
            number: "03",
            title: "Electricity Is Collected",
            description:
                "Metal contacts collect the current while multiple cells work together to form a solar panel.",
            icon: PanelsTopLeft,
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-yellow-500",
            border: "border-amber-200",
            hover:
                "hover:border-amber-400 hover:bg-amber-100/20 hover:-translate-y-2",
        },
        {
            number: "04",
            title: "Power Reaches Your Home",
            description:
                "Multiple panels form an array, and an inverter converts DC electricity into usable AC power.",
            icon: Home,
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
            border: "border-emerald-200",
            hover:
                "hover:border-emerald-400 hover:bg-emerald-100/20 hover:-translate-y-2",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-slate-50 py-14">

            <div className="absolute -left-16 top-15 h-60 w-60 rounded-full bg-amber-300/30 blur-[120px]" />
            <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
                        Simple process
                    </p>
                    <h2 className="mb-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                        How Do Solar Panels Work?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Solar panels convert sunlight into electricity through the{" "}
                        <span className="font-semibold text-slate-800">photovoltaic (PV) effect</span>.
                        Sunlight gives energy to electrons inside solar cells, creating electrical current.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    {solarWorkingSteps.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`rounded-xl border bg-white p-6 shadow-lg shadow-slate-200/70 ${item.bg} ${item.border} ${item.hover} transition-all duration-300 group hover:shadow-xl`}
                            >
                                <div
                                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                                >
                                    <Icon className="transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <span className="text-sm font-bold text-amber-500">{item.number}</span>
                                <h3 className="mt-2 mb-3 text-xl font-bold text-blue-950">{item.title}</h3>
                                <p className="leading-relaxed text-slate-600">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowSolarWorks;