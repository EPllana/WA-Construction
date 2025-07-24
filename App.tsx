
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CultureSection from './components/CultureSection';
import ValuesSection from './components/ValuesSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import LogoInfoSection from './components/LogoInfoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white/90 min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <CultureSection />
        <ValuesSection />
        <ServicesSection />
        <AboutSection />
        <LogoInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
