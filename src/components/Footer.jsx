import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MessageSquare, Zap, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                <Zap className="text-neon-blue" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter glow-text-blue">
                DRIFTY
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              The ultimate mobile drifting experience. High-speed neon racing through endless traffic with nitro boosts and dynamic obstacles.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest text-xs mb-8 uppercase">Explore</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Features'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/40 hover:text-neon-blue hover:pl-2 transition-all flex items-center gap-2 group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest text-xs mb-8 uppercase">Support</h4>
            <ul className="flex flex-col gap-4">
              {['Support Center', 'Feedback', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.split(' ')[0].toLowerCase()}`} className="text-white/40 hover:text-neon-blue hover:pl-2 transition-all flex items-center gap-2 group">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest text-xs mb-8 uppercase">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Stay updated with the latest tracks and cars.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="input-neon h-12 text-xs font-bold tracking-widest"
              />
              <button className="btn-neon btn-neon-blue btn-small font-black tracking-widest h-12">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-xs font-bold tracking-widest">© 2026 DRIFTY CAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link to="/privacy" className="text-white/20 hover:text-white transition-colors text-xs font-bold tracking-widest">PRIVACY</Link>
            <Link to="/terms" className="text-white/20 hover:text-white transition-colors text-xs font-bold tracking-widest">TERMS</Link>
            <a href="mailto:driftycarracing@gmail.com" className="text-white/20 hover:text-neon-blue transition-colors text-xs font-bold tracking-widest">SUPPORT@DRIFTY.COM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
