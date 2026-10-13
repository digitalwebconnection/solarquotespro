import { Dot, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function HeroBlog() {

  const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <section className="relative min-h-112 w-full overflow-hidden sm:min-h-110">
      <motion.img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNBYWoL81tQE1y2HUSppSAsvmZqpcEPTytWgWRobVvQ&s=10" alt="Solar energy and smart grid technology"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-50" />

      <div className="absolute inset-0 bg-linear-to-br from-slate-950/95 via-slate-950/85 to-slate-950/60 z-0" />
      <div className="relative mx-auto flex min-h-112 max-w-7xl items-center px-4 py-12 sm:min-h-110 sm:px-6 sm:py-16 lg:px-8">
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
          <div className="mt-2 max-w-3xl space-y-5 text-white">
            <motion.p
              variants={contentVariants}
              transition={{ duration: 0.3 }}
              className="font-semibold tracking-widest text-xs sm:text-xs uppercase  px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 bg-amber-400/10 text-amber-300 border border-amber-400/40 backdrop-blur-md">
              <Dot strokeWidth={8} className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Energy Knowledge Hub</span>
            </motion.p>
            <motion.h1
              variants={contentVariants}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
              Learn Before You{" "}
              <span className="bg-linear-to-r from-amber-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent">Make an Energy Decision</span>
            </motion.h1>
            <motion.p
              variants={contentVariants}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-3xl">Explore guides, reviews, comparisons, pricing information and practical advice to help you understand solar, batteries, EV
              charging and other home-energy technologies.
            </motion.p>
            <motion.div
              variants={contentVariants}
              transition={{ duration: 0.65 }}
              className="pt-2 flex items-center">
              <Link to="#blogs" className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-4 py-3 text-center text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-orange-400/20 active:scale-95 sm:w-auto sm:px-5 sm:text-base">
                <BookOpen className="w-4 h-4" />
                <span>Explore Energy Guides</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}