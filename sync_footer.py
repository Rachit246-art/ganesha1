import glob
import os

# 1. Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Fix hero image sizing in index.html inline styles
index_content = index_content.replace('background-size: cover; background-position: top center;', 'background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #1a1410;')

# Write back index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_content)

# 2. Extract Pre-footer and Footer from index.html
pre_footer_start = index_content.find('<!-- Pre-Footer CTA -->')
footer_end = index_content.find('</footer>', pre_footer_start) + len('</footer>')
new_footer_block = index_content[pre_footer_start:footer_end]

# 3. Apply to all other html files
html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if pre-footer already exists to avoid duplication
    if '<!-- Pre-Footer CTA -->' in content:
        start_idx = content.find('<!-- Pre-Footer CTA -->')
    else:
        start_idx = content.find('<footer')
        
    if start_idx != -1:
        end_idx = content.find('</footer>', start_idx) + len('</footer>')
        new_content = content[:start_idx] + new_footer_block + content[end_idx:]
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
            print(f"Updated footer in {file}")

print("Sync complete.")
