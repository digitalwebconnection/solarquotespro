import { useQuoteModal } from "../../../context/QuoteModalContext"
import { motion } from "framer-motion"
const HeroWhyChooseUs = () => {
  const { openQuoteModal } = useQuoteModal()
  return (
    <section className="relative  bg-white py-14 sm:py-16 lg:py-18">
      <div className="absolute w-150 h-150 blur-[120px] rounded-full left-1/4 -top-30 z-0 bg-emerald-200/10"/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}} 
        className="relative"
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="mb-5">
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-500">Why Choose Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-tight">
            A Better Way to Choose Your <span className="bg-linear-to-r text-transparent bg-clip-text from-emerald-500 via-green-400 to-amber-600"> Solar Installer</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">Choosing solar is a major investment, but finding the right installer shouldn't be complicated. We connect homeowners with trusted solar professionals who are carefully checked for licensing, experience, reliability, and customer satisfaction.</p>
          <p className="mt-5 text-sm sm:text-base font-semibold text-slate-800">
            No endless searching. No unnecessary phone calls.
            <span className="text-emerald-600"> Just trusted solar options.</span>
          </p>
          <button
            onClick={() => openQuoteModal()} className="mt-8 px-6 py-3 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-400 text-white font-bold cursor-pointer hover:from-emerald-400 hover:to-emerald-500 active:scale-96 transition-colors duration-400">Get Your Solar Quotes</button>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroWhyChooseUs