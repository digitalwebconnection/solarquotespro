import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/solarqoat copy.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#' },
    { name: 'Why Choose Us', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="True Solar Quote Logo" className="h-10 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-amber-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
              Get Free Quotes
            </button>
          </nav>

          <button 
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-700 hover:text-amber-500 font-medium px-2 py-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-semibold mt-2">
            Get Free Quotes
          </button>
        </motion.div>
      )}
    </header>
  );
}
