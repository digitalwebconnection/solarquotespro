import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'py-2 shadow-md border-b border-slate-200' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/solarquotepro-logo.png" alt="SolarQuotes Pro Logo" className="h-16 w-auto" />
        </a>

        <nav className={`md:flex items-center gap-8 ${isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-8 shadow-md gap-6' : 'hidden'}`}>
          <a href="#how-it-works" className="font-medium text-slate-700 hover:text-orange-500 transition-colors">How it Works</a>
          <a href="#categories" className="font-medium text-slate-700 hover:text-orange-500 transition-colors">Categories</a>
          <a href="#installers" className="font-medium text-slate-700 hover:text-orange-500 transition-colors">Installers</a>
          <a href="#reviews" className="font-medium text-slate-700 hover:text-orange-500 transition-colors">Reviews</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 w-full md:w-auto">
            Get 3 Free Quotes
          </button>
        </nav>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
