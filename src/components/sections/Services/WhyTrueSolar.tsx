import { ShieldCheck, Search, BarChart3,  Users, CircleCheck, BookOpen } from "lucide-react";

export default function MiniWhyTrueSolarQuotes() {
    const highlights = [
        {
            title: "Independent Information",
            desc: "Explore solar and home-energy information designed to help you understand your options before making a decision.",
            icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
            style: "border-emerald-500/30 hover:border-emerald-400/60",
            badge: "Research",
            badgeColor: "bg-emerald-500/10 text-emerald-300",
        },
        {
            title: "Compare Your Options",
            desc: "Compare installers, products, technologies and pricing considerations so you can make a more informed choice.",
            icon: <Search className="w-7 h-7 text-blue-400" />,
            style: "border-blue-500/30 hover:border-blue-400/60",
            badge: "Compare",
            badgeColor: "bg-blue-500/10 text-blue-300",
        },
        {
            title: "Understand the Numbers",
            desc: "Learn about system sizes, electricity usage, potential savings, payback periods and other important factors.",
            icon: <BarChart3 className="w-7 h-7 text-amber-400" />,
            style: "border-amber-500/30 hover:border-amber-400/60",
            badge: "Understand",
            badgeColor: "bg-amber-500/10 text-amber-300",
        },
        {
            title: "Connect With Installers",
            desc: "When you're ready to take the next step, connect with suitable solar and energy professionals for quotes.",
            icon: <Users className="w-7 h-7 text-indigo-400" />,
            style: "border-indigo-500/30 hover:border-indigo-400/60",
            badge: "Connect",
            badgeColor: "bg-indigo-500/10 text-indigo-300",
        },
    ];

    return (
        <section className="relative bg-slate-900 py-14 text-white ">
            <div className="absolute -top-10 left-20 w-150 h-100 bg-linear-to-r from-amber-300/20 to-emerald-500/20 rounded-full blur-[120px]" />

            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
                        <BookOpen className="w-4 h-4" />Why Use True Solar Quote
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold mt-5 font-serif">
                        Make a More{" "}
                        <span className="bg-linear-to-r from-amber-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent"> Informed Energy Decision
                        </span>
                    </h2>
                    <p className="text-slate-300 mt-5 text-sm sm:text-base leading-7 mx-auto">Solar and home-energy decisions can involve significant costs and long-term commitments. We provide useful
                    information, comparisons and tools to help you understand the market before choosing an installer or energy solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((item, index) => (
                        <div key={index} className={` group relative bg-slate-950/90 border rounded-2xl p-6 min-h-65 transition-all duration-300  hover:-translate-y-1.5  hover:shadow-xl ${item.style} `}>
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800  flex items-center justify-center group-hover:border-slate-700 transition-all duration-300">{item.icon}</div>
                                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase  tracking-wider ${item.badgeColor}`}>{item.badge} </span>
                            </div>
                            <h3 className="text-lg font-bold tracking-wide text-white mb-2">{item.title}</h3>   
                            <p className="text-slate-400 text-sm leading-6">{item.desc}</p>

                            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-emerald-400 " />
                                <span className="text-[11px] text-slate-500 font-medium"> Helping you research with confidence</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 max-w-4xl mx-auto text-center">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Our goal is to help homeowners understand solar,batteries and other energy technologies so they cancompare their choices and decide what works best for their circumstances.
                    </p>
                </div>
            </div>
        </section>
    );
}