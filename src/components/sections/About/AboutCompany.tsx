import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

export default function AboutCompany() {
    return (
        <section className="relative overflow-hidden  bg-slate-50  py-20 sm:py-20">

            <div className="absolute inset-0 bg-amber-400/6 z-0 h-150 w-150 rounded-full  blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className=" text-xs font-bold uppercase tracking-[2px] text-blue-800">
                            About Our Company
                        </div>

                        <h2 className="mt-6 font-serif text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                            Helping homeowners make smarter energy decisions.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Choosing solar, batteries or other home-energy solutions can be confusing. There are different products, installers, prices, warranties and incentives to consider.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            True Solar Quote was created to make that process easier. We help Australian homeowners research their options, understand the market and connect with trusted solar and home-energy professionals.
                        </p>
                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            From solar panels and batteries to EV chargers, hot-water heat pumps and air conditioning, our goal is to give homeowners the information and comparison tools they need to make confident decisions.
                        </p>

                        <div className="mt-8 rounded-2xl inline-flex border border-blue-100 bg-white/80 py-4 px-7 shadow-lg ">
                            <p className="text-lg font-bold text-blue-900">
                                Research. Compare. Choose with confidence.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative mx-auto ">
                            {/* <div className="absolute -left-14 top-8 h-40 w-40 rounded-full bg-blue-900/15 blur-[90px]" /> */}


                            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 ">
                                <img
                                    src="https://www.solarquotes.com.au/wp-content/uploads/2024/01/solarquotes-team.jpg"
                                    alt="Team helping homeowners compare solar solutions"
                                    className="h-110 w-full rounded-2xl object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-5 left-7 rounded-xl border border-blue-100 bg-white p-3 shadow-lg ">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-900">
                                        <CheckCheck className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-500">Trusted</p>
                                        <p className="text-base font-bold text-blue-950">Local experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}