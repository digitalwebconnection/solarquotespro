import { motion, useInView, useMotionValue, useMotionValueEvent, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const content = {

  stats: [
    {
      value: 25000,
      suffix: "+",
      description: "Australian homeowners helped compare energy options",
    },
    {
      value: 40000,
      suffix: "+",
      description: "Solar and home-energy quotes requested through our platform",
    },
    {
      value: 500,
      suffix: "+",
      description: "Trusted solar and home-energy professionals across Australia",
    },
    {
      value: 1200,
      suffix: "+",
      description: "Guides, reviews and resources for homeowners",
    },
  ],
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 200 });
  const [displayValue, setDisplayValue] = useState("0");

  useMotionValueEvent(springValue, "change", (current) => {
    setDisplayValue(Math.round(current).toLocaleString("en-AU"));
  });

  useEffect(() => {
    motionValue.set(isInView ? value : 0);
  }, [isInView, motionValue, value]);

  return (
    <motion.span ref={ref} aria-hidden="true">
      {displayValue}{suffix}
    </motion.span>
  );
}

export default function OurNumbers() {

  const gridContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bar: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.8, delay: 0.20, ease: "easeOut" } },
  };


  return (
    <section className="relative z-4 pb-16 bg-white pt-25">
      <div className="absolute right-10 -top-5 bg-amber-400/15 -z-10  h-120 w-200 rounded-full  blur-[120px]" />
      <motion.div
        initial={{ opacity: 0.50, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >

        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_1.2fr] md:items-center lg:gap-12 relative z-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-5xl leading-14 font-extrabold text-slate-900">Making Energy <span className="bg-linear-to-r  from-amber-400    to-emerald-700 bg-clip-text text-transparent">Decisions Easier</span></h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-lg">A snapshot of how True Solar Quote helps Australian homeowners research, compare and connect with energy professionals.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-lg">From solar panels and home batteries to EV chargers, inverters, heat pumps, and air conditioning, we make it easier to understand your options, explore available technologies, and find solutions that suit your home and energy needs.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {content.stats.map((stat) => (
              <motion.div
                key={stat.value}
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative flex min-h-40 flex-col justify-center overflow-hidden rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm sm:px-6 hover:shadow-2xl transition-shadow duration-400 shadow-black/30 ease-in-out"
              >
                <motion.span aria-hidden="true" variants={bar} className="absolute inset-x-0 top-0 h-1 origin-left bg-linear-to-r from-amber-400 to-emerald-700"
                />
                <h3
                  aria-label={`${stat.value.toLocaleString("en-AU")}${stat.suffix}`}
                  className="font-serif text-4xl font-extrabold tracking-wide text-blue-950"
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section >
  );
}   