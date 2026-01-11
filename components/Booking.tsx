
import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="px-8 md:px-20 py-40 bg-black relative">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-display text-white tracking-tighter leading-[0.9]">
              Initiate your <br /><span className="italic text-slate-400">counsel</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-md font-light leading-relaxed">
              Schedule an executive consultation. Our partners are ready to review your case with the utmost confidentiality.
            </p>
          </div>
          
          <div className="space-y-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold mb-4">Direct Inquiry</p>
              <a href="tel:+420123456789" className="text-3xl md:text-5xl font-display text-white hover:text-primary transition-all duration-500 border-b border-white/5 hover:border-primary pb-2">
                +420 123 456 789
              </a>
            </div>
            <div className="flex items-center space-x-12">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-600 font-bold mb-2">Office Hours</p>
                <p className="text-xs text-slate-400">Mon — Fri: 09:00 - 18:00</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-slate-600 font-bold mb-2">Headquarters</p>
                <p className="text-xs text-slate-400">Prague, District 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card-dark p-12 md:p-20 rounded-[48px] border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-1000"></div>
          
          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold block ml-2">Area of expertise</label>
              <select className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-6 text-slate-200 custom-select focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer hover:bg-white/[0.08]">
                <option className="bg-card-dark">Executive Consultation</option>
                <option className="bg-card-dark">Corporate Restructuring</option>
                <option className="bg-card-dark">Litigation & Dispute</option>
                <option className="bg-card-dark">Energy Law Advisory</option>
              </select>
            </div>
            
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold block ml-2">Preferred Protocol</label>
              <select className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-6 text-slate-200 custom-select focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer hover:bg-white/[0.08]">
                <option className="bg-card-dark">Encrypted Video Call</option>
                <option className="bg-card-dark">Private Office Meeting</option>
                <option className="bg-card-dark">Phone Briefing</option>
              </select>
            </div>

            <button className="w-full group flex items-center justify-between bg-white text-background-dark px-10 py-7 rounded-3xl font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-primary transition-all duration-500 mt-8 shadow-2xl">
              <span>Reserve meeting time</span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background-dark/5">
                <span className="material-symbols-outlined text-xl transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </button>
            
            <p className="text-[9px] text-center text-slate-600 font-medium uppercase tracking-[0.2em]">
              All data is processed under strict GDPR compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
