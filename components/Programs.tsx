import React from 'react';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: "Personal Training",
    description: "One-on-one coaching with industry-leading biomechanics experts tailored to your physiology.",
    image: "https://picsum.photos/600/400?grayscale&random=1"
  },
  {
    title: "Strength & Conditioning",
    description: "Periodized athletic programming designed to build raw power and functional resilience.",
    image: "https://picsum.photos/600/400?grayscale&random=2"
  },
  {
    title: "Functional Fitness",
    description: "High-intensity dynamic movement classes that improve agility, endurance, and core stability.",
    image: "https://picsum.photos/600/400?grayscale&random=3"
  },
  {
    title: "Wellness & Recovery",
    description: "Holistic recovery protocols including cryotherapy, infrared saunas, and mobility sessions.",
    image: "https://picsum.photos/600/400?grayscale&random=4"
  }
];

const Programs: React.FC = () => {
  return (
    <Section id="programs" dark={false}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <span className="text-brand-gold uppercase tracking-widest text-xs font-medium mb-4 block">Curated Disciplines</span>
          <h2 className="text-4xl md:text-5xl font-light text-white">Engineered for <span className="italic font-serif">Impact.</span></h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors mt-8 md:mt-0">
          View All Programs <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="group relative h-[400px] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="w-12 h-[1px] bg-brand-gold mb-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">{program.title}</h3>
              <p className="text-white/60 font-light text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <button className="flex items-center gap-2 text-sm uppercase tracking-widest mx-auto">
          View All Programs <ArrowUpRight size={16} />
        </button>
      </div>
    </Section>
  );
};

export default Programs;