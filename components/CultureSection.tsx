
import React from 'react';
import { ArrowDown } from './Icons';

const CultureSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8 relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-[-5rem] left-[5%] w-px h-[calc(100%+10rem)] bg-white/50"></div>
            <div className="absolute top-[-5rem] left-[30%] w-px h-[calc(100%+10rem)] bg-white/50 hidden lg:block"></div>
            <div className="absolute top-[-5rem] left-[55%] w-px h-[calc(100%+10rem)] bg-white/50"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-white/50"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/50"></div>
        </div>

        <div className="relative lg:col-span-1">
          <div className="flex items-start gap-4 mb-8">
            <p className="text-sm uppercase tracking-widest whitespace-nowrap pt-1">How we care about</p>
            <div className="w-16 h-px bg-white mt-3"></div>
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-white"></div>
              <div className="absolute top-0 right-0 h-full w-px bg-white"></div>
              <ArrowDown className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[225deg] w-5 h-5"/>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Corporate <br /> Culture
          </h2>
        </div>
        
        <div className="relative lg:col-span-1 flex items-start lg:items-end">
          <div className="lg:pl-8">
             <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                    <div className="w-0.5 h-4 bg-white"></div>
                    <div className="w-0.5 h-4 bg-white"></div>
                    <div className="w-0.5 h-4 bg-white"></div>
                </div>
                <span className="text-xs font-light tracking-widest">WA CONTRUCTION</span>
            </div>
            <p className="text-white/80 font-light leading-relaxed max-w-md">
              We encourage open and honest communication, transparency, and mutual respect in all our interactions. We strive to treat everyone with fairness, dignity, and respect, regardless of their position or background. We promote a culture of diversity and inclusion, where everyone's unique perspectives and contributions are valued and appreciated.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-8 md:right-16 lg:right-32 top-1/2 -translate-y-1/2 h-2/3 flex items-center">
        <div className="w-px h-full bg-white/50"></div>
        <p className="writing-vertical-rl rotate-180 text-sm tracking-widest uppercase pl-4 whitespace-nowrap">
            accountability. Our core values are integrity, and transparency.
        </p>
      </div>
    </section>
  );
};

export default CultureSection;
