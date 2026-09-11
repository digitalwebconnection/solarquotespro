import { Fan , Thermometer , Gauge , Waves , Droplets } from "lucide-react";


const HowPumpsWork = () => {
    const processSteps = [
    {
        number: "01",
        title: "Capture heat from the air",
        description: "A fan moves surrounding air across the evaporator coil, even when the outdoor air feels cool.",
        icon: Fan,
        accent: "bg-amber-400 text-white",
    },
    {
        number: "02",
        title: "Warm the refrigerant",
        description: "The refrigerant absorbs heat from the air and changes from a low-pressure liquid into a gas.",
        icon: Thermometer,
        accent: "bg-orange-500 text-white",
    },
    {
        number: "03",
        title: "Increase the temperature",
        description: "A compressor concentrates the captured heat, raising the refrigerant to a much higher temperature.",
        icon: Gauge,
        accent: "bg-blue-700 text-white",
    },
    {
        number: "04",
        title: "Transfer heat to the water",
        description: "The hot refrigerant passes through a heat exchanger and transfers its energy into the storage tank.",
        icon: Waves,
        accent: "bg-cyan-500 text-white",
    },
    {
        number: "05",
        title: "Store hot water",
        description: "The cycle repeats until the tank reaches the selected temperature, ready for your home to use.",
        icon: Droplets,
        accent: "bg-emerald-500 text-white",
    },
];
    return (
        <section className="py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 font-serif text-blue-950 capitalize"> How Does a Heat Pump Work?</h2>
                    <p className=" text-lg text-slate-600 leading-7 mt-5"> A hot water heat pump uses a refrigeration cycle to transfer heat from the surrounding air into the water stored in the tank.The process happens continuously while the system is heating the water.</p>
                </div>

                <div className="grid grid-cols-5 gap-5 relative">
                    <div className="max-w-7xl absolute z-0 inset-0 top-15 border-t-2 border-blue-300"></div>
                    {processSteps.map((item , index) => {
                        const Icon = item.icon;
                        return(
                            <>
                            <div key={index} className="relative px-6 py-8 bg-white rounded-lg shadow-lg/40 duration-200 shadow-black/50 hover:-translate-y-1.5 transition-all group ">
                                <div className="absolute top-10 right-7 text-2xl font-serif font-extrabold text-black/30 group-hover:text-black/55 transition-colors">{item.number}</div>
                                <div ><Icon className={`${item.accent} inline-flex size-12 p-3 rounded-2xl `}/></div>
                                <h3 className="text-lg my-4 font-serif font-bold">{item.title}</h3>
                                <p className="text-sm -mt-1.5 tracking-wide text-slate-500 leading-relaxed">{item.description}</p>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowPumpsWork