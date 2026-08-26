import { ShieldCheck , StarCheck , Hourglass ,Headset } from "lucide-react";

export default function OurMission() {
    const boxdesc = [
        {
            title: "Integrity first",
            description: "No hidden fees or pushy sales tactics. We provide honest energy quotes backed by real performance data.",
            style: "border-none ring-1 ring-yellow-500 hover:bg-gradient-to-t from-amber-400/30 to-transparent hover:ring-0",
            watermarkIcon: <ShieldCheck className="w-50 h-50 text-yellow-400/10 group-hover:text-yellow-400/40 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        },
        {
            title: "CEC-Accredited Excellence",
            description: "Every system is designed and installed by Clean Energy Council (CEC) accredited professionals.",  
            style: "border-none ring-1 ring-green-600 hover:bg-gradient-to-t from-green-500/30 to-transparent hover:ring-0",
            watermarkIcon: <StarCheck className="w-50 h-50 text-green-500/10 group-hover:text-green-500/20 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        },
        {
            title: "Long-Term Reliability",
            description: "We partner only with Tier-1 manufacturers to deliver hardware built to withstand harsh Australian climates.",
            style: "border-none ring-1 ring-orange-500 hover:bg-gradient-to-t from-orange-400/30 to-transparent hover:ring-0",
            watermarkIcon: <Hourglass className="w-50 h-50 text-orange-500/10 group-hover:text-orange-500/20 duration-300 transition-all ease-in-out group-hover:-rotate-9" />
        },
        {
            title: "Customer-Centric Care",
            description: "From your initial bill assessment to post-installation grid connection, we support you every step of the way.",
            style: "border-none ring-1 ring-blue-500 hover:bg-gradient-to-t from-blue-500/30 to-transparent hover:ring-0",
            watermarkIcon: <Headset className="w-50 h-50 text-blue-500/10 group-hover:text-blue-500/20 duration-500 transition-all ease-in-out group-hover:-rotate-9 " />
        },
    ];
    return (
        <section className="py-16 bg-slate-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 mt-10 text-center ">
                <h2 className="font-semibold inline-flex justify-center text-black mb-4 bg-blue-700/10 border border-blue-500 rounded-full px-4 py-2  uppercase">
                    <span className="text-sm inline-flex items-center mr-2">☀</span> Our Mission
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-7">
                    Our mission is to help Australians make informed decisions about solar energy and related technologies. We aim to provide accurate, unbiased information and connect consumers with reputable installers and service providers.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-8 py-7 mt-5">
                {boxdesc.map((item, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden bg-white shadow-lg px-5 py-12 rounded-xl hover:shadow-xl transition-all duration-300 group shadow-gray-500 hover:shadow-black/40 hover:-translate-y-1.5 ${item.style}`}>
                        <div className="absolute -bottom-6 -right-7  z-0">
                            {item.watermarkIcon}
                        </div>
                        <div className="relative z-10">
                            {/* <div className="text-2xl mb-3">{item.icon}</div> */}
                            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}