import React from 'react';
import NavLink from './NavLink';
import StartHereMegaMenu from './StartHereMegaMenu';
import ReviewsDropdown from './ReviewsDropdown';
import ToolsDropdown from './ToolsDropdown';

const NavMenu = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      <NavLink title="Home" path="/" />
      <StartHereMegaMenu />
      <ReviewsDropdown />
      <ToolsDropdown />
      <NavLink title="About" path="/about" />
      <NavLink title="FAQ" path="/faq" />
      <NavLink title="Blog" path="/blog" />
      <NavLink title="Contact" path="/contact" />
    </nav>
  );
};

export default NavMenu;
