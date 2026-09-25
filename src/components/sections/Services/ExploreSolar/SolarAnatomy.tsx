import { Sun, PlugZap, Zap, Home, BarChart3, Globe, ArrowRight, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";
const SolarAnatomy = () => {
    const systemComponents = [
        {
            number: "01",
            title: "Solar PV Panels",
            icon: Sun,
            description:
                "Solar panels are the starting point of the system. They absorb sunlight and convert it into DC electricity through the photovoltaic effect.",
        },
        {
            number: "02",
            title: "DC Isolator",
            icon: PlugZap,
            description:
                "The DC isolator provides a safe way to disconnect the solar panels from the inverter when the system needs to be isolated or maintained.",
        },
        {
            number: "03",
            title: "Solar Inverter",
            icon: Zap,
            description:
                "The inverter receives DC electricity from the solar array and converts it into AC electricity that can be used by the home.",
        },
        {
            number: "04",
            title: "AC Isolator",
            icon: PlugZap,
            description:
                "The AC isolator allows the inverter to be disconnected from the home's AC electrical system when required.",
        },
        {
            number: "05",
            title: "Switchboard",
            icon: Home,
            description:
                "The switchboard distributes electricity throughout the home and connects the solar system with the building's electrical circuits.",
        },
        {
            number: "06",
            title: "Consumption Monitoring",
            icon: BarChart3,
            description:
                "Monitoring helps track how much electricity the home is consuming and how much electricity the solar system is generating.",
        },
        {
            number: "07",
            title: "Grid Meter",
            icon: Globe,
            description:
                "The grid meter records electricity flowing between the property and the electricity grid, including imported and exported energy.",
        },
    ];

    const powerEnergyContent = [
        {
            title: "Power",
            unit: "kW",
            question: "How Fast?",
            description:
                "Power describes the rate at which electricity is being generated or consumed at a particular moment.",
            example:
                "A 6.6 kW solar system can produce up to around 6.6 kilowatts of power under suitable conditions.",
            icon: Zap,
            iconBg: "bg-orange-400/10",
            iconColor: "text-orange-500"

        },

        {
            title: "Energy",
            unit: "kWh",
            question: "How Much?",
            description:
                "Energy describes the total amount of electricity generated, stored or consumed over a period of time.",
            example:
                "A home might use 20 kWh of electricity in a day, while a battery may store 10 kWh of energy.",
            icon: BarChart3,
            iconBg: "bg-blue-400/10",
            iconColor: "text-blue-600"
        },
    ];
    return (
        <>
            <section className="w-full py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-wider text-amber-500 mb-4">Understanding Solar Systems</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 font-serif"> Anatomy of a Solar Power System </h2>
                        <p className="text-lg text-slate-600 leading-7"> A solar power system is more than just a collection of panels. Several electrical components work together to generate, convert, distribute and monitor electricity. </p>
                    </div>

                    <div className="max-w-5xl relative pl-8">
                        {systemComponents.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.10
                                    }}
                                    key={item.number} className="flex items-center  gap-12 pb-12 group" >
                                    <div className="text-2xl md:text-3xl font-black text-slate-200 group-hover:text-blue-500/50 duration-250 transition-colors">{item.number}</div>
                                    <div className="flex flex-col">
                                        <Icon className="w-7 h-7 text-blue-600 mb-2" />
                                        <h3 className="text-xl  w-36  font-bold text-blue-950">{item.title}</h3>
                                    </div>
                                    <div>
                                        <p className="text-slate-600 leading-7 max-w-2xl pl-auto">{item.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative w-full mt-12 p-6 md:p-9 text-white overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-75"
                        style={{
                            backgroundImage:
                                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj9njscT1XMFlSxTVmlErblHlukT6ah_8gMHsuIyBJQ&s=10')",
                        }} />
                    <div className="absolute inset-0 z-0 bg-slate-950/57" />
                    <div className="relative z-10">
                        <h3 className="text-center text-xl md:text-2xl font-bold mb-7">From Sunlight to Electricity </h3>

                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            <div className="flex items-center gap-2">
                                <Sun className="text-amber-400" />
                                <span>Sunlight</span>
                            </div>
                            <ArrowRight className="text-slate-400" />
                            <div className="flex items-center gap-2">
                                <PanelsTopLeft className="text-blue-400" />
                                <span>Solar Cell</span>
                            </div>
                            <ArrowRight className="text-slate-400" />
                            <div className="flex items-center gap-2">
                                <PanelsTopLeft className="text-cyan-400" />
                                <span>Solar Panel</span>
                            </div>
                            <ArrowRight className="text-slate-400" />
                            <div className="flex items-center gap-2">
                                <Zap className="text-yellow-400" />
                                <span>Inverter</span>
                            </div>
                            <ArrowRight className="text-slate-400" />
                            <div className="flex items-center gap-2">
                                <Home className="text-emerald-400" />
                                <span>Home</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl px-8 py-14 mx-auto">
                    <div className="max-w-3xl mb-10">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">Solar Fundamentals
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-5">Power vs Energy</h2>
                        <p className="text-lg text-slate-600 leading-8"> One of the most important concepts in solar is understanding the difference between power and energy. Although they are closely related, they describe two different things. </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {powerEnergyContent.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className={` w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}>
                                            <Icon className={` ${item.iconColor}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-blue-950"> {item.title} </h3>
                                            <span className="text-orange-500 font-bold"> {item.unit} </span>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-bold text-blue-900 mb-4"> {item.question}  </p>
                                    <p className="text-slate-600 leading-8 mb-5"> {item.description} </p>
                                    <p className="text-slate-700 leading-7 "> <span className="font-semibold">Example:</span> {item.example} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-14 py-10 max-w-2xl mx-auto shadow-black border-y  border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
                            <div
                                className="border-r border-slate-200 py-4 pr-2    ">
                                <p className="text-5xl font-black text-orange-500 mb-3"> kW</p>
                                <p className="text-xl font-bold text-blue-950">How Fast?</p>
                                <p className="text-slate-500 mt-2">Rate of electricity generation or consumption</p>
                            </div>
                            <div className="py-4">
                                <p className="text-5xl font-black text-blue-600 mb-3">kWh</p>
                                <p className="text-xl font-bold text-blue-950">How Much?</p>
                                <p className="text-slate-500 mt-2"> Amount of electricity over time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolarAnatomy;