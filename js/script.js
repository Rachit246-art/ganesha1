// Initialize Lucide Icons
lucide.createIcons();

// --- Theme Global Features ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Loader
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
        }, 1500); // 1.5s delay to show animation
    }

    // 2. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline && matchMedia('(pointer:fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Add a slight delay for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 150, fill: "forwards" });
        });

        // Add hover effect to links and buttons
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
        });
    }

    // 3. Scroll Progress Bar
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = `${scrollPx / winHeightPx * 100}%`;
            scrollProgress.style.width = scrolled;
        });
    }

    // 4. Swiper Hero Carousel
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.hero-swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-swiper-next',
                prevEl: '.hero-swiper-prev',
            },
        });
    }
});


// --- Modal Logic ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// --- Pre-fill Form from Gallery/Hero ---
function selectMurti(murtiName) {
    const selectEl = document.getElementById('murtiType');
    if (selectEl) {
        selectEl.value = murtiName;
    }
}

// --- Form Submission Logic ---
function submitForm(e) {
    e.preventDefault(); // Prevent page reload
    
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Original button content
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Processing...';
    lucide.createIcons();
    submitBtn.disabled = true;

    // Simulate API Call (800ms)
    setTimeout(() => {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        // Reset button state
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        lucide.createIcons();
    }, 800);
}

function resetForm() {
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-message');
    
    form.reset();
    
    successMsg.classList.add('hidden');
    form.classList.remove('hidden');
}

// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });



});

// --- Gallery Filter Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('#gallery-grid .gallery-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    });



});

// --- Mobile Menu Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if (mobileBtn && desktopNav) {
        mobileBtn.addEventListener('click', () => {
            desktopNav.classList.toggle('show-mobile-menu');
            
            // Toggle icon from menu to x
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (desktopNav.classList.contains('show-mobile-menu')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            }
        });
    }
});


// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create Lightbox DOM elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-prev">&#10094;</button>
        <img class="lightbox-content" src="" alt="">
        <button class="lightbox-next">&#10095;</button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    // Add click event to all images that should be in the lightbox
    // We target product images and gallery images
    const triggerImages = Array.from(document.querySelectorAll('.gallery-card img, .img-mosaic img, .product-card img, .gc-image img'));
    let currentImageIndex = 0;

    triggerImages.forEach((img, index) => {
        img.classList.add('lightbox-trigger');
        img.addEventListener('click', (e) => {
            e.preventDefault(); // prevent other click events if any
            currentImageIndex = index;
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent closing
        currentImageIndex = (currentImageIndex - 1 + triggerImages.length) % triggerImages.length;
        lightboxImg.src = triggerImages[currentImageIndex].src;
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent closing
        currentImageIndex = (currentImageIndex + 1) % triggerImages.length;
        lightboxImg.src = triggerImages[currentImageIndex].src;
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Products Filtering Logic
    const prodFilters = document.querySelectorAll('.prod-filter-btn');
    const prodCards = document.querySelectorAll('.prod-item');
    if(prodFilters.length > 0) {
        prodFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class
                prodFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                prodCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Testimonial Swiper Auto-Sliding
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.testi-swiper')) {
    const testiSwiper = new Swiper('.testi-swiper', {
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
        },
        on: {
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                const activeVideo = activeSlide.querySelector('video');
                if (activeVideo) {
                    this.autoplay.stop();
                    activeVideo.currentTime = 0;
                    activeVideo.play().catch(e => console.log('Autoplay prevented:', e));
                }
            },
            slideChangeTransitionEnd: function () {
                const allVideos = this.el.querySelectorAll('video');
                allVideos.forEach(v => {
                    v.pause();
                    v.currentTime = 0;
                });
                
                const activeSlide = this.slides[this.activeIndex];
                const activeVideo = activeSlide.querySelector('video');
                if (activeVideo) {
                    this.autoplay.stop();
                    activeVideo.play().catch(e => console.log('Autoplay prevented:', e));
                } else {
                    this.autoplay.start();
                }
            }
        }
    });

    const videos = document.querySelectorAll('.testi-swiper video');
    videos.forEach(video => {
        video.addEventListener('ended', () => {
            testiSwiper.slideNext();
            testiSwiper.autoplay.start();
        });
    });
}
});

// Collection Swiper
document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.collection-swiper')) {
        new Swiper('.collection-swiper', {
            slidesPerView: 1.5,
            spaceBetween: 20,
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                576: { slidesPerView: 2.5 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
                1280: { slidesPerView: 5.5 }
            }
        });
    }
});


// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            const body = card.querySelector('.faq-body');
            
            // Close others for a clean accordion effect
            document.querySelectorAll('.faq-card').forEach(c => {
                if(c !== card) {
                    c.classList.remove('active');
                    c.querySelector('.faq-body').style.maxHeight = null;
                }
            });

            if (card.classList.contains('active')) {
                card.classList.remove('active');
                body.style.maxHeight = null;
            } else {
                card.classList.add('active');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});
