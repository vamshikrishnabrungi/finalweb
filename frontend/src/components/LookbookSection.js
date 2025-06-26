import React from 'react';
import { motion } from 'framer-motion';

const LookbookSection = () => {
  const lookbookItems = [
    {
      title: 'Monsoon Moods',
      image: 'https://images.pexels.com/photos/7871185/pexels-photo-7871185.jpeg',
      description: 'Embracing the rain with fluid silhouettes',
      date: 'March 2025'
    },
    {
      title: 'Urban Zen',
      image: 'https://images.unsplash.com/photo-1700575306910-b7016feddcd1',
      description: 'Finding peace in the city chaos',
      date: 'February 2025'
    },
    {
      title: 'Veiled Stories',
      image: 'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf',
      description: 'Mystery woven into every thread',
      date: 'January 2025'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-30 bg-dwapor-espresso">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-dwapor-gold font-sans text-xs uppercase tracking-widest mb-8">
            Journal
          </div>
          <h2 className="font-serif text-display text-dwapor-amber font-light">
            Editorial Stories
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {lookbookItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dwapor-museum/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-dwapor-gold font-sans text-xs uppercase tracking-widest">
                    {item.date}
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-dwapor-amber font-sans text-xs uppercase tracking-widest flex items-center space-x-2"
                  >
                    <span>Read Story</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl text-dwapor-amber group-hover:text-dwapor-gold transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-dwapor-gold font-sans text-xs uppercase tracking-widest">
                    {item.date.split(' ')[0]}
                  </span>
                </div>
                <p className="font-sans text-dwapor-beige text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LookbookSection;