import glob
import re
import os

css_addition = """
/* ---- HEADING ACCENTS ---- */
.subtitle-pill {
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 5px 15px;
    border-radius: 99px;
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: var(--font-sans);
    font-weight: 600;
}

.heading-accent {
    color: var(--accent);
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    if '.subtitle-pill' not in open('css/style.css', 'r', encoding='utf-8').read():
        f.write(css_addition)

def process_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to find blocks like:
    # <span class="subtitle">Some Text</span>
    # <h2>Some Heading Title</h2>
    # Note: Sometimes there are styles or other attributes.
    
    # Let's do it with a regex that finds the subtitle, then any whitespace, then the h2.
    # We will use re.sub with a custom function.
    
    pattern = re.compile(
        r'<span class="subtitle"[^>]*>([^<]+)</span>\s*<h2[^>]*>([^<]+)</h2>'
    )
    
    def replacer(match):
        subtitle_text = match.group(1).strip()
        h2_text = match.group(2).strip()
        
        # Format subtitle
        # Remove existing brackets if any
        clean_subtitle = subtitle_text.replace('[', '').replace(']', '').strip().upper()
        new_subtitle = f'<span class="subtitle-pill">[ {clean_subtitle} ]</span>'
        
        # Format h2 (wrap last word)
        words = h2_text.split()
        if len(words) > 1:
            last_word = words[-1]
            rest = " ".join(words[:-1])
            new_h2 = f'<h2>{rest} <span class="heading-accent">{last_word}</span></h2>'
        else:
            new_h2 = f'<h2>{h2_text}</h2>'
            
        return f'{new_subtitle}\n                {new_h2}'
        
    new_content = pattern.sub(replacer, content)
    
    # Also handle the case where they are already using the inline styles (like Testimonials and Contact)
    # We should clean them up to use the classes.
    # Example: <span class="subtitle" style="color: var(--accent); ...">[ DEVOTEE EXPERIENCES ]</span>
    # The regex above won't match if the <h2> has a span inside it.
    
    # Custom fix for Contact and Testimonials that already have the span
    pattern2 = re.compile(r'<span class="subtitle" style="[^"]*color:\s*var\(--accent\)[^"]*">\s*\[([^\]]+)\]\s*</span>\s*<h2[^>]*>(.*?)<span style="color:\s*var\(--accent\);">([^<]+)</span></h2>', re.DOTALL)
    
    def replacer2(match):
        subtitle_text = match.group(1).strip().upper()
        h2_rest = match.group(2).strip()
        h2_last = match.group(3).strip()
        
        new_subtitle = f'<span class="subtitle-pill">[ {subtitle_text} ]</span>'
        new_h2 = f'<h2>{h2_rest} <span class="heading-accent">{h2_last}</span></h2>'
        return f'{new_subtitle}\n                {new_h2}'
        
    new_content = pattern2.sub(replacer2, new_content)

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated headings in {file_path}")

html_files = glob.glob("*.html")
for file in html_files:
    process_html(file)

print("All headings updated.")
