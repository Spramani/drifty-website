import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Support from './pages/Support';
import Feedback from './pages/Feedback';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import NeonBackground from './components/NeonBackground';

import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NeonBackground />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
              <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
              <Route path="/feedback" element={<PageTransition><Feedback /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default App;
