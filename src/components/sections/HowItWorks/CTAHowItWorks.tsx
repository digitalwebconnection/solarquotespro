import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";



export default function CTAHowItWorks() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative overflow-hidden bg-cover bg-center bg-fixed py-14 sm:py-20"
            style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1678743133528-9afcd2b72b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHNvbGFyfGVufDB8fDB8fHww)` }}
        >
            <div aria-hidden="true" className="absolute inset-0 bg-slate-950/70" />
            <div className="relative mx-auto w-full px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">


                        <div className="pt-1">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-amber-400">Make your move</p>
                            <h2 className="max-w-3xl font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">Your best solar decision starts with a better comparison.</h2>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Share a few details about your home and let the right options come to you.</p>
                        </div>

                        <div className="flex  flex-col items-start  gap-3 border-t border-white/20 pt-5 lg:items-end lg:border-l lg:border-t-0 mr-20 lg:pl-10 lg:pt-0">
                            <button
                                type="button"
                                onClick={() => openQuoteModal()}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition-colors hover:bg-amber-300"
                            >
                                Start comparing
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <span className="text-xs font-medium text-blue-100/70">Free to start · No obligation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



