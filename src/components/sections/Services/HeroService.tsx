import { motion } from "framer-motion";
import { ArrowRight, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";


const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export default function HeroService() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative min-h-115 w-full overflow-hidden ">
            <img
                src="https://images.unsplash.com/photo-1630608354129-6a7704150401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvbGFyJTIwcGFuZWxzfGVufDB8fDB8fHww"
                alt="Australian home with rooftop solar panels"
                className="absolute inset-0 h-full w-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/65 to-slate-950/50" />

            <div className="relative z-10 mx-auto flex min-h-115 max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="max-w-3xl space-y-5 text-white"
                >
                    <motion.p
                        variants={contentVariants}
                        transition={{ duration: 0.35 }}
                        className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md"
                    >
                        <Dot className="h-5 w-5 animate-pulse text-amber-400" strokeWidth={8} />
                        What We Help With
                    </motion.p>

                    <motion.h1
                        variants={contentVariants}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold capitalize font-serif leading-tight sm:text-4xl lg:text-5xl"
                    >
                        Explore and compare <br />
                        <span className="bg-linear-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                            home energy solutions
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={contentVariants}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg"
                    >
                        Explore solar, home batteries, EV chargers, heat pumps and more. Compare trusted local providers and find the right energy solution for your home.
                    </motion.p>

                    <motion.div
                        variants={contentVariants}
                        transition={{ duration: 0.65 }}
                        className="pt-2"
                    >
                        <button
                            type="button"
                            onClick={() => openQuoteModal()}
                            className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-orange-500/20 active:scale-95"
                        >
                            <span>Compare Free Quotes</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
