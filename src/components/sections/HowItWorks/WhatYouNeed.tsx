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
];

const WhatYoullNeed = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white  to-amber-50 py-20">
            <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 w-100 h-100 bg-amber-400/10 rounded-full blur-[140px]"
            />

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.1fr] gap-12 lg:gap-20 mb-14">
                    <div>
                        <p className="text-amber-600 uppercase text-sm font-medium tracking-[2px] mb-4">
                            Before you start
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                            What You'll Need
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-lg text-slate-600 leading-8 max-w-md">
                            Having a few details on hand makes it quicker to get accurate,
                            relevant quotes — no paperwork required, just a rough idea.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
                    {items.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-lg shadow-amber-900/5 transition-shadow duration-300 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/10 sm:p-8"
                        >
                            <div className="relative flex items-baseline gap-5">
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

                <p className="mt-10 text-sm text-slate-500">
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