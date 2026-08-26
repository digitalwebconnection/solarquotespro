// import {  Headset, Hourglass,  ShieldCheck, StarCheck } from "lucide-react";

export default function AboutCompany() {
    

    return (
        <section className="py-14 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 px-4 py-7 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-blue-900 font-serif">About Our Company</h1>
                    <p className="text-lg text-slate-600 text-justify leading-7 mt-5">
                        The SolarQuotes team at our Adelaide office.
                        SolarQuotes contains 100,278 installer reviews, panel reviews, inverter reviews, battery reviews, heat pump reviews and air conditioner reviews. It also has heaps of guides, blog posts, videos and tools to help you navigate the solar, battery, EV charger, hot water heat pump and air conditioner market.
                    </p>
                    <p className="text-lg text-slate-600 text-justify mt-2">
                        If you want to learn even more, read the long and gory founding story of SolarQuotes – featuring massive coal loaders, camping out of a beat-up Volvo, and how a chance encounter with a painter gave me the idea for the business.
                    </p>
                </div>
                <div className="flex items-center">
                    <img src="https://www.solarquotes.com.au/wp-content/uploads/2024/01/solarquotes-team.jpg" alt="Our Company" className="rounded-lg shadow-xl shadow-slate-600" />
                </div>
            </div>

            
        </section>
    );
}