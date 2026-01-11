
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-20 py-24 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <div className="text-3xl font-display font-bold tracking-tighter">Advk</div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            A top-tier law firm providing comprehensive legal services with a focus on professionalism and human approach.
          </p>
          <div className="flex space-x-4">
            {['li', 'fb', 'ig', 'tw'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold hover:bg-primary hover:text-background-dark transition-all">
                {social.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-10">Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Civil law</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Debt recovery</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Insolvency</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-10">Company</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our team</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Insights</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-10">Address</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Václavské náměstí 123/1<br />
            110 00 Praha 1<br />
            Czech Republic
          </p>
          <p className="mt-8 text-primary font-medium">info@advk.cz</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
        <div>&copy; {new Date().getFullYear()} ADVK Legal. All rights reserved.</div>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
