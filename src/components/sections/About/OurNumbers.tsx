import { Sun, BatteryCharging, TrendingDown, Star } from "lucide-react";

export default function OurNumbers() {
    const numbers = [
        {
            nums: "10,000+",
            desc: "Solar Systems Installed Nationwide",
            style: "text-4xl font-extrabold text-blue-950 ",
            boxstyle: "border border-slate-400/50 hover:border-l-4  hover:border-l-blue-600",
            watermarkIcon: <Sun className="w-32 h-32 text-blue-400/30 group-hover:text-blue-500/40 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
        },
        {
            nums: "45MW+",
            desc: "Total Clean Energy Capacity Generated",
            style: "text-4xl font-extrabold text-blue-950 ",
            boxstyle: "border border-slate-400/50 hover:border-l-4  hover:border-l-yellow-400",
            watermarkIcon: <BatteryCharging className="w-32 h-32 text-yellow-500/20 group-hover:text-yellow-400/40 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
        },
        {
            nums: "$12M+",
            desc: "Estimated Lifetime Energy Costs Saved for Customers",
            style: "text-4xl font-extrabold text-blue-950 ",
            boxstyle: "border border-slate-400/50 hover:border-l-4  hover:border-l-orange-500",
            watermarkIcon: <TrendingDown className="w-32 h-32 text-orange-500/20 group-hover:text-orange-500/40 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
        },
        {
            nums: "98%",
            desc: "Customer Satisfaction Rating across Residential & Commercial Projects",
            style: "text-4xl font-extrabold text-blue-950 ",
            boxstyle: "border border-slate-400/50 hover:border-l-4  hover:border-l-green-600",
            watermarkIcon: <Star className="w-32 h-32 text-green-500/20 group-hover:text-green-500/40 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
        }
    ];  

    return (
        <section className="py-14 bg-slate-50">
            <h2 className="flex justify-center font-extrabold text-3xl sm:text-4xl tracking-wide text-blue-900  font-serif">Our Numbers</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 px-4 py-7 sm:px-6 lg:px-8 mt-4">
                {numbers.map((item, index) => (
                    <div 
                        key={index} 
                        className={`group relative overflow-hidden bg-white rounded-2xl px-8 py-8 shadow-sm hover:shadow-md transition-all duration-200 flex items-center hover:bg-linear-to-r from-black/10 via-transparent to-black/10 ${item.boxstyle}`}
                    >
             
                        <div className="relative z-10 flex items-center justify-between w-full gap-6">
                            <span className={item.style}>{item.nums}</span>
                            <p className="text-slate-700 text-sm sm:text-base font-medium ">
                                {item.desc}
                            </p>
                        </div>

                        <div className="absolute -bottom-6 -right-3 pointer-events-none select-none z-0">
                            {item.watermarkIcon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}