import { motion } from "framer-motion";
import { ArrowRight, Dot } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const HeroWhyChooseUs = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-115 w-full overflow-hidden bg-slate-900">
      <motion.img
        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85"
        alt="A solar farm generating renewable energy"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/75 to-slate-950/45" />

      <div className="relative z-10 mx-auto flex min-h-115 max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-3xl space-y-5 text-white"
        >
          <motion.p
            variants={contentVariants}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md"
          >
            <Dot className="h-5 w-5 animate-pulse text-amber-400" strokeWidth={8} />
            Why Choose True Solar Quote
          </motion.p>

          <motion.h1
            variants={contentVariants}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-serif leading-tight sm:text-4xl lg:text-5xl capitalize"
          >
            A better way to choose {" "}
            <span className="bg-linear-to-r from-amber-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
              <br />your solar installer
            </span>
          </motion.h1>

          <motion.p
            variants={contentVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg"
          >
            Choosing solar is a major investment, but finding the right installer
            should not be complicated. We connect homeowners with solar
            professionals reviewed for licensing, experience, reliability and
            customer satisfaction.
          </motion.p>

          <motion.p
            variants={contentVariants}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-white sm:text-base"
          >
            No endless searching. No unnecessary calls.{" "}
            <span className="text-amber-400">Just trusted solar options.</span>
          </motion.p>

          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.65 }}
            className="pt-2"
          >
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-orange-500/20 active:scale-95"
            >
              <span>Get Your Solar Quotes</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroWhyChooseUs;
