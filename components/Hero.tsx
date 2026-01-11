
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative px-8 md:px-20 pt-48 pb-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
        
        <div className="lg:col-span-8 animate-reveal">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8 opacity-80">
            Established Excellence • Since 1998
          </p>
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-display leading-[0.9] tracking-tighter text-white mb-12 text-balance">
            Strategic <br />
            <span className="italic font-light text-slate-400">Legal</span> Counsel
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12 pt-6">
            <button 
              onClick={onBookClick}
              className="group flex items-center space-x-6 bg-primary text-background-dark px-12 py-6 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/10"
            >
              <span>Secure consultation</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-500">arrow_right_alt</span>
            </button>
            
            <div className="flex items-center space-x-5 group cursor-default">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-2 border-background-dark overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={`https://i.pravatar.cc/150?u=${i + 40}`} alt="Partner" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Trusted Partners</p>
                <p className="text-[9px] uppercase tracking-tighter text-slate-500">Global representation network</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:pb-8 animate-reveal [animation-delay:200ms]">
          <div className="relative pl-12 border-l border-white/10 py-4">
            <span className="material-symbols-outlined text-primary/30 absolute left-0 top-0 text-3xl">format_quote</span>
            <p className="text-xl text-slate-400 leading-relaxed font-light italic text-balance">
              "We provide more than just legal services; we deliver architectural solutions for your most complex corporate challenges."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
