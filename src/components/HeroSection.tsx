import React from 'react';
import { NetworkTree } from './animation/NetworkTree';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <NetworkTree />
      </div>
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Decentralized AI Training, Rooted in Trust
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            OATH is an open protocol to distribute, verify, and monetize machine learning
            workloads across a global decentralized network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Take the OATH</Button>
            <Button variant="outline">Read Whitepaper</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-[#a26320]"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;