import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer";

  const variants = {
    primary: "bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "border-2 border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600 bg-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} px-6 py-3 text-sm ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
