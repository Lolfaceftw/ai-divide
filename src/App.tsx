import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { DigitalDivide } from './pages/DigitalDivide';
import { Censorship } from './pages/Censorship';
import { InteractiveLab } from './pages/InteractiveLab';

function App() {
  return (
    <Router basename="/ai-divide">
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digital-divide" element={<DigitalDivide />} />
            <Route path="/censorship" element={<Censorship />} />
            <Route path="/lab" element={<InteractiveLab />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
