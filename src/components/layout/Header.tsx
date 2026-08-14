import { motion } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, Award, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/truesolar.png';
import { useQuoteModal } from '../../context/QuoteModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    } else {
      navigate(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
      {/* ─── Top Trust & Accreditation Bar ─── */}
      <div className="bg-[#00417E] text-white text-xs py-2 px-4 border-b border-[#003466]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
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
          
          {/* Logo with Ambient Glow */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-3 group relative py-1"
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
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A6702]/10 border border-[#0A6702]/20 text-[#0A6702] text-xs font-bold w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0A6702] animate-pulse" />
            <span>CEC-Accredited Network Online</span>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-800 hover:text-[#00417E] font-bold text-base px-2 py-1.5 transition-colors border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}

          <button 
            onClick={() => {
              setIsMenuOpen(false);
              openQuoteModal();
            }}
            className="w-full bg-[#F9B122] hover:bg-[#eab308] text-[#00417E] py-3.5 px-4 rounded-xl font-black text-sm transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-[#00417E] fill-[#00417E]" />
            <span>Get 3 Free Quotes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
}
