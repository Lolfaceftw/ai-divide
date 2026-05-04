import React from 'react';
import { GlassCard } from '../components/GlassCard';
import './Pages.css';

export const Censorship: React.FC = () => {
  return (
    <div className="page-container">
      <header className="hero-section">
        <h1 className="gradient-text">Censorship in AI</h1>
        <p className="hero-subtitle">
          Navigating geopolitical exposure, data distillation, and corporate sovereignty.
        </p>
      </header>

      <div className="content-section">
        <GlassCard>
          <h2>Geopolitical Exposure and "Singapore-washing"</h2>
          <p>
            Varying companies have different principles and sovereignty. One particular example is how an AI agent startup in China, Manus, relocated to Singapore to avoid geopolitical exposure to attract venture capital, otherwise known as <strong>“Singapore-washing.”</strong>
          </p>
          <p>
            In fact, Meta was trying to acquire Manus for $2 billion of capital. However, the Chinese government issued a directive to reject any capital funding from the US unless it is approved by the government. This highlights how AI development is deeply tied to national interests and geopolitical maneuvering.
          </p>
        </GlassCard>
      </div>

      <div className="content-section">
        <GlassCard>
          <h2>Anti-Distillation Attacks</h2>
          <p>
            On the 1st of April, the source code of Claude Code, an agentic coding software tool through the terminal with over 120k stars on Github, was leaked and people found out that they were employing <strong>“anti-distillation attacks.”</strong>
          </p>
          <p>
            Imagine this: Suppose you are an AI company that is seeking more data to train, one idea that comes to mind is to use another AI company’s inference as training data to speed up the output. However, Anthropic, the company that created Claude Code, is well aware of this and injects fake tool calls into the API requests, poisoning the output. 
          </p>
          <p>
            While this is okay to protect the integrity and property of the AI company, on paper it is in a gray area because:
          </p>
          <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '8px' }}>Not all the data used by the company is ethically gathered.</li>
            <li style={{ marginBottom: '8px' }}>The heuristic to determine whether or not the conversation session is being distilled is still based on probabilistic inference, so false positives can incur and will affect a minority of people.</li>
          </ol>
        </GlassCard>
      </div>
    </div>
  );
};
