import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              USER AGREEMENT
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              TERMS OF <span className="glow-text-pink text-neon-pink">SERVICE</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              By using Drifty, you agree to comply with our terms. Please read them carefully.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-pink/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="glass-card p-12 md:p-20 space-y-12 max-w-4xl mx-auto border-white/5">
            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <FileText className="text-neon-pink" size={24} /> 1. Acceptance of Terms
              </h2>
              <p className="text-white/50 leading-relaxed">
                By downloading and accessing Drifty, you signify your agreement to these Terms of Service. If you do not agree, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <CheckCircle2 className="text-neon-pink" size={24} /> 2. License to Use
              </h2>
              <p className="text-white/50 leading-relaxed">
                We grant you a personal, non-exclusive, non-transferable, limited license to use Drifty for your personal, non-commercial entertainment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <AlertCircle className="text-neon-pink" size={24} /> 3. Prohibited Conduct
              </h2>
              <p className="text-white/50 leading-relaxed">
                You agree not to attempt to decompile, reverse engineer, or otherwise hack the game's code or leaderboard systems. Any attempt to manipulate scores may result in a permanent ban.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-4 uppercase italic-text">
                <FileText className="text-neon-pink" size={24} /> 4. Changes to Terms
              </h2>
              <p className="text-white/50 leading-relaxed">
                We reserve the right to modify these terms at any time. Your continued use of the game after changes are posted constitutes your acceptance of the new terms.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5 text-center">
              <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase mb-8">LAST UPDATED: MAY 2026</p>
              <button className="btn-neon btn-neon-pink">DOWNLOAD TERMS PDF</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
