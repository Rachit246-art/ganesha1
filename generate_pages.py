import os

# Directory where HTML files will be placed
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# Common header and footer (copied from index.html sections)
HEADER = """<header class=\"header\">\n    <div class=\"container header-container\">\n        <a href=\"index.html\" class=\"logo\">\n            <img src=\"images/logo.png\" alt=\"Div Mangal Murtis Logo\" class=\"logo-img\">\n        </a>\n        <nav class=\"desktop-nav\">\n            <a href=\"about.html\">About Us</a>\n            <a href=\"services.html\">Services</a>\n            <a href=\"gallery.html\">Gallery</a>\n            <a href=\"why-choose-us.html\">Why Us</a>\n            <a href=\"reviews.html\">Reviews</a>\n            <a href=\"faq.html\">FAQ</a>\n            <a href=\"contact.html\">Contact</a>\n        </nav>\n        <div class=\"header-cta\">\n            <a href=\"tel:+919876543210\" class=\"phone-link\"><i data-lucide=\"phone\"></i> <span>+91 98765 43210</span></a>\n            <a href=\"contact.html\" class=\"btn-primary\">Book Now</a>\n        </div>\n    </div>\n</header>"""

FOOTER = """<footer class=\"footer\">\n    <div class=\"container footer-container\">\n        <div class=\"footer-grid\">\n            <div class=\"footer-brand\">\n                <a href=\"index.html\" class=\"logo\">\n                    <img src=\"images/logo.png\" alt=\"Div Mangal Murtis Logo\" class=\"logo-img logo-img-footer\">\n                </a>\n                <p>Crafting premium, eco‑friendly, and traditional Ganesha idols with absolute devotion for over 25 years.</p>\n            </div>\n            <div class=\"footer-links\">\n                <h4>Quick Links</h4>\n                <ul>\n                    <li><a href=\"about.html\">About Us</a></li>\n                    <li><a href=\"services.html\">Services</a></li>\n                    <li><a href=\"gallery.html\">Gallery</a></li>\n                    <li><a href=\"contact.html\">Contact</a></li>\n                </ul>\n            </div>\n            <div class=\"footer-contact\">\n                <h4>Contact</h4>\n                <p><i data-lucide=\"mail\"></i> info@divmangal.com</p>\n                <p><i data-lucide=\"phone\"></i> +91 98765 43210</p>\n            </div>\n        </div>\n        <div class=\"footer-bottom\">\n            <p>&copy; 2026 Div Mangal Murtis. All rights reserved.</p>\n        </div>\n    </div>\n</footer>"""

# Simple page templates for each section
PAGES = {
    "about.html": {"title": "About Us", "content": "<section class=\"about-section\"><div class=\"container\"><h2>Our Story</h2><p>Div Mangal Murtis has been crafting premium Ganesha idols for over 25 years, blending traditional artistry with eco‑friendly materials. Our mission is to bring devotion and elegance to every home.</p></div></section>"},
    "services.html": {"title": "Our Services", "content": "<section class=\"services-section\"><div class=\"container\"><h2>What We Offer</h2><p>We provide four core services: Eco‑Friendly Clay Murtis, Custom Sculpting, Restoration & Repainting, and Safe Transit & Home Setup. Explore each service in our gallery for inspiration.</p></div></section>"},
    "gallery.html": {"title": "Murti Gallery", "content": "<section class=\"gallery-section\"><div class=\"container\"><h2>Our Creations</h2><p>Browse our curated collection of Ganesha idols below. Use the filter tabs to view each style.</p></div></section>"},
    "why-choose-us.html": {"title": "Why Choose Us", "content": "<section class=\"why-section\"><div class=\"container\"><h2>Why Choose Div Mangal Murtis?</h2><ul><li>25+ years of expertise</li><li>Eco‑friendly & premium materials</li><li>Hand‑crafted with devotion</li><li>Nationwide safe transit</li></ul></div></section>"},
    "reviews.html": {"title": "Customer Reviews", "content": "<section class=\"reviews-section\"><div class=\"container\"><h2>What Our Clients Say</h2><p>\"Our Ganesha Murti brought blessings to our home\" – Priya K.</p><p>\"Exceptional craftsmanship and service\" – Rahul S.</p></div></section>"},
    "faq.html": {"title": "FAQ", "content": "<section class=\"faq-section\"><div class=\"container\"><h2>Frequently Asked Questions</h2><dl><dt>How long does a custom order take?</dt><dd>Usually 2‑3 weeks depending on complexity.</dd><dt>Are your materials eco‑friendly?</dt><dd>Yes, we use river clay and non‑toxic pigments.</dd></dl></div></section>"},
    "contact.html": {"title": "Contact Us", "content": "<section class=\"contact-section\"><div class=\"container\"><h2>Get In Touch</h2><form id=\"booking-form\" onsubmit=\"submitForm(event)\"><label>Name<input type=\"text\" name=\"name\" required></label><label>Email<input type=\"email\" name=\"email\" required></label><label>Message<textarea name=\"message\"></textarea></label><button type=\"submit\" class=\"btn-primary\">Send</button></form></div></section>"},
}

HTML_HEAD = """<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{title}</title>\n    <link rel=\"stylesheet\" href=\"css/style.css\">\n    <script src=\"https://unpkg.com/lucide@latest\"></script>\n</head>\n<body>\n    {header}\n    {content}\n    {footer}\n    <script src=\"js/script.js\"></script>\n</body>\n</html>\n"""

for filename, data in PAGES.items():
    page_html = HTML_HEAD.format(title=data["title"], header=HEADER, content=data["content"], footer=FOOTER)
    path = os.path.join(BASE_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(page_html)
    print(f"Created {filename}")

print("All inner pages generated.")
