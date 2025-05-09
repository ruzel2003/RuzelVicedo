import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection'; 
import RemoteTeamSection from './components/RemoteTeamSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServiceSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import SupportSection from './components/SupportSection';
import NewsletterSection from './components/NewsletterSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

function App() {
  useEffect(() => {

    document.title = 'brainwaveio | Landing Page Template';

    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
   link.href = '/RuzelVicedo/vite.svg';
   link.href = '/RuzelVicedo/logo.svg';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main" id="top" scroll-to-top="scroll-to-top">
        <div className="content">
          <div data-bs-target="#navbar" data-bs-spy="scroll" tabIndex="0">
            <Hero />
            <StatsSection />
            <AboutSection />
            <RemoteTeamSection />
            <HowItWorksSection />
            <ServiceSection />
            <TestimonialsSection />
            <PricingSection />
            <SupportSection />
            <NewsletterSection />
            <ScrollToTopButton />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
