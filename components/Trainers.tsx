import React, { useState } from 'react';
import Section from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Head of Performance",
    image: "https://picsum.photos/400/500?grayscale&random=10",
    bio: "Alex brings over 15 years of high-performance coaching experience, having worked with Olympians and professional athletes across multiple disciplines. His methodology combines data-driven strength programming with neuro-muscular efficiency training."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Biomechanics Specialist",
    image: "https://picsum.photos/400/500?grayscale&random=11",
    bio: "With a Masters in Kinesiology, Sarah specializes in movement optimization and injury rehabilitation. She bridges the gap between clinical therapy and high-performance training, ensuring longevity in your fitness journey."
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Strength Coach",
    image: "https://picsum.photos/400/500?grayscale&random=12",
    bio: "Marcus is a former competitive powerlifter turned elite coach. His programming focuses on absolute strength development and structural balance, building a resilient foundation for all athletic endeavors."
  },
  {
    id: 4,
    name: "Elena Vos",
    role: "Yoga & Mobility",
    image: "https://picsum.photos/400/500?grayscale&random=13",
    bio: "Elena combines traditional Ashtanga yoga with modern mobility science. Her sessions are designed to unlock restricted movement patterns, improve recovery times, and cultivate deep mental focus."
  }
];

const Trainers: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedTrainer = trainers.find(t => t.id === selectedId);

  return (
    <Section id="trainers">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
         <h2 className="text-4xl md:text-5xl font-light">
           World-Class <span className="font-serif italic text-brand-gold">Coaching.</span>
         </h2>
         <p className="text-white/60 max-w-sm mt-4 md:mt-0 text-right md:text-left">
           Our coaches are industry leaders, holding advanced degrees in kinesiology and sports science.
         </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            layoutId={`card-${trainer.id}`}
            onClick={() => setSelectedId(trainer.id)}
            className="group relative aspect-[3/4] overflow-hidden bg-brand-gray cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img 
              layoutId={`image-${trainer.id}`}
              src={trainer.image} 
              alt={trainer.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <motion.p layoutId={`role-${trainer.id}`} className="text-brand-gold text-xs uppercase tracking-widest mb-1">{trainer.role}</motion.p>
              <motion.h3 layoutId={`name-${trainer.id}`} className="text-xl font-medium text-white">{trainer.name}</motion.h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedTrainer && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl bg-brand-dark overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-gold hover:text-black transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 md:h-auto shrink-0">
                <motion.img 
                  layoutId={`image-${selectedId}`}
                  src={selectedTrainer.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto custom-scrollbar">
                <motion.p layoutId={`role-${selectedId}`} className="text-brand-gold text-xs uppercase tracking-widest mb-2">{selectedTrainer.role}</motion.p>
                <motion.h3 layoutId={`name-${selectedId}`} className="text-3xl md:text-4xl font-light text-white mb-6">{selectedTrainer.name}</motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white/70 font-light leading-relaxed mb-8">
                    {selectedTrainer.bio}
                  </p>
                  
                  <div className="space-y-4 border-t border-white/10 pt-8">
                    <h4 className="text-sm font-medium text-white">Certifications & Expertise</h4>
                    <ul className="text-sm text-white/50 space-y-2">
                       <li>• NASM Certified Personal Trainer</li>
                       <li>• MS in Exercise Physiology</li>
                       <li>• Precision Nutrition Level 2</li>
                    </ul>
                  </div>

                  <button className="mt-8 px-6 py-3 border border-white/20 text-xs uppercase tracking-widest hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-all w-full md:w-auto">
                    Book Session
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Trainers;