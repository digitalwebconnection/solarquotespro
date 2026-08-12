import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {

  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";


  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} px-12 cursor-pointer py-2 text-sm ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
