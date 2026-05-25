import re

# Update style.css
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix Button Gradients
css = css.replace(
    'background: linear-gradient(to right, var(--amber-600), var(--orange-600));',
    'background: linear-gradient(to right, var(--amber-600), var(--amber-700));'
)
css = css.replace(
    'background: linear-gradient(to right, var(--amber-500), var(--orange-500));',
    'background: linear-gradient(to right, var(--amber-500), var(--amber-600));'
)

# Fix Footer Background
# Currently: background-color: var(--orange-500); -> white
css = re.sub(
    r'\.footer {\s*background-color: var\(--orange-500\);',
    '.footer {\n    background-color: var(--amber-100);',
    css
)
css = re.sub(
    r'\.footer-bottom {\s*padding-top: 2rem;\s*border-top: 1px solid var\(--orange-600\);',
    '.footer-bottom {\n    padding-top: 2rem;\n    border-top: 1px solid var(--amber-400);',
    css
)

# Add CSS for values-grid and value-card if not present
if '.value-card' not in css:
    value_card_css = """
/* Values Grid for Why Choose Us */
.values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .values-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .values-grid { grid-template-columns: repeat(3, 1fr); }
}

.value-card {
    background: #ffffff;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border-top: 4px solid var(--amber-500);
    text-align: center;
}

.value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 182, 193, 0.3);
}

.value-icon {
    width: 4rem;
    height: 4rem;
    margin: 0 auto 1.5rem;
    background: var(--amber-100);
    color: var(--amber-600);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.value-icon i {
    width: 2rem;
    height: 2rem;
}

.value-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--stone-900);
    margin-bottom: 1rem;
    font-family: var(--font-serif);
}

.value-card p {
    color: var(--stone-600);
    font-size: 0.95rem;
    line-height: 1.6;
}
"""
    css += value_card_css

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated successfully.")
