import { Dot, ArrowRight, FolderCheck, Building2, MapPin, Sparkles } from "lucide-react";

export default function HeroProject() {
    const stats = [
        {
            icon: <FolderCheck className="w-4 h-4 text-amber-400" />,
            value: "500+",
            label: "Completed Projects",
        },
        {
            icon: <Building2 className="w-4 h-4 text-emerald-400" />,
            value: "15+ MW",
            label: "Total Capacity Installed",
        },
        {
            icon: <MapPin className="w-4 h-4 text-blue-400" />,
            value: "Residential & Commercial",
            label: "Across Nation",
        },
        {
            icon: <Sparkles className="w-4 h-4 text-yellow-400" />,
            value: "99.8%",
            label: "Client Satisfaction",
        },
    ];

    return (
        <section className="relative h-130 w-full py-16 overflow-hidden flex items-center bg-slate-50">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCkUZttNo7eK3EnJagyO_Op2JtSFOIKhaXMguJKPGTQ&s=10" alt="Solar and clean energy project installations" className="absolute w-full h-full object-cover object-top opacity-70" />

            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90  to-slate-950/80" />

            <div className="relative max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-7xl text-white space-y-6">
                    <p className="font-bold text-xs sm:text-sm uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 backdrop-blur-md mt-6">
                        <Dot strokeWidth={8} className="w-5 h-5  text-emerald-400 animate-pulse" />
                        <span>Our Proven Track Record</span>
                    </p>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                        Featured Clean Energy{" "}
                        <span className="bg-linear-to-r from-green-400 via-emerald-300 to-amber-400 bg-clip-text text-transparent">Installations</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-200 font-semibold leading-relaxed max-w-5xl">
                        Explore our real-world portfolio of custom residential solar arrays, commercial energy storage systems, and smart EV charging installations engineered for maximum performance.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                        <a href="#blogs" className="bg-linear-to-r from-emerald-600 to-green-600 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-base py-2.5 px-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/20 inline-flex items-center gap-1.5 cursor-pointer active:scale-95 group">
                            <span>Explore Case Studies</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
                        </a>
                    </div>

                    <div className="pt-6 flex border-t border-gray-600 gap-3 sm:gap-4">
                        {stats.map((stat, index) => (
                            <div key={index}
                                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
                                {stat.icon}
                                <div>
                                    <span className="text-white font-bold block">{stat.value}</span>
                                    <span className="text-[10px] sm:text-xs text-slate-300 font-normal">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}