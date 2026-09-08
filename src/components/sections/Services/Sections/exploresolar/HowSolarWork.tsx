import { Sun, PanelsTopLeft, Zap, PiggyBank, BatteryCharging, LucideSolarPanel } from "lucide-react";

const HowSolarWork = () => {

const content = [
    {
        title: "How Solar Panels Work (The PV Effect)",
        icon: Sun,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgQgHSsibOCFlJObCMNaD5GrpS62kBGu1FOI6G4pZEQ&s=10",

        description: "Solar panels convert sunlight into electricity through the photovoltaic (PV) effect. Photovoltaic cells, usually made from silicon, absorb sunlight and release electrons, creating an electrical current.",

        points: [
            "Silicon Wafers: Photovoltaic cells use silicon wafers to absorb sunlight.",
            "Photons and Electrons: Sunlight transfers energy to electrons, causing them to move through the cell.",
            "Electron Flow: Metal contacts collect the moving electrons and create an electrical circuit.",
            "Direct Current (DC): Solar panels initially produce DC electricity."
        ],

        details: "Electricity production depends on sunlight, panel orientation, temperature, shading, efficiency, and system losses."
    },

    {
        title: "Solar System Components",
        icon: LucideSolarPanel,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmyjWM9bomkOl0FbEqGBpqbIOui92xzjh3EkPlu4HFg&s=10",

        description: "A complete rooftop solar system includes several components that work together to generate, convert, monitor, and safely distribute electricity.",

        points: [
            "Solar PV Panels — Capture sunlight and generate DC electricity.",
            "Solar Inverter — Converts DC electricity into AC electricity for appliances.",
            "Mounting Hardware — Securely positions panels on the roof or ground.",
            "DC & AC Cables — Transfer electricity between panels, inverter, and building.",
            "Protection Devices — Help protect the system from electrical faults.",
            "Grid Meter — Measures electricity imported from and exported to the grid."
        ],

        details:  "The required equipment depends on system size, property type, electrical requirements, and battery storage."
    },

    {
        title: "Power (kW) vs. Energy (kWh)",
        icon: Zap,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4KybMqTkwa8Akz0LvQppRHmlTcMgKJkI_LZNGAxoJQ&s=10",

        description:
            "Power and energy are different measurements. kW describes the rate of electricity generation or consumption, while kWh describes the total electricity produced or used over time.",

        points: [
            "Power (kW): Measures the rate at which electricity is generated or consumed.",
            "System Capacity: Solar system capacity is normally measured in kW.",
            "Energy (kWh): Measures the total electricity generated or consumed over time.",
            "Peak Production: Solar systems usually produce their highest output around midday.",
            "Real-World Output: Temperature, shading, dust, wiring, inverter efficiency, and weather affect production."
        ],

        details:
            "Simply remember: kW tells you how fast electricity flows, while kWh tells you how much electricity is generated or consumed."
    },

    {
        title: "How Solar Saves Money",
        icon: PiggyBank,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVqbAlu1Z0cPiARoZJnUdMmMxZ3oPHj__2fdI6ADSHw&s=10",

        description:
            "Solar can reduce electricity costs by allowing homes and businesses to generate their own electricity instead of purchasing all of it from the grid.",

        points: [
            "Self-Consumption: Using solar power directly reduces electricity purchased from the grid.",
            "Reduced Grid Dependence: On-site generation lowers reliance on utility electricity.",
            "Feed-In Tariffs: Surplus electricity may earn credits where local programs allow it.",
            "Net Metering: Exported electricity may be credited against imported electricity.",
            "Daytime Savings: Properties using more electricity during daylight can benefit more."
        ],

        details:
            "Financial benefits depend on system size, electricity usage, local rates, solar production, incentives, and proper system sizing."
    },

    {
        title: "Battery Storage & Grid Backup",
        icon: BatteryCharging,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0g6bpX6sfzHid3cBWKF3OX9PKfn_sQ9H9vhbYalhaA&s=10",

        description:
            "Battery storage allows excess solar energy generated during the day to be stored and used later, including during evening hours or certain grid outages.",

        points: [
            "Energy Storage: Stores surplus solar electricity for later use.",
            "Overnight Usage: Stored energy can power appliances after sunset.",
            "Peak Usage: Batteries can help supply electricity during high-consumption periods.",
            "Blackout Protection: Properly designed systems can provide backup power during outages.",
            "Essential Loads: Backup can prioritize lights, refrigerators, internet, and other appliances.",
            "Solar Charging: Batteries can be charged using surplus daytime solar generation."
        ],

        details:
            "Battery size depends on electricity usage, backup duration, critical loads, solar generation, and budget."
    },

    {
        title: "Solar Panel Efficiency & Performance",
        icon: Sun,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WA0nultzktUA2jpF3Mb90dVxXgARZvTat7GxfEg1NA&s=10",

        description:
            "Solar panel efficiency measures how effectively a panel converts sunlight into electricity. Higher-efficiency panels can produce more electricity from limited roof space.",

        points: [
            "Panel Efficiency: Shows how much sunlight is converted into electricity.",
            "Temperature: High temperatures can reduce panel output.",
            "Shading: Trees and buildings can reduce solar production.",
            "Dust and Dirt: Dirt buildup can reduce sunlight reaching the cells.",
            "Panel Orientation: Panel direction affects the amount of sunlight received.",
            "Tilt Angle: The panel angle can influence energy production.",
            "System Losses: Cables, connectors, inverter conversion, and other factors cause losses."
        ],

        details:
            "Good system design combines efficient panels, proper inverter sizing, suitable mounting, minimal shading, and regular monitoring."
    },

    {
        title: "On-Grid, Off-Grid & Hybrid Solar Systems",
        icon: Zap,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReE3L36i-3Ry2HDzprz4NyeMQkGDHvLL1j0kEEqZIvFg&s=10",

        description:
            "Solar systems can be configured as on-grid, off-grid, or hybrid systems depending on electricity needs, grid availability, and backup requirements.",

        points: [
            "On-Grid Solar: Connected to the utility grid and reduces electricity purchased from it.",
            "Off-Grid Solar: Operates independently and normally requires sufficient battery storage.",
            "Hybrid Solar: Combines solar panels, batteries, and grid connectivity.",
            "On-Grid Advantage: Simpler architecture with strong potential for daytime savings.",
            "Hybrid Advantage: Provides energy storage and backup power."
        ],

        details:
            "The right system depends on electricity consumption, grid reliability, backup needs, available space, and budget."
    },

    {
        title: "Solar Maintenance & Long-Term Care",
        icon: PanelsTopLeft,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaGmGPWz9Nt5w11gw0YTV2vWwFE7o6NA_aRnN-Pt5tw&s=10",

        description:
            "Solar systems require relatively little maintenance, but regular inspection and monitoring help maintain reliable performance and identify problems early.",

        points: [
            "Panel Cleaning: Remove dust, dirt, leaves, and other debris.",
            "Visual Inspection: Check panels and mounting structures for damage.",
            "Electrical Inspection: Check cables, connections, isolators, and protection equipment.",
            "Performance Monitoring: Compare actual production with expected performance.",
            "Inverter Monitoring: Check for warnings, errors, or system faults.",
            "Vegetation Control: Prevent trees and plants from causing excessive shading.",
            "Professional Maintenance: Electrical repairs should be handled by qualified professionals."
        ],

        details:
            "Good maintenance keeps panels clean, monitors production, and addresses faults promptly."
    },
];

    return (
        <section className="py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-7 sm:px-6 lg:px-8">
                {/* <div className="text-center max-w-7xl mx-auto"> */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h1 className="text-5xl font-extrabold bg-linear-to-r from-orange-500 from-40%  to-emerald-400 bg-clip-text text-transparent font-serif"> Solar Energy Essentials </h1>
                    <p className="text-lg text-slate-600 font-semibold leading-7 mt-5 ">Solar power systems convert sunlight into electricity for your home or business. Installing rooftop panels lowers monthly utility bills, reduces reliance on the grid, and provides backup power when paired with battery storage.</p>
                </div>
 
                    <div className="mt-6">
                        {content.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="mt-7 border-l-4 border-blue-600 rounded-2xl p-5 bg-white shadow-2xl shadow-black/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 timeline-view animate-blurred-fade-in animate-range-[entry_20%_contain_50%]">
                                    <div className={`p-4 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                                        <h2 className="text-3xl font-bold text-blue-900 font-serif mb-3 inline-flex items-center gap-2"><Icon className="w-9 h-9" />{item.title}</h2>
                                        <p className="text-lg text-slate-800 text-justify leading-6 mt-3 font-semibold">{item.description}</p>
                                        <ul className=" list-disc list-inside mt-4 space-y-2">
                                            {item.points.map((point, idx) => (
                                                <li key={idx} className="text-slate-700 text-justify leading-7" >
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`w-full h-full flex items-center p-4 relative ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                                        <img src={item.image} className="object-center object-cover w-full h-full  shadow-lg shadow-slate-500 rounded-xl contrast-80" alt={item.title} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                {/* </div> */}
            </div>
        </section>
    )
}
export default HowSolarWork;