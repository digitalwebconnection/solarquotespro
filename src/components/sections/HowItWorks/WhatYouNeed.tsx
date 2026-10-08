import { motion } from "framer-motion";

const items = [
    {
        id: 1,
        number: "01",
        title: "A Recent Power Bill",
        description:
            "Your latest bill helps installers understand your household's energy usage and estimate the system size that suits you.",
    },
    {
        id: 2,
        number: "02",
        title: "Your Property Address",
        description:
            "We use your location to match you with installers who service your area and understand local rebates and regulations.",
    },
    {
        id: 3,
        number: "03",
        title: "Roof Details (If Known)",
        description:
            "Roof type, age and orientation help installers plan your system, though a site inspection will confirm the final details.",
    },
    {
        id: 4,
        number: "04",
        title: "Your Energy Goals",
        description:
            "Whether you want to cut bills, add battery storage or prepare for an EV, this helps installers tailor their recommendations.",
    },
    {
        id: 5,
        number: "05",
        title: "Your Current Energy Setup",
        description:
            "Let us know about your existing solar panels, battery, inverter, EV charger, air conditioning or hot-water system so installers can understand what you already have and what may work with it.",
    },
    {
        id: 6,
        number: "06",
        title: "The Energy Solutions You're Exploring",
        description:
            "Tell us which solutions you're considering, whether it's solar, battery storage, EV charging, inverters, air conditioning or a heat-pump hot-water system, so your options can be matched to your needs.",
    },
];

const WhatYoullNeed = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20">
            <div
                aria-hidden="true"
                className="absolute top-24 -right-20 w-150 h-100 bg-amber-400/14 rounded-full blur-[120px] z-0"
            />
            <div
                aria-hidden="true"
                className="absolute top-24 -left-20 w-150 h-170 bg-amber-400/14 rounded-full blur-[120px] z-0"
            />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
                <div className=" text-center gap-12 lg:gap-20 mb-10">
                    <p className="text-amber-500 uppercase text-sm font-medium tracking-[2px] mb-4">
                        Before you start
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                        What You'll Need
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mt-5 text-slate-600 leading-8 ">
                        Having a few details on hand makes it quicker to get accurate,
                        relevant quotes — no paperwork required, just a rough idea.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-5">
                    {items.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -28 : 28,
                                y: 18,
                                rotate: index % 2 === 0 ? -1.5 : 1.5,
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 110,
                                damping: 16,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -5,
                                scale: 1.015,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg shadow-amber-900/5 transition-colors duration-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-400/10 sm:p-6"
                        >
                            <div className="relative flex items-baseline gap-5 ">
                                <span className="font-serif text-3xl text-amber-400/40 transition-colors duration-300 group-hover:text-amber-400">
                                    {item.number}
                                </span>
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-[15px] max-w-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <p className="mt-10 text-sm text-center text-slate-500">
                    Don't have everything on hand?{" "}
                    <span className="text-slate-700">
                        No problem — you can still get started and fill in the rest later.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default WhatYoullNeed;