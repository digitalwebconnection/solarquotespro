import { Dot, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../../context/QuoteModalContext";

const HeroExploreAirConditioner = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative h-auto w-full overflow-hidden" >

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDALngIlulIDwanZjOXTuMpv81UJic2k_RGFPIOL_XPw&s=10" alt="Modern air conditioner installation"
        className="absolute inset-0 w-full h-full object-cover object-center" />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/80 to-slate-900/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8 sm:py-14 lg:py-14">
        <div className="max-w-3xl text-white space-y-5 py-8">
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-blue-600/20 text-blue-300 border border-blue-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className="w-5 h-5 text-blue-200 animate-pulse" />
            <span>Explore Air Conditioners</span>
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            Stay Comfortable <span className="bg-linear-to-r from-blue-500 via-blue-300  to-amber-300 bg-clip-text text-transparent"> in Every Season
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-2xl">
            Modern air conditioning systems provide efficient heating and
            cooling while helping you maintain a comfortable indoor
            temperature throughout the year.
          </p>

          <p className="mt-1.5 text-slate-200">
            From split systems to reverse-cycle air conditioners, understanding
            energy efficiency, system size, running costs, and installation
            requirements can help you choose the right solution for your home.
          </p>

          <div className="py-4 flex gap-3">
            <button onClick={() => openQuoteModal()}
              type="button"
              className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group ring-2 ring-transparent" >
              <span>Get Your Free Quote</span>

              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroExploreAirConditioner
