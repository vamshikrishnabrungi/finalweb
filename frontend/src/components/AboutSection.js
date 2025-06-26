import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-30 bg-dwapor-warm-brown">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="text-dwapor-gold font-sans text-xs uppercase tracking-widest">
              About Dwapor
            </div>
            
            <h2 className="font-serif text-display text-dwapor-amber font-light leading-tight">
              Our Story
            </h2>
            
            <div className="space-y-6">
              <p className="font-sans text-dwapor-beige leading-relaxed">
                Rooted in heritage, stitched for the present. Dwapor's garments are made slowly, with intent. We design for women who whisper power through timeless elegance.
              </p>
              
              <p className="font-sans text-dwapor-beige leading-relaxed text-sm">
                Each piece tells a story of craftsmanship, where traditional techniques meet contemporary sensibilities. Our commitment to sustainable fashion means every garment is created with respect for both artisan and environment.
              </p>
              
              <p className="font-sans text-dwapor-beige leading-relaxed text-sm">
                From the bustling streets of Mumbai to quiet ateliers, we collaborate with skilled artisans who bring decades of expertise to every stitch, every silhouette, every statement piece.
              </p>
            </div>

            <motion.button
              whileHover={{ 
                backgroundColor: '#c19a6b',
                color: '#0a0a0a'
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-dwapor-gold text-dwapor-gold px-8 py-4 font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300"
            >
              Read Our Story →
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1700575306910-b7016feddcd1"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-12">
                <img
                  src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf"
                  alt="Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="ml-16">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616344192415-8c594f3ef58c"
                  alt="Artisan work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;