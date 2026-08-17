import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Zap } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface Activity {
  id: number;
  name: string;
  location: string;
  system: string;
  timeAgo: string;
}

const recentActivities: Activity[] = [
  { id: 1, name: 'David M.', location: 'Parramatta, NSW (2150)', system: '6.6kW Solar + 10kWh Battery', timeAgo: '3 mins ago' },
  { id: 2, name: 'Sarah & Mark', location: 'Geelong, VIC (3220)', system: '10kW Commercial Solar', timeAgo: '8 mins ago' },
  { id: 3, name: 'Liam P.', location: 'Sunshine Coast, QLD (4551)', system: '8.8kW Tier-1 Solar System', timeAgo: '12 mins ago' },
  { id: 4, name: 'Emma T.', location: 'Joondalup, WA (6027)', system: '5kW Solar System', timeAgo: '17 mins ago' },
  { id: 5, name: 'Robert K.', location: 'Adelaide Hills, SA (5152)', system: 'Tesla Powerwall Battery Add-on', timeAgo: '21 mins ago' },
  { id: 6, name: 'Jessica B.', location: 'Newcastle, NSW (2300)', system: '6.6kW Premium Solar System', timeAgo: '26 mins ago' },
];

export default function LiveSocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Display for 6 seconds, then hide for 10 seconds before showing next
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % recentActivities.length);
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(nextTimer);
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = recentActivities[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 max-w-[calc(100vw-5.5rem)] sm:max-w-sm"
        >
          <div 
            onClick={() => openQuoteModal()}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-start gap-3 relative group cursor-pointer hover:border-[#00417E]/40 transition-all"
          >
            {/* Live Green Pulse Dot & Icon */}
            <div className="relative shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-[#0A6702]/10 border border-[#0A6702]/20 flex items-center justify-center text-[#0A6702]">
                <Zap className="w-4 h-4 fill-[#0A6702]" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#0A6702] border-2 border-white animate-pulse" />
            </div>

            {/* Notification Content */}
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-xs font-bold text-slate-900">{current.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">• {current.timeAgo}</span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium leading-tight">
                Matched with 3 CEC Installers in <strong className="text-slate-800">{current.location}</strong>
              </p>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-[#00417E] font-bold">
                <ShieldCheck className="w-3 h-3 text-[#0A6702]" />
                <span className="truncate">{current.system}</span>
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              title="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
