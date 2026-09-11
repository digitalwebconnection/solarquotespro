
import {  ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function HeroService() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="w-full bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
                
                <div className="text-center text-black space-y-5">
                    <p className="font-bold text-sm uppercase tracking-widest text-orange-400 ">
                        What We Help With
                    </p>
                    <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight tracking-tight">
                        Explore & Compare
                        <span className=" bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"> Home Energy Solutions
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">From solar panels and home batteries to EV chargers,hot-water heat pumps and more, understand your options, compare trusted providers and find the right energy solution for your home.
                    </p>

                    <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed"> Learn how different home energy solutions work, what they can offer and how comparing your options can help you make a more informed decision.
                    </p>

                    <div className="pt-3">
                        <button type="button"
                            onClick={() => openQuoteModal()}
                            className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold text-base py-2.5 px-5 rounded-full inline-flex items-center gap-2 cursor-pointer group" >
                            <span>Compare Free Quotes</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300 transition-all" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

