
import React from 'react';
import { WaTextLogo, ArrowDown } from './Icons';

const ValueItem: React.FC<{ label: string; title: string; }> = ({ label, title }) => (
    <div className="relative text-center sm:text-left">
        <p className="text-sm tracking-wider text-white/70 mb-2">{label}</p>
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h3>
        <ArrowDown className="w-8 h-8 mx-auto sm:mx-0"/>
    </div>
);

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8 relative overflow-hidden">
        <WaTextLogo className="absolute inset-0 flex items-center justify-center text-white/5" textClassName="text-[25rem] sm:text-[40rem] md:text-[50rem]" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Our Company Values</h2>
          <div className="w-6 h-6 border-t-2 border-r-2 border-white transform rotate-45 mt-2 sm:mt-0"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <ValueItem label="How we are." title="Corporate Identity" />
          <ValueItem label="How we want to be." title="Corporate Behaviour" />
          <ValueItem label="How we wanna look." title="Corporate Design" />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
