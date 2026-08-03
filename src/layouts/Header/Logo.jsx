import React from 'react';
import { Link } from 'react-router-dom';
import { Sun } from 'lucide-react';
import { APP_NAME } from '../../utils/constants';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
    <Sun className="h-8 w-8 text-yellow-500" />
    <span>{APP_NAME}</span>
  </Link>
);

export default Logo;
