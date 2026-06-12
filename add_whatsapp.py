import glob
import re

html_files = glob.glob("*.html")

whatsapp_html = """
    <!-- WHATSAPP FLOAT -->
    <a href="https://wa.me/919876543210" target="_blank" class="whatsapp-float">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'whatsapp-float' not in content:
        # Insert right before </body>
        content = re.sub(r'</body>', lambda m: whatsapp_html + '\n' + m.group(0), content, count=1)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added WhatsApp button to {file}")

whatsapp_css = """
/* ---- WHATSAPP FLOAT ---- */
.whatsapp-float {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    z-index: 9999;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    text-decoration: none;
}
.whatsapp-float:hover {
    transform: scale(1.1) translateY(-5px);
    color: white;
    background-color: #20b858;
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
}
"""

with open('css/style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

if 'whatsapp-float' not in css_content:
    with open('css/style.css', 'a', encoding='utf-8') as f:
        f.write('\n' + whatsapp_css)
    print("Added WhatsApp CSS.")

print("WhatsApp floating button integration complete.")
