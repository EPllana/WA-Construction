
import React from 'react';
import { WaTextLogo } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2400&h=1600&auto=format&fit=crop"
          alt="Modern residential building"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <WaTextLogo className="absolute right-0 -mr-8 sm:right-16 md:right-32 text-white/5" textClassName="text-[20rem] sm:text-[30rem] md:text-[40rem]" />

      <div className="relative z-10 container mx-auto px-6 text-left w-full h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Building Excellence <br />
            Into Every <br />
            Structure.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
