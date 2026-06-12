import re
import os

file_path = "c:/Users/MSI/OneDrive/Desktop/Ganpatijii/ganpatijii/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Fonts
content = content.replace("family=Inter:wght@300;400;500;600;700", "family=Poppins:wght@300;400;500;600;700;800;900")

# 2. Add Swiper CSS and JS
if "swiper-bundle.min.css" not in content:
    content = content.replace('</head>', '    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />\n</head>')

if "swiper-bundle.min.js" not in content:
    content = content.replace('</body>', '    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>\n</body>')

# 3. Add Custom DOM Nodes right after <body>
dom_nodes = """    <!-- CUSTOM CURSOR -->
    <div class="cursor-dot d-none d-lg-block"></div>
    <div class="cursor-outline d-none d-lg-block"></div>

    <!-- PAGE LOADER -->
    <div id="page-loader">
      <div class="loader-inner">
        <div class="diorette-brand-loader">
          <svg viewBox="0 0 100 100" class="d-logo-icon-loader">
            <path d="M 25 15 h 25 a 35 35 0 0 1 0 70 h -25 z" fill="none" stroke="currentColor" stroke-width="4.5" />
            <line x1="38" y1="15" x2="38" y2="85" stroke="currentColor" stroke-width="4.5" />
          </svg>
          <div class="d-logo-text-loader">
            <span class="d-title">DIV MANGAL</span>
            <span class="d-subtitle">MURTIS</span>
          </div>
        </div>
        <div class="loader-bar"><span></span></div>
      </div>
    </div>

    <!-- SCROLL PROGRESS -->
    <div id="scroll-progress"></div>
"""
if "CUSTOM CURSOR" not in content:
    content = content.replace('<body>', f'<body>\n{dom_nodes}')

# 4. Rewrite Hero Section
hero_start = content.find('<section class="hero" id="hero">')
hero_end = content.find('</section>', hero_start) + len('</section>')

new_hero = """<!-- Hero Carousel -->
    <section class="hero hero-slider-section" id="hero">
        <div class="swiper hero-swiper" style="height: 100%; width: 100%;">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div class="swiper-slide">
                    <div class="slide-bg" style="background-image: url('images/Herosection/slide%201.png'); background-size: cover; background-position: center; position: absolute; inset: 0;"></div>
                    <div class="slide-overlay" style="background: rgba(0,0,0,0.5); position: absolute; inset: 0;"></div>
                    <div class="slide-content" style="position: relative; z-index: 10; padding: 4rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                        <div class="tagline" style="color: var(--primary);"><i data-lucide="sparkles"></i> 100% Natural & Biodegradable</div>
                        <h1 class="slide-title">Eco-Friendly <br><span class="hero-gradient-text highlight">Clay Ganesha</span></h1>
                        <p class="slide-desc">Crafted with pure Shaddu Mati (river clay) and organic water-soluble colors. Celebrate Ganeshotsav responsibly with home immersion.</p>
                        <div class="slide-actions">
                            <a href="#inquiry" class="btn-primary-custom" onclick="selectMurti('Eco-Friendly Clay Ganesha')">Book Clay Murti <i class="fa-solid fa-arrow-right ms-2"></i></a>
                            <a href="#gallery" class="btn-secondary">View 3 Types</a>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="swiper-slide">
                    <div class="slide-bg" style="background-image: url('images/Herosection/slide%202.png'); background-size: cover; background-position: center; position: absolute; inset: 0;"></div>
                    <div class="slide-overlay" style="background: rgba(0,0,0,0.5); position: absolute; inset: 0;"></div>
                    <div class="slide-content" style="position: relative; z-index: 10; padding: 4rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                        <div class="tagline" style="color: var(--primary);"><i data-lucide="sparkles"></i> Majestic & Traditional Designs</div>
                        <h1 class="slide-title">Traditional <br><span class="hero-gradient-text highlight">Ornate Ganesha</span></h1>
                        <p class="slide-desc">Inspired by the legendary Lalbaugcha Raja and Dagdusheth Halwai. Adorned with intricate hand-painted ornaments and a royal crown.</p>
                        <div class="slide-actions">
                            <a href="#inquiry" class="btn-primary-custom" onclick="selectMurti('Traditional Ornate Ganesha')">Book Ornate Murti <i class="fa-solid fa-arrow-right ms-2"></i></a>
                            <a href="#gallery" class="btn-secondary">View 3 Types</a>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="swiper-slide">
                    <div class="slide-bg" style="background-image: url('images/Herosection/slide%203.png'); background-size: cover; background-position: center; position: absolute; inset: 0;"></div>
                    <div class="slide-overlay" style="background: rgba(0,0,0,0.5); position: absolute; inset: 0;"></div>
                    <div class="slide-content" style="position: relative; z-index: 10; padding: 4rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                        <div class="tagline" style="color: var(--primary);"><i data-lucide="sparkles"></i> Elegant & Everlasting Grace</div>
                        <h1 class="slide-title">Premium <br><span class="hero-gradient-text highlight">Marble Finish Ganesha</span></h1>
                        <p class="slide-desc">Exquisite white marble-look finish with subtle gold leaf detailing. Perfect for home temples, offices, and lifelong devotion.</p>
                        <div class="slide-actions">
                            <a href="#inquiry" class="btn-primary-custom" onclick="selectMurti('Premium Marble Finish Ganesha')">Book Marble Murti <i class="fa-solid fa-arrow-right ms-2"></i></a>
                            <a href="#gallery" class="btn-secondary">View 3 Types</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="hero-swiper-prev" style="position: absolute; left: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-left fa-2x"></i></div>
            <div class="hero-swiper-next" style="position: absolute; right: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-right fa-2x"></i></div>

            <!-- Pagination Dots -->
            <div class="hero-swiper-pagination" style="position: absolute; bottom: 1rem; width: 100%; text-align: center; z-index: 20;"></div>
        </div>
    </section>"""

content = content[:hero_start] + new_hero + content[hero_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("index.html updated successfully!")
