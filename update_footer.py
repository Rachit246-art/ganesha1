import os

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace services.html with products.html in footer
    content = content.replace('href="services.html"', 'href="products.html"')
    # Replace reviews.html with testimonials.html in footer
    content = content.replace('href="reviews.html"', 'href="testimonials.html"')
    # Same for any #services anchors if present
    content = content.replace('href="index.html#services"', 'href="index.html#products"')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated footer links in all HTML files.")
