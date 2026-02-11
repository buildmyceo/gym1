import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl tracking-[0.3em] font-light text-white mb-2"
        >
          ELITE<span className="text-brand-gold font-bold">.</span>
        </motion.h1>
        
        <motion.div 
            className="h-[1px] bg-brand-gold"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-12 text-[10px] uppercase tracking-widest text-white font-light"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;