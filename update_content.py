import re

# Update products.html
with open('products.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace "Our Services" with "Our Products"
content = content.replace('Our Services', 'Our Products')
content = content.replace('Services', 'Products')
content = content.replace('services-grid', 'products-grid')
content = content.replace('service-card', 'product-card')

# We need to replace the 4 product cards.
# Finding the grid and replacing the content
new_grid = """
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            <div class="product-card">
                <div class="service-card-body">
                    <div class="icon-box"><i data-lucide="gem"></i></div>
                    <h3>Solapur Antique idols</h3>
                    <p>Experience the timeless beauty of Solapur antique style idols, crafted with intricate traditional detailing and rich heritage.</p>
                </div>
            </div>
            <div class="product-card">
                <div class="service-card-body">
                    <div class="icon-box"><i data-lucide="leaf"></i></div>
                    <h3>Ecofriendly ganesha idols</h3>
                    <p>Beautifully sculpted from natural river clay, our eco-friendly idols dissolve harmlessly in water, protecting our environment.</p>
                </div>
            </div>
            <div class="product-card">
                <div class="service-card-body">
                    <div class="icon-box"><i data-lucide="sprout"></i></div>
                    <h3>Ecofriendly seed ganeshas</h3>
                    <p>Bring life after Visarjan. These special idols contain plant seeds, growing into a beautiful plant to bless your home forever.</p>
                </div>
            </div>
            <div class="product-card">
                <div class="service-card-body">
                    <div class="icon-box"><i data-lucide="sparkles"></i></div>
                    <h3>Ganesha Decors</h3>
                    <p>Complete your sacred space with our premium selection of Ganesha decors, including mandaps, backdrops, and puja accessories.</p>
                </div>
            </div>
        </div>
"""
# Replace everything inside <div class="services-grid"> ... </div> (or similar)
content = re.sub(r'<div class="services-grid">.*?</div>\s*</div>\s*</section>', new_grid + '\n    </div>\n</section>', content, flags=re.DOTALL)

with open('products.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    content = f.read()

vision_mission = """
  <!-- ── OUR MISSION & VISION ──────────────────────────────── -->
  <section class="ip-section bg-blush">
    <div class="container">
      <div class="section-header text-center">
        <span class="subtitle">Our Purpose</span>
        <h2 class="ip-title">Vision & Mission</h2>
        <div class="divider mx-auto"></div>
      </div>
      <div class="values-grid">
        <div class="value-card" style="text-align:center;">
          <div class="value-icon mx-auto"><i data-lucide="eye"></i></div>
          <h3>Our Vision</h3>
          <p>To be the most trusted and revered creator of Ganesha idols globally, blending timeless artistic heritage with sustainable practices that preserve our earth for future generations.</p>
        </div>
        <div class="value-card" style="text-align:center;">
          <div class="value-icon mx-auto"><i data-lucide="target"></i></div>
          <h3>Our Mission</h3>
          <p>We exist to bridge the ancient art of murti-making with modern sensibilities — creating sacred, eco-friendly pieces that live beautifully in today's homes while honoring the divine spirit of Lord Ganesha.</p>
        </div>
      </div>
    </div>
  </section>
"""
# Insert Vision & Mission before the Values grid section
content = re.sub(r'<!-- ── OUR MISSION & VALUES ──────────────────────────────── -->', vision_mission + '\n<!-- ── CORE VALUES ──────────────────────────────── -->', content)

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Update testimonials.html
with open('testimonials.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Reviews', 'Testimonials')
content = content.replace('reviews', 'testimonials')
with open('testimonials.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated content in inner pages.")
