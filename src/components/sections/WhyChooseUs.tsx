import { motion } from "framer-motion";
import {
  ShieldCheck,
  PhoneOff,
  SearchX,
  Quote,
  CheckCircle2,
  Star,
} from "lucide-react";
import { MaskedAvatars } from "../common/MaskedAvatars";
import { useQuoteModal } from "../../context/QuoteModalContext";

export default function WhyChooseUs() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="why-choose-us" className="py-8 lg:py-14 bg-white relative overflow-hidden scroll-mt-20">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-160 h-160 bg-amber-50 rounded-full blur-[120px] opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-160 h-160 bg-emerald-50 rounded-full blur-[120px] opacity-60 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0A6702]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A6702]">Trusted by Homeowners</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-[1.1] mb-6">
              Why Thousands of Australians Choose{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00417E] via-[#0A6702] to-[#F9B122] relative whitespace-nowrap">
                True Solar Quote
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#F9B122]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-base lg:text-lg text-slate-900 leading-relaxed mb-8">
              <p>
                Buying solar is one of the biggest investments you'll make for your home. Unfortunately,{" "}
                <strong className="text-slate-900 font-bold">not every installer delivers the same quality, pricing or service.</strong>
              </p>
              <p>
                That's where True Solar Quote helps. We match homeowners with trusted solar professionals who have been verified for licensing, experience and customer satisfaction—so you receive competitive quotes from installers you can trust.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              {[
                { icon: <PhoneOff className="w-4 h-4" />, text: "No endless phone calls.", muted: true },
                { icon: <SearchX className="w-4 h-4" />, text: "No searching through hundreds of companies.", muted: true },
                { icon: <Quote className="w-4 h-4" />, text: "Just genuine quotes from quality installers.", muted: false }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  onClick={() => openQuoteModal()}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors border ${
                    item.muted 
                      ? 'bg-slate-50 border-slate-400 text-slate-900 group-hover:bg-slate-100' 
                      : 'bg-amber-50 border-amber-200 text-amber-500 group-hover:bg-amber-100'
                  }`}>
                    {item.icon}
                  </div>
                  <p className={`font-bold text-base lg:text-lg leading-tight pt-1 ${item.muted ? 'text-slate-900' : 'text-slate-950'}`}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual/Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-full flex items-center mt-12 lg:mt-0"
          >
            {/* Soft background shape */}
            <div className="absolute inset-0 bg-slate-50 rounded-md border border-slate-100 transform -z-10" />
            
            <div className="relative w-full p-8 lg:p-10">
              <div className="mb-10 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs tracking-wider uppercase mb-4 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                  3-Point Verification
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-900 mb-2">
                  Our Installer Standards
                </h3>
                <p className="text-slate-800">
                  Every partner must pass our strict vetting process.
                </p>
              </div>

              <div className="space-y-5 relative">
               
                {/* Card 1 */}
                <div 
                  onClick={() => openQuoteModal()}
                  className="relative bg-white rounded-md p-6 shadow-md shadow-slate-200/40 border border-slate-100 border-l-4 border-l-emerald-500 flex flex-col sm:flex-row items-start gap-5 sm:ml-0 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors shadow-sm border border-emerald-100/50">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                      Verified License & Insurance
                    </h4>
                    <p className="text-slate-800 leading-relaxed text-sm">
                      Fully licensed electricians and CEC accredited designers & installers.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div 
                  onClick={() => openQuoteModal()}
                  className="relative bg-white rounded-md p-6 shadow-md shadow-slate-200/40 border border-slate-100 border-l-4 border-l-blue-500 flex flex-col sm:flex-row items-start gap-5 sm:ml-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 group z-10 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors shadow-sm border border-blue-100/50">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                      Proven Track Record
                    </h4>
                    <p className="text-slate-800 leading-relaxed text-sm">
                      Minimum years of continuous operation and financial stability checked.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div 
                  onClick={() => openQuoteModal()}
                  className="relative bg-white rounded-md p-6 shadow-md shadow-slate-200/40 border border-slate-100 border-l-4 border-l-amber-500 flex flex-col sm:flex-row items-start gap-5 sm:ml-12 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200 group z-20 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-md bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors shadow-sm border border-amber-100/50">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-amber-700 transition-colors">
                      High Customer Satisfaction
                    </h4>
                    <p className="text-slate-800 leading-relaxed text-sm">
                      Consistent positive reviews and a commitment to post-install support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                onClick={() => openQuoteModal()}
                className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-md shadow-xl p-4 border border-slate-100 flex flex-col sm:flex-row items-center gap-4 z-30 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="-ml-2 flex items-center justify-center">
                  <MaskedAvatars size={40} column={24} />
                </div>
                <div className="text-sm pr-2 text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-900 font-bold leading-tight">10,000+ matched</p>
                </div>
              </motion.div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
