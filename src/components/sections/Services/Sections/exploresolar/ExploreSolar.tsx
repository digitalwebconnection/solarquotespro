import { Dot, ArrowRight} from "lucide-react";
import { useQuoteModal } from "../../../../../context/QuoteModalContext";

export default function ExploreSolar() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative h-auto  w-full overflow-hidden " id="solar">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHh_Z24J3CHTIVArwg1kxroBuF27Zm8HUzWR7bI6Ujw&s=10" alt="Solar panel installation"  className="absolute inset-0 w-full h-full object-cover  object-bottom" />  

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/65  to-slate-900/55" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-14 lg:py-14">
        <div className="max-w-3xl text-white space-y-5">
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 border border-amber-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className ="w-5 h-5 text-amber-400 animate-pulse" />
            <span>Explore Solar Systems</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            High-Performance <span className="bg-linear-to-r from-yellow-300 via-amber-300 to-green-400 bg-clip-text text-transparent"> Solar Solutions </span> for Home & Business </h1>
          <p className="text-base sm:text-lg text-white tracking-wide font-medium text-justify leading-relaxed max-w-3xl">
            Solar power converts sunlight into electricity that can be used by your home, exported to the grid, or stored in a battery. Understanding the basics helps you make better decisions about system size, energy usage, and solar performance.
          </p>

          <div className="pt-4">
            <button onClick={() => openQuoteModal()} type="button" className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group">
              <span>Get Your Free Solar Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"/>
            </button>
          </div>
        </div>
{/* 
        <div className="flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZc8CcxDxernZKWLDrtE_zOWoM8U4EnTjM7H9GbrNfQ&s=10" className="rounded-4xl border border-white/40 shadow-2xl/60 shadow-white" alt="solar grid image" />
        </div> */}
      </div>
    </section>
  );
}