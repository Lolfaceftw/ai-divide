import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-brand">
        <span className="gradient-text">Nexus AI</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/digital-divide" className={`nav-link ${isActive('/digital-divide') ? 'active' : ''}`}>Digital Divide</Link>
        <Link to="/censorship" className={`nav-link ${isActive('/censorship') ? 'active' : ''}`}>Censorship</Link>
        <Link to="/lab" className={`nav-link ${isActive('/lab') ? 'active' : ''}`}>Interactive Lab</Link>
      </div>
    </nav>
  );
};
