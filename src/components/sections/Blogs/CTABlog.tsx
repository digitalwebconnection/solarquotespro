import { useQuoteModal } from "../../../context/QuoteModalContext";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export default function CTABlog() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative mb-14 overflow-hidden bg-slate-950 py-14 sm:py-12">
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(245,158,11,0.14) 1.2px, transparent 1.5px)",
                    backgroundSize: "26px 26px",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_32%)]" />
            <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-amber-400/15 blur-[90px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                    },
                }}
                className="relative mx-auto max-w-5xl px-6 text-center"
            >
                <div className="absolute -left-8 bottom-4 h-35 w-35 rounded-full bg-cyan-400/12 blur-[90px]" />

                <motion.div
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="relative"
                >
                    <motion.div
                        variants={contentVariants}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-amber-300"
                    >
                        Continue Your Energy Research
                    </motion.div>
                    <motion.h2
                        variants={contentVariants}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="font-serif text-3xl font-bold tracking-tight text-white capitalize md:text-5xl"
                    >
                        Keep exploring <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-emerald-500">smarter energy choices.</span>
                    </motion.h2>
                    <motion.p
                        variants={contentVariants}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-base"
                    >
                        There’s more to understand before choosing a solar or home-energy
                        solution. Explore practical guides, thoughtful comparisons, and expert
                        insights designed to help you make a confident decision.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <motion.a
                            href="#blogs"
                            variants={contentVariants}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-400/20 shadow-lg"
                        >
                            Explore All Guides
                        </motion.a>

                        <motion.button
                            type="button"
                            onClick={() => openQuoteModal()}
                            variants={contentVariants}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="group inline-flex items-center  gap-2 rounded-full border border-amber-400/60 bg-amber-400/5 px-6 py-3 text-sm font-semibold text-amber-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400/10 hover:text-amber-200 hover:shadow-amber-400/20 shadow-xl/40"
                        >
                            Compare Your Options
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}