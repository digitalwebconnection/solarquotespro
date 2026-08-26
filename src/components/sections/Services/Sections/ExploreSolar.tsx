import { Dot, ArrowRight, ShieldCheck, Award, Zap, DollarSign } from "lucide-react";
// import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function ExploreSolar() {
//   const { openQuoteModal } = useQuoteModal();

  const badges = [
    {
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      text: "CEC-Accredited Installers",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-green-400" />,
      text: "25-Yr Performance Warranty",
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      text: "Tier-1 Solar Hardware",
    },
    {
      icon: <DollarSign className="w-4 h-4 text-emerald-400" />,
      text: "$0 Deposit Financing",
    },
  ];

  return (
    <section className="relative h-130 w-full overflow-hidden flex items-center bg-slate-900" id="solar">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNBYWoL81tQE1y2HUSppSAsvmZqpcEPTytWgWRobVvQ&s=10"
        alt="Solar panel installation"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/20" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-white space-y-5">
          
          {/* Top Pill Badge */}
          <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-green-500/20 text-green-300 border border-green-400/40 backdrop-blur-md">
            <Dot strokeWidth={8} className="w-5 h-5 -ml-1 text-green-400 animate-pulse" />
            <span>Explore Solar Systems</span>
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            High-Performance{" "}
            <span className="bg-linear-to-r from-yellow-300 via-amber-300 to-green-400 bg-clip-text text-transparent">
              Solar Solutions
            </span>{" "}
            for Home & Business
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
            Slash your electricity bills with Tier-1 solar panel technology. Designed to withstand harsh weather conditions and engineered for maximum energy yields year-round.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              type="button"
            //   onClick={() => openQuoteModal()}
              className="bg-libnear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2.5 cursor-pointer active:scale-95 group"
            >
              <span>Get Your Free Solar Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Trust & Guarantee Badges */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200"
              >
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}