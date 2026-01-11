
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-8 md:px-20 ${
        scrolled ? 'py-4 glass border-b border-white/5 shadow-2xl' : 'py-10 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')}
          className="text-3xl font-display font-bold tracking-tighter cursor-pointer group"
        >
          Advk<span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500">.</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-16">
          {[
            { id: 'home', label: 'Home' },
            { id: 'expertise', label: 'Expertise' },
            { id: 'team', label: 'Team' },
            { id: 'portal', label: 'Client Portal' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => onNavigate(item.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                currentView === item.id ? 'text-primary' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-8">
          <button 
            onClick={onBookClick}
            className="group hidden sm:flex items-center space-x-4 px-8 py-3.5 border border-white/10 rounded-full hover:bg-primary hover:text-background-dark hover:border-primary transition-all duration-500"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Book a meeting</span>
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-background-dark/20 transition-colors">
              <span className="material-symbols-outlined text-[14px] transform group-hover:rotate-45 transition-transform duration-500">arrow_forward</span>
            </div>
          </button>
          
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all active:scale-95 group">
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
