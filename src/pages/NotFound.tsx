import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, ArrowLeft, Zap, ShieldCheck } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function NotFound() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F9B122]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00417E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00417E]/10 border border-[#00417E]/20 text-[#00417E] mb-6 shadow-lg"
        >
          <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9B122] animate-spin" style={{ animationDuration: '18s' }} />
        </motion.div>

        <span className="block text-5xl sm:text-7xl font-black font-serif text-[#00417E] tracking-tight mb-2">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mb-3">
          Page Not Found Under The Sun
        </h1>

        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track to saving on power bills!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md cursor-pointer hover:scale-105 active:scale-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] font-black text-sm transition-all shadow-md shadow-[#F9B122]/30 cursor-pointer hover:scale-105 active:scale-100"
          >
            <Zap className="w-4 h-4 text-[#00417E] fill-[#00417E]" />
            <span>Get 3 Free Quotes</span>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#0A6702]" />
          <span>True Solar Quote • 100% Free & Independent Comparison</span>
        </div>
      </div>
    </div>
  );
}
