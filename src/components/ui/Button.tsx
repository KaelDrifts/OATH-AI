import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a26320] focus-visible:ring-offset-2';
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-[#a26320] text-white hover:bg-[#8b5318] active:bg-[#724212]',
    secondary: 'bg-[#3f1c08] text-white hover:bg-[#502410] active:bg-[#2d1404]',
    outline: 'border-2 border-[#a26320] text-[#a26320] bg-transparent hover:bg-[#a26320]/10 active:bg-[#a26320]/20'
  };
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;