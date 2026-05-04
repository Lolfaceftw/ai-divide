import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HoverImage.css';

interface HoverImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const HoverImage: React.FC<HoverImageProps> = ({ src, alt, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHolding = useRef(false);

  // Desktop: hover
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Mobile: long-press (300ms hold)
  const handleTouchStart = useCallback(() => {
    isHolding.current = false;
    holdTimer.current = setTimeout(() => {
      isHolding.current = true;
      setIsOpen(true);
    }, 300);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (isHolding.current) {
      setIsOpen(false);
      isHolding.current = false;
    }
  }, []);

  const handleTouchMove = useCallback(() => {
    // Cancel if user scrolls
    if (holdTimer.current) clearTimeout(holdTimer.current);
  }, []);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`hover-image-trigger ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        draggable={false}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="hover-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleTouchEnd}
          >
            <motion.img
              src={src}
              alt={alt}
              className="hover-overlay-img"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
            <span className="hover-overlay-hint">
              {window.matchMedia('(pointer: coarse)').matches ? 'Release to close' : 'Move cursor away to close'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
