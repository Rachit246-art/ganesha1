with open('js/script.js', 'a', encoding='utf-8') as f:
    f.write("""
// Testimonial Swiper Auto-Sliding
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
""")
print("Swiper logic appended.")
