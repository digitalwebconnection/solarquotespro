import { Dot, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function HeroService(){
        const { openQuoteModal } = useQuoteModal();
    return (
        <section className="relative h-auto  inset-0 w-full overflow-hidden" >

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCM1YRplRyJuoTnTKOY5f0A29o7MU9mSTpZkI2G9_0Q&s=10" alt="Solar panels"
                className="absolute inset-0 w-full h-full object-cover  object-top"/>

            <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/20"></div>
            <div className="relative z-2 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-auto flex items-center">
                <div className="max-w-3xl text-white space-y-4 mt-9 ">
                    <p className="font-bold text-base uppercase  tracking-wider px-3 py-1 rounded-full  inline-flex items-center gap-1  bg-green-600/10 text-green-300 border-green-400 border backdrop-blur-sm">
                        <Dot strokeWidth={10} className="w-4 h-4 " /> what we offer </p>

                    <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold font-serif leading-14  ">
                       End-to-End <span className=" bg-linear-to-r from-yellow-300 from-60% to-green-400 bg-clip-text text-transparent">Solar, Battery & EV Charging Services</span>
                    </h1>

                    <p className="text-lg text-white/90 font-semibold"> From custom solar panel arrays and smart battery storage to fast EV chargers and system upgrades, we engineer clean energy solutions tailored to your energy needs.</p>
           
                    <button type="button" onClick={() => openQuoteModal()}
                        className="bg-linear-to-r from-yellow-500 to-orange-500 text-white font-bold text-base py-3 px-5 rounded-full transition-all shadow-md hover:shadow-lg inline-flex  items-center gap-2 cursor-pointer mt-5 mb-3 active:scale-97 group">
                        <span>Request a Free Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 duration-300 transition-all ease-in-out" />
                    </button>
                </div>
            </div>
        </section>
    );
}