import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import CollectionSection from './CollectionSection';
import AboutSection from './AboutSection';
import LookbookSection from './LookbookSection';
import TestimonialSection from './TestimonialSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const DwaporLanding = () => {
  return (
    <div className="min-h-screen bg-dwapor-museum text-dwapor-amber overflow-x-hidden">
      <Header />
      <HeroSection />
      <QuoteSection />
      <CollectionSection />
      <AboutSection />
      <LookbookSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default DwaporLanding;