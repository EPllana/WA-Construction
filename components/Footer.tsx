
import React from 'react';
import { WaTextLogo, SocialIcons } from './Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-white/70 hover:text-white transition-colors duration-300 font-light">{children}</a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-white/20 text-white py-16 px-6 sm:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="md:col-span-1 lg:col-span-2">
                         <div className="flex items-center gap-4 mb-4">
                            <WaTextLogo className="text-white" textClassName="text-5xl" />
                            <h3 className="text-lg tracking-[0.2em]">WA CONTRACTOR</h3>
                         </div>
                         <p className="text-xs text-white/50 font-light">&copy; WA Contractor. All rights reserved.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-2 gap-8">
                         <div>
                            <h4 className="font-bold mb-4">About</h4>
                            <ul className="space-y-2">
                                <li><FooterLink href="#">About Us</FooterLink></li>
                                <li><FooterLink href="#">Our Story</FooterLink></li>
                                <li><FooterLink href="#">Careers</FooterLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><FooterLink href="#">Our Services</FooterLink></li>
                                <li><FooterLink href="#">Projects</FooterLink></li>
                                <li><FooterLink href="#">Our Clients</FooterLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm text-white/70 font-light">
                                <li>00971 55 230 1302</li>
                                <li>info@wacontractor.com</li>
                                <li>1st Street, Dubai, UAE</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20 flex justify-between items-center">
                    <div className="w-24 h-px bg-white/50"></div>
                     <SocialIcons />
                    <div className="w-24 h-px bg-white/50"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
