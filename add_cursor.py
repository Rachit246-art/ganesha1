import glob
import re

html_files = glob.glob("*.html")

cursor_html = """
    <!-- CUSTOM CURSOR -->
    <div class="cursor-dot d-none d-lg-block"></div>
    <div class="cursor-outline d-none d-lg-block"></div>
"""

for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '<div class="cursor-dot' not in content:
        # Insert right after <body>
        content = re.sub(r'<body.*?>', lambda m: m.group(0) + cursor_html, content, count=1)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added cursor to {file}")

print("Cursor added to all inner pages.")
