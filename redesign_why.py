import re
import glob

# 1. Update HTML structure in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the content of <section id="why-us-cards"> ... </section>
# Let's extract the cards' content first
# Since we know the exact text, we can build the new HTML and replace the entire section.

new_html = """
    <!-- Why Choose Us – 6 Pointers -->
    <section id="why-us-cards" style="padding: 6rem 0; background: var(--body-bg);">
        <div class="container">
            <div class="why-us-split-layout">
                <!-- Left Text Column -->
                <div class="why-us-text-col">
                    <div class="section-header text-left" style="text-align: left;">
                        <span class="subtitle-pill">[ OUR PROMISE ]</span>
                        <h2 style="font-family: var(--font-serif); font-size: 3rem; font-weight: 700; color: var(--text); line-height: 1.2; margin-bottom: 1rem;">Why Choose <span class="heading-accent">Us</span></h2>
                        <p class="desc" style="margin-left: 0;">Six pillars that have kept our customers returning — and referring — year after year.</p>
                        <br>
                        <a href="#products" class="btn-primary" style="margin-top: 1rem; display: inline-block;">View Our Collection</a>
                    </div>
                </div>
                
                <!-- Right Grid Column -->
                <div class="why-us-grid-col">
                    <div class="values-grid">
                        <div class="value-card bg-white">
                            <div class="value-icon"><i data-lucide="clock"></i></div>
                            <h3>25+ YEARS OF MASTERY</h3>
                            <p>Three generations of artisans carry forward traditional techniques, refining them with every season of Ganesh Chaturthi.</p>
                        </div>
                        <div class="value-card bg-beige">
                            <div class="value-icon"><i data-lucide="leaf"></i></div>
                            <h3>100% ECO-FRIENDLY</h3>
                            <p>Natural Shadu clay and plant-based pigments only. Our idols dissolve naturally, leaving zero chemical residue in water bodies.</p>
                        </div>
                        <div class="value-card bg-beige">
                            <div class="value-icon"><i data-lucide="fingerprint"></i></div>
                            <h3>EVERY PIECE IS UNIQUE</h3>
                            <p>We do not mass-produce. Each idol is hand-sculpted — your Ganpati carries the subtle imprint of the artisan who created it.</p>
                        </div>
                        <div class="value-card bg-white">
                            <div class="value-icon"><i data-lucide="shield-check"></i></div>
                            <h3>QUALITY YOU CAN FEEL</h3>
                            <p>Before any idol leaves our studio, it passes a 12-point quality inspection — checking proportions, paint adhesion, and structural integrity.</p>
                        </div>
                        <div class="value-card bg-white">
                            <div class="value-icon"><i data-lucide="truck"></i></div>
                            <h3>SAFE, INSURED DELIVERY</h3>
                            <p>Every idol is packed in custom foam-fitted boxes. We offer insured shipping across India and international delivery on request.</p>
                        </div>
                        <div class="value-card bg-beige">
                            <div class="value-icon"><i data-lucide="heart-handshake"></i></div>
                            <h3>POST-PURCHASE CARE</h3>
                            <p>We guide you on idol care, puja setup, and eco-friendly Visarjan. Our team is reachable even after the festival for any restoration needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
"""

# Regex to replace the whole section
pattern = re.compile(r'<!-- Why Choose Us – 6 Pointers -->.*?</section>', re.DOTALL)
new_content = pattern.sub(new_html.strip(), content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

# 2. Update CSS in style.css
css_addition = """
/* ---- WHY CHOOSE US SPLIT LAYOUT ---- */
.why-us-split-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: start;
}

@media (min-width: 992px) {
    .why-us-split-layout {
        grid-template-columns: 1fr 1.5fr;
        gap: 5rem;
    }
}

.why-us-text-col {
    position: sticky;
    top: 120px;
}

/* Override existing values-grid columns */
.why-us-grid-col .values-grid {
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .why-us-grid-col .values-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Card Redesign based on Reference */
.why-us-grid-col .value-card {
    text-align: left;
    padding: 2.5rem;
    border-top: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.why-us-grid-col .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(201, 169, 110, 0.15);
}

.why-us-grid-col .value-card.bg-white {
    background-color: #ffffff;
}

.why-us-grid-col .value-card.bg-beige {
    background-color: var(--primary-light);
}

.why-us-grid-col .value-icon {
    width: auto;
    height: auto;
    background: transparent;
    border-radius: 0;
    margin: 0 0 1rem 0;
    justify-content: flex-start;
}

.why-us-grid-col .value-icon i {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--primary);
}

.why-us-grid-col .value-card h3 {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
    color: var(--dark);
}

.why-us-grid-col .value-card p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--text-muted);
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write(css_addition)

print("Why Choose Us section redesigned.")
