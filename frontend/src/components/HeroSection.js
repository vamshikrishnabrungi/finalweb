import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dwapor-museum">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1660669996485-f4713e9c8f01')`
          }}
        />
        <div className="absolute inset-0 bg-dwapor-museum/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-dwapor-museum/90 via-transparent to-dwapor-museum/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-dwapor-gold font-sans text-sm uppercase tracking-widest mb-6"
        >
          March 25 — Present
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-hero font-light text-dwapor-amber mb-8 tracking-tighter leading-none"
        >
          A Statement for Every Silence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="font-sans text-xl text-dwapor-beige mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Minimal cuts. Honest fabrics. For the soft rebel who whispers power through timeless elegance.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: '#c19a6b',
            color: '#0a0a0a'
          }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-dwapor-gold text-dwapor-gold px-10 py-4 font-sans text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-2xl"
        >
          Buy Ticket →
        </motion.button>
      </div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="text-dwapor-beige font-sans text-xs uppercase tracking-widest transform rotate-90 origin-center">
          Milan, Italia
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-dwapor-gold"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;