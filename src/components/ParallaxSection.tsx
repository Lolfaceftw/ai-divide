import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './HoverImage.css';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** 'default' = fade-in-up on view. 'spotlight' = scroll-linked focus/blur (cards). */
  mode?: 'default' | 'spotlight';
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = '',
  style,
  delay = 0,
  mode = 'default'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Spotlight: card in center is crisp, others blur and dim
  const spotlightOpacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.35, 0.65, 0.8, 1], 
    [0.25, 0.5, 1, 1, 0.5, 0.25]
  );
  const spotlightScale = useTransform(
    scrollYProgress, 
    [0, 0.35, 0.65, 1], 
    [0.97, 1, 1, 0.97]
  );
  const spotlightBlur = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.35, 0.65, 0.8, 1], 
    [3, 1.5, 0, 0, 1.5, 3]
  );

  const spotlightFilter = useTransform(spotlightBlur, (v: number) => `blur(${v}px)`);

  if (mode === 'spotlight') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ 
          ...style, 
          opacity: spotlightOpacity, 
          scale: spotlightScale,
          filter: spotlightFilter,
          willChange: 'opacity, transform, filter',
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Default: clean fade-in-up on viewport entry
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = '', height = '400px' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHolding = useRef(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

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
    if (holdTimer.current) clearTimeout(holdTimer.current);
  }, []);

  return (
    <>
      <div 
        ref={ref} 
        className={`parallax-image-wrapper ${className}`} 
        style={{ 
          overflow: 'hidden', 
          height, 
          borderRadius: 'var(--radius-2xl)',
          cursor: 'zoom-in',
          position: 'relative'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <motion.img 
          src={src} 
          alt={alt} 
          style={{ y, scale, width: '100%', height: '130%', objectFit: 'cover', display: 'block' }} 
        />
      </div>

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
