import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, Award, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/truesolar.png';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Why Choose Us', href: '/#why-choose-us' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);

      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    } else if (href === '/') {
      handleLogoClick(e);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
        {/* ─── Top Trust & Accreditation Bar ─── */}
        <div className="bg-[#00417E] text-white text-[10px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#003466]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-1.5 sm:gap-2 font-medium">
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#0A6702] ring-2 ring-white/30 animate-pulse" />
              <span className="text-slate-200 hidden sm:inline">Australia's Premier Solar Network:</span>
              <span className="text-[#F9B122] font-bold">100% CEC-Accredited Installers</span>
            </div>
            <div className="flex items-center gap-4 text-slate-200 text-[11px] font-semibold">
              <a 
                href="mailto:hello@truesolarquote.com.au" 
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F9B122]" />
                <span>hello@truesolarquote.com.au</span>
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden md:flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#F9B122]" />
                <span>Independent</span>
              </span>
              <span className="hidden md:inline text-white/30">•</span>
              <span className="text-[#F9B122] font-bold flex items-center gap-1">
                ⚡ $0 Free Service
              </span>
            </div>
          </div>
        </div>

        {/* ─── Main Header Navigation Bar ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 sm:h-20">
            
            {/* Logo with Ambient Glow & Smooth Scroll to Top */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-3 group relative py-1 cursor-pointer"
              title="Return to top"
              aria-label="True Solar Quote - Return to top"
            >
              <div className="absolute -inset-2 bg-linear-to-r from-[#F9B122]/20 via-[#0A6702]/15 to-[#00417E]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <img src={logo} alt="True Solar Quote Logo" className="h-10 sm:h-13 w-auto object-contain relative z-10 transition-transform group-hover:scale-102" />
            </Link>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-800 hover:text-[#00417E] font-bold text-sm tracking-tight transition-colors relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#00417E] via-[#0A6702] to-[#F9B122] group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}

              {/* Glowing CTA Button */}
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openQuoteModal()}
                className="group inline-flex items-center gap-2 bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-[0_4px_20px_rgba(249,177,34,0.35)] hover:shadow-[0_6px_25px_rgba(249,177,34,0.5)] cursor-pointer"
              >
                <Zap className="w-4 h-4 text-[#00417E] fill-[#00417E]" />
                <span>Get 3 Free Quotes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-slate-950 cursor-pointer p-2 rounded-xl hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#00417E]/20"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6 text-slate-800" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Left Slide-In Drawer & Backdrop (Rendered in Portal to sit above all page content) ─── */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <div className="fixed inset-0 z-9999 md:hidden">
              {/* Backdrop Dimmer Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-slate-950/65 backdrop-blur-xs"
                aria-hidden="true"
              />

              {/* Left Slide-in Drawer Container */}
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-85 h-full bg-white shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-r border-slate-200"
              >
                {/* Drawer Top Header (Logo + Close Action) */}
                <div>
                  <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                    <Link 
                      to="/" 
                      onClick={handleLogoClick}
                      className="flex items-center gap-2 cursor-pointer"
                      title="Return to top"
                      aria-label="True Solar Quote - Return to top"
                    >
                      <img src={logo} alt="True Solar Quote Logo" className="h-9 w-auto object-contain" />
                    </Link>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
                      aria-label="Close navigation menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="px-5 pt-4 pb-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0A6702]/10 border border-[#0A6702]/20 text-[#0A6702] text-xs font-bold w-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A6702] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A6702]" />
                      </span>
                      <span>100% CEC-Accredited Network</span>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="p-5 pt-2 flex flex-col gap-1.5">
                   
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex items-center justify-between px-3.5 py-3 rounded-xl text-slate-800 hover:text-[#00417E] hover:bg-slate-50 font-bold text-base transition-colors group"
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00417E] group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Drawer Bottom (CTA Button + Contact & Trust Info) */}
                <div className="p-5 flex flex-col gap-4 bg-slate-50/60 border-t border-slate-100">
                  {/* Quote Button */}
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      openQuoteModal();
                    }}
                    className="w-full bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] py-3.5 px-4 rounded-xl font-black text-sm transition-all shadow-[0_4px_16px_rgba(249,177,34,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <Zap className="w-4 h-4 text-[#00417E] fill-[#00417E]" />
                    <span>Get 3 Free Quotes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Contact Email & Trust Info */}
                  <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-200/60">
                    <a 
                      href="mailto:hello@truesolarquote.com.au" 
                      className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-[#00417E] font-medium transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#00417E]/10 flex items-center justify-center text-[#00417E]">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span>hello@truesolarquote.com.au</span>
                    </a>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-semibold">
                      <span className="flex items-center gap-1 text-slate-600">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0A6702]" /> Independent
                      </span>
                      <span className="text-[#0A6702] font-bold">⚡ $0 Free Service</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
