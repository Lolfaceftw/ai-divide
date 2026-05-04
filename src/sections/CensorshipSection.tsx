import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ParallaxSection, ParallaxImage } from '../components/ParallaxSection';
import { HoverImage } from '../components/HoverImage';

export const CensorshipSection: React.FC = () => {
  return (
    <section id="censorship" className="page-section">
      <ParallaxSection>
        <div className="section-divider"></div>
        <h2 style={{ textAlign: 'center' }}>
          <span className="gradient-text">Censorship in AI</span>
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto var(--spacing-2xl)', fontSize: '17px', fontWeight: 300 }}>
          Navigating geopolitical exposure, data distillation, and corporate sovereignty.
        </p>
      </ParallaxSection>

      <ParallaxSection delay={0.1} className="section-image-wrapper" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <ParallaxImage 
          src="/ai-divide/images/9 - censorship hero.jpg" 
          alt="Digital security and network visualization representing censorship" 
          height="380px"
        />
      </ParallaxSection>

      {/* Card 1: Geopolitics */}
      <ParallaxSection mode="spotlight" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <GlassCard>
          <HoverImage 
            src="/ai-divide/images/10 - singapore washing geopolitics.jpg" 
            alt="Matrix-style data flowing on screen" 
            className="card-img"
          />
          <h2>Geopolitical Exposure and "Singapore-washing"</h2>
          <p>
            Varying companies have different principles and sovereignty. One particular example is how an AI agent startup in China, Manus, relocated to Singapore to avoid geopolitical exposure to attract venture capital, otherwise known as <strong>"Singapore-washing."</strong>
          </p>
          <p>
            In fact, Meta was trying to acquire Manus for $2 billion of capital. However, the Chinese government issued a directive to reject any capital funding from the US unless it is approved by the government. This highlights how AI development is deeply tied to national interests and geopolitical maneuvering.
          </p>
        </GlassCard>
      </ParallaxSection>

      {/* Card 2: Anti-Distillation */}
      <ParallaxSection mode="spotlight">
        <GlassCard>
          <HoverImage 
            src="/ai-divide/images/11 - anti distillation attacks.jpg" 
            alt="Lock on a circuit board, representing data security" 
            className="card-img"
          />
          <h2>Anti-Distillation Attacks</h2>
          <p>
            On the 1st of April, the source code of Claude Code, an agentic coding software tool through the terminal with over 120k stars on Github, was leaked and people found out that they were employing <strong>"anti-distillation attacks."</strong>
          </p>
          <p>
            Imagine this: Suppose you are an AI company that is seeking more data to train, one idea that comes to mind is to use another AI company's inference as training data to speed up the output. However, Anthropic, the company that created Claude Code, is well aware of this and injects fake tool calls into the API requests, poisoning the output.
          </p>
          <p>
            While this protects the integrity and property of the AI company, on paper it is in a gray area because:
          </p>
          <ol>
            <li>Not all the data used by the company is ethically gathered.</li>
            <li>The heuristic to determine whether or not the conversation session is being distilled is still based on probabilistic inference, so false positives can occur and will affect a minority of people.</li>
          </ol>
        </GlassCard>
      </ParallaxSection>

      {/* Footer */}
      <ParallaxSection delay={0.25} style={{ marginTop: 'var(--spacing-3xl)' }}>
        <footer style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0 var(--spacing-xl)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-outline)', marginBottom: '8px' }}>
            LIS 10 — Project Report 2026
          </p>
          <p style={{ fontSize: '12px', color: 'var(--color-outline-variant)', marginBottom: 0 }}>
            Built as a digital exhibit exploring AI, ethics, and the modern workspace divide.
          </p>
        </footer>
      </ParallaxSection>
    </section>
  );
};
