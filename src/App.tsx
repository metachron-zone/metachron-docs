import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Features } from './pages/Features';
import { Ecosystem } from './pages/Ecosystem';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Hiring } from './pages/Hiring';
export function App() {
  return <Router>
      <div className="bg-[#0B0F19] min-h-screen text-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<>
                  <HeroSection />
                  <FeatureSection />
                  <CTASection />
                </>} />
            <Route path="/features" element={<Features />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hiring" element={<Hiring />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}