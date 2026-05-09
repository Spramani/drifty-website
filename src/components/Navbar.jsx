import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Support', path: '/support' },
    { name: 'Feedback', path: '/feedback' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/90 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20 group-hover:border-neon-pink/40 transition-all duration-500">
            <Zap className="text-neon-blue group-hover:text-neon-pink group-hover:scale-110 transition-all duration-500" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter glow-text-blue group-hover:glow-text-pink transition-all duration-500">
            DRIFTY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-only flex items-center gap-6">
          <div className="flex items-center gap-10 mr-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 hover:text-white ${location.pathname === link.path ? 'text-neon-blue bg-white/5' : 'text-white/70 hover:bg-white/5'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href="#" className="btn-neon btn-neon-pink btn-small font-black tracking-widest !py-2.5">
            PLAY NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-only relative z-50 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-white/10 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-only fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-40 p-8 pt-32 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black italic-text tracking-tighter transition-all ${location.pathname === link.path ? 'text-neon-blue glow-text-blue' : 'text-white/40 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto pt-10 border-t border-white/10">
              <a href="#" className="btn-neon btn-neon-pink w-full text-center font-black py-5 text-xl">
                PLAY NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
