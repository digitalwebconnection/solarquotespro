import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu/NavMenu';
import MobileNavMenu from './NavMenu/MobileNavMenu';
import Button from '../../components/common/Button';

const Header = () => {
  return (
    <header className="bg-white backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 h-auto">
          <div className="flex items-center">
            <MobileNavMenu />
            <div className="ml-4 lg:ml-0">
              <Logo />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <NavMenu />
            <Button variant="primary" className="hidden sm:inline-flex">
              Get Quotes
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
