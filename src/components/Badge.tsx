import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'new';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variantClasses = {
    default: "bg-klein/10 text-klein",
    new: "bg-green-100 text-green-800 animate-pulse"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};