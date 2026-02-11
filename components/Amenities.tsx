import React from 'react';
import Section from './ui/Section';
import { Waves, Dumbbell, Coffee, Wind, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  { icon: Waves, title: "Spa & Steam", desc: "Eucalyptus steam rooms and plunge pools." },
  { icon: Zap, title: "Recovery Lounge", desc: "NormaTec compression and Hypervolt therapy." },
  { icon: Coffee, title: "Nutrition Bar", desc: "Organic blends tailored to your workout." },
  { icon: ShieldCheck, title: "Private Suites", desc: "VIP training rooms for ultimate privacy." },
  { icon: Dumbbell, title: "Technogym Line", desc: "State-of-the-art artisan equipment." },
  { icon: Wind, title: "Air Purification", desc: "Hospital-grade HEPA filtration systems." },
];

const Amenities: React.FC = () => {
  return (
    <Section id="amenities" className="bg-brand-gray/30 border-y border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-light mb-6">Uncompromising <span className="text-brand-gold">Luxury.</span></h2>
        <p className="text-white/60 font-light">
          Every detail is curated to enhance your performance and relaxation. From arrival to departure, experience a seamless blend of hospitality and fitness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {amenities.map((item, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 p-4 rounded-full border border-white/10 group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10 transition-colors duration-300">
              <item.icon className="w-8 h-8 text-white group-hover:text-brand-gold transition-colors" strokeWidth={1} />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/50 font-light px-8">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Amenities;