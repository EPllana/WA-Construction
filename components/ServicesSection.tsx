
import React from 'react';
import { ArrowDown, FourPointStar } from './Icons';

const ServiceItem: React.FC<{ label: string; title: string; }> = ({ label, title }) => (
    <div className="relative text-left">
        <ArrowDown className="w-8 h-8 mb-4"/>
        <p className="text-sm tracking-wider text-white/70 mb-2">{label}</p>
        <h3 className="text-3xl sm:text-4xl font-bold">{title}</h3>
    </div>
);


const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8 relative">
      <FourPointStar className="absolute top-16 right-16 sm:right-32 w-8 h-8 opacity-80" />
      <div className="container mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Our Services</h2>
          <div className="flex-grow h-px bg-white/50"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          <ServiceItem label="How we want to be." title="Service 1" />
          <ServiceItem label="How we want to be." title="Service 2" />
          <ServiceItem label="How we want to be." title="Service 3" />
          <ServiceItem label="How we want to be." title="Service 4" />
        </div>
      </div>
      <div className="absolute bottom-24 left-16 h-48 w-px bg-white/50 hidden lg:block"></div>
      <div className="absolute bottom-24 left-16 w-8 h-8 hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-px bg-white/50"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-white/50"></div>
         <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] w-5 h-5 text-white/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
       <div className="absolute top-24 right-0 w-1/2 h-[400px]">
         <img 
            src="https://images.unsplash.com/photo-1600607687839-a61943523b9a?q=80&w=1974&auto=format&fit=crop"
            alt="Architectural drawing"
            className="w-full h-full object-cover object-left mask-image"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
         />
       </div>
    </section>
  );
};

export default ServicesSection;
