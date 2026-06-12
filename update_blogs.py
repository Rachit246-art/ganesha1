import re

# Update HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_blogs_html = """            <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div class="blog-card-new group">
                    <div class="blog-img-wrapper">
                        <span class="blog-badge">DEVOTION</span>
                        <img src="images/our services/Eco-friendly.png" alt="Eco-friendly Visarjan" class="blog-img">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="fa-regular fa-calendar" style="margin-right: 5px;"></i> April 4, 2026</span>
                            <span><i class="fa-regular fa-clock" style="margin-right: 5px;"></i> 8 min read</span>
                        </div>
                        <h3 class="blog-title">Blog 1: The Importance of Eco-Friendly Visarjan</h3>
                        <p class="blog-desc">Learn why choosing a clay Ganesha helps preserve our rivers and how you can perform a beautiful home visarjan.</p>
                        <a href="blog-eco.html" class="blog-link">READ MORE &rarr;</a>
                    </div>
                </div>
                
                <div class="blog-card-new group">
                    <div class="blog-img-wrapper">
                        <span class="blog-badge">HERITAGE</span>
                        <img src="images/our services/custom murti.png" alt="Solapur Antique Style" class="blog-img">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="fa-regular fa-calendar" style="margin-right: 5px;"></i> April 4, 2026</span>
                            <span><i class="fa-regular fa-clock" style="margin-right: 5px;"></i> 7 min read</span>
                        </div>
                        <h3 class="blog-title">Blog 2: Discovering the Solapur Antique Style</h3>
                        <p class="blog-desc">A deep dive into the rich heritage and intricate detailing of the traditional Solapur Ganesha murtis.</p>
                        <a href="blog-antique.html" class="blog-link">READ MORE &rarr;</a>
                    </div>
                </div>

                <div class="blog-card-new group">
                    <div class="blog-img-wrapper">
                        <span class="blog-badge">LIFESTYLE</span>
                        <img src="images/our legacy.png" alt="Seed Ganesha" class="blog-img">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="fa-regular fa-calendar" style="margin-right: 5px;"></i> April 4, 2026</span>
                            <span><i class="fa-regular fa-clock" style="margin-right: 5px;"></i> 9 min read</span>
                        </div>
                        <h3 class="blog-title">Blog 3: Grow a Plant with Seed Ganesha</h3>
                        <p class="blog-desc">Discover the magic of Seed Ganeshas. How a symbol of devotion transforms into a living plant in your home.</p>
                        <a href="blog-seed.html" class="blog-link">READ MORE &rarr;</a>
                    </div>
                </div>
            </div>"""

pattern = re.compile(r'<div class="services-grid".*?</div>\s+</div>\s+</section>', re.DOTALL)
new_section = new_blogs_html + '\n        </div>\n    </section>'
html = pattern.sub(new_section, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# Update CSS
new_css = """
/* ---- NEW BLOG CARD STYLES ---- */
.blog-card-new {
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.blog-card-new:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
.blog-img-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
}
.blog-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #ceaa71; /* Matching the gold/yellow */
    color: white;
    padding: 4px 14px;
    border-radius: 99px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 10;
    letter-spacing: 1px;
}
.blog-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
.blog-card-new:hover .blog-img {
    transform: scale(1.05);
}
.blog-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.blog-meta {
    display: flex;
    gap: 1.2rem;
    color: #999;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-family: var(--font-sans);
}
.blog-meta i {
    color: #ceaa71;
}
.blog-title {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1.4;
}
.blog-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}
.blog-link {
    color: #ceaa71;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease;
    display: inline-block;
}
.blog-link:hover {
    color: var(--primary-dark);
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write(new_css)

print("Blogs section redesigned.")
