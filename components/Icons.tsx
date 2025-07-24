
import React from 'react';

export const WaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex gap-0.5">
      <div className="w-1 h-6 bg-white"></div>
      <div className="w-1 h-6 bg-white"></div>
      <div className="w-1 h-6 bg-white"></div>
    </div>
    <span className="text-xl font-bold tracking-wider">WA</span>
    <span className="text-sm font-light tracking-widest">CONSTRUCTION</span>
  </div>
);

export const WaTextLogo: React.FC<{ className?: string, textClassName?: string }> = ({ className, textClassName }) => (
    <h1 className={`font-serif select-none ${className}`}>
      <span className={textClassName}>W</span>
      <span className={`-ml-[0.15em] ${textClassName}`}>A</span>
    </h1>
);

export const ArrowDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FourPointStar: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 0L24.5858 17.4142L42 21L24.5858 24.5858L21 42L17.4142 24.5858L0 21L17.4142 17.4142L21 0Z" fill="white"/>
    </svg>
);

export const SocialIcons: React.FC = () => (
    <div className="flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 hover:opacity-100 transition-opacity"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 hover:opacity-100 transition-opacity"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 hover:opacity-100 transition-opacity"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-2.7-1.7-5.5-2.5-8.3-2.5-.8 0-1.6.1-2.3.3-3.2.7-6.1 2.2-8.5 4.5C2 15.7 1.4 13.3 1.2 11c-.2-2.3.6-4.5 2-6.3 1.4-1.8 3.5-3.2 5.8-4.2C11.5 0 14.5.1 17 .9c2.5.8 4.7 2.2 6.5 4.1.2-.2.4-.4.6-.6zm-8.8 9.5C14.6 15 16 16.6 17 18.2c.4.6.8 1.2 1.2 1.8-2-.8-4.1-1.3-6.2-1.3-2.5 0-4.8.8-6.8 2.2.4-1 .7-2 1-3 .5-1.6 1.3-3.2 2.4-4.6 1-1.3 2.3-2.4 3.8-3.1 1.5-.7 3.1-1 4.7-1 .3 0 .6 0 .9.1-.6 1.2-1.2 2.4-1.7 3.6z"></path></svg>
    </div>
);
