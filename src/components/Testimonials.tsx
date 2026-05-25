"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aniket Deshmukh",
    role: "Pune Devotee",
    content: "We ordered the 2.5 feet Dagdusheth style Ganesha last year. The detailing on the crown and the serene expression on Bappa's face brought tears of joy to our family. Truly divine craftsmanship!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    name: "Priya Kulkarni",
    role: "Eco-Conscious Homemaker",
    content: "The Tree Ganesha is a brilliant concept! The immersion was done in a pot on our balcony, and now we have a beautiful flowering plant growing from the clay. Highly recommend their eco-friendly idols.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    name: "Sanjay Mehta",
    role: "Mandal Coordinator",
    content: "Outstanding service! They customized a 4-feet idol for our society pandal. The packaging was extremely secure, and they delivered it right on time with absolute care. Will book again!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold tracking-widest uppercase text-sm block mb-3">Devotee Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Blessed Experiences
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
          <p className="text-stone-300 text-lg">
            Read how our beautifully crafted Ganesha idols have brought joy, peace, and divine energy to thousands of homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-stone-800/40 border border-stone-800 p-8 rounded-2xl relative flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-700/40" />
              
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-stone-300 text-sm leading-relaxed italic mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-800">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/20"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <span className="text-xs text-stone-400">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}