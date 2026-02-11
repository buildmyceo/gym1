import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', dark = true }) => {
  return (
    <section 
      id={id} 
      className={`relative py-24 md:py-32 ${dark ? 'bg-brand-black' : 'bg-brand-dark'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;