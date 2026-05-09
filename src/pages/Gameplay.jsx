import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MousePointer2, CircleDot, Info, CheckCircle2, ChevronRight } from 'lucide-react';

const Gameplay = () => {
  const controls = [
    {
      title: "Tilt Steering",
      tag: "IMMERSIVE",
      description: "Uses your device's accelerometer for an immersive arcade feel. Simply tilt your iPhone left or right to steer.",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974"
    },
    {
      title: "Drag Gestures",
      tag: "PRECISION",
      description: "Precision at your fingertips. Drag your finger across the screen to glide your car through tight gaps in traffic.",
      icon: MousePointer2,
      image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?auto=format&fit=crop&q=80&w=2021"
    },
    {
      title: "Steering Wheel",
      tag: "CLASSIC",
      description: "For the classic racing enthusiasts. Use an on-screen virtual wheel for maximum control over every drift.",
      icon: CircleDot,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1983"
    }
  ];

  return (
    <div className="gameplay-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              PLAYER CONTROLS
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              HOW TO <span className="glow-text-pink text-neon-pink">PLAY</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Master the art of the drift with our versatile control system. Choose the method that fits your playstyle.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-pink/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Controls List */}
      <section className="section-py">
        <div className="container">
          <div className="flex flex-col gap-40">
            {controls.map((control, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <control.icon className="text-neon-blue" size={28} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-neon-blue uppercase">{control.tag}</span>
                      <h2 className="text-4xl font-black italic-text tracking-tight uppercase">{control.title}</h2>
                    </div>
                  </div>
                  <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-xl">
                    {control.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Adjustable sensitivity',
                      'Visual indicators',
                      'Haptic feedback',
                      'Dynamic scaling'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-neon-pink/10 flex items-center justify-center border border-neon-pink/20">
                          <CheckCircle2 className="text-neon-pink" size={10} />
                        </div>
                        <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 relative group">
                  <div className="glass-card p-3 border-white/10 relative z-10 overflow-hidden">
                    <div className="aspect-video rounded-xl overflow-hidden relative">
                      <img 
                        src={control.image} 
                        alt={control.title} 
                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-neon-blue/50 transition-all">
                            <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center animate-pulse">
                              <control.icon className="text-neon-blue" size={24} />
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-neon-blue/5 blur-[80px] -z-10 group-hover:bg-neon-blue/10 transition-all"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="section-py bg-white/[0.01]">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 border-neon-blue/20"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
                <Info className="text-neon-blue" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black italic-text">PRO <span className="text-neon-blue">TIPS</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { id: '01', title: 'Watch the Meter', desc: 'Your nitro meter refills faster when you\'re drifting close to other cars.' },
                { id: '02', title: 'Near Miss Bonus', desc: 'Drive close to traffic without crashing to earn extra points and speed boosts.' },
                { id: '03', title: 'Fuel is Life', desc: 'Prioritize fuel canisters over nitro if your tank is below 25%.' }
              ].map((tip, idx) => (
                <div key={idx} className="group">
                  <span className="text-5xl font-black text-white/5 mb-4 block group-hover:text-neon-blue/20 transition-colors">{tip.id}</span>
                  <h4 className="text-xl font-black mb-3 tracking-tight group-hover:text-neon-blue transition-colors uppercase">{tip.title}</h4>
                  <p className="text-white/40 leading-relaxed text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Settings Summary */}
      <section className="section-py container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-12 hover:border-neon-blue/30 transition-all">
            <h3 className="text-2xl font-black mb-6 uppercase italic-text">Settings Menu</h3>
            <p className="text-white/40 mb-8 leading-relaxed">Customize your experience with ease. Toggle game audio, switch between control methods, or manage your preferences instantly.</p>
            <ul className="space-y-4">
              {['Audio Customization', 'Input Sensitivity', 'Haptic Controls'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/60">
                  <ChevronRight size={14} className="text-neon-blue" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-12 border-neon-pink/20 hover:border-neon-pink/40 transition-all">
            <h3 className="text-2xl font-black mb-6 uppercase italic-text">Onboarding</h3>
            <p className="text-white/40 mb-8 leading-relaxed">Forgot how to drift? You can re-trigger the interactive tutorial anytime from the settings menu to sharpen your skills.</p>
            <button className="btn-neon btn-neon-pink btn-small w-full">RE-START TUTORIAL</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gameplay;
