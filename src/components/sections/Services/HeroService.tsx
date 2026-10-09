import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import acImage from "../../../assets/images/SolarServices/ac.webp";
import batteryImage from "../../../assets/images/SolarServices/battery.webp";
import evChargerImage from "../../../assets/images/SolarServices/evcharger.webp";

import inverterImage from "../../../assets/images/SolarServices/inverter.webp";
import solarImage from "../../../assets/images/SolarServices/solar.webp";

const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

const chips = ["100% Free to Use", "No Obligation", "Trusted Local Providers"];
const backgrounds = [
    { src: solarImage, alt: "Rooftop solar panels" },
    { src: batteryImage, alt: "Home battery storage" },
    { src: evChargerImage, alt: "Electric vehicle charging" },
    { src: acImage, alt: "Energy-efficient home air conditioning" },
    { src: inverterImage, alt: "Solar power inverter" },
];

export default function HeroService() {
    const { openQuoteModal } = useQuoteModal();
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    useEffect(() => {
        const nextIndex = (backgroundIndex + 1) % backgrounds.length;
        const image = new Image();
        let timer: number;

        image.onload = () => {
            timer = window.setTimeout(() => setBackgroundIndex(nextIndex), 5000);
        };
        image.onerror = () => console.error(`Failed to load service hero background: ${image.src}`);
        image.src = backgrounds[nextIndex].src;

        return () => {
            window.clearTimeout(timer);
            image.onload = null;
            image.onerror = null;
        };
    }, [backgroundIndex]);

    return (
        <section className="relative min-h-115 w-full overflow-hidden">

            <AnimatePresence initial={false}>
                <motion.img
                    key={backgroundIndex}
                    src={backgrounds[backgroundIndex].src}
                    alt={backgrounds[backgroundIndex].alt}
                    fetchPriority="high"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1.02 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.7, ease: "easeOut" },
                        scale: { duration: 4.5, ease: "linear" },
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-bottom will-change-transform blur-[1.5px]"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/65 to-slate-950/50" />

            {/* Pulsing sun glow */}
            <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/25 blur-3xl"
            />

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
                        {/* Shimmering gradient text */}
                        <motion.span
                            className="bg-linear-to-r from-orange-400 via-amber-300 to-emerald-400  bg-clip-text text-transparent"
                        >
                            home energy solutions
                        </motion.span>
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
                        <div className="relative inline-block">
                            {/* Pulsing ring behind the button */}
                            <motion.span
                                aria-hidden="true"
                                animate={
                                    { scale: [1, 1.2], opacity: [0.5, 0] }
                                }
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full bg-amber-500"
                            />
                            <motion.button
                                type="button"
                                onClick={() => openQuoteModal()}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                className="group relative inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-base font-bold text-white shadow-lg transition-colors duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-orange-500/20"
                            >
                                <span>Compare Free Quotes</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Trust chips, staggered */}
                    <motion.ul
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                        }}
                        className="flex flex-wrap gap-x-5 gap-y-2 pt-1"
                    >
                        {chips.map((chip) => (
                            <motion.li
                                key={chip}
                                variants={contentVariants}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-200"
                            >
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                                    <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                                {chip}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
}