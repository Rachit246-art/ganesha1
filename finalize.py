import re
import glob

# 1. Clean why-choose-us.html completely (remove pledge and testimonials)
with open('why-choose-us.html', 'r', encoding='utf-8') as f:
    wcu = f.read()
# We want to remove everything between <div class="values-grid">...</div></div></section> and <footer
wcu = re.sub(r'(</section>)\s*<!-- Pledge / Brand Promise -->.*?(<footer class="footer">)', r'\1\n\n\2', wcu, flags=re.DOTALL)
# It seems there might be a testimonial section left from previous edits. I'll just regex anything that's a section after the values-grid.
# Actually, let's just extract the Hero and the Core Values Grid and the footer.
hero_match = re.search(r'(<!-- Hero -->.*?</section>)', wcu, flags=re.DOTALL)
values_match = re.search(r'(<!-- Core Values Grid -->.*?</section>)', wcu, flags=re.DOTALL)
footer_match = re.search(r'(<footer class="footer">.*)', wcu, flags=re.DOTALL)
head_match = re.search(r'(.*?<!-- Hero -->)', wcu, flags=re.DOTALL)

if head_match and hero_match and values_match and footer_match:
    wcu = head_match.group(1) + hero_match.group(1) + '\n\n' + values_match.group(1) + '\n\n' + footer_match.group(1)
    with open('why-choose-us.html', 'w', encoding='utf-8') as f:
        f.write(wcu)
    print("Cleaned why-choose-us.html")

# 2. Update products.html
with open('products.html', 'r', encoding='utf-8') as f:
    prod = f.read()

products_grid = """
    <div class="gallery-grid">
      <div class="gallery-card">
        <div class="gc-image"><img src="images/our services/custom murti.png" alt="Solapur Antique idols"></div>
        <div class="gc-content">
          <h3 class="service-title">Solapur Antique idols</h3>
          <p>Experience the timeless beauty of Solapur antique style idols, crafted with intricate traditional detailing and rich heritage.</p>
        </div>
      </div>
      <div class="gallery-card">
        <div class="gc-image"><img src="images/our services/Eco-friendly.png" alt="Ecofriendly ganesha idols"></div>
        <div class="gc-content">
          <h3 class="service-title">Ecofriendly ganesha idols</h3>
          <p>Beautifully sculpted from natural river clay, our eco-friendly idols dissolve harmlessly in water, protecting our environment.</p>
        </div>
      </div>
      <div class="gallery-card">
        <div class="gc-image"><img src="images/our services/Restoring.png" alt="Ecofriendly seed ganeshas"></div>
        <div class="gc-content">
          <h3 class="service-title">Ecofriendly seed ganeshas</h3>
          <p>Bring life after Visarjan. These special idols contain plant seeds, growing into a beautiful plant to bless your home forever.</p>
        </div>
      </div>
      <div class="gallery-card">
        <div class="gc-image"><img src="images/our services/Safe Transit & home setup.png" alt="Ganesha Decors"></div>
        <div class="gc-content">
          <h3 class="service-title">Ganesha Decors</h3>
          <p>Complete your sacred space with our premium selection of Ganesha decors, including mandaps, backdrops, and puja accessories.</p>
        </div>
      </div>
    </div>
"""

prod = re.sub(r'<div class="gallery-grid">.*?</div>\s*</div>\s*</section>', products_grid + '\n  </div>\n</section>', prod, flags=re.DOTALL)
# Remove Our Process and CTA sections
prod = re.sub(r'<section class="ip-section bg-light">.*?<h2 class="ip-title">Our Process</h2>.*?</section>', '', prod, flags=re.DOTALL)
prod = re.sub(r'<section class="ip-cta-section".*?</section>', '', prod, flags=re.DOTALL)

with open('products.html', 'w', encoding='utf-8') as f:
    f.write(prod)
print("Updated products.html")

# 3. Add WhatsApp button CSS to style.css
whatsapp_css = """
/* Floating WhatsApp Button */
.whatsapp-float {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 60px;
    height: 60px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 0px 4px 15px rgba(37, 211, 102, 0.4);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    background-color: #128c7e;
    color: #fff;
}
"""
with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write('\n' + whatsapp_css)

# Add WhatsApp button HTML to all HTML files
whatsapp_btn = '''
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/919876543210" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </a>
'''

html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'whatsapp-float' not in content:
        content = content.replace('</body>', whatsapp_btn + '\n</body>')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("WhatsApp button added to all pages.")
