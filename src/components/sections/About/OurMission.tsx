import {  StarCheck, Sun, Info, BadgeCheck, HeartHandshake } from "lucide-react";

export default function OurMission() {
   const boxdesc = [
    {
        title: "Transparent Information",
        description: "Clear, practical information to help homeowners understand solar, batteries and other energy solutions without confusing sales jargon.",
        style: "border-none ring-1 ring-yellow-300 hover:bg-gradient-to-t from-amber-400/20 to-transparent hover:ring-0",
        watermarkIcon: ( <Info className="w-50 h-50 text-yellow-400/10 group-hover:text-yellow-400/40 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        )
    },
    {
        title: "Trusted Professionals",
        description: "Connect with reputable solar and home-energy professionals so homeowners can compare their options before choosing who to work with.",
        style: "border-none ring-1 ring-green-300 hover:bg-gradient-to-t from-green-500/20 to-transparent hover:ring-0",
        watermarkIcon: ( <StarCheck className="w-50 h-50 text-green-500/10 group-hover:text-green-500/20 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        )
    },
    {
        title: "Independent Research",
        description: "Helpful guides, reviews, comparisons and market insights designed to make researching energy products easier.",
        style: "border-none ring-1 ring-orange-300 hover:bg-gradient-to-t from-orange-400/20 to-transparent hover:ring-0",
        watermarkIcon: ( <BadgeCheck className="w-50 h-50 text-orange-500/10 group-hover:text-orange-500/20 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        )
    },
    {
        title: "Homeowner First",
        description: "We put the homeowner at the centre of the process, helping them understand their choices from the first search to selecting the right provider.",
        style: "border-none ring-1 ring-blue-300 hover:bg-gradient-to-t from-blue-500/20 to-transparent hover:ring-0",
        watermarkIcon: ( <HeartHandshake className="w-50 h-50 text-blue-500/10 group-hover:text-blue-500/20 duration-500 transition-all ease-in-out group-hover:-rotate-9"
            />
        )
    },
];
    return (
        <section className="py-16 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 mt-10 text-center  ">
                <div className="w-100 h-80 bg-amber-400/20 absolute -left-20 top-50 z-0 blur-[120px] rounded-full"></div>
                <div className="w-140 h-70 bg-blue-400/30 absolute  top-45 right-40 z-0  blur-[120px] rounded-full"></div>
                <h2 className=" inline-flex items-center gap-1.5 relative z-20 justify-center text-blue-950 mb-4 bg-blue-700/10 border border-blue-500 rounded-full px-3 py-1.5 text-sm uppercase">
                  <Sun size={18}/>Our Mission
                </h2>
                <p className="max-w-3xl mx-auto text-base text-slate-800 relative z-20 leading-7">
                    Our mission is to help Australians make informed decisions about solar energy and related technologies. We aim to provide accurate, unbiased information and connect consumers with reputable installers and service providers.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-8 py-4  mt-5">
                {boxdesc.map((item, index) => (
                    <div key={index} className={`relative overflow-hidden bg-white shadow-lg px-5 py-12 rounded-xl hover:shadow-xl transition-all duration-300 group shadow-gray-500 hover:shadow-black/40 hover:-translate-y-1.5 ${item.style}`}>
                        <div className="absolute -bottom-6 -right-7  z-0">
                            {item.watermarkIcon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}