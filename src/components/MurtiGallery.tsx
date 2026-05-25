"use client";

import React, { useState } from 'react';
import { Eye, Sparkles, Filter, Info } from 'lucide-react';

const categories = ["All", "Eco-Friendly Clay", "Premium Marble Look", "Traditional Saffron", "Miniature Shrines"];

const murtis = [
  {
    id: 1,
    name: "Dagdusheth Style Ganesha",
    category: "Traditional Saffron",
    size: "2.5 Feet",
    material: "Shaddu Mati (Clay)",
    image: "https://images.unsplash.com/photo-1609137144814-9d998069696d?auto=format&fit=crop&w=600&q=80",
    description: "Inspired by the famous Dagdusheth Halwai Ganpati of Pune, featuring rich gold ornaments and a majestic crown.",
    price: "Premium"
  },
  {
    id: 2,
    name: "Eco-Friendly Lalbaugcha Raja",
    category: "Eco-Friendly Clay",
    size: "3 Feet",
    material: "Pure River Clay",
    image: "https://images.unsplash.com/photo-1630260579111-799969997c90?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful eco-friendly replica of the legendary Lalbaugcha Raja, painted with natural turmeric and vermillion.",
    price: "Popular"
  },
  {
    id: 3,
    name: "Serene White Marble Ganesha",
    category: "Premium Marble Look",
    size: "1.5 Feet",
    material: "Premium Cultured Marble",
    image: "https://images.unsplash.com/photo-1567591910360-697e50743726?auto=format&fit=crop&w=600&q=80",
    description: "Elegant white marble finish with subtle gold highlights, perfect for modern home temples and offices.",
    price: "Exclusive"
  },
  {
    id: 4,
    name: "Bal Ganesha Idol",
    category: "Miniature Shrines",
    size: "9 Inches",
    material: "Shaddu Mati (Clay)",
    image: "https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?auto=format&fit=crop&w=600&q=80",
    description: "An adorable, cute Bal Ganesha idol designed specifically for children's rooms or small home altars.",
    price: "Budget Friendly"
  },
  {
    id: 5,
    name: "Siddhivinayak Replica",
    category: "Traditional Saffron",
    size: "2 Feet",
    material: "Shaddu Mati (Clay)",
    image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=600&q=80",
    description: "A faithful replica of the Siddhivinayak temple idol with the trunk turned to the right, symbolizing high spiritual energy.",
    price: "Premium"
  },
  {
    id: 6,
    name: "Tree Ganesha (With Seeds)",
    category: "Eco-Friendly Clay",
    size: "1.2 Feet",
    material: "Clay with Plant Seeds",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80",
    description: "Contains organic seeds inside the clay. After immersion in a pot at home, it grows into a beautiful plant.",
    price: "Eco-Special"
  }
];

interface MurtiGalleryProps {
  onSelectMurti: (murtiName: string) => void;
}

export default function MurtiGallery({ onSelectMurti }: MurtiGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMurti, setSelectedMurti] = useState<typeof murtis[0] | null>(null);

  const filteredMurtis = activeCategory === "All" 
    ? murtis 
    : murtis.filter(m => m.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm block mb-3">Our Masterpieces</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Divine Murti Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-stone-600 text-lg">
            Browse our collection of beautifully sculpted Ganesha idols. Click on any Murti to view details or request a booking.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMurtis.map((murti) => (
            <div 
              key={murti.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img 
                  src={murti.image} 
                  alt={murti.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setSelectedMurti(murti)}
                    className="p-3 rounded-full bg-white text-stone-900 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => onSelectMurti(murti.name)}
                    className="px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition-all duration-300 font-medium text-sm shadow-lg"
                  >
                    Inquire Now
                  </button>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-semibold">
                  {murti.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      {murti.name}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                      {murti.price}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                    {murti.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500">
                  <span>Size: <strong className="text-stone-800">{murti.size}</strong></span>
                  <span>Material: <strong className="text-stone-800">{murti.material}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedMurti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-100 animate-in fade-in zoom-in-95 duration-300">
              <div className="relative h-72 sm:h-96">
                <img 
                  src={selectedMurti.image} 
                  alt={selectedMurti.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedMurti(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                >
                  &times;
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">{selectedMurti.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">{selectedMurti.name}</h3>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-sm border border-amber-100">
                    {selectedMurti.price}
                  </span>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed">
                  {selectedMurti.description}
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl mb-6 text-sm">
                  <div>
                    <span className="text-stone-400 block">Available Size</span>
                    <strong className="text-stone-800 text-base">{selectedMurti.size}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Material Used</span>
                    <strong className="text-stone-800 text-base">{selectedMurti.material}</strong>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      onSelectMurti(selectedMurti.name);
                      setSelectedMurti(null);
                    }}
                    className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-amber-600/20"
                  >
                    Book / Inquire for this Murti
                  </button>
                  <button 
                    onClick={() => setSelectedMurti(null)}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}