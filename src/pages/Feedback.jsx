import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Feedback = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await addDoc(collection(db, 'feedback'), {
        ...formData,
        createdAt: new Date()
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setFormStatus('idle');
      alert("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section - Refined for better balance */}
      <section className="relative pt-64 pb-16 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-[10px] font-black tracking-[0.4em] mb-6 uppercase">
              YOUR OPINION MATTERS
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 italic-text tracking-tighter">
              PLAYER <span className="glow-text-pink text-neon-pink">FEEDBACK</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Help us make Drifty the best racing game on the market. Share your thoughts, report bugs, or request new features!
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-neon-pink/10 rounded-full blur-[140px]"></div>
        </div>
      </section>

      <section className="section-py pt-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Info - More compact and professional */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-black mb-6 italic-text uppercase tracking-tight">SUPPORT <span className="text-neon-blue glow-text-blue">CHANNELS</span></h2>
                <p className="text-white/40 leading-relaxed max-w-md">
                  We are always looking for player feedback to improve the drifting experience. Reach out via any of our channels.
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { icon: Mail, label: 'Email Support', val: 'driftycarracing@gmail.com', color: 'var(--neon-blue)' },
                  { icon: MapPin, label: 'Headquarters', val: 'Remote Worldwide', color: 'var(--neon-pink)' },
                  { icon: Phone, label: 'Availability', val: '24/7 Response Time', color: 'var(--neon-blue)' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:scale-105 transition-all duration-500">
                      <item.icon style={{ color: item.color }} size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{item.label}</h4>
                      <p className="text-white font-bold tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Form - Enhanced aesthetics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 md:p-12 border-neon-blue/20 relative z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 blur-[60px] -z-10"></div>
                
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 rounded-full bg-neon-blue/20 flex items-center justify-center mx-auto mb-8 border border-neon-blue/30">
                        <CheckCircle className="text-neon-blue" size={40} />
                      </div>
                      <h3 className="text-3xl font-black mb-4 italic-text uppercase">MESSAGE SENT!</h3>
                      <p className="text-white/40 mb-10">Our team will get back to you within 48 hours.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="btn-neon btn-neon-blue btn-small"
                      >
                        SEND ANOTHER
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black tracking-[0.2em] text-white/50 uppercase ml-1">Full Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="NAME" className="input-neon text-sm h-14" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black tracking-[0.2em] text-white/50 uppercase ml-1">Email Address</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="EMAIL@EXAMPLE.COM" className="input-neon text-sm h-14" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/50 uppercase ml-1">Subject</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="HOW CAN WE HELP?" className="input-neon text-sm h-14" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black tracking-[0.2em] text-white/50 uppercase ml-1">Message</label>
                        <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="TELL US MORE..." className="input-neon text-sm py-5 min-h-[150px] resize-none"></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className={`btn-neon btn-neon-blue w-full flex items-center justify-center gap-4 py-6 font-black uppercase tracking-[0.2em] transition-all ${formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {formStatus === 'sending' ? 'TRANSMITTING...' : (
                          <>SUBMIT FEEDBACK <ArrowRight size={20} /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
              {/* Card Accent */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-r-2 border-b-2 border-neon-blue/10 -z-10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
