import { Sun, Zap, PanelsTopLeft, Home  } from "lucide-react";

const HowSolarWorks = () => {

    const solarWorkingSteps = [
        {
            number: "01",
            title: "Sunlight Hits the Cell",
            description:
                "Silicon solar cells absorb energy from sunlight and begin the electricity-generation process.",
            icon: Sun,
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-500",
            border: "border-amber-200",
            hover:
                "hover:border-amber-400 hover:bg-amber-100/50 hover:-translate-y-2",
        },

        {
            number: "02",
            title: "Electrons Start Moving",
            description:
                "Energy from sunlight excites electrons inside the cell, creating an electrical current.",
            icon: Zap,
             bg: "bg-blue-50",
            iconBg: "bg-blue-100 ",
            iconColor: "text-blue-600",
            border: "border-blue-200",
            hover:
                "hover:border-blue-400 hover:bg-blue-100/50 hover:-translate-y-2",
            
        },

        {
            number: "03",
            title: "Electricity Is Collected",
            description:
                "Metal contacts collect the current while multiple cells work together to form a solar panel.",
            icon: PanelsTopLeft,
            bg: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-yellow-500",
            border: "border-amber-200",
            hover:
                "hover:border-amber-400 hover:bg-amber-100/50 hover:-translate-y-2",
        },

        {
            number: "04",
            title: "Power Reaches Your Home",
            description:"Multiple panels form an array, and an inverter converts DC electricity into usable AC power.",
            icon: Home,
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
            border: "border-emerald-200",
            hover:
                "hover:border-emerald-400 hover:bg-emerald-100/50 hover:-translate-y-2",
        },
    ];



    return (
        <section className="w-full py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto px-8">

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-3"></p>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 font-serif">How Do Solar Panels Work?</h2>
                    <p className="text-lg text-slate-600"> Solar panels convert sunlight into electricity through the <span className="font-semibold text-slate-800">
                            {" "}photovoltaic (PV) effect
                        </span>.Sunlight gives energy to electrons inside solar cells, creating
                        electrical current.
                    </p>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                    {solarWorkingSteps.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <>
                                <div key={index} className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-lg ${item.bg} ${item.border} ${item.hover} transition-all group duration-300 shadow-md shadow-black/40 hover:shadow-lg`}>
                                    <div className={`w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center   mb-5 ${item.iconColor} ${item.iconBg} `}> < Icon className="group-hover:scale-110 transition-transform duration-300"/>
                                    </div>
                                    <span className="text-sm font-bold text-amber-500">{item.number}</span>
                                    <h3 className="text-xl font-bold text-blue-950 mt-2 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
                
                
        </section>
    );
};

export default HowSolarWorks;