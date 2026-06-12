import glob

html_files = glob.glob("*.html")

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We need to find:
    # <div class="brand-loader ...">
    #   <img ...>
    # </div>
    # </div>
    # <div class="loader-bar">
    
    bad_string = """        </div>
      </div>
        <div class="loader-bar">"""
        
    good_string = """        </div>
        <div class="loader-bar">"""
        
    if bad_string in content:
        content = content.replace(bad_string, good_string)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file}")
        
    # Also wait, what if the exact whitespace doesn't match?
    # Let's use regex
    import re
    # Match brand-loader div, then an extra </div> before loader-bar
    pattern = re.compile(r'(<div class="brand-loader.*?>.*?</div>)\s+</div>\s+<div class="loader-bar">', re.DOTALL)
    if pattern.search(content):
        content = pattern.sub(r'\1\n        <div class="loader-bar">', content)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed with regex {file}")

