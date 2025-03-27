// import { useState } from 'react'
import './App.css';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import Process from './components/Process';
// import BeforeAfter from './components/BeforeAfter';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Process />
        {/* <BeforeAfter /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsappIcon />
    </div>
  );
}

export default App
