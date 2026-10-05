import {
    AnimatePresence,
    motion,
    MotionConfig,
    useScroll,
    useSpring,
} from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    Globe,
    Home,
    PanelsTopLeft,
    PlugZap,
    Sun,
    type LucideIcon,
    Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { solarRoofImg, solarSavingsImg } from "../../../../assets/images";

const systemComponents = [
    {
        number: "01",
        title: "Solar PV Panels",
        icon: Sun,
        description:
            "Solar panels are the starting point of the system. They absorb sunlight and convert it into DC electricity through the photovoltaic effect.",
    },
    {
        number: "02",
        title: "DC Isolator",
        icon: PlugZap,
        description:
            "The DC isolator provides a safe way to disconnect the solar panels from the inverter when the system needs to be isolated or maintained.",
    },
    {
        number: "03",
        title: "Solar Inverter",
        icon: Zap,
        description:
            "The inverter receives DC electricity from the solar array and converts it into AC electricity that can be used by the home.",
    },
    {
        number: "04",
        title: "AC Isolator",
        icon: PlugZap,
        description:
            "The AC isolator allows the inverter to be disconnected from the home's AC electrical system when required.",
    },
    {
        number: "05",
        title: "Switchboard",
        icon: Home,
        description:
            "The switchboard distributes electricity throughout the home and connects the solar system with the building's electrical circuits.",
    },
    {
        number: "06",
        title: "Consumption Monitoring",
        icon: BarChart3,
        description:
            "Monitoring helps track how much electricity the home is consuming and how much electricity the solar system is generating.",
    },
    {
        number: "07",
        title: "Grid Meter",
        icon: Globe,
        description:
            "The grid meter records electricity flowing between the property and the electricity grid, including imported and exported energy.",
    },
];

const powerEnergyContent = [
    {
        title: "Power",
        unit: "kW",
        question: "How Fast?",
        description:
            "Power describes the rate at which electricity is being generated or consumed at a particular moment.",
        example:
            "A 6.6 kW solar system can produce up to around 6.6 kilowatts of power under suitable conditions.",
        icon: Zap,
        iconBg: "bg-orange-400/10",
        iconColor: "text-orange-500",
        image: solarRoofImg,
        imageAlt: "Rooftop solar panels generating electricity",
    },
    {
        title: "Energy",
        unit: "kWh",
        question: "How Much?",
        description:
            "Energy describes the total amount of electricity generated, stored or consumed over a period of time.",
        example:
            "A home might use 20 kWh of electricity in a day, while a battery may store 10 kWh of energy.",
        icon: BarChart3,
        iconBg: "bg-blue-400/10",
        iconColor: "text-blue-600",
        image: solarSavingsImg,
        imageAlt: "Solar energy helping power a home over time",
    },
];

type Stage = {
    label: string;
    icon: LucideIcon;
    textColor: string;
    borderColor: string;
    title: string;
    text: string;
};

const stages: Stage[] = [
    {
        label: "Sunlight",
        icon: Sun,
        textColor: "text-amber-400",
        borderColor: "border-amber-400",
        title: "Sunlight reaches your roof",
        text: "Sunlight arrives as a stream of photons, each carrying a small packet of energy.",
    },
    {
        label: "Solar Cell",
        icon: PanelsTopLeft,
        textColor: "text-blue-500",
        borderColor: "border-blue-500",
        title: "Photons free up electrons",
        text: "Inside each silicon cell, incoming photons knock electrons loose. Their movement creates an electric current.",
    },
    {
        label: "Solar Panel",
        icon: PanelsTopLeft,
        textColor: "text-cyan-500",
        borderColor: "border-cyan-500",
        title: "Cells combine into DC power",
        text: "Many cells are wired together in a panel, and panels are wired into an array, producing a usable flow of DC electricity.",
    },
    {
        label: "Inverter",
        icon: Zap,
        textColor: "text-orange-400",
        borderColor: "border-orange-400",
        title: "DC becomes AC",
        text: "The inverter converts DC electricity into AC, which is the type your home's appliances and wiring run on.",
    },
    {
        label: "Home",
        icon: Home,
        textColor: "text-emerald-500",
        borderColor: "border-emerald-500",
        title: "Power for your home",
        text: "AC electricity flows through your switchboard to run your appliances. Any surplus can be exported to the grid.",
    },
];

