import { motion } from "framer-motion";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function CTAWhyUs() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative mt-5 bg-slate-950 py-7 text-white sm:py-12">
            <div className="absolute inset-6 border border-emerald-600/70 rounded-sm " />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="absolute -left-50 top-60 z-0 h-90 w-130 rounded-full bg-yellow-300/15 blur-[120px]"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="absolute -right-50 top-60 z-0 h-90 w-130 rounded-full bg-yellow-300/15 blur-[120px]"
            />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 font-serif text-4xl font-extrabold leading-tight text-emerald-400 sm:text-5xl lg:text-6xl"
                >
                    Stop Overpaying for Solar
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300"
                >
                    Installers compete for your business, so you save up to 30% compared to getting just one quote. See your options in under a minute.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-8 flex justify-center"
                >
                    <motion.button
                        onClick={() => openQuoteModal()}
                        type="button"
                        className="inline-flex cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:-translate-y-1.5 active:scale-97 transition-all shadow-emerald-500/30 duration-300 hover:shadow-emerald-500/40"
                    >
                        Compare My Solar Quotes
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-4 text-sm text-slate-500"
                >
                    No obligation · No spam calls
                </motion.p>
            </div>
        </section>
    );
}