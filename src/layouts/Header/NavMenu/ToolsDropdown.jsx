import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useDropdown } from '../../../hooks/useDropdown';
import { navigationData } from '../../../data/navigationData';

const ToolsDropdown = () => {
  const { isOpen, setIsOpen, dropdownRef } = useDropdown(false);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center text-slate-700 hover:text-blue-600 px-3 py-2 text-[17px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
      >
        Tools <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 py-2 z-50">
          {navigationData.toolsLinks.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 mx-2 my-1 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsDropdown;
