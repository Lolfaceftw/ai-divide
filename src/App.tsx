import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './sections/HeroSection';
import { LabSection } from './sections/LabSection';
import { DigitalDivideSection } from './sections/DigitalDivideSection';
import { CensorshipSection } from './sections/CensorshipSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <div className="bg-glow bg-glow-primary"></div>
      <div className="bg-glow bg-glow-secondary"></div>
      <div className="bg-grid"></div>
      <main>
        <HeroSection />
        <LabSection />
        <DigitalDivideSection />
        <CensorshipSection />
      </main>
    </div>
  );
}

export default App;
