
import React from 'react';
import { WaTextLogo } from './Icons';

const LogoInfoSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8">
      <div className="container mx-auto">
        <div className="border border-white/50 p-8 sm:p-16 text-center">
          <WaTextLogo className="text-white/80" textClassName="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.5em] font-light mt-4">WA CONTRACTOR</h2>
        </div>
        <div className="flex flex-col sm:flex-row mt-4 text-sm font-light text-white/70">
            <div className="flex-1 border border-white/50 p-4 flex items-center justify-center border-t-0 sm:border-t border-r-0 sm:border-r">
                <p>The Logo Symbol</p>
            </div>
            <div className="flex-[2] border border-white/50 p-4 flex items-center justify-center border-t-0 sm:border-t border-l-0">
                <p>The Brand Name</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LogoInfoSection;
