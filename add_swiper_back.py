import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Define the HTML for the 3 slides
slide1 = """
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
                    </div>"""

slide2 = """
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
                    </div>"""

slide3 = """
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
                    </div>"""

# Duplicate slides so auto-play works nicely on desktop (3 items visible)
slides_html = slide1 + slide2 + slide3 + slide1 + slide2 + slide3

new_wrapper = f"""
            <div class="swiper testi-swiper" style="padding-bottom: 3rem; padding-left: 1rem; padding-right: 1rem; margin-left: -1rem; margin-right: -1rem; overflow: hidden;">
                <div class="swiper-wrapper">
                    {slides_html}
                </div>
                <div class="testi-swiper-pagination" style="text-align: center; margin-top: 1rem;"></div>
            </div>"""

# Replace the grid with the new swiper
pattern = re.compile(r'<div style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(300px, 1fr\)\); gap: 2rem; padding-bottom: 3rem;">.*?</div>\s+</div>\s+</section>', re.DOTALL)

html = pattern.sub(new_wrapper + '\n        </div>\n    </section>', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update script.js properly
with open('js/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

new_js = """
// Testimonial Swiper
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.testi-swiper')) {
        new Swiper('.testi-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
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
});
"""

if "testi-swiper" not in js:
    with open('js/script.js', 'a', encoding='utf-8') as f:
        f.write('\n' + new_js)

print("Testimonials Swiper Re-added!")
