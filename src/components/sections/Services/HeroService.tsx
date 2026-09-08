import { Dot, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function HeroService() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative h-auto inset-0 w-full overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCM1YRplRyJuoTnTKOY5f0A29o7MU9mSTpZkI2G9_0Q&s=10"
                alt="Solar panels on a home" className="absolute w-full h-full object-cover object-top" />

            <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20"></div>

            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-auto">
                <div className="max-w-3xl text-white space-y-8 mt-9">
                    <p className="font-bold text-base uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1 bg-green-600/10 text-green-300 border-green-400 border backdrop-blur-sm">
                        <Dot strokeWidth={10} className="w-4 h-4 animate-pulse" />
                        What We Help With
                    </p>
                    <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-19 tracking-tight">Explore & Compare{" "}
                        <span className="bg-linear-to-r from-yellow-300 from-35% to-green-400  bg-clip-text text-transparent">Home Energy Solutions</span>
                    </h1>

                    <p className="text-lg text-white font-semibold -mt-5"> From solar panels and home batteries to EV chargers,hot-water heat pumps and more, discover your options,compare trusted providers and find the right energy solution for your home.
                    </p>

                    <button type="button" onClick={() => openQuoteModal()} className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold text-base py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-amber-300/40 inline-flex items-center gap-2 cursor-pointer mt-3 mb-3 active:scale-97 group">
                        <span>Compare Free Quotes</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 duration-300 transition-all ease-in-out" />
                    </button>

                </div>
            </div>
        </section>
    );
}