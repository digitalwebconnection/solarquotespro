import { motion } from "framer-motion";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function CTAWhyUs() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="sticky top-30 z-0 flex min-h-[50vh] items-center overflow-hidden bg-slate-950 py-8 sm:py-10">
            <div
                className="absolute inset-0 opacity-85"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(245,158,11,0.22) 1.2px, transparent 1.5px)",
                    backgroundSize: "26px 26px",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.12),transparent_35%)]" />
            <div className="absolute inset-5 rounded-sm border border-amber-400/70" />
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-amber-400/7 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-amber-400/7 to-transparent" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 font-serif text-4xl font-extrabold leading-tight text-amber-400 sm:text-5xl"
                >
                    Stop Overpaying for Solar
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.06 }}
                    className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300"
                >
                    Installers compete for your business, so you save up to 30% compared to getting just one quote. See your options in under a minute.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-8 flex justify-center"
                >
                    <motion.button
                        onClick={() => openQuoteModal()}
                        type="button"
                        className="inline-flex cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-amber-500/90 to-amber-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:-translate-y-1.5 active:scale-97 transition-all shadow-amber-500/20 duration-300 hover:shadow-amber-500/40"
                    >
                        Compare My Solar Quotes
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-4 text-sm text-slate-500"
                >
                    No obligation · No spam calls
                </motion.p>
            </div>
        </section>
    );
}