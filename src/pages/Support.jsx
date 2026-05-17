import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, ShieldCheck, Bug, HelpCircle, MessageSquare, ChevronRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const faqs = [
    { q: "How do I change control methods?", a: "You can change controls in the Settings menu from the main dashboard. Choose between Tilt, Drag, or Steering Wheel." },
    // { q: "Is Drifty free to play?", a: "Yes, Drifty is free to download and play. We use ads to support development, but you can remove them via an in-app purchase." },
    { q: "Is Drifty free to play?", a: "Yes, Drifty is free to download and play. We use ads to support development" },
    { q: "My game is lagging, what should I do?", a: "Make sure you have the latest iOS update and close any heavy background apps. Drifty is optimized for iPhone 11 and newer." }
    // { q: "How do I save my progress?", a: "Your progress is automatically saved to iCloud if you are logged in on your device." }
    //   { q: "How do I save my progress?", a: "Your progress is automatically saved to iCloud if you are logged in on your device." }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              HELP CENTER
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              SUPPORT <span className="glow-text-blue">CENTER</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              We're here to help you get back on the track. Find answers or reach out to our team.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="glass-card text-center p-12">
              <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mx-auto mb-8 border border-neon-blue/20">
                <Mail className="text-neon-blue" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Email Us</h3>
              <p className="text-white/40 text-sm mb-8">Get direct help from our development team.</p>
              <a href="mailto:driftycarracing@gmail.com" className="text-neon-blue font-bold hover:glow-text-blue transition-all tracking-widest text-xs">
                DRIFTYCARRACING@GMAIL.COM
              </a>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-card text-center p-12">
              <div className="w-16 h-16 rounded-2xl bg-neon-pink/10 flex items-center justify-center mx-auto mb-8 border border-neon-pink/20">
                <Clock className="text-neon-pink" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Response</h3>
              <p className="text-white/40 text-sm mb-8">Typical wait time for a response.</p>
              <span className="text-neon-pink font-black text-2xl glow-text-pink tracking-tighter">24–48 HOURS</span>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-card text-center p-12">
              <div className="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mx-auto mb-8 border border-neon-blue/20">
                <ShieldCheck className="text-neon-blue" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Security</h3>
              <p className="text-white/40 text-sm mb-8">We never ask for your passwords or sensitive data.</p>
              <span className="text-white/60 font-bold text-xs tracking-widest">100% SECURE</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ and Bug Report */}
      <section className="section-py bg-white/[0.01]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* FAQ */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <HelpCircle className="text-neon-blue" size={32} />
                <h2 className="text-4xl font-black italic-text uppercase">FAQ</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="glass-card !p-8 hover:bg-white/[0.04] transition-all group">
                    <h4 className="text-white font-black mb-3 group-hover:text-neon-blue transition-colors uppercase tracking-tight">{faq.q}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bug Report */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Bug className="text-neon-pink" size={32} />
                <h2 className="text-4xl font-black italic-text uppercase">Report a Bug</h2>
              </div>
              <div className="glass-card border-neon-pink/20 p-12">
                <p className="text-white/40 mb-10 leading-relaxed">
                  Found a glitch? Help us improve Drifty by providing as much detail as possible.
                </p>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center shrink-0 border border-neon-pink/20 group-hover:scale-110 transition-transform">
                      <Smartphone size={20} className="text-neon-pink" />
                    </div>
                    <div>
                      <h5 className="font-black text-sm uppercase tracking-tight">Device Info</h5>
                      <p className="text-xs text-white/30 mt-1">Include your iPhone model and iOS version.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center shrink-0 border border-neon-pink/20 group-hover:scale-110 transition-transform">
                      <MessageSquare size={20} className="text-neon-pink" />
                    </div>
                    <div>
                      <h5 className="font-black text-sm uppercase tracking-tight">Detailed Description</h5>
                      <p className="text-xs text-white/30 mt-1">Tell us what happened and how to reproduce it.</p>
                    </div>
                  </div>
                </div>
                <Link to="/feedback" className="btn-neon btn-neon-pink w-full text-center py-5 font-black">
                  GO TO FEEDBACK FORM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
