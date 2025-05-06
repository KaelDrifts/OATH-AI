import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DeveloperSection from './components/DeveloperSection';
import WhyOATH from './components/WhyOATH';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#f9e3be] text-[#3f1c08] min-h-screen">
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <DeveloperSection />
      <WhyOATH />
      <QuoteSection />
      <Footer />
    </div>
  );
}

export default App;