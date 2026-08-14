import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: () => void }[];
  highlight?: string;
  timestamp: string;
}

export default function SolarAdvisorBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const initialBotMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: "G'day! 👋 I'm Sunny, your 24/7 AI Solar Advisor. How can I help you power your home with clean energy today?",
      options: [
        { label: '💰 Calculate Solar Savings', action: () => handlePresetQuestion('savings') },
        { label: '🏛️ AU Government Rebates', action: () => handlePresetQuestion('rebates') },
        { label: '🔋 Do I need a battery?', action: () => handlePresetQuestion('battery') },
        { label: '⚡ Get 3 Free Quotes', action: () => handlePresetQuestion('quotes') },
      ],
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialBotMessages);

  useEffect(() => {
    if (isOpen) {
      setHasOpenedBefore(true);
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, messages, isTyping]);

  const addBotMessage = (text: string, options?: { label: string; action: () => void }[], highlight?: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text,
          options,
          highlight,
          timestamp: 'Just now'
        }
      ]);
    }, 600);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        text: userText,
        timestamp: 'Just now'
      }
    ]);

    // Bot Response Logic
    const lower = userText.toLowerCase();

    if (lower.includes('quote') || lower.includes('cost') || lower.includes('price') || lower.includes('installer')) {
      addBotMessage(
        "I can connect you with up to 3 CEC-accredited local installers in your area for free, itemized quotes!",
        [
          { label: '⚡ Open Quote Generator', action: () => { setIsOpen(false); openQuoteModal(); } },
          { label: 'Ask another question', action: () => handlePresetQuestion('general') }
        ],
        "Tip: Average Australian household saves $1,500 - $2,400/year with a 6.6kW system."
      );
    } else if (lower.includes('rebate') || lower.includes('stc') || lower.includes('grant') || lower.includes('government')) {
      addBotMessage(
        "Australia offers federal Small-scale Technology Certificates (STCs) which discount your solar installation upfront by up to $2,500 - $3,500. Some states (like Victoria and NSW) offer additional battery & solar loans!",
        [
          { label: '⚡ Get Quotes with Rebates Applied', action: () => { setIsOpen(false); openQuoteModal(); } },
          { label: 'How does battery storage work?', action: () => handlePresetQuestion('battery') }
        ]
      );
    } else if (lower.includes('battery') || lower.includes('storage') || lower.includes('tesla') || lower.includes('backup')) {
      addBotMessage(
        "Adding a home battery (like 10kWh) lets you store daytime solar energy for evening peak hours, boosting self-consumption from 35% up to 85%+ and providing blackout protection!",
        [
          { label: '⚡ Compare Solar + Battery Quotes', action: () => { setIsOpen(false); openQuoteModal(); } },
          { label: 'Calculate my savings', action: () => handlePresetQuestion('savings') }
        ]
      );
    } else if (lower.includes('size') || lower.includes('kw') || lower.includes('panel')) {
      addBotMessage(
        "For most Australian homes, a 6.6kW solar panel system with a 5kW inverter is the 'sweet spot' for maximum value and government rebate efficiency.",
        [
          { label: '⚡ Check Sizing for My Postcode', action: () => { setIsOpen(false); openQuoteModal(); } }
        ]
      );
    } else {
      addBotMessage(
        `Great question! Solar energy is tailored to your specific roof and power bill. Would you like to check local installer availability or calculate your estimated return on investment?`,
        [
          { label: '⚡ Get My 3 Free Quotes', action: () => { setIsOpen(false); openQuoteModal(); } },
          { label: '💰 Check Rebates in My State', action: () => handlePresetQuestion('rebates') }
        ]
      );
    }
  };

  const handlePresetQuestion = (type: string) => {
    if (type === 'savings') {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'user', text: 'How much money can I save with solar?', timestamp: 'Just now' }
      ]);
      addBotMessage(
        "Most Australian households save between $1,200 and $2,400 per year on electricity bills with a quality 6.6kW system. Payback period is typically 3 to 4.5 years!",
        [
          { label: '⚡ Get 3 Itemized Quotes', action: () => { setIsOpen(false); openQuoteModal(); } },
          { label: 'What about government rebates?', action: () => handlePresetQuestion('rebates') }
        ]
      );
    } else if (type === 'rebates') {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'user', text: 'What Australian solar rebates are available?', timestamp: 'Just now' }
      ]);
      addBotMessage(
        "The Federal STC program cuts $2,000–$3,500 directly off your quote price at point of sale. Plus, state programs in VIC, NSW, QLD, and SA offer extra battery incentives!",
        [
          { label: '⚡ Claim Rebates in My Area', action: () => { setIsOpen(false); openQuoteModal(); } }
        ]
      );
    } else if (type === 'battery') {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'user', text: 'Is a solar battery worth it in 2026?', timestamp: 'Just now' }
      ]);
      addBotMessage(
        "Yes! With rising peak electricity rates and feed-in tariff changes, a battery stores your free daytime solar for night use, slashing your grid reliance by up to 85%.",
        [
          { label: '⚡ Compare Solar + Battery Quotes', action: () => { setIsOpen(false); openQuoteModal(); } }
        ]
      );
    } else if (type === 'quotes') {
      setIsOpen(false);
      openQuoteModal();
    } else {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'user', text: 'What else should I know?', timestamp: 'Just now' }
      ]);
      addBotMessage(
        "Always use Clean Energy Council (CEC) accredited installers with Tier-1 warranties (25-year panel performance). All our partners are 100% vetted.",
        [
          { label: '⚡ Match with Top Installers', action: () => { setIsOpen(false); openQuoteModal(); } }
        ]
      );
    }
  };

  const handleResetChat = () => {
    setMessages(initialBotMessages);
    setIsTyping(false);
  };

  return (
    <>
      {/* ─── Floating Trigger Button (Bottom Right) ─── */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">

        {/* Teaser pill (when closed and not yet opened) */}
        {!isOpen && !hasOpenedBefore && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 0.4 }}
            onClick={() => setIsOpen(true)}
            className="bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-amber-200/80 text-xs font-bold flex items-center gap-2 cursor-pointer hover:border-amber-400 hover:shadow-2xl transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Have a solar question? <strong>Ask Sunny AI</strong></span>
            <span className="text-amber-500 group-hover:translate-x-0.5 transition-transform">⚡</span>
          </motion.div>
        )}

        {/* Main Floating Trigger Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2.5 p-3.5 sm:px-3 sm:py-2 rounded-full shadow-[0_10px_35px_-5px_rgba(249,115,22,0.45)] transition-all cursor-pointer ${isOpen
              ? 'bg-slate-900 text-white hover:bg-slate-800 ring-2 ring-slate-700'
              : 'bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 hover:shadow-orange-500/60 font-black'
            }`}
          aria-label="Toggle AI Solar Advisor Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-inner">
                  <Bot className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-amber-400 animate-pulse" />
              </div>
              <span className="hidden sm:inline text-sm font-black tracking-tight">Ask Sunny • Solar AI</span>
            </>
          )}
        </motion.button>
      </div>

      {/* ─── Floating Chat Popup Window (Bottom Right) ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-90 sm:w-102.5 max-w-[calc(100vw-2rem)] h-135 max-h-[calc(100vh-7rem)] bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.4)] border border-slate-200/90 overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Chat Header */}
            <div className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-4 sm:p-5 border-b border-slate-800 relative flex items-center justify-between shrink-0">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-amber-400 via-orange-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-orange-500/20">
                    <Bot className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-white">Sunny</h4>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.2 rounded font-bold">AI Advisor</span>
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>CEC-Accredited Guidance</span>
                  </p>
                </div>
              </div>

              {/* Top Controls */}
              <div className="flex items-center gap-1 relative z-10">
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Restart Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto bg-linear-to-b from-slate-50/80 via-white to-slate-50/50 space-y-3.5 text-xs">

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      ☀️
                    </div>
                  )}

                  <div className={`space-y-2 max-w-[85%] ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed shadow-xs ${msg.sender === 'user'
                          ? 'bg-slate-900 text-white rounded-tr-xs font-medium'
                          : 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-xs'
                        }`}
                    >
                      <p>{msg.text}</p>

                      {msg.highlight && (
                        <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-[11px] font-semibold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{msg.highlight}</span>
                        </div>
                      )}
                    </div>

                    {/* Interactive Action Pills */}
                    {msg.options && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={opt.action}
                            className="bg-white hover:bg-amber-500 hover:text-slate-950 text-slate-700 border border-slate-200 hover:border-amber-500 px-3 py-1.5 rounded-xl font-bold transition-all text-[11px] shadow-xs cursor-pointer active:scale-95 text-left flex items-center gap-1"
                          >
                            <span>{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 pl-9 text-slate-400">
                  <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                  <span className="text-[11px]">Sunny is typing...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask a solar question..."
                  className="w-full pl-4 pr-11 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-2xl text-xs text-slate-900 font-medium outline-none transition-all focus:ring-2 focus:ring-amber-500/20"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="absolute right-1.5 w-8 h-8 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-slate-950 flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
