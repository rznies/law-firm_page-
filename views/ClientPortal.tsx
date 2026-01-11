
import React from 'react';

const ClientPortal: React.FC = () => {
  return (
    <div className="pt-48 pb-32">
      <div className="px-8 md:px-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Secure Connection Active
            </p>
            <h1 className="text-4xl md:text-6xl font-display text-white tracking-tighter leading-none">
              The Private <span className="italic">Suite</span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client ID: VX-9921</p>
              <p className="text-[9px] uppercase text-slate-600">Enterprise Access</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-background-dark">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Roadmap */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-dark rounded-[40px] border border-white/5 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-8xl">timeline</span>
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-12">Strategic Roadmap</h3>
              <div className="space-y-12">
                {[
                  { status: 'complete', title: 'Phase I: Initial Briefing & Risk Assessment', date: 'Oct 12, 2024' },
                  { status: 'active', title: 'Phase II: Discovery & Evidence Synthesis', date: 'In Progress' },
                  { status: 'pending', title: 'Phase III: Arbitration Filing & Opening Briefs', date: 'Est. Nov 05' },
                  { status: 'pending', title: 'Phase IV: Final Resolution & Outcome Execution', date: 'Est. Dec 12' }
                ].map((step, i) => (
                  <div key={i} className="flex items-start space-x-8 group">
                    <div className="relative mt-1">
                      <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                        step.status === 'complete' ? 'bg-primary border-primary' : 
                        step.status === 'active' ? 'bg-emerald-500 border-emerald-500 animate-pulse' : 
                        'bg-transparent border-white/20'
                      }`}></div>
                      {i < 3 && <div className="absolute top-4 left-2 w-[1px] h-12 bg-white/10"></div>}
                    </div>
                    <div>
                      <h4 className={`text-xl font-display ${step.status === 'pending' ? 'text-slate-600' : 'text-white'}`}>{step.title}</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panels */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white/5 rounded-[40px] border border-white/5 p-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Partner Direct</h3>
              <div className="flex items-center space-x-6 mb-8 p-4 bg-background-dark rounded-2xl border border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                  <img src="https://i.pravatar.cc/150?u=41" alt="Partner" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Dr. Marcus Vance</p>
                  <p className="text-[9px] uppercase tracking-tighter text-emerald-500">Available Now</p>
                </div>
                <button className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all">
                  <span className="material-symbols-outlined text-lg">chat</span>
                </button>
              </div>
              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Request Urgent Briefing
              </button>
            </div>

            {/* Document Vault */}
            <div className="bg-card-dark rounded-[40px] border border-white/5 p-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Secure Vault</h3>
                <span className="material-symbols-outlined text-primary text-xl">lock</span>
              </div>
              <div className="space-y-4">
                {['Case_Roadmap_V1.pdf', 'Discovery_List_Draft.xlsx', 'Arbitration_Guidelines.pdf'].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">description</span>
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">{file}</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-600 text-sm">download</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
