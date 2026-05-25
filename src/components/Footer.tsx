"use client";

import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-stone-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-500">
              <Sparkles className="w-6 h-6" />
              <span className="font-serif font-bold text-xl tracking-wider text-white">Morya Arts</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Crafting premium, eco-friendly, and traditional Ganesha idols with absolute devotion and master craftsmanship for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onLinkClick('services')} className="hover:text-amber-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('why-choose-us')} className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('gallery')} className="hover:text-amber-400 transition-colors">
                  Murti Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onLinkClick('inquiry')} className="hover:text-amber-400 transition-colors">
                  Book / Inquire
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  102, Artisan Plaza, Near Dagdusheth Temple, Budhwar Peth, Pune, Maharashtra - 411002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400">info@moryaarts.com</span>
              </li>
            </ul>
          </div>

          {/* Timings & Devotion */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Workshop Hours</h4>
            <p className="text-stone-400 text-sm mb-2">
              Monday - Sunday: 9:00 AM - 9:00 PM
            </p>
            <p className="text-xs text-amber-500/80 italic">
              *Visitors are welcome to witness the live sculpting process at our workshop.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Morya Arts. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Ganpati Bappa Devotees
          </p>
        </div>
      </div>
    </footer>
  );
}