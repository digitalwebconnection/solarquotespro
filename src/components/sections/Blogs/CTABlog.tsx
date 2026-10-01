import { useQuoteModal } from "../../../context/QuoteModalContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABlog() {
    const { openQuoteModal } = useQuoteModal();

    return (
        <section className="relative mb-14 overflow-hidden bg-slate-950 py-14 sm:py-16">
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(245,158,11,0.14) 1.2px, transparent 1.5px)",
                    backgroundSize: "26px 26px",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_32%)]" />

            <div className="relative mx-auto max-w-4xl px-6 text-center">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-10  backdrop-blur-sm sm:px-10 sm:py-12">
                    {/* <div className="absolute -right-10 top-6 h-36 w-36 rounded-full bg-amber-400/15 blur-[90px]" /> */}
                    <div className="absolute -left-8 bottom-4 h-35 w-35 rounded-full bg-cyan-400/12 blur-[90px]" />

                    <div className="relative">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-300">
                            <Sparkles className="h-3.5 w-3.5" />
                            Continue Your Energy Research
                        </div>

                        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Keep exploring smarter energy choices.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            There’s more to understand before choosing a solar or home-energy
                            solution. Explore practical guides, thoughtful comparisons, and expert
                            insights designed to help you make a confident decision.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#blogs"
                                className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 sm:w-auto"
                            >
                                Explore All Guides
                            </a>

                            <button
                                type="button"
                                onClick={() => openQuoteModal()}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-400/60 bg-amber-400/5 px-6 py-3 text-sm font-semibold text-amber-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400/10 hover:text-amber-200 sm:w-auto"
                            >
                                Compare Your Options
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}