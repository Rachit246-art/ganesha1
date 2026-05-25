"use client";

import React from 'react';
import { Sparkles, Leaf, Paintbrush, Truck, Heart, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: "Eco-Friendly Clay Murtis",
    description: "Crafted using 100% natural Shaddu Mati (clay) and organic, non-toxic water-soluble colors. Safe for home immersion and environment-friendly.",
    highlight: "Most Popular"
  },
  {
    icon: Sparkles,
    title: "Custom Murti Sculpting",
    description: "Work directly with our master artisans to design a custom Ganesha idol. Choose specific poses, expressions, ornaments, and color themes.",
    highlight: "Premium Service"
  },
  {
    icon: Paintbrush,
    title: "Restoration & Repainting",
    description: "Breathe new life into your cherished family heirloom Ganesha idols. We offer professional restoration, repair, and premium gold-leaf detailing.",
    highlight: "Expert Care"
  },
  {
    icon: Truck,
    title: "Safe Transit & Home Setup",
    description: "We ensure your divine idol reaches your home or pandal in pristine condition with specialized shock-absorbent packaging and delivery.",
    highlight: "Guaranteed Safe"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm block mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Our Sacred Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-lg">
            We combine ancient sculpting traditions with modern eco-conscious practices to deliver the most beautiful and divine Ganesha idols for your celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                      {service.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-50 flex items-center text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                  Learn more &rarr;
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-800">100% Safe Delivery</h4>
            <p className="text-stone-500 text-sm">Insured transit with custom wooden crates</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-800">Eco-Friendly Materials</h4>
            <p className="text-stone-500 text-sm">Pure clay & organic plant-based colors</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-800">Artisan Support</h4>
            <p className="text-stone-500 text-sm">Directly empowering traditional sculptors</p>
          </div>
        </div>
      </div>
    </section>
  );
}