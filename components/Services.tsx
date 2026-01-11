
import React from 'react';

const services = [
  { slug: "compliance", title: "Compliance", desc: "Protecting legal entities with a rigorous focus on regulatory standards, risk management, and data sovereignty.", icon: "verified_user" },
  { slug: "corporate", title: "Corporate Law", desc: "High-stakes legal architecture for real estate, construction, and complex international contract synthesis.", icon: "account_balance" },
  { slug: "asset", title: "Asset Management", desc: "Sophisticated recovery of large receivables and strategic representation in high-value enforcement proceedings.", icon: "account_balance_wallet" },
  { slug: "insolvency", title: "Insolvency", desc: "Elite representation before arbitration tribunals, providing definitive restructuring and insolvency strategies.", icon: "gavel" },
  { slug: "energy", title: "Energy Sector", desc: "Navigating the complexities of global energy regulations and long-term contract lifecycle management.", icon: "bolt" },
  { slug: "employment", title: "Employment", desc: "Resolution of high-profile employment disputes and strategic advisory on executive relationships.", icon: "work" }
];

interface ServicesProps {
  onNavigate: (view: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="expertise" className="px-8 md:px-20 py-40 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 animate-on-scroll">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-display text-white leading-tight">
              Bespoke <br /><span className="text-primary italic">Expertise</span>
            </h2>
          </div>
          <div className="lg:max-w-lg space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Our multidisciplinary approach ensures that every nuance of your legal requirements is met with precision and strategic foresight.
            </p>
            <button 
              onClick={() => onNavigate('expertise')}
              className="inline-flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group"
            >
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Explore all practice areas</span>
              <span className="material-symbols-outlined text-sm transform group-hover:translate-x-2 transition-transform duration-300">east</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 overflow-hidden">
          {services.map((service, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(`exp-${service.slug}`)}
              className={`group relative p-12 bg-background-dark hover:bg-card-dark transition-all duration-700 flex flex-col justify-between min-h-[400px] animate-on-scroll stagger-${(i % 3) + 1} cursor-pointer`}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/20 transition-all duration-1000"></div>
              
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors text-3xl font-light">{service.icon}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-display text-white group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-500 font-light">{service.desc}</p>
              </div>
              
              <div className="pt-8 flex items-center justify-between">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:bg-primary group-hover:text-background-dark group-hover:border-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">arrow_forward</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white/0 group-hover:text-white/40 transition-all duration-500 uppercase">View Service</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
