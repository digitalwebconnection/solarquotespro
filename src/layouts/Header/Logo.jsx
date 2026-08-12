import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/solarqoat copy.png';
// import { APP_NAME } from '../../utils/constants';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
    <img src={logoImg} className="h-14 w-auto" />
    {/* <span>{APP_NAME}</span> */}
  </Link>
);

export default Logo;
