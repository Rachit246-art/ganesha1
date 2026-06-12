import glob
import re

html_files = glob.glob("*.html")

proper_icon = '<i class="fa-brands fa-whatsapp" style="font-size: 35px; margin-top: 2px;"></i>'

# Regex to find the <a class="whatsapp-float">...</a> block
pattern = re.compile(r'(<a href="[^"]*wa\.me[^"]*" class="whatsapp-float"[^>]*>).*?(</a>)', re.DOTALL)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'whatsapp-float' in content:
        # Check if it has FontAwesome or SVG
        if 'fa-whatsapp' not in content.split('whatsapp-float')[1][:200]:
            content = pattern.sub(rf'\1\n        {proper_icon}\n    \2', content)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed WhatsApp icon in {file}")

print("WhatsApp icons updated.")
