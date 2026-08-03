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
        className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Tools <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
          {navigationData.toolsLinks.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
