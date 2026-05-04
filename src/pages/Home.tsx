import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { GlowButton } from '../components/GlowButton';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="hero-section">
        <h1 className="gradient-text">Nexus: AI, Ethics, and the Divide</h1>
        <p className="hero-subtitle">
          Exploring the unseen boundaries created by Artificial Intelligence in our modern workspace and society.
        </p>
      </header>

      <div className="card-grid">
        <GlassCard glow>
          <h3>Digital Divide</h3>
          <p>
            Understand how AI is creating a new gap between the tech-literate and those forced into blind dependence, incurring "cognitive debt."
          </p>
          <GlowButton onClick={() => navigate('/digital-divide')} variant="primary">
            Explore the Divide
          </GlowButton>
        </GlassCard>

        <GlassCard glow>
          <h3>AI Censorship</h3>
          <p>
            Dive into the geopolitical and ethical complexities of AI development, from "Singapore-washing" to anti-distillation attacks.
          </p>
          <GlowButton onClick={() => navigate('/censorship')} variant="primary">
            Uncover Censorship
          </GlowButton>
        </GlassCard>

        <GlassCard glow>
          <h3>Interactive Lab</h3>
          <p>
            Test your own biases and understanding. When does a tool become a crutch? Can you tell human from machine?
          </p>
          <GlowButton onClick={() => navigate('/lab')} variant="primary">
            Enter the Lab
          </GlowButton>
        </GlassCard>
      </div>
    </div>
  );
};
