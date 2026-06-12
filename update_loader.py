import os
import glob
import re

html_files = glob.glob("*.html")

new_loader = """        <div class="brand-loader text-center flex flex-col items-center">
          <img src="images/logo.png" alt="Div Mangal Murtis Logo" style="width: 250px; height: auto; margin-bottom: 1.5rem; animation: pulse 2s infinite ease-in-out; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));">
        </div>"""

pattern = re.compile(r'<div class="diorette-brand-loader">.*?</div>\s+</div>', re.DOTALL)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<div class="diorette-brand-loader">' in content:
        content = pattern.sub(new_loader + '\n      </div>', content)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated loader in {file}")

print("All files updated successfully.")
