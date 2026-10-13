import { ArrowRight, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function AboutHero() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative min-h-106 w-full overflow-hidden sm:min-h-122 lg:min-h-screen">

            <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhhFiv9fDLXV4fAAXav-Ji5Q66etB0DVGpZnZ-qtszQ&s=10"
                alt="Australian home with solar panels"
                initial={{ scale: 1.08, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.6 }}
                className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-slate-950/70 to-slate-950/20"></div>

            <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative mx-auto flex min-h-106 max-w-7xl items-center px-4 py-12 sm:min-h-122 sm:px-6 sm:py-9 lg:min-h-screen lg:px-8">
                <div className="max-w-3xl text-white">

                    <motion.p variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-amber-500/8 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                        <Dot strokeWidth={10} className="w-4 h-4 animate-pulse" />About True Solar Quote
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-white  lg:text-5xl">
                        Helping Australians Make{" "}
                        <span className="bg-linear-to-r from-amber-300 from-40% to-green-400 bg-clip-text text-transparent">Smarter Energy Decisions
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-5 text-base font-medium text-white/90 sm:text-lg">At True Solar Quote, we make it easier for Australians to research solar and home-energy solutions, compare trusted installers, and find the right options for their homes. We bring together useful information, customer reviews
                        and competitive quotes so you can make an informed decision with confidence.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <button type="button" onClick={() => openQuoteModal()}
                            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-5 py-3 text-base font-bold text-white shadow-md transition-all hover:shadow-xl hover:shadow-amber-400/10 cursor-pointer active:scale-97 sm:mt-0 sm:w-auto" >
                            <span>Compare Free Quotes</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 duration-300 transition-all ease-in-out" />
                        </button>

                        <Link to="/how-it-works" className="group mt-2 inline-flex w-full items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-5 py-3 text-base font-bold text-white shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-amber-300 hover:shadow-xl/40 hover:shadow-amber-400/20 active:scale-97 sm:mt-0 sm:w-auto">
                            How It Works
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}