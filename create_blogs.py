import re
import os

# We will use blogs.html as a template and replace the content area.
with open('blogs.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Extract everything up to the blogs section and after it
head_match = re.search(r'(.*?<!-- ── BLOGS SECTION ─────────────────────────────────────────── -->)', template, flags=re.DOTALL)
foot_match = re.search(r'(<!-- ── FOOTER ─────────────────────────────────────────────── -->.*)', template, flags=re.DOTALL)

if not head_match or not foot_match:
    print("Could not parse blogs.html template")
    exit()

head_part = head_match.group(1)
foot_part = foot_match.group(1)

# Remove active class from Blogs link since these are inner pages (optional, but good practice).
head_part = head_part.replace('<a href="blogs.html" class="nav-active">Blogs</a>', '<a href="blogs.html" class="nav-active">Blogs</a>')

blogs_data = [
    {
        'file': 'blog-eco.html',
        'title': 'The Importance of Eco-Friendly Visarjan',
        'content': '''
        <section class="ip-section bg-white">
            <div class="container" style="max-width: 800px; margin: auto;">
                <img src="images/our services/Eco-friendly.png" alt="Eco Friendly Ganesha" style="width: 100%; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 class="ip-title">Why an Eco-Friendly Ganesha Matters</h2>
                <div class="divider"></div>
                <p class="ip-body">Ganesh Chaturthi is a festival of devotion, joy, and community. But in recent years, the widespread use of Plaster of Paris (PoP) idols has caused significant harm to our rivers and oceans. PoP does not dissolve in water; it forms a thick sludge that kills marine life and poisons our drinking water sources.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">The Shadu Mati Difference</h3>
                <p class="ip-body">This is why at Div Mangal Murtis, we strictly use Shadu Mati (natural river clay). Shadu clay is sourced from the earth and returns to the earth. When immersed, a Shadu clay idol dissolves completely in water within a few hours, releasing no toxic chemicals.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">How to Perform a Home Visarjan</h3>
                <p class="ip-body">One of the most beautiful aspects of a clay Ganesha is the ability to perform the immersion (Visarjan) at home. Simply take a large tub or bucket, fill it with clean water, and gently immerse the idol. Once the clay has dissolved, you can pour this blessed water into your garden or house plants, ensuring that Bappa stays with you forever.</p>
            </div>
        </section>
        '''
    },
    {
        'file': 'blog-antique.html',
        'title': 'Discovering the Solapur Antique Style',
        'content': '''
        <section class="ip-section bg-white">
            <div class="container" style="max-width: 800px; margin: auto;">
                <img src="images/our services/custom murti.png" alt="Solapur Antique Style Ganesha" style="width: 100%; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 class="ip-title">The Heritage of Solapur Idols</h2>
                <div class="divider"></div>
                <p class="ip-body">Maharashtra is home to diverse styles of Ganesha idols, each representing a unique regional art form. Among these, the Solapur Antique style stands out for its majestic aura, traditional ornaments, and historical significance.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">Intricate Craftsmanship</h3>
                <p class="ip-body">A true Solapur antique idol is characterized by its detailed jewelry, specific posture (often seated on a grand singhasan), and a subtle, muted color palette that evokes a sense of ancient divinity. Our artisans spend weeks perfecting the fine lines of the crown (mukut) and the folds of the dhoti.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">Why Devotees Love This Style</h3>
                <p class="ip-body">Devotees often choose the Solapur antique style because it brings a royal, temple-like atmosphere directly into their homes. The serene, commanding presence of this idol style makes it the perfect centerpiece for grand household pujas and pandals alike.</p>
            </div>
        </section>
        '''
    },
    {
        'file': 'blog-seed.html',
        'title': 'Grow a Plant with Seed Ganesha',
        'content': '''
        <section class="ip-section bg-white">
            <div class="container" style="max-width: 800px; margin: auto;">
                <img src="images/our legacy.png" alt="Seed Ganesha" style="width: 100%; border-radius: 1rem; margin-bottom: 2rem;">
                <h2 class="ip-title">From Devotion to Creation</h2>
                <div class="divider"></div>
                <p class="ip-body">What if the divine presence of Lord Ganesha never actually left your home after the festival? This beautiful thought led to the creation of the Seed Ganesha — an idol that transforms into a living plant.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">How Does It Work?</h3>
                <p class="ip-body">Our Seed Ganeshas are sculpted using natural clay infused with organic potting soil, natural fertilizers, and seeds (such as Tulsi, Marigold, or Neem). The idol is painted with 100% natural, plant-based colors that are completely safe for germination.</p>
                
                <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.5rem; color:var(--stone-900);">The Visarjan Process</h3>
                <p class="ip-body">During Visarjan, instead of taking the idol to a river, you place it in a pot. As you gently water the idol, the clay dissolves, creating the perfect soil bed for the seeds hidden within. Within a few days, a sprout emerges. You are not saying goodbye to Bappa; you are welcoming him in a new, life-giving form.</p>
            </div>
        </section>
        '''
    }
]

for blog in blogs_data:
    # Update title in head part
    current_head = head_part.replace('<title>Blogs – Div Mangal Murtis</title>', f'<title>{blog["title"]} – Div Mangal Murtis</title>')
    current_head = current_head.replace('<h1 class="page-hero-title">Our <span class="text-amber">Blog</span></h1>', f'<h1 class="page-hero-title" style="font-size: 2.5rem;">{blog["title"]}</h1>')
    
    html = current_head + blog['content'] + '\n' + foot_part
    with open(blog['file'], 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Created {blog['file']}")

print("Inner blog pages created successfully.")
