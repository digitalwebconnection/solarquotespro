
import { Dot, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { motion } from "framer-motion";
const HeroHowItWorks = () => {
  const { openQuoteModal } = useQuoteModal();

  const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative h-115 w-full overflow-hidden"
      id="how-it-works"
    >
      <img
        src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D"
        alt="Solar installation and quote process"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 to-slate-950/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-15">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <div className=" text-white space-y-3">
            <motion.p
              variants={contentVariants}
              transition={{ duration: 0.55 }}
              className="font-semibold text-xs sm:text-xs uppercase tracking-widest px-3.5 py-1 rounded-full inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-300 border border-yellow-400/40 backdrop-blur-md">
              <Dot
                strokeWidth={8}
                className="w-4 h-4 text-yellow-400 animate-pulse"
              />
              <span>Simple 3-Step Process</span>
            </motion.p>

            <motion.h1
              variants={contentVariants}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl font-bold font-serif leading-tight">
              Get Your Solar Quotes{" "}
              <span className="bg-linear-to-r from-yellow-300 via-amber-300 to-green-400 bg-clip-text text-transparent">
                Without The Hassle
              </span>
            </motion.h1>
            <motion.p
              variants={contentVariants}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-4xl">
              Getting competitive solar quotes is simple. Tell us about your
              property, let us match you with verified local installers, then
              compare your options and choose the one that's right for you.
            </motion.p>
            <motion.p
              variants={contentVariants}
              transition={{ duration: 0.7 }}
              className="text-slate-200 max-w-3xl leading-relaxed">
              Our straightforward process helps you receive transparent quotes
              from CEC-accredited installers, with no pressure and no obligation.
            </motion.p>
            <div className="pt-3 flex gap-3">
              <motion.button
                variants={contentVariants}
                transition={{ duration: 0.7 }}
                onClick={() => openQuoteModal()}
                type="button"
                className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base py-3 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer active:scale-95 group"
              >
                <span>Get Free Quotes Now</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroHowItWorks