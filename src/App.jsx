import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';

// Page Components
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import CategoryPortfolio from './pages/CategoryPortfolio';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/portfolio/category/:category" element={<CategoryPortfolio />} />
        </Routes>
      </main>
      <Analytics />
      <SpeedInsights />
      <Footer />
      <WhatsappIcon />
    </div>
  );
}

export default App
