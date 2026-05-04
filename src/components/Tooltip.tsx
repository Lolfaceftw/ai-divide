import React, { useState } from 'react';
import type { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div className={`tooltip-content tooltip-${position} ${isVisible ? 'visible' : ''}`}>
        {content}
      </div>
    </div>
  );
};
