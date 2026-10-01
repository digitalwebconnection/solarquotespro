
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { motion } from "framer-motion";

const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export default function HeroService() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="w-full relative bg-slate-50">
            <div className="absolute w-150 h-150 left-1/4 -top-30 bg-amber-500/17 blur-[120px]" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.12 },
                        },
                    }}
                >
                    <div className="text-center relative text-black space-y-5">
                        <motion.p
                            variants={contentVariants}
                            transition={{ duration: 0.45 }}
                            className="font-bold text-sm uppercase tracking-widest text-orange-400 ">
                            What We Help With
                        </motion.p>
                        <motion.h1
                            variants={contentVariants}
                            transition={{ duration: 0.5 }}
                            className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight tracking-tight">
                            Explore & Compare
                            <span className=" bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> Home Energy Solutions
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={contentVariants}
                            transition={{ duration: 0.5 }}
                            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">From solar panels and home batteries to EV chargers,hot-water heat pumps and more, understand your options, compare trusted providers and find the right energy solution for your home.
                        </motion.p>

                        <motion.p
                            variants={contentVariants}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed"> Learn how different home energy solutions work, what they can offer and how comparing your options can help you make a more informed decision.
                        </motion.p>

                        <motion.div
                            variants={contentVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }} className="pt-3">

                            <motion.button type="button"
                                onClick={() => openQuoteModal()}
                                whileHover={{ y: -2, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold text-base py-2.5 px-5 rounded-full inline-flex items-center gap-2 cursor-pointer group" >
                                <span>Compare Free Quotes</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300 transition-all" />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

