import React, { useState, useEffect } from 'react';
import { Tree, Menu, X } from 'lucide-react';
import Button from './ui/Button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f9e3be]/90 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Tree className="h-8 w-8 text-[#a26320]" />
            <span className="text-2xl font-bold text-[#3f1c08]">OATH</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              How It Works
            </a>
            <a href="#" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              Developers
            </a>
            <a href="#" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              Community
            </a>
            <a href="#" className="text-[#3f1c08] hover:text-[#a26320] font-medium transition-colors">
              Docs
            </a>
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button variant="primary">Join Network</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3f1c08]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f9e3be] border-t border-[#3f1c08]/10 pt-4 pb-6 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              How It Works
            </a>
            <a href="#" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              Developers
            </a>
            <a href="#" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              Community
            </a>
            <a href="#" className="text-[#3f1c08] font-medium py-2 hover:text-[#a26320] transition-colors">
              Docs
            </a>
            <Button variant="primary" className="mt-2">Join Network</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;