import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, Star, Trophy, Users, Zap, ShieldAlert, Activity, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Home = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'waitlist'), {
        email,
        createdAt: new Date()
      });
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Error adding to waitlist: ", error);
      setStatus('error');
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold tracking-widest mb-6"
            >
              NEXT-GEN MOBILE RACING
            </motion.div>

            <motion.h1
              whileHover={{ scale: 1.02 }}
              className="text-7xl md:text-9xl font-black mb-6 tracking-tighter italic-text cursor-default leading-[0.9]"
            >
              <span className="glow-text-blue">DRIF</span>
              <span className="glow-text-pink text-neon-pink">TY</span>
            </motion.h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
              High-speed neon racing with nitro boosts, drifting action, and endless survival gameplay.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="#" className="btn-neon btn-neon-blue flex items-center gap-3">
                <Play size={20} fill="currentColor" />
                COMING SOON ON APP STORE
              </a>
              <Link to="/features" className="btn-neon btn-neon-pink flex items-center gap-3">
                EXPLORE FEATURES
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[160px] -top-1/4 -left-1/4 animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] bg-neon-pink/10 rounded-full blur-[160px] -bottom-1/4 -right-1/4 animate-pulse"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-py bg-white/[0.01]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Downloads', value: 'COMING SOON', icon: Users, color: 'var(--neon-blue)' },
              { label: 'Tracks', value: 'ENDLESS', icon: Zap, color: 'var(--neon-pink)' },
              //  { label: 'Players', value: 'GLOBAL', icon: Trophy, color: 'var(--neon-blue)' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card text-center group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon style={{ color: stat.color }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-py">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">DRIVE LIKE A <span className="text-neon-blue glow-text-blue">PRO</span></h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">Master the art of drifting and survive the endless highway in the most visually stunning racer of 2026.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="glass-card">
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/20">
                <Zap className="text-neon-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">NITRO BOOST</h3>
              <p className="text-white/50 leading-relaxed">Collect nitro canisters to unleash blazing speeds and overtake traffic with ease.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-card">
              <div className="w-14 h-14 rounded-2xl bg-neon-pink/10 flex items-center justify-center mb-8 border border-neon-pink/20">
                <Activity className="text-neon-pink" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">ENDLESS RACE</h3>
              <p className="text-white/50 leading-relaxed">No finish lines. Just you, your car, and the open road. How long can you survive?</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="glass-card">
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-8 border border-neon-blue/20">
                <ShieldAlert className="text-neon-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">DYNAMIC TRAFFIC</h3>
              <p className="text-white/50 leading-relaxed">Real-time traffic AI that challenges your reflexes and forces split-second decisions.</p>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link to="/features" className="text-neon-pink font-bold hover:glow-text-pink transition-all flex items-center gap-2 justify-center tracking-widest text-sm">
              VIEW ALL FEATURES <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visuals Section */}
      <section className="section-py relative overflow-hidden bg-white/[0.01]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">STUNNING <span className="text-neon-pink glow-text-pink">CYBERPUNK</span> VISUALS</h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed">
                Experience ultra-smooth 60FPS gameplay with vibrant neon lighting and high-fidelity car models designed specifically for iOS.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ rotateY: 20, x: 50, opacity: 0 }}
                whileInView={{ rotateY: 0, x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="glass-card p-3 border-neon-blue/20 aspect-video overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <p className="text-[10px] text-neon-blue font-bold tracking-[0.4em] mb-2 uppercase">GAMEPLAY PREVIEW</p>
                    <h4 className="text-2xl font-black italic">ENDLESS NIGHT HIGHWAY</h4>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -z-10 w-full h-full bg-neon-blue/5 blur-[100px] top-0 left-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card py-24 px-8 text-center relative overflow-hidden border-neon-pink/20"
        >
          <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic-text">READY TO <span className="glow-text-pink text-neon-pink">DRIFT?</span></h2>
          <p className="text-white/50 mb-12 max-w-lg mx-auto text-lg">Join the waitlist and be the first to know when Drifty hits the App Store.</p>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-neon-blue"
              >
                <CheckCircle size={28} />
                <span className="text-xl font-bold tracking-widest uppercase">YOU'RE ON THE LIST!</span>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleWaitlist} 
                className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="input-neon text-center md:text-left h-14"
                />
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`btn-neon btn-neon-blue h-14 px-10 font-black whitespace-nowrap ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? 'JOINING...' : 'NOTIFY ME'}
                </button>
              </motion.form>
            )}
            {status === 'error' && (
              <p className="text-red-500 mt-4 text-sm font-bold tracking-widest uppercase">Failed to join. Please try again.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
