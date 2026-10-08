
import { motion } from "framer-motion";

export default function InverterTypes() {
    const inverterTypes = [
        {
            number: "01",
            title: "String Inverters",
            description:
                "String inverters connect multiple solar panels together in groups, known as strings. They are commonly used in residential solar systems and can offer a straightforward and cost-effective setup.",
            image:
                "https://images.unsplash.com/photo-1662601304415-31c65f724df1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyaW5nJTIwc29sYXIlMjBpbnZlcnRlcnN8ZW58MHx8MHx8fDA%3D",
            imageAlt: "Rows of solar panels in bright sunlight",
        },
        {
            number: "02",
            title: "Hybrid Inverters",
            description:
                "Hybrid inverters can manage electricity from solar panels, batteries and the grid. They are commonly considered when homeowners want to add battery storage or manage how energy is used and stored.",
            image:
                "https://images.unsplash.com/photo-1556948434-66a1c9f52461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGh5YnJpZCUyMGludmVydGVyc3xlbnwwfHwwfHx8MA%3D%3D",
            imageAlt: "Electricity transmission lines at sunset",
        },
        {
            number: "03",
            title: "Microinverters",
            description:
                "Microinverters are installed at individual solar panels rather than using one central inverter. This allows each panel to operate independently and can be useful where roofs have multiple orientations or partial shading.",
            image:
                "https://images.unsplash.com/photo-1662601318007-bc92931b64b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY3JvJTIwaW52ZXJ0ZXJzfGVufDB8fDB8fHww",
            imageAlt: "Solar panels installed on a rooftop",
        },
        {
            number: "04",
            title: "Battery Inverters",
            description:
                "Battery inverters are designed to manage electricity stored in a home battery. Depending on the system configuration, they can help convert and control energy moving between the battery, home and grid.",
            image:
                "https://images.unsplash.com/photo-1676337167260-e2daf34334f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhdHRlcnklMjBpbnZlcnRlcnN8ZW58MHx8MHx8fDA%3D",
            imageAlt: "Home energy storage equipment",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-slate-50 ">
            <div className="absolute right-0 top-20 z-0 h-100 w-150 bg-amber-400/12 blur-[120px]" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mt-5 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                        Types of Solar Inverters
                    </h2>
                    <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
                        Solar inverters come in different configurations, each designed for different solar system setups, property types and energy needs. Understanding the differences can help you compare options when planning a solar system.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {inverterTypes.map((type, index) => (
                        <motion.div
                            key={type.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="group relative isolate  flex min-h-80 flex-col justify-end overflow-hidden rounded-xl border border-slate-200  p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 sm:p-9"
                        >
                            <img
                                src={type.image}
                                alt={type.imageAlt}
                                loading="lazy"
                                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/95 via-slate-950/75 to-slate-950/45" />
                            <span className="absolute right-7 top-5 font-serif text-5xl font-bold text-white/35 transition-colors duration-300 group-hover:text-amber-300/70 sm:right-9 sm:top-7">
                                {type.number}
                            </span>
                            <h3 className="max-w-lg font-serif text-2xl font-bold leading-tight sm:text-3xl">
                                {type.title}
                            </h3>
                            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-100 sm:text-base sm:leading-7">
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto mt-10 max-w-7xl border-l-4 border-amber-500 bg-white/80 px-6 py-5 shadow-sm md:px-8">
                    <h3 className="font-serif text-xl font-bold text-slate-900 md:text-2xl">
                        Which Type of Inverter Is Right for Your Home?
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                        The best inverter type depends on your solar system design, roof
                        layout, energy usage, shading, battery plans and budget. Comparing
                        these factors can help you choose an inverter that suits your
                        home&apos;s energy requirements.
                    </p>
                </div>
            </div>
        </section>
    );
}