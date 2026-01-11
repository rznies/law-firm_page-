
import React from 'react';

const Values: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
              alt="Strategic Discussion" 
              className="w-full h-[500px] object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">Our approach makes <br /><span className="italic">a real difference</span></h2>
          </div>

          <div className="space-y-8">
            <div className="group flex items-start space-x-6">
              <span className="text-sm font-bold text-primary opacity-40 group-hover:opacity-100 transition-opacity pt-1">01</span>
              <div>
                <h3 className="text-xl font-display text-white mb-2">Strategic thinking</h3>
                <p className="text-slate-400 text-sm leading-relaxed">We don't just look for legal loopholes—we deliver real business solutions. We see connections others miss.</p>
              </div>
            </div>
            <div className="group flex items-start space-x-6">
              <span className="text-sm font-bold text-primary opacity-40 group-hover:opacity-100 transition-opacity pt-1">02</span>
              <div>
                <h3 className="text-xl font-display text-white mb-2">Personal partnership</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Every client is a partner to us. We build deep relationships where your business and your concerns are ours.</p>
              </div>
            </div>
            <div className="group flex items-start space-x-6">
              <span className="text-sm font-bold text-primary opacity-40 group-hover:opacity-100 transition-opacity pt-1">03</span>
              <div>
                <h3 className="text-xl font-display text-white mb-2">Ethics & Transparency</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Fair conduct and clear pricing are the foundation of our credibility. We operate with uncompromising integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
