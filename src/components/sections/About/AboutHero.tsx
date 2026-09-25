import { ArrowRight, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function AboutHero() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative h-auto inset-0 w-full overflow-hidden">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhhFiv9fDLXV4fAAXav-Ji5Q66etB0DVGpZnZ-qtszQ&s=10"
                alt="Australian home with solar panels"
                className="absolute inset-0 w-full h-auto object-cover opacity-70"/>

            <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 to-slate-950/50"></div>

            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex">
                <div className="max-w-4xl text-white mt-9">

                    <p className="font-bold text-sm uppercase mt-8 tracking-wider px-3 py-1.5 rounded-full inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border-amber-400 border backdrop-blur-md">
                        <Dot strokeWidth={10} className="w-4 h-4 animate-pulse"/>About True Solar Quote
                    </p>

                    <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight leading-17 text-white mt-6">
                        Helping Australians Make{" "}
                        <span className="bg-linear-to-r from-amber-300 from-40% to-green-400 bg-clip-text text-transparent">Smarter Energy Decisions
                        </span>
                    </h1>

                    <p className="text-lg text-white/90 mt-5 font-medium">At True Solar Quote, we make it easier for Australians to research solar and home-energy solutions, compare trusted installers, and find the right options for their homes. We bring together useful information, customer reviews
                    and competitive quotes so you can make an informed decision with confidence.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button type="button" onClick={() => openQuoteModal()}
                            className="bg-linear-to-r from-amber-400 to-orange-500 text-white font-bold text-base py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-amber-400/10 inline-flex items-center gap-2 cursor-pointer mt-5 active:scale-97 group" >
                            <span>Compare Free Quotes</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 duration-300 transition-all ease-in-out" />
                        </button>

                        <button type="button" className="bg-transparent text-white backdrop-blur-sm font-bold text-base py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-xl/40 hover:shadow-amber-400/20 inline-flex items-center gap-2 cursor-pointer mt-5 active:scale-97 group border-2 border-white/40 hover:border-amber-300 duration-300 ease-in-out">
                            <Link to="/how-it-works">How It Works</Link> 
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}