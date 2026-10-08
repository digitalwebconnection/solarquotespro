import { useState } from "react";
import { BadgeCheck, House, Scale } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const topics = [
    {
        title: "Installer quality",
        subtitle: "Know who is preparing your quote.",
        description:
            "A solar system is a long-term investment, so the installer matters. Look beyond the offer and consider who will design and install your system.",
        details: ["Licensing and credentials", "Relevant experience", "Reliability and customer satisfaction"],
        icon: BadgeCheck,
        theme: {
            card: "border-amber-200/70 bg-amber-50/50 hover:border-amber-300/80",
            activeCard: "border-amber-300/80 bg-amber-100/45 shadow-sm",
            icon: "bg-amber-100/60 text-amber-700",
            activeIcon: "bg-amber-500 text-white",
            detail: "border-amber-200/70 bg-linear-to-br from-amber-100/60 via-amber-50/45 to-white",
            glow: "bg-amber-300/15",
            marker: "bg-amber-500",
        },
    },
    {
        title: "The needs of your home",
        subtitle: "Look beyond a one-size-fits-all system.",
        description:
            "The right system depends on how your home is built and how your household uses energy. Your details help installers suggest options suited to your circumstances.",
        details: ["Your roof and property", "Household energy use", "Location and available options"],
        icon: House,
        theme: {
            card: "border-emerald-200/70 bg-emerald-50/50 hover:border-emerald-300/80",
            activeCard: "border-emerald-300/80 bg-emerald-100/45 shadow-sm",
            icon: "bg-emerald-100/60 text-emerald-700",
            activeIcon: "bg-emerald-500 text-white",
            detail: "border-emerald-200/70 bg-linear-to-br from-emerald-100/60 via-emerald-50/45 to-white",
            glow: "bg-emerald-300/15",
            marker: "bg-emerald-500",
        },
    },
    {
        title: "What each quote includes",
        subtitle: "Compare the details, not only the total.",
        description:
            "The lowest price may not tell the whole story. Review what is included in each proposal to see how systems differ and what best meets your needs.",
        details: ["System size and equipment", "Pricing and available rebates", "What is included in each proposal"],
        icon: Scale,
        theme: {
            card: "border-blue-200/70 bg-blue-50/50 hover:border-blue-300/80",
            activeCard: "border-blue-300/80 bg-blue-100/45 shadow-sm",
            icon: "bg-blue-100/60 text-blue-700",
            activeIcon: "bg-blue-500 text-white",
            detail: "border-blue-200/70 bg-linear-to-br from-blue-100/60 via-blue-50/45 to-white",
            glow: "bg-blue-300/15",
            marker: "bg-blue-500",
        },
    },
];

export default function WhyChooseBenefits() {
    const [activeTopic, setActiveTopic] = useState(0);
    const selectedTopic = topics[activeTopic];

    return (
        <section className="relative overflow-hidden bg-slate-50  py-12 sm:py-14  lg:py-16">
            <div
                className="absolute -left-24 bottom-0 h-100 w-100 rounded-full bg-amber-300/15 blur-[120px]"
            />
            <div
                className={`absolute right-24 -top-20 h-100 w-100 rounded-full blur-[120px] transition-colors duration-500 ${selectedTopic.theme.glow}`}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10  sm:grid-cols-[0.85fr_1.15fr] px-8">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="self-start lg:sticky lg:top-28"
                >
                    <p className="text-sm font-semibold uppercase tracking-[2px] text-amber-500">
                        Why choose TrueSolarQuote
                    </p>
                    <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl capitalize">
                        Make sense of your <span className="text-amber-500">solar options.</span>
                    </h2>
                    <p className="mt-5 text-base leading-7 text-slate-600">
                        Choosing solar is a major investment, and the right choice involves more than finding an installer or comparing a single price. It helps to know who is quoting, how the proposal fits your home and what you are getting for the cost.
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                        True Solar Quote brings these considerations into one place. You can review relevant options and compare the important details at your own pace, with a clearer picture of what may work for you.
                    </p>
                    <div className="mt-8 h-1 w-16 rounded-full bg-amber-400" />
                </motion.div>

                <div>
                    <div className="grid gap-2.5 sm:grid-cols-3 mt-8 " aria-label="Explore what to consider">
                        {topics.map((topic, index) => {
                            const Icon = topic.icon;
                            const isActive = activeTopic === index;

                            return (
                                <button
                                    key={topic.title}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveTopic(index)}
                                    className={`flex h-full items-start gap-3 rounded-xl border p-3 py-4 text-left transition-colors duration-200  sm:flex-col sm:gap-4 lg:flex-row lg:items-center ${isActive ? topic.theme.activeCard : topic.theme.card
                                        }`}
                                >
                                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isActive ? topic.theme.activeIcon : topic.theme.icon
                                        }`}>
                                        <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <span>
                                        <span className="block font-serif text-lg font-bold leading-snug text-slate-900">
                                            {topic.title}
                                        </span>
                                        <span className="mt-1 block text-sm leading-5 text-slate-600">
                                            {topic.subtitle}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className={`mt-5 min-h-60 rounded-xl border p-5 transition-colors duration-200 sm:mt-6 sm:p-7 ${selectedTopic.theme.detail}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTopic.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                aria-live="polite"
                            >
                                <h3 className="font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                                    {selectedTopic.subtitle}
                                </h3>
                                <p className="mt-3 text-base leading-7 text-slate-600">
                                    {selectedTopic.description}
                                </p>
                                <ul className="mt-2  ">
                                    {selectedTopic.details.map((detail) => (
                                        <li key={detail} className="flex items-start gap-2.5 text-sm leading-5 mt-1.5 text-slate-700">
                                            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${selectedTopic.theme.marker}`} aria-hidden="true" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
