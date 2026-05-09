import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, PlayCircle, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, title: "Neon Nights", category: "GAMEPLAY", url: "https://images.unsplash.com/photo-1605898399783-186ad10a9984?auto=format&fit=crop&q=80&w=1974" },
    { id: 2, title: "High Speed Drift", category: "ACTION", url: "https://images.unsplash.com/photo-1547915720-3077301725c8?auto=format&fit=crop&q=80&w=2070" },
    { id: 3, title: "The Garage", category: "UI DESIGN", url: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=2070" },
    { id: 4, title: "Nitro Blast", category: "ACTION", url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070" },
    { id: 5, title: "Endless Highway", category: "GAMEPLAY", url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070" },
    { id: 6, title: "Leaderboard", category: "SOCIAL", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2071" },
    { id: 7, title: "City Rush", category: "GAMEPLAY", url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2070" },
    { id: 8, title: "Cyber Drift", category: "ACTION", url: "https://images.unsplash.com/photo-1600706432502-77a0e2e32770?auto=format&fit=crop&q=80&w=2070" },
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="relative pt-64 pb-20 overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
              VISUAL SHOWCASE
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic-text">
              SCREENSHOT <span className="glow-text-blue">GALLERY</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              A visual journey through the neon-soaked world of Drifty. Experience the speed, the glow, and the thrill.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-py">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                layoutId={`img-${img.id}`}
                onClick={() => setSelectedImg(img)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden glass-card p-2 border-white/5"
              >
                <div className="aspect-[9/16] rounded-xl overflow-hidden relative">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-[10px] font-black text-neon-blue uppercase tracking-[0.2em] mb-2">{img.category}</span>
                    <h3 className="text-xl font-black italic-text text-white uppercase leading-tight">{img.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-white/40 group-hover:text-white transition-colors">
                      VIEW FULLSCREEN <ChevronRight size={12} />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Teaser */}
      <section className="section-py bg-white/[0.01]">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 relative overflow-hidden group border-neon-blue/20"
          >
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[2000ms]" alt="Video teaser" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 rounded-full bg-neon-blue flex items-center justify-center shadow-[0_0_50px_rgba(0,242,255,0.5)] border-none cursor-pointer"
                  >
                    <PlayCircle size={48} className="text-black ml-1" />
                  </motion.button>
               </div>
               <div className="absolute bottom-10 left-10 text-left">
                 <span className="text-[10px] font-black text-neon-blue tracking-[0.4em] mb-4 block uppercase">OFFICIAL TEASER</span>
                 <h2 className="text-4xl md:text-6xl font-black italic-text uppercase leading-none mb-4">WATCH THE <br/><span className="glow-text-blue text-neon-blue">TRAILER</span></h2>
                 <p className="text-white/40 font-bold tracking-widest text-xs">EXPERIENCE THE HIGH-SPEED ACTION IN 4K</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-20 backdrop-blur-2xl"
          >
            <button className="absolute top-10 right-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <X size={24} />
            </button>
            <motion.div
              layoutId={`img-${selectedImg.id}`}
              className="max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group w-full h-full flex items-center justify-center">
                <img src={selectedImg.url} alt={selectedImg.title} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" />
                <div className="absolute bottom-[-60px] left-0 w-full flex flex-col items-center">
                  <h2 className="text-3xl font-black italic-text glow-text-blue uppercase tracking-tight">{selectedImg.title}</h2>
                  <p className="text-white/40 text-xs font-black tracking-[0.3em] uppercase mt-2">{selectedImg.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
