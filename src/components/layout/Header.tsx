import { motion } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, Award } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/solarqoat copy.png';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);.0
  
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Why Choose Us', href: '/#why-choose-us' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');

      if (location.pathname === '/') {
        // Already on home page, scroll directly
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      } else {
        // On another page, navigate to home with hash
        navigate(`/#${targetId}`);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      
      {/* ─── Top Mini Trust & Live Status Bar ─── */}
      <div className="bg-slate-950 text-white text-[11px] font-semibold py-1.5 px-4 hidden sm:block border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CEC-Accredited Network Active
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">10,000+ Australian Homes Matched</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <span className="flex items-center gap-1 text-amber-400">
              <Award className="w-3.5 h-3.5" />
              100% Free & Independent Service
            </span>
          </div>
        </div>
      </div>

      {/* ─── Main Header Navigation Bar ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Logo with Ambient Glow */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-3 group relative"
          >
            <div className="absolute -inset-2 bg-linear-to-r from-amber-400/25 to-orange-500/25 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <img src={logo} alt="Solar Quotes Pro Logo" className="h-9 sm:h-10 w-auto relative z-10 transition-transform group-hover:scale-102" />
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:text-orange-600 font-bold text-sm tracking-tight transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}

            {/* Glowing CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => openQuoteModal()}
              className="group inline-flex items-center gap-2 bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_25px_rgba(249,115,22,0.5)] cursor-pointer"
            >
              <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Get 3 Free Quotes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 hover:text-slate-950 cursor-pointer p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Drawer ─── */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 py-6 flex flex-col gap-4 shadow-2xl"
        >
          {/* Status Badge in Mobile Drawer */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>CEC-Accredited Network Online</span>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-800 hover:text-amber-600 font-bold text-base px-2 py-1.5 transition-colors border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}

          <button 
            onClick={() => {
              setIsMenuOpen(false);
              openQuoteModal();
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-6 py-3.5 rounded-xl font-black mt-2 cursor-pointer shadow-lg shadow-amber-500/25 active:scale-98"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Get Free Quotes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
}
