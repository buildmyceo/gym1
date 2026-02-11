import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-2xl tracking-[0.2em] font-light text-white z-50 relative group">
          ELITE<span className="text-brand-gold font-bold">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-xs uppercase tracking-widest text-white/70 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="!py-3 !px-6 border-white/20">Book Tour</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" onClick={() => setMobileMenuOpen(false)}>
                Inquire Now
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;