import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ title, path }) => (
  <Link 
    to={path} 

    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-xl text-sm font-medium transition-colors"

  >
    {title}
  </Link>
);

export default NavLink;
