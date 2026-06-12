import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix inline styles on slide-content
content = re.sub(
    r'<div class="slide-content" style="[^"]*">',
    r'<div class="slide-content">',
    content
)

# Fix inline styles on arrows (adding d-none d-md-block to hide them on mobile)
content = content.replace(
    '<div class="hero-swiper-prev" style="position: absolute; left: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-left fa-2x"></i></div>',
    '<div class="hero-swiper-prev d-none d-md-block" style="position: absolute; left: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-left fa-2x"></i></div>'
)

content = content.replace(
    '<div class="hero-swiper-next" style="position: absolute; right: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-right fa-2x"></i></div>',
    '<div class="hero-swiper-next d-none d-md-block" style="position: absolute; right: 1rem; top: 50%; z-index: 20; color: white; cursor: pointer;"><i class="fa-solid fa-chevron-right fa-2x"></i></div>'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html hero section updated.")

# Update CSS for hero
new_css = """
/* ---- HERO RESPONSIVE FIXES ---- */
.hero {
    height: 100vh;
    min-height: 550px;
    aspect-ratio: auto;
}

.slide-content {
    position: relative;
    z-index: 10;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    color: white;
}

.slide-title {
    font-size: 2.2rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.slide-desc {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

.slide-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
}

@media (min-width: 768px) {
    .hero {
        height: auto;
        aspect-ratio: 1717 / 916;
        min-height: auto;
    }
    .slide-content {
        padding: 4rem 10%;
        align-items: flex-start;
        text-align: left;
    }
    .slide-title {
        font-size: 4rem !important;
    }
    .slide-desc {
        font-size: 1.1rem;
        max-width: 600px;
    }
    .slide-actions {
        flex-direction: row;
        width: auto;
        max-width: none;
    }
}
"""

# Now we need to remove the old `.hero` aspect-ratio definition in style.css so it doesn't conflict.
with open('css/style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

css_content = re.sub(r'\.hero\s*\{[^}]*aspect-ratio:\s*1717\s*/\s*916;[^}]*\}', '', css_content)
css_content = re.sub(r'@media\s*\(\s*min-width:\s*768px\s*\)\s*\{\s*\.hero\s*\{[^}]*\}\s*\}', '', css_content)

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content + new_css)

print("Hero responsive CSS updated.")
