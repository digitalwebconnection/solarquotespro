import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

const serviceNames = {
    solar: "Solar",
    battery: "Battery Storage",
    inverters: "Solar Inverters",
    evCharging: "EV Charging",
    heatPump: "Heat Pumps",
    airConditioner: "Air Conditioning",
} as const;

type ServiceCTAProps = {
    service: keyof typeof serviceNames;
};

export default function ServiceCTA({ service }: ServiceCTAProps) {
    const { openQuoteModal } = useQuoteModal();
    const serviceName = serviceNames[service];

    return (
        <section className="  py-6 sm:py-8 mb-10 max-w-7xl mx-auto px-6">
            <div className=" bg-linear-to-b from-slate-950 to-blue-950 flex rounded-xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row py-14 md:items-center lg:px-8">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                        Ready to compare {serviceName} quotes?
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-300">
                        Compare trusted local installers and find the right option for your home.
                    </p>
                </div>
                <button
                    onClick={() => openQuoteModal()}
                    type="button"
                    className="shrink-0 inline-flex items-center gap-1.5 cursor-pointer rounded-xl bg-amber-500 px-6 py-3 font-semibold  text-white transition-all duration-300  md:mr-20 group hover:shadow-lg/20 hover:-translate-y-1  shadow-amber-500"
                >
                    Compare Quotes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                </button>
            </div>
        </section>
    );
}