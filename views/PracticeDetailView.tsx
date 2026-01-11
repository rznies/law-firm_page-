
import React from 'react';

interface Section {
  title: string;
  desc: string;
}

interface CaseStudy {
  title: string;
  result: string;
}

interface PracticeContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  pillars: Section[];
  methodology: Section[];
  caseStudies: CaseStudy[];
  stats: { label: string; val: string }[];
  quote: string;
}

const contentMap: Record<string, PracticeContent> = {
  compliance: {
    title: "Regulatory Guardianship",
    subtitle: "Compliance Architecture",
    description: "In an era of transparent governance, we provide the skeletal structure for your compliance architecture, ensuring risk is not just managed, but eliminated before it manifests.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000", // Law library / Books
    pillars: [
      { title: "Risk Mitigation", desc: "Advanced algorithmic scanning and jurisdictional stress-testing of all internal protocols." },
      { title: "Data Sovereignty", desc: "Bespoke privacy frameworks for global data transmission under strict GDPR and international law." },
      { title: "Internal Auditing", desc: "Rigorous transparency protocols for multi-tier enterprises to maintain ironclad ethical standards." }
    ],
    methodology: [
      { title: "01. Diagnostic", desc: "Complete forensic audit of existing legal frameworks and operational vulnerabilities." },
      { title: "02. Synthesis", desc: "Architecting a custom compliance engine integrated into the firm's core DNA." },
      { title: "03. Oversight", desc: "Continuous real-time monitoring of regulatory shifts across 140+ jurisdictions." }
    ],
    caseStudies: [
      { title: "Global Fintech Restructuring", result: "Achieved 100% compliance across 12 emerging markets within 6 months." },
      { title: "Data Privacy Crisis Management", result: "Resolved major regulatory inquiry with zero penalties and updated governance." }
    ],
    stats: [{ label: "Jurisdictions Covered", val: "140+" }, { label: "Compliance Score", val: "99.9%" }],
    quote: "Compliance is not a constraint; it is the ultimate competitive advantage in a volatile global market."
  },
  corporate: {
    title: "Structural Integrity",
    subtitle: "Corporate Architecture",
    description: "We design corporate vehicles capable of navigating high-speed international markets while maintaining rock-solid legal integrity through every merger and acquisition.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000", // Gavel and law books
    pillars: [
      { title: "M&A Strategy", desc: "Aggressive, tactical acquisition support for global expansion and market dominance." },
      { title: "Governance Design", desc: "Building resilient board structures and bylaws that protect shareholder value." },
      { title: "Contract Synthesis", desc: "High-precision drafting for complex cross-border transactions and licensing." }
    ],
    methodology: [
      { title: "01. Strategic Mapping", desc: "Defining the legal roadmap for long-term corporate growth and exit strategies." },
      { title: "02. Due Diligence", desc: "Exhaustive legal scrutiny of targets to uncover hidden liabilities." },
      { title: "03. Execution", desc: "Seamless closing of complex deals with multi-jurisdictional legal coordination." }
    ],
    caseStudies: [
      { title: "Cross-Border Energy Merger", result: "Facilitated a $4.2B merger between European and Asian utility giants." },
      { title: "Series D Tech Financing", result: "Secured $250M in funding with optimized equity protection for founders." }
    ],
    stats: [{ label: "Billion $ Deals", val: "24" }, { label: "Retention Rate", val: "98%" }],
    quote: "The strength of a corporation lies in the invisible architecture of its legal foundation."
  },
  asset: {
    title: "Value Preservation",
    subtitle: "Asset Management",
    description: "Definitive strategies for the discovery, protection, and recovery of high-value international assets in the most complex jurisdictions.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000", // Lawyer signing a contract
    pillars: [
      { title: "Global Discovery", desc: "Unmatched tracing of hidden assets across jurisdictions using elite intelligence networks." },
      { title: "Enforcement", desc: "Tactical legal action to secure and liquidate judgments across international borders." },
      { title: "Portfolio Shielding", desc: "Proactive legal structures and trusts designed to prevent asset dilution." }
    ],
    methodology: [
      { title: "01. Intelligence", desc: "Forensic tracing of capital flows and beneficial ownership across shadow banking." },
      { title: "02. Intervention", desc: "Immediate freezing orders and injunctions to secure assets mid-transit." },
      { title: "03. Liquidation", desc: "Strategic conversion of legal claims into liquid capital for our clients." }
    ],
    caseStudies: [
      { title: "Sovereign Debt Recovery", result: "Recovered $800M in contested assets from offshore holding entities." },
      { title: "Real Estate Trust Protection", result: "Successfully defended a multi-generational family estate from hostile creditors." }
    ],
    stats: [{ label: "Recovered Assets", val: "$4.2B" }, { label: "Success Rate", val: "89%" }],
    quote: "True wealth is only as secure as the legal vault that contains it."
  },
  insolvency: {
    title: "Strategic Resilience",
    subtitle: "Insolvency & Turnaround",
    description: "Navigating the threshold of crisis with precision. We transform insolvency into an opportunity for structural rebirth and definitive creditor resolution.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=2000", // Handshake in legal setting
    pillars: [
      { title: "Crisis Audit", desc: "Immediate 72-hour structural analysis of distressed entities and liquidity flows." },
      { title: "Restructuring", desc: "Aggressive debt-to-equity and operational re-engineering to restore viability." },
      { title: "Arbitration", desc: "Expert representation in international bankruptcy tribunals and creditor negotiations." }
    ],
    methodology: [
      { title: "01. Triage", desc: "Stabilizing the entity's legal standing to prevent immediate collapse." },
      { title: "02. Negotiation", desc: "Mediating high-stakes settlements with banks and institutional creditors." },
      { title: "03. Rebirth", desc: "Implementing the new legal framework for a lean, high-performing enterprise." }
    ],
    caseStudies: [
      { title: "Retail Giant Turnaround", result: "Restructured $2B in debt, saving 15,000 jobs and maintaining operations." },
      { title: "Industrial Bankruptcy Exit", result: "Successful Chapter 11 equivalent filing with 95% creditor approval." }
    ],
    stats: [{ label: "Companies Saved", val: "120+" }, { label: "Debt Managed", val: "$12B+" }],
    quote: "Insolvency is not an end; it is a tactical reset for the resilient enterprise."
  },
  energy: {
    title: "The Catalyst",
    subtitle: "Energy Sector Law",
    description: "Powering legal frameworks for a changing planet. From legacy oil & gas to renewable futures and grid modernization.",
    image: "https://images.unsplash.com/photo-1449156001935-d25a83ad4408?auto=format&fit=crop&q=80&w=2000", // Law library aisles
    pillars: [
      { title: "PPA Strategy", desc: "Complex Power Purchase Agreement negotiation and drafting for utility-scale projects." },
      { title: "Regulatory Nav", desc: "Definitive guidance through global carbon mandates and energy licensing." },
      { title: "Grid Infrastructure", desc: "Legal support for large-scale transmission projects and cross-border connectivity." }
    ],
    methodology: [
      { title: "01. Impact Study", desc: "Assessing the legal viability of projects against evolving environmental law." },
      { title: "02. Permitting", desc: "Accelerating the legal path to construction through strategic regulatory engagement." },
      { title: "03. Lifecycle Mgmt", desc: "Ongoing legal support for operational assets and decommissioning." }
    ],
    caseStudies: [
      { title: "Offshore Wind Farm Launch", result: "Negotiated all project agreements for a 1.2GW Atlantic installation." },
      { title: "Hydrogen Infrastructure Patenting", result: "Secured IP rights and government subsidies for a new green energy plant." }
    ],
    stats: [{ label: "GigaWatts Managed", val: "14GW" }, { label: "Active Projects", val: "45" }],
    quote: "Energy transitions require the legal bridge between current reality and future possibility."
  },
  employment: {
    title: "Relational Equity",
    subtitle: "Employment Law",
    description: "Sophisticated advisory for the modern global workforce. Aligning human capital with enterprise goals through high-end contract architecture.",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=2000", // Scales of justice statue
    pillars: [
      { title: "Executive Alignment", desc: "High-level contract design for C-suite, board members, and key talent." },
      { title: "Dispute Neutral", desc: "Silent, effective resolution of high-stakes labor conflicts and internal investigations." },
      { title: "Policy Architecture", desc: "Building future-proof corporate culture through rigorous and fair legal code." }
    ],
    methodology: [
      { title: "01. Culture Audit", desc: "Reviewing internal policies for legal compliance and cultural resonance." },
      { title: "02. Conflict Design", desc: "Drafting ironclad non-compete and confidentiality frameworks." },
      { title: "03. Resolution", desc: "Expert mediation and litigation defense in high-profile employment suits." }
    ],
    caseStudies: [
      { title: "Fortune 500 Workforce Re-org", result: "Managed legal exit of 2,000+ employees with zero litigation filed." },
      { title: "CEO Succession Contract", result: "Negotiated complex compensation and IP retention for a global tech leader." }
    ],
    stats: [{ label: "Executive Placements", val: "500+" }, { label: "Disputes Settled", val: "100%" }],
    quote: "The relationship between an enterprise and its people is its most sensitive legal asset."
  }
};

