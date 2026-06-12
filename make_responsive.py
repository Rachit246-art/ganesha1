import glob
import re

html_files = glob.glob("*.html")

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean pre-footer-cta
    content = re.sub(
        r'<section class="pre-footer-cta" style="[^"]*">',
        r'<section class="pre-footer-cta">',
        content
    )

    # Clean cta-actions
    content = re.sub(
        r'<div class="cta-actions" style="[^"]*">',
        r'<div class="cta-actions">',
        content
    )

    # Clean footer
    content = re.sub(
        r'<footer class="footer" style="[^"]*">',
        r'<footer class="footer">',
        content
    )

    # Clean footer-grid
    content = re.sub(
        r'<div class="footer-grid" style="[^"]*">',
        r'<div class="footer-grid">',
        content
    )

    # Clean footer-bottom
    content = re.sub(
        r'<div class="footer-bottom" style="[^"]*">',
        r'<div class="footer-bottom">',
        content
    )
    
    # Also fix footer-bottom inner flex gap which might be broken
    content = re.sub(
        r'<div style="display: flex; gap: 2rem;">',
        r'<div class="footer-legal">',
        content
    )

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed inline styles from HTML.")

css_content = """
/* ---- RESPONSIVENESS FIXES ---- */
html, body {
    overflow-x: hidden;
    width: 100%;
}

.pre-footer-cta {
    background: linear-gradient(135deg, var(--accent) 0%, var(--primary-dark) 100%);
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    color: var(--white);
}

.footer {
    background-color: var(--body-bg-dark); /* or #1a1410 */
    color: #ffffff;
    padding: 5rem 0 2rem;
    position: relative;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

.cta-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    font-size: 0.75rem;
    opacity: 0.6;
}

.footer-legal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Tablet & Desktop */
@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: 2fr 1fr 1fr 2fr;
    }
    
    .cta-actions {
        flex-direction: row;
    }
    
    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
    
    .footer-legal {
        flex-direction: row;
        gap: 2rem;
    }
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write(css_content)

print("Appended responsive CSS.")
