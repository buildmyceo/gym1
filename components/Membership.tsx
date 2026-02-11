import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Silver",
    price: "250",
    features: ["Access to main gym floor", "Locker room amenities", "1 Guest pass / month", "Complimentary Towel Service"],
    elite: false
  },
  {
    name: "Gold",
    price: "450",
    features: ["All Silver benefits", "Unlimited Group Classes", "2 Personal Training sessions", "Nutrition Consultation", "Recovery Lounge Access"],
    elite: false
  },
  {
    name: "Elite",
    price: "850",
    features: ["All Gold benefits", "Unlimited Personal Training", "Private Locker", "Laundry Service", "Priority Booking", "VIP Lounge Access"],
    elite: true
  }
];

const Membership: React.FC = () => {
  return (
    <Section id="membership" className="bg-brand-dark">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-4">Invest In <span className="font-serif italic text-brand-gold">Yourself.</span></h2>
        <p className="text-white/60">Choose the tier that matches your ambition.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`relative p-8 md:p-10 flex flex-col ${
              plan.elite 
                ? 'bg-brand-black border border-brand-gold/30 shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)]' 
                : 'bg-white/5 border border-white/5'
            }`}
          >
            {plan.elite && (
              <div className="absolute top-0 right-0 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest py-1 px-3">
                Most Exclusive
              </div>
            )}
            
            <h3 className="text-xl font-light uppercase tracking-widest text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-serif text-white">${plan.price}</span>
              <span className="text-white/40 ml-2 text-sm">/ month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <Check size={16} className={`mt-0.5 ${plan.elite ? 'text-brand-gold' : 'text-white/40'}`} />
                  <span className="font-light">{feat}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.elite ? 'secondary' : 'outline'} 
              fullWidth
            >
              {plan.elite ? 'Apply for Elite' : 'Select Plan'}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Membership;