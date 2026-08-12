import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ title, path }) => (
  <Link 
    to={path} 
    className="relative text-slate-700 hover:text-blue-600 px-3 py-2 text-[17px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
  >
    {title}
  </Link>
);

export default NavLink;
