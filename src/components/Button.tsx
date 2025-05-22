import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
}
export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#00B5AD] focus:ring-offset-2 focus:ring-offset-[#0B0F19]';
  const variantStyles = {
    default: 'bg-[#00B5AD] text-white hover:bg-[#009992]',
    outline: 'bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-800'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} onClick={onClick}>
      {children}
    </button>;
}