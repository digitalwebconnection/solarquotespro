import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { navigationData } from '../../../data/navigationData';

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigationData.mainLinks.map((link, idx) => {
              if (link.isMegaMenu) {
                return (
                  <div key={idx} className="border-b border-gray-100 pb-2">
                    <button 
                      onClick={() => toggleSection(link.title)}
                      className="flex justify-between items-center w-full py-2 text-base font-bold text-gray-900"
                    >
                      {link.title}
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === link.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {expandedSection === link.title && (
                      <div className="pl-4 mt-2 space-y-4">
                        {navigationData.startHereCategories.map((cat, cidx) => (
                          <div key={cidx}>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">{cat.title}</h4>
                            <ul className="space-y-2 border-l-2 border-gray-100 pl-4">
                              {cat.links.map((clink, clidx) => (
                                <li key={clidx}>
                                  <Link 
                                    to={clink.path} 
                                    onClick={closeMenu}
                                    className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                                  >
                                    {clink.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              if (link.hasDropdown) {
                const sublinks = link.title === 'Reviews' ? navigationData.reviewsLinks : navigationData.toolsLinks;
                return (
                  <div key={idx} className="border-b border-gray-100 pb-2">
                    <button 
                      onClick={() => toggleSection(link.title)}
                      className="flex justify-between items-center w-full py-2 text-base font-bold text-gray-900"
                    >
                      {link.title}
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === link.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {expandedSection === link.title && (
                      <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                        {sublinks.map((sublink, sidx) => (
                          <li key={sidx}>
                            <Link 
                              to={sublink.path} 
                              onClick={closeMenu}
                              className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                            >
                              {sublink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              
              return (
                <div key={idx} className="border-b border-gray-100 pb-2">
                  <Link 
                    to={link.path}
                    onClick={closeMenu}
                    className="flex justify-between items-center w-full py-2 text-base font-bold text-gray-900"
                  >
                    {link.title}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavMenu;