const SolarAnatomy = () => {
    const [active, setActive] = useState(0);
    const [flippedPowerEnergyCards, setFlippedPowerEnergyCards] = useState([false, false]);
    const current = stages[active];

    const stepsRef = useRef<HTMLDivElement>(null);
    const togglePowerEnergyCard = (cardIndex: number) => {
        setFlippedPowerEnergyCards((flippedCards) =>
            flippedCards.map((flipped, index) =>
                index === cardIndex ? !flipped : flipped,
            ),
        );
    };

    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ["start 30%", "end 60%"],
    });

    const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

    return (
        <>
            <section className="w-full pt-12 pb-8 bg-slate-50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-500 mb-4">
                            Understanding Solar Systems
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                            Anatomy of a Solar Power System
                        </h2>
                        <p className="text-lg text-slate-600 leading-7">
                            A solar power system is more than just a collection of panels. Several electrical components work together to generate, convert, distribute and monitor electricity.
                        </p>
                    </div>

                    <div ref={stepsRef} className="max-w-5xl relative pl-8">
                        <div className="absolute z-0 left-67 top-3 bottom-12 w-1 bg-slate-200" />
                        <motion.div
                            style={{ scaleY: fill }}
                            className="absolute z-0 left-67 top-3 bottom-12 w-1 origin-top bg-linear-to-b from-emerald-600 via-blue-800 to-amber-400"
                        />
                        {systemComponents.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    key={item.number}
                                    className="flex items-center relative z-1 gap-12 pb-12 group"
                                >
                                    <div className="text-2xl md:text-3xl font-black text-slate-200 group-hover:text-blue-500/55 duration-200 transition-colors">
                                        {item.number}
                                    </div>
                                    <div className="flex flex-col">
                                        <Icon className="w-7 h-7 text-blue-600 mb-2" />
                                        <h3 className="text-xl w-36 font-bold text-blue-950">{item.title}</h3>
                                    </div>
                                    <div>
                                        <p className="text-slate-600 leading-7 max-w-2xl pl-auto">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <MotionConfig >
                    <div className="relative mt-12 w-full overflow-hidden py-10 text-white">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-85"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1730807908064-c087959dd52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvbGFyJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D')",
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-slate-950/80 backdrop-blur-[1.5px]" />
                        <div className="relative z-10 mx-auto max-w-5xl px-6">
                            <h3 className="mb-5 text-center text-xl font-bold md:text-2xl">
                                From Sunlight to Electricity
                            </h3>
                            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-4">
                                {stages.map((stage, i) => {
                                    const Icon = stage.icon;
                                    const isActive = i === active;
                                    return (
                                        <div key={stage.label} className="contents">
                                            <button
                                                type="button"
                                                onClick={() => setActive(i)}
                                                aria-pressed={isActive}
                                                className={`flex w-28 flex-col items-center gap-2 rounded-lg px-2 py-3 cursor-pointer transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 ${isActive ? "bg-white/10" : "hover:bg-white/5"
                                                    }`}
                                            >
                                                <span
                                                    className={`flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300 ${isActive ? `${stage.borderColor}` : "border-slate-500"
                                                        }`}
                                                >
                                                    <Icon
                                                        className={`h-6 w-6 transition-colors ${isActive ? `${stage.textColor}` : "text-slate-300"}`}
                                                    />
                                                </span>
                                                <span
                                                    className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-slate-300"
                                                        }`}
                                                >
                                                    {stage.label}
                                                </span>
                                            </button>
                                            {i < stages.length - 1 && (
                                                <ArrowRight
                                                    aria-hidden="true"
                                                    className="h-5 w-5 shrink-0 rotate-90 text-slate-500 md:rotate-0"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div
                                className="mx-auto mt-8 min-h-28 max-w-xl text-center"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current.label}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p
                                            className={` ${current.textColor} text-lg font-semibold `}
                                        >
                                            {current.title}
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-200">{current.text}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </MotionConfig>

                <div className="max-w-7xl px-8 pt-14 mx-auto">
                    <div className="max-w-3xl mb-10">
                        <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-500 mb-4">
                            Solar Fundamentals
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-5">
                            Power vs Energy
                        </h2>
                        <p className="text-lg text-slate-600 leading-8">
                            One of the most important concepts in solar is understanding the difference between power and energy. Although they are closely related, they describe two different things.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {powerEnergyContent.map((item, index) => {
                            const Icon = item.icon;
                            const isFlipped = flippedPowerEnergyCards[index];

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    onClick={() => togglePowerEnergyCard(index)}
                                    aria-label={`${isFlipped ? "Show" : "Reveal"} ${item.title} details`}
                                    aria-pressed={flippedPowerEnergyCards[index]}
                                    className="group w-full cursor-pointer rounded-lg text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 perspective-distant"
                                >
                                    <div
                                        className={`relative min-h-88 w-full transform-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180 ${isFlipped ? "rotate-y-180" : ""
                                            }`}
                                    >
                                        <div
                                            className="absolute inset-0 overflow-hidden rounded-lg shadow-md"
                                            style={{ backfaceVisibility: "hidden" }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.imageAlt}
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-sm">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                                                    {item.question}
                                                </p>
                                                <h3 className="mt-1 text-3xl font-bold">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-sm font-semibold text-white/80">
                                                    Measured in {item.unit}
                                                </p>
                                                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/75">
                                                    Hover or click to learn more
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="absolute inset-0 flex rotate-y-180 flex-col justify-center rounded-lg border border-slate-200 bg-white p-7 shadow-md backface-hidden sm:p-8"
                                        >
                                            <div className="mb-5 flex items-center gap-4">
                                                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg}`}>
                                                    <Icon className={item.iconColor} />
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl font-bold text-blue-950">{item.title}</h3>
                                                    <span className="font-bold text-orange-500">{item.unit}</span>
                                                </div>
                                            </div>
                                            <p className="mb-3 text-xl font-bold text-blue-900">
                                                {item.question}
                                            </p>
                                            <p className="mb-5 leading-7 text-slate-600">
                                                {item.description}
                                            </p>
                                            <p className="leading-7 text-slate-700">
                                                <span className="font-semibold">Example:</span> {item.example}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-14 py-7 max-w-2xl mx-auto shadow-black border-y border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
                            <div className="border-r border-slate-200 py-4 pr-2">
                                <p className="text-5xl font-black text-orange-500 mb-3">kW</p>
                                <p className="text-xl font-bold text-blue-950">How Fast?</p>
                                <p className="text-slate-500 mt-2">Rate of electricity generation or consumption</p>
                            </div>
                            <div className="py-4">
                                <p className="text-5xl font-black text-blue-600 mb-3">kWh</p>
                                <p className="text-xl font-bold text-blue-950">How Much?</p>
                                <p className="text-slate-500 mt-2">Amount of electricity over time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolarAnatomy;