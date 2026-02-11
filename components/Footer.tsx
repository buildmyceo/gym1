import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl tracking-[0.2em] font-light text-white block mb-6">
              ELITE<span className="text-brand-gold font-bold">.</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              The premier destination for those who refuse to compromise on their health, performance, and lifestyle.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li>500 W 33rd St, New York, NY</li>
              <li>+1 (212) 555-0199</li>
              <li>membership@elite.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 mb-6">Hours</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Sat - Sun: 6:00 AM - 9:00 PM</li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs uppercase tracking-widest text-white/50 mb-6">Newsletter</h4>
             <div className="flex flex-col gap-4">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
               />
               <Button variant="outline" className="text-xs">Subscribe</Button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs mb-4 md:mb-0">
            © 2024 Elite Performance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Instagram size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
            <Twitter size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
            <Linkedin size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
            <Facebook size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;