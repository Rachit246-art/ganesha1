import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# We will extract sections and reassemble them.
def extract_section(regex_pattern):
    match = re.search(regex_pattern, html, flags=re.DOTALL)
    return match.group(0) if match else ""

hero_sec = extract_section(r'<!-- Hero Carousel -->.*?</section>')
services_sec = extract_section(r'<!-- Services Section -->.*?</section>')
why_sec = extract_section(r'<!-- Why Choose Us -->.*?</section>')
gallery_sec = extract_section(r'<!-- Murti Gallery -->.*?</section>')
testi_sec = extract_section(r'<!-- Testimonials -->.*?</section>')
contact_sec = extract_section(r'<!-- Inquiry Form -->.*?</section>')

# We need an About section for index.html. I will create a brief one.
about_sec = """
    <!-- About Us Section -->
    <section id="about" class="about-section">
        <div class="container relative z-10">
            <div class="section-header text-center">
                <span class="subtitle">Our Story</span>
                <h2>About Div Mangal Murtis</h2>
                <div class="divider mx-auto"></div>
                <p class="desc mx-auto max-w-3xl">With over 25 years of devotion and artistry, we bring you eco-friendly, handcrafted Ganesha idols that embody both tradition and sustainability.</p>
                <br>
                <a href="about.html" class="btn-secondary">Read Our Full Story</a>
            </div>
        </div>
    </section>
"""

# Blogs section
blogs_sec = """
    <!-- Blogs Section -->
    <section id="blogs" class="blogs-section bg-light">
        <div class="container relative z-10">
            <div class="section-header text-center">
                <span class="subtitle">Latest Insights</span>
                <h2>Our Blogs</h2>
                <div class="divider mx-auto"></div>
                <p class="desc mx-auto max-w-3xl">Stay updated with our latest articles, stories of devotion, and updates on eco-friendly practices.</p>
                <br>
                <a href="blogs.html" class="btn-primary">View All Blogs</a>
            </div>
        </div>
    </section>
"""

# Modify the services section to Our Products
services_sec = services_sec.replace('id="services" class="services-section"', 'id="products" class="products-section"')
services_sec = services_sec.replace('<!-- Services Section -->', '<!-- Our Products -->')
services_sec = services_sec.replace('<h2>Our Sacred Services</h2>', '<h2>Our Products</h2>')

# Rename the header and footer in index.html to have the correct anchor links if any
# Actually, the python script `update_nav.py` already updated the top nav. Let's just assemble the body.

# Find everything up to the Hero Section
head_match = re.search(r'(.*?<!-- Hero Carousel -->)', html, flags=re.DOTALL)
head_part = head_match.group(1).replace('<!-- Hero Carousel -->', '') if head_match else ""

# Find everything after Inquiry Form
foot_match = re.search(r'(<!-- Footer -->.*)', html, flags=re.DOTALL)
foot_part = foot_match.group(1) if foot_match else ""

# Assemble
new_html = head_part + '\n' + \
           hero_sec + '\n\n' + \
           about_sec + '\n\n' + \
           why_sec + '\n\n' + \
           services_sec + '\n\n' + \
           gallery_sec + '\n\n' + \
           testi_sec + '\n\n' + \
           blogs_sec + '\n\n' + \
           contact_sec + '\n\n' + \
           foot_part

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html structure updated.")
