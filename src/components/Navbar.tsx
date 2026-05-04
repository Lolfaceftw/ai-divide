import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'divide', 'censorship', 'lab'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar fade-in-down sticky top-0 z-50">
      <div className="navbar-brand">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      </div>
      <div className="navbar-links">
        <button onClick={() => scrollTo('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button>
        <button onClick={() => scrollTo('lab')} className={`nav-link ${activeSection === 'lab' ? 'active' : ''}`}>Interactive Lab</button>
        <button onClick={() => scrollTo('divide')} className={`nav-link ${activeSection === 'divide' ? 'active' : ''}`}>Digital Divide</button>
        <button onClick={() => scrollTo('censorship')} className={`nav-link ${activeSection === 'censorship' ? 'active' : ''}`}>Censorship</button>
      </div>
    </nav>
  );
};
