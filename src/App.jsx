import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import './index.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import EnquiryModal from './components/EnquiryModal';
import useEnquiryModal from './hooks/useEnquiryModal';
import { EnquiryProvider } from './context/EnquiryContext';
import SEO from './components/SEO';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

// Page Components
import Home from './pages/Home';
import CategoryPortfolio from './pages/CategoryPortfolio';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const { isOpen, closeModal } = useEnquiryModal();

  return (
    <HelmetProvider>
      <EnquiryProvider>
        <SEO />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
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
          <EnquiryModal isOpen={isOpen} onClose={closeModal} />
        </div>
      </EnquiryProvider>
    </HelmetProvider>
  );
}

export default App
