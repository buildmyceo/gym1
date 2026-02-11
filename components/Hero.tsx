import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Luxury Gym Interior" 
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-brand-gold uppercase tracking-[0.3em] text-sm mb-6">
            Redefining Human Potential
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            Train Like <span className="font-semibold">Elite.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Where performance meets lifestyle. Experience a sanctuary designed for those who demand excellence in every aspect of life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary">Book a Private Tour</Button>
            <Button variant="outline">View Membership</Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;