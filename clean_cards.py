import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start and end of the Handcrafted With Love swiper
start_marker = '<div class="swiper collection-swiper"'
end_marker = '<!-- Testimonial Section -->'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find section boundaries")
    exit(1)

section_content = content[start_idx:end_idx]

# In the section, there are swiper-slides.
# We want to remove slides that DO NOT contain 'cc-code'.
# A slide starts with <div class="swiper-slide"> and ends with </div>
# But there are nested divs. 
# A safer way since the cards are uniformly formatted is regex.
# We can match `<div class="swiper-slide">...</div>`
# Wait, nested divs are tricky with regex. 
# But we can split the section by '<div class="swiper-slide">'

slides = section_content.split('<div class="swiper-slide">')
new_section = slides[0] # everything before the first slide

for slide in slides[1:]:
    # slide contains the rest of the file until the next slide.
    # Actually, the last slide will contain the closing tags of the wrapper.
    # Let's find if it has cc-code
    
    # We need to distinguish between the card content and the trailing wrapper closing tags
    # Since all cards have <div class="collection-card">, we can check that
    if '<div class="collection-card">' in slide:
        if 'cc-code' in slide:
            new_section += '<div class="swiper-slide">' + slide
        else:
            # We are removing this slide. 
            # But the very last slide will have </div>\n</div>\n</div>\n</section>...
            # We must NOT throw away the trailing tags!
            # The slide ends where the next slide would begin, or for the last slide, 
            # the card itself is closed with </div></div></div>
            # Let's find the end of the collection-card.
            # It's structured as:
            # <div class="collection-card">
            #   <div class="cc-image-wrapper">...</div>
            #   <div class="cc-content">...</div>
            # </div> (closes collection-card)
            # </div> (closes swiper-slide)
            
            # Since the structure is very consistent:
            # We find the string '<!-- Card 11 -->' etc.
            pass
            
            # Wait, the split approach above is dangerous for the last slide because 
            # if we omit it, we lose the closing tags of the swiper-wrapper.
            
            # Let's just use the exact line numbers from our previous view_file.
            # We saw Card 11 starts at <!-- Card 11 --> 
            # and Card 19 ends with its </div>
            
# Let's use a simpler approach: Just find Card 11 and remove everything up to the end of Card 19.
# From line 375 to line 491.
