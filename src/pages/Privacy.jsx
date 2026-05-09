import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              LEGAL COMPLIANCE
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              PRIVACY <span className="glow-text-blue">POLICY</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              We value your privacy and are committed to protecting your personal data. Learn how we handle your information.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {[
              { icon: Shield, title: "DATA SAFETY", desc: "Your gameplay data is encrypted and stored securely." },
              { icon: Lock, title: "SECURE ACCESS", desc: "We use high-end industry standards for data protection." },
              { icon: Eye, title: "TRANSPARENCY", desc: "No hidden tracking. We only collect what's necessary." }
            ].map((item, i) => (
              <div key={i} className="glass-card text-center p-10 border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-neon-blue" size={28} />
                </div>
                <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 md:p-20 space-y-12 max-w-4xl mx-auto">
            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <Database className="text-neon-blue" size={24} /> 1. Data Collection
              </h2>
              <p className="text-white/50 leading-relaxed">
                Drifty collects minimal personal information. This includes gameplay statistics (high scores, level progress) and device identifiers for analytics purposes. We use Firebase and AdMob to improve your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <Shield className="text-neon-blue" size={24} /> 2. Advertising & Analytics
              </h2>
              <p className="text-white/50 leading-relaxed">
                We use Google AdMob for in-game advertisements and Firebase Analytics to understand gameplay patterns. These services may collect device-specific information to serve relevant ads and optimize performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <Lock className="text-neon-blue" size={24} /> 3. Data Protection
              </h2>
              <p className="text-white/50 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your information. Your progress is synced via iCloud, leveraging Apple's secure infrastructure.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-center">
              <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-8">LAST UPDATED: MAY 2026</p>
              <a href="mailto:driftycarracing@gmail.com" className="btn-neon btn-neon-blue">CONTACT DATA OFFICER</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
