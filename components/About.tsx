import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              More Than a Gym. <br />
              <span className="text-brand-gold font-serif italic">A Way of Life.</span>
            </h2>
            <div className="space-y-6 text-white/70 font-light leading-relaxed">
              <p>
                Elite Performance was founded on a simple premise: high achievers deserve an environment that matches their ambition. We are not just a facility; we are a carefully curated ecosystem of wellness, strength, and recovery.
              </p>
              <p>
                Our philosophy integrates clinical-grade sports science with the aesthetics of a 5-star resort. Every corner of our 25,000 sq ft sanctuary is designed to optimize your focus and elevate your potential.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <span className="block text-4xl font-light text-white">25k</span>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-2 block">Square Feet</span>
              </div>
              <div>
                <span className="block text-4xl font-light text-white">40+</span>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-2 block">Elite Trainers</span>
              </div>
              <div>
                <span className="block text-4xl font-light text-white">24/7</span>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-2 block">Access</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image Mosaic */}
        <div className="order-1 md:order-2 relative h-[500px] md:h-[600px]">
          <motion.img 
             src="https://picsum.photos/600/800?grayscale"
             className="absolute top-0 right-0 w-3/4 h-3/4 object-cover z-10 brightness-75"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             alt="Trainer adjusting weights"
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-2/3 h-2/3 border border-white/10 z-0 p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <img 
               src="https://picsum.photos/500/500?grayscale" 
               className="w-full h-full object-cover brightness-50"
               alt="Gym equipment detail"
             />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;