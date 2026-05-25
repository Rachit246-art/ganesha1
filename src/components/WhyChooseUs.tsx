"use client";

import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image & Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-amber-500/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80" 
                alt="Artisan crafting Ganesha Murti" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-stone-950/90 backdrop-blur-md p-6 rounded-xl border border-amber-500/20 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-amber-500 text-stone-950">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Legacy of Devotion</p>
                  <h4 className="text-lg font-bold text-white">Over 25 Years of Crafting Divinity</h4>
                </div>
              </div>
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-amber-500/20 rounded-full -z-10 animate-pulse" />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-400 font-semibold tracking-widest uppercase text-sm block mb-3">Our Legacy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Why Devotees Choose Our Murtis
              </h2>
              <div className="w-20 h-1 bg-amber-500 mb-6 rounded-full" />
              <p className="text-stone-300 text-lg leading-relaxed">
                Every Ganesha idol we create is not just a sculpture; it is a labor of love, devotion, and meticulous artistry. We ensure that your spiritual celebrations are elevated with pure, beautiful, and authentic craftsmanship.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Master Sculptors & Artisans</h4>
                  <p className="text-stone-400 text-sm mt-1">Our team consists of third-generation artisans who specialize in traditional clay sculpting and intricate hand-painting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Strict Eco-Friendly Standards</h4>
                  <p className="text-stone-400 text-sm mt-1">We strictly use pure Shaddu Mati clay and natural colors, ensuring zero harm to marine life during immersion.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Customization & Attention to Detail</h4>
                  <p className="text-stone-400 text-sm mt-1">From the serene expression of the eyes to the intricate folds of the pitambar, we customize every detail to match your vision.</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800">
              <div className="text-center p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                <span className="block text-3xl font-bold text-amber-400">10k+</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider mt-1 block">Happy Homes</span>
              </div>
              <div className="text-center p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                <span className="block text-3xl font-bold text-amber-400">100%</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider mt-1 block">Eco-Friendly</span>
              </div>
              <div className="text-center p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                <span className="block text-3xl font-bold text-amber-400">50+</span>
                <span className="text-xs text-stone-400 uppercase tracking-wider mt-1 block">Artisans</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}