"use client";

import React, { useState } from 'react';
import { Sparkles, Phone, Calendar, Heart } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import MurtiGallery from '@/components/MurtiGallery';
import InquiryForm from '@/components/InquiryForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Index() {
  const [selectedMurtiForInquiry, setSelectedMurtiForInquiry] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMurti = (murtiName: string) => {
    setSelectedMurtiForInquiry(murtiName);
    scrollToSection('inquiry');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Premium Header / Navigation */}
      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              MORYA ARTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-amber-400 transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-400 transition-colors">
              Murti Gallery
            </button>
            <button onClick={() => scrollToSection('inquiry')} className="hover:text-amber-400 transition-colors">
              Book / Inquire
            </button>
          </nav>

          {/* Call to Action */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => scrollToSection('inquiry')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-full text-sm shadow-lg shadow-orange-950/30 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </button>
          </div>

        </div>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel onCtaClick={scrollToSection} />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Interactive Murti Gallery */}
      <MurtiGallery onSelectMurti={handleSelectMurti} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Inquiry & Customization Form */}
      <InquiryForm prefilledMurti={selectedMurtiForInquiry} />

      {/* Footer */}
      <Footer onLinkClick={scrollToSection} />

    </div>
  );
}