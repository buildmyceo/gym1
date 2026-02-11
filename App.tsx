import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Amenities from './components/Amenities';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Button from './components/ui/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite font-sans selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Programs />
        <Amenities />
        
        {/* Cinematic Video/Image Break */}
        <div className="relative h-[60vh] w-full overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/1920/800?grayscale&blur=2')" }}>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6">"Discipline is the bridge between <br/> goals and accomplishment."</h2>
              <Button variant="secondary">Start Your Journey</Button>
            </div>
          </div>
        </div>

        <Trainers />
        <Membership />
        <Testimonials />
        
        {/* Final CTA */}
        <section className="py-24 bg-brand-gold text-brand-black text-center px-6">
           <h2 className="text-4xl md:text-6xl font-light mb-6">Ready to Ascend?</h2>
           <p className="text-brand-black/70 mb-10 max-w-xl mx-auto font-medium">Limited memberships available for the current quarter. Secure your consultation today.</p>
           <Button className="bg-brand-black text-white hover:bg-white hover:text-black border-none px-12 py-5 text-sm">Apply for Membership</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;