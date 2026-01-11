
import React from 'react';

const partners = [
  { name: "Dr. Marcus Vance", role: "Managing Partner", spec: "M&A / Strategy", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
  { name: "Elena Rossi", role: "Senior Partner", spec: "Litigation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { name: "Julian Chen", role: "Partner", spec: "Tech & IP", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
  { name: "Sarah Whittaker", role: "Director", spec: "Finance Law", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" }
];

const TeamView: React.FC = () => {
  return (
    <div className="pt-48 pb-32">
      <div className="px-8 md:px-20 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mb-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8">The Boardroom</p>
          <h1 className="text-6xl md:text-8xl font-display text-white tracking-tighter leading-none mb-12">
            Masters of <br /><span className="italic text-slate-400">Tactical Law</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Our team is comprised of elite specialists recruited from the world's most demanding legal environments. We don't just practice law; we shape it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 border border-white/5">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{p.role}</p>
                <div className="pt-2">
                  <span className="text-[9px] uppercase tracking-widest text-primary/60 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">Spec: {p.spec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamView;
