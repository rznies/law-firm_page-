
import React from 'react';

const sectors = [
  { slug: "compliance", name: "Financial Regulations", sub: "Banking, Fintech, Crypto", count: "142 Cases" },
  { slug: "energy", name: "Energy & Infrastructure", sub: "Renewables, Grid, Pipelines", count: "89 Cases" },
  { slug: "corporate", name: "Corporate M&A", sub: "Acquisitions, Mergers, Due Diligence", count: "210 Cases" },
  { slug: "asset", name: "Asset Management", sub: "Patents, Trademarks, Licensing", count: "312 Cases" },
  { slug: "insolvency", name: "International Litigation", sub: "Arbitration, Trade Disputes", count: "67 Cases" },
  { slug: "employment", name: "Tech & Data Privacy", sub: "GDPR, Cyber Security, AI Law", count: "125 Cases" }
];

interface ExpertiseViewProps {
  onNavigate: (view: string) => void;
}

const ExpertiseView: React.FC<ExpertiseViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-48 pb-32">
      <div className="px-8 md:px-20 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mb-32 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8">Practice Areas</p>
          <h1 className="text-6xl md:text-8xl font-display text-white tracking-tighter leading-none mb-12">
            Multidisciplinary <br /><span className="italic text-slate-400">Legal Architecture</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Advk operates at the intersection of complex commerce and definitive law. Our practice is built on a foundation of extreme specialization and global reach.
          </p>
        </div>

        <div className="space-y-4">
          {sectors.map((sector, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(`exp-${sector.slug}`)}
              className="group border-b border-white/5 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/[0.02] px-8 transition-all duration-500 cursor-pointer animate-on-scroll"
            >
              <div className="flex items-center space-x-8">
                <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">0{i+1}</span>
                <div>
                  <h3 className="text-3xl font-display text-white group-hover:text-primary transition-colors duration-500">{sector.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">{sector.sub}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex items-center space-x-12">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{sector.count}</p>
                  <p className="text-[9px] uppercase text-slate-600">Successfully Managed</p>
                </div>
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background-dark group-hover:border-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-xl transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseView;
