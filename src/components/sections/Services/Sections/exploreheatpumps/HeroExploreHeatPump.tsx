import { Dot, ArrowRight} from "lucide-react";
import { useQuoteModal } from "../../../../../context/QuoteModalContext";

export default function HeroExploreHeatPumps() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative h-auto w-full overflow-hidden " id="solar">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyLoysEPpGqz0sN3D5T3gkndl7WNHh4JeTviGHigbDQ&s=10" alt="Solar panel installation"  className="absolute inset-0 w-full h-full object-cover  object-bottom" />

      <div className="absolute inset-0 bg-linear-to-r from-black/90  to-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-7 py-8 sm:py-14 lg:py-14">
        <div className="max-w-3xl text-white space-y-4.5">
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-300 border border-yellow-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className ="w-5 h-5 text-yellow-400 animate-pulse" />
            <span>Explore Heat Pumps</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            Efficient Hot Water<span className="bg-linear-to-r from-yellow-300 via-amber-300 to-green-400 bg-clip-text text-transparent">  Powered by Heat From the Air</span></h1>
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl">
            A heat pump hot water system uses electricity to move heat from the surrounding air into your hot water tank, rather than creating heat directly. This makes it a highly energy-efficient way to heat water.
          </p>
          <p className="mt-1.5 text-slate-200">The heat pump extracts heat from the surrounding air, increases its temperature using a refrigeration cycle, and transfers that heat into the water stored in the tank.</p>

          <div className="py-4 flex gap-3">
            <button onClick={() => openQuoteModal()} type="button" className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group ring-2 ring-transparent">
              <span>Get Your Free Solar Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"/>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmJLz6lwqklLU-bhdjophu_AQ7b0ZKGF7FyLfYpxPQg&s=10" className="object-cover zoom-110 rounded-4xl border border-white shadow-2xl/60 w-80 shadow-white" alt="solar battery image" /></div>
      </div>
    </section>
  );
}         