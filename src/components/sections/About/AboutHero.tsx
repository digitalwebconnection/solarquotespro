import { ArrowRight, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function AboutHero() {
      const { openQuoteModal } = useQuoteModal();
    return (
        <section className="relative min-h-screen inset-0 w-full overflow-hidden">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhhFiv9fDLXV4fAAXav-Ji5Q66etB0DVGpZnZ-qtszQ&s=10" alt="Solar panels" className="absolute inset-0 w-full h-full  object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90  to-slate-900/30"></div>

            <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex ">
                <div className="max-w-3xl text-white mt-9 ">
                    <p className="font-bold text-base uppercase mt-8 tracking-wider px-3 py-2 rounded-full  inline-flex items-center gap-2  bg-amber-500/10 text-amber-300 border-amber-400 border backdrop-blur-md">
                        <Dot strokeWidth={10} className="w-4 h-4 " /> about true solar quote
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-18 text-white mt-6 ">
                        Clean Energy for a <span className=" bg-linear-to-r from-amber-300 from-40% to-green-400 bg-clip-text text-transparent">Brighter Tomorrow</span>
                    </h1>

                    <p className="text-lg text-white/90 mt-5  font-semibold"> At True Solar Quote, we are committed to providing Australians with the most reliable and efficient solar solutions. Our team of experts ensures that every installation meets the highest standards of quality and performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="button" onClick={() => openQuoteModal()}
                        className="bg-linear-to-r from-amber-400 to-orange-500 text-white font-bold text-base py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-amber-400/10 inline-flex  items-center gap-2 cursor-pointer mt-5 active:scale-97 group">
                        <span>Get a Free Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 duration-300 transition-all ease-in-out" />
                    </button>
                    <button 
                        type="button"
                        className="bg-transparent text-white backdrop-blur-sm font-bold text-base py-3 px-5 rounded-xl transition-all shadow-md  hover:shadow-xl hover:shadow-green-400/10 inline-flex items-center gap-2 cursor-pointer mt-5 active:scale-97 group border-2 border-white/40 hover:border-green-400 duration-300 ease-in-out">
                        <span>Contact Our Team</span>
                    </button>
                    </div>

                </div>
            </div>
        </section>
    );
}