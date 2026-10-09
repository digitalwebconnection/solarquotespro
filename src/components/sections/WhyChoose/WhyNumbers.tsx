import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView, useReducedMotion } from "framer-motion"

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

/** Splits "Up to 30%" into prefix "Up to ", number 30, suffix "%" and counts up. */
function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.4 })
    const reduce = useReducedMotion()

    const match = value.match(/^(\D*)([\d,]+)(.*)$/)
    const prefix = match?.[1] ?? ""
    const target = match ? Number(match[2].replace(/,/g, "")) : 0
    const suffix = match?.[3] ?? ""
    const hasComma = match?.[2].includes(",") ?? false

    const [display, setDisplay] = useState(reduce ? target : 0)

    useEffect(() => {
        if (!match || !inView || reduce) return
        const controls = animate(0, target, {
            duration: 1.6,
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setDisplay(Math.round(v)),
        })
        return () => controls.stop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    if (!match) return <span ref={ref}>{value}</span>

    return (
        <span ref={ref}>
            {prefix}
            {hasComma ? display.toLocaleString("en-US") : display}
            {suffix}
        </span>
    )
}

export default function WhyNumbers() {
    const reduce = useReducedMotion()

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-50/70 from-20% to-amber-400/14 px-6 py-20 sm:px-10 lg:px-14 lg:py-18">
            {/* Drifting background glows */}
            {!reduce && (
                <>
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -left-24 -top-13 h-76 w-76 rounded-full bg-amber-300/14 blur-3xl"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"
                    />
                </>
            )}

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="mt-3 capitalize text-3xl font-bold text-slate-950 font-serif sm:text-4xl lg:text-4xl">
                        Know what you're really{" "}
                        <span className="relative inline-block text-amber-500">
                            saving
                        </span>
                        .
                    </h2>
                </motion.div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{
                                opacity: 0.5,
                                y: -30,
                                rotate: reduce ? 0 : [-4, 3, -3, 4][index],
                            }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 14,
                                delay: index * 0.12,
                            }}
                            className="relative overflow-hidden rounded-lg border border-slate-200 bg-white px-6 pb-6 pt-10 shadow-black/10 shadow-xl transition-shadow duration-300 hover:shadow-black/20 hover:shadow-2xl"
                            whileHover={{ y: -8, scale: 1.03 }}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 px-7 pt-4"
                            >
                                <div className="h-1 overflow-hidden rounded-full bg-amber-100">
                                    <motion.div
                                        className="h-full origin-left bg-amber-300"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: reduce ? 0 : 0.8,
                                            delay: reduce ? 0 : index * 0.12,
                                            ease: "easeOut",
                                        }}
                                    />
                                </div>
                            </div>

                            <p className="relative text-4xl font-extrabold tracking-tight font-serif text-slate-950">
                                <CountUp value={stat.value} delay={0.2 + index * 0.10} />
                            </p>

                            <h3 className="relative mt-3 text-lg font-semibold text-amber-500">
                                {stat.label}
                            </h3>

                            <p className="relative mt-3 text-sm leading-6 text-slate-600">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}