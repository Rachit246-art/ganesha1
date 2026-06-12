import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_html = """<!-- Testimonials -->
    <section class="testimonials" style="background-color: var(--body-bg); padding: 5rem 0;">
        <div class="container relative z-10">
            <div class="section-header text-center" style="margin-bottom: 4rem;">
                <span class="subtitle" style="color: var(--accent); border: 1px solid var(--accent); padding: 5px 15px; border-radius: 99px; display: inline-block; margin-bottom: 1rem; font-size: 0.75rem; letter-spacing: 2px;">[ DEVOTEE EXPERIENCES ]</span>
                <h2 style="font-family: var(--font-serif); font-size: 3rem; font-weight: 700; color: var(--text); margin-bottom: 1rem;">What our devotees <span style="color: var(--accent);">are saying</span></h2>
                <p class="desc text-stone-300 mx-auto max-w-3xl" style="color: var(--text-muted);">Real stories of devotion and joy from across India. We pride ourselves on creating unforgettable, divine moments for every home.</p>
            </div>

            <div class="swiper testi-swiper" style="padding-bottom: 3rem; padding-left: 1rem; padding-right: 1rem; margin-left: -1rem; margin-right: -1rem;">
                <div class="swiper-wrapper">
                    <!-- Testimonial 1 -->
                    <div class="swiper-slide">
                        <div class="testi-card-new">
                            <div class="testi-header">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <div class="verified"><i class="fa-brands fa-google" style="margin-right: 4px;"></i> Verified</div>
                            </div>
                            <img src="images/Herosection/slide 1.png" alt="Testimonial Image" class="testi-img">
                            <p class="testi-text">"We ordered the 2.5 feet Dagdusheth style Ganesha last year. The detailing on the crown and the serene expression on Bappa's face brought tears of joy to our family. Truly divine craftsmanship!"</p>
                            <div class="testi-user">
                                <div class="user-initials">AD</div>
                                <div>
                                    <h4>Aniket Deshmukh</h4>
                                    <span>Google Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial 2 -->
                    <div class="swiper-slide">
                        <div class="testi-card-new">
                            <div class="testi-header">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <div class="verified"><i class="fa-brands fa-google" style="margin-right: 4px;"></i> Verified</div>
                            </div>
                            <img src="images/Herosection/slide 2.png" alt="Testimonial Image" class="testi-img">
                            <p class="testi-text">"The Tree Ganesha is a brilliant concept! The immersion was done in a pot on our balcony, and now we have a beautiful flowering plant growing from the clay. Highly recommend their eco-friendly idols."</p>
                            <div class="testi-user">
                                <div class="user-initials">PK</div>
                                <div>
                                    <h4>Priya Kulkarni</h4>
                                    <span>Google Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial 3 -->
                    <div class="swiper-slide">
                        <div class="testi-card-new">
                            <div class="testi-header">
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <div class="verified"><i class="fa-brands fa-google" style="margin-right: 4px;"></i> Verified</div>
                            </div>
                            <img src="images/Herosection/slide 3.png" alt="Testimonial Image" class="testi-img">
                            <p class="testi-text">"Outstanding service! They customized a 4-feet idol for our society pandal. The packaging was extremely secure, and they delivered it right on time with absolute care. Will book again!"</p>
                            <div class="testi-user">
                                <div class="user-initials">SM</div>
                                <div>
                                    <h4>Sanjay Mehta</h4>
                                    <span>Google Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testi-swiper-pagination" style="text-align: center; margin-top: 1rem;"></div>
            </div>
        </div>
    </section>"""

# Replace the block
pattern = re.compile(r'<!-- Testimonials -->.*?</section>', re.DOTALL)
html = pattern.sub(new_html, html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update CSS
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css = """
/* New Testimonial Styles */
.testi-card-new {
    background: white;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testi-card-new:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
}
.testi-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.testi-header .stars {
    color: var(--primary);
    font-size: 0.8rem;
    letter-spacing: 2px;
}
.testi-header .verified {
    font-size: 0.7rem;
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
}
.testi-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}
.testi-text {
    font-size: 0.95rem;
    font-style: italic;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}
.testi-user {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-top: 1px solid var(--border);
    padding-top: 1rem;
}
.user-initials {
    width: 40px;
    height: 40px;
    background-color: var(--primary-light);
    color: var(--primary-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
}
.testi-user h4 {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
}
.testi-user span {
    font-size: 0.75rem;
    color: #999;
}
.testi-swiper-pagination .swiper-pagination-bullet {
    background: #ccc;
    opacity: 0.5;
    transition: all 0.3s ease;
}
.testi-swiper-pagination .swiper-pagination-bullet-active {
    background: var(--primary);
    opacity: 1;
    width: 24px;
    border-radius: 12px;
}
"""
css += new_css
with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 3. Update JS
with open('js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_js = """
    // Testimonial Swiper
    if(document.querySelector('.testi-swiper')) {
        new Swiper('.testi-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.testi-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }
"""
if "testi-swiper" not in js:
    js = js.replace('});\n});', '});\n' + new_js + '\n});')
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(js)

print("Testimonials updated successfully.")
