import re

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove filter tabs from index.html gallery section
html = re.sub(r'<!-- Gallery Filter Tabs -->.*?</div>\s*<div id="gallery-grid"', '<div id="gallery-grid"', html, flags=re.DOTALL)
# Remove gallery card labels
html = re.sub(r'<div class="gallery-card-label">.*?</div>', '', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update gallery.html
with open('gallery.html', 'r', encoding='utf-8') as f:
    gal_html = f.read()

# Remove gallery card labels
gal_html = re.sub(r'<div class="gallery-card-label">.*?</div>', '', gal_html, flags=re.DOTALL)

with open('gallery.html', 'w', encoding='utf-8') as f:
    f.write(gal_html)

print("Gallery cleaned up in both index.html and gallery.html")
