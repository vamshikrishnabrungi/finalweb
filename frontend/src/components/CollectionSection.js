import React from 'react';
import { motion } from 'framer-motion';

const CollectionSection = () => {
  const collections = [
    {
      title: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1552394211-1f9c6b916c09',
      description: 'Fresh perspectives on minimal elegance',
      year: '2025'
    },
    {
      title: 'Best Sellers',
      image: 'https://images.pexels.com/photos/32541607/pexels-photo-32541607.jpeg',
      description: 'Timeless pieces loved by many',
      year: '2024'
    },
    {
      title: 'Essentials',
      image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74',
      description: 'Foundation pieces for every wardrobe',
      year: '2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-30 bg-dwapor-museum">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-dwapor-gold font-sans text-xs uppercase tracking-widest mb-8">
            Collections
          </div>
          <h2 className="font-serif text-display text-dwapor-amber font-light">
            Curated Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dwapor-museum/30 transition-opacity duration-300 group-hover:opacity-0" />
                
                {/* Overlay Content */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-dwapor-gold font-sans text-xs uppercase tracking-widest">
                    {collection.year}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-2xl text-dwapor-amber mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-sans text-dwapor-beige text-sm max-w-xs">
                    {collection.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl text-dwapor-amber group-hover:text-dwapor-gold transition-colors">
                    {collection.title}
                  </h3>
                  <span className="text-dwapor-gold font-sans text-xs uppercase tracking-widest">
                    {collection.year}
                  </span>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="font-sans text-sm text-dwapor-beige uppercase tracking-widest hover:text-dwapor-gold transition-colors flex items-center space-x-2"
                >
                  <span>View Collection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;