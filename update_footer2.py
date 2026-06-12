import re
import os

file_path = "c:/Users/MSI/OneDrive/Desktop/Ganpatijii/ganpatijii/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Hero Image Fix
# Change background-size: cover to contain, or keep cover and use background-position: top center
content = content.replace('background-position: center;', 'background-position: top center;')

# 2. Add Pre-Footer CTA
pre_footer_html = """
    <!-- Pre-Footer CTA -->
    <section class="pre-footer-cta" style="background: linear-gradient(135deg, #d3ab79 0%, #83526a 100%); padding: 5rem 0; position: relative; overflow: hidden; color: var(--white);">
        <div class="bg-decor" style="position: absolute; top: -50%; left: -10%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
        <div class="bg-decor" style="position: absolute; bottom: -50%; right: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
        <div class="container relative z-10" style="display: flex; flex-direction: column; md:flex-row; justify-content: space-between; align-items: center; gap: 3rem;">
            <div class="cta-content" style="max-width: 600px;">
                <span class="subtitle" style="color: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.4); padding: 5px 15px; border-radius: 99px; display: inline-block; margin-bottom: 1rem; font-size: 0.75rem; letter-spacing: 2px;">[ REACH OUT ]</span>
                <h2 style="font-family: var(--font-serif); font-size: 3rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.2;">Ready to experience Divine Devotion?</h2>
                <p style="font-size: 1rem; opacity: 0.9; line-height: 1.6; max-width: 500px;">Book your Ganesha Murti today. Whether you need an eco-friendly clay idol or a majestic traditional centerpiece, our master artisans are ready to serve you with world-class craftsmanship and pure devotion.</p>
            </div>
            <div class="cta-actions" style="display: flex; gap: 1rem;">
                <a href="#inquiry" class="btn-white-custom" style="background: white; color: #83526a; padding: 12px 30px; border-radius: 99px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">Book Now</a>
                <a href="mailto:info@moryaarts.com" class="btn-outline-white-custom" style="background: transparent; color: white; border: 1px solid white; padding: 12px 30px; border-radius: 99px; font-weight: 600; text-decoration: none;">Email Us</a>
            </div>
        </div>
    </section>
"""
if "pre-footer-cta" not in content:
    content = content.replace('<!-- Footer -->', pre_footer_html + '\n<!-- Footer -->')

# 3. Update Footer Layout
footer_start = content.find('<footer class="footer">')
footer_end = content.find('</footer>', footer_start) + len('</footer>')

new_footer_html = """<footer class="footer" style="background-color: #1a1410; color: #ffffff; padding: 5rem 0 2rem; position: relative;">
        <div class="container relative z-10">
            <div class="footer-grid" style="display: grid; grid-template-columns: 2fr 1fr 1fr 2fr; gap: 3rem; margin-bottom: 4rem;">
                
                <!-- Brand Col -->
                <div class="footer-brand">
                    <a href="index.html" style="display: inline-block; margin-bottom: 1.5rem;">
                        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; letter-spacing: 2px; margin: 0; color: var(--white);">DIV MANGAL</h3>
                        <span style="font-size: 0.6rem; letter-spacing: 5px; color: var(--primary);">MURTIS</span>
                    </a>
                    <p style="opacity: 0.7; font-size: 0.85rem; line-height: 1.8; margin-bottom: 2rem; max-width: 280px;">Crafting premium, eco-friendly, and traditional Ganesha idols with absolute devotion and master craftsmanship for over 25 years.</p>
                    <div class="social-icons" style="display: flex; gap: 1rem;">
                        <a href="#" style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s;"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: white; transition: background 0.3s;"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div class="footer-links">
                    <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--white);">Quick Links</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                        <li><a href="about.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">About Us</a></li>
                        <li><a href="#products" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Our Products</a></li>
                        <li><a href="gallery.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Gallery</a></li>
                        <li><a href="faq.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">FAQs</a></li>
                        <li><a href="#inquiry" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Book Now</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-links">
                    <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--white);">Murti Types</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem;">
                        <li><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Eco-Friendly Clay</a></li>
                        <li><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Traditional Ornate</a></li>
                        <li><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Marble Finish</a></li>
                        <li><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Seed Ganesha</a></li>
                        <li><a href="#" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; transition: color 0.3s;">Custom Decors</a></li>
                    </ul>
                </div>

                <!-- Stay In Touch -->
                <div class="footer-contact">
                    <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--white);">Stay in Touch</h4>
                    <p style="opacity: 0.7; font-size: 0.85rem; line-height: 1.6; margin-bottom: 1.5rem;">Subscribe for early booking updates, exclusive offers, and artisan stories.</p>
                    
                    <form style="display: flex; margin-bottom: 2rem; background: rgba(255,255,255,0.05); border-radius: 99px; overflow: hidden;">
                        <input type="email" placeholder="Your email address" style="background: transparent; border: none; padding: 12px 20px; color: white; width: 100%; outline: none; font-size: 0.85rem;">
                        <button type="submit" style="background: var(--primary); border: none; padding: 0 20px; color: white; cursor: pointer;"><i class="fa-solid fa-paper-plane"></i></button>
                    </form>

                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                        <li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.85rem; opacity: 0.8;">
                            <i class="fa-solid fa-envelope" style="color: var(--primary); margin-top: 3px;"></i> info@moryaarts.com
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.85rem; opacity: 0.8;">
                            <i class="fa-solid fa-phone" style="color: var(--primary); margin-top: 3px;"></i> +91 98765 43210
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.85rem; opacity: 0.8; line-height: 1.6;">
                            <i class="fa-solid fa-location-dot" style="color: var(--primary); margin-top: 3px;"></i> 102, Artisan Plaza, Near Dagdusheth Temple, Pune - 411002
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.85rem; opacity: 0.8;">
                            <i class="fa-regular fa-clock" style="color: var(--primary); margin-top: 3px;"></i> Mon - Sun: 9:00 AM - 9:00 PM
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; opacity: 0.6;">
                <p style="margin: 0;">Div Mangal Murtis | Made with <i class="fa-solid fa-heart" style="color: var(--primary);"></i> for Ganpati Bappa Devotees</p>
                <div style="display: flex; gap: 2rem;">
                    <a href="#" style="color: white; text-decoration: none;">Terms and Conditions</a>
                    <a href="#" style="color: white; text-decoration: none;">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>"""

content = content[:footer_start] + new_footer_html + content[footer_end:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated footer and added pre-footer CTA")
