// import { User, FileSearch, ShieldCheck, BookOpenCheck } from "lucide-react";

export default function OurNumbers() {
    const numbers = [
        {
            nums: "25,000+",
            desc: "Australian Homeowners Helped Compare Energy Options",
            style: "text-4xl font-extrabold text-blue-950",
            boxstyle:"border border-slate-200 hover:border-l-4 hover:border-l-blue-600",
        },
        {
            nums: "40,000+",
            desc: "Solar & Home-Energy Quotes Requested Through Our Platform",
            style: "text-4xl font-extrabold text-blue-950",
            boxstyle:"border border-slate-200 hover:border-l-4 hover:border-l-yellow-400",
        },
        {
            nums: "500+",
            desc: "Trusted Solar & Home-Energy Professionals Across Australia",
            style: "text-4xl font-extrabold text-blue-950",
            boxstyle:"border border-slate-200 hover:border-l-4 hover:border-l-orange-500",
        },
        {
            nums: "100+",
            desc: "Guides, Reviews & Resources to Help Homeowners Research",
            style: "text-4xl font-extrabold text-blue-950",
            boxstyle:"border border-slate-200 hover:border-l-4 hover:border-l-green-600",
        }
    ];

    return (
        <section className="py-14 bg-slate-50 relative">
            <div className="w-50 h-50 absolute blur-[130px] bg-blue-500/20 left-140 z-0">
            </div>
            <h2 className="flex justify-center font-extrabold text-3xl sm:text-4xl tracking-wide text-blue-950 font-serif">Our Numbers</h2>

            <p className="text-center text-black mt-3 max-w-2xl mx-auto px-4"> A snapshot of how True Solar Quote helps Australian homeowners research, compare and connect with energy professionals.</p>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5  py-6 sm:px-6 lg:px-7 mt-4">
                {numbers.map((item, index) => (
                    <div key={index} className={`group relative overflow-hidden bg-white rounded-xl px-8 py-8 shadow-sm hover:shadow-md transition-all duration-200 flex items-center  ${item.boxstyle}`} >
                        <div className="flex items-center justify-between w-full gap-6">
                            <span className={item.style}> {item.nums} </span>
                            <p className="text-slate-700 text-sm sm:text-base font-medium">{item.desc}</p>
                        </div>  
                    </div>
                ))}

            </div>
        </section>
    );
}