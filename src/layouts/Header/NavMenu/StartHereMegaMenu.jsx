import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useDropdown } from '../../../hooks/useDropdown';
import { navigationData } from '../../../data/navigationData';

const StartHereMegaMenu = () => {
  const { isOpen, setIsOpen, dropdownRef } = useDropdown(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        to="/start-here"
        className="flex items-center text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Start Here <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Link>
      
      {isOpen && (
        <div className="absolute left-0 mt-0 pt-2 z-50 flex">
          {/* Main Category List */}
          <div className="w-72 bg-white shadow-xl border border-gray-100 py-4 relative z-10 rounded-l-md">
            <div className="px-5 pb-3 mb-2 border-b border-gray-100">
              <Link to="/start-here" className="text-orange-500 hover:text-orange-600 font-medium text-[17px]">
                New To Solar? Read This First
              </Link>
            </div>
            
            <ul className="flex flex-col">
              {navigationData.startHereCategories.map((category, idx) => (
                <li 
                  key={idx}
                  onMouseEnter={() => setActiveCategory(idx)}
                  className={`px-5 py-2.5 cursor-pointer flex justify-between items-center transition-colors ${activeCategory === idx ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                >
                  <span className="text-[#3b4c6b] text-[15px]">{category.title}</span>
                  <ChevronRight className="w-4 h-4 text-orange-500" />
                </li>
              ))}
            </ul>
          </div>
          
          {/* Submenu Flyout */}
          {activeCategory !== null && (
            <div className="w-64 bg-white shadow-xl border border-l-0 border-gray-100 py-4 rounded-r-md -ml-1 h-full min-h-[500px]">
              <div className="px-5 pb-3 mb-2 border-b border-gray-100">
                <span className="text-[#3b4c6b] font-bold text-lg">
                  {navigationData.startHereCategories[activeCategory].title}
                </span>
              </div>
              <ul className="flex flex-col">
                {navigationData.startHereCategories[activeCategory].links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-5 py-2 text-[#3b4c6b] hover:text-orange-500 hover:bg-slate-50 text-[14px] transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StartHereMegaMenu;
