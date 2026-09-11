import { Moon, Clock3, Zap, Network } from "lucide-react";

const WhyBattery = () => {
    const content = [
        {
            id: 1,
            boxStyle: "border border-blue-500 hover:border-none",
            title: "Use Solar After Sunset",
            highlight:
                "Store excess daytime solar and use it during the evening or night.",
            description:
                "Instead of sending all surplus solar electricity to the grid, a battery can store some of it for later use. This can reduce the amount of electricity you need to purchase from the grid.",
            icon: Moon,
            iconStyle: "group-hover:text-blue-300 group-hover:bg-blue-700/80 group-hover:shadow-xl/50 shadow-blue-400",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2hEIB6HmAIc91mb_eONdd-i8iYlDzxmsu-GmPd1G0A&s",
        },
        {
            id: 2,
            boxStyle: "border border-amber-500 hover:border-none",
            title: "Manage Time-of-Use Pricing",
            highlight:
                "Use stored energy when electricity prices are higher.",
            description:
                "With time-of-use electricity plans, electricity can cost more during high-demand periods. A suitably sized battery can supply some of your home's electricity during these expensive periods.",
            icon: Clock3,
            iconStyle: "group-hover:text-orange-300 group-hover:bg-orange-500/80 group-hover:shadow-xl/50 shadow-orange-300",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oUaORB6YrwXjO3Zw93v0PHDmk97Nitv52VCZN75WbA&s",
        },
        {
            id: 3,
            boxStyle: "border border-emerald-400 hover:border-none",
            title: "Backup Power",
            highlight:
                "Keep important circuits running during an outage.",
            description:
                "Some battery systems can provide backup power when the grid goes down. Depending on the system, backup may be designed for selected essential loads rather than the entire home.",
            icon: Zap,
            iconStyle: "group-hover:text-emerald-300 group-hover:bg-emerald-500/80 group-hover:shadow-xl/50 shadow-emerald-500",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhJTodF7HURodWcNRGdzEMDOBc4y4v3TtdbVEoj_wiQ&s=10",
        },
        {
            id: 4,
            boxStyle: "border border-amber-500 hover:border-none",
            title: "Virtual Power Plants",
            highlight:
                "Your battery can potentially become part of a larger energy network.",
            description:
                "Virtual Power Plants (VPPs) connect multiple battery systems so their combined energy storage can support the electricity grid. Participating systems may receive financial benefits depending on the program.",
            icon: Network,
            iconStyle: "group-hover:text-amber-300 group-hover:bg-amber-500/80 group-hover:shadow-xl/50 shadow-amber-500",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7Zn73uPJhpM8b6iCWX3k3tmyhKwxRujvw2t6kmWGgg&s",
        },
    ];

    return (
        <section className="relative py-14 bg-slate-50 text-white overflow-hidden  ">
            <div className="absolute z-0 top-14 left-50 w-130 h-100 bg-amber-300/15 rounded-full blur-[120px] " />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 font-serif text-black">Why Get a Home Battery?</h2>
                    <p className="text-lg text-slate-600  leading-7 mt-5 ">Solar panels produce electricity when the sun is shining, but your home's energy consumption doesn't stop when the sun goes down.</p> 
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative z-10">
                        {content.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className={`relative overflow-hidden bg-white px-5 py-4 rounded-lg hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-lg gorup-hover:border-transparent ease-in-out shadow-black/40 group ${step.boxStyle}`}>
                                    <div className="absolute inset-0 w-full h-full z-0">
                                        <img src={step.image} className="w-full h-full object-cover opacity-0 group-hover:opacity-80 duration-500 transition-all ease-in-out" alt=""/>
                                    </div>

                                    <div className="absolute inset-0 group-hover:bg-radial-[at_50%_85%] from-black/30  to-black/70 to-80% z-10 ease-in-out"></div>
                                    <div className="relative z-20">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`${step.iconStyle} text-gray-800 bg-slate-300/30 backdrop-blur-md rounded-lg p-2`}><Icon className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-extrabold font-serif mb-2 text-black group-hover:text-white transition-all duration-300"> {step.title}</h3>
                                        <h3 className="text-lg font-semibold mb-3 text-slate-700 group-hover:text-slate-200 transition-all duration-300"> {step.highlight}</h3>
                                        <p className="text-slate-600 group-hover:text-slate-200 transition-all duration-300 text-sm leading-relaxed"> {step.description}</p>    
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}
export default WhyBattery;