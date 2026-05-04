import React from 'react';
import './GlowButton.css';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`glow-button glow-button-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
