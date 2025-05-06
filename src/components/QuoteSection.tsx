import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Pattern - Abstract data flows/tree rings */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#a26320] rounded-full blur-3xl -translate-x-1/4 -translate-y-1/2 scale-150"></div>
        <div className="absolute inset-0 bg-[#a26320] rounded-full blur-3xl translate-x-3/4 translate-y-1/2 scale-100"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mx-auto mb-8 text-[#a26320] opacity-70"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium italic mb-8 leading-relaxed">
            We believe in open AI infrastructure for everyone.
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#a26320] flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <div>
              <p className="font-semibold text-lg">Dr. Olivia Chen</p>
              <p className="text-[#3f1c08]/70">Founder, OATH Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;