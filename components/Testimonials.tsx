import React from 'react';
import Section from './ui/Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-12 h-12 text-brand-gold/30 mx-auto mb-8" />
        <h3 className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-10">
          "Elite Performance isn't just a gym; it's a sanctuary. The attention to detail, from the equipment to the recovery amenities, is unmatched in the city."
        </h3>
        <div>
          <p className="text-brand-gold uppercase tracking-widest text-sm font-medium">James Sterling</p>
          <p className="text-white/40 text-sm mt-1">CEO, Sterling Ventures</p>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;