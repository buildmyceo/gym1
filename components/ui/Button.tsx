import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase tracking-widest text-xs font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-offwhite text-brand-black hover:bg-brand-gold hover:text-white border border-transparent",
    secondary: "bg-brand-gold text-white hover:bg-white hover:text-brand-black border border-transparent",
    outline: "bg-transparent text-white border border-white/30 hover:border-brand-gold hover:text-brand-gold",
    ghost: "bg-transparent text-white hover:text-brand-gold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;