import { motion } from "framer-motion"

const stats = [
    {
        value: "< 60 sec",
        label: "To request your quotes",
        description: "Tell us about your property and get matched without the long sales calls.",
    },
    {
        value: "100%",
        label: "CEC-accredited installers",
        description: "Every installer is licensed, vetted and verified before they can quote you.",
    },
    {
        value: "Up to 30%",
        label: "Savings vs. a single quote",
        description: "Installers compete for your business, so pricing stays transparent and fair.",
    },
    {
        value: "10,000+",
        label: "Aussie homeowners matched",
        description: "Join homeowners across Australia who've compared quotes with True Solar Quote.",
    },
]
export default function WhyNumbers() {
    return (
        <motion.section
            className="bg-linear-to-br from-white from-20% to-amber-400/14 px-6 py-20 sm:px-10 lg:px-14 lg:py-18"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-flex uppercase px-4 py-2 text-sm font-semibold text-amber-500 tracking-[2px]">
                        Why SolarQuotePro
                    </span>

                    <h2 className="mt-3 capitalize text-3xl font-bold  text-slate-950 font-serif sm:text-4xl lg:text-4xl">
                        Know what you're really <span className="text-amber-500 ">saving</span>.
                    </h2>

                </motion.div>

                <motion.div
                    className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="rounded-lg border border-slate-200 bg-white p-6   shadow-black/10 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-black/20"
                            variants={{
                                hidden: { opacity: 0, y: -30, rotate: [-4, 3, -3, 4][index] },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="mb-8 h-1 w-12 rounded-full bg-amber-300" />
                            <p className="text-4xl font-extrabold tracking-tight font-serif text-slate-950">
                                {stat.value}
                            </p>
                            <h3 className="mt-3 text-lg font-semibold text-amber-500">
                                {stat.label}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}