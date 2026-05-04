import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Tooltip } from '../components/Tooltip';
import { ParallaxSection, ParallaxImage } from '../components/ParallaxSection';
import { HoverImage } from '../components/HoverImage';

export const DigitalDivideSection: React.FC = () => {
  return (
    <section id="divide" className="page-section">
      <ParallaxSection>
        <div className="section-divider"></div>
        <h2 style={{ textAlign: 'center' }}>
          <span className="gradient-text">The Digital Divide</span>
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto var(--spacing-2xl)', fontSize: '17px', fontWeight: 300 }}>
          The growing chasm in the modern AI-integrated workspace.
        </p>
      </ParallaxSection>

      <ParallaxSection delay={0.1} className="section-image-wrapper" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <ParallaxImage 
          src="/ai-divide/images/5 - digital divide hero.jpg" 
          alt="Person using a laptop with reflections, representing the digital divide" 
          height="380px"
        />
      </ParallaxSection>

      {/* Card 1: AI in Workspace */}
      <ParallaxSection mode="spotlight" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <GlassCard>
          <HoverImage 
            src="/ai-divide/images/6 - ai in workspace.jpg" 
            alt="Team collaborating in a modern tech office" 
            className="card-img"
          />
          <h2>AI in Workspace and the Digital Divide</h2>
          <p>
            The push to integrate AI into the workspace is largely driven by a top-down demand for increased productivity. Managers and executives see Large Language Models (LLMs) as tools to do more, faster. However, this expectation creates a new, invisible Digital Divide right inside the office.
          </p>
          <p>This divide separates employees into two camps:</p>
          <ul>
            <li>
              <strong>The Tech-Literate:</strong> Employees who possess the skills to navigate and prompt LLMs effectively. For them, AI is an accelerant that gives them a distinct upper hand in managing their workload.
            </li>
            <li>
              <strong>The Less Familiar:</strong> Employees who lack these specialized skills. To meet the new, high-pressure demands for productivity, they are forced to depend blindly on the AI — incurring what is known as <em>"cognitive debt."</em>
            </li>
          </ul>
        </GlassCard>
      </ParallaxSection>

      {/* Card 2: Culture of Fear */}
      <ParallaxSection mode="spotlight" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <GlassCard>
          <HoverImage 
            src="/ai-divide/images/7 - culture of fear.jpg" 
            alt="Person stressed at a desk with laptop" 
            className="card-img"
          />
          <h2>A Culture of Fear</h2>
          <p>
            This divide is worsened by a culture of fear. For those on the disadvantaged side of the divide, AI isn't empowering. They face the constant anxiety of AI "hallucinations" (fabricating information) and the heavy burden of being held accountable for regulatory compliance (such as EU laws) that the AI might violate.
          </p>
          <div className="quote-block">
            "It's not fear of AI. It's fear of how AI use will be perceived. Employees worry that using AI could undermine their credibility or raise questions about their value, especially in environments where expectations are rising faster than guidance."
            <br />— <Tooltip content="Dean Guida, founder of Slingshot. This highlights the anxiety surrounding AI integration in corporate environments." position="top">Dean Guida</Tooltip>, founder of Slingshot
          </div>
        </GlassCard>
      </ParallaxSection>

      {/* Card 3: Broader Context */}
      <ParallaxSection mode="spotlight">
        <GlassCard>
          <HoverImage 
            src="/ai-divide/images/8 - digital inclusion.jpg" 
            alt="Group of people learning with technology in a training session" 
            className="card-img"
          />
          <h2>Broader Digital Divide Context</h2>
          <p>
            As digital technologies get rapidly integrated into current workspaces, a technological issue seems to also arise: Digital Division. Digital Divide is referred to as the gap between individuals regarding their access to information and technology. In current workspaces, this digital divide manifests in a lot of ways that greatly affects one's performance and experiences.
          </p>
          <p>
            Some workers might have limited access to stable internet connection or technology and have limited digital skills that prevent them from efficiently completing their tasks — causing low productivity unlike those who are digitally literate. This can also affect an individual's mental health as low productivity causes stress and anxiety.
          </p>
          <p>
            <strong>Addressing the Divide:</strong> Workplaces can address this by providing continuous digital literacy training, ensuring fair and equal access to tools, and establishing stronger support from IT professionals.
          </p>
        </GlassCard>
      </ParallaxSection>
    </section>
  );
};
