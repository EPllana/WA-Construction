
import React from 'react';
import { WaLogo } from './Icons';

const Header: React.FC = () => {
  const navItems = ['OUR SERVICES', 'PROJECTS', 'OUR STORY'];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 sm:p-8">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center text-white">
          <a href="#" aria-label="WA Contractor Home">
            <WaLogo />
          </a>
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm tracking-widest font-light opacity-80 hover:opacity-100 transition-opacity">
                {item}
              </a>
            ))}
          </div>
          <a href="#" className="border border-white/80 px-5 py-2 text-sm tracking-widest font-light hover:bg-white hover:text-black transition-colors">
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
