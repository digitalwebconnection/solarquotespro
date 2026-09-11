import { Dot, ArrowRight} from "lucide-react";
import { useQuoteModal } from "../../../../../context/QuoteModalContext";

export default function HeroExploreEvCh() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative h-auto w-full overflow-hidden " id="solar">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zm8mdxbneCBL5YcZv5eExvuzHwWpYjUz0tqXObdvdw&s=10" alt="Solar panel installation"  className="absolute inset-0 w-full h-full object-cover  object-center" />

      <div className="absolute inset-0 bg-linear-to-r from-black/90  to-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8 sm:py-14 lg:py-14">
        <div className="max-w-3xl text-white space-y-5">
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className ="w-5 h-5 text-emerald-400 animate-pulse" />
            <span>Explore EV Charging</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            Charge your electric vehicle<span className="bg-linear-to-r from-yellow-300 via-amber-300 to-green-400 bg-clip-text text-transparent"> smarter, faster and more efficiently.</span></h1>
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl">
            Explore the different charging options, understand charging speeds and learn how EV chargers can work with solar and home energy systems.
          </p>

          <div className="py-4 flex gap-3">
            <button onClick={() => openQuoteModal()} type="button" className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group ring-2 ring-transparent">
              <span>Get Your Free Solar Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"/>
            </button>
            <button onClick={() => openQuoteModal()} type="button" className="bg-white/ ring-2 ring-emerald-400 text-emerald-400 font-bold text-base py-3 px-4 backdrop-blur-md rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group">
              <span>Explore EV charging Options</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"/>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}         