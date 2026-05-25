import re
import os

# 1. Update WhatsApp Button CSS in style.css
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace whatsapp-float properties
css = css.replace('left: 2rem;', 'right: 2rem;')
css = css.replace('background-color: #25d366;', 'background-color: var(--amber-500);')
css = css.replace('rgba(37, 211, 102, 0.4)', 'rgba(255, 182, 193, 0.4)')
css = css.replace('background-color: #128c7e;', 'background-color: var(--amber-600);')

# Add Lightbox CSS
lightbox_css = """
/* Lightbox Styles */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.lightbox.active {
    opacity: 1;
    pointer-events: auto;
}

.lightbox-content {
    max-width: 90%;
    max-height: 90vh;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.lightbox.active .lightbox-content {
    transform: scale(1);
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 40px;
    cursor: pointer;
    background: none;
    border: none;
    transition: color 0.2s;
}

.lightbox-close:hover {
    color: var(--amber-400);
}

/* Make product/gallery images clickable */
.lightbox-trigger {
    cursor: pointer;
    transition: transform 0.3s ease;
}
.lightbox-trigger:hover {
    transform: scale(1.02);
}
"""
if '.lightbox {' not in css:
    css += '\n' + lightbox_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 2. Add Lightbox JS to script.js and Filtering logic for Products
with open('js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

lightbox_js = """
// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create Lightbox DOM elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img class="lightbox-content" src="" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Add click event to all images that should be in the lightbox
    // We target product images and gallery images
    const triggerImages = document.querySelectorAll('.gallery-card img, .img-mosaic img, .product-card img, .gc-image img');
    triggerImages.forEach(img => {
        img.classList.add('lightbox-trigger');
        img.addEventListener('click', (e) => {
            e.preventDefault(); // prevent other click events if any
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Products Filtering Logic
    const prodFilters = document.querySelectorAll('.prod-filter-btn');
    const prodCards = document.querySelectorAll('.prod-item');
    if(prodFilters.length > 0) {
        prodFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class
                prodFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                prodCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});
"""
if 'Lightbox Functionality' not in js:
    js += '\n' + lightbox_js

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

# 3. Update products.html to have filter buttons and data-categories
with open('products.html', 'r', encoding='utf-8') as f:
    prod_html = f.read()

# Add Filter Buttons
filters_html = """
    <div class="filter-tabs" style="margin-bottom: 2rem; justify-content: center; display: flex;">
        <button class="filter-btn prod-filter-btn active" data-filter="all">All Products</button>
        <button class="filter-btn prod-filter-btn" data-filter="antique">Solapur Antique</button>
        <button class="filter-btn prod-filter-btn" data-filter="eco">Eco-Friendly</button>
        <button class="filter-btn prod-filter-btn" data-filter="seed">Seed Ganesha</button>
        <button class="filter-btn prod-filter-btn" data-filter="decor">Decors</button>
    </div>
"""

# Inject filters before the gallery-grid
prod_html = prod_html.replace('<div class="gallery-grid">', filters_html + '\n    <div class="gallery-grid">')

# Add classes and data-category to the 4 existing cards
prod_html = prod_html.replace('<div class="gallery-card">', '<div class="gallery-card prod-item" data-category="antique">', 1)
prod_html = prod_html.replace('<div class="gallery-card">', '<div class="gallery-card prod-item" data-category="eco">', 1)
prod_html = prod_html.replace('<div class="gallery-card">', '<div class="gallery-card prod-item" data-category="seed">', 1)
prod_html = prod_html.replace('<div class="gallery-card">', '<div class="gallery-card prod-item" data-category="decor">', 1)

# Add 4 more dummy images to make filtering look good!
extra_cards = """
      <div class="gallery-card prod-item" data-category="antique">
        <div class="gc-image"><img src="images/our legacy.png" alt="Solapur Antique 2"></div>
        <div class="gc-content">
          <h3 class="service-title">Solapur Royal Antique</h3>
          <p>A majestic 2-foot Solapur style Ganesha with intricate traditional detailing.</p>
        </div>
      </div>
      <div class="gallery-card prod-item" data-category="eco">
        <div class="gc-image"><img src="images/Herosection/slide 1.png" alt="Eco Clay 2"></div>
        <div class="gc-content">
          <h3 class="service-title">Dagadusheth Eco Clay</h3>
          <p>Beautiful Dagadusheth Halwai style crafted entirely from Shadu Mati.</p>
        </div>
      </div>
      <div class="gallery-card prod-item" data-category="seed">
        <div class="gc-image"><img src="images/our services/Safe Transit & home setup.png" alt="Seed Ganesha Tulsi"></div>
        <div class="gc-content">
          <h3 class="service-title">Tulsi Seed Ganesha</h3>
          <p>Infused with holy Tulsi seeds, ready to grow into a beautiful plant post-visarjan.</p>
        </div>
      </div>
      <div class="gallery-card prod-item" data-category="decor">
        <div class="gc-image"><img src="images/Herosection/slide 2.png" alt="Floral Mandap"></div>
        <div class="gc-content">
          <h3 class="service-title">Premium Floral Mandap</h3>
          <p>An elegant, eco-friendly backdrop to perfectly frame your Ganesha murti.</p>
        </div>
      </div>
"""
prod_html = prod_html.replace('</div>\n  </div>\n</section>', extra_cards + '\n    </div>\n  </div>\n</section>')

with open('products.html', 'w', encoding='utf-8') as f:
    f.write(prod_html)

# 4. Update gallery.html to remove filtering
with open('gallery.html', 'r', encoding='utf-8') as f:
    gal_html = f.read()

# Remove filter tabs from gallery.html
gal_html = re.sub(r'<div class="filter-tabs.*?>.*?</div>', '', gal_html, flags=re.DOTALL)
# Make sure gallery doesn't use JS filtering accidentally hiding items (by removing filter logic classes if any)
gal_html = gal_html.replace('filter-btn', 'hidden-btn') # Just in case

# The images are inside .img-mosaic or similar. Our lightbox script will pick them up automatically!

with open('gallery.html', 'w', encoding='utf-8') as f:
    f.write(gal_html)

print("Updated WhatsApp CSS, added Lightbox JS/CSS, updated products.html filtering, removed gallery filtering.")
