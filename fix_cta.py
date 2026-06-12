import os
import glob

html_files = glob.glob('*.html')

old_str = 'style="display: flex; flex-direction: column; md:flex-row; justify-content: space-between; align-items: center; gap: 3rem;"'
new_str = 'class="container relative z-10 pre-footer-content"'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_str in content:
        content = content.replace(f'class="container relative z-10" {old_str}', new_str)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
