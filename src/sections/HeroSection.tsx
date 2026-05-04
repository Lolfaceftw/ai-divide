import React from 'react';
import { ParallaxSection } from '../components/ParallaxSection';
import { GlowButton } from '../components/GlowButton';
import './Hero.css';

export const HeroSection: React.FC = () => {
  const scrollToLab = () => {
    document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section-root">
      <ParallaxSection className="hero-inner">
        <div className="hero-eyebrow pulse-glow">PROJECT REPORT 2026</div>
        
        <h1 className="hero-title">
          <span className="hero-title-white">AI, Ethics,</span>
          <br />
          <span className="animated-gradient">and the Divide</span>
        </h1>
        
        <p className="hero-subtitle">
          Artificial Intelligence is rapidly reshaping the modern workspace — creating 
          unprecedented efficiencies while raising profound ethical questions about dependency, 
          censorship, and cognitive offloading.
        </p>

        <div className="hero-cta">
          <GlowButton onClick={scrollToLab} variant="primary">
            ▶ START THE INTERACTIVE LAB
          </GlowButton>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-line"></span>
          <span className="scroll-label">SCROLL TO EXPLORE</span>
        </div>
      </ParallaxSection>
    </section>
  );
};
