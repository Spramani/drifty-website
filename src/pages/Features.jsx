import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Settings, Activity, Trophy, Shield, Smartphone, ChevronRight } from 'lucide-react';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const features = [
    {
      title: "Nitro Boost System",
      description: "Hit the nitro to gain insane speeds. Collect blue canisters on the track to refill your meter and blast past your rivals.",
      icon: Zap,
      color: "var(--neon-blue)",
      tag: "SPEED"
    },

    {
      title: "Endless Racing",
      description: "The highway never ends. Challenge yourself to see how far you can go before the traffic gets the better of you.",
      icon: Play,
      color: "var(--neon-blue)",
      tag: "GAMEPLAY"
    },
    {
      title: "Control Methods",
      description: "Play your way. Switch between Tilt, Drag, or a virtual Steering Wheel to find your perfect racing style.",
      icon: Settings,
      color: "var(--neon-pink)",
      tag: "INPUT"
    },
    {
      title: "Dynamic Traffic",
      description: "Navigate through smart AI traffic that changes lane, speeds up, and creates challenging obstacles.",
      icon: Activity,
      color: "var(--neon-blue)",
      tag: "ENGINE"
    },
    {
      title: "Personal High Scores",
      description: "Keep track of your best runs. Beat your own records and prepare for global leaderboards coming soon.",
      icon: Trophy,
      color: "var(--neon-pink)",
      tag: "RECORDS"
    },
    {
      title: "Level-Up System",
      description: "Progress through tiers with our dynamic level-up system. Get visual notifications as you reach new milestones.",
      icon: Shield,
      color: "var(--neon-blue)",
      tag: "PROGRESS"
    },
    {
      title: "Onboarding Guide",
      description: "New to the race? Our interactive 'How to Play' tutorial ensures you master the controls before hitting the highway.",
      icon: Smartphone,
      color: "var(--neon-pink)",
      tag: "TUTORIAL"
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              GAME MECHANICS
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              CORE <span className="glow-text-blue">FEATURES</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Every mechanic in Drifty is designed for maximum thrill and responsive control. Explore the engine behind the speed.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-py">
        <div className="container">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="glass-card group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-white/5">
                    <feature.icon style={{ color: feature.color }} size={28} />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-white/30 uppercase pt-2">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-black tracking-widest text-white/20 group-hover:text-neon-pink transition-colors">
                  LEARN MORE <ChevronRight size={12} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="section-py relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 border-neon-pink/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 blur-[100px] -z-10"></div>
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-3/5">
                <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-[10px] font-black tracking-[0.3em] mb-8 uppercase">
                  TECH STACK
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic-text">
                  BUILT WITH <span className="text-neon-pink glow-text-pink">PURE POWER</span>
                </h2>
                <p className="text-white/40 text-lg mb-12 leading-relaxed">
                  Drifty leverages a high-performance custom architecture to deliver 60FPS precision on iOS. From real-time traffic AI to global data syncing, every line of code is optimized for the drift.
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    'SwiftUI & SpriteKit',
                    'SwiftUIGameView',
                    'Remote Config',
                    'Adaptive Banner Ads',
                    'Firebase Analytics',
                    'Metal Performance Shaders'
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-blue group-hover:scale-150 transition-all shadow-[0_0_8px_var(--neon-blue)]"></div>
                      <span className="text-sm font-bold tracking-tight text-white/70 group-hover:text-white transition-colors uppercase">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-pink/20 rounded-full blur-[60px] animate-pulse"></div>
                  <div className="relative w-full h-full bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-3xl group">
                    <Settings size={120} className="text-white/5 animate-spin-slow group-hover:text-neon-blue/20 transition-all duration-1000" />
                    <div className="absolute inset-4 border border-dashed border-white/10 rounded-full"></div>
                    <div className="absolute inset-12 border border-neon-blue/20 rounded-full flex items-center justify-center">
                      <Zap className="text-neon-blue glow-text-blue" size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Features;
