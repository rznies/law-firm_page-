
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LegalAssistant from './components/LegalAssistant';
import ExpertiseView from './views/ExpertiseView';
import TeamView from './views/TeamView';
import ClientPortal from './views/ClientPortal';
import PracticeDetailView from './views/PracticeDetailView';

export type View = 'home' | 'expertise' | 'team' | 'portal' | 
                   'exp-compliance' | 'exp-corporate' | 'exp-asset' | 
                   'exp-insolvency' | 'exp-energy' | 'exp-employment';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showAssistant, setShowAssistant] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }, 150);

    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [currentView]);

  const renderView = () => {
    if (currentView.startsWith('exp-')) {
      const slug = currentView.replace('exp-', '');
      return <PracticeDetailView slug={slug} onNavigate={(v) => setCurrentView(v as View)} />;
    }

    switch (currentView) {
      case 'expertise':
        return <ExpertiseView onNavigate={(v) => setCurrentView(v as View)} />;
      case 'team':
        return <TeamView />;
      case 'portal':
        return <ClientPortal />;
      default:
        return (
          <>
            <Hero onBookClick={() => setShowAssistant(true)} />
            <section className="px-8 md:px-20 py-20 animate-on-scroll">
              <div className="relative max-w-7xl mx-auto rounded-[40px] overflow-hidden shadow-2xl group border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000" 
                  alt="Attorney Portrait" 
                  className="w-full h-[700px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 right-12 max-w-md p-10 bg-card-dark/40 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-primary/20">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6 block">format_quote</span>
                  <p className="text-2xl font-display italic leading-relaxed text-slate-200">
                    "When it comes to critical decisions, you need law that stands up under pressure."
                  </p>
                </div>
              </div>
            </section>
            <Services onNavigate={(v) => setCurrentView(v as View)} />
            <Values />
            <Booking />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col bg-dot-pattern">
      <Navbar 
        onBookClick={() => setShowAssistant(true)} 
        onNavigate={(view) => setCurrentView(view as View)}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />

      {showAssistant && (
        <LegalAssistant onClose={() => setShowAssistant(false)} />
      )}
    </div>
  );
};

export default App;
