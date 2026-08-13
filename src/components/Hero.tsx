import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Hero() {
  const features = [
    "100% Free Service",
    "No Obligation Quotes",
    "Verified Installers Only",
    "Australia Wide",
  ];

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-amber-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-sky-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-amber-600 font-medium text-sm mb-6 shadow-sm">
              <Award className="w-4 h-4" />
              Australia's Trusted Way To Compare Solar Quotes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Get 3 Free Quotes From{" "}
              <span className="text-gradient">Verified</span> Solar Installers
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-2xl font-medium">
              Stop wasting time comparing dozens of solar companies.
            </p>
            <p className="text-base md:text-lg text-slate-500 mb-8 max-w-xl">
              Tell us about your home once, and we'll connect you with up to 3
              carefully verified local installers who compete for your business.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="group relative inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1">
                Get Your Free Quotes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Unique Dashboard-style White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Subtle glow behind the card to make it pop off the white background without being a colored blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-50 to-slate-50 rounded-[2.5rem] blur-2xl opacity-70"></div>

            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-xs font-bold tracking-wider text-amber-500 uppercase mb-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    Live Network
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    Installer
                    <br />
                    Match Engine
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-slate-50 rounded-md p-4 border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1 hover:bg-white cursor-default">
                  <div className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">
                    Vetted Installers
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    4,250<span className="text-amber-500">+</span>
                  </div>
                </div>
                <div className="bg-emerald-50/50 rounded-md p-4 border border-emerald-100 transition-all hover:shadow-md hover:-translate-y-1 hover:bg-white cursor-default">
                  <div className="text-xs font-semibold text-emerald-600/80 mb-1 uppercase tracking-wide">
                    Avg. Savings
                  </div>
                  <div className="text-2xl font-black text-emerald-600">
                    30<span className="text-emerald-600">%</span>
                  </div>
                </div>
              </div>

              {/* Animated Progress/Steps */}
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-slate-100"></div>

                <div className="space-y-4 relative">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm relative z-10 group-hover:border-amber-400 group-hover:text-amber-500 transition-colors shadow-sm">
                      1
                    </div>
                    <div className="bg-slate-50/80 p-3 rounded-md flex-1 border border-transparent group-hover:border-slate-100 group-hover:bg-white transition-all">
                      <div className="font-bold text-slate-900 text-sm mb-0.5">
                        Submit Details
                      </div>
                      <div className="text-xs text-slate-500">
                        Takes less than 60 seconds
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm relative z-10 group-hover:border-blue-400 group-hover:text-blue-500 transition-colors shadow-sm">
                      2
                    </div>
                    <div className="bg-slate-50/80 p-3 rounded-md flex-1 border border-transparent group-hover:border-slate-100 group-hover:bg-white transition-all">
                      <div className="font-bold text-slate-900 text-sm mb-0.5">
                        System Matches
                      </div>
                      <div className="text-xs text-slate-500">
                        We find top 3 local pros
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-amber-500 text-white flex items-center justify-center font-bold text-sm relative z-10 shadow-md group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <div className="bg-white p-3 rounded-md flex-1 border border-amber-100 shadow-sm">
                      <div className="font-bold text-amber-700 text-sm mb-0.5">
                        Compare & Save
                      </div>
                      <div className="text-xs text-amber-600/80">
                        Choose the best quote
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[70px] lg:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
