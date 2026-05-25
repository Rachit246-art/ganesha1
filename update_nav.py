import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# The base links
nav_links = {
    'index.html': 'Home',
    'about.html': 'About Us',
    'why-choose-us.html': 'Why Us',
    'products.html': 'Our Products',
    'gallery.html': 'Gallery',
    'testimonials.html': 'Testimonials',
    'blogs.html': 'Blogs',
    'contact.html': 'Contact'
}

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generate new nav
    new_nav = '      <nav class="desktop-nav">\n'
    for href, text in nav_links.items():
        if file == href:
            new_nav += f'        <a href="{href}" class="nav-active">{text}</a>\n'
        else:
            new_nav += f'        <a href="{href}">{text}</a>\n'
    new_nav += '      </nav>'
    
    # Replace old nav
    # The old nav looks like: <nav class="desktop-nav"> ... </nav>
    content = re.sub(r'<nav class="desktop-nav">.*?</nav>', new_nav, content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated navigation in all HTML files.")
