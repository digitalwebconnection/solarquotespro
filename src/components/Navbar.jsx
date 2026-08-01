import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Info, Tool, HelpCircle, FileText, Mail } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 top-0 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span>SolarQuotesPro</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-4 lg:space-x-8 items-center">
            <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
            <Link to="/tools" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Tools</Link>
            <Link to="/faq" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</Link>
            <Link to="/blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            <Link to="/start-here" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors ml-4 shadow-sm hover:shadow">Get Started</Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden shadow-xl absolute w-full bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><Sun className="w-5 h-5"/>Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><Info className="w-5 h-5"/>About</Link>
            <Link to="/tools" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><Tool className="w-5 h-5"/>Tools</Link>
            <Link to="/faq" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><HelpCircle className="w-5 h-5"/>FAQ</Link>
            <Link to="/blog" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><FileText className="w-5 h-5"/>Blog</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-900 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"><Mail className="w-5 h-5"/>Contact</Link>
            <Link to="/start-here" onClick={toggleMenu} className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mt-4 text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
