import { Hand, House, Scale, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        number: "01",
        title: "Less Searching",
        description: "Spend less time searching for installers and working out who to contact.",
        icon: Search,
    },
    {
        number: "02",
        title: "More Relevant Options",
        description: "Your property and energy needs help focus the comparison on suitable options.",
        icon: SlidersHorizontal,
    },
    {
        number: "03",
        title: "Clearer Comparisons",
        description: "Compare system size, equipment, warranties and other important differences.",
        icon: Scale,
    },
    {
        number: "04",
        title: "No Pressure",
        description: "Take the time you need to review your options and choose what suits you.",
        icon: Hand,
    },
    {
        number: "05",
        title: "Built Around Your Home",
        description: "Your energy use, property and future plans help shape the right solar options.",
        icon: House,
    },
];

export default function HowWorks() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-14">
            <div
                aria-hidden="true"
                className="absolute left-100 -top-30 h-100 w-150 rounded-full bg-amber-300/8 blur-[120px]"
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
                >
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Why It <span className="text-amber-500">Works</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Everything you need to make a more informed solar decision.
                    </p>
                </motion.header>

                <div className="relative">
                    {/* Connector line (desktop only), runs through the icon centres */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-amber-200 lg:block"
                    />

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.article
                                    key={benefit.number}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    className="relative text-center sm:last:col-span-2 lg:last:col-span-1"
                                >
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-orange-600">
                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mt-2 flex items-center justify-center font-serif text-lg font-bold leading-snug text-slate-900 lg:min-h-14 xl:text-xl">
                                        {benefit.title}
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                                        {benefit.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 text-center sm:mt-14"
                >
                    <p className="font-serif text-base font-semibold text-slate-800 sm:text-lg">
                        Compare smarter. Understand more.{" "}
                        <span className="text-amber-500">Choose with confidence.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}