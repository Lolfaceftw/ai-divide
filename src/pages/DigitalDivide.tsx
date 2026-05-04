import React from 'react';
import { GlassCard } from '../components/GlassCard';
import './Pages.css';

export const DigitalDivide: React.FC = () => {
  return (
    <div className="page-container">
      <header className="hero-section">
        <h1 className="gradient-text">Digital Divide Deep Dive</h1>
        <p className="hero-subtitle">
          The growing chasm in the modern AI-integrated workspace.
        </p>
      </header>

      <div className="content-section">
        <GlassCard>
          <h2>AI in Workspace and Digital Divide Connection</h2>
          <p>
            The push to integrate AI into the workspace is largely driven by a top-down demand for increased productivity. Managers and executives see Large Language Models (LLMs) as tools to do more, faster. However, this expectation creates a new, invisible Digital Divide right inside the office.
          </p>
          <p>This divide separates employees into two camps:</p>
          <ul>
            <li style={{ marginBottom: '8px' }}>
              <strong>The Tech-Literate:</strong> Employees who possess the skills to navigate and prompt LLMs effectively. For them, AI is an accelerant that gives them a distinct upper hand in managing their workload.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>The Less Familiar:</strong> Employees who lack these specialized skills. To meet the new, high-pressure demands for productivity, they are forced to depend blindly on the AI. Instead of doing the critical thinking themselves, they offload it to the LLM—incurring what is known as <em>"cognitive debt."</em>
            </li>
          </ul>
        </GlassCard>
      </div>

      <div className="content-section">
        <GlassCard>
          <h2>A Culture of Fear</h2>
          <p>
            This divide is worsened by a culture of fear. For those on the disadvantaged side of the divide, AI isn't empowering. They face the constant anxiety of AI "hallucinations" (fabricating information) and the heavy burden of being held accountable for regulatory compliance (such as EU laws) that the AI might violate.
          </p>
          <div className="quote-block">
            "It’s not fear of AI. It’s fear of how AI use will be perceived. Employees worry that using AI could undermine their credibility or raise questions about their value, especially in environments where expectations are rising faster than guidance. Younger employees are especially sensitive to how AI use is perceived because they’re still proving their credibility. For them, transparency can feel risky instead of empowering." <br/> — Dean Guida, founder of Slingshot
          </div>
        </GlassCard>
      </div>

      <div className="content-section">
        <GlassCard>
          <h2>Broader Digital Divide Context</h2>
          <p>
            As digital technologies get rapidly integrated into current workspaces, a technological issue seems to also arise: Digital Division. Digital Divide is referred to as the gap between individuals regarding their access to information and technology. In current workspaces, this digital divide manifests in a lot of ways that greatly affects one’s performance and experiences.
          </p>
          <p>
            Some workers might have limited access to stable internet connection or technology and have limited digital skills that prevent them from efficiently completing their tasks causing low productivity unlike those who are digital literate. This can also affect an individual's mental health as low productivity causes stress and anxiety. 
          </p>
          <p>
            <strong>Addressing the Divide:</strong> Workplaces can address this by providing continuous digital literacy training, ensuring fair and equal access to tools, and establishing stronger support from IT professionals.
          </p>
        </GlassCard>
      </div>
    </div>
  );
};
