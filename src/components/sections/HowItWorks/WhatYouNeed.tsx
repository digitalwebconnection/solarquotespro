import { motion } from "framer-motion";

const items = [
    {
        id: 1,
        number: "01",
        title: "A Recent Power Bill",
        description:
            "Your latest bill helps installers understand your household's energy usage and estimate the system size that suits you.",
        image: "https://images.unsplash.com/photo-1663609476830-8c247515c1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        id: 2,
        number: "02",
        title: "Your Property Address",
        description:
            "We use your location to match you with installers who service your area and understand local rebates and regulations.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=70",
    },
    {
        id: 3,
        number: "03",
        title: "Roof Details (If Known)",
        description:
            "Roof type, age and orientation help installers plan your system, though a site inspection will confirm the final details.",
        image: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        id: 4,
        number: "04",
        title: "Your Energy Goals",
        description:
            "Whether you want to cut bills, add battery storage or prepare for an EV, this helps installers tailor their recommendations.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70",
    },
    {
        id: 5,
        number: "05",
        title: "Your Current Energy Setup",
        description:
            "Let us know about your existing solar panels, battery, inverter, EV charger, air conditioning or hot-water system so installers can understand what you already have and what may work with it.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=70",
    },
    {
        id: 6,
        number: "06",
        title: "The Energy Solutions You're Exploring",
        description:
            "Tell us which solutions you're considering, whether it's solar, battery storage, EV charging, inverters, air conditioning or a heat-pump hot-water system, so your options can be matched to your needs.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=70",
    },
];

const WhatYoullNeed = () => {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20">
            <div
                aria-hidden="true"
                className="absolute top-24 -right-20 w-150 h-170 bg-amber-400/15 rounded-full blur-[120px] z-0"
            />
            <div
                aria-hidden="true"
                className="absolute top-24 -left-20 w-150 h-170 bg-amber-400/15 rounded-full blur-[120px] z-0"
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
                            {/* Background image: hidden at first, fades in on hover */}
                            {/* Background image: hidden at first, fades in on hover */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            {/* Slate overlay: darkens the image so the text is easy to read */}
                            {/* Slate overlay: darkens the image so the text is easy to read */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 z-0 bg-slate-900/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />

                            {/* Content: always visible, sits above the image (z-10) */}
                            <div className="relative z-10 flex items-baseline gap-5 ">
                                <span className="font-serif text-3xl text-amber-400/40 transition-colors duration-300 group-hover:text-amber-400">
                                    {item.number}
                                </span>
                                <div>
                                    <h3 className="text-xl font-serif font-semibold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-white group-hover:[text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-[15px] max-w-sm transition-colors duration-300 group-hover:text-white group-hover:[text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
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