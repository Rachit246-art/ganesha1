import re

# Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

# Remove the Core Values section and everything after it until the footer
about_html = re.sub(r'<!-- ── CORE VALUES ──────────────────────────────── -->.*?(<!-- ── FOOTER ─────────────────────────────────────────────── -->)', r'\1', about_html, flags=re.DOTALL)

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about_html)

# Update why-choose-us.html
with open('why-choose-us.html', 'r', encoding='utf-8') as f:
    wcu_html = f.read()

# Remove Opening Statement
wcu_html = re.sub(r'<!-- Opening Statement -->.*?</section>\n', '', wcu_html, flags=re.DOTALL)

# Remove Two-column story section
wcu_html = re.sub(r'<!-- Two-column story section -->.*?</section>\n', '', wcu_html, flags=re.DOTALL)

# Remove Stats Banner
wcu_html = re.sub(r'<!-- Stats Banner -->.*?</section>\n', '', wcu_html, flags=re.DOTALL)

# Remove Our Process
wcu_html = re.sub(r'<!-- Our Process -->.*?(<!-- Footer -->)', r'\1', wcu_html, flags=re.DOTALL)

with open('why-choose-us.html', 'w', encoding='utf-8') as f:
    f.write(wcu_html)

print("Inner pages cleaned up.")