interface PracticeDetailViewProps {
  slug: string;
  onNavigate: (view: string) => void;
}

const PracticeDetailView: React.FC<PracticeDetailViewProps> = ({ slug, onNavigate }) => {
  const data = contentMap[slug] || contentMap.compliance;

  return (
    <div className="bg-background-dark min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
        
        <div className="relative z-10 px-8 md:px-20 max-w-screen-2xl mx-auto w-full">
          <div className="max-w-4xl animate-on-scroll">
            <button 
              onClick={() => onNavigate('expertise')}
              className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-12 hover:translate-x-[-10px] transition-transform duration-500"
            >
              <span className="material-symbols-outlined text-sm">west</span>
              <span>Back to Expertise</span>
            </button>
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-primary mb-6">{data.subtitle}</p>
            <h1 className="text-7xl md:text-9xl font-display text-white tracking-tighter leading-none mb-10">
              {data.title.split(' ')[0]} <br />
              <span className="italic text-slate-400">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 md:px-20 py-24 border-y border-white/5 bg-card-dark/20 backdrop-blur-xl">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-24">
          {data.stats.map((stat, i) => (
            <div key={i} className="animate-on-scroll stagger-1">
              <p className="text-7xl font-display text-white tracking-tighter mb-2">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="px-8 md:px-20 py-40">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24 animate-on-scroll">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Strategic Pillars</p>
            <h2 className="text-5xl font-display text-white">Foundations of Excellence</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {data.pillars.map((pillar, i) => (
              <div key={i} className="group p-12 bg-white/5 border border-white/5 rounded-[40px] hover:bg-primary transition-all duration-700 animate-on-scroll" style={{ animationDelay: `${i * 200}ms` }}>
                <span className="text-4xl font-display text-primary group-hover:text-background-dark/40 mb-8 block opacity-30">0{i+1}</span>
                <h3 className="text-3xl font-display text-white group-hover:text-background-dark mb-6 transition-colors duration-500">{pillar.title}</h3>
                <p className="text-slate-400 group-hover:text-background-dark/80 transition-colors duration-500 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-8 md:px-20 py-40 bg-card-dark/40">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="animate-on-scroll">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Our Protocol</p>
            <h2 className="text-6xl font-display text-white leading-tight mb-12">How we architect <br /><span className="italic text-slate-400">results.</span></h2>
            <div className="space-y-16">
              {data.methodology.map((m, i) => (
                <div key={i} className="flex space-x-8 items-start border-l border-white/10 pl-12 relative">
                  <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_15px_rgba(212,194,161,0.5)]"></div>
                  <div>
                    <h4 className="text-xl font-display text-white mb-2">{m.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-on-scroll hidden lg:block">
            <div className="relative aspect-square rounded-[80px] overflow-hidden border border-white/5 rotate-3 hover:rotate-0 transition-all duration-1000">
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1200" alt="Legal documents" className="w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Narratives */}
      <section className="px-8 md:px-20 py-40 border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 animate-on-scroll">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">Narratives</p>
              <h2 className="text-6xl font-display text-white">Track Record</h2>
            </div>
            <p className="text-slate-500 font-light max-w-sm">Abstracted narratives demonstrating the definitive nature of our legal intervention.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.caseStudies.map((cs, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-16 rounded-[48px] hover:border-primary/20 transition-all duration-700 group animate-on-scroll">
                <div className="mb-12 flex justify-between">
                  <span className="material-symbols-outlined text-primary text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-700">history_edu</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">Confidential Case 0{i+1}</span>
                </div>
                <h3 className="text-3xl font-display text-white mb-6">{cs.title}</h3>
                <div className="pt-8 border-t border-white/10 flex items-center space-x-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <p className="text-slate-400 font-medium">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Element / Partner */}
      <section className="px-8 md:px-20 py-40 bg-black">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 animate-on-scroll">
            <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Lead Partner" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-12 animate-on-scroll">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Lead Strategic Counsel</p>
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tighter leading-tight">
              A partnership built on <br /><span className="italic text-slate-400">unwavering focus.</span>
            </h2>
            <div className="relative pl-12 border-l border-white/10 py-4">
              <p className="text-2xl text-slate-400 font-light italic leading-relaxed">
                "{data.quote}"
              </p>
            </div>
            <button 
              onClick={() => onNavigate('home')} 
              className="group flex items-center space-x-6 bg-primary text-background-dark px-12 py-6 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-primary/20"
            >
              <span>Schedule Strategic Review</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cross-Link / Footer Navigation */}
      <section className="px-8 md:px-20 py-32 border-t border-white/5 bg-background-dark">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">Discover other practice areas</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['corporate', 'energy', 'compliance', 'asset', 'insolvency', 'employment'].filter(s => s !== slug).map((s) => (
              <button 
                key={s} 
                onClick={() => onNavigate(`exp-${s}`)}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-all pb-2 border-b border-transparent hover:border-primary"
              >
                {s.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeDetailView;
