import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the About Us section
# We added: <section id="about" class="about-section"> ... </section>
html = re.sub(r'<!-- About Us Section -->.*?</section>', '', html, flags=re.DOTALL)

# 2. Update Why Choose Us section in index.html to have 6 pointers
# Currently it has <div class="features-list"> ... </div>
# We will replace it with the 6 pointers from why-choose-us.html or just write them out.
pointers_html = """
                    <div class="features-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>25+ Years of Mastery</h4>
                                <p>Three generations of artisans refining techniques.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>100% Eco-Friendly Materials</h4>
                                <p>Natural Shadu clay and plant-based pigments.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>Every Piece is Unique</h4>
                                <p>Hand-sculpted, carrying the artisan's imprint.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>Quality You Can See and Feel</h4>
                                <p>12-point quality inspection before leaving our studio.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>Safe, Insured Delivery</h4>
                                <p>Insured shipping with custom shock-absorbing boxes.</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i data-lucide="check-circle-2" class="text-amber"></i>
                            <div>
                                <h4>Post-Purchase Care</h4>
                                <p>Guidance on idol care, puja setup, and eco-friendly Visarjan.</p>
                            </div>
                        </div>
                    </div>
"""
html = re.sub(r'<div class="features-list">.*?</div>\s*</div>\s*<div class="stats-grid">', pointers_html + '\n                    <div class="stats-grid">', html, flags=re.DOTALL)


# 3. Update the Products section in index.html
# Currently it has the old services HTML with 4 service-cards.
new_products_grid = """
            <div class="services-grid">
                <div class="service-card group">
                    <img src="images/our services/custom murti.png" alt="Solapur Antique Idols" class="service-card-img">
                    <div class="service-card-body">
                        <div class="service-header">
                            <div class="icon-box"><i data-lucide="gem"></i></div>
                            <span class="badge">Heritage</span>
                        </div>
                        <h3>Solapur Antique idols</h3>
                        <p>Experience the timeless beauty of Solapur antique style idols, crafted with intricate traditional detailing and rich heritage.</p>
                    </div>
                </div>
                <div class="service-card group">
                    <img src="images/our services/Eco-friendly.png" alt="Ecofriendly ganesha idols" class="service-card-img">
                    <div class="service-card-body">
                        <div class="service-header">
                            <div class="icon-box"><i data-lucide="leaf"></i></div>
                            <span class="badge">Eco-Conscious</span>
                        </div>
                        <h3>Ecofriendly ganesha idols</h3>
                        <p>Beautifully sculpted from natural river clay, our eco-friendly idols dissolve harmlessly in water, protecting our environment.</p>
                    </div>
                </div>
                <div class="service-card group">
                    <img src="images/our services/Restoring.png" alt="Ecofriendly seed ganeshas" class="service-card-img">
                    <div class="service-card-body">
                        <div class="service-header">
                            <div class="icon-box"><i data-lucide="sprout"></i></div>
                            <span class="badge">Green Life</span>
                        </div>
                        <h3>Ecofriendly seed ganeshas</h3>
                        <p>Bring life after Visarjan. These special idols contain plant seeds, growing into a beautiful plant to bless your home forever.</p>
                    </div>
                </div>
                <div class="service-card group">
                    <img src="images/our services/Safe Transit & home setup.png" alt="Ganesha Decors" class="service-card-img">
                    <div class="service-card-body">
                        <div class="service-header">
                            <div class="icon-box"><i data-lucide="sparkles"></i></div>
                            <span class="badge">Aesthetics</span>
                        </div>
                        <h3>Ganesha Decors</h3>
                        <p>Complete your sacred space with our premium selection of Ganesha decors, including mandaps, backdrops, and puja accessories.</p>
                    </div>
                </div>
            </div>
"""
html = re.sub(r'<div class="services-grid">.*?<div class="trust-badges">', new_products_grid + '\n            <div class="trust-badges">', html, flags=re.DOTALL)


# 4. Add 3 Blogs to the Blogs section in index.html
blogs_content = """
    <!-- Blogs Section -->
    <section id="blogs" class="blogs-section bg-light">
        <div class="container relative z-10">
            <div class="section-header text-center">
                <span class="subtitle">Latest Insights</span>
                <h2>Our Blogs</h2>
                <div class="divider mx-auto"></div>
            </div>
            
            <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div class="service-card group">
                    <img src="images/our services/Eco-friendly.png" alt="Eco-friendly Visarjan" class="service-card-img">
                    <div class="service-card-body">
                        <h3>The Importance of Eco-Friendly Visarjan</h3>
                        <p>Learn why choosing a clay Ganesha helps preserve our rivers and how you can perform a beautiful home visarjan.</p>
                        <a href="blog-eco.html" class="learn-more">Read Full Blog &rarr;</a>
                    </div>
                </div>
                <div class="service-card group">
                    <img src="images/our services/custom murti.png" alt="Solapur Antique Style" class="service-card-img">
                    <div class="service-card-body">
                        <h3>Discovering the Solapur Antique Style</h3>
                        <p>A deep dive into the rich heritage and intricate detailing of the traditional Solapur Ganesha murtis.</p>
                        <a href="blog-antique.html" class="learn-more">Read Full Blog &rarr;</a>
                    </div>
                </div>
                <div class="service-card group">
                    <img src="images/our legacy.png" alt="Seed Ganesha" class="service-card-img">
                    <div class="service-card-body">
                        <h3>Grow a Plant with Seed Ganesha</h3>
                        <p>Discover the magic of Seed Ganeshas. How a symbol of devotion transforms into a living plant in your home.</p>
                        <a href="blog-seed.html" class="learn-more">Read Full Blog &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""
html = re.sub(r'<!-- Blogs Section -->.*?</section>', blogs_content, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 5. Update blogs.html to have these 3 blogs
with open('blogs.html', 'r', encoding='utf-8') as f:
    blogs_html = f.read()

blogs_html = re.sub(r'<div class="section-header text-center">.*?</div>', """
      <div class="section-header text-center">
        <h2 class="ip-title">Latest Articles</h2>
        <div class="divider mx-auto"></div>
      </div>
""" + blogs_content.replace('<!-- Blogs Section -->', '').replace('<section id="blogs" class="blogs-section bg-light">', '').replace('</section>', ''), blogs_html, flags=re.DOTALL)

with open('blogs.html', 'w', encoding='utf-8') as f:
    f.write(blogs_html)

print("Updated index.html and blogs.html.")
